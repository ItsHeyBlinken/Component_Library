import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../../Common/Button/Button';
import { Typography } from '../../Common/Typography/Typography';
import { Card } from '../../Common/Card/Card';

const meta: Meta<typeof Modal> = {
  title: 'Components/Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal component that provides overlay dialogs for user interaction and content display. Features include focus management, keyboard navigation, and comprehensive accessibility support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Whether the modal is open',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when modal is closed',
    },
    title: {
      control: { type: 'text' },
      description: 'Modal title',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Modal subtitle',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Size of the modal',
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
      description: 'Whether clicking overlay closes modal',
    },
    closeOnEscape: {
      control: { type: 'boolean' },
      description: 'Whether pressing Escape closes modal',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Whether to show close button',
    },
    preventScroll: {
      control: { type: 'boolean' },
      description: 'Whether to prevent body scroll',
    },
    overlayColor: {
      control: { type: 'color' },
      description: 'Custom overlay color',
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Overlay opacity',
    },
    zIndex: {
      control: { type: 'number' },
      description: 'Z-index for modal layering',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for stories that need state management
const ModalWrapper = ({ children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {React.cloneElement(children, {
        ...props,
        isOpen,
        onClose: () => setIsOpen(false),
      })}
    </>
  );
};

// Basic Modal
export const Basic: Story = {
  render: () => (
    <ModalWrapper>
      <Modal title="Basic Modal" subtitle="This is a basic modal example">
        <Typography variant="body1">
          This is the content of the modal. You can put any content here including text, forms, images, or other components.
        </Typography>
        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <Button variant="secondary" style={{ marginRight: '12px' }}>Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </Modal>
    </ModalWrapper>
  ),
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ModalWrapper>
        <Modal size="xs" title="Extra Small Modal" subtitle="320px max width">
          <Typography variant="body2">
            This is an extra small modal perfect for simple confirmations or alerts.
          </Typography>
        </Modal>
      </ModalWrapper>
      
      <ModalWrapper>
        <Modal size="sm" title="Small Modal" subtitle="480px max width">
          <Typography variant="body1">
            This is a small modal suitable for simple forms or content display.
          </Typography>
        </Modal>
      </ModalWrapper>
      
      <ModalWrapper>
        <Modal size="md" title="Medium Modal" subtitle="640px max width (default)">
          <Typography variant="body1">
            This is a medium modal, the default size. Perfect for most use cases including forms, content previews, and detailed information.
          </Typography>
        </Modal>
      </ModalWrapper>
      
      <ModalWrapper>
        <Modal size="lg" title="Large Modal" subtitle="800px max width">
          <Typography variant="body1">
            This is a large modal great for complex forms, detailed content, or when you need more space for your content.
          </Typography>
        </Modal>
      </ModalWrapper>
      
      <ModalWrapper>
        <Modal size="xl" title="Extra Large Modal" subtitle="1024px max width">
          <Typography variant="body1">
            This is an extra large modal perfect for dashboards, complex interfaces, or when you need maximum space for your content.
          </Typography>
        </Modal>
      </ModalWrapper>
      
      <ModalWrapper>
        <Modal size="full" title="Full Width Modal" subtitle="95% viewport width">
          <Typography variant="body1">
            This is a full width modal that takes up most of the viewport. Great for immersive experiences or when you need maximum space.
          </Typography>
        </Modal>
      </ModalWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different modal sizes available for various use cases.',
      },
    },
  },
};

// Confirmation Modal
export const ConfirmationModal: Story = {
  render: () => (
    <ModalWrapper>
      <Modal 
        title="Confirm Action" 
        subtitle="Are you sure you want to proceed?"
        size="sm"
      >
        <Typography variant="body1" style={{ marginBottom: '24px' }}>
          This action cannot be undone. Please confirm that you want to delete this item permanently.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <Button variant="secondary">Cancel</Button>
          <Button variant="error">Delete</Button>
        </div>
      </Modal>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A confirmation modal example with action buttons.',
      },
    },
  },
};

// Form Modal
export const FormModal: Story = {
  render: () => (
    <ModalWrapper>
      <Modal 
        title="User Profile" 
        subtitle="Update your profile information"
        size="lg"
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
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
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Email Address
            </label>
            <input
              id="email"
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
            <label htmlFor="bio" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Bio
            </label>
            <textarea
              id="bio"
              rows={4}
              placeholder="Tell us about yourself"
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
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </form>
      </Modal>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A form modal example showing how to use the modal for data entry.',
      },
    },
  },
};

// Content Preview Modal
export const ContentPreviewModal: Story = {
  render: () => (
    <ModalWrapper>
      <Modal 
        title="Article Preview" 
        subtitle="Preview your article before publishing"
        size="xl"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div style={{ 
              width: '200px', 
              height: '120px', 
              backgroundColor: '#f0f0f0', 
              borderRadius: '8px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              color: '#666'
            }}>
              🖼️
            </div>
          </div>
          
          <Typography variant="h3" style={{ marginBottom: '16px' }}>
            The Future of Web Development
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            Web development has evolved significantly over the past decade. From simple HTML pages to complex single-page applications, 
            the landscape continues to change rapidly. Modern frameworks and tools have made it easier than ever to build 
            sophisticated web applications.
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            The rise of component-based architecture, improved build tools, and better developer experience have all contributed 
            to this evolution. As we look to the future, we can expect even more innovation in areas like performance, 
            accessibility, and user experience.
          </Typography>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ 
                backgroundColor: '#e3f2fd', 
                color: '#1976d2', 
                padding: '4px 8px', 
                borderRadius: '12px', 
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Technology
              </span>
              <span style={{ 
                backgroundColor: '#f3e5f5', 
                color: '#7b1fa2', 
                padding: '4px 8px', 
                borderRadius: '12px', 
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Web Development
              </span>
            </div>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="secondary">Edit</Button>
              <Button variant="primary">Publish</Button>
            </div>
          </div>
        </div>
      </Modal>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A content preview modal example showing how to display rich content.',
      },
    },
  },
};

// Custom Overlay Modal
export const CustomOverlayModal: Story = {
  render: () => (
    <ModalWrapper>
      <Modal 
        title="Custom Overlay" 
        subtitle="Modal with custom overlay styling"
        overlayColor="rgba(25, 118, 210, 0.8)"
        overlayOpacity={0.9}
        zIndex={2000}
      >
        <Typography variant="body1">
          This modal has a custom blue overlay with increased opacity and higher z-index.
        </Typography>
      </Modal>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal with custom overlay color, opacity, and z-index.',
      },
    },
  },
};

// Modal Without Close Button
export const ModalWithoutCloseButton: Story = {
  render: () => (
    <ModalWrapper>
      <Modal 
        title="Important Notice" 
        subtitle="This modal cannot be closed by the user"
        showCloseButton={false}
        closeOnOverlayClick={false}
        closeOnEscape={false}
      >
        <Typography variant="body1" style={{ marginBottom: '24px' }}>
          This is an important notice that requires user acknowledgment. The modal cannot be closed 
          by clicking the overlay, pressing Escape, or using a close button.
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Button variant="primary">I Understand</Button>
        </div>
      </Modal>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal that cannot be closed by the user, requiring explicit action.',
      },
    },
  },
};

// Modal with Long Content
export const ModalWithLongContent: Story = {
  render: () => (
    <ModalWrapper>
      <Modal 
        title="Terms of Service" 
        subtitle="Please read our terms and conditions"
        size="lg"
      >
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            <strong>1. Acceptance of Terms</strong>
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '16px' }}>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            <strong>2. Use License</strong>
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '16px' }}>
            Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, 
            non-commercial transitory viewing only.
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            <strong>3. Disclaimer</strong>
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '16px' }}>
            The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, 
            and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions 
            of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other 
            violation of rights.
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            <strong>4. Limitations</strong>
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '16px' }}>
            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss 
            of data or profit, or due to business interruption) arising out of the use or inability to use the materials 
            on this website.
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            <strong>5. Revisions and Errata</strong>
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '16px' }}>
            The materials appearing on this website could include technical, typographical, or photographic errors. 
            We do not warrant that any of the materials on this website are accurate, complete or current.
          </Typography>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
          <Typography variant="body2" color="secondary">
            By continuing, you agree to these terms.
          </Typography>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="secondary">Decline</Button>
            <Button variant="primary">Accept</Button>
          </div>
        </div>
      </Modal>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal with long scrollable content demonstrating the scrollable content area.',
      },
    },
  },
};

// Modal with Cards
export const ModalWithCards: Story = {
  render: () => (
    <ModalWrapper>
      <Modal 
        title="Choose Your Plan" 
        subtitle="Select the plan that best fits your needs"
        size="xl"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Card title="Basic Plan" subtitle="$9/month" variant="secondary">
            <Typography variant="body2" style={{ marginBottom: '16px' }}>
              Perfect for individuals and small projects.
            </Typography>
            <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
              <li>Up to 5 projects</li>
              <li>Basic support</li>
              <li>Standard features</li>
            </ul>
            <Button variant="primary" fullWidth>Select Basic</Button>
          </Card>
          
          <Card title="Pro Plan" subtitle="$19/month" variant="primary">
            <Typography variant="body2" style={{ marginBottom: '16px' }}>
              Ideal for growing teams and businesses.
            </Typography>
            <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
              <li>Up to 25 projects</li>
              <li>Priority support</li>
              <li>Advanced features</li>
              <li>Team collaboration</li>
            </ul>
            <Button variant="primary" fullWidth>Select Pro</Button>
          </Card>
          
          <Card title="Enterprise Plan" subtitle="$49/month" variant="success">
            <Typography variant="body2" style={{ marginBottom: '16px' }}>
              For large organizations with complex needs.
            </Typography>
            <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
              <li>Unlimited projects</li>
              <li>24/7 support</li>
              <li>All features</li>
              <li>Custom integrations</li>
              <li>Dedicated account manager</li>
            </ul>
            <Button variant="primary" fullWidth>Select Enterprise</Button>
          </Card>
        </div>
      </Modal>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal containing multiple cards for plan selection.',
      },
    },
  },
};
