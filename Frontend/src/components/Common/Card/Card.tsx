/**
 * Card Component
 * 
 * Purpose: Content container with multiple variants for organizing information
 * 
 * Use Cases:
 * - Content organization and grouping
 * - Information display
 * - Dashboard widgets
 * - Product cards
 * - Article previews
 * - Form containers
 * 
 * Accessibility:
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Focus management for interactive cards
 * - ARIA labels for screen readers
 */

import React from 'react';
import styled from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../../types';

export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: ComponentVariant;
  size?: ComponentSize;
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  bordered?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

const StyledCard = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  /* Padding based on size */
  padding: ${({ theme, padding: customPadding, size: customSize }) => {
    if (customPadding === 'none') return '0';
    if (customPadding === 'xs') return theme.spacing.xs;
    if (customPadding === 'sm') return theme.spacing.sm;
    if (customPadding === 'lg') return theme.spacing.lg;
    if (customPadding === 'xl') return theme.spacing.xl;
    
    // Default padding based on size
    if (customSize === 'xs') return theme.spacing.xs;
    if (customSize === 'sm') return theme.spacing.sm;
    if (customSize === 'lg') return theme.spacing.lg;
    if (customSize === 'xl') return theme.spacing.xl;
    return theme.spacing.md; // md default
  }};
  
  /* Elevation and shadows */
  box-shadow: ${({ elevation }) => {
    if (elevation === 'none') return 'none';
    if (elevation === 'sm') return '0 1px 3px rgba(0, 0, 0, 0.12)';
    if (elevation === 'md') return '0 4px 6px rgba(0, 0, 0, 0.1)';
    if (elevation === 'lg') return '0 10px 15px rgba(0, 0, 0, 0.1)';
    if (elevation === 'xl') return '0 20px 25px rgba(0, 0, 0, 0.15)';
    return '0 4px 6px rgba(0, 0, 0, 0.1)'; // md default
  }};
  
  /* Border styling */
  border: ${({ bordered, theme, variant: customVariant }) => {
    if (!bordered) return 'none';
    if (customVariant === 'primary') return `1px solid ${theme.colors.primary}`;
    if (customVariant === 'secondary') return `1px solid ${theme.colors.secondary}`;
    if (customVariant === 'success') return `1px solid ${theme.colors.success}`;
    if (customVariant === 'warning') return `1px solid ${theme.colors.warning}`;
    if (customVariant === 'error') return `1px solid ${theme.colors.error}`;
    if (customVariant === 'info') return `1px solid ${theme.colors.info}`;
    return `1px solid ${theme.colors.background.secondary}`;
  }};
  
  /* Interactive states */
  cursor: ${({ interactive, onClick }) => (interactive || onClick) ? 'pointer' : 'default'};
  
  &:hover {
    ${({ hoverable, interactive, onClick }) => {
      if (hoverable || interactive || onClick) {
        return `
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        `;
      }
      return '';
    }}
  }
  
  &:focus {
    ${({ interactive, onClick, theme }) => (interactive || onClick) ? `
      outline: 2px solid ${theme.colors.primary.main};
      outline-offset: 2px;
    ` : ''}
  }
`;

const CardHeader = styled.div<{ size: string }>`
  margin-bottom: ${({ theme, size: customSize }) => {
    if (customSize === 'xs') return theme.spacing.xs;
    if (customSize === 'sm') return theme.spacing.sm;
    if (customSize === 'lg') return theme.spacing.lg;
    if (customSize === 'xl') return theme.spacing.xl;
    return theme.spacing.md; // md default
  }};
  
  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
    font-size: ${({ theme, size: customSize }) => {
      if (customSize === 'xs') return theme.typography.fontSize.sm;
      if (customSize === 'sm') return theme.typography.fontSize.md;
      if (customSize === 'lg') return theme.typography.fontSize.lg;
      if (customSize === 'xl') return theme.typography.fontSize.xl;
      return theme.typography.fontSize.md; // md default
    }};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  p {
    margin: 0;
    font-size: ${({ theme, size: customSize }) => {
      if (customSize === 'xs') return theme.typography.fontSize.xs;
      if (customSize === 'sm') return theme.typography.fontSize.sm;
      if (customSize === 'lg') return theme.typography.fontSize.md;
      if (customSize === 'xl') return theme.typography.fontSize.lg;
      return theme.typography.fontSize.sm; // md default
    }};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const CardContent = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.5;
`;

const CardFooter = styled.div<{ size: string }>`
  margin-top: ${({ theme, size: customSize }) => {
    if (customSize === 'xs') return theme.spacing.xs;
    if (customSize === 'sm') return theme.spacing.sm;
    if (customSize === 'lg') return theme.spacing.lg;
    if (customSize === 'xl') return theme.spacing.xl;
    return theme.spacing.md; // md default
  }};
  padding-top: ${({ theme, size: customSize }) => {
    if (customSize === 'xs') return theme.spacing.xs;
    if (customSize === 'sm') return theme.spacing.sm;
    if (customSize === 'lg') return theme.spacing.lg;
    if (customSize === 'xl') return theme.spacing.xl;
    return theme.spacing.md; // md default
  }};
  border-top: 1px solid ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  header,
  footer,
  padding = 'md',
  elevation = 'md',
  bordered = false,
  hoverable = false,
  onClick,
  interactive = false,
  variant = 'primary',
  size = 'md',
  className,
  style,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const hasHeader = title || subtitle || header;
  const hasFooter = footer;

  return (
    <StyledCard
      onClick={handleClick}
      padding={padding}
      elevation={elevation}
      bordered={bordered}
      hoverable={hoverable}
      interactive={interactive}
      variant={variant}
      size={size}
      className={className}
      style={style}
      {...props}
    >
      {hasHeader && (
        <CardHeader size={size}>
          {header || (
            <>
              {title && <h3>{title}</h3>}
              {subtitle && <p>{subtitle}</p>}
            </>
          )}
        </CardHeader>
      )}
      
      <CardContent>
        {children}
      </CardContent>
      
      {hasFooter && (
        <CardFooter size={size}>
          {footer}
        </CardFooter>
      )}
    </StyledCard>
  );
};
