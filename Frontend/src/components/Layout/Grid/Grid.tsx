/**
 * Grid Component
 * 
 * Purpose: Responsive grid system for creating flexible layouts
 * 
 * Use Cases:
 * - Page layouts and content organization
 * - Card grids and product displays
 * - Form layouts and data tables
 * - Dashboard widgets and information display
 * - Responsive design patterns
 * 
 * Accessibility:
 * - Proper semantic HTML structure
 * - Screen reader friendly layout
 * - Keyboard navigation support
 * - High contrast support
 */

import React from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../../types';

export interface GridProps extends BaseComponentProps {
  columns?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  rowGap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  columnGap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  autoFit?: boolean;
  autoFill?: boolean;
  minColumnWidth?: string;
  maxColumnWidth?: string;
}

const getGapValue = (gap: string | number | undefined, theme: any) => {
  if (typeof gap === 'number') return `${gap}px`;
  if (gap === 'xs') return theme.spacing.xs;
  if (gap === 'sm') return theme.spacing.sm;
  if (gap === 'lg') return theme.spacing.lg;
  if (gap === 'xl') return theme.spacing.xl;
  return theme.spacing.md; // md default
};

const getColumnsValue = (columns: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number } | undefined) => {
  if (typeof columns === 'number') return `repeat(${columns}, 1fr)`;
  
  if (typeof columns === 'object') {
    return {
      xs: columns.xs ? `repeat(${columns.xs}, 1fr)` : 'repeat(1, 1fr)',
      sm: columns.sm ? `repeat(${columns.sm}, 1fr)` : columns.xs ? `repeat(${columns.xs}, 1fr)` : 'repeat(1, 1fr)',
      md: columns.md ? `repeat(${columns.md}, 1fr)` : columns.sm ? `repeat(${columns.sm}, 1fr)` : columns.xs ? `repeat(${columns.xs}, 1fr)` : 'repeat(1, 1fr)',
      lg: columns.lg ? `repeat(${columns.lg}, 1fr)` : columns.md ? `repeat(${columns.md}, 1fr)` : columns.sm ? `repeat(${columns.sm}, 1fr)` : columns.xs ? `repeat(${columns.xs}, 1fr)` : 'repeat(1, 1fr)',
      xl: columns.xl ? `repeat(${columns.xl}, 1fr)` : columns.lg ? `repeat(${columns.lg}, 1fr)` : columns.md ? `repeat(${columns.md}, 1fr)` : columns.sm ? `repeat(${columns.sm}, 1fr)` : columns.xs ? `repeat(${columns.xs}, 1fr)` : 'repeat(1, 1fr)',
    };
  }
  
  return 'repeat(1, 1fr)';
};

const StyledGrid = styled.div<GridProps>`
  display: grid;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  /* Grid template columns */
  grid-template-columns: ${({ columns, autoFit, autoFill, minColumnWidth, maxColumnWidth }) => {
    if (autoFit) return `repeat(auto-fit, minmax(${minColumnWidth || '250px'}, ${maxColumnWidth || '1fr'}))`;
    if (autoFill) return `repeat(auto-fill, minmax(${minColumnWidth || '250px'}, ${maxColumnWidth || '1fr'}))`;
    
    const columnsValue = getColumnsValue(columns);
    if (typeof columnsValue === 'string') return columnsValue;
    
    return columnsValue.xs;
  }};
  
  /* Gap handling */
  gap: ${({ gap, theme }) => getGapValue(gap, theme)};
  row-gap: ${({ rowGap, gap, theme }) => getGapValue(rowGap || gap, theme)};
  column-gap: ${({ columnGap, gap, theme }) => getGapValue(columnGap || gap, theme)};
  
  /* Alignment */
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'start'};
  
  /* Responsive breakpoints */
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: ${({ columns, autoFit, autoFill, minColumnWidth, maxColumnWidth }) => {
      if (autoFit || autoFill) return `repeat(auto-${autoFit ? 'fit' : 'fill'}, minmax(${minColumnWidth || '250px'}, ${maxColumnWidth || '1fr'}))`;
      
      const columnsValue = getColumnsValue(columns);
      if (typeof columnsValue === 'string') return columnsValue;
      
      return columnsValue.sm;
    }};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: ${({ columns, autoFit, autoFill, minColumnWidth, maxColumnWidth }) => {
      if (autoFit || autoFill) return `repeat(auto-${autoFit ? 'fit' : 'fill'}, minmax(${minColumnWidth || '250px'}, ${maxColumnWidth || '1fr'}))`;
      
      const columnsValue = getColumnsValue(columns);
      if (typeof columnsValue === 'string') return columnsValue;
      
      return columnsValue.md;
    }};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: ${({ columns, autoFit, autoFill, minColumnWidth, maxColumnWidth }) => {
      if (autoFit || autoFill) return `repeat(auto-${autoFit ? 'fit' : 'fill'}, minmax(${minColumnWidth || '250px'}, ${maxColumnWidth || '1fr'}))`;
      
      const columnsValue = getColumnsValue(columns);
      if (typeof columnsValue === 'string') return columnsValue;
      
      return columnsValue.lg;
    }};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: ${({ columns, autoFit, autoFill, minColumnWidth, maxColumnWidth }) => {
      if (autoFit || autoFill) return `repeat(auto-${autoFit ? 'fit' : 'fill'}, minmax(${minColumnWidth || '250px'}, ${maxColumnWidth || '1fr'}))`;
      
      const columnsValue = getColumnsValue(columns);
      if (typeof columnsValue === 'string') return columnsValue;
      
      return columnsValue.xl;
    }};
  }
`;

export const Grid: React.FC<GridProps> = ({
  children,
  columns,
  gap,
  rowGap,
  columnGap,
  alignItems,
  justifyContent,
  autoFit = false,
  autoFill = false,
  minColumnWidth,
  maxColumnWidth,
  className,
  style,
  ...props
}) => {
  return (
    <StyledGrid
      columns={columns}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      autoFit={autoFit}
      autoFill={autoFill}
      minColumnWidth={minColumnWidth}
      maxColumnWidth={maxColumnWidth}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </StyledGrid>
  );
};
