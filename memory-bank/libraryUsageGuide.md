# Component Library Usage Guide

This guide provides comprehensive instructions on how to use both the frontend and backend component libraries effectively, including development workflows, component usage patterns, and best practices.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Frontend Component Library](#frontend-component-library)
3. [Backend Component Library](#backend-component-library)
4. [Integration Examples](#integration-examples)
5. [Development Workflows](#development-workflows)
6. [Testing Guidelines](#testing-guidelines)
7. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

#### Frontend
- Node.js 18+ and npm
- React 18+
- TypeScript knowledge
- Familiarity with styled-components

#### Backend
- Node.js 18+ and npm
- Express.js knowledge
- TypeScript knowledge
- Understanding of middleware patterns

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd component-library

# Install Frontend dependencies
cd Frontend
npm install

# Install Backend dependencies
cd ../Backend
npm install

# Return to root
cd ..
```

### Project Structure

```
Component Library/
├── Frontend/               # Frontend component library
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── types/          # TypeScript definitions
│   │   └── theme/          # Theme configuration
│   └── stories/            # Storybook stories
├── Backend/                # Backend component library
│   ├── src/
│   │   ├── components/     # Backend components
│   │   ├── types/          # TypeScript definitions
│   │   └── utils/          # Utility functions
│   └── examples/           # Example implementations
└── memory-bank/            # Project documentation
```

## Frontend Component Library

### Starting Storybook

```bash
cd Frontend
npm run storybook
```

This opens Storybook at `http://localhost:6006` where you can:
- Browse all components
- View component variants
- Test component interactions
- Copy component code
- View component documentation

### Component Development Cycle

1. **Create Component Structure**
   ```bash
   # Create component directory
   mkdir src/components/category/ComponentName
   
   # Create required files
   touch src/components/category/ComponentName/ComponentName.tsx
   touch src/components/category/ComponentName/ComponentName.stories.tsx
   touch src/components/category/ComponentName/index.ts
   ```

2. **Implement Component** (`ComponentName.tsx`)
   - Define TypeScript interfaces
   - Implement component logic
   - Use styled-components for styling
   - Integrate with theme system

3. **Create Stories** (`ComponentName.stories.tsx`)
   - Document all component variants
   - Show different prop combinations
   - Include interactive examples
   - Add accessibility information

### Component Usage Patterns

#### Basic Component Import
```typescript
import { Button, Card, Typography } from 'frontend-component-library';

function MyComponent() {
  return (
    <Card>
      <Typography variant="h1">Hello World</Typography>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
```

#### Theme Integration
```typescript
import { ThemeProvider, Button } from 'frontend-component-library';

const customTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d'
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Button variant="primary">Themed Button</Button>
    </ThemeProvider>
  );
}
```

## Backend Component Library

### Starting Development Server

```bash
cd Backend
npm run dev
```

This starts TypeScript compilation in watch mode, automatically rebuilding when files change.

### Component Development Cycle

1. **Create Component Structure**
   ```bash
   # Create component directory
   mkdir src/components/category/ComponentName
   
   # Create required files
   touch src/components/category/ComponentName/ComponentName.ts
   touch src/components/category/ComponentName/ComponentName.test.ts
   touch src/components/category/ComponentName/index.ts
   ```

2. **Implement Component** (`ComponentName.ts`)
   - Define TypeScript interfaces
   - Implement middleware or utility functions
   - Use static methods for easy integration
   - Include proper error handling

3. **Create Tests** (`ComponentName.test.ts`)
   - Test all component methods
   - Use mock request/response objects
   - Test error conditions
   - Verify middleware behavior

### Component Usage Patterns

#### Basic Middleware Import
```typescript
import { 
  SecurityMiddleware, 
  AuthMiddleware, 
  RequestValidator 
} from 'backend-component-library';

const app = express();

// Apply security middleware
app.use(SecurityMiddleware.helmet());
app.use(SecurityMiddleware.cors());
app.use(SecurityMiddleware.compression());

// Apply authentication middleware
app.use('/api/protected', AuthMiddleware.verifyToken);
app.use('/api/admin', AuthMiddleware.requireRole('admin'));

// Apply validation middleware
app.post('/api/users', 
  RequestValidator.validateBody({
    email: 'required|email',
    password: 'required|min:8'
  }),
  createUser
);
```

#### Error Handling Integration
```typescript
import { ErrorHandler, CustomError } from 'backend-component-library';

// Global error handling
app.use(ErrorHandler.global());

// Custom error in route handler
app.get('/api/users/:id', async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});
```

#### Logging Integration
```typescript
import { Logger, appLogger, httpLogger } from 'backend-component-library';

// Use specialized loggers
appLogger.info('Application started');
httpLogger.logRequest(req, res, responseTime);

// Create custom logger
const dbLogger = new Logger('Database', {
  level: 'debug',
  format: 'json'
});
```

## Integration Examples

### Frontend-Backend Authentication Flow

#### Frontend: Login Component
```typescript
import { Button, Input, Card } from 'frontend-component-library';

function LoginForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('authToken', token);
        // Redirect to dashboard
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Card>
      <Input
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <Button onClick={handleLogin}>Login</Button>
    </Card>
  );
}
```

#### Backend: Authentication Endpoint
```typescript
import { 
  AuthMiddleware, 
  RequestValidator, 
  ResponseFormatter,
  Logger 
} from 'backend-component-library';

const authLogger = new Logger('Authentication');

app.post('/api/auth/login', 
  RequestValidator.validateBody({
    email: 'required|email',
    password: 'required'
  }),
  async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Verify credentials (implementation details)
      const user = await verifyCredentials(email, password);
      
      if (user) {
        const token = AuthMiddleware.generateToken(user);
        authLogger.info('User logged in successfully', { email: user.email });
        ResponseFormatter.success(res, { token, user });
      } else {
        ResponseFormatter.unauthorized(res, 'Invalid credentials');
      }
    } catch (error) {
      authLogger.error('Login failed', { error: error.message });
      next(error);
    }
  }
);
```

### Form Validation Integration

#### Frontend: Form with Validation
```typescript
import { Button, Input, Alert } from 'frontend-component-library';

function UserForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
      />
      {errors.name && <Alert variant="error">{errors.name}</Alert>}
      
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />
      {errors.email && <Alert variant="error">{errors.email}</Alert>}
      
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

#### Backend: Validation Middleware
```typescript
import { RequestValidator, ResponseFormatter } from 'backend-component-library';

app.post('/api/users',
  RequestValidator.validateBody({
    name: 'required|trim|min:2',
    email: 'required|email|trim|toLowerCase'
  }),
  async (req, res) => {
    try {
      // req.body is now validated and sanitized
      const { name, email } = req.body;
      
      // Create user (implementation details)
      const user = await createUser({ name, email });
      
      ResponseFormatter.created(res, user, 'User created successfully');
    } catch (error) {
      next(error);
    }
  }
);
```

## Development Workflows

### Frontend Development
1. **Component Creation**: Create component with TypeScript interfaces
2. **Story Development**: Build comprehensive Storybook stories
3. **Theme Integration**: Ensure proper theme usage
4. **Testing**: Write Jest + React Testing Library tests
5. **Documentation**: Update component documentation

### Backend Development
1. **Component Creation**: Create middleware or utility with TypeScript
2. **Testing**: Write comprehensive Jest tests
3. **Example Integration**: Test in example server
4. **Documentation**: Update API documentation
5. **Error Handling**: Ensure proper error handling

### Integration Development
1. **API Alignment**: Ensure frontend and backend APIs match
2. **Type Sharing**: Align TypeScript interfaces
3. **Error Handling**: Consistent error formats
4. **Testing**: End-to-end integration tests

## Testing Guidelines

### Frontend Testing
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'frontend-component-library';
import { Button } from 'frontend-component-library';

test('Button renders with correct text', () => {
  render(
    <ThemeProvider>
      <Button>Click me</Button>
    </ThemeProvider>
  );
  
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### Backend Testing
```typescript
import { mockRequest, mockResponse, mockNext } from './tests/setup';
import { AuthMiddleware } from 'backend-component-library';

test('AuthMiddleware verifies valid token', () => {
  const req = mockRequest({
    headers: { authorization: 'Bearer valid-token' }
  });
  const res = mockResponse();
  const next = mockNext();

  AuthMiddleware.verifyToken(req, res, next);

  expect(next).toHaveBeenCalled();
  expect(req.user).toBeDefined();
});
```

## Troubleshooting

### Common Frontend Issues
- **Theme not working**: Ensure ThemeProvider wraps components
- **Styled-components errors**: Check version compatibility
- **TypeScript errors**: Verify type definitions

### Common Backend Issues
- **Middleware not working**: Check middleware order
- **Authentication failing**: Verify JWT configuration
- **Validation errors**: Check validation schema

### Integration Issues
- **API mismatches**: Align frontend and backend interfaces
- **Type errors**: Ensure shared type definitions
- **CORS issues**: Check backend CORS configuration
