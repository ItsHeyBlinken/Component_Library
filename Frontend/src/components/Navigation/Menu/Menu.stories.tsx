import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Menu, MenuItem } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive navigation menu component with support for submenus, icons, and various orientations. Features include horizontal/vertical layouts, collapsed states, and accessibility support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of menu items to display',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The variant/style of the menu',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the menu',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Whether the menu is horizontal or vertical',
    },
    collapsed: {
      control: { type: 'boolean' },
      description: 'Whether the menu is collapsed/condensed',
    },
    showIcons: {
      control: { type: 'boolean' },
      description: 'Whether to show icons',
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Whether to show labels',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the menu is full width',
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Whether the menu has a border',
    },
    shadowed: {
      control: { type: 'boolean' },
      description: 'Whether the menu has a shadow',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the menu has rounded corners',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the menu is interactive',
    },
    showActiveIndicator: {
      control: { type: 'boolean' },
      description: 'Whether to show active indicators',
    },
    showHoverEffects: {
      control: { type: 'boolean' },
      description: 'Whether to show hover effects',
    },
    showFocusIndicators: {
      control: { type: 'boolean' },
      description: 'Whether to show focus indicators',
    },
    autoExpandSubmenus: {
      control: { type: 'boolean' },
      description: 'Whether to auto-expand submenus on hover',
    },
    closeOnClickOutside: {
      control: { type: 'boolean' },
      description: 'Whether to close submenus when clicking outside',
    },
    closeOnItemClick: {
      control: { type: 'boolean' },
      description: 'Whether to close submenus when clicking item',
    },
    showSubmenuArrows: {
      control: { type: 'boolean' },
      description: 'Whether to show submenu arrows',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample menu items
const sampleMenuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '🏠',
    onClick: () => alert('Dashboard clicked!'),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: '📊',
    children: [
      {
        id: 'reports',
        label: 'Reports',
        icon: '📈',
        onClick: () => alert('Reports clicked!'),
      },
      {
        id: 'insights',
        label: 'Insights',
        icon: '💡',
        onClick: () => alert('Insights clicked!'),
      },
    ],
  },
  {
    id: 'users',
    label: 'Users',
    icon: '👥',
    children: [
      {
        id: 'manage',
        label: 'Manage Users',
        icon: '⚙️',
        onClick: () => alert('Manage Users clicked!'),
      },
      {
        id: 'permissions',
        label: 'Permissions',
        icon: '🔐',
        onClick: () => alert('Permissions clicked!'),
      },
    ],
  },
  { id: 'divider1', divider: true },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    onClick: () => alert('Settings clicked!'),
  },
  {
    id: 'help',
    label: 'Help',
    icon: '❓',
    disabled: true,
  },
];

const navigationMenuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    active: true,
    onClick: () => alert('Home clicked!'),
  },
  {
    id: 'about',
    label: 'About',
    icon: 'ℹ️',
    onClick: () => alert('About clicked!'),
  },
  {
    id: 'services',
    label: 'Services',
    icon: '🛠️',
    children: [
      {
        id: 'web',
        label: 'Web Development',
        icon: '🌐',
        onClick: () => alert('Web Development clicked!'),
      },
      {
        id: 'mobile',
        label: 'Mobile Apps',
        icon: '📱',
        onClick: () => alert('Mobile Apps clicked!'),
      },
      {
        id: 'design',
        label: 'UI/UX Design',
        icon: '🎨',
        onClick: () => alert('UI/UX Design clicked!'),
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: '📞',
    onClick: () => alert('Contact clicked!'),
  },
];

const adminMenuItems: MenuItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: '📋',
    active: true,
    onClick: () => alert('Overview clicked!'),
  },
  {
    id: 'users',
    label: 'User Management',
    icon: '👥',
    children: [
      {
        id: 'list',
        label: 'User List',
        icon: '📝',
        onClick: () => alert('User List clicked!'),
      },
      {
        id: 'create',
        label: 'Create User',
        icon: '➕',
        onClick: () => alert('Create User clicked!'),
      },
      {
        id: 'roles',
        label: 'User Roles',
        icon: '🎭',
        onClick: () => alert('User Roles clicked!'),
      },
    ],
  },
  {
    id: 'content',
    label: 'Content Management',
    icon: '📝',
    children: [
      {
        id: 'posts',
        label: 'Posts',
        icon: '📄',
        onClick: () => alert('Posts clicked!'),
      },
      {
        id: 'media',
        label: 'Media Library',
        icon: '🖼️',
        onClick: () => alert('Media Library clicked!'),
      },
    ],
  },
  { id: 'divider1', divider: true },
  {
    id: 'system',
    label: 'System',
    icon: '⚙️',
    children: [
      {
        id: 'logs',
        label: 'System Logs',
        icon: '📊',
        onClick: () => alert('System Logs clicked!'),
      },
      {
        id: 'backup',
        label: 'Backup & Restore',
        icon: '💾',
        onClick: () => alert('Backup & Restore clicked!'),
      },
    ],
  },
  {
    id: 'logout',
    label: 'Logout',
    icon: '🚪',
    onClick: () => alert('Logout clicked!'),
  },
];

// Basic Menu
export const Basic: Story = {
  render: () => (
    <Menu items={sampleMenuItems} />
  ),
};

// Horizontal Menu
export const HorizontalMenu: Story = {
  render: () => (
    <Menu 
      items={navigationMenuItems} 
      orientation="horizontal"
      fullWidth={true}
      bordered={true}
      shadowed={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal navigation menu with full width, border, and shadow.',
      },
    },
  },
};

// Vertical Menu with Submenus
export const VerticalMenuWithSubmenus: Story = {
  render: () => (
    <Menu 
      items={adminMenuItems} 
      orientation="vertical"
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical admin menu with nested submenus, borders, and rounded corners.',
      },
    },
  },
};

// Collapsed Menu
export const CollapsedMenu: Story = {
  render: () => (
    <Menu 
      items={adminMenuItems} 
      orientation="vertical"
      collapsed={true}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Collapsed vertical menu showing only icons.',
      },
    },
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Extra Small</h4>
        <Menu items={sampleMenuItems} size="xs" bordered={true} />
      </div>
      
      <div>
        <h4>Small</h4>
        <Menu items={sampleMenuItems} size="sm" bordered={true} />
      </div>
      
      <div>
        <h4>Medium (Default)</h4>
        <Menu items={sampleMenuItems} size="md" bordered={true} />
      </div>
      
      <div>
        <h4>Large</h4>
        <Menu items={sampleMenuItems} size="lg" bordered={true} />
      </div>
      
      <div>
        <h4>Extra Large</h4>
        <Menu items={sampleMenuItems} size="xl" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu components with different sizes.',
      },
    },
  },
};

// Different Variants
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Primary</h4>
        <Menu items={sampleMenuItems} variant="primary" bordered={true} />
      </div>
      
      <div>
        <h4>Secondary</h4>
        <Menu items={sampleMenuItems} variant="secondary" bordered={true} />
      </div>
      
      <div>
        <h4>Success</h4>
        <Menu items={sampleMenuItems} variant="success" bordered={true} />
      </div>
      
      <div>
        <h4>Warning</h4>
        <Menu items={sampleMenuItems} variant="warning" bordered={true} />
      </div>
      
      <div>
        <h4>Error</h4>
        <Menu items={sampleMenuItems} variant="error" bordered={true} />
      </div>
      
      <div>
        <h4>Info</h4>
        <Menu items={sampleMenuItems} variant="info" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu components with different color variants.',
      },
    },
  },
};

// Menu Without Icons
export const MenuWithoutIcons: Story = {
  render: () => (
    <Menu 
      items={sampleMenuItems} 
      showIcons={false}
      bordered={true}
      shadowed={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu without icons, showing only labels.',
      },
    },
  },
};

// Menu Without Labels
export const MenuWithoutLabels: Story = {
  render: () => (
    <Menu 
      items={sampleMenuItems} 
      showLabels={false}
      bordered={true}
      shadowed={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu without labels, showing only icons.',
      },
    },
  },
};

// Interactive Menu
export const InteractiveMenu: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    
    const interactiveItems = sampleMenuItems.map(item => ({
      ...item,
      active: item.id === activeItem,
      onClick: () => {
        setActiveItem(item.id);
        alert(`${item.label} clicked!`);
      },
    }));
    
    return (
      <Menu 
        items={interactiveItems}
        onItemClick={(item) => console.log('Item clicked:', item)}
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    );
  },
  parameters: {
    docs: {
      story: 'Interactive menu with active state management.',
    },
  },
};

// Auto-expand Submenus
export const AutoExpandSubmenus: Story = {
  render: () => (
    <Menu 
      items={adminMenuItems} 
      orientation="vertical"
      autoExpandSubmenus={true}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with auto-expanding submenus on hover.',
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <Menu 
      items={sampleMenuItems} 
      backgroundColor="#f3e5f5"
      textColor="#7b1fa2"
      borderColor="#9c27b0"
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with custom colors and styling.',
      },
    },
  },
};

// Full Width Menu
export const FullWidthMenu: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Menu 
        items={navigationMenuItems} 
        orientation="horizontal"
        fullWidth={true}
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full width horizontal navigation menu.',
      },
    },
  },
};

// Complex Nested Menu
export const ComplexNestedMenu: Story = {
  render: () => {
    const complexItems: MenuItem[] = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: '🏠',
        active: true,
        onClick: () => alert('Dashboard clicked!'),
      },
      {
        id: 'content',
        label: 'Content',
        icon: '📝',
        children: [
          {
            id: 'posts',
            label: 'Posts',
            icon: '📄',
            children: [
              {
                id: 'create-post',
                label: 'Create Post',
                icon: '✏️',
                onClick: () => alert('Create Post clicked!'),
              },
              {
                id: 'edit-post',
                label: 'Edit Post',
                icon: '🔧',
                onClick: () => alert('Edit Post clicked!'),
              },
              {
                id: 'delete-post',
                label: 'Delete Post',
                icon: '🗑️',
                onClick: () => alert('Delete Post clicked!'),
              },
            ],
          },
          {
            id: 'pages',
            label: 'Pages',
            icon: '📖',
            children: [
              {
                id: 'create-page',
                label: 'Create Page',
                icon: '✏️',
                onClick: () => alert('Create Page clicked!'),
              },
              {
                id: 'edit-page',
                label: 'Edit Page',
                icon: '🔧',
                onClick: () => alert('Edit Page clicked!'),
              },
            ],
          },
        ],
      },
      {
        id: 'users',
        label: 'Users',
        icon: '👥',
        children: [
          {
            id: 'user-list',
            label: 'User List',
            icon: '📋',
            onClick: () => alert('User List clicked!'),
          },
          {
            id: 'user-roles',
            label: 'User Roles',
            icon: '🎭',
            children: [
              {
                id: 'admin',
                label: 'Administrator',
                icon: '👑',
                onClick: () => alert('Administrator role clicked!'),
              },
              {
                id: 'editor',
                label: 'Editor',
                icon: '✏️',
                onClick: () => alert('Editor role clicked!'),
              },
              {
                id: 'viewer',
                label: 'Viewer',
                icon: '👁️',
                onClick: () => alert('Viewer role clicked!'),
              },
            ],
          },
        ],
      },
      { id: 'divider1', divider: true },
      {
        id: 'settings',
        label: 'Settings',
        icon: '⚙️',
        onClick: () => alert('Settings clicked!'),
      },
    ];
    
    return (
      <Menu 
        items={complexItems} 
        orientation="vertical"
        bordered={true}
        shadowed={true}
        rounded={true}
        showSubmenuArrows={true}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex nested menu with multiple levels of submenus.',
      },
    },
  },
};
