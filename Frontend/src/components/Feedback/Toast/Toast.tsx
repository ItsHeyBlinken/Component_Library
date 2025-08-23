import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../../types';

export interface ToastProps extends BaseComponentProps {
  /** The message content to display */
  message: string;
  /** The type/variant of the toast */
  variant?: ComponentVariant;
  /** The size of the toast */
  size?: ComponentSize;
  /** Whether the toast is visible */
  isVisible?: boolean;
  /** Callback when toast is dismissed */
  onDismiss?: () => void;
  /** Auto-dismiss timeout in milliseconds (0 = no auto-dismiss) */
  autoDismiss?: number;
  /** Whether to show a close button */
  showCloseButton?: boolean;
  /** Custom icon to display */
  icon?: React.ReactNode;
  /** Whether the toast can be dismissed by clicking */
  dismissible?: boolean;
  /** Position of the toast */
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
  /** Custom background color */
  backgroundColor?: string;
  /** Custom text color */
  textColor?: string;
  /** Custom border color */
  borderColor?: string;
  /** Whether to show a progress bar for auto-dismiss */
  showProgress?: boolean;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Maximum width of the toast */
  maxWidth?: string;
  /** Whether to pause auto-dismiss on hover */
  pauseOnHover?: boolean;
}

const ToastContainer = styled.div<Omit<ToastProps, 'message'> & { $isVisible: boolean; $position: string }>`
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: ${({ theme, size }) => {
    switch (size) {
      case 'xs': return theme.spacing.xs;
      case 'sm': return theme.spacing.sm;
      case 'lg': return theme.spacing.lg;
      case 'xl': return theme.spacing.xl;
      default: return theme.spacing.md;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  max-width: ${({ maxWidth }) => maxWidth || '400px'};
  min-width: 300px;
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
  transition: all ${({ animationDuration }) => animationDuration || 300}ms ease-in-out;
  cursor: ${({ dismissible }) => dismissible ? 'pointer' : 'default'};
  
  /* Position styles */
  ${({ $position }) => {
    switch ($position) {
      case 'top-left':
        return `
          top: 20px;
          left: 20px;
        `;
      case 'top-right':
        return `
          top: 20px;
          right: 20px;
        `;
      case 'top-center':
        return `
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom-left':
        return `
          bottom: 20px;
          left: 20px;
        `;
      case 'bottom-right':
        return `
          bottom: 20px;
          right: 20px;
        `;
      case 'bottom-center':
        return `
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return `
          top: 20px;
          right: 20px;
        `;
    }
  }}
  
  /* Variant styles */
  background-color: ${({ variant, backgroundColor, theme }) => {
    if (backgroundColor) return backgroundColor;
    switch (variant) {
      case 'success':
        return theme.colors.success.light;
      case 'error':
        return theme.colors.error.light;
      case 'warning':
        return theme.colors.warning.light;
      case 'info':
        return theme.colors.info.light;
      case 'secondary':
        return theme.colors.secondary.light;
      default:
        return theme.colors.primary.light;
    }
  }};
  
  color: ${({ variant, textColor, theme }) => {
    if (textColor) return textColor;
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
  }};
  
  border: 1px solid ${({ variant, borderColor, theme }) => {
    if (borderColor) return borderColor;
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
  
  /* Visibility and animation */
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  transform: ${({ $isVisible, $position }) => {
    if (!$isVisible) {
      if ($position.includes('top')) return 'translateY(-100%)';
      if ($position.includes('bottom')) return 'translateY(100%)';
      if ($position.includes('left')) return 'translateX(-100%)';
      if ($position.includes('right')) return 'translateX(100%)';
      return 'scale(0.8)';
    }
    return 'none';
  }};
  
  /* Hover effects */
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: ${({ $position, $isVisible }) => {
      if (!$isVisible) return 'none';
      if ($position.includes('top')) return 'translateY(-2px)';
      if ($position.includes('bottom')) return 'translateY(2px)';
      return 'scale(1.02)';
    }};
  }
  
  /* Responsive design */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 280px;
    max-width: calc(100vw - 40px);
    ${({ $position }) => {
      if ($position.includes('center')) {
        return `
          left: 20px;
          right: 20px;
          transform: none;
        `;
      }
      return '';
    }}
  }
`;

const ToastContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ToastIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  font-size: 16px;
`;

const ToastMessage = styled.div`
  flex: 1;
  word-wrap: break-word;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 4px;
  margin-left: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

const ProgressBar = styled.div<{ $duration: number; $isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: currentColor;
  opacity: 0.6;
  width: ${({ $isVisible }) => $isVisible ? '0%' : '100%'};
  transition: width ${({ $duration }) => $duration}ms linear;
`;

export const Toast: React.FC<ToastProps> = ({
  message,
  variant = 'primary',
  size = 'md',
  isVisible = true,
  onDismiss,
  autoDismiss = 5000,
  showCloseButton = true,
  icon,
  dismissible = true,
  position = 'top-right',
  backgroundColor,
  textColor,
  borderColor,
  showProgress = true,
  animationDuration = 300,
  maxWidth = '400px',
  pauseOnHover = true,
  ...props
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  // Auto-dismiss functionality
  useEffect(() => {
    if (autoDismiss > 0 && isVisible && !isHoveredRef.current) {
      timeoutRef.current = setTimeout(() => {
        onDismiss?.();
      }, autoDismiss);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoDismiss, isVisible, onDismiss]);

  // Progress bar animation
  useEffect(() => {
    if (showProgress && progressRef.current && autoDismiss > 0 && isVisible) {
      const progressBar = progressRef.current;
      progressBar.style.width = '0%';
      
      // Force reflow
      progressBar.offsetHeight;
      
      progressBar.style.width = '100%';
    }
  }, [showProgress, autoDismiss, isVisible]);

  // Pause on hover functionality
  const handleMouseEnter = () => {
    if (pauseOnHover && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      isHoveredRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && autoDismiss > 0) {
      isHoveredRef.current = false;
      timeoutRef.current = setTimeout(() => {
        onDismiss?.();
      }, autoDismiss);
    }
  };

  // Handle click dismissal
  const handleClick = () => {
    if (dismissible) {
      onDismiss?.();
    }
  };

  // Default icons for variants
  const getDefaultIcon = () => {
    if (icon) return icon;
    
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

  if (!isVisible) return null;

  return (
    <ToastContainer
      $isVisible={isVisible}
      $position={position}
      variant={variant}
      size={size}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      animationDuration={animationDuration}
      maxWidth={maxWidth}
      dismissible={dismissible}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <ToastContent>
        {getDefaultIcon() && (
          <ToastIcon>
            {getDefaultIcon()}
          </ToastIcon>
        )}
        <ToastMessage>
          {message}
        </ToastMessage>
      </ToastContent>
      
      {showCloseButton && (
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
          aria-label="Close toast"
        >
          ✕
        </CloseButton>
      )}
      
      {showProgress && autoDismiss > 0 && (
        <ProgressBar
          ref={progressRef}
          $duration={autoDismiss}
          $isVisible={isVisible}
          aria-hidden="true"
        />
      )}
    </ToastContainer>
  );
};
