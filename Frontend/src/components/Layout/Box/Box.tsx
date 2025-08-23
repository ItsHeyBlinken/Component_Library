/**
 * Box Component
 * 
 * Purpose: Flexible container with padding/margin for layout and spacing
 * 
 * Use Cases:
 * - Layout containers and sections
 * - Spacing and padding utilities
 * - Background and border containers
 * - Responsive layout blocks
 * - Component composition
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

export type BoxSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
export type BoxDisplay = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none';

export interface BoxProps extends BaseComponentProps {
  padding?: BoxSpacing;
  paddingX?: BoxSpacing;
  paddingY?: BoxSpacing;
  paddingTop?: BoxSpacing;
  paddingRight?: BoxSpacing;
  paddingBottom?: BoxSpacing;
  paddingLeft?: BoxSpacing;
  margin?: BoxSpacing;
  marginX?: BoxSpacing;
  marginY?: BoxSpacing;
  marginTop?: BoxSpacing;
  marginRight?: BoxSpacing;
  marginBottom?: BoxSpacing;
  marginLeft?: BoxSpacing;
  display?: BoxDisplay;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string | number;
  boxShadow?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';
  as?: keyof JSX.IntrinsicElements;
}

const getSpacingValue = (spacing: BoxSpacing | undefined, theme: any) => {
  if (spacing === 'none') return '0';
  if (spacing === 'xs') return theme.spacing.xs;
  if (spacing === 'sm') return theme.spacing.sm;
  if (spacing === 'lg') return theme.spacing.lg;
  if (spacing === 'xl') return theme.spacing.xl;
  return theme.spacing.md; // md default
};

const StyledBox = styled.div<BoxProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  /* Display */
  display: ${({ display }) => display || 'block'};
  
  /* Dimensions */
  width: ${({ width }) => typeof width === 'number' ? `${width}px` : width};
  height: ${({ height }) => typeof height === 'number' ? `${height}px` : height};
  min-width: ${({ minWidth }) => typeof minWidth === 'number' ? `${minWidth}px` : minWidth};
  max-width: ${({ maxWidth }) => typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};
  min-height: ${({ minHeight }) => typeof minHeight === 'number' ? `${minHeight}px` : minHeight};
  max-height: ${({ maxHeight }) => typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight};
  
  /* Padding */
  padding-top: ${({ paddingTop, paddingY, padding, theme }) => 
    getSpacingValue(paddingTop || paddingY || padding, theme)};
  padding-right: ${({ paddingRight, paddingX, padding, theme }) => 
    getSpacingValue(paddingRight || paddingX || padding, theme)};
  padding-bottom: ${({ paddingBottom, paddingY, padding, theme }) => 
    getSpacingValue(paddingBottom || paddingY || padding, theme)};
  padding-left: ${({ paddingLeft, paddingX, padding, theme }) => 
    getSpacingValue(paddingLeft || paddingX || padding, theme)};
  
  /* Margin */
  margin-top: ${({ marginTop, marginY, margin, theme }) => 
    getSpacingValue(marginTop || marginY || margin, theme)};
  margin-right: ${({ marginRight, marginX, margin, theme }) => 
    getSpacingValue(marginRight || marginX || margin, theme)};
  margin-bottom: ${({ marginBottom, marginY, margin, theme }) => 
    getSpacingValue(marginBottom || marginY || margin, theme)};
  margin-left: ${({ marginLeft, marginX, margin, theme }) => 
    getSpacingValue(marginLeft || marginX || margin, theme)};
  
  /* Background and borders */
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  
  /* Positioning */
  position: ${({ position }) => position || 'static'};
  top: ${({ top }) => typeof top === 'number' ? `${top}px` : top};
  right: ${({ right }) => typeof right === 'number' ? `${right}px` : right};
  bottom: ${({ bottom }) => typeof bottom === 'number' ? `${bottom}px` : bottom};
  left: ${({ left }) => typeof left === 'number' ? `${left}px` : left};
  z-index: ${({ zIndex }) => zIndex};
  
  /* Overflow */
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX, overflow }) => overflowX || overflow};
  overflow-y: ${({ overflowY, overflow }) => overflowY || overflow};
  
  /* Responsive behavior for small screens */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: ${({ paddingLeft, paddingX, padding, theme }) => {
      const basePadding = getSpacingValue(paddingLeft || paddingX || padding, theme);
      if (basePadding === '0') return '0';
      return `calc(${basePadding} * 0.75)`;
    }};
    padding-right: ${({ paddingRight, paddingX, padding, theme }) => {
      const basePadding = getSpacingValue(paddingRight || paddingX || padding, theme);
      if (basePadding === '0') return '0';
      return `calc(${basePadding} * 0.75)`;
    }};
  }
`;

export const Box: React.FC<BoxProps> = ({
  children,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  display,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  backgroundColor,
  border,
  borderRadius,
  boxShadow,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  overflow,
  overflowX,
  overflowY,
  as,
  className,
  style,
  ...props
}) => {
  return (
    <StyledBox
      as={as}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      display={display}
      width={width}
      height={height}
      minWidth={minWidth}
      maxWidth={maxWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      zIndex={zIndex}
      overflow={overflow}
      overflowX={overflowX}
      overflowY={overflowY}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </StyledBox>
  );
};
