# Backend Component Library

A comprehensive collection of reusable backend components, middleware, and utilities for Node.js applications built with TypeScript.

## 🚀 Features

- **Security Middleware**: Authentication, authorization, rate limiting, and security headers
- **Validation Utilities**: Request validation, data sanitization, and schema validation
- **Error Handling**: Centralized error handling with custom error classes
- **Logging**: Structured logging with Winston integration
- **File Handling**: File upload, processing, and storage utilities
- **Database Utilities**: Connection management, query builders, and migrations
- **API Utilities**: Response formatting, pagination, and filtering
- **Testing Utilities**: Mock generators, test helpers, and assertion utilities

## 📦 Installation

```bash
npm install backend-component-library
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Security/       # Authentication & security
│   ├── Validation/     # Data validation
│   ├── ErrorHandling/  # Error management
│   ├── Logging/        # Logging utilities
│   ├── FileHandling/   # File operations
│   ├── Database/       # Database utilities
│   ├── API/            # API utilities
│   └── Testing/        # Testing utilities
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
└── index.ts            # Main export file
```

## 🔧 Usage Examples

### Security Middleware

```typescript
import { 
  AuthMiddleware, 
  RateLimitMiddleware, 
  SecurityMiddleware 
} from 'backend-component-library';

// Apply security middleware
app.use(SecurityMiddleware.helmet());
app.use(SecurityMiddleware.cors());
app.use(RateLimitMiddleware.create({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(AuthMiddleware.verifyToken);
```

### Validation

```typescript
import { 
  RequestValidator, 
  SchemaValidator 
} from 'backend-component-library';

// Validate request body
const userSchema = {
  email: 'string|email|required',
  password: 'string|min:8|required'
};

app.post('/users', RequestValidator.validateBody(userSchema), createUser);
```

### Error Handling

```typescript
import { 
  ErrorHandler, 
  CustomError 
} from 'backend-component-library';

// Custom error
throw new CustomError('User not found', 404, 'USER_NOT_FOUND');

// Global error handler
app.use(ErrorHandler.global());
```

### Logging

```typescript
import { Logger } from 'backend-component-library';

const logger = new Logger('UserService');

logger.info('User created successfully', { userId: 123 });
logger.error('Failed to create user', { error: error.message });
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📚 Documentation

Each component includes:
- Comprehensive TypeScript interfaces
- Usage examples
- Configuration options
- Best practices
- Testing examples

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Related

- [Frontend Component Library](../Frontend/) - React components and UI utilities
- [Component Library Documentation](../Frontend/memory-bank/) - Project documentation and context
