// Main export file for Backend Component Library

// Security Components
export { AuthMiddleware } from './components/Security/AuthMiddleware';
export { SecurityMiddleware } from './components/Security/SecurityMiddleware';

// Validation Components
export { RequestValidator } from './components/Validation/RequestValidator';

// Error Handling Components
export { 
  ErrorHandler, 
  CustomError, 
  ValidationError, 
  AuthenticationError, 
  AuthorizationError, 
  NotFoundError, 
  ConflictError, 
  RateLimitError, 
  DatabaseError, 
  ExternalServiceError 
} from './components/ErrorHandling/ErrorHandler';

// Logging Components
export { Logger, appLogger, httpLogger, dbLogger, authLogger, securityLogger, businessLogger } from './components/Logging/Logger';

// Types
export * from './types';

// Utilities
export { ResponseFormatter } from './components/API/ResponseFormatter';
export { PaginationHelper } from './components/API/PaginationHelper';
export { FileUploadHandler } from './components/FileHandling/FileUploadHandler';
export { DatabaseConnection } from './components/Database/DatabaseConnection';
export { RateLimitMiddleware } from './components/Security/RateLimitMiddleware';

// Default exports for convenience
export { default as BackendLibrary } from './components/Core/BackendLibrary';
