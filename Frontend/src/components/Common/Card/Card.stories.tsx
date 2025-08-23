import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Common/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible content container component with multiple variants, sizes, and interactive states. Perfect for organizing information, creating dashboard widgets, and building product displays.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Visual variant of the card',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the card affecting padding and typography',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Custom padding override (independent of size)',
    },
    elevation: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Shadow depth and elevation effect',
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Whether to show a border around the card',
    },
    hoverable: {
      control: { type: 'boolean' },
      description: 'Whether the card should have hover effects',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the card should appear interactive (cursor pointer)',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for interactive cards',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Card
export const Basic: Story = {
  args: {
    children: 'This is a basic card with simple content.',
    title: 'Basic Card',
    subtitle: 'A simple example of the card component',
  },
};

// Card with Header and Footer
export const WithHeaderAndFooter: Story = {
  args: {
    title: 'Card with Header and Footer',
    subtitle: 'This card includes a header and footer section',
    children: (
      <div>
        <p>This is the main content area of the card. You can put any content here including:</p>
        <ul>
          <li>Text content</li>
          <li>Images</li>
          <li>Forms</li>
          <li>Other components</li>
        </ul>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="sm" variant="secondary">Cancel</Button>
        <Button size="sm" variant="primary">Save</Button>
      </div>
    ),
  },
};

// Different Variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', width: '100%' }}>
      <Card variant="primary" title="Primary Card" subtitle="Primary variant">
        This card uses the primary variant styling.
      </Card>
      <Card variant="secondary" title="Secondary Card" subtitle="Secondary variant">
        This card uses the secondary variant styling.
      </Card>
      <Card variant="success" title="Success Card" subtitle="Success variant">
        This card uses the success variant styling.
      </Card>
      <Card variant="warning" title="Warning Card" subtitle="Warning variant">
        This card uses the warning variant styling.
      </Card>
      <Card variant="error" title="Error Card" subtitle="Error variant">
        This card uses the error variant styling.
      </Card>
      <Card variant="info" title="Info Card" subtitle="Info variant">
        This card uses the info variant styling.
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards come in different variants that affect the border color and overall styling.',
      },
    },
  },
};

// Different Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Card size="xs" title="Extra Small" subtitle="xs size">
        This is an extra small card with minimal padding.
      </Card>
      <Card size="sm" title="Small" subtitle="sm size">
        This is a small card with compact padding.
      </Card>
      <Card size="md" title="Medium" subtitle="md size (default)">
        This is a medium card with standard padding.
      </Card>
      <Card size="lg" title="Large" subtitle="lg size">
        This is a large card with generous padding.
      </Card>
      <Card size="xl" title="Extra Large" subtitle="xl size">
        This is an extra large card with maximum padding.
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards come in different sizes that affect padding and typography.',
      },
    },
  },
};

// Different Elevations
export const Elevations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', width: '100%' }}>
      <Card elevation="none" title="No Elevation" subtitle="elevation=&quot;none&quot;">
        This card has no shadow or elevation.
      </Card>
      <Card elevation="sm" title="Small Elevation" subtitle="elevation=&quot;sm&quot;">
        This card has a subtle shadow.
      </Card>
      <Card elevation="md" title="Medium Elevation" subtitle="elevation=&quot;md&quot; (default)">
        This card has a standard shadow.
      </Card>
      <Card elevation="lg" title="Large Elevation" subtitle="elevation=&quot;lg&quot;">
        This card has a prominent shadow.
      </Card>
      <Card elevation="xl" title="Extra Large Elevation" subtitle="elevation=&quot;xl&quot;">
        This card has a dramatic shadow.
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards can have different elevation levels that affect the shadow depth.',
      },
    },
  },
};

// Interactive Cards
export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', width: '100%' }}>
      <Card 
        hoverable 
        interactive 
        title="Hoverable Card" 
        subtitle="Hover over me!"
        onClick={() => alert('Card clicked!')}
      >
        This card has hover effects and is clickable. Try hovering over it!
      </Card>
      <Card 
        bordered 
        hoverable 
        title="Bordered & Hoverable" 
        subtitle="With border and hover effects"
        onClick={() => alert('Bordered card clicked!')}
      >
        This card has a border and hover effects. The border color changes based on the variant.
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards can be made interactive with hover effects and click handlers.',
      },
    },
  },
};

// Custom Padding
export const CustomPadding: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Card padding="none" title="No Padding" subtitle="padding=&quot;none&quot;">
        This card has no padding around the content.
      </Card>
      <Card padding="xs" title="Extra Small Padding" subtitle="padding=&quot;xs&quot;">
        This card has minimal padding.
      </Card>
      <Card padding="sm" title="Small Padding" subtitle="padding=&quot;sm&quot;">
        This card has small padding.
      </Card>
      <Card padding="md" title="Medium Padding" subtitle="padding=&quot;md&quot; (default)">
        This card has standard padding.
      </Card>
      <Card padding="lg" title="Large Padding" subtitle="padding=&quot;lg&quot;">
        This card has large padding.
      </Card>
      <Card padding="xl" title="Extra Large Padding" subtitle="padding=&quot;xl&quot;">
        This card has maximum padding.
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom padding can be applied independently of the card size.',
      },
    },
  },
};

// Product Card Example
export const ProductCard: Story = {
  render: () => (
    <Card 
      hoverable 
      size="lg" 
      elevation="lg"
      title="Premium Widget"
      subtitle="$29.99"
      footer={
        <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
          <Button size="sm" variant="secondary" fullWidth>Add to Wishlist</Button>
          <Button size="sm" variant="primary" fullWidth>Add to Cart</Button>
        </div>
      }
    >
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '8px',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: '#666'
        }}>
          🎯
        </div>
        <p>A high-quality widget that will solve all your problems. Features include durability, efficiency, and style.</p>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how to use the Card component to create a product display card.',
      },
    },
  },
};

// Dashboard Widget Example
export const DashboardWidget: Story = {
  render: () => (
    <Card 
      variant="info" 
      size="md" 
      elevation="sm"
      title="System Status"
      subtitle="Last updated: 2 minutes ago"
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{ color: '#4caf50', fontWeight: 'bold' }}>● All Systems Operational</span>
          <Button size="xs" variant="secondary">View Details</Button>
        </div>
      }
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <div>
          <strong>CPU Usage:</strong> 23%
        </div>
        <div>
          <strong>Memory:</strong> 67%
        </div>
        <div>
          <strong>Disk:</strong> 45%
        </div>
        <div>
          <strong>Network:</strong> 12%
        </div>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how to use the Card component to create a dashboard widget.',
      },
    },
  },
};
