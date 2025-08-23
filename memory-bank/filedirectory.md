# File Directory

## Project Root
```
Component Library/
├── Frontend/               # Frontend component library
├── Backend/                # Backend component library
├── memory-bank/            # Project documentation and context
├── .gitignore             # Git ignore patterns
└── README.md              # Project overview
```

## Frontend Directory Structure

### Project Root
```
Frontend/
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependency versions
├── tsconfig.json            # TypeScript configuration
├── tsconfig.config.json     # Additional TypeScript config
├── vite.config.ts           # Vite build configuration
├── README.md                # Project documentation
└── .gitignore              # Git ignore patterns
```

### Source Code (`src/`)
```
src/
├── index.ts                 # Main library export file
├── components/              # React component library
│   ├── Common/             # Basic UI components
│   │   ├── Button/         # Button component
│   │   │   ├── Button.tsx  # Main Button component
│   │   │   ├── Button.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   ├── Card/           # Card component
│   │   │   ├── Card.tsx    # Main Card component
│   │   │   ├── Card.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   ├── Input/          # Input component
│   │   │   ├── Input.tsx   # Main Input component
│   │   │   ├── Input.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   └── Typography/     # Typography component
│   │       ├── Typography.tsx  # Main Typography component
│   │       ├── Typography.stories.tsx  # Storybook stories
│   │       └── index.ts    # Component export
│   ├── Layout/             # Layout and structure components
│   │   ├── Container/      # Container component
│   │   │   ├── Container.tsx  # Main Container component
│   │   │   ├── Container.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   ├── Grid/           # Grid component
│   │   │   ├── Grid.tsx    # Main Grid component
│   │   │   ├── Grid.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   ├── Stack/          # Stack component
│   │   │   ├── Stack.tsx   # Main Stack component
│   │   │   ├── Stack.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   └── Box/            # Box component
│   │       ├── Box.tsx     # Main Box component
│   │       ├── Box.stories.tsx  # Storybook stories
│   │       └── index.ts    # Component export
│   ├── Feedback/           # Feedback and notification components
│   │   ├── Modal/          # Modal dialog component
│   │   │   ├── Modal.tsx   # Main Modal component
│   │   │   ├── Modal.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   ├── Toast/          # Toast notification component
│   │   │   ├── Toast.tsx   # Main Toast component
│   │   │   ├── Toast.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   ├── Alert/          # Alert notification component
│   │   │   ├── Alert.tsx   # Main Alert component
│   │   │   ├── Alert.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   └── Loading/        # Loading animation component
│   │       ├── Loading.tsx # Main Loading component
│   │       ├── Loading.stories.tsx  # Storybook stories
│   │       └── index.ts    # Component export
│   ├── Navigation/         # Navigation components
│   │   ├── Menu/           # Menu component
│   │   │   ├── Menu.tsx    # Main Menu component
│   │   │   ├── Menu.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   ├── Breadcrumb/     # Breadcrumb component
│   │   │   ├── Breadcrumb.tsx  # Main Breadcrumb component
│   │   │   ├── Breadcrumb.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   ├── Tabs/           # Tabs component
│   │   │   ├── Tabs.tsx    # Main Tabs component
│   │   │   ├── Tabs.stories.tsx  # Storybook stories
│   │   │   └── index.ts    # Component export
│   │   └── Pagination/     # Pagination component
│   │       ├── Pagination.tsx  # Main Pagination component
│   │       ├── Pagination.stories.tsx  # Storybook stories
│   │       └── index.ts    # Component export
│   └── ThemeProvider/      # Theme context provider
│       └── ThemeProvider.tsx  # Theme provider component
├── types/                   # TypeScript type definitions
│   ├── index.ts            # Main type exports
│   └── styled.d.ts         # Styled-components theme types
├── hooks/                   # Custom React hooks
│   └── useLocalStorage.ts  # Local storage hook
└── utils/                   # Utility functions
    ├── dom.ts              # DOM manipulation utilities
    ├── formatting.ts       # Text/date formatting utilities
    ├── validation.ts       # Input validation utilities
    └── index.ts            # Utility exports
```

### Configuration Files
```
.storybook/                  # Storybook configuration
├── main.ts                 # Storybook main configuration
└── preview.tsx             # Storybook preview configuration
```

### Build Output
```
dist/                       # Production build output
├── index.js                # CommonJS bundle
├── index.esm.js            # ES Module bundle
└── index.d.ts              # TypeScript declarations
```

## Backend Directory Structure

### Project Root
```
Backend/
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependency versions
├── tsconfig.json            # TypeScript configuration
├── jest.config.js           # Jest testing configuration
├── README.md                # Project documentation
├── API_DOCUMENTATION.md     # Detailed API documentation
└── .gitignore              # Git ignore patterns
```

### Source Code (`src/`)
```
src/
├── index.ts                 # Main library export file
├── components/              # Backend component library
│   ├── Security/            # Security and authentication components
│   │   ├── AuthMiddleware.ts        # JWT authentication middleware
│   │   ├── SecurityMiddleware.ts    # Security headers and CORS
│   │   └── RateLimitMiddleware.ts   # Rate limiting middleware
│   ├── Validation/          # Request validation components
│   │   └── RequestValidator.ts      # Validation and sanitization
│   ├── ErrorHandling/       # Error handling components
│   │   └── ErrorHandler.ts          # Custom error classes and middleware
│   ├── Logging/             # Logging components
│   │   └── Logger.ts                # Winston-based logging
│   ├── API/                 # API utility components
│   │   ├── ResponseFormatter.ts     # Standardized API responses
│   │   └── PaginationHelper.ts     # Pagination utilities
│   ├── FileHandling/        # File handling components
│   │   └── FileUploadHandler.ts    # File upload management
│   ├── Database/            # Database components
│   │   └── DatabaseConnection.ts   # Database connection utilities
│   └── Core/                # Core library components
│       └── BackendLibrary.ts       # Main library class
├── types/                   # TypeScript type definitions
│   └── index.ts            # Main type exports
└── utils/                   # Utility functions
    └── index.ts            # Utility exports
```

### Examples and Tests
```
examples/                    # Example implementations
├── basic-server.ts         # Example Express server
└── README.md               # Example usage documentation

tests/                      # Test files
├── setup.ts                # Jest test setup and utilities
├── AuthMiddleware.test.ts  # Authentication middleware tests
└── README.md               # Testing documentation
```

### Build Output
```
dist/                       # Production build output
├── index.js                # CommonJS bundle
├── index.d.ts              # TypeScript declarations
└── **/*.js                 # Compiled component files
```

## Dependencies

### Frontend Production Dependencies
- **styled-components**: CSS-in-JS styling library (v5.3.11)
- **react**: React framework (peer dependency)
- **react-dom**: React DOM (peer dependency)

### Frontend Development Dependencies
- **@storybook/***: Component documentation and development
- **@types/***: TypeScript type definitions
- **@testing-library/***: Testing utilities
- **@vitejs/plugin-react**: Vite React plugin
- **typescript**: TypeScript compiler
- **vite**: Build tool and dev server
- **eslint**: Code linting
- **prettier**: Code formatting
- **jest**: Testing framework

### Backend Production Dependencies
- **express**: Web application framework (v4.18.2)
- **cors**: Cross-origin resource sharing
- **helmet**: Security headers middleware
- **morgan**: HTTP request logger
- **compression**: Response compression
- **express-rate-limit**: Rate limiting middleware
- **express-validator**: Request validation
- **jsonwebtoken**: JWT authentication
- **bcryptjs**: Password hashing
- **multer**: File upload handling
- **winston**: Logging library
- **joi**: Schema validation

### Backend Development Dependencies
- **@types/***: TypeScript type definitions
- **typescript**: TypeScript compiler
- **jest**: Testing framework
- **ts-jest**: Jest TypeScript support
- **eslint**: Code linting
- **rimraf**: Cross-platform file deletion

## Key File Purposes

### Frontend

#### `src/index.ts`
- Main entry point for the component library
- Exports all public components and utilities
- Enables tree-shaking for consumers

#### `src/components/ThemeProvider/ThemeProvider.tsx`
- Provides theme context to all components
- Manages design tokens (colors, spacing, typography)
- Enables theme customization and overrides

#### `src/types/styled.d.ts`
- Extends styled-components with custom theme types
- Ensures type safety for theme usage in styled components
- Integrates with the main Theme interface

#### `.storybook/preview.tsx`
- Configures Storybook with ThemeProvider wrapper
- Ensures all stories have access to theme context
- Sets up global decorators and parameters

#### `vite.config.ts`
- Configures Vite build tool for React and TypeScript
- Sets up library build with proper entry points
- Configures output formats (CommonJS, ESM)

#### `tsconfig.json`
- TypeScript compiler configuration
- Enables strict type checking
- Configures module resolution and output

### Backend

#### `src/index.ts`
- Main entry point for the backend library
- Exports all public components and utilities
- Provides both named and default exports

#### `src/components/Security/AuthMiddleware.ts`
- JWT-based authentication middleware
- Role and permission-based access control
- Token generation and verification

#### `src/components/ErrorHandling/ErrorHandler.ts`
- Custom error class hierarchy
- Global error handling middleware
- Async error handler wrapper

#### `src/components/Logging/Logger.ts`
- Winston-based structured logging
- Specialized loggers for different contexts
- Configurable transports and formats

#### `jest.config.js`
- Jest testing framework configuration
- TypeScript support with ts-jest
- Test file patterns and coverage

#### `examples/basic-server.ts`
- Comprehensive example server
- Demonstrates all component integrations
- Shows proper middleware ordering

## File Organization Principles

### 1. Component Structure
- Each component gets its own directory
- Includes component file, stories (frontend), and index export
- Follows consistent naming conventions

### 2. Type Definitions
- Centralized in `src/types/`
- Exported through index files
- Separate styled-components types (frontend)

### 3. Utility Functions
- Grouped by functionality
- Exported through index files
- Pure functions with no side effects

### 4. Configuration
- Build tools in root directory
- Storybook config in `.storybook/` (frontend)
- TypeScript config in root
- Jest config in root (backend)

### 5. Exports
- Main library export in `src/index.ts`
- Component-specific exports in component directories
- Utility exports in utility directories

### 6. Testing
- Frontend: Jest + React Testing Library
- Backend: Jest with custom test utilities
- Test setup files for configuration
- Mock objects and helper functions
