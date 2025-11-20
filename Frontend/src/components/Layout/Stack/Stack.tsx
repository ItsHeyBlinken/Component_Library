/**
 * Stack Component
 * 
 * Purpose: Vertical spacing component for consistent layout spacing
 * 
 * Use Cases:
 * - Vertical content organization
 * - Form layouts and spacing
 * - List and navigation spacing
 * - Content section spacing
 * - Consistent vertical rhythm
 * 
 * Accessibility:
 * - Proper semantic HTML structure
 * - Screen reader friendly layout
 * - High contrast support
 * - Consistent spacing patterns
 */

import React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../../types';

export type StackSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
export type StackAlignment = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';

export interface StackProps extends BaseComponentProps {
  spacing?: StackSpacing;
  align?: StackAlignment;
  justify?: StackJustify;
  as?: keyof JSX.IntrinsicElements;
  inline?: boolean;
  wrap?: boolean;
  divider?: React.ReactNode;
  dividerSpacing?: StackSpacing;
}

const getSpacingValue = (spacing: StackSpacing | undefined, theme: any) => {
  if (spacing === 'none') return '0';
  if (spacing === 'xs') return theme.spacing.xs;
  if (spacing === 'sm') return theme.spacing.sm;
  if (spacing === 'lg') return theme.spacing.lg;
  if (spacing === 'xl') return theme.spacing.xl;
  return theme.spacing.md; // md default
};

const StyledStack = styled.div<StackProps>`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  /* Alignment */
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'start'};
  
  /* Wrapping */
  flex-wrap: ${({ wrap }) => (wrap === true || wrap === 'true') ? 'wrap' : 'nowrap'};
  
  /* Spacing between children */
  > * + * {
    margin-top: ${({ spacing, theme }) => getSpacingValue(spacing, theme)};
  }
  
  /* Divider spacing */
  ${({ divider, dividerSpacing, theme }) => divider && `
    > * + * {
      margin-top: ${getSpacingValue(dividerSpacing || 'md', theme)};
    }
  `}
  
  /* Remove margin from first child */
  > *:first-child {
    margin-top: 0;
  }
  
  /* Responsive behavior for small screens */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    > * + * {
      margin-top: ${({ spacing, theme }) => {
        const baseSpacing = getSpacingValue(spacing, theme);
        if (baseSpacing === '0') return '0';
        return `calc(${baseSpacing} * 0.75)`;
      }};
    }
  }
`;

const DividerWrapper = styled.div<{ spacing: StackSpacing }>`
  margin-top: ${({ spacing, theme }) => getSpacingValue(spacing, theme)};
  margin-bottom: ${({ spacing, theme }) => getSpacingValue(spacing, theme)};
  display: flex;
  align-items: center;
  
  /* Divider line */
  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
  
  /* Divider content */
  > * {
    margin: 0 16px;
  }
  
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const Stack: React.FC<StackProps> = ({
  children,
  spacing = 'md',
  align,
  justify,
  as,
  inline = false,
  wrap = false,
  divider,
  dividerSpacing,
  className,
  style,
  ...props
}) => {
  // If divider is provided, wrap children with dividers
  const renderChildren = () => {
    if (!divider) return children;
    
    const childrenArray = React.Children.toArray(children);
    return childrenArray.map((child, index) => (
      <React.Fragment key={index}>
        {child}
        {index < childrenArray.length - 1 && (
          <DividerWrapper spacing={dividerSpacing || spacing}>
            {divider}
          </DividerWrapper>
        )}
      </React.Fragment>
    ));
  };

  return (
    <StyledStack
      as={as}
      spacing={spacing}
      align={align}
      justify={justify}
      inline={inline}
      wrap={wrap}
      divider={divider}
      dividerSpacing={dividerSpacing}
      className={className}
      style={style}
      {...props}
    >
      {renderChildren()}
    </StyledStack>
  );
};
