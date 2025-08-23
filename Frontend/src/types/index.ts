// Common type definitions
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface Theme {
  colors: {
    primary: {
      main: string;
      light: string;
      dark: string;
      veryLight: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      veryLight: string;
    };
    success: {
      main: string;
      light: string;
      dark: string;
      veryLight: string;
    };
    warning: {
      main: string;
      light: string;
      dark: string;
      veryLight: string;
    };
    error: {
      main: string;
      light: string;
      dark: string;
      veryLight: string;
    };
    info: {
      main: string;
      light: string;
      dark: string;
      veryLight: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      white: string;
    };
    background: {
      primary: string;
      secondary: string;
      paper: string;
      hover: string;
      tertiary: string;
    };
    border: string;
    white: string;
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
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    weights: {
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
    };
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
