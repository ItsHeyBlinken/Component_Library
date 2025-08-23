# Frontend Component Library

A comprehensive collection of reusable React components designed for rapid development and consistent user experiences across projects.

## �� Features

- **TypeScript**: Full type safety and excellent developer experience
- **Storybook**: Interactive component documentation and testing
- **Modular Design**: Each component is self-contained and easily portable
- **Comprehensive Documentation**: Inline usage examples and use cases
- **Modern Styling**: CSS-in-JS with responsive design principles
- **Accessibility**: Built with accessibility best practices

## 📁 Project Structure

```markdown:README.md
<code_block_to_apply_changes_from>
```
src/
├── components/          # All reusable components
│   ├── common/         # Basic UI components (Button, Input, etc.)
│   ├── layout/         # Layout components (Grid, Container, etc.)
│   ├── feedback/       # User feedback components (Modal, Toast, etc.)
│   └── navigation/     # Navigation components (Menu, Breadcrumb, etc.)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles and theme
```

##  Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
# Start Storybook for component development
npm run storybook

# Start development server
npm run dev

# Build library
npm run build
```

##  Usage

### Copying Components

Each component is designed to be self-contained. To use in another project:

1. Copy the component folder from `src/components/`
2. Copy any required dependencies from `package.json`
3. Import and use the component

### Example
```tsx
import { Button } from './components/common/Button';

function App() {
  return (
    <Button variant="primary" size="large">
      Click Me
    </Button>
  );
}
```

## 🎨 Component Categories

### Common Components
- **Button**: Various button styles and states
- **Input**: Form input components
- **Card**: Content container with multiple variants
- **Typography**: Text components with consistent styling

### Layout Components
- **Grid**: Responsive grid system
- **Container**: Content width constraints
- **Stack**: Vertical spacing component
- **Box**: Flexible container with padding/margin

### Feedback Components
- **Modal**: Overlay dialogs
- **Toast**: Notification messages
- **Alert**: Status and warning messages
- **Loading**: Loading states and spinners

### Navigation Components
- **Menu**: Navigation menus
- **Breadcrumb**: Page navigation
- **Tabs**: Tabbed content
- **Pagination**: Page navigation

##  Customization

### Theme System
The library uses a centralized theme system for consistent styling:

```tsx
import { ThemeProvider } from './components/ThemeProvider';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    // ... more colors
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    // ... more spacing
  }
};

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### Styling
Components use CSS-in-JS for dynamic styling and theming. Each component includes:
- Base styles
- Variant styles
- Responsive design
- Accessibility features

##  Documentation

### Inline Documentation
Each component includes:
- **Purpose**: What the component is for
- **Use Cases**: When and how to use it
- **Props**: Complete prop documentation
- **Examples**: Usage examples
- **Accessibility**: Accessibility considerations

### Storybook
Interactive documentation with:
- Component playground
- Prop controls
- Usage examples
- Accessibility testing

## 🧪 Testing

### Component Testing
- Unit tests for each component
- Integration tests for component interactions
- Accessibility testing with axe-core
- Visual regression testing

### Running Tests
```bash
npm run test
npm run test:watch
npm run test:coverage
```

## 🚀 Contributing

### Adding New Components
1. Create component folder in appropriate category
2. Include component file, types, and tests
3. Add Storybook stories
4. Update documentation
5. Ensure accessibility compliance

### Component Template
```tsx
/**
 * Component Name
 * 
 * Purpose: Brief description of what this component does
 * 
 * Use Cases:
 * - When to use this component
 * - Common scenarios
 * - Best practices
 * 
 * Accessibility:
 * - ARIA attributes
 * - Keyboard navigation
 * - Screen reader support
 */

import React from 'react';
import { ComponentProps } from './Component.types';

export const Component: React.FC<ComponentProps> = ({ ... }) => {
  // Implementation
};
```

## 📦 Build & Distribution

### Building
```bash
npm run build
```

### Package Structure
The build process creates:
- ES6 modules for tree-shaking
- CommonJS for compatibility
- TypeScript declarations
- CSS bundles

## 🔗 Dependencies

### Core Dependencies
- React 18+
- TypeScript 5+
- Styled-components or Emotion

### Development Dependencies
- Storybook
- Jest
- Testing Library
- ESLint & Prettier

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Support

For questions or contributions:
1. Check the component documentation
2. Review Storybook examples
3. Open an issue for bugs
4. Submit PRs for improvements

---

**Happy Coding! 🎉**
```

Now let me create the project structure and initial files:

```json:package.json
{
  "name": "frontend-component-library",
  "version": "1.0.0",
  "description": "A comprehensive collection of reusable React components",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,json,css,md}\"",
    "type-check": "tsc --noEmit"
  },
  "keywords": [
    "react",
    "components",
    "typescript",
    "ui",
    "library"
  ],
  "author": "Your Name",
  "license": "MIT",
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  },
  "dependencies": {
    "styled-components": "^6.1.0"
  },
  "devDependencies": {
    "@storybook/addon-essentials": "^7.6.0",
    "@storybook/addon-interactions": "^7.6.0",
    "@storybook/addon-links": "^7.6.0",
    "@storybook/blocks": "^7.6.0",
    "@storybook/react": "^7.6.0",
    "@storybook/react-vite": "^7.6.0",
    "@storybook/testing-library": "^0.2.2",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/styled-components": "^5.1.34",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.0.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-react": "^7.33.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "jest": "^29.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "prettier": "^3.0.0",
    "storybook": "^7.6.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0"
  }
}
```

```typescript:tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "**/*.stories.tsx", "**/*.test.tsx"]
}
```

```typescript:vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FrontendComponentLibrary',
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
```

```typescript:src/index.ts
// Main library entry point
export * from './components/common/Button';
export * from './components/common/Input';
export * from './components/common/Card';
export * from './components/common/Typography';
export * from './components/layout/Grid';
export * from './components/layout/Container';
export * from './components/layout/Stack';
export * from './components/layout/Box';
export * from './components/feedback/Modal';
export * from './components/feedback/Toast';
export * from './components/feedback/Alert';
export * from './components/feedback/Loading';
export * from './components/navigation/Menu';
export * from './components/navigation/Breadcrumb';
export * from './components/navigation/Tabs';
export * from './components/navigation/Pagination';
export * from './components/ThemeProvider';
export * from './types';
export * from './hooks';
export * from './utils';
```

```typescript:src/types/index.ts
// Common type definitions
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      primary: string;
      secondary: string;
      paper: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface ComponentVariant {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  info?: boolean;
}

export interface ComponentSize {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}
```

```typescript:src/components/ThemeProvider/ThemeProvider.tsx
/**
 * Theme Provider
 * 
 * Purpose: Provides consistent theming across all components
 * 
 * Use Cases:
 * - When you need consistent styling across your application
 * - When you want to customize colors, spacing, and typography
 * - When building a design system
 * 
 * Accessibility:
 * - Supports high contrast themes
 * - Maintains color contrast ratios
 * - Provides consistent spacing for screen readers
 */

import React, { createContext, useContext, ReactNode } from 'react';
import { Theme } from '../../types';

const defaultTheme: Theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      disabled: '#adb5bd',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.75rem',
      h4: '1.5rem',
      h5: '1.25rem',
      h6: '1rem',
    },
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  theme = {}, 
  children 
}) => {
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
      text: {
        ...defaultTheme.colors.text,
        ...theme.colors?.text,
      },
      background: {
        ...defaultTheme.colors.background,
        ...theme.colors?.background,
      },
    },
    spacing: {
      ...defaultTheme.spacing,
      ...theme.spacing,
    },
    typography: {
      ...defaultTheme.typography,
      ...theme.typography,
      fontSize: {
        ...defaultTheme.typography.fontSize,
        ...theme.typography?.fontSize,
      },
    },
    breakpoints: {
      ...defaultTheme.breakpoints,
      ...theme.breakpoints,
    },
  };

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
```

```typescript:src/components/common/Button/Button.tsx
/**
 * Button Component
 * 
 * Purpose: Interactive button element for user actions
 * 
 * Use Cases:
 * - Form submissions
 * - Navigation actions
 * - Interactive elements
 * - Call-to-action buttons
 * - Icon buttons
 * 
 * Accessibility:
 * - Proper ARIA labels for screen readers
 * - Keyboard navigation support
 * - Focus indicators
 * - Loading states for async actions
 */

import React from 'react';
import styled from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../types';

export interface ButtonProps extends BaseComponentProps, ComponentVariant, ComponentSize {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme, size }) => {
    if (size === 'xs') return `${theme.spacing.xs} ${theme.spacing.sm}`;
    if (size === 'sm') return `${theme.spacing.sm} ${theme.spacing.md}`;
    if (size === 'lg') return `${theme.spacing.md} ${theme.spacing.lg}`;
    if (size === 'xl') return `${theme.spacing.lg} ${theme.spacing.xl}`;
    return `${theme.spacing.sm} ${theme.spacing.md}`; // md default
  }};
  font-size: ${({ theme, size }) => {
    if (size === 'xs') return theme.typography.fontSize.xs;
    if (size === 'sm') return theme.typography.fontSize.sm;
    if (size === 'lg') return theme.typography.fontSize.lg;
    if (size === 'xl') return theme.typography.fontSize.xl;
    return theme.typography.fontSize.md; // md default
  }};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  /* Variant styles */
  background-color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.background.secondary;
    if (variant === 'primary') return theme.colors.primary;
    if (variant === 'secondary') return theme.colors.secondary;
    if (variant === 'success') return theme.colors.success;
    if (variant === 'warning') return theme.colors.warning;
    if (variant === 'error') return theme.colors.error;
    if (variant === 'info') return theme.colors.info;
    return theme.colors.primary; // default
  }};
  
  color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.text.disabled;
    if (variant === 'primary' || variant === 'error') return '#ffffff';
    return '#ffffff';
  }};
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  variant = 'primary',
  size = 'md',
  className,
  style,
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <LoadingSpinner />
          {children}
        </>
      );
    }

    if (icon) {
      return (
        <>
          {iconPosition === 'left' && icon}
          {children}
          {iconPosition === 'right' && icon}
        </>
      );
    }

    return children;
  };

  return (
    <StyledButton
      onClick={handleClick}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      type={type}
      variant={variant}
      size={size}
      className={className}
      style={style}
      {...props}
    >
      {renderContent()}
    </StyledButton>
  );
};
```

```typescript:src/components/common/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeProvider } from '../../ThemeProvider/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Error Button',
    variant: 'error',
  },
};

export const Info: Story = {
  args: {
    children: 'Info Button',
    variant: 'info',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    icon: '',
    iconPosition: 'left',
  },
};
```

```typescript:src/components/common/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

```typescript:src/components/common/Input/Input.tsx
/**
 * Input Component
 * 
 * Purpose: Form input field for user data entry
 * 
 * Use Cases:
 * - Text input fields
 * - Form inputs
 * - Search fields
 * - Number inputs
 * - Email inputs
 * - Password fields
 * 
 * Accessibility:
 * - Proper label association
 * - Error message announcements
 * - Keyboard navigation
 * - Screen reader support
 */

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../types';

export interface InputProps extends BaseComponentProps, ComponentVariant, ComponentSize {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  error?: string;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
}

const InputWrapper = styled.div<{ fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label<{ error?: string }>`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 500;
  color: ${({ theme, error }) => error ? theme.colors.error : theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StyledInput = styled.input<InputProps & { hasError: boolean }>`
  padding: ${({ theme, size }) => {
    if (size === 'xs') return `${theme.spacing.xs} ${theme.spacing.sm}`;
    if (size === 'sm') return `${theme.spacing.sm} ${theme.spacing.md}`;
    if (size === 'lg') return `${theme.spacing.md} ${theme.spacing.lg}`;
    if (size === 'xl') return `${theme.spacing.lg} ${theme.spacing.xl}`;
    return `${theme.spacing.sm} ${theme.spacing.md}`; // md default
  }};
  font-size: ${({ theme, size }) => {
    if (size === 'xs') return theme.typography.fontSize.xs;
    if (size === 'sm') return theme.typography.fontSize.sm;
    if (size === 'lg') return theme.typography.fontSize.lg;
    if (size === 'xl') return theme.typography.fontSize.xl;
    return theme.typography.fontSize.md; // md default
  }};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  border: 2px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.error : theme.colors.background.secondary
  };
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  width: 100%;
  transition: all 0.2s ease-in-out;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
  }
  
  &:read-only {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

const HelperText = styled.span<{ error?: string }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme, error }) => error ? theme.colors.error : theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  required = false,
  readOnly = false,
  error,
  label,
  helperText,
  fullWidth = false,
  name,
  id,
  autoComplete,
  autoFocus = false,
  className,
  style,
  ...props
}, ref) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  const labelId = `${inputId}-label`;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const ariaDescribedBy = [
    helperText && helperId,
    error && errorId,
  ].filter(Boolean).join(' ') || undefined;

  return (
    <InputWrapper fullWidth={fullWidth} className={className} style={style}>
      {label && (
        <Label 
          htmlFor={inputId} 
          id={labelId}
          error={error}
        >
          {label}
          {required && <span aria-label="required"> *</span>}
        </Label>
      )}
      
      <StyledInput
        ref={ref}
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        name={name}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        hasError={!!error}
        aria-labelledby={label ? labelId : undefined}
        aria-describedby={ariaDescribedBy}
        aria-invalid={!!error}
        {...props}
      />
      
      {helperText && !error && (
        <HelperText id={helperId}>
          {helperText}
        </HelperText>
      )}
      
      {error && (
        <HelperText error id={errorId}>
          {error}
        </HelperText>
      )}
    </InputWrapper>
  );
});

Input.displayName = 'Input';
```

```typescript:src/components/common/Input/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeProvider } from '../../ThemeProvider/ThemeProvider';

const meta: Meta<typeof Input> = {
  title: 'Components/Common/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email...',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    helperText: 'Must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username...',
    error: 'Username is required',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name...',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    value: 'This value cannot be changed',
    readOnly: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    size: 'sm',
    placeholder: 'Small size...',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    size: 'lg',
    placeholder: 'Large size...',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    fullWidth: true,
    placeholder: 'This input takes full width...',
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age...',
    min: 0,
    max: 120,
  },
};

export const Search: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search for something...',
  },
};
```

```typescript:src/components/common/Input/index.ts
export { Input } from './Input';
export type { InputProps } from './Input';
```

Now let me create the Storybook configuration and additional setup files:

```javascript:.storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
```

```typescript:.storybook/preview.ts
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/components/ThemeProvider/ThemeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
```

```typescript:src/hooks/useLocalStorage.ts
/**
 * useLocalStorage Hook
 * 
 * Purpose: Persist state in localStorage with automatic serialization
 * 
 * Use Cases:
 * - User preferences
 * - Form data persistence
 * - Theme settings
 * - Authentication tokens
 * 
 * Features:
 * - Automatic JSON serialization/deserialization
 * - Type safety with TypeScript
 * - Fallback to default value if localStorage fails
 */

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
```

```typescript:src/utils/index.ts
export * from './validation';
export * from './formatting';
export * from './dom';
```

```typescript:src/utils/validation.ts
/**
 * Validation Utilities
 * 
 * Purpose: Common validation functions for form inputs
 * 
 * Use Cases:
 * - Form validation
 * - Input sanitization
 * - Data verification
 * - User input validation
 */

export const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const isUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

export const minLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const maxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

export const isNumber = (value: any): boolean => {
  return !isNaN(value) && typeof Number(value) === 'number';
};

export const isInteger = (value: any): boolean => {
  return Number.isInteger(Number(value));
};

export const isPositive = (value: number): boolean => {
  return value > 0;
};

export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};
```

```typescript:src/utils/formatting.ts
/**
 * Formatting Utilities
 * 
 * Purpose: Common formatting functions for data display
 * 
 * Use Cases:
 * - Date formatting
 * - Number formatting
 * - Currency formatting
 * - Text formatting
 * - File size formatting
 */

export const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  };
  
  return new Intl.DateTimeFormat('en-US', defaultOptions).format(dateObj);
};

export const formatDateTime = (date: Date | string): string => {
  return formatDate(date, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }
  
  return formatDate(dateObj);
};

export const formatNumber = (num: number, options?: Intl.NumberFormatOptions): string => {
  const defaultOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  };
  
  return new Intl.NumberFormat('en-US', defaultOptions).format(num);
};

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatPhoneNumber = (phone: string): string 
