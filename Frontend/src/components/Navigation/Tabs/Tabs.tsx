import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../../types';

export interface TabItem {
  id: string;
  label: string;
  icon?: string;
  content: React.ReactNode;
  disabled?: boolean;
  closable?: boolean;
  badge?: string | number;
}

export interface TabsProps extends BaseComponentProps {
  items: TabItem[];
  defaultActiveTab?: string;
  variant?: ComponentVariant;
  size?: ComponentSize;
  orientation?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
  bordered?: boolean;
  shadowed?: boolean;
  rounded?: boolean;
  closable?: boolean;
  addable?: boolean;
  draggable?: boolean;
  animated?: boolean;
  lazy?: boolean;
  onTabChange?: (activeTabId: string) => void;
  onTabClose?: (tabId: string) => void;
  onTabAdd?: () => void;
  onTabReorder?: (fromIndex: number, toIndex: number) => void;
  tabBarExtraContent?: React.ReactNode;
  tabBarGutter?: number;
  tabBarStyle?: React.CSSProperties;
  tabPosition?: 'top' | 'bottom' | 'left' | 'right';
  type?: 'line' | 'card' | 'text';
  centered?: boolean;
  sticky?: boolean;
  scrollable?: boolean;
  showActiveIndicator?: boolean;
  showHoverEffects?: boolean;
  showFocusIndicators?: boolean;
  customColors?: {
    activeTabColor?: string;
    inactiveTabColor?: string;
    activeTextColor?: string;
    inactiveTextColor?: string;
    borderColor?: string;
    backgroundColor?: string;
  };
}

const TabsContainer = styled.div<{
  $orientation: 'horizontal' | 'vertical';
  $fullWidth: boolean;
  $bordered: boolean;
  $shadowed: boolean;
  $rounded: boolean;
  $variant: ComponentVariant;
  $size: ComponentSize;
  $type: 'line' | 'card' | 'text';
  $centered: boolean;
  $sticky: boolean;
  $customColors?: TabsProps['customColors'];
}>`
  display: flex;
  flex-direction: ${({ $orientation }) => $orientation === 'vertical' ? 'row' : 'column'};
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
  background: ${({ theme, $customColors }) => $customColors?.backgroundColor || theme.colors.background.primary};
  border: ${({ $bordered, theme, $customColors }) => 
    $bordered ? `1px solid ${$customColors?.borderColor || theme.colors.border}` : 'none'};
  border-radius: ${({ $rounded, theme }) => $rounded ? theme.borderRadius.md : '0'};
  box-shadow: ${({ $shadowed, theme }) => $shadowed ? theme.shadows.md : 'none'};
  overflow: hidden;
  
  ${({ $type, theme }) => {
    switch ($type) {
      case 'card':
        return css`
          border-radius: ${theme.borderRadius.md};
          overflow: hidden;
        `;
      case 'text':
        return css`
          background: transparent;
          border: none;
          box-shadow: none;
        `;
      default:
        return '';
    }
  }}
`;

const TabBar = styled.div<{
  $orientation: 'horizontal' | 'vertical';
  $fullWidth: boolean;
  $type: 'line' | 'card' | 'text';
  $centered: boolean;
  $sticky: boolean;
  $scrollable: boolean;
  $tabBarGutter: number;
  $customColors?: TabsProps['customColors'];
}>`
  display: flex;
  flex-direction: ${({ $orientation }) => $orientation === 'vertical' ? 'column' : 'row'};
  ${({ $orientation, $fullWidth }) => $orientation === 'horizontal' && $fullWidth ? 'width: 100%;' : ''};
  ${({ $centered }) => $centered && 'justify-content: center;'};
  ${({ $sticky }) => $sticky && 'position: sticky; top: 0; z-index: 10;'};
  ${({ $scrollable }) => $scrollable && 'overflow-x: auto;'};
  gap: ${({ $tabBarGutter }) => $tabBarGutter}px;
  background: ${({ theme, $type, $customColors }) => {
    if ($type === 'text') return 'transparent';
    return $customColors?.backgroundColor || theme.colors.background;
  }};
  
  ${({ $type, theme, $customColors }) => {
    switch ($type) {
      case 'card':
        return css`
          border-bottom: 1px solid ${$customColors?.borderColor || theme.colors.border};
          padding: 0 ${theme.spacing.md};
        `;
      case 'line':
        return css`
          border-bottom: 2px solid ${$customColors?.borderColor || theme.colors.border};
        `;
      default:
        return '';
    }
  }}
`;

const TabItem = styled.div<{
  $active: boolean;
  $disabled: boolean;
  $variant: ComponentVariant;
  $size: ComponentSize;
  $type: 'line' | 'card' | 'text';
  $fullWidth: boolean;
  $customColors?: TabsProps['customColors'];
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return `${theme.spacing.xs} ${theme.spacing.sm}`;
      case 'sm': return `${theme.spacing.sm} ${theme.spacing.md}`;
      case 'lg': return `${theme.spacing.md} ${theme.spacing.lg}`;
      case 'xl': return `${theme.spacing.lg} ${theme.spacing.xl}`;
      default: return `${theme.spacing.sm} ${theme.spacing.md}`;
    }
  }};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  transition: all 0.2s ease;
  position: relative;
  ${({ $fullWidth }) => $fullWidth && 'flex: 1; justify-content: center;'};
  
  color: ${({ theme, $active, $disabled, $customColors }) => {
    if ($disabled) return theme.colors.text.disabled;
    if ($active) return $customColors?.activeTextColor || theme.colors.text.primary;
    return $customColors?.inactiveTextColor || theme.colors.text.secondary;
  }};
  
  background: ${({ theme, $active, $type, $customColors }) => {
    if ($type === 'text') return 'transparent';
    if ($active) return $customColors?.activeTabColor || theme.colors.primary.light;
    return 'transparent';
  }};
  
  ${({ $type, theme, $active, $customColors }) => {
    switch ($type) {
      case 'card':
        return css`
          border-radius: ${theme.borderRadius.sm} ${theme.borderRadius.sm} 0 0;
          border: 1px solid ${$customColors?.borderColor || theme.colors.border};
          border-bottom: ${$active ? 'none' : `1px solid ${$customColors?.borderColor || theme.colors.border}`};
          margin-bottom: -1px;
          background: ${$active ? theme.colors.background : 'transparent'};
        `;
      case 'line':
        return css`
          border-bottom: 2px solid ${$active ? ($customColors?.activeTabColor || theme.colors.primary.main) : 'transparent'};
          margin-bottom: -2px;
        `;
      default:
        return '';
    }
  }}
  
  &:hover {
    ${({ $disabled, theme, $customColors }) => !$disabled && css`
      color: ${$customColors?.activeTextColor || theme.colors.text.primary};
      background: ${theme.colors.background.hover};
    `};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;
  }
`;

const TabIcon = styled.span<{ $size: ComponentSize }>`
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.lg;
      case 'xl': return theme.typography.sizes.xl;
      default: return theme.typography.sizes.md;
    }
  }};
`;

const TabLabel = styled.span<{ $size: ComponentSize }>`
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.lg;
      case 'xl': return theme.typography.sizes.xl;
      default: return theme.typography.sizes.md;
    }
  }};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const TabBadge = styled.span<{ $size: ComponentSize }>`
  background: ${({ theme }) => theme.colors.error.main};
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: 2px 6px;
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return theme.typography.sizes.xs;
      case 'sm': return theme.typography.sizes.sm;
      case 'lg': return theme.typography.sizes.lg;
      case 'xl': return theme.typography.sizes.xl;
      default: return theme.typography.sizes.md;
    }
  }};
  min-width: 16px;
  text-align: center;
  line-height: 1;
`;

const CloseButton = styled.button<{ $size: ComponentSize }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  margin-left: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: inherit;
  opacity: 0.6;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.colors.background.hover};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;
  }
`;

const TabContent = styled.div<{
  $orientation: 'horizontal' | 'vertical';
  $animated: boolean;
  $lazy: boolean;
}>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  ${({ $animated }) => $animated && 'transition: all 0.3s ease;'};
  
  ${({ $orientation }) => $orientation === 'vertical' && css`
    margin-left: ${({ theme }) => theme.spacing.md};
  `};
`;

const AddButton = styled.button<{ $size: ComponentSize }>`
  background: none;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  cursor: pointer;
  padding: ${({ theme, $size }) => {
    switch ($size) {
      case 'xs': return `${theme.spacing.xs} ${theme.spacing.sm}`;
      case 'sm': return `${theme.spacing.sm} ${theme.spacing.md}`;
      case 'lg': return `${theme.spacing.md} ${theme.spacing.lg}`;
      case 'xl': return `${theme.spacing.lg} ${theme.spacing.xl}`;
      default: return `${theme.spacing.sm} ${theme.spacing.md}`;
    }
  }};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;
  }
`;

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  variant = 'primary',
  size = 'md',
  orientation = 'horizontal',
  fullWidth = false,
  bordered = false,
  shadowed = false,
  rounded = false,
  closable = false,
  addable = false,
  draggable = false,
  animated = true,
  lazy = false,
  onTabChange,
  onTabClose,
  onTabAdd,
  onTabReorder,
  tabBarExtraContent,
  tabBarGutter = 0,
  tabBarStyle,
  tabPosition = 'top',
  type = 'line',
  centered = false,
  sticky = false,
  scrollable = false,
  showActiveIndicator = true,
  showHoverEffects = true,
  showFocusIndicators = true,
  customColors,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0]?.id || '');
  const [tabs, setTabs] = useState(items);
  const [loadedTabs, setLoadedTabs] = useState<Set<string>>(new Set([activeTab]));
  

  
  useEffect(() => {
    setTabs(items);
    if (!defaultActiveTab && items.length > 0) {
      setActiveTab(items[0].id);
      setLoadedTabs(new Set([items[0].id]));
    }
  }, [items, defaultActiveTab]);
  
  const handleTabClick = (tabId: string) => {
    if (tabs.find(tab => tab.id === tabId)?.disabled) return;
    
    setActiveTab(tabId);
    if (lazy && !loadedTabs.has(tabId)) {
      setLoadedTabs(prev => new Set([...prev, tabId]));
    }
    onTabChange?.(tabId);
  };
  
  const handleTabClose = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    if (onTabClose) {
      onTabClose(tabId);
    } else {
      const newTabs = tabs.filter(tab => tab.id !== tabId);
      setTabs(newTabs);
      if (activeTab === tabId && newTabs.length > 0) {
        setActiveTab(newTabs[0].id);
      }
    }
  };
  
  const handleTabAdd = () => {
    onTabAdd?.();
  };
  
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  
  if (tabs.length === 0) {
    return null;
  }
  
  return (
    <TabsContainer
      $orientation={orientation}
      $fullWidth={fullWidth}
      $bordered={bordered}
      $shadowed={shadowed}
      $rounded={rounded}
      $variant={variant}
      $size={size}
      $type={type}
      $centered={centered}
      $sticky={sticky}
      $customColors={customColors}
      {...props}
    >
      <TabBar
        $orientation={orientation}
        $fullWidth={fullWidth}
        $type={type}
        $centered={centered}
        $sticky={sticky}
        $scrollable={scrollable}
        $tabBarGutter={tabBarGutter}
        $customColors={customColors}
        style={tabBarStyle}
      >
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            $active={tab.id === activeTab}
            $disabled={tab.disabled || false}
            $variant={variant}
            $size={size}
            $type={type}
            $fullWidth={fullWidth}
            $customColors={customColors}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={tab.id === activeTab}
            aria-disabled={tab.disabled}
          >
            {tab.icon && <TabIcon $size={size}>{tab.icon}</TabIcon>}
            <TabLabel $size={size}>{tab.label}</TabLabel>
            {tab.badge && <TabBadge $size={size}>{tab.badge}</TabBadge>}
            {closable && tab.closable !== false && (
              <CloseButton
                $size={size}
                onClick={(e) => handleTabClose(e, tab.id)}
                aria-label={`Close ${tab.label} tab`}
              >
                ×
              </CloseButton>
            )}
          </TabItem>
        ))}
        
        {addable && (
          <AddButton
            $size={size}
            onClick={handleTabAdd}
            aria-label="Add new tab"
          >
            +
          </AddButton>
        )}
        
        {tabBarExtraContent && (
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            {tabBarExtraContent}
          </div>
        )}
      </TabBar>
      
      <TabContent
        $orientation={orientation}
        $animated={animated}
        $lazy={lazy}
        role="tabpanel"
        aria-labelledby={activeTab}
      >
        {activeTabData && (
          lazy ? (
            loadedTabs.has(activeTab) ? activeTabData.content : null
          ) : (
            activeTabData.content
          )
        )}
      </TabContent>
    </TabsContainer>
  );
};
