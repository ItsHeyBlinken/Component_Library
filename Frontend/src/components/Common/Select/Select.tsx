/**
 * Select Component
 * 
 * Purpose: Dropdown selection with search and multi-select
 * 
 * Use Cases:
 * - Form dropdowns
 * - Single and multi-select options
 * - Searchable option lists
 * - Filter dropdowns
 * - Category selection
 * 
 * Accessibility:
 * - Keyboard navigation
 * - Screen reader support
 * - ARIA labels and roles
 * - Focus management
 */

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BaseComponentProps, ComponentSize } from '../../../types';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  group?: string;
}

export interface SelectProps extends BaseComponentProps {
  options: SelectOption[];
  value?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[]) => void;
  placeholder?: string;
  multiple?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  size?: ComponentSize;
  clearable?: boolean;
  loading?: boolean;
  emptyText?: string;
  maxHeight?: string;
  width?: string;
}

const StyledSelectWrapper = styled.div<{ width?: string; disabled: boolean }>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
`;

const StyledSelectTrigger = styled.div<{ 
  size: ComponentSize; 
  isOpen: boolean;
  hasValue: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme, size }) => {
    if (size === 'xs') return `${theme.spacing.xs} ${theme.spacing.sm}`;
    if (size === 'sm') return `${theme.spacing.sm} ${theme.spacing.md}`;
    if (size === 'lg') return `${theme.spacing.md} ${theme.spacing.lg}`;
    return `${theme.spacing.sm} ${theme.spacing.md}`; // md default
  }};
  border: 1px solid ${({ theme, isOpen }) => 
    isOpen ? theme.colors.primary.main : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background.paper};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: ${({ theme, size }) => {
    if (size === 'xs') return theme.typography.fontSize.xs;
    if (size === 'sm') return theme.typography.fontSize.sm;
    if (size === 'lg') return theme.typography.fontSize.lg;
    return theme.typography.fontSize.md; // md default
  }};
  color: ${({ theme, hasValue }) => 
    hasValue ? theme.colors.text.primary : theme.colors.text.secondary};
  min-height: ${({ size }) => {
    if (size === 'xs') return '28px';
    if (size === 'sm') return '32px';
    if (size === 'lg') return '44px';
    return '36px'; // md default
  }};
  
  &:hover {
    border-color: ${({ theme, isOpen }) => 
      isOpen ? theme.colors.primary.main : theme.colors.primary.light};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.veryLight};
  }
`;

const StyledSelectValue = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
`;

const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.primary.veryLight};
  color: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  
  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary.main};
    cursor: pointer;
    padding: 0;
    margin-left: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    line-height: 1;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;

const StyledSelectIcon = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: ${({ isOpen, theme }) => 
    isOpen ? 'none' : `5px solid ${theme.colors.text.secondary}`};
  border-bottom: ${({ isOpen, theme }) => 
    isOpen ? `5px solid ${theme.colors.text.secondary}` : 'none'};
  transition: transform 0.2s ease;
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

const StyledDropdown = styled.div<{ 
  isOpen: boolean; 
  maxHeight?: string;
  width?: string;
}>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  width: ${({ width }) => width || '100%'};
  max-height: ${({ maxHeight }) => maxHeight || '300px'};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 1000;
  overflow: hidden;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
`;

const StyledSearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background.paper};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const StyledOptionsList = styled.div`
  max-height: 250px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

const StyledOptionGroup = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

const StyledOption = styled.div<{ 
  selected: boolean; 
  disabled?: boolean;
  highlighted: boolean;
}>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  background-color: ${({ theme, selected, highlighted }) => {
    if (selected) return theme.colors.primary.veryLight;
    if (highlighted) return theme.colors.background.hover;
    return 'transparent';
  }};
  color: ${({ theme, disabled, selected }) => {
    if (disabled) return theme.colors.text.disabled;
    if (selected) return theme.colors.primary.main;
    return theme.colors.text.primary;
  }};
  transition: background-color 0.15s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    background-color: ${({ theme, disabled, selected }) => {
      if (disabled) return 'transparent';
      if (selected) return theme.colors.primary.veryLight;
      return theme.colors.background.hover;
    }};
  }
  
  input[type="checkbox"] {
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  }
`;

const StyledEmptyState = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const StyledLoadingState = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  multiple = false,
  searchable = false,
  disabled = false,
  size = 'md',
  clearable = false,
  loading = false,
  emptyText = 'No options available',
  maxHeight = '300px',
  width,
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      if (searchable && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, searchable]);

  // Filter options based on search term
  const filteredOptions = options.filter((option) => {
    if (!searchTerm) return true;
    return option.label.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Group options by group property
  const groupedOptions = filteredOptions.reduce((acc, option) => {
    const group = option.group || 'default';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {} as Record<string, SelectOption[]>);

  // Get selected options
  const selectedValues = Array.isArray(value) ? value : value !== undefined ? [value] : [];
  const hasValue = selectedValues.length > 0;

  // Get display text
  const getDisplayText = () => {
    if (multiple) {
      if (selectedValues.length === 0) return placeholder;
      if (selectedValues.length === 1) {
        const option = options.find((opt) => opt.value === selectedValues[0]);
        return option?.label || placeholder;
      }
      return `${selectedValues.length} selected`;
    }
    
    const option = options.find((opt) => opt.value === value);
    return option?.label || placeholder;
  };

  // Handle option selection
  const handleSelect = (optionValue: string | number) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      
      if (onChange) {
        onChange(newValues);
      }
    } else {
      if (onChange) {
        onChange(optionValue);
      }
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // Handle clear
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onChange) {
      onChange(multiple ? [] : undefined as any);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          const flatOptions = Object.values(groupedOptions).flat();
          if (flatOptions[highlightedIndex]) {
            handleSelect(flatOptions[highlightedIndex].value);
          }
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const flatOptions = Object.values(groupedOptions).flat();
          setHighlightedIndex((prev) => 
            prev < flatOptions.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSearchTerm('');
        break;
    }
  };

  const isSelected = (optionValue: string | number) => {
    return selectedValues.includes(optionValue);
  };

  return (
    <StyledSelectWrapper 
      ref={wrapperRef}
      width={width}
      disabled={disabled}
      className={className}
      style={style}
    >
      <StyledSelectTrigger
        size={size}
        isOpen={isOpen}
        hasValue={hasValue}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <StyledSelectValue>
          {multiple && selectedValues.length > 0 ? (
            selectedValues.slice(0, 2).map((val) => {
              const option = options.find((opt) => opt.value === val);
              if (!option) return null;
              return (
                <StyledTag key={val}>
                  {option.label}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(val);
                    }}
                    aria-label={`Remove ${option.label}`}
                  >
                    ×
                  </button>
                </StyledTag>
              );
            }).concat(
              selectedValues.length > 2 ? (
                <StyledTag key="more">+{selectedValues.length - 2} more</StyledTag>
              ) : null
            )
          ) : (
            <span>{getDisplayText()}</span>
          )}
        </StyledSelectValue>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {clearable && hasValue && (
            <button
              type="button"
              onClick={handleClear}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0 4px',
                color: '#666',
                fontSize: '18px',
                lineHeight: 1,
              }}
              aria-label="Clear selection"
            >
              ×
            </button>
          )}
          <StyledSelectIcon isOpen={isOpen} />
        </div>
      </StyledSelectTrigger>

      <StyledDropdown 
        isOpen={isOpen} 
        maxHeight={maxHeight}
        width={width}
        role="listbox"
      >
        {searchable && (
          <StyledSearchInput
            ref={searchInputRef}
            type="text"
            placeholder="Search options..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setHighlightedIndex(-1);
            }}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        {loading ? (
          <StyledLoadingState>Loading...</StyledLoadingState>
        ) : filteredOptions.length === 0 ? (
          <StyledEmptyState>{emptyText}</StyledEmptyState>
        ) : (
          <StyledOptionsList>
            {Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
              <div key={groupName}>
                {groupName !== 'default' && (
                  <StyledOptionGroup>{groupName}</StyledOptionGroup>
                )}
                {groupOptions.map((option, index) => {
                  const flatIndex = Object.values(groupedOptions)
                    .slice(0, Object.keys(groupedOptions).indexOf(groupName))
                    .reduce((sum, arr) => sum + arr.length, 0) + index;
                  const selected = isSelected(option.value);
                  
                  return (
                    <StyledOption
                      key={option.value}
                      selected={selected}
                      disabled={option.disabled}
                      highlighted={flatIndex === highlightedIndex}
                      onClick={() => !option.disabled && handleSelect(option.value)}
                      role="option"
                      aria-selected={selected}
                    >
                      {multiple && (
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => {}}
                          disabled={option.disabled}
                        />
                      )}
                      {selected && !multiple && (
                        <span style={{ color: '#007bff' }}>✓</span>
                      )}
                      <span>{option.label}</span>
                    </StyledOption>
                  );
                })}
              </div>
            ))}
          </StyledOptionsList>
        )}
      </StyledDropdown>
    </StyledSelectWrapper>
  );
};

