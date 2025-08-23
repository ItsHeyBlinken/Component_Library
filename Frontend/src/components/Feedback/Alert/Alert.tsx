import React from 'react';
import styled from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../../types';

export interface AlertProps extends BaseComponentProps {
  /** The title/heading of the alert */
  title?: string;
  /** The main message content */
  message: string;
  /** The type/variant of the alert */
  variant?: ComponentVariant;
  /** The size of the alert */
  size?: ComponentSize;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Callback when alert is dismissed */
  onDismiss?: () => void;
  /** Custom icon to display */
  icon?: React.ReactNode;
  /** Whether to show a close button */
  showCloseButton?: boolean;
  /** Whether the alert has a border */
  bordered?: boolean;
  /** Whether the alert has a shadow */
  shadowed?: boolean;
  /** Whether the alert is filled/colored */
  filled?: boolean;
  /** Whether the alert is outlined */
  outlined?: boolean;
  /** Custom background color */
  backgroundColor?: string;
  /** Custom text color */
  textColor?: string;
  /** Custom border color */
  borderColor?: string;
  /** Whether the alert has rounded corners */
  rounded?: boolean;
  /** Whether the alert is full width */
  fullWidth?: boolean;
  /** Whether the alert has a subtle appearance */
  subtle?: boolean;
  /** Whether the alert is interactive (clickable) */
  interactive?: boolean;
  /** Callback when alert is clicked (if interactive) */
  onClick?: () => void;
  /** Whether to show an action button */
  showAction?: boolean;
  /** Action button text */
  actionText?: string;
  /** Callback when action button is clicked */
  onAction?: () => void;
  /** Whether the alert is loading */
  loading?: boolean;
  /** Loading text to display */
  loadingText?: string;
}

const AlertContainer = styled.div<Omit<AlertProps, 'message'> & { $isInteractive: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme, size }) => {
    switch (size) {
      case 'xs': return theme.spacing.xs;
      case 'sm': return theme.spacing.sm;
      case 'lg': return theme.spacing.lg;
      case 'xl': return theme.spacing.xl;
      default: return theme.spacing.md;
    }
  }};
  padding: ${({ theme, size }) => {
    switch (size) {
      case 'xs': return theme.spacing.xs;
      case 'sm': return theme.spacing.sm;
      case 'lg': return theme.spacing.lg;
      case 'xl': return theme.spacing.xl;
      default: return theme.spacing.md;
    }
  }};
  border-radius: ${({ theme, rounded }) => rounded ? theme.borderRadius.lg : theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.lg;
      case 'xl': return theme.typography.sizes.xl;
      default: return theme.typography.sizes.md;
    }
  }};
  line-height: 1.5;
  transition: all 0.2s ease-in-out;
  position: relative;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  max-width: ${({ fullWidth }) => fullWidth ? 'none' : '600px'};
  
  /* Interactive styles */
  cursor: ${({ $isInteractive }) => $isInteractive ? 'pointer' : 'default'};
  
  &:hover {
    ${({ $isInteractive, theme, shadowed }) => $isInteractive && shadowed && `
      box-shadow: ${theme.shadows.lg};
      transform: translateY(-1px);
    `}
  }
  
  /* Variant styles */
  background-color: ${({ variant, backgroundColor, filled, subtle, theme }) => {
    if (backgroundColor) return backgroundColor;
    if (subtle) {
      switch (variant) {
        case 'success':
          return theme.colors.success.veryLight;
        case 'error':
          return theme.colors.error.veryLight;
        case 'warning':
          return theme.colors.warning.veryLight;
        case 'info':
          return theme.colors.info.veryLight;
        case 'secondary':
          return theme.colors.secondary.veryLight;
        default:
          return theme.colors.primary.veryLight;
      }
    }
    if (filled) {
      switch (variant) {
        case 'success':
          return theme.colors.success.main;
        case 'error':
          return theme.colors.error.main;
        case 'warning':
          return theme.colors.warning.main;
        case 'info':
          return theme.colors.info.main;
        case 'secondary':
          return theme.colors.secondary.main;
        default:
          return theme.colors.primary.main;
      }
    }
    return 'transparent';
  }};
  
  color: ${({ variant, textColor, filled, subtle, theme }) => {
    if (textColor) return textColor;
    if (filled) {
      return theme.colors.white;
    }
    if (subtle) {
      switch (variant) {
        case 'success':
          return theme.colors.success.dark;
        case 'error':
          return theme.colors.error.dark;
        case 'warning':
          return theme.colors.warning.dark;
        case 'info':
          return theme.colors.info.dark;
        case 'secondary':
          return theme.colors.secondary.dark;
        default:
          return theme.colors.primary.dark;
      }
    }
    switch (variant) {
      case 'success':
        return theme.colors.success.main;
      case 'error':
        return theme.colors.error.main;
      case 'warning':
        return theme.colors.warning.main;
      case 'info':
        return theme.colors.info.main;
      case 'secondary':
        return theme.colors.secondary.main;
      default:
        return theme.colors.primary.main;
    }
  }};
  
  border: ${({ variant, borderColor, bordered, outlined, theme }) => {
    if (!bordered && !outlined) return 'none';
    
    const borderWidth = outlined ? '2px' : '1px';
    const borderStyle = 'solid';
    const borderColorValue = borderColor || (() => {
      switch (variant) {
        case 'success':
          return theme.colors.success.main;
        case 'error':
          return theme.colors.error.main;
        case 'warning':
          return theme.colors.warning.main;
        case 'info':
          return theme.colors.info.main;
        case 'secondary':
          return theme.colors.secondary.main;
        default:
          return theme.colors.primary.main;
      }
    })();
    
    return `${borderWidth} ${borderStyle} ${borderColorValue}`;
  }};
  
  box-shadow: ${({ theme, shadowed, variant }) => {
    if (!shadowed) return 'none';
    
    const shadowColor = variant === 'error' ? theme.colors.error.main :
                       variant === 'warning' ? theme.colors.warning.main :
                       variant === 'success' ? theme.colors.success.main :
                       variant === 'info' ? theme.colors.info.main :
                       variant === 'secondary' ? theme.colors.secondary.main :
                       theme.colors.primary.main;
    
    return `0 2px 8px rgba(${shadowColor}, 0.15), 0 1px 3px rgba(${shadowColor}, 0.1)`;
  }};
  
  /* Responsive design */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme, size }) => {
      switch (size) {
        case 'xs': return theme.spacing.xs;
        case 'sm': return theme.spacing.sm;
        case 'lg': return theme.spacing.md;
        case 'xl': return theme.spacing.lg;
        default: return theme.spacing.sm;
      }
    }};
    font-size: ${({ theme, size }) => {
      switch (size) {
        case 'xs': return theme.typography.sizes.xs;
        case 'sm': return theme.typography.sizes.sm;
        case 'lg': return theme.typography.sizes.md;
        case 'xl': return theme.typography.sizes.lg;
        default: return theme.typography.sizes.sm;
      }
    }};
  }
`;

const AlertIcon = styled.div<{ $size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '18px';
      case 'lg': return '24px';
      case 'xl': return '28px';
      default: return '20px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '18px';
      case 'lg': return '24px';
      case 'xl': return '28px';
      default: return '20px';
    }
  }};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '14px';
      case 'sm': return '16px';
      case 'lg': return '20px';
      case 'xl': return '24px';
      default: return '18px';
    }
  }};
`;

const AlertContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const AlertTitle = styled.div<{ $size: string }>`
  font-weight: 600;
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '12px';
      case 'sm': return '14px';
      case 'lg': return '16px';
      case 'xl': return '18px';
      default: return '14px';
    }
  }};
  line-height: 1.3;
`;

const AlertMessage = styled.div`
  word-wrap: break-word;
`;

const AlertActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-left: auto;
  flex-shrink: 0;
`;

const CloseButton = styled.button<{ $size: string }>`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  opacity: 0.7;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
  }
  
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '18px';
      case 'lg': return '24px';
      case 'xl': return '28px';
      default: return '20px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '18px';
      case 'lg': return '24px';
      case 'xl': return '28px';
      default: return '20px';
    }
  }};
`;

const ActionButton = styled.button<{ $size: string }>`
  background: none;
  border: 1px solid currentColor;
  color: inherit;
  cursor: pointer;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '4px 8px';
      case 'sm': return '6px 12px';
      case 'lg': return '8px 16px';
      case 'xl': return '10px 20px';
      default: return '6px 12px';
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '11px';
      case 'sm': return '12px';
      case 'lg': return '14px';
      case 'xl': return '16px';
      default: return '12px';
    }
  }};
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: currentColor;
    color: white;
  }
  
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

const LoadingSpinner = styled.div<{ $size: string }>`
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '12px';
      case 'sm': return '14px';
      case 'lg': return '18px';
      case 'xl': return '20px';
      default: return '14px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '12px';
      case 'sm': return '14px';
      case 'lg': return '18px';
      case 'xl': return '20px';
      default: return '14px';
    }
  }};
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Alert: React.FC<AlertProps> = ({
  title,
  message,
  variant = 'primary',
  size = 'md',
  dismissible = false,
  onDismiss,
  icon,
  showCloseButton,
  bordered = true,
  shadowed = false,
  filled = false,
  outlined = false,
  backgroundColor,
  textColor,
  borderColor,
  rounded = false,
  fullWidth = false,
  subtle = false,
  interactive = false,
  onClick,
  showAction = false,
  actionText = 'Action',
  onAction,
  loading = false,
  loadingText = 'Loading...',
  ...props
}) => {
  // Determine if close button should be shown
  const shouldShowCloseButton = showCloseButton !== undefined ? showCloseButton : dismissible;
  
  // Default icons for variants
  const getDefaultIcon = () => {
    if (icon) return icon;
    if (loading) return <LoadingSpinner $size={size} />;
    
    switch (variant) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return null;
    }
  };

  // Handle click events
  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  // Handle close button click
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDismiss?.();
  };

  // Handle action button click
  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAction?.();
  };

  return (
    <AlertContainer
      variant={variant}
      size={size}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      bordered={bordered}
      shadowed={shadowed}
      filled={filled}
      outlined={outlined}
      rounded={rounded}
      fullWidth={fullWidth}
      subtle={subtle}
      $isInteractive={interactive}
      onClick={handleClick}
      role="alert"
      aria-live="polite"
      {...props}
    >
      {getDefaultIcon() && (
        <AlertIcon $size={size}>
          {getDefaultIcon()}
        </AlertIcon>
      )}
      
      <AlertContent>
        {title && (
          <AlertTitle $size={size}>
            {title}
          </AlertTitle>
        )}
        <AlertMessage>
          {loading ? loadingText : message}
        </AlertMessage>
      </AlertContent>
      
      <AlertActions>
        {showAction && (
          <ActionButton
            $size={size}
            onClick={handleAction}
            aria-label={actionText}
          >
            {actionText}
          </ActionButton>
        )}
        
        {shouldShowCloseButton && (
          <CloseButton
            $size={size}
            onClick={handleClose}
            aria-label="Close alert"
          >
            ✕
          </CloseButton>
        )}
      </AlertActions>
    </AlertContainer>
  );
};
