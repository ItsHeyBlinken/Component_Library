import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Card } from '../../Common/Card/Card';
import { Typography } from '../../Common/Typography/Typography';

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A responsive grid system component that provides flexible layout capabilities with CSS Grid. Supports responsive breakpoints, auto-fit/auto-fill, and customizable gaps.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'object' },
      description: 'Number of columns or responsive column configuration',
    },
    gap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Grid gap size',
    },
    rowGap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Row gap size (overrides gap)',
    },
    columnGap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Column gap size (overrides gap)',
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Vertical alignment of grid items',
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
      description: 'Horizontal alignment of grid items',
    },
    autoFit: {
      control: { type: 'boolean' },
      description: 'Auto-fit columns to available space',
    },
    autoFill: {
      control: { type: 'boolean' },
      description: 'Auto-fill columns to available space',
    },
    minColumnWidth: {
      control: { type: 'text' },
      description: 'Minimum column width for auto-fit/auto-fill',
    },
    maxColumnWidth: {
      control: { type: 'text' },
      description: 'Maximum column width for auto-fit/auto-fill',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample grid items for stories
const GridItem = ({ children, color = '#f0f0f0', style }: { children: React.ReactNode; color?: string; style?: React.CSSProperties }) => (
  <div style={{
    backgroundColor: color,
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
  }}>
    {children}
  </div>
);

// Basic Grid
export const Basic: Story = {
  args: {
    columns: 3,
    gap: 'md',
    children: (
      <>
        <GridItem color="#e3f2fd">Grid Item 1</GridItem>
        <GridItem color="#f3e5f5">Grid Item 2</GridItem>
        <GridItem color="#e8f5e8">Grid Item 3</GridItem>
        <GridItem color="#fff3e0">Grid Item 4</GridItem>
        <GridItem color="#fce4ec">Grid Item 5</GridItem>
        <GridItem color="#f1f8e9">Grid Item 6</GridItem>
      </>
    ),
  },
};

// Responsive Grid
export const Responsive: Story = {
  args: {
    columns: { xs: 1, sm: 2, md: 3, lg: 4, xl: 6 },
    gap: 'lg',
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <GridItem key={i} color={`hsl(${i * 30}, 70%, 80%)`}>
            Item {i + 1}
          </GridItem>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that adapts column count based on screen size. Resize your browser to see the responsive behavior.',
      },
    },
  },
};

// Auto-fit Grid
export const AutoFit: Story = {
  args: {
    autoFit: true,
    minColumnWidth: '200px',
    gap: 'md',
    children: (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <GridItem key={i} color={`hsl(${i * 45}, 60%, 75%)`}>
            Auto-fit Item {i + 1}
          </GridItem>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Auto-fit grid that automatically adjusts the number of columns to fit available space while maintaining minimum column width.',
      },
    },
  },
};

// Auto-fill Grid
export const AutoFill: Story = {
  args: {
    autoFill: true,
    minColumnWidth: '180px',
    gap: 'sm',
    children: (
      <>
        {Array.from({ length: 6 }, (_, i) => (
          <GridItem key={i} color={`hsl(${i * 60}, 65%, 70%)`}>
            Auto-fill Item {i + 1}
          </GridItem>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Auto-fill grid that fills the available space with columns, potentially creating empty columns if there are not enough items.',
      },
    },
  },
};

// Different Gaps
export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Small Gap</Typography>
        <Grid columns={4} gap="xs">
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i} color={`hsl(${i * 90}, 70%, 80%)`}>
              Item {i + 1}
            </GridItem>
          ))}
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Small Gap</Typography>
        <Grid columns={4} gap="sm">
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i} color={`hsl(${i * 90}, 70%, 80%)`}>
              Item {i + 1}
            </GridItem>
          ))}
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Medium Gap</Typography>
        <Grid columns={4} gap="md">
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i} color={`hsl(${i * 90}, 70%, 80%)`}>
              Item {i + 1}
            </GridItem>
          ))}
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Large Gap</Typography>
        <Grid columns={4} gap="lg">
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i} color={`hsl(${i * 90}, 70%, 80%)`}>
              Item {i + 1}
            </GridItem>
          ))}
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Large Gap</Typography>
        <Grid columns={4} gap="xl">
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i} color={`hsl(${i * 90}, 70%, 80%)`}>
              Item {i + 1}
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different gap sizes available for the grid component.',
      },
    },
  },
};

// Alignment Options
export const AlignmentOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Align Items: Start</Typography>
        <Grid columns={3} gap="md" alignItems="start" style={{ height: '200px' }}>
          <GridItem color="#e3f2fd" style={{ height: '60px' }}>Short Item</GridItem>
          <GridItem color="#f3e5f5" style={{ height: '120px' }}>Tall Item</GridItem>
          <GridItem color="#e8f5e8" style={{ height: '80px' }}>Medium Item</GridItem>
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Align Items: Center</Typography>
        <Grid columns={3} gap="md" alignItems="center" style={{ height: '200px' }}>
          <GridItem color="#e3f2fd" style={{ height: '60px' }}>Short Item</GridItem>
          <GridItem color="#f3e5f5" style={{ height: '120px' }}>Tall Item</GridItem>
          <GridItem color="#e8f5e8" style={{ height: '80px' }}>Medium Item</GridItem>
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Align Items: End</Typography>
        <Grid columns={3} gap="md" alignItems="end" style={{ height: '200px' }}>
          <GridItem color="#e3f2fd" style={{ height: '60px' }}>Short Item</GridItem>
          <GridItem color="#f3e5f5" style={{ height: '120px' }}>Tall Item</GridItem>
          <GridItem color="#e8f5e8" style={{ height: '80px' }}>Medium Item</GridItem>
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Justify Content: Space Between</Typography>
        <Grid columns={3} gap="md" justifyContent="space-between">
          <GridItem color="#e3f2fd">Item 1</GridItem>
          <GridItem color="#f3e5f5">Item 2</GridItem>
          <GridItem color="#e8f5e8">Item 3</GridItem>
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Justify Content: Center</Typography>
        <Grid columns={3} gap="md" justifyContent="center">
          <GridItem color="#e3f2fd">Item 1</GridItem>
          <GridItem color="#f3e5f5">Item 2</GridItem>
          <GridItem color="#e8f5e8">Item 3</GridItem>
        </Grid>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different alignment options for grid items.',
      },
    },
  },
};

// Card Grid Example
export const CardGrid: Story = {
  render: () => (
    <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap="lg">
      <Card title="Card 1" subtitle="Subtitle 1">
        <Typography variant="body2">
          This is the first card in the grid layout. It demonstrates how cards work within the grid system.
        </Typography>
      </Card>
      
      <Card title="Card 2" subtitle="Subtitle 2" variant="secondary">
        <Typography variant="body2">
          The second card shows how different card variants can be used together in a grid.
        </Typography>
      </Card>
      
      <Card title="Card 3" subtitle="Subtitle 3" variant="success">
        <Typography variant="body2">
          Grid layouts are perfect for organizing card-based content like dashboards and product displays.
        </Typography>
      </Card>
      
      <Card title="Card 4" subtitle="Subtitle 4" variant="info">
        <Typography variant="body2">
          The grid automatically adjusts the layout based on screen size and available space.
        </Typography>
      </Card>
      
      <Card title="Card 5" subtitle="Subtitle 5" variant="warning">
        <Typography variant="body2">
          You can easily add more cards and the grid will handle the layout automatically.
        </Typography>
      </Card>
      
      <Card title="Card 6" subtitle="Subtitle 6" variant="error">
        <Typography variant="body2">
          This responsive behavior makes the grid perfect for mobile-first design approaches.
        </Typography>
      </Card>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using the Grid component with Card components to create a responsive card layout.',
      },
    },
  },
};

// Custom Column Widths
export const CustomColumnWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Auto-fit with Custom Widths</Typography>
        <Grid 
          autoFit 
          minColumnWidth="300px" 
          maxColumnWidth="400px" 
          gap="md"
          justifyContent="center"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <GridItem key={i} color={`hsl(${i * 72}, 65%, 75%)`}>
              Custom Width Item {i + 1}
              <br />
              <small>Min: 300px, Max: 400px</small>
            </GridItem>
          ))}
        </Grid>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Mixed Column Sizes</Typography>
        <Grid 
          columns={3}
          gap="md"
          style={{ height: '200px' }}
        >
          <GridItem color="#e3f2fd" style={{ height: '100%' }}>
            Wide Column (2fr)
          </GridItem>
          <GridItem color="#f3e5f5" style={{ height: '100%' }}>
            Narrow Column (1fr)
          </GridItem>
          <GridItem color="#e8f5e8" style={{ height: '100%' }}>
            Narrow Column (1fr)
          </GridItem>
        </Grid>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom column width configurations and auto-fit with specific width constraints.',
      },
    },
  },
};
