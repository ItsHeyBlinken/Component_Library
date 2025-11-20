/**
 * DatePicker Component
 * 
 * Purpose: Date and time selection with calendar view
 * 
 * Use Cases:
 * - Form date inputs
 * - Date range selection
 * - Calendar widgets
 * - Scheduling interfaces
 * - Date filtering
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

export type DatePickerMode = 'date' | 'datetime' | 'time' | 'range';
export type DateFormat = 'YYYY-MM-DD' | 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'DD-MM-YYYY';

export interface DatePickerProps extends BaseComponentProps {
  value?: Date | [Date, Date] | null;
  onChange?: (value: Date | [Date, Date] | null) => void;
  placeholder?: string;
  mode?: DatePickerMode;
  format?: DateFormat;
  disabled?: boolean;
  size?: ComponentSize;
  clearable?: boolean;
  minDate?: Date;
  maxDate?: Date;
  showTime?: boolean;
  width?: string;
}

const StyledDatePickerWrapper = styled.div<{ width?: string; disabled: boolean }>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
`;

const StyledInput = styled.input<{ 
  size: ComponentSize; 
  isOpen: boolean;
  hasValue: boolean;
}>`
  width: 100%;
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
  font-size: ${({ theme, size }) => {
    if (size === 'xs') return theme.typography.fontSize.xs;
    if (size === 'sm') return theme.typography.fontSize.sm;
    if (size === 'lg') return theme.typography.fontSize.lg;
    return theme.typography.fontSize.md; // md default
  }};
  color: ${({ theme, hasValue }) => 
    hasValue ? theme.colors.text.primary : theme.colors.text.secondary};
  transition: all 0.2s ease;
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

const StyledCalendar = styled.div<{ isOpen: boolean; width?: string }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: ${({ width }) => width || '320px'};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 1000;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  padding: ${({ theme }) => theme.spacing.md};
`;

const StyledCalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StyledCalendarNavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledCalendarTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const StyledCalendarWeekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StyledWeekday = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => theme.spacing.xs};
`;

const StyledCalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
`;

const StyledDay = styled.button<{ 
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isDisabled: boolean;
  isOtherMonth: boolean;
}>`
  aspect-ratio: 1;
  border: none;
  background-color: ${({ theme, isSelected, isInRange, isToday, isOtherMonth }) => {
    if (isSelected) return theme.colors.primary.main;
    if (isInRange) return theme.colors.primary.veryLight;
    if (isToday) return theme.colors.background.secondary;
    if (isOtherMonth) return 'transparent';
    return 'transparent';
  }};
  color: ${({ theme, isSelected, isDisabled, isOtherMonth }) => {
    if (isSelected) return theme.colors.white;
    if (isDisabled) return theme.colors.text.disabled;
    if (isOtherMonth) return theme.colors.text.disabled;
    return theme.colors.text.primary;
  }};
  border-radius: ${({ theme, isRangeStart, isRangeEnd }) => {
    if (isRangeStart || isRangeEnd) return theme.borderRadius.md;
    return theme.borderRadius.sm;
  }};
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all 0.2s ease;
  position: relative;
  
  ${({ isRangeStart, isRangeEnd, theme }) => {
    if (isRangeStart) {
      return `border-top-left-radius: ${theme.borderRadius.md}; border-bottom-left-radius: ${theme.borderRadius.md};`;
    }
    if (isRangeEnd) {
      return `border-top-right-radius: ${theme.borderRadius.md}; border-bottom-right-radius: ${theme.borderRadius.md};`;
    }
    return '';
  }}
  
  &:hover:not(:disabled) {
    background-color: ${({ theme, isSelected, isInRange }) => {
      if (isSelected) return theme.colors.primary.dark;
      if (isInRange) return theme.colors.primary.light;
      return theme.colors.background.hover;
    }};
  }
  
  &:disabled {
    opacity: 0.5;
  }
  
  ${({ isToday, theme }) => isToday && !isSelected && `
    border: 1px solid ${theme.colors.primary.main};
  `}
`;

const StyledTimePicker = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

const StyledTimeInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select date...',
  mode = 'date',
  format = 'YYYY-MM-DD',
  disabled = false,
  size = 'md',
  clearable = false,
  minDate,
  maxDate,
  showTime = false,
  width,
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timeValue, setTimeValue] = useState('00:00');
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Initialize current month from value
  useEffect(() => {
    if (value) {
      const date = Array.isArray(value) ? value[0] : value;
      setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
      if (showTime && date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        setTimeValue(`${hours}:${minutes}`);
      }
    }
  }, [value, showTime]);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Format date
  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    switch (format) {
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      case 'DD-MM-YYYY':
        return `${day}-${month}-${year}`;
      default:
        return `${year}-${month}-${day}`;
    }
  };

  // Get display value
  const getDisplayValue = (): string => {
    if (!value) return '';
    
    if (Array.isArray(value)) {
      if (value[0] && value[1]) {
        return `${formatDate(value[0])} - ${formatDate(value[1])}`;
      }
      if (value[0]) {
        return formatDate(value[0]);
      }
      return '';
    }
    
    const dateStr = formatDate(value);
    if (showTime && value) {
      const hours = String(value.getHours()).padStart(2, '0');
      const minutes = String(value.getMinutes()).padStart(2, '0');
      return `${dateStr} ${hours}:${minutes}`;
    }
    
    return dateStr;
  };

  // Get calendar days
  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days: (Date | null)[] = [];
    
    // Previous month days
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthDays - i));
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    return days;
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    if (mode === 'range') {
      if (Array.isArray(value)) {
        if (!value[0] || (value[0] && value[1])) {
          // Start new range
          if (onChange) {
            onChange([date, null as any]);
          }
        } else if (value[0] && !value[1]) {
          // Complete range
          if (date < value[0]) {
            if (onChange) {
              onChange([date, value[0]]);
            }
          } else {
            if (onChange) {
              onChange([value[0], date]);
            }
          }
          setIsOpen(false);
        }
      } else {
        if (onChange) {
          onChange([date, null as any]);
        }
      }
    } else {
      let selectedDate = date;
      
      if (showTime && value && !Array.isArray(value)) {
        selectedDate = new Date(date);
        selectedDate.setHours(value.getHours());
        selectedDate.setMinutes(value.getMinutes());
      } else if (showTime && timeValue) {
        selectedDate = new Date(date);
        const [hours, minutes] = timeValue.split(':').map(Number);
        selectedDate.setHours(hours);
        selectedDate.setMinutes(minutes);
      }
      
      if (onChange) {
        onChange(selectedDate);
      }
      
      if (mode === 'date' && !showTime) {
        setIsOpen(false);
      }
    }
  };

  // Handle time change
  const handleTimeChange = (time: string) => {
    setTimeValue(time);
    
    if (value && !Array.isArray(value)) {
      const [hours, minutes] = time.split(':').map(Number);
      const newDate = new Date(value);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      
      if (onChange) {
        onChange(newDate);
      }
    }
  };

  // Navigate months
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  // Check if date is disabled
  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  // Check if date is in range
  const isDateInRange = (date: Date): boolean => {
    if (!Array.isArray(value) || !value[0] || !value[1]) return false;
    return date >= value[0] && date <= value[1];
  };

  const calendarDays = getCalendarDays();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const selectedDate = Array.isArray(value) ? null : value;
  const rangeStart = Array.isArray(value) ? value[0] : null;
  const rangeEnd = Array.isArray(value) ? value[1] : null;

  return (
    <StyledDatePickerWrapper 
      ref={wrapperRef}
      width={width}
      disabled={disabled}
      className={className}
      style={style}
    >
      <div style={{ position: 'relative' }}>
        <StyledInput
          type="text"
          size={size}
          isOpen={isOpen}
          hasValue={!!value}
          value={getDisplayValue()}
          placeholder={placeholder}
          readOnly
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onFocus={() => !disabled && setIsOpen(true)}
        />
        {clearable && value && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onChange) {
                onChange(null);
              }
            }}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0 4px',
              color: '#666',
              fontSize: '18px',
              lineHeight: 1,
            }}
            aria-label="Clear date"
          >
            ×
          </button>
        )}
      </div>

      {isOpen && (
        <StyledCalendar isOpen={isOpen} width={width}>
          <StyledCalendarHeader>
            <StyledCalendarNavButton
              onClick={() => navigateMonth('prev')}
              aria-label="Previous month"
            >
              ‹
            </StyledCalendarNavButton>
            <StyledCalendarTitle>
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </StyledCalendarTitle>
            <StyledCalendarNavButton
              onClick={() => navigateMonth('next')}
              aria-label="Next month"
            >
              ›
            </StyledCalendarNavButton>
          </StyledCalendarHeader>

          <StyledCalendarWeekdays>
            {weekdays.map((day) => (
              <StyledWeekday key={day}>{day}</StyledWeekday>
            ))}
          </StyledCalendarWeekdays>

          <StyledCalendarDays>
            {calendarDays.map((date, index) => {
              if (!date) return <div key={index} />;
              
              const dateOnly = new Date(date);
              dateOnly.setHours(0, 0, 0, 0);
              
              const isToday = dateOnly.getTime() === today.getTime();
              const isSelected = selectedDate && 
                dateOnly.getTime() === new Date(selectedDate).setHours(0, 0, 0, 0);
              const isInRange = isDateInRange(date);
              const isRangeStart = rangeStart && 
                dateOnly.getTime() === new Date(rangeStart).setHours(0, 0, 0, 0);
              const isRangeEnd = rangeEnd && 
                dateOnly.getTime() === new Date(rangeEnd).setHours(0, 0, 0, 0);
              const isDisabled = isDateDisabled(date);
              const isOtherMonth = date.getMonth() !== currentMonth.getMonth();
              
              return (
                <StyledDay
                  key={index}
                  isToday={isToday}
                  isSelected={!!isSelected}
                  isInRange={isInRange}
                  isRangeStart={!!isRangeStart}
                  isRangeEnd={!!isRangeEnd}
                  isDisabled={isDisabled}
                  isOtherMonth={isOtherMonth}
                  onClick={() => !isDisabled && handleDateSelect(date)}
                  disabled={isDisabled}
                >
                  {date.getDate()}
                </StyledDay>
              );
            })}
          </StyledCalendarDays>

          {showTime && (
            <StyledTimePicker>
              <label style={{ fontSize: '14px', color: '#666' }}>Time:</label>
              <StyledTimeInput
                type="time"
                value={timeValue}
                onChange={(e) => handleTimeChange(e.target.value)}
              />
            </StyledTimePicker>
          )}
        </StyledCalendar>
      )}
    </StyledDatePickerWrapper>
  );
};

