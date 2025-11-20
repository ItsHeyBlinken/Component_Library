# Component Library

A comprehensive collection of reusable React components and Node.js backend utilities for rapid development and consistent user experiences across projects.

## 📚 What's Included

### Frontend Components
- **Common Components**: Button, Input, Card, Typography, Table, Select, DatePicker
- **Layout Components**: Grid, Container, Stack, Box
- **Feedback Components**: Modal, Toast, Alert, Loading
- **Navigation Components**: Menu, Breadcrumb, Tabs, Pagination

### Backend Components
- **Security**: AuthMiddleware, OAuth2Middleware, RBACMiddleware, SecurityMiddleware
- **Validation**: RequestValidator
- **Error Handling**: ErrorHandler with custom error classes
- **Logging**: Logger with specialized loggers
- **API Utilities**: ResponseFormatter, PaginationHelper

## 🚀 Quick Start

### View Components Locally

```bash
cd Frontend
npm install
npm run storybook
```

Open `http://localhost:6006` to browse all components with interactive examples.

### View Components Online

The component library is deployed and accessible at: [Your Coolify URL]

Browse components, view code examples, and copy/paste code directly from the web interface.

## 📖 Documentation

- **[USAGE_GUIDE.md](./USAGE_GUIDE.md)** - Comprehensive usage guide with examples
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment instructions for Coolify VPS
- **[COOLIFY_SETUP.md](./COOLIFY_SETUP.md)** - Quick reference for Coolify configuration
- **[BACKEND_COMPONENTS_IN_STORYBOOK.md](./BACKEND_COMPONENTS_IN_STORYBOOK.md)** - Guide to backend components in Storybook

## 🏗️ Project Structure

```
Component_Library/
├── Frontend/               # React component library
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── types/          # TypeScript definitions
│   │   └── theme/         # Theme configuration
│   └── storybook-static/  # Built Storybook (for deployment)
├── Backend/                # Node.js component library
│   ├── src/
│   │   ├── components/     # Backend components
│   │   ├── types/         # TypeScript definitions
│   │   └── utils/         # Utility functions
│   └── examples/           # Example implementations
└── memory-bank/            # Project documentation
```

## 🎯 Features

- **TypeScript**: Full type safety across all components
- **Storybook**: Interactive component documentation
- **Copy/Paste Ready**: All components designed for easy integration
- **Self-Contained**: Each component is portable and independent
- **Comprehensive Examples**: Real-world usage examples for every component
- **Backend & Frontend**: Complete library for full-stack development

## 📦 Installation

### Frontend Components

```bash
cd Frontend
npm install
```

### Backend Components

```bash
cd Backend
npm install
```

## 🔧 Development

### Frontend

```bash
cd Frontend

# Start Storybook
npm run storybook

# Build library
npm run build

# Build Storybook for deployment
npm run build-storybook
```

### Backend

```bash
cd Backend

# Development mode (watch)
npm run dev

# Build
npm run build

# Test
npm test
```

## 🌐 Deployment

### Deploy to Coolify VPS

The component library can be deployed as a static site to Coolify. See the deployment guide for detailed instructions.

**Quick Setup (Option 1 - Static Site):**
1. Create Static Site resource in Coolify
2. Set build command: `cd Frontend && npm install && npm run build-storybook`
3. Set output directory: `Frontend/storybook-static`
4. Deploy!

**Alternative (Option 2 - Dockerfile):**
If the build command doesn't run, use the included Dockerfile:
1. Create Docker Compose/Dockerfile resource in Coolify
2. Dockerfile will be auto-detected from repository root
3. Deploy!

For detailed instructions, see:
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide
- **[COOLIFY_SETUP.md](./COOLIFY_SETUP.md)** - Quick reference values

## 📝 Usage

### Frontend Components

```typescript
import { Button, Card, Input } from './components';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Input placeholder="Enter text" />
        <Button variant="primary">Submit</Button>
      </Card>
    </ThemeProvider>
  );
}
```

### Backend Components

```typescript
import { AuthMiddleware, RequestValidator, ResponseFormatter } from './components';

// Initialize auth
AuthMiddleware.initialize({ secret: process.env.JWT_SECRET });

// Protect route
app.get('/api/protected',
  AuthMiddleware.verifyToken,
  (req, res) => {
    ResponseFormatter.success(res, { data: 'value' });
  }
);
```

For complete usage examples, see [USAGE_GUIDE.md](./USAGE_GUIDE.md).

## 🎨 Component Categories

### Frontend
- **Common**: Basic UI components (Button, Input, Card, etc.)
- **Layout**: Layout components (Grid, Container, Stack, Box)
- **Feedback**: User feedback (Modal, Toast, Alert, Loading)
- **Navigation**: Navigation components (Menu, Breadcrumb, Tabs, Pagination)

### Backend
- **Security**: Authentication and authorization
- **Validation**: Request validation and sanitization
- **Error Handling**: Centralized error handling
- **Logging**: Structured logging
- **API Utilities**: Response formatting and pagination

## 📚 Documentation

Each component includes:
- **Purpose**: What the component does
- **Use Cases**: When and how to use it
- **Props**: Complete prop documentation
- **Examples**: Interactive examples in Storybook
- **Code Examples**: Copy/paste ready code

## 🤝 Contributing

1. Create component following existing patterns
2. Add Storybook stories
3. Update documentation
4. Test thoroughly
5. Submit for review

## 📄 License

MIT License - feel free to use in your projects!

## 🔗 Links

- **Storybook (Local)**: `http://localhost:6006` (when running `npm run storybook`)
- **Storybook (Deployed)**: [Your Coolify URL]
- **Usage Guide**: [USAGE_GUIDE.md](./USAGE_GUIDE.md)
- **Deployment Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Happy Coding! 🎉**

