import React, { useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../../types';

export interface PaginationProps extends BaseComponentProps {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  pageSize?: number;
  variant?: ComponentVariant;
  size?: ComponentSize;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean | ((total: number, range: [number, number]) => string);
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  showPageNumbers?: boolean;
  maxPageNumbers?: number;
  pageSizeOptions?: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  disabled?: boolean;
  bordered?: boolean;
  shadowed?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
  compact?: boolean;
  simple?: boolean;
  customColors?: {
    activePageColor?: string;
    inactivePageColor?: string;
    activeTextColor?: string;
    inactiveTextColor?: string;
    borderColor?: string;
    backgroundColor?: string;
  };
}

const PaginationContainer = styled.div<{
  $fullWidth: boolean;
  $centered: boolean;
  $bordered: boolean;
  $shadowed: boolean;
  $rounded: boolean;
  $variant: ComponentVariant;
  $size: ComponentSize;
  $compact: boolean;
  $simple: boolean;
  $customColors?: PaginationProps['customColors'];
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme, $compact }) => $compact ? theme.spacing.xs : theme.spacing.sm};
  ${({ $fullWidth }) => $fullWidth && 'width: 100%; justify-content: center;'};
  ${({ $centered }) => $centered && 'justify-content: center;'};
  padding: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.spacing.xs;
      case 'sm': return theme.spacing.sm;
      case 'lg': return theme.spacing.md;
      case 'xl': return theme.spacing.lg;
      default: return theme.spacing.sm;
    }
  }};
  background: ${({ theme, $customColors }) => $customColors?.backgroundColor || theme.colors.background};
  border: ${({ $bordered, theme, $customColors }) => 
    $bordered ? `1px solid ${$customColors?.borderColor || theme.colors.border}` : 'none'};
  border-radius: ${({ $rounded, theme }) => $rounded ? theme.borderRadius.md : '0'};
  box-shadow: ${({ $shadowed, theme }) => $shadowed ? theme.shadows.sm : 'none'};
  
  ${({ $simple }) => $simple && css`
    gap: ${({ theme }) => theme.spacing.xs};
  `};
`;

const PageButton = styled.button<{
  $active: boolean;
  $disabled: boolean;
  $variant: ComponentVariant;
  $size: ComponentSize;
  $compact: boolean;
  $simple: boolean;
  $customColors?: PaginationProps['customColors'];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ $size, $compact }) => {
    if ($compact) return '28px';
    switch ($size) {
      case 'xs': return '24px';
      case 'sm': return '28px';
      case 'lg': return '36px';
      case 'xl': return '44px';
      default: return '32px';
    }
  }};
  height: ${({ $size, $compact }) => {
    if ($compact) return '28px';
    switch ($size) {
      case 'xs': return '24px';
      case 'sm': return '28px';
      case 'lg': return '36px';
      case 'xl': return '44px';
      default: return '32px';
    }
  }};
  padding: ${({ $size, $compact }) => {
    if ($compact) return '4px';
    switch ($size) {
      case 'xs': return '2px 4px';
      case 'sm': return '4px 6px';
      case 'lg': return '6px 10px';
      case 'xl': return '8px 12px';
      default: return '4px 8px';
    }
  }};
  border: 1px solid ${({ theme, $customColors }) => $customColors?.borderColor || theme.colors.border};
  border-radius: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.borderRadius.xs;
      case 'sm': return theme.borderRadius.sm;
      case 'lg': return theme.borderRadius.md;
      case 'xl': return theme.borderRadius.lg;
      default: return theme.borderRadius.sm;
    }
  }};
  background: ${({ theme, $active, $customColors }) => {
    if ($active) return $customColors?.activePageColor || theme.colors.primary.main;
    return theme.colors.background.primary;
  }};
  color: ${({ theme, $active, $disabled, $customColors }) => {
    if ($disabled) return theme.colors.text.disabled;
    if ($active) return $customColors?.activeTextColor || theme.colors.text.white;
    return $customColors?.inactiveTextColor || theme.colors.text.primary;
  }};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.md;
      case 'xl': return theme.typography.sizes.lg;
      default: return theme.typography.sizes.sm;
    }
  }};
  font-weight: ${({ theme, $active }) => $active ? theme.typography.weights.semibold : theme.typography.weights.normal};
  transition: all 0.2s ease;
  user-select: none;
  
  &:hover {
    ${({ $disabled, theme, $customColors }) => !$disabled && css`
      background: ${$customColors?.activePageColor || theme.colors.primary.light};
      color: ${$customColors?.activeTextColor || theme.colors.text.white};
      border-color: ${$customColors?.activePageColor || theme.colors.primary.main};
    `};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;
  }
  
  ${({ $simple }) => $simple && css`
    min-width: auto;
    padding: 4px 8px;
  `};
`;

const Ellipsis = styled.span<{ $size: ComponentSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '24px';
      case 'sm': return '28px';
      case 'lg': return '36px';
      case 'xl': return '44px';
      default: return '32px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '24px';
      case 'sm': return '28px';
      case 'lg': return '36px';
      case 'xl': return '44px';
      default: return '32px';
    }
  }};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.md;
      case 'xl': return theme.typography.sizes.lg;
      default: return theme.typography.sizes.sm;
    }
  }};
`;

const PageSizeSelector = styled.select<{ $size: ComponentSize }>`
  padding: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '2px 4px';
      case 'sm': return '4px 6px';
      case 'lg': return '6px 10px';
      case 'xl': return '8px 12px';
      default: return '4px 6px';
    }
  }};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.md;
      case 'xl': return theme.typography.sizes.lg;
      default: return theme.typography.sizes.sm;
    }
  }};
  cursor: pointer;
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;
  }
`;

const QuickJumper = styled.div<{ $size: ComponentSize }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  input {
    width: 50px;
    padding: ${({ $size }) => {
      switch ($size) {
        case 'xs': return '2px 4px';
        case 'sm': return '4px 6px';
        case 'lg': return '6px 10px';
        case 'xl': return '8px 12px';
        default: return '4px 6px';
      }
    }};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme, $size }) => {
      switch ($size) {
        case 'xs': return theme.typography.sizes.xs;
        case 'sm': return theme.typography.sizes.sm;
        case 'lg': return theme.typography.sizes.md;
        case 'xl': return theme.typography.sizes.lg;
        default: return theme.typography.sizes.sm;
      }
    }};
    text-align: center;
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary.main};
      outline-offset: 2px;
    }
  }
  
  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme, $size }) => {
      switch ($size) {
        case 'xs': return theme.typography.sizes.xs;
        case 'sm': return theme.typography.sizes.sm;
        case 'lg': return theme.typography.sizes.md;
        case 'xl': return theme.typography.sizes.lg;
        default: return theme.typography.sizes.sm;
      }
    }};
  }
`;

const TotalInfo = styled.div<{ $size: ComponentSize }>`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.md;
      case 'xl': return theme.typography.sizes.lg;
      default: return theme.typography.sizes.sm;
    }
  }};
  margin-right: ${({ theme }) => theme.spacing.md};
`;

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize = 10,
  variant = 'primary',
  size = 'md',
  showSizeChanger = false,
  showQuickJumper = false,
  showTotal = false,
  showPrevNext = true,
  showFirstLast = false,
  showPageNumbers = true,
  maxPageNumbers = 7,
  pageSizeOptions = [10, 20, 50, 100],
  onPageChange,
  onPageSizeChange,
  disabled = false,
  bordered = false,
  shadowed = false,
  rounded = false,
  fullWidth = false,
  centered = false,
  compact = false,
  simple = false,
  customColors,
  ...props
}) => {
  const [jumpPage, setJumpPage] = useState('');
  
  const pageNumbers = useMemo(() => {
    if (simple || !showPageNumbers) return [];
    
    const pages: (number | string)[] = [];
    const halfMax = Math.floor(maxPageNumbers / 2);
    
    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= halfMax + 1) {
        for (let i = 1; i <= maxPageNumbers - 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - halfMax) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - maxPageNumbers + 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - halfMax; i <= currentPage + halfMax; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  }, [currentPage, totalPages, maxPageNumbers, showPageNumbers, simple]);
  
  const handlePageChange = (page: number) => {
    if (disabled || page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };
  
  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = parseInt(event.target.value);
    onPageSizeChange?.(newPageSize);
  };
  
  const handleQuickJump = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const page = parseInt(jumpPage);
      if (page >= 1 && page <= totalPages) {
        handlePageChange(page);
        setJumpPage('');
      }
    }
  };
  
  const getTotalText = () => {
    if (typeof showTotal === 'function') {
      const start = (currentPage - 1) * pageSize + 1;
      const end = Math.min(currentPage * pageSize, totalItems || 0);
      return showTotal(totalItems || 0, [start, end]);
    }
    if (showTotal && totalItems) {
      const start = (currentPage - 1) * pageSize + 1;
      const end = Math.min(currentPage * pageSize, totalItems);
      return `Showing ${start}-${end} of ${totalItems} items`;
    }
    return null;
  };
  
  if (totalPages <= 1 && !showTotal && !showSizeChanger) {
    return null;
  }
  
  return (
    <PaginationContainer
      $fullWidth={fullWidth}
      $centered={centered}
      $bordered={bordered}
      $shadowed={shadowed}
      $rounded={rounded}
      $variant={variant}
      $size={size}
      $compact={compact}
      $simple={simple}
      $customColors={customColors}
      {...props}
    >
      {showTotal && getTotalText() && (
        <TotalInfo $size={size}>{getTotalText()}</TotalInfo>
      )}
      
      {showSizeChanger && (
        <>
          <span style={{ color: '#666', fontSize: '12px' }}>Show:</span>
          <PageSizeSelector
            $size={size}
            value={pageSize}
            onChange={handlePageSizeChange}
            disabled={disabled}
          >
            {pageSizeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </PageSizeSelector>
        </>
      )}
      
      {showFirstLast && (
        <PageButton
          $active={false}
          $disabled={disabled || currentPage === 1}
          $variant={variant}
          $size={size}
          $compact={compact}
          $simple={simple}
          $customColors={customColors}
          onClick={() => handlePageChange(1)}
          aria-label="Go to first page"
        >
          «
        </PageButton>
      )}
      
      {showPrevNext && (
        <PageButton
          $active={false}
          $disabled={disabled || currentPage === 1}
          $variant={variant}
          $size={size}
          $compact={compact}
          $simple={simple}
          $customColors={customColors}
          onClick={() => handlePageChange(currentPage - 1)}
          aria-label="Go to previous page"
        >
          ‹
        </PageButton>
      )}
      
      {showPageNumbers && !simple && pageNumbers.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <Ellipsis $size={size}>…</Ellipsis>
          ) : (
            <PageButton
              $active={page === currentPage}
              $disabled={disabled}
              $variant={variant}
              $size={size}
              $compact={compact}
              $simple={simple}
              $customColors={customColors}
              onClick={() => handlePageChange(page as number)}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </PageButton>
          )}
        </React.Fragment>
      ))}
      
      {simple && (
        <span style={{ color: '#666', fontSize: '12px' }}>
          {currentPage} / {totalPages}
        </span>
      )}
      
      {showPrevNext && (
        <PageButton
          $active={false}
          $disabled={disabled || currentPage === totalPages}
          $variant={variant}
          $size={size}
          $compact={compact}
          $simple={simple}
          $customColors={customColors}
          onClick={() => handlePageChange(currentPage + 1)}
          aria-label="Go to next page"
        >
          ›
        </PageButton>
      )}
      
      {showFirstLast && (
        <PageButton
          $active={false}
          $disabled={disabled || currentPage === totalPages}
          $variant={variant}
          $size={size}
          $compact={compact}
          $simple={simple}
          $customColors={customColors}
          onClick={() => handlePageChange(totalPages)}
          aria-label="Go to last page"
        >
          »
        </PageButton>
      )}
      
      {showQuickJumper && (
        <QuickJumper $size={size}>
          <span>Go to:</span>
          <input
            type="text"
            value={jumpPage}
            onChange={(e) => setJumpPage(e.target.value)}
            onKeyDown={handleQuickJump}
            placeholder="Page"
            disabled={disabled}
          />
        </QuickJumper>
      )}
    </PaginationContainer>
  );
};
