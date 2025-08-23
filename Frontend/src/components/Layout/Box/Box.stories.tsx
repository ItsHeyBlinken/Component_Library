import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { Typography } from '../../Common/Typography/Typography';
import { Card } from '../../Common/Card/Card';

const meta: Meta<typeof Box> = {
  title: 'Components/Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible container component that provides comprehensive control over spacing, dimensions, positioning, and styling. Perfect for layout composition and spacing utilities.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Padding around all sides',
    },
    paddingX: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Horizontal padding (left and right)',
    },
    paddingY: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Vertical padding (top and bottom)',
    },
    paddingTop: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Top padding',
    },
    paddingRight: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Right padding',
    },
    paddingBottom: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Bottom padding',
    },
    paddingLeft: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Left padding',
    },
    margin: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Margin around all sides',
    },
    marginX: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Horizontal margin (left and right)',
    },
    marginY: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Vertical margin (top and bottom)',
    },
    display: {
      control: { type: 'select' },
      options: ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'none'],
      description: 'Display property',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the box',
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the box',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color',
    },
    border: {
      control: { type: 'text' },
      description: 'Border style',
    },
    borderRadius: {
      control: { type: 'text' },
      description: 'Border radius',
    },
    boxShadow: {
      control: { type: 'text' },
      description: 'Box shadow',
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
  <div style={{ textAlign: 'center' }}>
    <Typography variant="h6" style={{ marginBottom: '8px' }}>{title}</Typography>
    <Typography variant="body2">{description}</Typography>
  </div>
);

// Basic Box
export const Basic: Story = {
  args: {
    padding: 'md',
    backgroundColor: '#f8f9fa',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    children: (
      <SampleContent
        title="Basic Box"
        description="This is a basic box with default padding and styling."
      />
    ),
  },
};

// Different Padding Options
export const DifferentPadding: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Small Padding</Typography>
        <Box padding="xs" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px">
          <SampleContent
            title="Extra Small Padding"
            description="This box has minimal padding for compact layouts."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Small Padding</Typography>
        <Box padding="sm" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px">
          <SampleContent
            title="Small Padding"
            description="This box has small padding for tight layouts."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Medium Padding (Default)</Typography>
        <Box padding="md" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px">
          <SampleContent
            title="Medium Padding"
            description="This box has standard padding, the default setting."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Large Padding</Typography>
        <Box padding="lg" backgroundColor="#fff3e0" border="1px solid #ffcc80" borderRadius="6px">
          <SampleContent
            title="Large Padding"
            description="This box has generous padding for spacious layouts."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Extra Large Padding</Typography>
        <Box padding="xl" backgroundColor="#fce4ec" border="1px solid #f8bbd9" borderRadius="6px">
          <SampleContent
            title="Extra Large Padding"
            description="This box has maximum padding for very spacious layouts."
          />
        </Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different padding options available for the box component.',
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
        <Box paddingX="lg" paddingY="xs" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px">
          <SampleContent
            title="Custom Horizontal Padding"
            description="This box has large horizontal padding but small vertical padding."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Vertical Padding</Typography>
        <Box paddingX="xs" paddingY="lg" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px">
          <SampleContent
            title="Custom Vertical Padding"
            description="This box has small horizontal padding but large vertical padding."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Individual Side Padding</Typography>
        <Box 
          paddingTop="xl" 
          paddingRight="sm" 
          paddingBottom="xs" 
          paddingLeft="lg"
          backgroundColor="#e8f5e8" 
          border="1px solid #c8e6c9" 
          borderRadius="6px"
        >
          <SampleContent
            title="Individual Side Padding"
            description="This box has different padding on each side for custom layouts."
          />
        </Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom padding configurations for different axes and individual sides.',
      },
    },
  },
};

// Margin Examples
export const MarginExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>With Margin</Typography>
        <Box 
          padding="md" 
          margin="lg" 
          backgroundColor="#e3f2fd" 
          border="1px solid #bbdefb" 
          borderRadius="6px"
        >
          <SampleContent
            title="Box with Margin"
            description="This box has large margin around it, creating space from other elements."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Margin Axes</Typography>
        <Box 
          padding="md" 
          marginX="xl" 
          marginY="sm"
          backgroundColor="#f3e5f5" 
          border="1px solid #e1bee7" 
          borderRadius="6px"
        >
          <SampleContent
            title="Custom Margin Axes"
            description="This box has extra large horizontal margin but small vertical margin."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Individual Side Margins</Typography>
        <Box 
          padding="md" 
          marginTop="xl" 
          marginRight="md" 
          marginBottom="xs" 
          marginLeft="lg"
          backgroundColor="#e8f5e8" 
          border="1px solid #c8e6c9" 
          borderRadius="6px"
        >
          <SampleContent
            title="Individual Side Margins"
            description="This box has different margins on each side for custom spacing."
          />
        </Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different margin configurations for the box component.',
      },
    },
  },
};

// Display Properties
export const DisplayProperties: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Block Display (Default)</Typography>
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '6px' }}>
          <Box display="block" padding="sm" backgroundColor="#e3f2fd" borderRadius="4px">
            Block Box 1
          </Box>
          <Box display="block" padding="sm" backgroundColor="#f3e5f5" borderRadius="4px">
            Block Box 2
          </Box>
        </div>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Inline Display</Typography>
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '6px' }}>
          <Box display="inline" padding="sm" backgroundColor="#e3f2fd" borderRadius="4px">
            Inline Box 1
          </Box>
          <Box display="inline" padding="sm" backgroundColor="#f3e5f5" borderRadius="4px">
            Inline Box 2
          </Box>
          <Typography variant="body2" style={{ marginTop: '8px' }}>
            Notice how inline boxes flow with text and don't create line breaks.
          </Typography>
        </div>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Flex Display</Typography>
        <Box 
          display="flex" 
          padding="md" 
          backgroundColor="#e8f5e8" 
          border="1px solid #c8e6c9" 
          borderRadius="6px"
          style={{ gap: '12px' }}
        >
          <Box padding="sm" backgroundColor="#c8e6c9" borderRadius="4px">Flex Item 1</Box>
          <Box padding="sm" backgroundColor="#a5d6a7" borderRadius="4px">Flex Item 2</Box>
          <Box padding="sm" backgroundColor="#81c784" borderRadius="4px">Flex Item 3</Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Grid Display</Typography>
        <Box 
          display="grid" 
          padding="md" 
          backgroundColor="#fff3e0" 
          border="1px solid #ffcc80" 
          borderRadius="6px"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}
        >
          <Box padding="sm" backgroundColor="#ffcc80" borderRadius="4px">Grid Item 1</Box>
          <Box padding="sm" backgroundColor="#ffb74d" borderRadius="4px">Grid Item 2</Box>
          <Box padding="sm" backgroundColor="#ffa726" borderRadius="4px">Grid Item 3</Box>
        </Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different display properties and their effects on box layout.',
      },
    },
  },
};

// Dimensions and Sizing
export const DimensionsAndSizing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Fixed Dimensions</Typography>
        <Box 
          width={300} 
          height={150} 
          padding="md" 
          backgroundColor="#e3f2fd" 
          border="1px solid #bbdefb" 
          borderRadius="6px"
        >
          <SampleContent
            title="Fixed Dimensions"
            description="This box has a fixed width of 300px and height of 150px."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Percentage Dimensions</Typography>
        <Box 
          width="80%" 
          height="120px" 
          padding="md" 
          backgroundColor="#f3e5f5" 
          border="1px solid #e1bee7" 
          borderRadius="6px"
        >
          <SampleContent
            title="Percentage Dimensions"
            description="This box has 80% width and 120px height."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Min/Max Dimensions</Typography>
        <Box 
          minWidth={200} 
          maxWidth="600px" 
          minHeight={100} 
          maxHeight={200}
          padding="md" 
          backgroundColor="#e8f5e8" 
          border="1px solid #c8e6c9" 
          borderRadius="6px"
        >
          <SampleContent
            title="Min/Max Dimensions"
            description="This box has minimum and maximum constraints on both width and height."
          />
        </Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different dimension and sizing options for the box component.',
      },
    },
  },
};

// Styling and Appearance
export const StylingAndAppearance: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Background and Border</Typography>
        <Box 
          padding="lg" 
          backgroundColor="#fce4ec" 
          border="2px solid #f48fb1" 
          borderRadius="12px"
        >
          <SampleContent
            title="Styled Box"
            description="This box has a custom background color, border, and border radius."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Box Shadow</Typography>
        <Box 
          padding="lg" 
          backgroundColor="#fff" 
          border="1px solid #e0e0e0" 
          borderRadius="8px"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
        >
          <SampleContent
            title="Box with Shadow"
            description="This box has a subtle box shadow for depth and elevation."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Custom Styling</Typography>
        <Box 
          padding="xl" 
          backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          border="3px solid #5a67d8" 
          borderRadius="16px"
          boxShadow="0 10px 25px rgba(102, 126, 234, 0.3)"
          style={{ color: 'white' }}
        >
          <SampleContent
            title="Gradient Box"
            description="This box uses a gradient background and enhanced shadows for a premium look."
          />
        </Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different styling and appearance options for the box component.',
      },
    },
  },
};

// Positioning Examples
export const PositioningExamples: Story = {
  render: () => (
    <div style={{ position: 'relative', height: '400px', border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
      <Typography variant="h6" style={{ marginBottom: '16px' }}>Positioning Examples</Typography>
      
      <Box 
        position="absolute" 
        top={20} 
        left={20} 
        padding="md" 
        backgroundColor="#e3f2fd" 
        border="1px solid #bbdefb" 
        borderRadius="6px"
        width={150}
      >
        <Typography variant="body2">Absolute Top-Left</Typography>
      </Box>
      
      <Box 
        position="absolute" 
        top={20} 
        right={20} 
        padding="md" 
        backgroundColor="#f3e5f5" 
        border="1px solid #e1bee7" 
        borderRadius="6px"
        width={150}
      >
        <Typography variant="body2">Absolute Top-Right</Typography>
      </Box>
      
      <Box 
        position="absolute" 
        bottom={20} 
        left={20} 
        padding="md" 
        backgroundColor="#e8f5e8" 
        border="1px solid #c8e6c9" 
        borderRadius="6px"
        width={150}
      >
        <Typography variant="body2">Absolute Bottom-Left</Typography>
      </Box>
      
      <Box 
        position="absolute" 
        bottom={20} 
        right={20} 
        padding="md" 
        backgroundColor="#fff3e0" 
        border="1px solid #ffcc80" 
        borderRadius="6px"
        width={150}
      >
        <Typography variant="body2">Absolute Bottom-Right</Typography>
      </Box>
      
      <Box 
        position="absolute" 
        top="50%" 
        left="50%" 
        padding="md" 
        backgroundColor="#fce4ec" 
        border="1px solid #f48fb1" 
        borderRadius="6px"
        width={150}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <Typography variant="body2">Absolute Center</Typography>
      </Box>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different positioning options for the box component.',
      },
    },
  },
};

// Overflow Examples
export const OverflowExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Visible Overflow (Default)</Typography>
        <Box 
          width={200} 
          height={100} 
          padding="md" 
          backgroundColor="#e3f2fd" 
          border="1px solid #bbdefb" 
          borderRadius="6px"
          overflow="visible"
        >
          <Typography variant="body2">
            This box has visible overflow, so content extends beyond the box boundaries.
          </Typography>
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Hidden Overflow</Typography>
        <Box 
          width={200} 
          height={100} 
          padding="md" 
          backgroundColor="#f3e5f5" 
          border="1px solid #e1bee7" 
          borderRadius="6px"
          overflow="hidden"
        >
          <Typography variant="body2">
            This box has hidden overflow, so content is clipped at the box boundaries.
          </Typography>
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Scroll Overflow</Typography>
        <Box 
          width={200} 
          height={100} 
          padding="md" 
          backgroundColor="#e8f5e8" 
          border="1px solid #c8e6c9" 
          borderRadius="6px"
          overflow="scroll"
        >
          <Typography variant="body2">
            This box has scroll overflow, so scrollbars appear when content exceeds the box size.
          </Typography>
        </Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different overflow handling options for the box component.',
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
        <Box as="main" padding="lg" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px">
          <SampleContent
            title="Main Box"
            description="This box is rendered as a main HTML element for semantic meaning."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>As Section Element</Typography>
        <Box as="section" padding="lg" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px">
          <SampleContent
            title="Section Box"
            description="This box is rendered as a section HTML element for content organization."
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>As Article Element</Typography>
        <Box as="article" padding="lg" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px">
          <SampleContent
            title="Article Box"
            description="This box is rendered as an article HTML element for self-contained content."
          />
        </Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using the Box component with different semantic HTML elements for better accessibility.',
      },
    },
  },
};

// Real-World Example
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '24px' }}>
      <Box as="main" maxWidth="1200px" margin="0 auto">
        {/* Header */}
        <Box as="header" padding="lg" marginBottom="xl" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)">
          <Typography variant="h1" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Layout Example
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            This demonstrates how the Box component can be used to create complex layouts.
          </Typography>
        </Box>
        
        {/* Content Grid */}
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="24px" marginBottom="xl">
          <Box padding="lg" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)">
            <Typography variant="h3" style={{ marginBottom: '16px' }}>Feature 1</Typography>
            <Typography variant="body1">
              The Box component provides flexible layout capabilities with comprehensive spacing control.
            </Typography>
          </Box>
          
          <Box padding="lg" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)">
            <Typography variant="h3" style={{ marginBottom: '16px' }}>Feature 2</Typography>
            <Typography variant="body1">
              Easy to use with theme-based spacing values and responsive design patterns.
            </Typography>
          </Box>
          
          <Box padding="lg" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)">
            <Typography variant="h3" style={{ marginBottom: '16px' }}>Feature 3</Typography>
            <Typography variant="body1">
              Perfect for creating consistent layouts and spacing throughout your application.
            </Typography>
          </Box>
        </Box>
        
        {/* Footer */}
        <Box as="footer" padding="lg" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)" textAlign="center">
          <Typography variant="body2" color="secondary">
            Built with the Box component for consistent spacing and layout.
          </Typography>
        </Box>
      </Box>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A real-world example showing how the Box component can be used to create complete page layouts.',
      },
    },
  },
};
