import { Response } from 'express';
import { BaseResponse, PaginatedResponse } from '../../types';

export class ResponseFormatter {
  /**
   * Send success response
   */
  static success<T>(
    res: Response,
    data: T,
    message: string = 'Success',
    statusCode: number = 200
  ): void {
    const response: BaseResponse<T> = {
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
      path: res.req.originalUrl
    };

    res.status(statusCode).json(response);
  }

  /**
   * Send error response
   */
  static error(
    res: Response,
    error: string,
    message: string = 'An error occurred',
    statusCode: number = 500,
    details?: any
  ): void {
    const response: BaseResponse = {
      success: false,
      error,
      message,
      timestamp: new Date().toISOString(),
      path: res.req.originalUrl
    };

    if (details) {
      (response as any).details = details;
    }

    res.status(statusCode).json(response);
  }

  /**
   * Send paginated response
   */
  static paginated<T>(
    res: Response,
    data: T[],
    page: number,
    limit: number,
    total: number,
    message: string = 'Success'
  ): void {
    const totalPages = Math.ceil(total / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;

    const response: PaginatedResponse<T> = {
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
      path: res.req.originalUrl,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext,
        hasPrev
      }
    };

    res.status(200).json(response);
  }

  /**
   * Send created response
   */
  static created<T>(
    res: Response,
    data: T,
    message: string = 'Resource created successfully'
  ): void {
    this.success(res, data, message, 201);
  }

  /**
   * Send no content response
   */
  static noContent(res: Response): void {
    res.status(204).send();
  }

  /**
   * Send bad request response
   */
  static badRequest(
    res: Response,
    error: string = 'BAD_REQUEST',
    message: string = 'Invalid request',
    details?: any
  ): void {
    this.error(res, error, message, 400, details);
  }

  /**
   * Send unauthorized response
   */
  static unauthorized(
    res: Response,
    error: string = 'UNAUTHORIZED',
    message: string = 'Authentication required'
  ): void {
    this.error(res, error, message, 401);
  }

  /**
   * Send forbidden response
   */
  static forbidden(
    res: Response,
    error: string = 'FORBIDDEN',
    message: string = 'Access denied'
  ): void {
    this.error(res, error, message, 403);
  }

  /**
   * Send not found response
   */
  static notFound(
    res: Response,
    error: string = 'NOT_FOUND',
    message: string = 'Resource not found'
  ): void {
    this.error(res, error, message, 404);
  }

  /**
   * Send conflict response
   */
  static conflict(
    res: Response,
    error: string = 'CONFLICT',
    message: string = 'Resource conflict'
  ): void {
    this.error(res, error, message, 409);
  }

  /**
   * Send too many requests response
   */
  static tooManyRequests(
    res: Response,
    error: string = 'TOO_MANY_REQUESTS',
    message: string = 'Rate limit exceeded'
  ): void {
    this.error(res, error, message, 429);
  }

  /**
   * Send internal server error response
   */
  static internalError(
    res: Response,
    error: string = 'INTERNAL_ERROR',
    message: string = 'Internal server error'
  ): void {
    this.error(res, error, message, 500);
  }

  /**
   * Send service unavailable response
   */
  static serviceUnavailable(
    res: Response,
    error: string = 'SERVICE_UNAVAILABLE',
    message: string = 'Service temporarily unavailable'
  ): void {
    this.error(res, error, message, 503);
  }

  /**
   * Send validation error response
   */
  static validationError(
    res: Response,
    errors: any[],
    message: string = 'Validation failed'
  ): void {
    this.badRequest(res, 'VALIDATION_ERROR', message, { validationErrors: errors });
  }

  /**
   * Send file download response
   */
  static fileDownload(
    res: Response,
    filePath: string,
    filename: string,
    contentType: string = 'application/octet-stream'
  ): void {
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.download(filePath, filename);
  }

  /**
   * Send file stream response
   */
  static fileStream(
    res: Response,
    stream: NodeJS.ReadableStream,
    filename: string,
    contentType: string = 'application/octet-stream'
  ): void {
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    stream.pipe(res);
  }

  /**
   * Send redirect response
   */
  static redirect(res: Response, url: string, statusCode: number = 302): void {
    res.redirect(statusCode, url);
  }

  /**
   * Send JSON response with custom headers
   */
  static jsonWithHeaders(
    res: Response,
    data: any,
    headers: { [key: string]: string },
    statusCode: number = 200
  ): void {
    Object.entries(headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    res.status(statusCode).json(data);
  }

  /**
   * Send response with cache headers
   */
  static cached(
    res: Response,
    data: any,
    maxAge: number = 3600,
    etag?: string
  ): void {
    res.setHeader('Cache-Control', `public, max-age=${maxAge}`);
    
    if (etag) {
      res.setHeader('ETag', etag);
    }

    res.status(200).json(data);
  }

  /**
   * Send response with CORS headers
   */
  static cors(
    res: Response,
    data: any,
    origin: string = '*',
    credentials: boolean = false
  ): void {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', credentials.toString());
    
    res.status(200).json(data);
  }
}
