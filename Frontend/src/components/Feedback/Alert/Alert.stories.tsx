import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Alert } from './Alert';
import { Button } from '../Common/Button/Button';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An alert component that provides user notifications, warnings, and informational messages. Features include multiple variants, sizes, styling options, and interactive capabilities.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title/heading of the alert',
    },
    message: {
      control: { type: 'text' },
      description: 'The main message content',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The type/variant of the alert',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the alert',
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether the alert can be dismissed',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback when alert is dismissed',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Whether to show a close button',
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Whether the alert has a border',
    },
    shadowed: {
      control: { type: 'boolean' },
      description: 'Whether the alert has a shadow',
    },
    filled: {
      control: { type: 'boolean' },
      description: 'Whether the alert is filled/colored',
    },
    outlined: {
      control: { type: 'boolean' },
      description: 'Whether the alert is outlined',
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
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the alert has rounded corners',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the alert is full width',
    },
    subtle: {
      control: { type: 'boolean' },
      description: 'Whether the alert has a subtle appearance',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the alert is interactive (clickable)',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when alert is clicked (if interactive)',
    },
    showAction: {
      control: { type: 'boolean' },
      description: 'Whether to show an action button',
    },
    actionText: {
      control: { type: 'text' },
      description: 'Action button text',
    },
    onAction: {
      action: 'action clicked',
      description: 'Callback when action button is clicked',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the alert is loading',
    },
    loadingText: {
      control: { type: 'text' },
      description: 'Loading text to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Alert
export const Basic: Story = {
  render: () => (
    <Alert message="This is a basic alert message" />
  ),
};

// Different Variants
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Success Alert"
        message="Your action was completed successfully!" 
        variant="success"
      />
      
      <Alert 
        title="Warning Alert"
        message="Please review your input before proceeding." 
        variant="warning"
      />
      
      <Alert 
        title="Error Alert"
        message="Something went wrong. Please try again." 
        variant="error"
      />
      
      <Alert 
        title="Info Alert"
        message="Here's some helpful information for you." 
        variant="info"
      />
      
      <Alert 
        title="Secondary Alert"
        message="This is a secondary notification." 
        variant="secondary"
      />
      
      <Alert 
        title="Primary Alert"
        message="This is the default primary alert." 
        variant="primary"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different alert variants with various colors and icons.',
      },
    },
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Extra Small"
        message="This is an extra small alert" 
        size="xs"
      />
      
      <Alert 
        title="Small"
        message="This is a small alert" 
        size="sm"
      />
      
      <Alert 
        title="Medium (Default)"
        message="This is a medium alert, the default size" 
        size="md"
      />
      
      <Alert 
        title="Large"
        message="This is a large alert" 
        size="lg"
      />
      
      <Alert 
        title="Extra Large"
        message="This is an extra large alert" 
        size="xl"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different alert sizes available.',
      },
    },
  },
};

// Dismissible Alerts
export const DismissibleAlerts: Story = {
  render: () => {
    const [alerts, setAlerts] = useState({
      success: true,
      warning: true,
      error: true,
      info: true,
    });
    
    const dismissAlert = (key: keyof typeof alerts) => {
      setAlerts(prev => ({ ...prev, [key]: false }));
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {alerts.success && (
          <Alert 
            title="Success Alert"
            message="This alert can be dismissed by clicking the close button." 
            variant="success"
            dismissible={true}
            onDismiss={() => dismissAlert('success')}
          />
        )}
        
        {alerts.warning && (
          <Alert 
            title="Warning Alert"
            message="This alert can also be dismissed." 
            variant="warning"
            dismissible={true}
            onDismiss={() => dismissAlert('warning')}
          />
        )}
        
        {alerts.error && (
          <Alert 
            title="Error Alert"
            message="This error alert can be dismissed too." 
            variant="error"
            dismissible={true}
            onDismiss={() => dismissAlert('error')}
          />
        )}
        
        {alerts.info && (
          <Alert 
            title="Info Alert"
            message="This info alert can be dismissed as well." 
            variant="info"
            dismissible={true}
            onDismiss={() => dismissAlert('info')}
          />
        )}
        
        {Object.values(alerts).every(visible => !visible) && (
          <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
            All alerts have been dismissed. Refresh the page to see them again.
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts that can be closed by the user.',
      },
    },
  },
};

// Styling Options
export const StylingOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Subtle Alert"
        message="This alert has a subtle appearance with light background colors." 
        variant="info"
        subtle={true}
      />
      
      <Alert 
        title="Filled Alert"
        message="This alert is filled with the variant color." 
        variant="success"
        filled={true}
      />
      
      <Alert 
        title="Outlined Alert"
        message="This alert has a thick outline border." 
        variant="warning"
        outlined={true}
      />
      
      <Alert 
        title="Shadowed Alert"
        message="This alert has a shadow effect." 
        variant="primary"
        shadowed={true}
      />
      
      <Alert 
        title="Rounded Alert"
        message="This alert has rounded corners." 
        variant="secondary"
        rounded={true}
      />
      
      <Alert 
        title="No Border Alert"
        message="This alert has no border." 
        variant="info"
        bordered={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different styling options for alerts.',
      },
    },
  },
};

// Interactive Alerts
export const InteractiveAlerts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Clickable Alert"
        message="Click this alert to trigger an action!" 
        variant="primary"
        interactive={true}
        onClick={() => alert('Alert clicked!')}
        shadowed={true}
      />
      
      <Alert 
        title="Interactive Info Alert"
        message="This alert is also clickable and will show a message." 
        variant="info"
        interactive={true}
        onClick={() => alert('Info alert clicked!')}
        shadowed={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive alerts that can be clicked.',
      },
    },
  },
};

// Alerts with Actions
export const AlertsWithActions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Action Required"
        message="Please review and approve this request." 
        variant="warning"
        showAction={true}
        actionText="Review Now"
        onAction={() => alert('Action button clicked!')}
      />
      
      <Alert 
        title="Update Available"
        message="A new version is available for download." 
        variant="info"
        showAction={true}
        actionText="Download"
        onAction={() => alert('Download started!')}
      />
      
      <Alert 
        title="Permission Request"
        message="This app needs access to your camera." 
        variant="primary"
        showAction={true}
        actionText="Allow Access"
        onAction={() => alert('Access granted!')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with action buttons for user interaction.',
      },
    },
  },
};

// Loading Alerts
export const LoadingAlerts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Processing Request"
        message="Please wait while we process your request..." 
        variant="info"
        loading={true}
        loadingText="Processing..."
      />
      
      <Alert 
        title="Uploading Files"
        message="Your files are being uploaded to the server." 
        variant="success"
        loading={true}
        loadingText="Uploading..."
      />
      
      <Alert 
        title="Saving Changes"
        message="Your changes are being saved automatically." 
        variant="primary"
        loading={true}
        loadingText="Saving..."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts that show loading states with spinners.',
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Custom Purple Alert"
        message="This alert has custom purple colors." 
        backgroundColor="#f3e5f5"
        textColor="#7b1fa2"
        borderColor="#9c27b0"
      />
      
      <Alert 
        title="Custom Blue Alert"
        message="This alert has custom blue colors." 
        backgroundColor="#e3f2fd"
        textColor="#1976d2"
        borderColor="#2196f3"
      />
      
      <Alert 
        title="Custom Green Alert"
        message="This alert has custom green colors." 
        backgroundColor="#e8f5e8"
        textColor="#2e7d32"
        borderColor="#4caf50"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with custom colors and styling.',
      },
    },
  },
};

// Full Width Alerts
export const FullWidthAlerts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Alert 
        title="Full Width Success"
        message="This alert spans the full width of its container." 
        variant="success"
        fullWidth={true}
      />
      
      <Alert 
        title="Full Width Warning"
        message="This warning alert also spans the full width." 
        variant="warning"
        fullWidth={true}
      />
      
      <Alert 
        title="Full Width Info"
        message="This info alert spans the full width as well." 
        variant="info"
        fullWidth={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full width alerts that span their container.',
      },
    },
  },
};

// Long Content Alerts
export const LongContentAlerts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Important System Update"
        message="This is a very long alert message that demonstrates how the component handles longer text content. The alert will automatically wrap the text and maintain its layout while ensuring readability for users. This is particularly useful for important notifications that require detailed explanations or instructions." 
        variant="info"
        fullWidth={true}
      />
      
      <Alert 
        title="Terms of Service Update"
        message="We have updated our terms of service to better protect your privacy and provide you with enhanced security features. These changes include improved data encryption, better privacy controls, and enhanced user rights. Please review the updated terms and accept them to continue using our services." 
        variant="warning"
        showAction={true}
        actionText="Review Terms"
        onAction={() => alert('Opening terms of service...')}
        fullWidth={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with long content to demonstrate text wrapping.',
      },
    },
  },
};

// Alert with Custom Icon
export const AlertWithCustomIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert 
        title="Custom Icon Alert"
        message="This alert uses a custom star icon instead of the default variant icon." 
        variant="primary"
        icon="⭐"
      />
      
      <Alert 
        title="Heart Icon Alert"
        message="This alert uses a heart icon for a special message." 
        variant="error"
        icon="❤️"
      />
      
      <Alert 
        title="Rocket Icon Alert"
        message="This alert uses a rocket icon for launch-related content." 
        variant="success"
        icon="🚀"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with custom icons instead of default variant icons.',
      },
    },
  },
};
