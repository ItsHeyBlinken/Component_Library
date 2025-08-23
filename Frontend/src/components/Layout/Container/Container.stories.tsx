import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Typography } from '../../Common/Typography/Typography';
import { Card } from '../../Common/Card/Card';

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A container component that provides content width constraints and centering for consistent layouts. Supports different sizes, padding options, and responsive behavior.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Container size affecting max-width',
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Custom max-width override',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Whether to center the container',
    },
    fluid: {
      control: { type: 'boolean' },
      description: 'Whether to make the container fluid (full width)',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Padding around the container content',
    },
    paddingX: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Horizontal padding override',
    },
    paddingY: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Vertical padding override',
    },
    as: {
      control: { type: 'text' },
      description: 'HTML element to render',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content for stories
const SampleContent = ({ title, description }: { title: string; description: string }) => (
  <div style={{ 
    backgroundColor: '#f8f9fa', 
    padding: '24px', 
    borderRadius: '8px',
    border: '1px solid #e9ecef'
  }}>
    <Typography variant="h4" style={{ marginBottom: '16px' }}>{title}</Typography>
    <Typography variant="body1">{description}</Typography>
  </div>
);

// Basic Container
export const Basic: Story = {
  args: {
    children: (
      <SampleContent
        title="Basic Container"
        description="This is a basic container with default settings. It provides consistent width constraints and centers content on the page."
      />
    ),
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Small (xs) - 480px max</Typography>
        <Container size="xs">
          <SampleContent
            title="Extra Small Container"
            description="This container has a maximum width of 480px, perfect for narrow content like forms or small widgets."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Small (sm) - 640px max</Typography>
        <Container size="sm">
          <SampleContent
            title="Small Container"
            description="This container has a maximum width of 640px, suitable for compact content layouts."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Medium (md) - 768px max</Typography>
        <Container size="md">
          <SampleContent
            title="Medium Container"
            description="This container has a maximum width of 768px, the default size for most content."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Large (lg) - 1024px max</Typography>
        <Container size="lg">
          <SampleContent
            title="Large Container"
            description="This container has a maximum width of 1024px, great for wider content like dashboards."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Large (xl) - 1280px max</Typography>
        <Container size="xl">
          <SampleContent
            title="Extra Large Container"
            description="This container has a maximum width of 1280px, ideal for wide layouts and large displays."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Full Width</Typography>
        <Container size="full">
          <SampleContent
            title="Full Width Container"
            description="This container takes the full width of its parent, useful for hero sections or full-width content."
          />
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different container sizes available, each with appropriate max-width constraints for different use cases.',
      },
    },
  },
};

// Different Padding Options
export const DifferentPadding: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>No Padding</Typography>
        <Container size="md" padding="none">
          <SampleContent
            title="No Padding"
            description="This container has no padding, allowing content to extend to the edges."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Small Padding</Typography>
        <Container size="md" padding="xs">
          <SampleContent
            title="Extra Small Padding"
            description="This container has minimal padding for compact layouts."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Small Padding</Typography>
        <Container size="md" padding="sm">
          <SampleContent
            title="Small Padding"
            description="This container has small padding for tight layouts."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Medium Padding (Default)</Typography>
        <Container size="md" padding="md">
          <SampleContent
            title="Medium Padding"
            description="This container has standard padding, the default setting."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Large Padding</Typography>
        <Container size="md" padding="lg">
          <SampleContent
            title="Large Padding"
            description="This container has generous padding for spacious layouts."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Large Padding</Typography>
        <Container size="md" padding="xl">
          <SampleContent
            title="Extra Large Padding"
            description="This container has maximum padding for very spacious layouts."
          />
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different padding options available for the container component.',
      },
    },
  },
};

// Custom Padding Axes
export const CustomPaddingAxes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Horizontal Padding</Typography>
        <Container size="md" paddingX="lg" paddingY="xs">
          <SampleContent
            title="Custom Horizontal Padding"
            description="This container has large horizontal padding but small vertical padding, creating a wide but compact layout."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Vertical Padding</Typography>
        <Container size="md" paddingX="xs" paddingY="lg">
          <SampleContent
            title="Custom Vertical Padding"
            description="This container has small horizontal padding but large vertical padding, creating a narrow but spacious layout."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Mixed Padding</Typography>
        <Container size="md" paddingX="xl" paddingY="none">
          <SampleContent
            title="Mixed Padding"
            description="This container has extra large horizontal padding but no vertical padding, creating a wide layout with content touching the top and bottom edges."
          />
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom padding configurations for horizontal and vertical axes independently.',
      },
    },
  },
};

// Centered vs Left-Aligned
export const CenteredVsLeftAligned: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Centered Container (Default)</Typography>
        <Container size="md" centered={true}>
          <SampleContent
            title="Centered Container"
            description="This container is centered on the page, which is the default behavior for most layouts."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Left-Aligned Container</Typography>
        <Container size="md" centered={false}>
          <SampleContent
            title="Left-Aligned Container"
            description="This container is left-aligned, useful for specific layout requirements or when you want content to align with the left edge."
          />
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between centered and left-aligned container positioning.',
      },
    },
  },
};

// Fluid Container
export const FluidContainer: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Standard Container</Typography>
        <Container size="md">
          <SampleContent
            title="Standard Container"
            description="This is a standard container with width constraints and padding."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Fluid Container</Typography>
        <Container size="full" fluid={true}>
          <SampleContent
            title="Fluid Container"
            description="This is a fluid container that takes the full width and has no horizontal padding, perfect for hero sections or full-width content."
          />
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between standard and fluid containers.',
      },
    },
  },
};

// Custom Max Width
export const CustomMaxWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Max Width: 900px</Typography>
        <Container maxWidth="900px">
          <SampleContent
            title="Custom Max Width"
            description="This container has a custom max-width of 900px, which falls between the medium and large preset sizes."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Max Width: 1400px</Typography>
        <Container maxWidth="1400px">
          <SampleContent
            title="Custom Max Width"
            description="This container has a custom max-width of 1400px, which is larger than the extra large preset size."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Max Width: 600px</Typography>
        <Container maxWidth="600px">
          <SampleContent
            title="Custom Max Width"
            description="This container has a custom max-width of 600px, which is between the small and medium preset sizes."
          />
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Containers with custom max-width values that override the preset size constraints.',
      },
    },
  },
};

// Semantic HTML Elements
export const SemanticElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>As Main Element</Typography>
        <Container as="main" size="md">
          <SampleContent
            title="Main Container"
            description="This container is rendered as a main HTML element, providing semantic meaning for screen readers and accessibility tools."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>As Section Element</Typography>
        <Container as="section" size="md">
          <SampleContent
            title="Section Container"
            description="This container is rendered as a section HTML element, useful for organizing content into logical sections."
          />
        </Container>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>As Article Element</Typography>
        <Container as="article" size="md">
          <SampleContent
            title="Article Container"
            description="This container is rendered as an article HTML element, perfect for blog posts, news articles, or other self-contained content."
          />
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using the container with different semantic HTML elements for better accessibility and semantic meaning.',
      },
    },
  },
};

// Real-World Example
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '24px' }}>
      <Container size="lg">
        <Typography variant="h1" style={{ textAlign: 'center', marginBottom: '32px' }}>
          Welcome to Our Platform
        </Typography>
        
        <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '48px' }}>
          This is an example of how the Container component can be used in a real-world application layout.
        </Typography>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <Card title="Feature 1" subtitle="Amazing functionality">
            <Typography variant="body2">
              This card demonstrates how containers work with other components like cards and grids.
            </Typography>
          </Card>
          
          <Card title="Feature 2" subtitle="Incredible performance" variant="secondary">
            <Typography variant="body2">
              The container provides consistent width constraints while maintaining responsive behavior.
            </Typography>
          </Card>
          
          <Card title="Feature 3" subtitle="Outstanding quality" variant="success">
            <Typography variant="body2">
              Perfect for creating professional layouts with consistent spacing and alignment.
            </Typography>
          </Card>
        </div>
      </Container>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A real-world example showing how the Container component integrates with other components to create a complete page layout.',
      },
    },
  },
};
