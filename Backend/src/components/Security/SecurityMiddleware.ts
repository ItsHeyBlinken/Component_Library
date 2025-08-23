import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

export class SecurityMiddleware {
  /**
   * Apply Helmet security headers
   */
  static helmet() {
    return helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", "data:", "https:"],
          connectSrc: ["'self'"],
          fontSrc: ["'self'"],
          objectSrc: ["'none'"],
          mediaSrc: ["'self'"],
          frameSrc: ["'none'"],
        },
      },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
      },
      noSniff: true,
      referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
      frameguard: { action: 'deny' },
      xssFilter: true,
      hidePoweredBy: true
    });
  }

  /**
   * Apply CORS configuration
   */
  static cors(options?: cors.CorsOptions) {
    const defaultOptions: cors.CorsOptions = {
      origin: process.env.CORS_ORIGIN || '*',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'X-API-Key'
      ],
      exposedHeaders: ['X-New-Token', 'X-Total-Count'],
      maxAge: 86400 // 24 hours
    };

    return cors({ ...defaultOptions, ...options });
  }

  /**
   * Apply compression middleware
   */
  static compression() {
    return compression({
      filter: (req, res) => {
        if (req.headers['x-no-compression']) {
          return false;
        }
        return compression.filter(req, res);
      },
      level: 6,
      threshold: 1024
    });
  }

  /**
   * Apply Morgan logging middleware
   */
  static logging(format?: string) {
    const logFormat = format || 'combined';
    
    if (process.env.NODE_ENV === 'development') {
      return morgan('dev');
    }
    
    return morgan(logFormat, {
      skip: (req, res) => res.statusCode < 400,
      stream: {
        write: (message: string) => {
          console.log(message.trim());
        }
      }
    });
  }

  /**
   * Security headers middleware
   */
  static securityHeaders(req: Request, res: Response, next: NextFunction): void {
    // Remove X-Powered-By header
    res.removeHeader('X-Powered-By');
    
    // Add custom security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    
    // Add request ID for tracking
    if (!req.headers['x-request-id']) {
      req.headers['x-request-id'] = this.generateRequestId();
    }
    res.setHeader('X-Request-ID', req.headers['x-request-id']);
    
    next();
  }

  /**
   * Request size limiter
   */
  static requestSizeLimit(maxSize: string = '10mb') {
    return (req: Request, res: Response, next: NextFunction): void => {
      const contentLength = parseInt(req.headers['content-length'] || '0');
      const maxSizeBytes = this.parseSize(maxSize);
      
      if (contentLength > maxSizeBytes) {
        res.status(413).json({
          success: false,
          error: 'Request too large',
          message: `Request size exceeds limit of ${maxSize}`
        });
        return;
      }
      
      next();
    };
  }

  /**
   * Method not allowed handler
   */
  static methodNotAllowed(allowedMethods: string[]) {
    return (req: Request, res: Response): void => {
      res.status(405).json({
        success: false,
        error: 'Method not allowed',
        message: `Method ${req.method} not allowed on this endpoint`,
        allowedMethods
      });
    };
  }

  /**
   * 404 handler for undefined routes
   */
  static notFound(req: Request, res: Response): void {
    res.status(404).json({
      success: false,
      error: 'Not found',
      message: `Route ${req.method} ${req.originalUrl} not found`,
      path: req.originalUrl,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Health check endpoint
   */
  static healthCheck(req: Request, res: Response): void {
    res.status(200).json({
      success: true,
      message: 'Service is healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0'
    });
  }

  /**
   * Generate unique request ID
   */
  private static generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Parse size string to bytes
   */
  private static parseSize(size: string): number {
    const units: { [key: string]: number } = {
      'b': 1,
      'kb': 1024,
      'mb': 1024 * 1024,
      'gb': 1024 * 1024 * 1024
    };
    
    const match = size.toLowerCase().match(/^(\d+(?:\.\d+)?)\s*(b|kb|mb|gb)$/);
    
    if (!match) {
      throw new Error(`Invalid size format: ${size}`);
    }
    
    const [, value, unit] = match;
    return parseFloat(value) * units[unit];
  }
}
