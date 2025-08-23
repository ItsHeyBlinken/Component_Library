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

// Inline types for now
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface ComponentVariant {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
}

interface ComponentSize {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

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
  padding: ${({ theme, size: customSize }) => {
    if (customSize === 'xs') return `${theme.spacing.xs} ${theme.spacing.sm}`;
    if (customSize === 'sm') return `${theme.spacing.sm} ${theme.spacing.md}`;
    if (customSize === 'lg') return `${theme.spacing.md} ${theme.spacing.lg}`;
    if (customSize === 'xl') return `${theme.spacing.lg} ${theme.spacing.xl}`;
    return `${theme.spacing.sm} ${theme.spacing.md}`; // md default
  }};
  font-size: ${({ theme, size: customSize }) => {
    if (customSize === 'xs') return theme.typography.fontSize.xs;
    if (customSize === 'sm') return theme.typography.fontSize.sm;
    if (customSize === 'lg') return theme.typography.fontSize.lg;
    if (customSize === 'xl') return theme.typography.fontSize.xl;
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
  background-color: ${({ theme, variant: customVariant, disabled }) => {
    if (disabled) return theme.colors.background.secondary;
    if (customVariant === 'primary') return theme.colors.primary;
    if (customVariant === 'secondary') return theme.colors.secondary;
    if (customVariant === 'success') return theme.colors.success;
    if (customVariant === 'warning') return theme.colors.warning;
    if (customVariant === 'error') return theme.colors.error;
    if (customVariant === 'info') return theme.colors.info;
    return theme.colors.primary; // default
  }};
  
  color: ${({ theme, variant: customVariant, disabled }) => {
    if (disabled) return theme.colors.text.disabled;
    if (customVariant === 'primary' || customVariant === 'error') return '#ffffff';
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
