# Component Library - Quick Start Guide

A simple, step-by-step guide to using the component library in your projects.

## 📚 Table of Contents

1. [Quick Start - Frontend](#quick-start---frontend)
2. [Quick Start - Backend](#quick-start---backend)
3. [Viewing Components](#viewing-components)
4. [Copy/Paste Components](#copypaste-components)
5. [Common Use Cases](#common-use-cases)
6. [Component Examples](#component-examples)
7. [Troubleshooting](#troubleshooting)

---

## Viewing Components

### Frontend Components (Storybook)

```bash
cd Frontend
npm run storybook
```

Open `http://localhost:6006` to view:
- **Frontend Components**: Interactive UI components with live examples
- **Backend Components**: Code examples with copy/paste functionality

### Backend Components in Storybook

Backend components are now available in Storybook under the **"Backend Components"** section:

- **Security/AuthMiddleware** - JWT authentication
- **Security/OAuth2Middleware** - OAuth 2.0 flows
- **Security/RBACMiddleware** - Role-based access control
- **Security/SecurityMiddleware** - Security headers and CORS
- **Validation/RequestValidator** - Request validation
- **ErrorHandling/ErrorHandler** - Error handling

Each backend component story includes:
- ✅ Code examples you can copy/paste
- ✅ Complete usage examples
- ✅ Configuration options
- ✅ Best practices

### How to Copy Backend Component Code

1. Open Storybook: `npm run storybook` (in Frontend folder)
2. Navigate to **"Backend Components"** in the sidebar
3. Select a component (e.g., "Security/AuthMiddleware")
4. Click **"Copy Code"** button on any code example
5. Paste into your project!

---

## Quick Start - Frontend

### Step 1: View Components in Storybook

```bash
cd Frontend
npm run storybook
```

Open `http://localhost:6006` in your browser to see all components with live examples.

### Step 2: Copy a Component to Your Project

**Option A: Copy the entire component folder**

1. Go to `Frontend/src/components/Common/Button/`
2. Copy the entire `Button` folder to your project
3. Copy the theme provider: `Frontend/src/components/ThemeProvider/`
4. Copy types: `Frontend/src/types/`

**Option B: Import from the library (if published)**

```typescript
import { Button, ThemeProvider } from 'frontend-component-library';
```

### Step 3: Set Up Theme Provider

**IMPORTANT:** You MUST wrap your app with ThemeProvider for components to work!

```typescript
// App.tsx or main.tsx
import React from 'react';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Button } from './components/Common/Button';

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>My App</h1>
        <Button variant="primary">Click Me</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### Step 4: Use Components

```typescript
import { Button, Card, Input, Typography } from './components';

function MyPage() {
  return (
    <Card>
      <Typography variant="h1">Welcome</Typography>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

---

## Quick Start - Backend

### Step 1: View Backend Components in Storybook

```bash
cd Frontend
npm run storybook
```

Navigate to **"Backend Components"** in the sidebar to see all backend components with copy/paste code examples.

### Step 2: Copy Component Code

1. Open Storybook and go to the backend component you need
2. Click "Copy Code" on the example you want
3. Paste into your project

### Step 3: Set Up Express App

```typescript
import express from 'express';
import { 
  SecurityMiddleware, 
  AuthMiddleware,
  RequestValidator,
  ErrorHandler 
} from './components';

const app = express();

// 1. Security (apply first!)
app.use(SecurityMiddleware.helmet());
app.use(SecurityMiddleware.cors());
app.use(SecurityMiddleware.compression());

// 2. Initialize Auth (before routes)
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: '24h'
});

// 3. Routes
app.get('/api/public', (req, res) => {
  res.json({ message: 'Public endpoint' });
});

// 4. Protected routes
app.get('/api/protected', 
  AuthMiddleware.verifyToken,
  (req, res) => {
    res.json({ user: (req as any).user });
  }
);

// 5. Error handling (apply last!)
app.use(ErrorHandler.global());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## Copy/Paste Components

### How to Copy a Component

Each component is **self-contained** and ready to copy/paste:

#### Example: Copying the Button Component

1. **Copy these files:**
   ```
   Frontend/src/components/Common/Button/
   ├── Button.tsx          ← Main component
   ├── Button.stories.tsx  ← Examples (optional)
   └── index.ts            ← Export file
   ```

2. **Copy dependencies:**
   - `Frontend/src/components/ThemeProvider/` (REQUIRED)
   - `Frontend/src/types/index.ts` (REQUIRED)
   - `Frontend/src/types/styled.d.ts` (REQUIRED)

3. **Install dependencies:**
   ```bash
   npm install styled-components
   npm install --save-dev @types/styled-components
   ```

4. **Use it:**
   ```typescript
   import { Button } from './components/Button';
   import { ThemeProvider } from './components/ThemeProvider';
   
   function App() {
     return (
       <ThemeProvider>
         <Button variant="primary">Hello</Button>
       </ThemeProvider>
     );
   }
   ```

---

## Common Use Cases

### Use Case 1: Create a Login Form

```typescript
import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Card, Input, Button, Alert } from './components';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Your login logic here
  };

  return (
    <ThemeProvider>
      <Card style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h2>Login</h2>
        {error && <Alert variant="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '16px' }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '16px' }}
          />
          <Button type="submit" variant="primary" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </ThemeProvider>
  );
}
```

### Use Case 2: Create a Data Table

```typescript
import { ThemeProvider, Table } from './components';

const columns = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { key: 'role', title: 'Role' },
];

const data = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

function UserTable() {
  return (
    <ThemeProvider>
      <Table
        columns={columns}
        data={data}
        sortable
        pagination
        pageSize={10}
      />
    </ThemeProvider>
  );
}
```

### Use Case 3: Create a Form with Date Picker

```typescript
import { ThemeProvider, Input, DatePicker, Select, Button } from './components';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [country, setCountry] = useState<string | number>();

  const countries = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'Mexico', value: 'mx' },
  ];

  return (
    <ThemeProvider>
      <form>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <DatePicker
          placeholder="Select birth date"
          value={birthDate}
          onChange={(date) => setBirthDate(date as Date | null)}
        />
        
        <Select
          options={countries}
          value={country}
          onChange={(val) => setCountry(val as string | number)}
          placeholder="Select country"
        />
        
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </ThemeProvider>
  );
}
```

### Use Case 4: Backend - Protected API Route

```typescript
import express from 'express';
import { AuthMiddleware, RequestValidator, ResponseFormatter } from './components';

const app = express();

// Login endpoint
app.post('/api/login',
  RequestValidator.validateBody({
    email: 'required|email',
    password: 'required|min:8'
  }),
  async (req, res) => {
    const { email, password } = req.body;
    
    // Your authentication logic
    const user = await authenticateUser(email, password);
    
    if (user) {
      const token = AuthMiddleware.generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
        permissions: user.permissions || []
      });
      
      ResponseFormatter.success(res, { token, user });
    } else {
      ResponseFormatter.unauthorized(res, 'Invalid credentials');
    }
  }
);

// Protected endpoint
app.get('/api/profile',
  AuthMiddleware.verifyToken,
  (req, res) => {
    const user = (req as any).user;
    ResponseFormatter.success(res, { profile: user });
  }
);

// Admin-only endpoint
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requireRole('admin'),
  async (req, res) => {
    // Only admins can access this
    await deleteUser(req.params.id);
    ResponseFormatter.success(res, { message: 'User deleted' });
  }
);
```

### Use Case 5: Backend - OAuth2 Login

```typescript
import { OAuth2Middleware } from './components';

// Register OAuth provider (e.g., Google)
OAuth2Middleware.registerProvider('google', {
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenURL: 'https://oauth2.googleapis.com/token',
  userInfoURL: 'https://www.googleapis.com/oauth2/v2/userinfo',
  redirectURI: 'http://localhost:3000/api/auth/google/callback',
  scope: ['email', 'profile'],
  pkce: true // Recommended for security
});

// Get authorization URL
app.get('/api/auth/google', (req, res) => {
  OAuth2Middleware.getAuthorizationURL('google', req, res);
});

// Handle callback
app.get('/api/auth/google/callback',
  OAuth2Middleware.handleCallback('google'),
  (req, res) => {
    const { token, userInfo } = (req as any).oauth2;
    // Create or update user account
    ResponseFormatter.success(res, { token, user: userInfo });
  }
);
```

### Use Case 6: Backend - Role-Based Access Control

```typescript
import { RBACMiddleware } from './components';

// Initialize RBAC
RBACMiddleware.initialize({
  roles: [
    {
      name: 'admin',
      permissions: ['users.create', 'users.delete', 'users.update', 'users.read']
    },
    {
      name: 'moderator',
      permissions: ['users.read', 'users.update'],
      parent: 'user' // Inherits from 'user' role
    },
    {
      name: 'user',
      permissions: ['users.read']
    }
  ],
  enableInheritance: true
});

// Use in routes
app.get('/api/users',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requirePermission('users.read'),
  (req, res) => {
    // User must have 'users.read' permission
    ResponseFormatter.success(res, { users: [] });
  }
);

app.post('/api/users',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requireRole('admin'),
  (req, res) => {
    // Only admins can create users
    ResponseFormatter.success(res, { message: 'User created' });
  }
);
```

---

## Component Examples

### Button Component

```typescript
import { Button } from './components';

// Basic button
<Button>Click Me</Button>

// With variant
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="error">Error</Button>

// With size
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With loading state
<Button loading>Processing...</Button>

// Disabled
<Button disabled>Disabled</Button>

// Full width
<Button fullWidth>Full Width Button</Button>

// With icon
<Button icon={<Icon />} iconPosition="left">
  With Icon
</Button>
```

### Input Component

```typescript
import { Input } from './components';

// Basic input
<Input placeholder="Enter text" />

// With label
<Input label="Email" type="email" />

// With error
<Input error="This field is required" />

// Different sizes
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />

// Full width
<Input fullWidth placeholder="Full width input" />
```

### Table Component

```typescript
import { Table } from './components';

const columns = [
  { 
    key: 'name', 
    title: 'Name', 
    sortable: true,
    render: (value, record) => <strong>{value}</strong>
  },
  { key: 'email', title: 'Email', sortable: true },
  { key: 'status', title: 'Status' },
];

const data = [
  { id: '1', name: 'John', email: 'john@example.com', status: 'Active' },
  { id: '2', name: 'Jane', email: 'jane@example.com', status: 'Inactive' },
];

<Table
  columns={columns}
  data={data}
  sortable
  filterable
  pagination
  pageSize={10}
  rowSelection={{
    type: 'checkbox',
    onChange: (selectedKeys, selectedRows) => {
      console.log('Selected:', selectedKeys);
    }
  }}
/>
```

### Select Component

```typescript
import { Select } from './components';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

// Single select
<Select
  options={options}
  value={selectedValue}
  onChange={(val) => setSelectedValue(val)}
  placeholder="Select an option"
/>

// Multi-select
<Select
  options={options}
  multiple
  value={selectedValues}
  onChange={(vals) => setSelectedValues(vals as string[])}
  placeholder="Select multiple"
/>

// Searchable
<Select
  options={options}
  searchable
  placeholder="Search and select..."
/>

// With groups
const groupedOptions = [
  { label: 'Apple', value: 'apple', group: 'Fruits' },
  { label: 'Carrot', value: 'carrot', group: 'Vegetables' },
];

<Select
  options={groupedOptions}
  placeholder="Select a food"
/>
```

### DatePicker Component

```typescript
import { DatePicker } from './components';

// Basic date picker
<DatePicker
  value={date}
  onChange={(date) => setDate(date as Date | null)}
  placeholder="Select date"
/>

// With time
<DatePicker
  value={date}
  onChange={(date) => setDate(date as Date | null)}
  showTime
  placeholder="Select date and time"
/>

// Date range
<DatePicker
  mode="range"
  value={dateRange}
  onChange={(range) => setDateRange(range as [Date, Date] | null)}
  placeholder="Select date range"
/>

// With min/max dates
const minDate = new Date();
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 30);

<DatePicker
  minDate={minDate}
  maxDate={maxDate}
  placeholder="Select date (within range)"
/>

// Different formats
<DatePicker format="MM/DD/YYYY" />
<DatePicker format="DD/MM/YYYY" />
<DatePicker format="YYYY-MM-DD" />
```

### Modal Component

```typescript
import { Modal, Button } from './components';

const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="md"
>
  <p>Are you sure you want to proceed?</p>
  <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirm
    </Button>
  </div>
</Modal>
```

### Card Component

```typescript
import { Card } from './components';

// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// With title and subtitle
<Card title="Card Title" subtitle="Card subtitle">
  Content here
</Card>

// With header and footer
<Card
  header={<div>Custom Header</div>}
  footer={<Button>Action</Button>}
>
  Content
</Card>

// Interactive card
<Card
  hoverable
  onClick={() => console.log('Clicked')}
  interactive
>
  Clickable card
</Card>

// With elevation
<Card elevation="lg">Card with shadow</Card>
```

### Alert Component

```typescript
import { Alert } from './components';

// Different variants
<Alert variant="success">Success message</Alert>
<Alert variant="error">Error message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="info">Info message</Alert>

// Dismissible
<Alert
  variant="info"
  dismissible
  onDismiss={() => console.log('Dismissed')}
>
  This alert can be dismissed
</Alert>

// With actions
<Alert
  variant="warning"
  actions={
    <Button size="sm" onClick={handleAction}>
      Fix It
    </Button>
  }
>
  Warning with action button
</Alert>
```

### Toast Component

```typescript
import { Toast } from './components';

// Show toast (you'll need a toast manager in real apps)
<Toast
  message="Operation successful!"
  variant="success"
  duration={3000}
  position="top-right"
/>
```

### Loading Component

```typescript
import { Loading } from './components';

// Spinner
<Loading variant="spinner" />

// Dots
<Loading variant="dots" />

// Progress bar
<Loading variant="progress" progress={50} />

// Full screen overlay
<Loading variant="spinner" fullScreen />
```

### Layout Components

```typescript
import { Container, Grid, Stack, Box } from './components';

// Container (centers content with max width)
<Container maxWidth="lg">
  <h1>Centered Content</h1>
</Container>

// Grid (responsive grid layout)
<Grid columns={3} gap="md">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>

// Stack (vertical spacing)
<Stack spacing="md">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Stack>

// Box (flexible container)
<Box
  padding="md"
  margin="lg"
  backgroundColor="primary.light"
>
  Custom box
</Box>
```

### Navigation Components

```typescript
import { Menu, Breadcrumb, Tabs, Pagination } from './components';

// Menu
const menuItems = [
  { id: '1', label: 'Home', path: '/' },
  { id: '2', label: 'About', path: '/about' },
  { id: '3', label: 'Contact', path: '/contact' },
];

<Menu items={menuItems} />

// Breadcrumb
const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Current Page' },
];

<Breadcrumb items={breadcrumbItems} />

// Tabs
const tabItems = [
  { id: '1', label: 'Tab 1', content: <div>Content 1</div> },
  { id: '2', label: 'Tab 2', content: <div>Content 2</div> },
];

<Tabs items={tabItems} />

// Pagination
<Pagination
  current={1}
  total={100}
  pageSize={10}
  onChange={(page) => console.log('Page:', page)}
/>
```

---

## Backend Component Examples

### Security Middleware

```typescript
import { SecurityMiddleware } from './components';

const app = express();

// Apply all security middleware
app.use(SecurityMiddleware.helmet());
app.use(SecurityMiddleware.cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(SecurityMiddleware.compression());
app.use(SecurityMiddleware.morgan('combined'));
```

### Authentication

```typescript
import { AuthMiddleware } from './components';

// Initialize (do this once at app startup)
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: '24h',
  issuer: 'your-app-name',
  audience: 'your-app-users'
});

// Generate token
const token = AuthMiddleware.generateToken({
  id: user.id,
  email: user.email,
  role: user.role,
  permissions: user.permissions
});

// Protect route
app.get('/api/protected',
  AuthMiddleware.verifyToken,
  (req, res) => {
    const user = (req as any).user;
    res.json({ user });
  }
);

// Require specific role
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requireRole('admin'),
  (req, res) => {
    // Only admins can access
  }
);

// Require specific permission
app.post('/api/posts',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requirePermission('posts.create'),
  (req, res) => {
    // User must have 'posts.create' permission
  }
);
```

### Request Validation

```typescript
import { RequestValidator } from './components';

// Validate request body
app.post('/api/users',
  RequestValidator.validateBody({
    name: 'required|string|min:2|max:50',
    email: 'required|email|trim|toLowerCase',
    age: 'required|number|min:18|max:100',
    password: 'required|string|min:8|pattern:^(?=.*[A-Z])(?=.*[0-9])'
  }),
  (req, res) => {
    // req.body is validated and sanitized
    const { name, email, age, password } = req.body;
    // Create user...
  }
);

// Validate query parameters
app.get('/api/users',
  RequestValidator.validateQuery({
    page: 'number|min:1',
    limit: 'number|min:1|max:100',
    sort: 'string|in:name,email,createdAt'
  }),
  (req, res) => {
    // req.query is validated
  }
);

// Validate URL parameters
app.get('/api/users/:id',
  RequestValidator.validateParams({
    id: 'required|string|pattern:^[0-9a-f]{24}$'
  }),
  (req, res) => {
    // req.params.id is validated
  }
);
```

### Error Handling

```typescript
import { ErrorHandler, NotFoundError, ValidationError } from './components';

// Global error handler (apply last!)
app.use(ErrorHandler.global());

// Use custom errors in routes
app.get('/api/users/:id', async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    
    if (!user) {
      throw new NotFoundError('User not found');
    }
    
    res.json(user);
  } catch (error) {
    next(error); // Pass to error handler
  }
});

app.post('/api/users', async (req, res, next) => {
  try {
    if (!req.body.email) {
      throw new ValidationError('Email is required', {
        field: 'email',
        message: 'Email is required'
      });
    }
    
    const user = await createUser(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
```

### Logging

```typescript
import { Logger, appLogger, httpLogger } from './components';

// Use pre-configured loggers
appLogger.info('Application started');
appLogger.error('Something went wrong', { error: error.message });

httpLogger.logRequest(req, res, responseTime);

// Create custom logger
const dbLogger = new Logger('Database', {
  level: 'debug',
  format: 'json'
});

dbLogger.info('Database connection established');
dbLogger.error('Query failed', { query: 'SELECT * FROM users' });
```

### Response Formatting

```typescript
import { ResponseFormatter } from './components';

// Success response
ResponseFormatter.success(res, { data: 'value' }, 'Operation successful');

// Created response (201)
ResponseFormatter.created(res, newUser, 'User created successfully');

// Error responses
ResponseFormatter.badRequest(res, 'Invalid input');
ResponseFormatter.unauthorized(res, 'Authentication required');
ResponseFormatter.forbidden(res, 'Access denied');
ResponseFormatter.notFound(res, 'Resource not found');
ResponseFormatter.serverError(res, 'Internal server error');
```

### Pagination

```typescript
import { PaginationHelper } from './components';

app.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  
  const { offset, limit: pageLimit } = PaginationHelper.calculateOffset(page, limit);
  
  const users = await getUsers(offset, pageLimit);
  const total = await getUsersCount();
  
  const pagination = PaginationHelper.createPagination(page, limit, total);
  
  ResponseFormatter.success(res, users, undefined, pagination);
});
```

---

## Troubleshooting

### Frontend Issues

#### Problem: Components not showing / theme errors

**Solution:** Make sure ThemeProvider wraps your app:

```typescript
// ✅ CORRECT
function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  );
}

// ❌ WRONG
function App() {
  return <YourComponents />; // Missing ThemeProvider!
}
```

#### Problem: "Cannot read properties of undefined (reading 'spacing')"

**Solution:** This means ThemeProvider is missing. Wrap your app:

```typescript
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      {/* Your components */}
    </ThemeProvider>
  );
}
```

#### Problem: Styled-components not working

**Solution:** Install dependencies:

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

#### Problem: TypeScript errors

**Solution:** Make sure you copied the type definitions:

```
Frontend/src/types/
├── index.ts
└── styled.d.ts
```

### Backend Issues

#### Problem: Middleware not working

**Solution:** Check middleware order (security first, error handler last):

```typescript
// ✅ CORRECT ORDER
app.use(SecurityMiddleware.helmet());      // 1. Security
app.use(SecurityMiddleware.cors());        // 2. CORS
app.use(express.json());                   // 3. Body parser
app.use(AuthMiddleware.verifyToken);      // 4. Auth
app.use('/api', routes);                   // 5. Routes
app.use(ErrorHandler.global());            // 6. Error handler (LAST!)
```

#### Problem: "AuthMiddleware not initialized"

**Solution:** Initialize before using:

```typescript
// ✅ CORRECT
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET!,
  expiresIn: '24h'
});

app.use('/api/protected', AuthMiddleware.verifyToken);

// ❌ WRONG - Using before initialization
app.use('/api/protected', AuthMiddleware.verifyToken);
AuthMiddleware.initialize({ ... }); // Too late!
```

#### Problem: Validation not working

**Solution:** Make sure validation middleware is before route handler:

```typescript
// ✅ CORRECT
app.post('/api/users',
  RequestValidator.validateBody({ email: 'required|email' }),
  (req, res) => { /* handler */ }
);

// ❌ WRONG
app.post('/api/users',
  (req, res) => { /* handler */ },
  RequestValidator.validateBody({ email: 'required|email' }) // Too late!
);
```

---

## Quick Reference

### Frontend Component Props

**Button:**
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `disabled`: boolean
- `loading`: boolean
- `fullWidth`: boolean

**Input:**
- `type`: string (text, email, password, etc.)
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `error`: string
- `fullWidth`: boolean

**Table:**
- `columns`: Array of column definitions
- `data`: Array of data objects
- `sortable`: boolean
- `filterable`: boolean
- `pagination`: boolean
- `pageSize`: number

**Select:**
- `options`: Array of { label, value }
- `value`: string | number | array
- `multiple`: boolean
- `searchable`: boolean

**DatePicker:**
- `value`: Date | [Date, Date] | null
- `mode`: 'date' | 'datetime' | 'time' | 'range'
- `format`: 'YYYY-MM-DD' | 'MM/DD/YYYY' | 'DD/MM/YYYY'
- `showTime`: boolean

### Backend Middleware Usage

**SecurityMiddleware:**
- `SecurityMiddleware.helmet()` - Security headers
- `SecurityMiddleware.cors(options)` - CORS configuration
- `SecurityMiddleware.compression()` - Response compression

**AuthMiddleware:**
- `AuthMiddleware.initialize(config)` - Initialize JWT
- `AuthMiddleware.verifyToken` - Verify JWT token
- `AuthMiddleware.requireRole(role)` - Require specific role
- `AuthMiddleware.requirePermission(permission)` - Require permission

**RequestValidator:**
- `RequestValidator.validateBody(rules)` - Validate request body
- `RequestValidator.validateQuery(rules)` - Validate query params
- `RequestValidator.validateParams(rules)` - Validate URL params

**ErrorHandler:**
- `ErrorHandler.global()` - Global error handler (use last!)

---

## Need Help?

1. **View Components:** Run `npm run storybook` in Frontend folder
2. **Check Examples:** Look at `.stories.tsx` files for each component
3. **Read Code:** Each component is self-documented with comments
4. **Copy/Paste:** Components are designed to be easily copied to other projects

---

## Summary

**Frontend:**
1. Wrap app with `<ThemeProvider>`
2. Import and use components
3. Copy components to your project if needed

**Backend:**
1. Initialize middleware (Auth, RBAC, etc.)
2. Apply security middleware first
3. Apply error handler last
4. Use validation middleware before route handlers

That's it! You're ready to use the component library! 🚀

