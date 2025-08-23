import { Request, Response, NextFunction } from 'express';
import { ErrorConfig } from '../../types';

export class CustomError extends Error {
  public statusCode: number;
  public code: string;
  public isOperational: boolean;
  public timestamp: Date;

  constructor(
    message: string,
    statusCode: number = 500,
    code: string = 'INTERNAL_ERROR',
    isOperational: boolean = true
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = isOperational;
    this.timestamp = new Date();

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class ValidationError extends CustomError {
  constructor(message: string, code: string = 'VALIDATION_ERROR') {
    super(message, 400, code, true);
  }
}

export class AuthenticationError extends CustomError {
  constructor(message: string = 'Authentication failed', code: string = 'AUTHENTICATION_ERROR') {
    super(message, 401, code, true);
  }
}

export class AuthorizationError extends CustomError {
  constructor(message: string = 'Access denied', code: string = 'AUTHORIZATION_ERROR') {
    super(message, 403, code, true);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string = 'Resource not found', code: string = 'NOT_FOUND_ERROR') {
    super(message, 404, code, true);
  }
}

export class ConflictError extends CustomError {
  constructor(message: string = 'Resource conflict', code: string = 'CONFLICT_ERROR') {
    super(message, 409, code, true);
  }
}

export class RateLimitError extends CustomError {
  constructor(message: string = 'Too many requests', code: string = 'RATE_LIMIT_ERROR') {
    super(message, 429, code, true);
  }
}

export class DatabaseError extends CustomError {
  constructor(message: string = 'Database operation failed', code: string = 'DATABASE_ERROR') {
    super(message, 500, code, false);
  }
}

export class ExternalServiceError extends CustomError {
  constructor(message: string = 'External service error', code: string = 'EXTERNAL_SERVICE_ERROR') {
    super(message, 502, code, false);
  }
}

export class ErrorHandler {
  private static config: ErrorConfig = {
    includeStack: process.env.NODE_ENV === 'development',
    logErrors: true,
    formatErrors: true
  };

  /**
   * Initialize error handler with configuration
   */
  static initialize(config: Partial<ErrorConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Global error handling middleware
   */
  static global() {
    return (error: Error, req: Request, res: Response, next: NextFunction): void => {
      // Log error if enabled
      if (this.config.logErrors) {
        this.logError(error, req);
      }

      // Handle custom errors
      if (error instanceof CustomError) {
        this.handleCustomError(error, req, res);
        return;
      }

      // Handle validation errors from express-validator
      if (error.name === 'ValidationError') {
        this.handleValidationError(error, req, res);
        return;
      }

      // Handle JWT errors
      if (error.name === 'JsonWebTokenError') {
        this.handleJWTError(error, req, res);
        return;
      }

      // Handle other known errors
      if (error.name === 'CastError') {
        this.handleCastError(error, req, res);
        return;
      }

      if (error.name === 'MongoError' || error.name === 'MongooseError') {
        this.handleMongoError(error, req, res);
        return;
      }

      // Handle unknown errors
      this.handleUnknownError(error, req, res);
    };
  }

  /**
   * Handle custom errors
   */
  private static handleCustomError(error: CustomError, req: Request, res: Response): void {
    const response: any = {
      success: false,
      error: error.code,
      message: error.message,
      timestamp: error.timestamp.toISOString(),
      path: req.originalUrl
    };

    if (this.config.includeStack && error.stack) {
      response.stack = error.stack;
    }

    res.status(error.statusCode).json(response);
  }

  /**
   * Handle validation errors
   */
  private static handleValidationError(error: any, req: Request, res: Response): void {
    const response: any = {
      success: false,
      error: 'VALIDATION_ERROR',
      message: 'Validation failed',
      timestamp: new Date().toISOString(),
      path: req.originalUrl
    };

    if (error.errors && Array.isArray(error.errors)) {
      response.validationErrors = error.errors;
    }

    res.status(400).json(response);
  }

  /**
   * Handle JWT errors
   */
  private static handleJWTError(error: any, req: Request, res: Response): void {
    const response: any = {
      success: false,
      error: 'JWT_ERROR',
      message: 'Invalid or expired token',
      timestamp: new Date().toISOString(),
      path: req.originalUrl
    };

    res.status(401).json(response);
  }

  /**
   * Handle cast errors (usually from MongoDB)
   */
  private static handleCastError(error: any, req: Request, res: Response): void {
    const response: any = {
      success: false,
      error: 'CAST_ERROR',
      message: 'Invalid data format',
      timestamp: new Date().toISOString(),
      path: req.originalUrl
    };

    if (error.path) {
      response.field = error.path;
    }

    res.status(400).json(response);
  }

  /**
   * Handle MongoDB errors
   */
  private static handleMongoError(error: any, req: Request, res: Response): void {
    let statusCode = 500;
    let errorCode = 'DATABASE_ERROR';
    let message = 'Database operation failed';

    // Handle duplicate key errors
    if (error.code === 11000) {
      statusCode = 409;
      errorCode = 'DUPLICATE_KEY_ERROR';
      message = 'Resource already exists';
    }

    const response: any = {
      success: false,
      error: errorCode,
      message,
      timestamp: new Date().toISOString(),
      path: req.originalUrl
    };

    res.status(statusCode).json(response);
  }

  /**
   * Handle unknown errors
   */
  private static handleUnknownError(error: Error, req: Request, res: Response): void {
    const response: any = {
      success: false,
      error: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred',
      timestamp: new Date().toISOString(),
      path: req.originalUrl
    };

    if (this.config.includeStack && error.stack) {
      response.stack = error.stack;
    }

    res.status(500).json(response);
  }

  /**
   * Log error with context
   */
  private static logError(error: Error, req: Request): void {
    const errorInfo = {
      name: error.name,
      message: error.message,
      stack: error.stack,
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      timestamp: new Date().toISOString(),
      requestId: req.headers['x-request-id']
    };

    console.error('Error occurred:', JSON.stringify(errorInfo, null, 2));
  }

  /**
   * Async error wrapper for route handlers
   */
  static asyncHandler(fn: Function) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }

  /**
   * Create error response object
   */
  static createErrorResponse(
    error: string,
    message: string,
    statusCode: number = 500,
    details?: any
  ) {
    const response: any = {
      success: false,
      error,
      message,
      timestamp: new Date().toISOString()
    };

    if (details) {
      response.details = details;
    }

    return { response, statusCode };
  }

  /**
   * Check if error is operational
   */
  static isOperationalError(error: Error): boolean {
    if (error instanceof CustomError) {
      return error.isOperational;
    }
    return false;
  }

  /**
   * Process errors and determine if they should be logged
   */
  static processError(error: Error): void {
    if (!this.isOperationalError(error)) {
      // Log non-operational errors (system errors)
      console.error('Non-operational error:', error);
      
      // In production, you might want to send these to an error monitoring service
      if (process.env.NODE_ENV === 'production') {
        // Send to error monitoring service (e.g., Sentry, LogRocket)
        // this.sendToMonitoringService(error);
      }
    }
  }
}
