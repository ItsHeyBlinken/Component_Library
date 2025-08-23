# Backend Component Library API Documentation

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Security Components](#security-components)
4. [Validation Components](#validation-components)
5. [Error Handling](#error-handling)
6. [Logging](#logging)
7. [API Utilities](#api-utilities)
8. [Examples](#examples)
9. [Testing](#testing)

## Overview

The Backend Component Library provides a comprehensive set of reusable components for building secure, scalable Node.js applications with Express. It includes authentication, validation, error handling, logging, and more.

## Installation

```bash
npm install backend-component-library
```

## Security Components

### AuthMiddleware

Handles JWT-based authentication and authorization.

#### Methods

##### `initialize(config: JWTConfig)`
Initialize the authentication middleware with JWT configuration.

```typescript
import { AuthMiddleware } from 'backend-component-library';

AuthMiddleware.initialize({
  secret: 'your-secret-key',
  expiresIn: '24h',
  issuer: 'your-app',
  audience: 'your-users'
});
```

##### `verifyToken(req, res, next)`
Verify JWT token from Authorization header.

```typescript
app.get('/protected', AuthMiddleware.verifyToken, (req, res) => {
  const user = req.user; // User object from token
  res.json({ message: 'Protected route', user });
});
```

##### `requireRole(roles: string | string[])`
Check if user has required role.

```typescript
app.get('/admin', 
  AuthMiddleware.verifyToken,
  AuthMiddleware.requireRole('admin'),
  (req, res) => {
    res.json({ message: 'Admin route' });
  }
);
```

##### `requirePermission(permissions: string | string[])`
Check if user has required permissions.

```typescript
app.post('/users',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requirePermission(['read', 'write']),
  (req, res) => {
    res.json({ message: 'User creation' });
  }
);
```

##### `generateToken(user: AuthUser)`
Generate JWT token for user.

```typescript
const token = AuthMiddleware.generateToken({
  id: '1',
  email: 'user@example.com',
  role: 'user',
  permissions: ['read']
});
```

### SecurityMiddleware

Provides security features like Helmet, CORS, and security headers.

#### Methods

##### `helmet()`
Apply Helmet security headers.

```typescript
app.use(SecurityMiddleware.helmet());
```

##### `cors(options?)`
Apply CORS configuration.

```typescript
app.use(SecurityMiddleware.cors({
  origin: 'https://yourdomain.com',
  credentials: true
}));
```

##### `compression()`
Apply compression middleware.

```typescript
app.use(SecurityMiddleware.compression());
```

##### `logging(format?)`
Apply Morgan logging middleware.

```typescript
app.use(SecurityMiddleware.logging('combined'));
```

##### `securityHeaders(req, res, next)`
Add custom security headers.

```typescript
app.use(SecurityMiddleware.securityHeaders);
```

##### `requestSizeLimit(maxSize: string)`
Limit request size.

```typescript
app.use(SecurityMiddleware.requestSizeLimit('10mb'));
```

##### `healthCheck(req, res)`
Health check endpoint.

```typescript
app.get('/health', SecurityMiddleware.healthCheck);
```

### RateLimitMiddleware

Provides rate limiting functionality.

#### Methods

##### `create(config: RateLimitConfig)`
Create rate limiter with express-rate-limit.

```typescript
app.use(RateLimitMiddleware.create({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // 100 requests per window
}));
```

##### `createAuthLimiter(config?)`
Create rate limiter for authentication endpoints.

```typescript
app.post('/login', 
  RateLimitMiddleware.createAuthLimiter({
    windowMs: 15 * 60 * 1000,
    max: 5
  }),
  loginHandler
);
```

##### `createAPILimiter(config?)`
Create rate limiter for API endpoints.

```typescript
app.use('/api', 
  RateLimitMiddleware.createAPILimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
);
```

## Validation Components

### RequestValidator

Provides request validation and sanitization.

#### Methods

##### `validateBody(schema: ValidationSchema)`
Validate request body.

```typescript
app.post('/users',
  RequestValidator.validateBody({
    'name|required|min:2': 'Name is required and must be at least 2 characters',
    'email|required|email': 'Email is required and must be valid',
    'age|toNumber|min:18': 'Age must be at least 18'
  }),
  createUser
);
```

##### `validateQuery(schema: ValidationSchema)`
Validate query parameters.

```typescript
app.get('/users',
  RequestValidator.validateQuery({
    'page|toNumber|min:1': 'Page must be a positive number',
    'limit|toNumber|min:1|max:100': 'Limit must be between 1 and 100'
  }),
  getUsers
);
```

##### `validateParams(schema: ValidationSchema)`
Validate route parameters.

```typescript
app.get('/users/:id',
  RequestValidator.validateParams({
    'id|required|uuid': 'ID must be a valid UUID'
  }),
  getUser
);
```

#### Validation Rules

- `required` - Field must be present and not empty
- `string` - Field must be a string
- `number` - Field must be a number
- `boolean` - Field must be a boolean
- `email` - Field must be a valid email
- `url` - Field must be a valid URL
- `min:value` - Field must have minimum length/value
- `max:value` - Field must have maximum length/value
- `length:value` - Field must have exact length/value
- `pattern:regex` - Field must match regex pattern
- `in:value1,value2` - Field must be one of the specified values
- `notIn:value1,value2` - Field must not be one of the specified values
- `alpha` - Field must contain only letters
- `alphanumeric` - Field must contain only letters and numbers
- `numeric` - Field must contain only digits
- `integer` - Field must be an integer
- `positive` - Field must be positive
- `negative` - Field must be negative
- `date` - Field must be a valid date
- `future` - Field must be a future date
- `past` - Field must be a past date
- `uuid` - Field must be a valid UUID
- `json` - Field must be valid JSON

#### Sanitization Rules

- `trim` - Remove leading/trailing whitespace
- `toLowerCase` - Convert to lowercase
- `toUpperCase` - Convert to uppercase
- `toNumber` - Convert to number
- `toBoolean` - Convert to boolean
- `escape` - Escape HTML entities
- `unescape` - Unescape HTML entities

## Error Handling

### CustomError Classes

The library provides several custom error classes:

```typescript
import { 
  ValidationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  DatabaseError,
  ExternalServiceError
} from 'backend-component-library';

// Usage examples
throw new ValidationError('Invalid input data');
throw new AuthenticationError('Invalid credentials');
throw new AuthorizationError('Insufficient permissions');
throw new NotFoundError('User not found');
throw new ConflictError('Email already exists');
throw new RateLimitError('Too many requests');
throw new DatabaseError('Connection failed');
throw new ExternalServiceError('API service down');
```

### ErrorHandler

Provides centralized error handling.

#### Methods

##### `global()`
Global error handling middleware.

```typescript
app.use(ErrorHandler.global());
```

##### `asyncHandler(fn: Function)`
Wrap async route handlers to catch errors.

```typescript
app.get('/users', ErrorHandler.asyncHandler(async (req, res) => {
  const users = await UserService.getAll();
  res.json(users);
}));
```

##### `createErrorResponse(error, message, statusCode, details?)`
Create standardized error response.

```typescript
const { response, statusCode } = ErrorHandler.createErrorResponse(
  'VALIDATION_ERROR',
  'Invalid input',
  400,
  { field: 'email' }
);
```

## Logging

### Logger

Provides structured logging with Winston.

#### Basic Usage

```typescript
import { Logger } from 'backend-component-library';

const logger = new Logger('UserService');

logger.info('User created', { userId: '123', email: 'user@example.com' });
logger.error('Failed to create user', { error: error.message });
logger.warn('User login attempt', { email: 'user@example.com' });
logger.debug('Processing request', { requestId: 'req_123' });
```

#### Specialized Loggers

```typescript
import { 
  appLogger, 
  httpLogger, 
  dbLogger, 
  authLogger, 
  securityLogger, 
  businessLogger 
} from 'backend-component-library';

// Use specialized loggers
httpLogger.logRequest(req, res, responseTime);
dbLogger.logDatabase('SELECT', 'users', duration);
authLogger.logAuth('login', userId);
securityLogger.logSecurity('failed_login', 'high', { ip: req.ip });
businessLogger.logBusiness('user_created', 'user', userId);
```

#### Configuration

```typescript
const logger = new Logger('MyService', {
  level: 'debug',
  format: 'json',
  transports: ['console', 'file'],
  filename: 'logs/myapp.log',
  maxSize: '20m',
  maxFiles: 5
});
```

## API Utilities

### ResponseFormatter

Provides standardized API responses.

#### Methods

##### `success(res, data, message?, statusCode?)`
Send success response.

```typescript
ResponseFormatter.success(res, { users }, 'Users retrieved successfully');
```

##### `error(res, error, message?, statusCode?, details?)`
Send error response.

```typescript
ResponseFormatter.error(res, 'VALIDATION_ERROR', 'Invalid input', 400);
```

##### `paginated(res, data, page, limit, total, message?)`
Send paginated response.

```typescript
ResponseFormatter.paginated(res, users, 1, 10, 100, 'Users retrieved');
```

##### `created(res, data, message?)`
Send created response.

```typescript
ResponseFormatter.created(res, newUser, 'User created successfully');
```

##### `badRequest(res, error?, message?, details?)`
Send bad request response.

```typescript
ResponseFormatter.badRequest(res, 'INVALID_EMAIL', 'Invalid email format');
```

##### `unauthorized(res, error?, message?)`
Send unauthorized response.

```typescript
ResponseFormatter.unauthorized(res, 'TOKEN_EXPIRED', 'Token has expired');
```

##### `forbidden(res, error?, message?)`
Send forbidden response.

```typescript
ResponseFormatter.forbidden(res, 'INSUFFICIENT_PERMISSIONS', 'Access denied');
```

##### `notFound(res, error?, message?)`
Send not found response.

```typescript
ResponseFormatter.notFound(res, 'USER_NOT_FOUND', 'User not found');
```

## Examples

### Complete Server Setup

```typescript
import express from 'express';
import { 
  AuthMiddleware, 
  SecurityMiddleware, 
  RequestValidator, 
  ErrorHandler, 
  ResponseFormatter, 
  RateLimitMiddleware,
  Logger 
} from 'backend-component-library';

const app = express();
const logger = new Logger('Server');

// Initialize authentication
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET || 'your-secret',
  expiresIn: '24h'
});

// Middleware
app.use(express.json());
app.use(SecurityMiddleware.helmet());
app.use(SecurityMiddleware.cors());
app.use(SecurityMiddleware.compression());
app.use(SecurityMiddleware.logging());
app.use(SecurityMiddleware.securityHeaders);

// Rate limiting
app.use(RateLimitMiddleware.create({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// Health check
app.get('/health', SecurityMiddleware.healthCheck);

// Routes
app.post('/auth/login', 
  RequestValidator.validateBody({
    'email|required|email': 'Email is required and must be valid',
    'password|required|min:6': 'Password must be at least 6 characters'
  }),
  async (req, res) => {
    try {
      const { email, password } = req.sanitizedBody;
      // Authentication logic here
      const token = AuthMiddleware.generateToken(user);
      ResponseFormatter.success(res, { token }, 'Login successful');
    } catch (error) {
      logger.error('Login error', { error: error.message });
      ResponseFormatter.internalError(res);
    }
  }
);

app.get('/protected',
  AuthMiddleware.verifyToken,
  (req, res) => {
    ResponseFormatter.success(res, { 
      message: 'Protected route',
      user: req.user 
    });
  }
);

// Error handling
app.use(ErrorHandler.global());

app.listen(3000, () => {
  logger.info('Server running on port 3000');
});
```

### Custom Validation Rules

```typescript
import { RequestValidator } from 'backend-component-library';

// Add custom validation rule
RequestValidator.addRule('strongPassword', (value) => {
  if (typeof value !== 'string') return false;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumbers = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
});

// Add custom sanitizer
RequestValidator.addSanitizer('capitalize', (value) => {
  if (typeof value !== 'string') return value;
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

// Use custom rules
app.post('/users',
  RequestValidator.validateBody({
    'password|required|strongPassword': 'Password must be strong',
    'name|required|capitalize|min:2': 'Name is required and must be at least 2 characters'
  }),
  createUser
);
```

## Testing

### Test Setup

```typescript
// tests/setup.ts
import { mockRequest, mockResponse, mockNext } from './setup';

describe('AuthMiddleware', () => {
  it('should verify valid token', () => {
    const req = mockRequest({
      headers: { authorization: 'Bearer valid-token' }
    });
    const res = mockResponse();
    const next = mockNext();

    AuthMiddleware.verifyToken(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(req.user).toBeDefined();
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --testPathPattern=AuthMiddleware.test.ts
```

## Best Practices

1. **Security First**: Always use security middleware and validate inputs
2. **Error Handling**: Use custom error classes and global error handler
3. **Logging**: Log important events and errors with appropriate levels
4. **Rate Limiting**: Apply rate limiting to prevent abuse
5. **Validation**: Validate all inputs and sanitize data
6. **Testing**: Write comprehensive tests for all components
7. **Configuration**: Use environment variables for sensitive configuration
8. **Monitoring**: Monitor application health and performance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details
