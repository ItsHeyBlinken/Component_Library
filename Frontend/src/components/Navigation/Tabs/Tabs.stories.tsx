import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabItem } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive tabs component that supports horizontal/vertical orientation, different styles, closable tabs, and various customization options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of tab items to display',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The variant/style of the tabs',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the tabs',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
    type: {
      control: { type: 'select' },
      options: ['line', 'card', 'text'],
      description: 'The type/style of the tabs',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the tabs are full width',
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Whether the tabs have borders',
    },
    shadowed: {
      control: { type: 'boolean' },
      description: 'Whether the tabs have shadows',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the tabs have rounded corners',
    },
    closable: {
      control: { type: 'boolean' },
      description: 'Whether tabs can be closed',
    },
    addable: {
      control: { type: 'boolean' },
      description: 'Whether new tabs can be added',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Whether tab transitions are animated',
    },
    lazy: {
      control: { type: 'boolean' },
      description: 'Whether tab content is loaded lazily',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Whether tabs are centered',
    },
    sticky: {
      control: { type: 'boolean' },
      description: 'Whether the tab bar is sticky',
    },
    scrollable: {
      control: { type: 'boolean' },
      description: 'Whether the tab bar is scrollable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tab items
const basicTabItems: TabItem[] = [
  {
    id: 'tab1',
    label: 'First Tab',
    icon: '📱',
    content: (
      <div>
        <h3>First Tab Content</h3>
        <p>This is the content of the first tab. You can put any React components here.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    ),
  },
  {
    id: 'tab2',
    label: 'Second Tab',
    icon: '💻',
    content: (
      <div>
        <h3>Second Tab Content</h3>
        <p>This is the content of the second tab. It can contain forms, tables, or any other content.</p>
        <button>Sample Button</button>
      </div>
    ),
  },
  {
    id: 'tab3',
    label: 'Third Tab',
    icon: '🎨',
    content: (
      <div>
        <h3>Third Tab Content</h3>
        <p>This is the content of the third tab. You can even put complex components here.</p>
        <div style={{ padding: '16px', background: '#f0f0f0', borderRadius: '8px' }}>
          <p>This is a styled content box within the tab.</p>
        </div>
      </div>
    ),
  },
];

const closableTabItems: TabItem[] = [
  {
    id: 'tab1',
    label: 'Home',
    icon: '🏠',
    content: <div><h3>Home Content</h3><p>Welcome to the home page!</p></div>,
    closable: true,
  },
  {
    id: 'tab2',
    label: 'Profile',
    icon: '👤',
    content: <div><h3>Profile Content</h3><p>User profile information.</p></div>,
    closable: true,
  },
  {
    id: 'tab3',
    label: 'Settings',
    icon: '⚙️',
    content: <div><h3>Settings Content</h3><p>Application settings and preferences.</p></div>,
    closable: true,
  },
  {
    id: 'tab4',
    label: 'Help',
    icon: '❓',
    content: <div><h3>Help Content</h3><p>Help and documentation.</p></div>,
    closable: true,
  },
];

const tabItemsWithBadges: TabItem[] = [
  {
    id: 'tab1',
    label: 'Inbox',
    icon: '📥',
    badge: 12,
    content: <div><h3>Inbox</h3><p>You have 12 unread messages.</p></div>,
  },
  {
    id: 'tab2',
    label: 'Sent',
    icon: '📤',
    content: <div><h3>Sent</h3><p>Your sent messages.</p></div>,
  },
  {
    id: 'tab3',
    label: 'Drafts',
    icon: '📝',
    badge: 3,
    content: <div><h3>Drafts</h3><p>You have 3 draft messages.</p></div>,
  },
  {
    id: 'tab4',
    label: 'Trash',
    icon: '🗑️',
    badge: '!',
    content: <div><h3>Trash</h3><p>Deleted messages.</p></div>,
  },
];

const disabledTabItems: TabItem[] = [
  {
    id: 'tab1',
    label: 'Active Tab',
    icon: '✅',
    content: <div><h3>Active Tab</h3><p>This tab is active and enabled.</p></div>,
  },
  {
    id: 'tab2',
    label: 'Disabled Tab',
    icon: '❌',
    disabled: true,
    content: <div><h3>Disabled Tab</h3><p>This tab is disabled and cannot be accessed.</p></div>,
  },
  {
    id: 'tab3',
    label: 'Another Active Tab',
    icon: '✅',
    content: <div><h3>Another Active Tab</h3><p>This tab is also active and enabled.</p></div>,
  },
];

// Basic Tabs
export const Basic: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs items={basicTabItems} />
    </div>
  ),
};

// Different Tab Types
export const DifferentTabTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '600px' }}>
      <div>
        <h4>Line Tabs (Default)</h4>
        <Tabs items={basicTabItems} type="line" bordered={true} />
      </div>
      
      <div>
        <h4>Card Tabs</h4>
        <Tabs items={basicTabItems} type="card" bordered={true} />
      </div>
      
      <div>
        <h4>Text Tabs</h4>
        <Tabs items={basicTabItems} type="text" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with different visual styles: line, card, and text.',
      },
    },
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '600px' }}>
      <div>
        <h4>Extra Small</h4>
        <Tabs items={basicTabItems} size="xs" bordered={true} />
      </div>
      
      <div>
        <h4>Small</h4>
        <Tabs items={basicTabItems} size="sm" bordered={true} />
      </div>
      
      <div>
        <h4>Medium (Default)</h4>
        <Tabs items={basicTabItems} size="md" bordered={true} />
      </div>
      
      <div>
        <h4>Large</h4>
        <Tabs items={basicTabItems} size="lg" bordered={true} />
      </div>
      
      <div>
        <h4>Extra Large</h4>
        <Tabs items={basicTabItems} size="xl" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with different sizes.',
      },
    },
  },
};

// Different Variants
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '600px' }}>
      <div>
        <h4>Primary</h4>
        <Tabs items={basicTabItems} variant="primary" bordered={true} />
      </div>
      
      <div>
        <h4>Secondary</h4>
        <Tabs items={basicTabItems} variant="secondary" bordered={true} />
      </div>
      
      <div>
        <h4>Success</h4>
        <Tabs items={basicTabItems} variant="success" bordered={true} />
      </div>
      
      <div>
        <h4>Warning</h4>
        <Tabs items={basicTabItems} variant="warning" bordered={true} />
      </div>
      
      <div>
        <h4>Error</h4>
        <Tabs items={basicTabItems} variant="error" bordered={true} />
      </div>
      
      <div>
        <h4>Info</h4>
        <Tabs items={basicTabItems} variant="info" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with different color variants.',
      },
    },
  },
};

// Closable Tabs
export const ClosableTabs: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs 
        items={closableTabItems} 
        closable={true}
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs that can be closed by the user.',
      },
    },
  },
};

// Tabs with Badges
export const TabsWithBadges: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs 
        items={tabItemsWithBadges} 
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with notification badges.',
      },
    },
  },
};

// Disabled Tabs
export const DisabledTabs: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs 
        items={disabledTabItems} 
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with some disabled states.',
      },
    },
  },
};

// Vertical Tabs
export const VerticalTabs: Story = {
  render: () => (
    <div style={{ width: '800px', height: '400px' }}>
      <Tabs 
        items={basicTabItems} 
        orientation="vertical"
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with vertical orientation.',
      },
    },
  },
};

// Full Width Tabs
export const FullWidthTabs: Story = {
  render: () => (
    <div style={{ width: '800px' }}>
      <Tabs 
        items={basicTabItems} 
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
        story: 'Full width tabs that span the container.',
      },
    },
  },
};

// Centered Tabs
export const CenteredTabs: Story = {
  render: () => (
    <div style={{ width: '800px' }}>
      <Tabs 
        items={basicTabItems} 
        centered={true}
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Centered tabs with equal spacing.',
      },
    },
  },
};

// Addable Tabs
export const AddableTabs: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs 
        items={basicTabItems} 
        addable={true}
        onTabAdd={() => alert('Add new tab clicked!')}
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with an add button for creating new tabs.',
      },
    },
  },
};

// Lazy Loading Tabs
export const LazyLoadingTabs: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs 
        items={basicTabItems} 
        lazy={true}
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with lazy loading - content is only loaded when tab is first accessed.',
      },
    },
  },
};

// Interactive Tabs
export const InteractiveTabs: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs 
        items={basicTabItems} 
        onTabChange={(tabId) => console.log(`Tab changed to: ${tabId}`)}
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive tabs with change event handling.',
      },
    },
  },
};

// Tabs with Extra Content
export const TabsWithExtraContent: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs 
        items={basicTabItems} 
        tabBarExtraContent={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button style={{ padding: '4px 8px', fontSize: '12px' }}>Refresh</button>
            <button style={{ padding: '4px 8px', fontSize: '12px' }}>Settings</button>
          </div>
        }
        bordered={true}
        shadowed={true}
        rounded={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with extra content in the tab bar.',
      },
    },
  },
};
