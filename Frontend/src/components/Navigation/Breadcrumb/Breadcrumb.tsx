import React from 'react';
import styled from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../../types';

export interface BreadcrumbItem {
  /** Unique identifier for the breadcrumb item */
  id: string;
  /** Display text for the breadcrumb item */
  label: string;
  /** Optional icon for the breadcrumb item */
  icon?: React.ReactNode;
  /** Whether the breadcrumb item is active/current */
  active?: boolean;
  /** Whether the breadcrumb item is disabled */
  disabled?: boolean;
  /** Optional callback when item is clicked */
  onClick?: () => void;
  /** Optional URL for navigation */
  href?: string;
  /** Optional target for links */
  target?: string;
  /** Optional custom styling */
  customStyle?: React.CSSProperties;
}

export interface BreadcrumbProps extends BaseComponentProps {
  /** Array of breadcrumb items to display */
  items: BreadcrumbItem[];
  /** The variant/style of the breadcrumb */
  variant?: ComponentVariant;
  /** The size of the breadcrumb */
  size?: ComponentSize;
  /** The separator between breadcrumb items */
  separator?: string | React.ReactNode;
  /** Whether to show icons */
  showIcons?: boolean;
  /** Whether to show labels */
  showLabels?: boolean;
  /** Whether the breadcrumb is full width */
  fullWidth?: boolean;
  /** Whether the breadcrumb has a border */
  bordered?: boolean;
  /** Whether the breadcrumb has a shadow */
  shadowed?: boolean;
  /** Whether the breadcrumb is rounded */
  rounded?: boolean;
  /** Custom background color */
  backgroundColor?: string;
  /** Custom text color */
  textColor?: string;
  /** Custom border color */
  borderColor?: string;
  /** Whether the breadcrumb is interactive */
  interactive?: boolean;
  /** Callback when breadcrumb item is clicked */
  onItemClick?: (item: BreadcrumbItem) => void;
  /** Whether to show active indicators */
  showActiveIndicator?: boolean;
  /** Whether to show hover effects */
  showHoverEffects?: boolean;
  /** Whether to show focus indicators */
  showFocusIndicators?: boolean;
  /** Whether to truncate long labels */
  truncateLabels?: boolean;
  /** Maximum length for truncated labels */
  maxLabelLength?: number;
  /** Whether to show item badges */
  showBadges?: boolean;
  /** Whether to show item descriptions */
  showDescriptions?: boolean;
  /** Whether to show item counts */
  showCounts?: boolean;
  /** Whether to show item status */
  showStatus?: boolean;
  /** Whether to show item progress */
  showProgress?: boolean;
  /** Whether to show item loading */
  showLoading?: boolean;
  /** Whether to show item errors */
  showErrors?: boolean;
  /** Whether to show item warnings */
  showWarnings?: boolean;
  /** Whether to show item success */
  showSuccess?: boolean;
  /** Whether to show item info */
  showInfo?: boolean;
  /** Whether to show item secondary */
  showSecondary?: boolean;
  /** Whether to show item tertiary */
  showTertiary?: boolean;
  /** Whether to show item quaternary */
  showQuaternary?: boolean;
  /** Whether to show item quinary */
  showQuinary?: boolean;
  /** Whether to show item senary */
  showSenary?: boolean;
  /** Whether to show item septenary */
  showSeptenary?: boolean;
  /** Whether to show item octonary */
  showOctonary?: boolean;
  /** Whether to show item nonary */
  showNonary?: boolean;
  /** Whether to show item denary */
  showDenary?: boolean;
}

const BreadcrumbContainer = styled.nav<BreadcrumbProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme, size }) => {
    switch (size) {
      case 'xs': return theme.spacing.xs;
      case 'sm': return theme.spacing.sm;
      case 'lg': return theme.spacing.lg;
      case 'xl': return theme.spacing.xl;
      default: return theme.spacing.md;
    }
  }};
  padding: ${({ theme, size }) => {
    switch (size) {
      case 'xs': return theme.spacing.xs;
      case 'sm': return theme.spacing.sm;
      case 'lg': return theme.spacing.lg;
      case 'xl': return theme.spacing.xl;
      default: return theme.spacing.md;
    }
  }};
  border-radius: ${({ theme, rounded }) => rounded ? theme.borderRadius.lg : theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.lg;
      case 'xl': return theme.typography.sizes.xl;
      default: return theme.typography.sizes.md;
    }
  }};
  line-height: 1.5;
  transition: all 0.2s ease-in-out;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  /* Variant styles */
  background-color: ${({ variant, backgroundColor, theme }) => {
    if (backgroundColor) return backgroundColor;
    switch (variant) {
      case 'success':
        return theme.colors.success.light;
      case 'error':
        return theme.colors.error.light;
      case 'warning':
        return theme.colors.warning.light;
      case 'info':
        return theme.colors.info.light;
      case 'secondary':
        return theme.colors.secondary.light;
      default:
        return theme.colors.primary.light;
    }
  }};
  
  color: ${({ variant, textColor, theme }) => {
    if (textColor) return textColor;
    switch (variant) {
      case 'success':
        return theme.colors.success.dark;
      case 'error':
        return theme.colors.error.dark;
      case 'warning':
        return theme.colors.warning.dark;
      case 'info':
        return theme.colors.info.dark;
      case 'secondary':
        return theme.colors.secondary.dark;
      default:
        return theme.colors.primary.dark;
    }
  }};
  
  border: ${({ variant, borderColor, bordered, theme }) => {
    if (!bordered) return 'none';
    
    const borderColorValue = borderColor || (() => {
      switch (variant) {
        case 'success':
          return theme.colors.success.main;
        case 'error':
          return theme.colors.error.main;
        case 'warning':
          return theme.colors.warning.main;
        case 'info':
          return theme.colors.info.main;
        case 'secondary':
          return theme.colors.secondary.main;
        default:
          return theme.colors.primary.main;
      }
    })();
    
    return `1px solid ${borderColorValue}`;
  }};
  
  box-shadow: ${({ theme, shadowed }) => {
    if (!shadowed) return 'none';
    return theme.shadows.md;
  }};
  
  /* Responsive design */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const BreadcrumbItemContainer = styled.span<{ $active: boolean; $disabled: boolean; $interactive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: ${({ $disabled, $interactive }) => {
    if ($disabled) return 'not-allowed';
    if ($interactive) return 'pointer';
    return 'default';
  }};
  transition: all 0.2s ease-in-out;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  /* Active state */
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  color: ${({ $active, theme }) => $active ? theme.colors.primary.main : 'inherit'};
  
  /* Hover effects */
  &:hover {
    ${({ $disabled, $interactive }) => !$disabled && $interactive && `
      background-color: rgba(0, 0, 0, 0.1);
    `}
  }
  
  /* Focus indicators */
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  
  /* Disabled state */
  opacity: ${({ $disabled }) => $disabled ? 0.5 : 1};
  
  /* Responsive design */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const BreadcrumbIcon = styled.span<{ $size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '14px';
      case 'sm': return '16px';
      case 'lg': return '18px';
      case 'xl': return '20px';
      default: return '16px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '14px';
      case 'sm': return '16px';
      case 'lg': return '18px';
      case 'xl': return '20px';
      default: return '16px';
    }
  }};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '12px';
      case 'sm': return '14px';
      case 'lg': return '16px';
      case 'xl': return '18px';
      default: return '14px';
    }
  }};
`;

const BreadcrumbLabel = styled.span<{ $truncate: boolean; $maxLength: number }>`
  ${({ $truncate, $maxLength }) => $truncate && `
    max-width: ${$maxLength}px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

const BreadcrumbSeparator = styled.span<{ $size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  opacity: 0.6;
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '10px';
      case 'sm': return '12px';
      case 'lg': return '14px';
      case 'xl': return '16px';
      default: return '12px';
    }
  }};
  margin: 0 ${({ theme }) => theme.spacing.xs};
  
  /* Responsive design */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 ${({ theme }) => theme.spacing.xs};
  }
`;

const BreadcrumbLink = styled.a<{ $active: boolean; $disabled: boolean; $interactive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;
  color: inherit;
  cursor: ${({ $disabled, $interactive }) => {
    if ($disabled) return 'not-allowed';
    if ($interactive) return 'pointer';
    return 'default';
  }};
  transition: all 0.2s ease-in-out;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  /* Active state */
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  color: ${({ $active, theme }) => $active ? theme.colors.primary.main : 'inherit'};
  
  /* Hover effects */
  &:hover {
    ${({ $disabled, $interactive }) => !$disabled && $interactive && `
      background-color: rgba(0, 0, 0, 0.1);
    `}
  }
  
  /* Focus indicators */
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  
  /* Disabled state */
  opacity: ${({ $disabled }) => $disabled ? 0.5 : 1};
  
  /* Responsive design */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  variant = 'primary',
  size = 'md',
  separator = '/',
  showIcons = true,
  showLabels = true,
  fullWidth = false,
  bordered = false,
  shadowed = false,
  rounded = false,
  backgroundColor,
  textColor,
  borderColor,
  interactive = true,
  onItemClick,
  showActiveIndicator = true,
  showHoverEffects = true,
  showFocusIndicators = true,
  truncateLabels = false,
  maxLabelLength = 100,
  ...props
}) => {
  // Handle item click
  const handleItemClick = (item: BreadcrumbItem) => {
    if (item.disabled) return;
    
    item.onClick?.();
    onItemClick?.(item);
  };

  // Render breadcrumb item
  const renderBreadcrumbItem = (item: BreadcrumbItem, index: number) => {
    const isLast = index === items.length - 1;
    const isActive = item.active && showActiveIndicator;
    const isDisabled = item.disabled;
    const hasHref = item.href && !isLast;

    const itemContent = (
      <>
        {showIcons && item.icon && (
          <BreadcrumbIcon $size={size}>
            {item.icon}
          </BreadcrumbIcon>
        )}
        
        {showLabels && (
          <BreadcrumbLabel $truncate={truncateLabels} $maxLength={maxLabelLength}>
            {item.label}
          </BreadcrumbLabel>
        )}
      </>
    );

    if (hasHref) {
      return (
        <BreadcrumbLink
          key={item.id}
          href={item.href}
          target={item.target}
          $active={isActive}
          $disabled={isDisabled}
          $interactive={interactive}
          onClick={() => handleItemClick(item)}
        >
          {itemContent}
        </BreadcrumbLink>
      );
    }

    return (
      <BreadcrumbItemContainer
        key={item.id}
        $active={isActive}
        $disabled={isDisabled}
        $interactive={interactive}
        onClick={() => handleItemClick(item)}
        style={item.customStyle}
        tabIndex={interactive ? 0 : -1}
      >
        {itemContent}
      </BreadcrumbItemContainer>
    );
  };

  return (
    <BreadcrumbContainer
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      bordered={bordered}
      shadowed={shadowed}
      rounded={rounded}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      aria-label="Breadcrumb navigation"
      {...props}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {renderBreadcrumbItem(item, index)}
          {index < items.length - 1 && (
            <BreadcrumbSeparator $size={size}>
              {separator}
            </BreadcrumbSeparator>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};
