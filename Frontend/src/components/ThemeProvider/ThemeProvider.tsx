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
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme } from '../../types';

export const defaultTheme: Theme = {
  colors: {
    primary: {
      main: '#007bff',
      light: '#66b3ff',
      dark: '#0056b3',
      veryLight: '#e3f2fd',
    },
    secondary: {
      main: '#6c757d',
      light: '#9ca2a8',
      dark: '#495057',
      veryLight: '#f8f9fa',
    },
    success: {
      main: '#28a745',
      light: '#6cbf70',
      dark: '#1e7e34',
      veryLight: '#d4edda',
    },
    warning: {
      main: '#ffc107',
      light: '#ffcd39',
      dark: '#d39e00',
      veryLight: '#fff3cd',
    },
    error: {
      main: '#dc3545',
      light: '#e36470',
      dark: '#a71d2a',
      veryLight: '#f8d7da',
    },
    info: {
      main: '#17a2b8',
      light: '#45b5c6',
      dark: '#117a8b',
      veryLight: '#d1ecf1',
    },
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      disabled: '#adb5bd',
      white: '#ffffff',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      paper: '#ffffff',
      hover: '#f5f5f5',
      tertiary: '#e9ecef',
    },
    border: '#dee2e6',
    white: '#ffffff',
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
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  borderRadius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
      primary: {
        ...defaultTheme.colors.primary,
        ...theme.colors?.primary,
      },
      secondary: {
        ...defaultTheme.colors.secondary,
        ...theme.colors?.secondary,
      },
      success: {
        ...defaultTheme.colors.success,
        ...theme.colors?.success,
      },
      warning: {
        ...defaultTheme.colors.warning,
        ...theme.colors?.warning,
      },
      error: {
        ...defaultTheme.colors.error,
        ...theme.colors?.error,
      },
      info: {
        ...defaultTheme.colors.info,
        ...theme.colors?.info,
      },
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
      sizes: {
        ...defaultTheme.typography.sizes,
        ...theme.typography?.sizes,
      },
      weights: {
        ...defaultTheme.typography.weights,
        ...theme.typography?.weights,
      },
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      ...theme.borderRadius,
    },
    shadows: {
      ...defaultTheme.shadows,
      ...theme.shadows,
    },
    breakpoints: {
      ...defaultTheme.breakpoints,
      ...theme.breakpoints,
    },
  };

  return (
    <ThemeContext.Provider value={mergedTheme}>
      <StyledThemeProvider theme={mergedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
