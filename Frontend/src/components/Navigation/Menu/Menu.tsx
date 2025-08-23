import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../../types';

export interface MenuItem {
  /** Unique identifier for the menu item */
  id: string;
  /** Display text for the menu item */
  label: string;
  /** Optional icon for the menu item */
  icon?: React.ReactNode;
  /** Optional submenu items */
  children?: MenuItem[];
  /** Whether the menu item is disabled */
  disabled?: boolean;
  /** Whether the menu item is active/selected */
  active?: boolean;
  /** Optional divider after this item */
  divider?: boolean;
  /** Optional callback when item is clicked */
  onClick?: () => void;
  /** Optional URL for navigation */
  href?: string;
  /** Optional target for links */
  target?: string;
}

export interface MenuProps extends BaseComponentProps {
  /** Array of menu items to display */
  items: MenuItem[];
  /** The variant/style of the menu */
  variant?: ComponentVariant;
  /** The size of the menu */
  size?: ComponentSize;
  /** Whether the menu is horizontal or vertical */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the menu is collapsed/condensed */
  collapsed?: boolean;
  /** Whether to show icons */
  showIcons?: boolean;
  /** Whether to show labels */
  showLabels?: boolean;
  /** Whether the menu is full width */
  fullWidth?: boolean;
  /** Whether the menu has a border */
  bordered?: boolean;
  /** Whether the menu has a shadow */
  shadowed?: boolean;
  /** Whether the menu is rounded */
  rounded?: boolean;
  /** Custom background color */
  backgroundColor?: string;
  /** Custom text color */
  textColor?: string;
  /** Custom border color */
  borderColor?: string;
  /** Whether the menu is interactive */
  interactive?: boolean;
  /** Callback when menu item is clicked */
  onItemClick?: (item: MenuItem) => void;
  /** Whether to show active indicators */
  showActiveIndicator?: boolean;
  /** Whether to show hover effects */
  showHoverEffects?: boolean;
  /** Whether to show focus indicators */
  showFocusIndicators?: boolean;
  /** Whether to auto-expand submenus on hover */
  autoExpandSubmenus?: boolean;
  /** Whether to close submenus when clicking outside */
  closeOnClickOutside?: boolean;
  /** Whether to close submenus when clicking item */
  closeOnItemClick?: boolean;
  /** Whether to show submenu arrows */
  showSubmenuArrows?: boolean;
  /** Whether to show item badges */
  showBadges?: boolean;
  /** Whether to show item descriptions */
  showDescriptions?: boolean;
  /** Whether to show item shortcuts */
  showShortcuts?: boolean;
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

const MenuContainer = styled.div<MenuProps & { $orientation: string; $collapsed: boolean }>`
  display: flex;
  flex-direction: ${({ $orientation }) => $orientation === 'horizontal' ? 'row' : 'column'};
  align-items: ${({ $orientation }) => $orientation === 'horizontal' ? 'center' : 'stretch'};
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
  position: relative;
  width: ${({ fullWidth, $collapsed, $orientation }) => {
    if (fullWidth) return '100%';
    if ($collapsed && $orientation === 'vertical') return 'auto';
    return 'auto';
  }};
  min-width: ${({ $collapsed, $orientation }) => {
    if ($collapsed && $orientation === 'vertical') return '48px';
    return 'auto';
  }};
  
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
    flex-direction: column;
    width: 100%;
  }
`;

const MenuItemContainer = styled.div<{ $active: boolean; $disabled: boolean; $orientation: string; $collapsed: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme, $collapsed, $orientation }) => {
    if ($collapsed && $orientation === 'vertical') {
      return `${theme.spacing.xs} ${theme.spacing.xs}`;
    }
    return `${theme.spacing.sm} ${theme.spacing.md}`;
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease-in-out;
  position: relative;
  white-space: nowrap;
  min-width: ${({ $collapsed, $orientation }) => {
    if ($collapsed && $orientation === 'vertical') return '32px';
    return 'auto';
  }};
  
  /* Active state */
  background-color: ${({ $active, theme }) => $active ? theme.colors.primary.main : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.colors.white : 'inherit'};
  
  /* Hover effects */
  &:hover {
    ${({ $disabled, $active }) => !$disabled && !$active && `
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
    width: 100%;
    justify-content: flex-start;
  }
`;

const MenuItemIcon = styled.div<{ $size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '18px';
      case 'lg': return '20px';
      case 'xl': return '24px';
      default: return '18px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '18px';
      case 'lg': return '20px';
      case 'xl': return '24px';
      default: return '18px';
    }
  }};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '14px';
      case 'sm': return '16px';
      case 'lg': return '18px';
      case 'xl': return '20px';
      default: return '16px';
    }
  }};
`;

const MenuItemLabel = styled.span<{ $collapsed: boolean; $orientation: string }>`
  display: ${({ $collapsed, $orientation }) => {
    if ($collapsed && $orientation === 'vertical') return 'none';
    return 'block';
  }};
  font-weight: 500;
`;

const SubmenuArrow = styled.div<{ $expanded: boolean; $orientation: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  transition: transform 0.2s ease;
  transform: ${({ $expanded, $orientation }) => {
    if ($orientation === 'horizontal') {
      return $expanded ? 'rotate(90deg)' : 'rotate(0deg)';
    }
    return $expanded ? 'rotate(180deg)' : 'rotate(0deg)';
  }};
  
  &::after {
    content: '▶';
    font-size: 12px;
  }
`;

const SubmenuContainer = styled.div<{ $expanded: boolean; $orientation: string; $collapsed: boolean }>`
  position: ${({ $orientation, $collapsed }) => {
    if ($collapsed) return 'static';
    return $orientation === 'horizontal' ? 'absolute' : 'static';
  }};
  top: 100%;
  left: 0;
  background-color: inherit;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  min-width: 200px;
  z-index: 1000;
  opacity: ${({ $expanded }) => $expanded ? 1 : 0};
  visibility: ${({ $expanded }) => $expanded ? 'visible' : 'hidden'};
  transform: ${({ $expanded, $orientation }) => {
    if ($orientation === 'horizontal') {
      return $expanded ? 'translateY(0)' : 'translateY(-10px)';
    }
    return $expanded ? 'translateX(0)' : 'translateX(-10px)';
  }};
  transition: all 0.2s ease-in-out;
  
  ${({ $collapsed, $orientation }) => $collapsed && $orientation === 'vertical' && `
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: ${({ theme }) => theme.spacing.xs};
  `}
`;

const Divider = styled.div`
  height: 1px;
  background-color: currentColor;
  opacity: 0.2;
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

export const Menu: React.FC<MenuProps> = ({
  items,
  variant = 'primary',
  size = 'md',
  orientation = 'vertical',
  collapsed = false,
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
  autoExpandSubmenus = false,
  closeOnClickOutside = true,
  closeOnItemClick = true,
  showSubmenuArrows = true,
  ...props
}) => {
  const [expandedSubmenus, setExpandedSubmenus] = useState<Set<string>>(new Set());
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle submenu expansion
  const toggleSubmenu = (itemId: string) => {
    const newExpanded = new Set(expandedSubmenus);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedSubmenus(newExpanded);
  };

  // Handle item click
  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;
    
    if (item.children && item.children.length > 0) {
      toggleSubmenu(item.id);
    } else {
      if (closeOnItemClick) {
        setExpandedSubmenus(new Set());
      }
      item.onClick?.();
      onItemClick?.(item);
    }
  };

  // Handle mouse enter for auto-expand
  const handleMouseEnter = (itemId: string) => {
    setHoveredItem(itemId);
    if (autoExpandSubmenus) {
      setExpandedSubmenus(prev => new Set([...prev, itemId]));
    }
  };

  // Handle mouse leave
  const handleMouseLeave = (itemId: string) => {
    setHoveredItem(null);
    if (autoExpandSubmenus) {
      setExpandedSubmenus(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  // Click outside handler
  useEffect(() => {
    if (!closeOnClickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExpandedSubmenus(new Set());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeOnClickOutside]);

  // Render menu item
  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasSubmenu = item.children && item.children.length > 0;
    const isExpanded = expandedSubmenus.has(item.id);
    const isActive = item.active && showActiveIndicator;
    const isDisabled = item.disabled;

    return (
      <div key={item.id} style={{ position: 'relative' }}>
        <MenuItemContainer
          $active={isActive}
          $disabled={isDisabled}
          $orientation={orientation}
          $collapsed={collapsed}
          onClick={() => handleItemClick(item)}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
          tabIndex={interactive ? 0 : -1}
        >
          {showIcons && item.icon && (
            <MenuItemIcon $size={size}>
              {item.icon}
            </MenuItemIcon>
          )}
          
          {showLabels && (
            <MenuItemLabel $collapsed={collapsed} $orientation={orientation}>
              {item.label}
            </MenuItemLabel>
          )}
          
          {showSubmenuArrows && hasSubmenu && (
            <SubmenuArrow $expanded={isExpanded} $orientation={orientation} />
          )}
        </MenuItemContainer>
        
        {item.divider && <Divider />}
        
        {hasSubmenu && (
          <SubmenuContainer
            $expanded={isExpanded}
            $orientation={orientation}
            $collapsed={collapsed}
          >
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </SubmenuContainer>
        )}
      </div>
    );
  };

  return (
    <MenuContainer
      ref={menuRef}
      variant={variant}
      size={size}
      orientation={orientation}
      collapsed={collapsed}
      fullWidth={fullWidth}
      bordered={bordered}
      shadowed={shadowed}
      rounded={rounded}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      $orientation={orientation}
      $collapsed={collapsed}
      role="menu"
      aria-orientation={orientation}
      {...props}
    >
      {items.map(item => renderMenuItem(item))}
    </MenuContainer>
  );
};
