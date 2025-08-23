import winston from 'winston';
import { LogConfig } from '../../types';

export class Logger {
  private logger: winston.Logger;
  private context: string;

  constructor(context: string = 'Application', config?: Partial<LogConfig>) {
    this.context = context;
    this.logger = this.createLogger(config);
  }

  /**
   * Create Winston logger instance
   */
  private createLogger(config?: Partial<LogConfig>): winston.Logger {
    const defaultConfig: LogConfig = {
      level: 'info',
      format: 'json',
      transports: ['console'],
      filename: 'logs/app.log',
      maxSize: '20m',
      maxFiles: 5
    };

    const finalConfig = { ...defaultConfig, ...config };

    // Create format
    const format = this.createFormat(finalConfig.format);

    // Create transports
    const transports = this.createTransports(finalConfig);

    return winston.createLogger({
      level: finalConfig.level,
      format,
      transports,
      defaultMeta: { 
        service: this.context,
        timestamp: new Date().toISOString()
      },
      exitOnError: false
    });
  }

  /**
   * Create log format
   */
  private createFormat(format: string): winston.Logform.Format {
    switch (format) {
      case 'json':
        return winston.format.combine(
          winston.format.timestamp(),
          winston.format.errors({ stack: true }),
          winston.format.json()
        );
      case 'simple':
        return winston.format.combine(
          winston.format.timestamp(),
          winston.format.errors({ stack: true }),
          winston.format.simple()
        );
      case 'colorize':
        return winston.format.combine(
          winston.format.timestamp(),
          winston.format.errors({ stack: true }),
          winston.format.colorize(),
          winston.format.printf(({ timestamp, level, message, context, ...meta }) => {
            return `${timestamp} [${context || this.context}] ${level}: ${message} ${
              Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
            }`;
          })
        );
      default:
        return winston.format.combine(
          winston.format.timestamp(),
          winston.format.errors({ stack: true }),
          winston.format.json()
        );
    }
  }

  /**
   * Create transports
   */
  private createTransports(config: LogConfig): winston.transport[] {
    const transports: winston.transport[] = [];

    // Console transport
    if (config.transports.includes('console')) {
      transports.push(
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          )
        })
      );
    }

    // File transport
    if (config.transports.includes('file') && config.filename) {
      transports.push(
        new winston.transports.File({
          filename: config.filename,
          maxsize: this.parseSize(config.maxSize),
          maxFiles: config.maxFiles,
          tailable: true
        })
      );
    }

    // Error file transport
    if (config.transports.includes('file') && config.filename) {
      const errorFilename = config.filename.replace('.log', '.error.log');
      transports.push(
        new winston.transports.File({
          filename: errorFilename,
          level: 'error',
          maxsize: this.parseSize(config.maxSize),
          maxFiles: config.maxFiles,
          tailable: true
        })
      );
    }

    return transports;
  }

  /**
   * Parse size string to bytes
   */
  private parseSize(size: string): number {
    const units: { [key: string]: number } = {
      'b': 1,
      'kb': 1024,
      'mb': 1024 * 1024,
      'gb': 1024 * 1024 * 1024
    };
    
    const match = size.toLowerCase().match(/^(\d+(?:\.\d+)?)\s*(b|kb|mb|gb)$/);
    
    if (!match) {
      return 20 * 1024 * 1024; // Default to 20MB
    }
    
    const [, value, unit] = match;
    return parseFloat(value) * units[unit];
  }

  /**
   * Log info message
   */
  info(message: string, meta?: any): void {
    this.logger.info(message, { context: this.context, ...meta });
  }

  /**
   * Log error message
   */
  error(message: string, meta?: any): void {
    this.logger.error(message, { context: this.context, ...meta });
  }

  /**
   * Log warning message
   */
  warn(message: string, meta?: any): void {
    this.logger.warn(message, { context: this.context, ...meta });
  }

  /**
   * Log debug message
   */
  debug(message: string, meta?: any): void {
    this.logger.debug(message, { context: this.context, ...meta });
  }

  /**
   * Log HTTP request
   */
  logRequest(req: any, res: any, responseTime: number): void {
    const logData = {
      method: req.method,
      url: req.originalUrl || req.url,
      statusCode: res.statusCode,
      responseTime: `${responseTime}ms`,
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      requestId: req.headers['x-request-id'],
      userId: req.user?.id,
      contentLength: res.get('Content-Length')
    };

    if (res.statusCode >= 400) {
      this.error('HTTP Request', logData);
    } else {
      this.info('HTTP Request', logData);
    }
  }

  /**
   * Log database operation
   */
  logDatabase(operation: string, collection: string, duration: number, meta?: any): void {
    this.info('Database Operation', {
      operation,
      collection,
      duration: `${duration}ms`,
      ...meta
    });
  }

  /**
   * Log authentication event
   */
  logAuth(event: string, userId?: string, meta?: any): void {
    this.info('Authentication Event', {
      event,
      userId,
      ...meta
    });
  }

  /**
   * Log security event
   */
  logSecurity(event: string, severity: 'low' | 'medium' | 'high' | 'critical', meta?: any): void {
    const logMethod = severity === 'critical' ? 'error' : severity === 'high' ? 'warn' : 'info';
    
    this.logger[logMethod]('Security Event', {
      event,
      severity,
      context: this.context,
      ...meta
    });
  }

  /**
   * Log performance metric
   */
  logPerformance(metric: string, value: number, unit: string = 'ms', meta?: any): void {
    this.info('Performance Metric', {
      metric,
      value: `${value}${unit}`,
      ...meta
    });
  }

  /**
   * Log business event
   */
  logBusiness(event: string, entity: string, entityId?: string, meta?: any): void {
    this.info('Business Event', {
      event,
      entity,
      entityId,
      ...meta
    });
  }

  /**
   * Create child logger with additional context
   */
  child(additionalContext: string): Logger {
    const childLogger = new Logger(`${this.context}:${additionalContext}`);
    childLogger.logger = this.logger.child({ context: `${this.context}:${additionalContext}` });
    return childLogger;
  }

  /**
   * Set log level
   */
  setLevel(level: string): void {
    this.logger.level = level;
  }

  /**
   * Get current log level
   */
  getLevel(): string {
    return this.logger.level;
  }

  /**
   * Add custom transport
   */
  addTransport(transport: winston.transport): void {
    this.logger.add(transport);
  }

  /**
   * Remove transport
   */
  removeTransport(transport: winston.transport): void {
    this.logger.remove(transport);
  }

  /**
   * Close logger
   */
  close(): void {
    this.logger.close();
  }
}

// Create default application logger
export const appLogger = new Logger('Application');

// Create specialized loggers
export const httpLogger = new Logger('HTTP');
export const dbLogger = new Logger('Database');
export const authLogger = new Logger('Authentication');
export const securityLogger = new Logger('Security');
export const businessLogger = new Logger('Business');
