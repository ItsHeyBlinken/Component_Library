/**
 * Container Component
 * 
 * Purpose: Content width constraints and centering for consistent layouts
 * 
 * Use Cases:
 * - Page content width management
 * - Form layouts and content sections
 * - Article and blog post layouts
 * - Dashboard content containers
 * - Responsive content width control
 * 
 * Accessibility:
 * - Proper semantic HTML structure
 * - Screen reader friendly layout
 * - High contrast support
 * - Responsive design patterns
 */

import React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../../types';

export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends BaseComponentProps {
  size?: ContainerSize;
  maxWidth?: string;
  centered?: boolean;
  fluid?: boolean;
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  paddingX?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  paddingY?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  as?: keyof JSX.IntrinsicElements;
}

const getContainerMaxWidth = (size: ContainerSize) => {
  switch (size) {
    case 'xs':
      return '480px';
    case 'sm':
      return '640px';
    case 'md':
      return '768px';
    case 'lg':
      return '1024px';
    case 'xl':
      return '1280px';
    case 'full':
      return 'none';
    default:
      return '1200px'; // md default
  }
};

const getPaddingValue = (padding: string | undefined, theme: any) => {
  if (padding === 'none') return '0';
  if (padding === 'xs') return theme.spacing.xs;
  if (padding === 'sm') return theme.spacing.sm;
  if (padding === 'lg') return theme.spacing.lg;
  if (padding === 'xl') return theme.spacing.xl;
  return theme.spacing.md; // md default
};

const StyledContainer = styled.div<ContainerProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  /* Width and centering */
  width: 100%;
  max-width: ${({ size = 'md', maxWidth }) => maxWidth || getContainerMaxWidth(size)};
  margin: ${({ centered }) => centered ? '0 auto' : '0'};
  
  /* Padding */
  padding-left: ${({ paddingX, padding, theme }) => getPaddingValue(paddingX || padding, theme)};
  padding-right: ${({ paddingX, padding, theme }) => getPaddingValue(paddingX || padding, theme)};
  padding-top: ${({ paddingY, padding, theme }) => getPaddingValue(paddingY || padding, theme)};
  padding-bottom: ${({ paddingY, padding, theme }) => getPaddingValue(paddingY || padding, theme)};
  
  /* Responsive behavior */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: ${({ paddingX, padding, theme }) => {
      const basePadding = getPaddingValue(paddingX || padding, theme);
      if (basePadding === '0') return '0';
      return `calc(${basePadding} * 0.75)`;
    }};
    padding-right: ${({ paddingX, padding, theme }) => {
      const basePadding = getPaddingValue(paddingX || padding, theme);
      if (basePadding === '0') return '0';
      return `calc(${basePadding} * 0.75)`;
    }};
  }
  
  /* Fluid container behavior */
  ${({ fluid, size }) => fluid && size === 'full' && `
    max-width: none;
    padding-left: 0;
    padding-right: 0;
  `}
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'md',
  maxWidth,
  centered = true,
  fluid = false,
  padding = 'md',
  paddingX,
  paddingY,
  as,
  className,
  style,
  ...props
}) => {
  return (
    <StyledContainer
      as={as}
      size={size}
      maxWidth={maxWidth}
      centered={centered}
      fluid={fluid}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};
