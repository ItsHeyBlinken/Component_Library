import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { RateLimitConfig } from '../../types';

export class RateLimitMiddleware {
  private static store = new Map<string, { count: number; resetTime: number }>();

  /**
   * Create rate limiter with express-rate-limit
   */
  static create(config: RateLimitConfig) {
    return rateLimit({
      windowMs: config.windowMs,
      max: config.max,
      message: config.message || 'Too many requests from this IP, please try again later.',
      statusCode: config.statusCode || 429,
      headers: config.headers !== false,
      skipSuccessfulRequests: config.skipSuccessfulRequests || false,
      skipFailedRequests: config.skipFailedRequests || false,
      keyGenerator: (req) => {
        // Use user ID if authenticated, otherwise use IP
        return (req as any).user?.id || req.ip || req.connection.remoteAddress || 'unknown';
      },
      handler: (req, res) => {
        res.status(429).json({
          success: false,
          error: 'RATE_LIMIT_EXCEEDED',
          message: 'Too many requests, please try again later.',
          retryAfter: Math.ceil(config.windowMs / 1000),
          timestamp: new Date().toISOString(),
          path: req.originalUrl
        });
      }
    });
  }

  /**
   * Create custom rate limiter with in-memory store
   */
  static createCustom(config: RateLimitConfig) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const key = this.getKey(req);
      const now = Date.now();
      const windowMs = config.windowMs;
      const max = config.max;

      // Get current rate limit info
      const current = this.store.get(key) || { count: 0, resetTime: now + windowMs };

      // Reset if window has passed
      if (now > current.resetTime) {
        current.count = 1;
        current.resetTime = now + windowMs;
      } else {
        current.count++;
      }

      // Update store
      this.store.set(key, current);

      // Check if limit exceeded
      if (current.count > max) {
        const retryAfter = Math.ceil((current.resetTime - now) / 1000);
        
        res.setHeader('Retry-After', retryAfter.toString());
        res.setHeader('X-RateLimit-Limit', max.toString());
        res.setHeader('X-RateLimit-Remaining', '0');
        res.setHeader('X-RateLimit-Reset', new Date(current.resetTime).toISOString());

        res.status(429).json({
          success: false,
          error: 'RATE_LIMIT_EXCEEDED',
          message: config.message || 'Too many requests, please try again later.',
          retryAfter,
          timestamp: new Date().toISOString(),
          path: req.originalUrl
        });
        return;
      }

      // Set rate limit headers
      res.setHeader('X-RateLimit-Limit', max.toString());
      res.setHeader('X-RateLimit-Remaining', Math.max(0, max - current.count).toString());
      res.setHeader('X-RateLimit-Reset', new Date(current.resetTime).toISOString());

      next();
    };
  }

  /**
   * Create rate limiter for specific routes
   */
  static createRouteLimiter(config: RateLimitConfig, route: string) {
    return rateLimit({
      ...config,
      keyGenerator: (req) => `${route}:${(req as any).user?.id || req.ip || req.connection.remoteAddress || 'unknown'}`,
      handler: (req, res) => {
        res.status(429).json({
          success: false,
          error: 'ROUTE_RATE_LIMIT_EXCEEDED',
          message: `Too many requests to ${route}, please try again later.`,
          retryAfter: Math.ceil(config.windowMs / 1000),
          timestamp: new Date().toISOString(),
          path: req.originalUrl,
          route
        });
      }
    });
  }

  /**
   * Create rate limiter for authentication endpoints
   */
  static createAuthLimiter(config: RateLimitConfig = { windowMs: 15 * 60 * 1000, max: 5 }) {
    return rateLimit({
      ...config,
      message: 'Too many authentication attempts, please try again later.',
      skipSuccessfulRequests: true,
      keyGenerator: (req) => {
        // Use IP for auth endpoints to prevent brute force
        return req.ip || req.connection.remoteAddress || 'unknown';
      },
      handler: (req, res) => {
        res.status(429).json({
          success: false,
          error: 'AUTH_RATE_LIMIT_EXCEEDED',
          message: 'Too many authentication attempts, please try again later.',
          retryAfter: Math.ceil(config.windowMs / 1000),
          timestamp: new Date().toISOString(),
          path: req.originalUrl
        });
      }
    });
  }

  /**
   * Create rate limiter for API endpoints
   */
  static createAPILimiter(config: RateLimitConfig = { windowMs: 15 * 60 * 1000, max: 100 }) {
    return rateLimit({
      ...config,
      message: 'API rate limit exceeded, please try again later.',
      keyGenerator: (req) => {
        // Use API key if provided, otherwise use user ID or IP
        return req.headers['x-api-key'] as string || 
               (req as any).user?.id || 
               req.ip || 
               req.connection.remoteAddress || 
               'unknown';
      },
      handler: (req, res) => {
        res.status(429).json({
          success: false,
          error: 'API_RATE_LIMIT_EXCEEDED',
          message: 'API rate limit exceeded, please try again later.',
          retryAfter: Math.ceil(config.windowMs / 1000),
          timestamp: new Date().toISOString(),
          path: req.originalUrl
        });
      }
    });
  }

  /**
   * Create rate limiter for file uploads
   */
  static createUploadLimiter(config: RateLimitConfig = { windowMs: 60 * 60 * 1000, max: 10 }) {
    return rateLimit({
      ...config,
      message: 'Too many file uploads, please try again later.',
      keyGenerator: (req) => {
        // Use user ID for upload limits
        return (req as any).user?.id || req.ip || req.connection.remoteAddress || 'unknown';
      },
      handler: (req, res) => {
        res.status(429).json({
          success: false,
          error: 'UPLOAD_RATE_LIMIT_EXCEEDED',
          message: 'Too many file uploads, please try again later.',
          retryAfter: Math.ceil(config.windowMs / 1000),
          timestamp: new Date().toISOString(),
          path: req.originalUrl
        });
      }
    });
  }

  /**
   * Get rate limit key for request
   */
  private static getKey(req: Request): string {
    // Use user ID if authenticated, otherwise use IP
    return (req as any).user?.id || req.ip || req.connection.remoteAddress || 'unknown';
  }

  /**
   * Get current rate limit info for a key
   */
  static getRateLimitInfo(key: string): { count: number; resetTime: number; remaining: number; limit: number } | null {
    const current = this.store.get(key);
    if (!current) return null;

    const now = Date.now();
    const limit = 100; // Default limit
    const remaining = Math.max(0, limit - current.count);

    return {
      count: current.count,
      resetTime: current.resetTime,
      remaining,
      limit
    };
  }

  /**
   * Reset rate limit for a key
   */
  static resetRateLimit(key: string): void {
    this.store.delete(key);
  }

  /**
   * Clear all rate limits
   */
  static clearAllRateLimits(): void {
    this.store.clear();
  }

  /**
   * Get rate limit statistics
   */
  static getStats(): { totalKeys: number; activeKeys: number } {
    const now = Date.now();
    let activeKeys = 0;

    for (const [, value] of this.store) {
      if (now < value.resetTime) {
        activeKeys++;
      }
    }

    return {
      totalKeys: this.store.size,
      activeKeys
    };
  }
}
