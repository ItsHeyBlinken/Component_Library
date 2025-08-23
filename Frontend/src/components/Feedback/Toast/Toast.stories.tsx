import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from './Toast';
import { Button } from '../../Common/Button/Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toast notification component that provides user feedback and alerts. Features include auto-dismiss, multiple positions, variants, and accessibility support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: { type: 'text' },
      description: 'The message content to display',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The type/variant of the toast',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the toast',
    },
    isVisible: {
      control: { type: 'boolean' },
      description: 'Whether the toast is visible',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback when toast is dismissed',
    },
    autoDismiss: {
      control: { type: 'number' },
      description: 'Auto-dismiss timeout in milliseconds (0 = no auto-dismiss)',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Whether to show a close button',
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether the toast can be dismissed by clicking',
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'],
      description: 'Position of the toast',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Custom background color',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Custom text color',
    },
    borderColor: {
      control: { type: 'color' },
      description: 'Custom border color',
    },
    showProgress: {
      control: { type: 'boolean' },
      description: 'Whether to show a progress bar for auto-dismiss',
    },
    animationDuration: {
      control: { type: 'number' },
      description: 'Animation duration in milliseconds',
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Maximum width of the toast',
    },
    pauseOnHover: {
      control: { type: 'boolean' },
      description: 'Whether to pause auto-dismiss on hover',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for stories that need state management
const ToastWrapper = ({ children, ...props }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Show Toast</Button>
      {React.cloneElement(children, {
        ...props,
        isVisible,
        onDismiss: () => setIsVisible(false),
      })}
    </>
  );
};

// Basic Toast
export const Basic: Story = {
  render: () => (
    <ToastWrapper>
      <Toast message="This is a basic toast notification" />
    </ToastWrapper>
  ),
};

// Different Variants
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ToastWrapper>
        <Toast 
          message="Success! Your action was completed successfully." 
          variant="success"
          position="top-left"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Warning: Please review your input before proceeding." 
          variant="warning"
          position="top-center"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Error: Something went wrong. Please try again." 
          variant="error"
          position="top-right"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Info: Here's some helpful information for you." 
          variant="info"
          position="bottom-left"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Secondary: This is a secondary notification." 
          variant="secondary"
          position="bottom-center"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Primary: This is the default primary notification." 
          variant="primary"
          position="bottom-right"
        />
      </ToastWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different toast variants with various positions.',
      },
    },
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ToastWrapper>
        <Toast 
          message="Extra small toast" 
          size="xs"
          position="top-left"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Small toast" 
          size="sm"
          position="top-center"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Medium toast (default)" 
          size="md"
          position="top-right"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Large toast" 
          size="lg"
          position="bottom-left"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Extra large toast" 
          size="xl"
          position="bottom-center"
        />
      </ToastWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different toast sizes available.',
      },
    },
  },
};

// Auto-dismiss with Progress
export const AutoDismissWithProgress: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ToastWrapper>
        <Toast 
          message="This toast will auto-dismiss in 3 seconds with progress bar" 
          autoDismiss={3000}
          showProgress={true}
          position="top-left"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="This toast will auto-dismiss in 5 seconds with progress bar" 
          autoDismiss={5000}
          showProgress={true}
          position="top-center"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="This toast will auto-dismiss in 10 seconds with progress bar" 
          autoDismiss={10000}
          showProgress={true}
          position="top-right"
        />
      </ToastWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toasts with auto-dismiss functionality and progress bars.',
      },
    },
  },
};

// No Auto-dismiss
export const NoAutoDismiss: Story = {
  render: () => (
    <ToastWrapper>
      <Toast 
        message="This toast will not auto-dismiss. You must close it manually." 
        autoDismiss={0}
        showProgress={false}
        position="top-center"
      />
    </ToastWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast that requires manual dismissal.',
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ToastWrapper>
        <Toast 
          message="Custom styled toast with purple theme" 
          backgroundColor="#f3e5f5"
          textColor="#7b1fa2"
          borderColor="#9c27b0"
          position="top-left"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Custom styled toast with blue theme" 
          backgroundColor="#e3f2fd"
          textColor="#1976d2"
          borderColor="#2196f3"
          position="top-center"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Custom styled toast with green theme" 
          backgroundColor="#e8f5e8"
          textColor="#2e7d32"
          borderColor="#4caf50"
          position="top-right"
        />
      </ToastWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toasts with custom colors and styling.',
      },
    },
  },
};

// Without Close Button
export const WithoutCloseButton: Story = {
  render: () => (
    <ToastWrapper>
      <Toast 
        message="This toast has no close button and will auto-dismiss in 5 seconds" 
        showCloseButton={false}
        autoDismiss={5000}
        position="top-center"
      />
    </ToastWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast without a close button.',
      },
    },
  },
};

// Non-dismissible Toast
export const NonDismissibleToast: Story = {
  render: () => (
    <ToastWrapper>
      <Toast 
        message="This toast cannot be dismissed by clicking. It will auto-dismiss in 8 seconds." 
        dismissible={false}
        autoDismiss={8000}
        position="top-center"
      />
    </ToastWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast that cannot be dismissed by clicking.',
      },
    },
  },
};

// Custom Animation Duration
export const CustomAnimationDuration: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ToastWrapper>
        <Toast 
          message="Fast animation (100ms)" 
          animationDuration={100}
          position="top-left"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Slow animation (800ms)" 
          animationDuration={800}
          position="top-center"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="Very slow animation (1500ms)" 
          animationDuration={1500}
          position="top-right"
        />
      </ToastWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toasts with different animation durations.',
      },
    },
  },
};

// Custom Max Width
export const CustomMaxWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ToastWrapper>
        <Toast 
          message="This toast has a narrow max width of 200px" 
          maxWidth="200px"
          position="top-left"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="This toast has a wide max width of 600px" 
          maxWidth="600px"
          position="top-center"
        />
      </ToastWrapper>
      
      <ToastWrapper>
        <Toast 
          message="This toast has a very wide max width of 800px" 
          maxWidth="800px"
          position="top-right"
        />
      </ToastWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toasts with different maximum widths.',
      },
    },
  },
};

// Pause on Hover
export const PauseOnHover: Story = {
  render: () => (
    <ToastWrapper>
      <Toast 
        message="Hover over this toast to pause the auto-dismiss timer. Move your mouse away to resume." 
        autoDismiss={8000}
        pauseOnHover={true}
        showProgress={true}
        position="top-center"
      />
    </ToastWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast that pauses auto-dismiss when hovered over.',
      },
    },
  },
};

// Long Message
export const LongMessage: Story = {
  render: () => (
    <ToastWrapper>
      <Toast 
        message="This is a very long toast message that demonstrates how the component handles longer text content. The toast will automatically wrap the text and maintain its layout while ensuring readability for users." 
        position="top-center"
        maxWidth="500px"
      />
    </ToastWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast with a long message to demonstrate text wrapping.',
      },
    },
  },
};

// Multiple Toasts
export const MultipleToasts: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{ id: number; message: string; variant: any; position: any }>>([]);
    
    const addToast = (message: string, variant: any, position: any) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, variant, position }]);
      
      // Auto-remove after 5 seconds
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 5000);
    };
    
    const removeToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button onClick={() => addToast('Success message!', 'success', 'top-left')}>
            Add Success
          </Button>
          <Button onClick={() => addToast('Warning message!', 'warning', 'top-center')}>
            Add Warning
          </Button>
          <Button onClick={() => addToast('Error message!', 'error', 'top-right')}>
            Add Error
          </Button>
          <Button onClick={() => addToast('Info message!', 'info', 'bottom-left')}>
            Add Info
          </Button>
        </div>
        
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            position={toast.position}
            isVisible={true}
            onDismiss={() => removeToast(toast.id)}
            autoDismiss={5000}
            showProgress={true}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple toasts displayed simultaneously with different variants and positions.',
      },
    },
  },
};
