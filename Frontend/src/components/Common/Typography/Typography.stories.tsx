import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Common/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive typography system with consistent styling, semantic HTML elements, and flexible customization options. Provides heading hierarchy, body text variants, and specialized text styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'body1', 'body2', 'body3',
        'caption', 'overline', 'button',
        'display1', 'display2', 'display3', 'display4',
        'code', 'link'
      ],
      description: 'Typography variant that determines size, weight, and styling',
    },
    as: {
      control: { type: 'text' },
      description: 'HTML element to render (overrides default for variant)',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'disabled', 'inherit'],
      description: 'Text color variant',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: 'Font weight override',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    transform: {
      control: { type: 'select' },
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
      description: 'Text transformation',
    },
    decoration: {
      control: { type: 'select' },
      options: ['none', 'underline', 'line-through', 'overline'],
      description: 'Text decoration',
    },
    truncate: {
      control: { type: 'boolean' },
      description: 'Whether to truncate text with ellipsis',
    },
    noWrap: {
      control: { type: 'boolean' },
      description: 'Whether to prevent text wrapping',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Typography
export const Basic: Story = {
  args: {
    children: 'This is basic typography text.',
    variant: 'body1',
  },
};

// Heading Hierarchy
export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="h1">Heading 1 - Main Title</Typography>
      <Typography variant="h2">Heading 2 - Section Title</Typography>
      <Typography variant="h3">Heading 3 - Subsection Title</Typography>
      <Typography variant="h4">Heading 4 - Minor Section</Typography>
      <Typography variant="h5">Heading 5 - Small Section</Typography>
      <Typography variant="h6">Heading 6 - Minor Subsection</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete heading hierarchy from h1 to h6 with appropriate sizing and weights.',
      },
    },
  },
};

// Display Typography
export const Display: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <Typography variant="display1">Display 1 - Hero Text</Typography>
      <Typography variant="display2">Display 2 - Large Title</Typography>
      <Typography variant="display3">Display 3 - Medium Title</Typography>
      <Typography variant="display4">Display 4 - Small Title</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Display typography variants for large, impactful text like hero sections and main titles.',
      },
    },
  },
};

// Body Text Variants
export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="body1">
        Body 1 - This is the standard body text size used for most content. It provides good readability 
        and is suitable for paragraphs, descriptions, and general content.
      </Typography>
      <Typography variant="body2">
        Body 2 - This is smaller body text, often used for secondary content, captions, or when you need 
        to fit more text in a smaller space while maintaining readability.
      </Typography>
      <Typography variant="body3">
        Body 3 - This is the smallest body text variant, useful for very compact layouts or when you need 
        to display a lot of information in a limited space.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Body text variants for different content hierarchy and space constraints.',
      },
    },
  },
};

// Specialized Variants
export const Specialized: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="caption">
        Caption - This is caption text used for labels, metadata, or supplementary information.
      </Typography>
      <Typography variant="overline">
        Overline - This is overline text typically used for labels above content sections.
      </Typography>
      <Typography variant="button">
        Button - This is button text styling, often used for call-to-action elements.
      </Typography>
      <Typography variant="code">
        Code - This is inline code text with monospace font and background styling.
      </Typography>
      <Typography variant="link" href="https://example.com">
        Link - This is a clickable link with hover effects and proper accessibility.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Specialized typography variants for specific use cases like captions, buttons, and code.',
      },
    },
  },
};

// Color Variants
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="body1" color="primary">
        Primary Color - This text uses the primary color from the theme.
      </Typography>
      <Typography variant="body1" color="secondary">
        Secondary Color - This text uses the secondary color from the theme.
      </Typography>
      <Typography variant="body1" color="disabled">
        Disabled Color - This text uses the disabled color from the theme.
      </Typography>
      <Typography variant="body1" color="inherit">
        Inherit Color - This text inherits its color from the parent element.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different color variants available for typography components.',
      },
    },
  },
};

// Font Weights
export const FontWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="body1" weight="light">
        Light Weight - This text uses a light font weight for subtle emphasis.
      </Typography>
      <Typography variant="body1" weight="normal">
        Normal Weight - This is the standard font weight for body text.
      </Typography>
      <Typography variant="body1" weight="medium">
        Medium Weight - This text uses a medium weight for moderate emphasis.
      </Typography>
      <Typography variant="body1" weight="semibold">
        Semibold Weight - This text uses a semibold weight for stronger emphasis.
      </Typography>
      <Typography variant="body1" weight="bold">
        Bold Weight - This text uses a bold weight for strong emphasis.
      </Typography>
      <Typography variant="body1" weight="extrabold">
        Extrabold Weight - This text uses an extrabold weight for maximum emphasis.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different font weight options available for typography components.',
      },
    },
  },
};

// Text Alignment
export const TextAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="body1" align="left">
        Left Aligned - This text is aligned to the left side of its container.
      </Typography>
      <Typography variant="body1" align="center">
        Center Aligned - This text is centered within its container.
      </Typography>
      <Typography variant="body1" align="right">
        Right Aligned - This text is aligned to the right side of its container.
      </Typography>
      <Typography variant="body1" align="justify">
        Justified - This text is justified to fill the full width of its container, creating even margins on both sides.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different text alignment options for typography components.',
      },
    },
  },
};

// Text Transformations
export const TextTransformations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="body1" transform="none">
        No Transform - This text has no transformation applied.
      </Typography>
      <Typography variant="body1" transform="uppercase">
        Uppercase - This text is transformed to uppercase letters.
      </Typography>
      <Typography variant="body1" transform="lowercase">
        Lowercase - This text is transformed to lowercase letters.
      </Typography>
      <Typography variant="body1" transform="capitalize">
        Capitalize - This text has the first letter of each word capitalized.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different text transformation options for typography components.',
      },
    },
  },
};

// Text Decorations
export const TextDecorations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="body1" decoration="none">
        No Decoration - This text has no decoration applied.
      </Typography>
      <Typography variant="body1" decoration="underline">
        Underlined - This text has an underline decoration.
      </Typography>
      <Typography variant="body1" decoration="line-through">
        Line Through - This text has a line-through decoration.
      </Typography>
      <Typography variant="body1" decoration="overline">
        Overline - This text has an overline decoration.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different text decoration options for typography components.',
      },
    },
  },
};

// Utility Features
export const UtilityFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="body1" truncate>
        Truncated Text - This is a very long text that will be truncated with an ellipsis when it exceeds the container width. This demonstrates the truncate functionality.
      </Typography>
      <Typography variant="body1" noWrap>
        No Wrap - This text will not wrap to the next line even if it exceeds the container width.
      </Typography>
      <Typography variant="body1" as="span">
        Custom Element - This text is rendered as a span element instead of the default div.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Utility features like truncation, no-wrap, and custom HTML elements.',
      },
    },
  },
};

// Interactive Link
export const InteractiveLink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="link" href="https://example.com">
        External Link - This link opens in the same tab
      </Typography>
      <Typography variant="link" href="https://example.com" target="_blank">
        External Link - This link opens in a new tab
      </Typography>
      <Typography variant="link" href="#section">
        Internal Link - This is a link to a section on the same page
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive link variants with proper accessibility and hover effects.',
      },
    },
  },
};

// Code Example
export const CodeExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Typography variant="body1">
        Here is some regular text with an inline <Typography variant="code">code snippet</Typography> embedded within it.
      </Typography>
      <Typography variant="body1">
        You can also use it for <Typography variant="code">variable names</Typography> or <Typography variant="code">function calls</Typography>.
      </Typography>
      <Typography variant="code" as="pre" style={{ padding: '16px', borderRadius: '6px' }}>
{`function greetUser(name) {
  return \`Hello, \${name}!\`;
}`}
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Code typography variant for displaying code snippets and technical content.',
      },
    },
  },
};
