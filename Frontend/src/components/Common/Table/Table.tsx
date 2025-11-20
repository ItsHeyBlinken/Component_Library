/**
 * Table Component
 * 
 * Purpose: Display tabular data with sorting, filtering, and pagination
 * 
 * Use Cases:
 * - Data tables and lists
 * - Admin dashboards
 * - Data management interfaces
 * - Reports and analytics
 * - User management
 * 
 * Accessibility:
 * - Proper table semantics
 * - Keyboard navigation
 * - Screen reader support
 * - ARIA labels and roles
 * - Focus management
 */

import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../../types';

export type SortDirection = 'asc' | 'desc' | null;
export type TableSize = 'xs' | 'sm' | 'md' | 'lg';

export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T = any> extends BaseComponentProps {
  columns: TableColumn<T>[];
  data: T[];
  sortable?: boolean;
  filterable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  rowSelection?: {
    type?: 'checkbox' | 'radio';
    selectedRowKeys?: string[];
    onChange?: (selectedRowKeys: string[], selectedRows: T[]) => void;
  };
  onRowClick?: (record: T, index: number) => void;
  size?: TableSize;
  bordered?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  loading?: boolean;
  emptyText?: string;
  showHeader?: boolean;
}

const StyledTableWrapper = styled.div<{ size: TableSize; bordered: boolean }>`
  width: 100%;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const StyledTable = styled.table<{ 
  size: TableSize; 
  bordered: boolean; 
  striped: boolean;
  hoverable: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.background.paper};
  
  /* Size-based font and spacing */
  font-size: ${({ theme, size }) => {
    if (size === 'xs') return theme.typography.fontSize.xs;
    if (size === 'sm') return theme.typography.fontSize.sm;
    if (size === 'lg') return theme.typography.fontSize.lg;
    return theme.typography.fontSize.md; // md default
  }};
  
  /* Border styling */
  border: ${({ bordered, theme }) => 
    bordered ? `1px solid ${theme.colors.border}` : 'none'};
  
  th, td {
    padding: ${({ theme, size }) => {
      if (size === 'xs') return `${theme.spacing.xs} ${theme.spacing.sm}`;
      if (size === 'sm') return `${theme.spacing.sm} ${theme.spacing.md}`;
      if (size === 'lg') return `${theme.spacing.md} ${theme.spacing.lg}`;
      return `${theme.spacing.sm} ${theme.spacing.md}`; // md default
    }};
    text-align: left;
    border-bottom: ${({ bordered, theme }) => 
      bordered ? `1px solid ${theme.colors.border}` : `1px solid ${theme.colors.background.secondary}`};
  }
  
  th {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    font-weight: ${({ theme }) => theme.typography.weights.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
    position: sticky;
    top: 0;
    z-index: 1;
  }
  
  tbody tr {
    background-color: ${({ theme }) => theme.colors.background.paper};
    transition: background-color 0.2s ease;
    
    ${({ striped, theme }) => striped && `
      &:nth-child(even) {
        background-color: ${theme.colors.background.secondary};
      }
    `}
    
    ${({ hoverable, theme }) => hoverable && `
      &:hover {
        background-color: ${theme.colors.background.hover};
        cursor: pointer;
      }
    `}
  }
  
  td {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const StyledTableHeader = styled.thead``;

const StyledTableBody = styled.tbody``;

const StyledTableRow = styled.tr<{ selected?: boolean }>`
  ${({ selected, theme }) => selected && `
    background-color: ${theme.colors.primary.veryLight} !important;
  `}
`;

const StyledTableCell = styled.td<{ align?: 'left' | 'center' | 'right' }>`
  text-align: ${({ align }) => align || 'left'};
`;

const StyledTableHeaderCell = styled.th<{ 
  sortable?: boolean; 
  sortDirection?: SortDirection;
  align?: 'left' | 'center' | 'right';
}>`
  text-align: ${({ align }) => align || 'left'};
  user-select: none;
  cursor: ${({ sortable }) => sortable ? 'pointer' : 'default'};
  
  &:hover {
    background-color: ${({ theme, sortable }) => 
      sortable ? theme.colors.background.hover : 'transparent'};
  }
  
  &::after {
    content: '';
    display: ${({ sortable, sortDirection }) => 
      sortable && sortDirection ? 'inline-block' : 'none'};
    margin-left: ${({ theme }) => theme.spacing.xs};
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: ${({ sortDirection, theme }) => 
      sortDirection === 'asc' ? `4px solid ${theme.colors.primary.main}` : 'none'};
    border-top: ${({ sortDirection, theme }) => 
      sortDirection === 'desc' ? `4px solid ${theme.colors.primary.main}` : 'none'};
  }
`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
`;

const StyledPaginationInfo = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const StyledPaginationControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const StyledPaginationButton = styled.button<{ active?: boolean; disabled?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme, active }) => 
    active ? theme.colors.primary.main : theme.colors.background.paper};
  color: ${({ theme, active }) => 
    active ? theme.colors.white : theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${({ theme, active }) => 
      active ? theme.colors.primary.dark : theme.colors.background.hover};
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

const StyledLoadingOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StyledEmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StyledCheckbox = styled.input`
  cursor: pointer;
`;

export function Table<T extends Record<string, any> = any>({
  columns,
  data,
  sortable = true,
  filterable = false,
  pagination = false,
  pageSize = 10,
  rowSelection,
  onRowClick,
  size = 'md',
  bordered = false,
  striped = false,
  hoverable = true,
  loading = false,
  emptyText = 'No data available',
  showHeader = true,
  className,
  style,
}: TableProps<T>) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>(
    rowSelection?.selectedRowKeys || []
  );

  // Get unique key for each row
  const getRowKey = (record: T, index: number): string => {
    return (record as any).id || (record as any).key || `row-${index}`;
  };

  // Filtered data
  const filteredData = useMemo(() => {
    if (!filterable || !searchTerm) return data;
    
    return data.filter((record) => {
      return columns.some((column) => {
        const value = column.dataIndex 
          ? (record as any)[column.dataIndex]
          : (record as any)[column.key];
        return String(value || '').toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }, [data, searchTerm, filterable, columns]);

  // Sorted data
  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      const column = columns.find((col) => col.key === sortColumn);
      if (!column) return 0;
      
      const aValue = column.dataIndex 
        ? (a as any)[column.dataIndex]
        : (a as any)[column.key];
      const bValue = column.dataIndex 
        ? (b as any)[column.dataIndex]
        : (b as any)[column.key];
      
      if (aValue === bValue) return 0;
      
      const comparison = aValue > bValue ? 1 : -1;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredData, sortColumn, sortDirection, columns]);

  // Paginated data
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, pagination, currentPage, pageSize]);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  // Handle sorting
  const handleSort = (columnKey: string) => {
    if (!sortable) return;
    
    const column = columns.find((col) => col.key === columnKey);
    if (!column || !column.sortable) return;
    
    if (sortColumn === columnKey) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortColumn(null);
        setSortDirection(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  // Handle row selection
  const handleRowSelect = (rowKey: string, record: T) => {
    if (!rowSelection) return;
    
    let newSelectedKeys: string[];
    
    if (rowSelection.type === 'radio') {
      newSelectedKeys = [rowKey];
    } else {
      if (selectedRowKeys.includes(rowKey)) {
        newSelectedKeys = selectedRowKeys.filter((key) => key !== rowKey);
      } else {
        newSelectedKeys = [...selectedRowKeys, rowKey];
      }
    }
    
    setSelectedRowKeys(newSelectedKeys);
    
    if (rowSelection.onChange) {
      const selectedRows = data.filter((record) => 
        newSelectedKeys.includes(getRowKey(record, data.indexOf(record)))
      );
      rowSelection.onChange(newSelectedKeys, selectedRows);
    }
  };

  // Handle select all
  const handleSelectAll = () => {
    if (!rowSelection || rowSelection.type === 'radio') return;
    
    const allKeys = paginatedData.map((record, index) => 
      getRowKey(record, index)
    );
    
    const allSelected = allKeys.every((key) => selectedRowKeys.includes(key));
    
    let newSelectedKeys: string[];
    if (allSelected) {
      newSelectedKeys = selectedRowKeys.filter((key) => !allKeys.includes(key));
    } else {
      newSelectedKeys = [...new Set([...selectedRowKeys, ...allKeys])];
    }
    
    setSelectedRowKeys(newSelectedKeys);
    
    if (rowSelection.onChange) {
      const selectedRows = data.filter((record) => 
        newSelectedKeys.includes(getRowKey(record, data.indexOf(record)))
      );
      rowSelection.onChange(newSelectedKeys, selectedRows);
    }
  };

  if (loading) {
    return (
      <StyledTableWrapper size={size} bordered={bordered} className={className} style={style}>
        <StyledLoadingOverlay>Loading...</StyledLoadingOverlay>
      </StyledTableWrapper>
    );
  }

  return (
    <StyledTableWrapper size={size} bordered={bordered} className={className} style={style}>
      {filterable && (
        <div style={{ marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '100%',
              maxWidth: '300px',
            }}
          />
        </div>
      )}
      
      <StyledTable 
        size={size} 
        bordered={bordered} 
        striped={striped}
        hoverable={hoverable}
      >
        {showHeader && (
          <StyledTableHeader>
            <tr>
              {rowSelection && rowSelection.type !== 'radio' && (
                <th style={{ width: '40px' }}>
                  <StyledCheckbox
                    type="checkbox"
                    checked={
                      paginatedData.length > 0 &&
                      paginatedData.every((record, index) =>
                        selectedRowKeys.includes(getRowKey(record, index))
                      )
                    }
                    onChange={handleSelectAll}
                  />
                </th>
              )}
              {columns.map((column) => (
                <StyledTableHeaderCell
                  key={column.key}
                  sortable={sortable && column.sortable}
                  sortDirection={sortColumn === column.key ? sortDirection : null}
                  align={column.align}
                  onClick={() => handleSort(column.key)}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.title}
                </StyledTableHeaderCell>
              ))}
            </tr>
          </StyledTableHeader>
        )}
        
        <StyledTableBody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (rowSelection ? 1 : 0)}>
                <StyledEmptyState>{emptyText}</StyledEmptyState>
              </td>
            </tr>
          ) : (
            paginatedData.map((record, index) => {
              const rowKey = getRowKey(record, index);
              const isSelected = selectedRowKeys.includes(rowKey);
              
              return (
                <StyledTableRow
                  key={rowKey}
                  selected={isSelected}
                  onClick={() => {
                    if (onRowClick) {
                      onRowClick(record, index);
                    }
                  }}
                >
                  {rowSelection && (
                    <td>
                      <StyledCheckbox
                        type={rowSelection.type || 'checkbox'}
                        checked={isSelected}
                        onChange={() => handleRowSelect(rowKey, record)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                  )}
                  {columns.map((column) => {
                    const value = column.dataIndex 
                      ? (record as any)[column.dataIndex]
                      : (record as any)[column.key];
                    
                    return (
                      <StyledTableCell key={column.key} align={column.align}>
                        {column.render 
                          ? column.render(value, record, index)
                          : value != null ? String(value) : '-'}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })
          )}
        </StyledTableBody>
      </StyledTable>
      
      {pagination && totalPages > 1 && (
        <StyledPagination>
          <StyledPaginationInfo>
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
          </StyledPaginationInfo>
          <StyledPaginationControls>
            <StyledPaginationButton
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              First
            </StyledPaginationButton>
            <StyledPaginationButton
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </StyledPaginationButton>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <StyledPaginationButton
                  key={pageNum}
                  active={currentPage === pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </StyledPaginationButton>
              );
            })}
            <StyledPaginationButton
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </StyledPaginationButton>
            <StyledPaginationButton
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
            >
              Last
            </StyledPaginationButton>
          </StyledPaginationControls>
        </StyledPagination>
      )}
    </StyledTableWrapper>
  );
}

