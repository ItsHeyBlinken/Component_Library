import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Typography } from '../../Common/Typography/Typography';
import { Card } from '../../Common/Card/Card';
import { Button } from '../../Common/Button/Button';

const meta: Meta<typeof Stack> = {
  title: 'Components/Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A vertical spacing component that provides consistent layout spacing between child elements. Perfect for organizing content with consistent vertical rhythm.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Spacing between stack items',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Horizontal alignment of stack items',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
      description: 'Vertical distribution of stack items',
    },
    as: {
      control: { type: 'text' },
      description: 'HTML element to render',
    },
    inline: {
      control: { type: 'boolean' },
      description: 'Whether to display as inline-flex',
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'Whether to allow wrapping',
    },
    divider: {
      control: { type: 'text' },
      description: 'Divider content between items',
    },
    dividerSpacing: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Spacing around dividers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample stack items for stories
const StackItem = ({ children, color = '#e3f2fd', height = '60px', style }: { children: React.ReactNode; color?: string; height?: string; style?: React.CSSProperties }) => (
  <div style={{
    backgroundColor: color,
    padding: '16px',
    borderRadius: '6px',
    textAlign: 'center',
    height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    minWidth: '200px',
  }}>
    {children}
  </div>
);

// Basic Stack
export const Basic: Story = {
  args: {
    children: (
      <>
        <StackItem color="#e3f2fd">Stack Item 1</StackItem>
        <StackItem color="#f3e5f5">Stack Item 2</StackItem>
        <StackItem color="#e8f5e8">Stack Item 3</StackItem>
        <StackItem color="#fff3e0">Stack Item 4</StackItem>
      </>
    ),
  },
};

// Different Spacing
export const DifferentSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Small Spacing</Typography>
        <Stack spacing="xs">
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Small Spacing</Typography>
        <Stack spacing="sm">
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Medium Spacing (Default)</Typography>
        <Stack spacing="md">
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Large Spacing</Typography>
        <Stack spacing="lg">
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Large Spacing</Typography>
        <Stack spacing="xl">
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>No Spacing</Typography>
        <Stack spacing="none">
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different spacing options available for the stack component.',
      },
    },
  },
};

// Alignment Options
export const AlignmentOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Align: Start (Default)</Typography>
        <Stack spacing="md" align="start">
          <StackItem color="#e3f2fd" height="40px">Short Item</StackItem>
          <StackItem color="#f3e5f5" height="80px">Tall Item</StackItem>
          <StackItem color="#e8f5e8" height="60px">Medium Item</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Align: Center</Typography>
        <Stack spacing="md" align="center">
          <StackItem color="#e3f2fd" height="40px">Short Item</StackItem>
          <StackItem color="#f3e5f5" height="80px">Tall Item</StackItem>
          <StackItem color="#e8f5e8" height="60px">Medium Item</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Align: End</Typography>
        <Stack spacing="md" align="end">
          <StackItem color="#e3f2fd" height="40px">Short Item</StackItem>
          <StackItem color="#f3e5f5" height="80px">Tall Item</StackItem>
          <StackItem color="#e8f5e8" height="60px">Medium Item</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Align: Stretch</Typography>
        <Stack spacing="md" align="stretch">
          <StackItem color="#e3f2fd" height="40px">Short Item</StackItem>
          <StackItem color="#f3e5f5" height="80px">Tall Item</StackItem>
          <StackItem color="#e8f5e8" height="60px">Medium Item</StackItem>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different alignment options for stack items.',
      },
    },
  },
};

// Justify Options
export const JustifyOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Justify: Start (Default)</Typography>
        <Stack spacing="md" justify="start" style={{ height: '300px' }}>
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Justify: Center</Typography>
        <Stack spacing="md" justify="center" style={{ height: '300px' }}>
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Justify: End</Typography>
        <Stack spacing="md" justify="end" style={{ height: '300px' }}>
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Justify: Space Between</Typography>
        <Stack spacing="md" justify="space-between" style={{ height: '300px' }}>
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Justify: Space Around</Typography>
        <Stack spacing="md" justify="space-around" style={{ height: '300px' }}>
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Justify: Space Evenly</Typography>
        <Stack spacing="md" justify="space-evenly" style={{ height: '300px' }}>
          <StackItem color="#e3f2fd">Item 1</StackItem>
          <StackItem color="#f3e5f5">Item 2</StackItem>
          <StackItem color="#e8f5e8">Item 3</StackItem>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different justify options for distributing stack items vertically.',
      },
    },
  },
};

// With Dividers
export const WithDividers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Text Divider</Typography>
        <Stack spacing="lg" divider="•" dividerSpacing="md">
          <StackItem color="#e3f2fd">Section 1</StackItem>
          <StackItem color="#f3e5f5">Section 2</StackItem>
          <StackItem color="#e8f5e8">Section 3</StackItem>
          <StackItem color="#fff3e0">Section 4</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Icon Divider</Typography>
        <Stack spacing="lg" divider="→" dividerSpacing="lg">
          <StackItem color="#e3f2fd">Step 1</StackItem>
          <StackItem color="#f3e5f5">Step 2</StackItem>
          <StackItem color="#e8f5e8">Step 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Divider</Typography>
        <Stack spacing="lg" divider={<div style={{ color: '#666', fontSize: '12px', fontWeight: 'bold' }}>SEPARATOR</div>}>
          <StackItem color="#e3f2fd">Group A</StackItem>
          <StackItem color="#f3e5f5">Group B</StackItem>
          <StackItem color="#e8f5e8">Group C</StackItem>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack with different types of dividers between items.',
      },
    },
  },
};

// Inline Stack
export const InlineStack: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Inline Stack</Typography>
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '6px' }}>
          <Typography variant="body2" style={{ marginBottom: '8px' }}>
            This is some text with an inline stack:
          </Typography>
          <Stack inline spacing="sm">
            <Button size="sm" variant="primary">Button 1</Button>
            <Button size="sm" variant="secondary">Button 2</Button>
            <Button size="sm" variant="success">Button 3</Button>
          </Stack>
          <Typography variant="body2" style={{ marginTop: '8px' }}>
            And more text continues here.
          </Typography>
        </div>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Inline Stack with Wrapping</Typography>
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '6px', maxWidth: '400px' }}>
          <Stack inline spacing="sm" wrap>
            <Button size="sm" variant="primary">Long Button Text</Button>
            <Button size="sm" variant="secondary">Another Button</Button>
            <Button size="sm" variant="success">Third Button</Button>
            <Button size="sm" variant="warning">Fourth Button</Button>
            <Button size="sm" variant="error">Fifth Button</Button>
          </Stack>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inline stack examples showing how the component can be used within text flow.',
      },
    },
  },
};

// Form Layout Example
export const FormLayout: Story = {
  render: () => (
    <Card title="Contact Form" subtitle="Please fill out the form below">
      <Stack spacing="lg">
        <div>
          <Typography variant="body2" style={{ display: 'block', marginBottom: '8px' }}>
            Name
          </Typography>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>
        
        <div>
          <Typography variant="body2" style={{ display: 'block', marginBottom: '8px' }}>
            Email
          </Typography>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>
        
        <div>
          <Typography variant="body2" style={{ display: 'block', marginBottom: '8px' }}>
            Message
          </Typography>
          <textarea
            placeholder="Enter your message"
            rows={4}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              resize: 'vertical'
            }}
          />
        </div>
        
        <Stack spacing="sm" align="center">
          <Button variant="primary" fullWidth>Submit</Button>
          <Button variant="secondary" size="sm">Cancel</Button>
        </Stack>
      </Stack>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using the Stack component to create a well-organized form layout with consistent spacing.',
      },
    },
  },
};

// Navigation Example
export const NavigationExample: Story = {
  render: () => (
    <Card title="Navigation Menu" subtitle="Vertical navigation structure">
      <Stack spacing="xs" divider={<hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '8px 0' }} />}>
        <div style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '4px', backgroundColor: '#f8f9fa' }}>
          <Typography variant="body1" style={{ fontWeight: '500' }}>Dashboard</Typography>
        </div>
        
        <div style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '4px' }}>
          <Typography variant="body1">Profile</Typography>
        </div>
        
        <div style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '4px' }}>
          <Typography variant="body1">Settings</Typography>
        </div>
        
        <div style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '4px' }}>
          <Typography variant="body1">Help</Typography>
        </div>
        
        <div style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '4px' }}>
          <Typography variant="body1">Logout</Typography>
        </div>
      </Stack>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using the Stack component to create a navigation menu with dividers.',
      },
    },
  },
};

// Semantic HTML Elements
export const SemanticElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>As List Element</Typography>
        <Stack as="ul" spacing="md">
          <li style={{ listStyle: 'none' }}>
            <StackItem color="#e3f2fd">List Item 1</StackItem>
          </li>
          <li style={{ listStyle: 'none' }}>
            <StackItem color="#f3e5f5">List Item 2</StackItem>
          </li>
          <li style={{ listStyle: 'none' }}>
            <StackItem color="#e8f5e8">List Item 3</StackItem>
          </li>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>As Section Element</Typography>
        <Stack as="section" spacing="lg">
          <StackItem color="#e3f2fd">Section Content 1</StackItem>
          <StackItem color="#f3e5f5">Section Content 2</StackItem>
          <StackItem color="#e8f5e8">Section Content 3</StackItem>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using the Stack component with different semantic HTML elements for better accessibility.',
      },
    },
  },
};
