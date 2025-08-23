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

export interface InputProps extends BaseComponentProps, ComponentVariant, ComponentSize {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onValueChange?: (value: string) => void;
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
  onValueChange,
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
    if (onValueChange) {
      onValueChange(e.target.value);
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
        <HelperText error={error} id={errorId}>
          {error}
        </HelperText>
      )}
    </InputWrapper>
  );
});

Input.displayName = 'Input';
