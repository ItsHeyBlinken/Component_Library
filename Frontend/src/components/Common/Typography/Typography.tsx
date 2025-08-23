/**
 * Typography Component
 * 
 * Purpose: Text components with consistent styling and semantic meaning
 * 
 * Use Cases:
 * - Headings (h1-h6)
 * - Body text
 * - Captions and labels
 * - Display text
 * - Code and monospace text
 * - Links and interactive text
 * 
 * Accessibility:
 * - Proper semantic HTML elements
 * - Appropriate heading hierarchy
 * - Screen reader friendly
 * - High contrast support
 */

import React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../../types';

export type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body1' | 'body2' | 'body3'
  | 'caption' | 'overline' | 'button'
  | 'display1' | 'display2' | 'display3' | 'display4'
  | 'code' | 'link';

export interface TypographyProps extends BaseComponentProps {
  variant?: TypographyVariant;
  as?: keyof JSX.IntrinsicElements;
  color?: 'primary' | 'secondary' | 'disabled' | 'inherit';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  align?: 'left' | 'center' | 'right' | 'justify';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  decoration?: 'none' | 'underline' | 'line-through' | 'overline';
  truncate?: boolean;
  noWrap?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const getTypographyStyles = (variant: TypographyVariant, theme: any) => {
  const baseStyles = {
    fontFamily: theme.typography.fontFamily,
    margin: 0,
    lineHeight: 1.2,
  };

  switch (variant) {
    case 'h1':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.h1,
        fontWeight: 700,
        lineHeight: 1.1,
      };
    case 'h2':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.h2,
        fontWeight: 700,
        lineHeight: 1.2,
      };
    case 'h3':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.h3,
        fontWeight: 600,
        lineHeight: 1.3,
      };
    case 'h4':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.h4,
        fontWeight: 600,
        lineHeight: 1.4,
      };
    case 'h5':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.h5,
        fontWeight: 600,
        lineHeight: 1.4,
      };
    case 'h6':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.h6,
        fontWeight: 600,
        lineHeight: 1.4,
      };
    case 'display1':
      return {
        ...baseStyles,
        fontSize: '3.5rem',
        fontWeight: 300,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      };
    case 'display2':
      return {
        ...baseStyles,
        fontSize: '3rem',
        fontWeight: 300,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
      };
    case 'display3':
      return {
        ...baseStyles,
        fontSize: '2.5rem',
        fontWeight: 400,
        lineHeight: 1.2,
      };
    case 'display4':
      return {
        ...baseStyles,
        fontSize: '2rem',
        fontWeight: 400,
        lineHeight: 1.2,
      };
    case 'body1':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.md,
        fontWeight: 400,
        lineHeight: 1.5,
      };
    case 'body2':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.sm,
        fontWeight: 400,
        lineHeight: 1.5,
      };
    case 'body3':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.xs,
        fontWeight: 400,
        lineHeight: 1.5,
      };
    case 'caption':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.xs,
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: '0.02em',
      };
    case 'overline':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.xs,
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
      };
    case 'button':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.sm,
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: '0.02em',
      };
    case 'code':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.sm,
        fontWeight: 400,
        lineHeight: 1.4,
        fontFamily: 'monospace',
        backgroundColor: theme.colors.background.secondary,
        padding: '2px 4px',
        borderRadius: '3px',
      };
    case 'link':
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.md,
        fontWeight: 400,
        lineHeight: 1.5,
        color: theme.colors.primary,
        textDecoration: 'underline',
        cursor: 'pointer',
        '&:hover': {
          color: theme.colors.secondary,
        },
      };
    default:
      return {
        ...baseStyles,
        fontSize: theme.typography.fontSize.md,
        fontWeight: 400,
        lineHeight: 1.5,
      };
  }
};

const StyledTypography = styled.div<TypographyProps>`
  ${({ theme, variant = 'body1' }) => getTypographyStyles(variant, theme)}
  
  /* Color variants */
  color: ${({ theme, color: customColor, variant: customVariant }) => {
    if (customColor === 'primary') return theme.colors.text.primary;
    if (customColor === 'secondary') return theme.colors.text.secondary;
    if (customColor === 'disabled') return theme.colors.text.disabled;
    if (customColor === 'inherit') return 'inherit';
    
    // Default colors for specific variants
    if (customVariant === 'link') return theme.colors.primary;
    if (customVariant?.startsWith('h')) return theme.colors.text.primary;
    if (customVariant === 'caption' || customVariant === 'overline') return theme.colors.text.secondary;
    
    return theme.colors.text.primary;
  }};
  
  /* Font weight */
  font-weight: ${({ weight, variant: customVariant }) => {
    if (weight) return weight === 'light' ? 300 : weight === 'normal' ? 400 : weight === 'medium' ? 500 : weight === 'semibold' ? 600 : weight === 'bold' ? 700 : 800;
    
    // Default weights for variants
    if (customVariant?.startsWith('h')) return 600;
    if (customVariant === 'button' || customVariant === 'overline') return 500;
    if (customVariant === 'display1' || customVariant === 'display2') return 300;
    
    return 400;
  }};
  
  /* Text alignment */
  text-align: ${({ align }) => align || 'left'};
  
  /* Text transform */
  text-transform: ${({ transform, variant: customVariant }) => {
    if (transform) return transform;
    if (customVariant === 'overline') return 'uppercase';
    return 'none';
  }};
  
  /* Text decoration */
  text-decoration: ${({ decoration, variant: customVariant }) => {
    if (decoration) return decoration;
    if (customVariant === 'link') return 'underline';
    return 'none';
  }};
  
  /* Truncation */
  ${({ truncate }) => truncate && `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
  
  /* No wrap */
  ${({ noWrap }) => noWrap && `
    white-space: nowrap;
  `}
  
  /* Interactive states for links */
  ${({ variant: customVariant, theme }) => customVariant === 'link' && `
    &:hover {
      color: ${theme.colors.secondary};
    }
    
    &:focus {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }
  `}
`;

const getDefaultElement = (variant: TypographyVariant): keyof JSX.IntrinsicElements => {
  if (variant.startsWith('h')) return variant as keyof JSX.IntrinsicElements;
  if (variant === 'link') return 'a';
  if (variant === 'code') return 'code';
  return 'div';
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  as,
  color,
  weight,
  align,
  transform,
  decoration,
  truncate = false,
  noWrap = false,
  href,
  target,
  rel,
  className,
  style,
  ...props
}) => {
  const defaultElement = getDefaultElement(variant);
  const element = as || defaultElement;
  
  const linkProps = variant === 'link' || element === 'a' ? {
    href: href || '#',
    target,
    rel: rel || (target === '_blank' ? 'noopener noreferrer' : undefined),
  } : {};

  return (
    <StyledTypography
      as={element}
      variant={variant}
      color={color}
      weight={weight}
      align={align}
      transform={transform}
      decoration={decoration}
      truncate={truncate}
      noWrap={noWrap}
      className={className}
      style={style}
      {...linkProps}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
