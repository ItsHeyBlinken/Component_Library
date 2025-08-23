import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Loading } from './Loading';
import { Button } from '../../Common/Button/Button';

const meta: Meta<typeof Loading> = {
  title: 'Components/Feedback/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A loading component that provides various loading animations and states. Features include multiple animation variants, sizes, progress indicators, and full-screen overlays.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the loading spinner',
    },
    variant: {
      control: { type: 'select' },
      options: ['spinner', 'dots', 'bars', 'pulse', 'ripple', 'ring'],
      description: 'The variant/type of loading animation',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The color variant of the loading component',
    },
    customColor: {
      control: { type: 'color' },
      description: 'Custom color for the loading component',
    },
    showText: {
      control: { type: 'boolean' },
      description: 'Whether to show loading text',
    },
    text: {
      control: { type: 'text' },
      description: 'Custom loading text',
    },
    fullScreen: {
      control: { type: 'boolean' },
      description: 'Whether the loading component is full screen',
    },
    inline: {
      control: { type: 'boolean' },
      description: 'Whether the loading component is inline',
    },
    backdrop: {
      control: { type: 'boolean' },
      description: 'Whether the loading component has a backdrop',
    },
    backdropColor: {
      control: { type: 'color' },
      description: 'Custom backdrop color',
    },
    visible: {
      control: { type: 'boolean' },
      description: 'Whether the loading component is visible',
    },
    speed: {
      control: { type: 'number' },
      description: 'Animation speed in milliseconds',
    },
    showProgress: {
      control: { type: 'boolean' },
      description: 'Whether to show a progress indicator',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Whether the loading is indeterminate',
    },
    thickness: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'Custom spinner thickness',
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Whether to show a label',
    },
    label: {
      control: { type: 'text' },
      description: 'Custom label text',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Whether the loading component is centered',
    },
    showCancel: {
      control: { type: 'boolean' },
      description: 'Whether to show a cancel button',
    },
    cancelText: {
      control: { type: 'text' },
      description: 'Cancel button text',
    },
    onCancel: {
      action: 'cancelled',
      description: 'Callback when cancel button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Loading
export const Basic: Story = {
  render: () => (
    <Loading />
  ),
};

// Different Variants
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Loading variant="spinner" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Spinner</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading variant="dots" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Dots</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading variant="bars" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Bars</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading variant="pulse" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Pulse</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading variant="ripple" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Ripple</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading variant="ring" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Ring</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different loading animation variants available.',
      },
    },
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Loading size="xs" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Extra Small</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading size="sm" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Small</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading size="md" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Medium (Default)</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading size="lg" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Large</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading size="xl" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Extra Large</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different loading sizes available.',
      },
    },
  },
};

// Different Colors
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Loading color="primary" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Primary</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading color="secondary" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Secondary</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading color="success" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Success</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading color="error" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Error</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading color="warning" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Warning</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading color="info" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Info</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different color variants available.',
      },
    },
  },
};

// With Text
export const WithText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Loading showText={true} text="Loading..." />
      <Loading showText={true} text="Please wait..." />
      <Loading showText={true} text="Processing request..." />
      <Loading showText={true} text="Uploading files..." />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading components with text labels.',
      },
    },
  },
};

// With Progress
export const WithProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <Loading 
          showProgress={true} 
          progress={progress} 
          showText={true} 
          text={`Loading... ${progress}%`}
        />
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '8px' }}>Indeterminate Progress:</div>
          <Loading 
            showProgress={true} 
            indeterminate={true}
            showText={true} 
            text="Processing..."
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading components with progress indicators.',
      },
    },
  },
};

// Custom Colors
export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Loading customColor="#e91e63" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Pink</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading customColor="#9c27b0" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Purple</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading customColor="#ff9800" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Orange</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading customColor="#795548" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Brown</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading components with custom colors.',
      },
    },
  },
};

// Different Speeds
export const DifferentSpeeds: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Loading speed={500} size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Fast (500ms)</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading speed={1000} size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Normal (1000ms)</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading speed={2000} size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Slow (2000ms)</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading speed={3000} size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Very Slow (3000ms)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading components with different animation speeds.',
      },
    },
  },
};

// Different Thickness
export const DifferentThickness: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Loading variant="spinner" thickness={1} size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Thin (1px)</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading variant="spinner" thickness={3} size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Normal (3px)</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading variant="spinner" thickness={6} size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Thick (6px)</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loading variant="spinner" thickness={10} size="lg" />
        <div style={{ marginTop: '8px', fontSize: '14px' }}>Very Thick (10px)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Spinner variants with different thickness values.',
      },
    },
  },
};

// Inline Loading
export const InlineLoading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Loading inline={true} size="xs" />
        <span>Loading data...</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Loading inline={true} size="sm" />
        <span>Processing request...</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Loading inline={true} size="md" />
        <span>Uploading files...</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Loading inline={true} size="lg" />
        <span>Initializing application...</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inline loading components that fit within text lines.',
      },
    },
  },
};

// With Labels
export const WithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Loading showLabel={true} label="Connecting to server..." />
      <Loading showLabel={true} label="Downloading updates..." />
      <Loading showLabel={true} label="Installing packages..." />
      <Loading showLabel={true} label="Building project..." />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading components with custom labels.',
      },
    },
  },
};

// With Cancel Button
export const WithCancelButton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Loading 
        showCancel={true} 
        cancelText="Cancel Upload"
        onCancel={() => alert('Upload cancelled!')}
        showText={true}
        text="Uploading large file..."
      />
      
      <Loading 
        showCancel={true} 
        cancelText="Stop Processing"
        onCancel={() => alert('Processing stopped!')}
        showText={true}
        text="Processing data..."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading components with cancel buttons.',
      },
    },
  },
};

// Full Screen Loading
export const FullScreenLoading: Story = {
  render: () => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    
    return (
      <div style={{ textAlign: 'center' }}>
        <Button onClick={() => setShowFullScreen(true)}>
          Show Full Screen Loading
        </Button>
        
        {showFullScreen && (
          <Loading 
            fullScreen={true}
            showText={true}
            text="Loading application..."
            showCancel={true}
            cancelText="Skip Loading"
            onCancel={() => setShowFullScreen(false)}
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Full screen loading overlay with cancel option.',
      },
    },
  },
};

// Backdrop Loading
export const BackdropLoading: Story = {
  render: () => {
    const [showBackdrop, setShowBackdrop] = useState(false);
    
    return (
      <div style={{ position: 'relative', minHeight: '200px', border: '1px solid #ddd', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Button onClick={() => setShowBackdrop(true)}>
            Show Backdrop Loading
          </Button>
        </div>
        
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <p>This is the content area. When backdrop loading is active, it will be covered.</p>
          <p>Click the button above to see the backdrop loading effect.</p>
        </div>
        
        {showBackdrop && (
          <Loading 
            backdrop={true}
            backdropColor="rgba(0, 0, 0, 0.7)"
            showText={true}
            text="Processing in background..."
            showCancel={true}
            cancelText="Hide"
            onCancel={() => setShowBackdrop(false)}
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading component with backdrop overlay.',
      },
    },
  },
};

// Multiple Loading States
export const MultipleLoadingStates: Story = {
  render: () => {
    const [loadingStates, setLoadingStates] = useState({
      spinner: true,
      dots: true,
      bars: true,
      pulse: true,
    });
    
    const toggleLoading = (key: keyof typeof loadingStates) => {
      setLoadingStates(prev => ({ ...prev, [key]: !prev[key] }));
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button onClick={() => toggleLoading('spinner')}>
            {loadingStates.spinner ? 'Hide' : 'Show'} Spinner
          </Button>
          <Button onClick={() => toggleLoading('dots')}>
            {loadingStates.dots ? 'Hide' : 'Show'} Dots
          </Button>
          <Button onClick={() => toggleLoading('bars')}>
            {loadingStates.bars ? 'Hide' : 'Show'} Bars
          </Button>
          <Button onClick={() => toggleLoading('pulse')}>
            {loadingStates.pulse ? 'Hide' : 'Show'} Pulse
          </Button>
        </div>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', justifyContent: 'center' }}>
          {loadingStates.spinner && (
            <div style={{ textAlign: 'center' }}>
              <Loading variant="spinner" size="lg" />
              <div style={{ marginTop: '8px', fontSize: '14px' }}>Spinner</div>
            </div>
          )}
          
          {loadingStates.dots && (
            <div style={{ textAlign: 'center' }}>
              <Loading variant="dots" size="lg" />
              <div style={{ marginTop: '8px', fontSize: '14px' }}>Dots</div>
            </div>
          )}
          
          {loadingStates.bars && (
            <div style={{ textAlign: 'center' }}>
              <Loading variant="bars" size="lg" />
              <div style={{ marginTop: '8px', fontSize: '14px' }}>Bars</div>
            </div>
          )}
          
          {loadingStates.pulse && (
            <div style={{ textAlign: 'center' }}>
              <Loading variant="pulse" size="lg" />
              <div style={{ marginTop: '8px', fontSize: '14px' }}>Pulse</div>
            </div>
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of multiple loading states.',
      },
    },
  },
};
