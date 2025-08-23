import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A breadcrumb navigation component that shows the current page location within a website hierarchy. Features include icons, custom separators, and interactive navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of breadcrumb items to display',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The variant/style of the breadcrumb',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the breadcrumb',
    },
    separator: {
      control: { type: 'text' },
      description: 'The separator between breadcrumb items',
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
      description: 'Whether the breadcrumb is full width',
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Whether the breadcrumb has a border',
    },
    shadowed: {
      control: { type: 'boolean' },
      description: 'Whether the breadcrumb has a shadow',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the breadcrumb has rounded corners',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the breadcrumb is interactive',
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
    truncateLabels: {
      control: { type: 'boolean' },
      description: 'Whether to truncate long labels',
    },
    maxLabelLength: {
      control: { type: 'number' },
      description: 'Maximum length for truncated labels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample breadcrumb items
const basicBreadcrumbItems: BreadcrumbItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    href: '/',
  },
  {
    id: 'products',
    label: 'Products',
    icon: '📦',
    href: '/products',
  },
  {
    id: 'electronics',
    label: 'Electronics',
    icon: '📱',
    href: '/products/electronics',
  },
  {
    id: 'smartphones',
    label: 'Smartphones',
    icon: '📱',
    active: true,
  },
];

const websiteBreadcrumbItems: BreadcrumbItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    href: '/',
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: '📝',
    href: '/blog',
  },
  {
    id: 'technology',
    label: 'Technology',
    icon: '💻',
    href: '/blog/technology',
  },
  {
    id: 'web-development',
    label: 'Web Development',
    icon: '🌐',
    href: '/blog/technology/web-development',
  },
  {
    id: 'react',
    label: 'React Best Practices',
    icon: '⚛️',
    active: true,
  },
];

const adminBreadcrumbItems: BreadcrumbItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    href: '/admin',
  },
  {
    id: 'users',
    label: 'User Management',
    icon: '👥',
    href: '/admin/users',
  },
  {
    id: 'user-details',
    label: 'User Details',
    icon: '👤',
    href: '/admin/users/details',
  },
  {
    id: 'edit-user',
    label: 'Edit User Profile',
    icon: '✏️',
    active: true,
  },
];

const longLabelBreadcrumbItems: BreadcrumbItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    href: '/',
  },
  {
    id: 'very-long-section',
    label: 'This is a very long section name that might need truncation',
    icon: '📚',
    href: '/very-long-section',
  },
  {
    id: 'another-long-section',
    label: 'Another extremely long section name that demonstrates truncation',
    icon: '📖',
    href: '/very-long-section/another-long-section',
  },
  {
    id: 'current-page',
    label: 'Current page with a very long name that shows truncation in action',
    icon: '📍',
    active: true,
  },
];

// Basic Breadcrumb
export const Basic: Story = {
  render: () => (
    <Breadcrumb items={basicBreadcrumbItems} />
  ),
};

// Website Navigation Breadcrumb
export const WebsiteNavigation: Story = {
  render: () => (
    <Breadcrumb 
      items={websiteBreadcrumbItems} 
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Website navigation breadcrumb with multiple levels and styling.',
      },
    },
  },
};

// Admin Panel Breadcrumb
export const AdminPanel: Story = {
  render: () => (
    <Breadcrumb 
      items={adminBreadcrumbItems} 
      variant="secondary"
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Admin panel breadcrumb with secondary variant styling.',
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
        <Breadcrumb items={basicBreadcrumbItems} size="xs" bordered={true} />
      </div>
      
      <div>
        <h4>Small</h4>
        <Breadcrumb items={basicBreadcrumbItems} size="sm" bordered={true} />
      </div>
      
      <div>
        <h4>Medium (Default)</h4>
        <Breadcrumb items={basicBreadcrumbItems} size="md" bordered={true} />
      </div>
      
      <div>
        <h4>Large</h4>
        <Breadcrumb items={basicBreadcrumbItems} size="lg" bordered={true} />
      </div>
      
      <div>
        <h4>Extra Large</h4>
        <Breadcrumb items={basicBreadcrumbItems} size="xl" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb components with different sizes.',
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
        <Breadcrumb items={basicBreadcrumbItems} variant="primary" bordered={true} />
      </div>
      
      <div>
        <h4>Secondary</h4>
        <Breadcrumb items={basicBreadcrumbItems} variant="secondary" bordered={true} />
      </div>
      
      <div>
        <h4>Success</h4>
        <Breadcrumb items={basicBreadcrumbItems} variant="success" bordered={true} />
      </div>
      
      <div>
        <h4>Warning</h4>
        <Breadcrumb items={basicBreadcrumbItems} variant="warning" bordered={true} />
      </div>
      
      <div>
        <h4>Error</h4>
        <Breadcrumb items={basicBreadcrumbItems} variant="error" bordered={true} />
      </div>
      
      <div>
        <h4>Info</h4>
        <Breadcrumb items={basicBreadcrumbItems} variant="info" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb components with different color variants.',
      },
    },
  },
};

// Custom Separators
export const CustomSeparators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Forward Slash (/)</h4>
        <Breadcrumb items={basicBreadcrumbItems} separator="/" bordered={true} />
      </div>
      
      <div>
        <h4>Greater Than (&gt;)</h4>
        <Breadcrumb items={basicBreadcrumbItems} separator=">" bordered={true} />
      </div>
      
      <div>
        <h4>Arrow (→)</h4>
        <Breadcrumb items={basicBreadcrumbItems} separator="→" bordered={true} />
      </div>
      
      <div>
        <h4>Bullet (•)</h4>
        <Breadcrumb items={basicBreadcrumbItems} separator="•" bordered={true} />
      </div>
      
      <div>
        <h4>Custom Icon (🎯)</h4>
        <Breadcrumb items={basicBreadcrumbItems} separator="🎯" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb components with different separator styles.',
      },
    },
  },
};

// Without Icons
export const WithoutIcons: Story = {
  render: () => (
    <Breadcrumb 
      items={basicBreadcrumbItems} 
      showIcons={false}
      bordered={true}
      shadowed={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb without icons, showing only labels.',
      },
    },
  },
};

// Without Labels
export const WithoutLabels: Story = {
  render: () => (
    <Breadcrumb 
      items={basicBreadcrumbItems} 
      showLabels={false}
      bordered={true}
      shadowed={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb without labels, showing only icons.',
      },
    },
  },
};

// Interactive Breadcrumb
export const InteractiveBreadcrumb: Story = {
  render: () => (
    <Breadcrumb 
      items={basicBreadcrumbItems}
      onItemClick={(item) => alert(`${item.label} clicked!`)}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive breadcrumb with click handlers.',
      },
    },
  },
};

// Full Width Breadcrumb
export const FullWidthBreadcrumb: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Breadcrumb 
        items={basicBreadcrumbItems} 
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
        story: 'Full width breadcrumb that spans its container.',
      },
    },
  },
};

// Truncated Labels
export const TruncatedLabels: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <Breadcrumb 
        items={longLabelBreadcrumbItems} 
        truncateLabels={true}
        maxLabelLength={30}
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb with truncated long labels.',
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <Breadcrumb 
      items={basicBreadcrumbItems} 
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
        story: 'Breadcrumb with custom colors and styling.',
      },
    },
  },
};

// Complex Navigation Path
export const ComplexNavigationPath: Story = {
  render: () => {
    const complexItems: BreadcrumbItem[] = [
      {
        id: 'home',
        label: 'Home',
        icon: '🏠',
        href: '/',
      },
      {
        id: 'admin',
        label: 'Admin',
        icon: '⚙️',
        href: '/admin',
      },
      {
        id: 'content',
        label: 'Content Management',
        icon: '📝',
        href: '/admin/content',
      },
      {
        id: 'posts',
        label: 'Posts',
        icon: '📄',
        href: '/admin/content/posts',
      },
      {
        id: 'categories',
        label: 'Categories',
        icon: '🏷️',
        href: '/admin/content/posts/categories',
      },
      {
        id: 'technology',
        label: 'Technology',
        icon: '💻',
        href: '/admin/content/posts/categories/technology',
      },
      {
        id: 'web-development',
        label: 'Web Development',
        icon: '🌐',
        href: '/admin/content/posts/categories/technology/web-development',
      },
      {
        id: 'current-post',
        label: 'Building a Component Library',
        icon: '📚',
        active: true,
      },
    ];
    
    return (
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <Breadcrumb 
          items={complexItems} 
          variant="secondary"
          bordered={true}
          shadowed={true}
          rounded={true}
          truncateLabels={true}
          maxLabelLength={25}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex navigation path with many levels and truncation.',
      },
    },
  },
};
