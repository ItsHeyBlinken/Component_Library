import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive pagination component that supports various display options, page size selection, quick jumping, and customizable styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'The current active page',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'The total number of pages',
    },
    totalItems: {
      control: { type: 'number', min: 0 },
      description: 'The total number of items',
    },
    pageSize: {
      control: { type: 'number', min: 1 },
      description: 'The number of items per page',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The variant/style of the pagination',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the pagination',
    },
    showSizeChanger: {
      control: { type: 'boolean' },
      description: 'Whether to show page size selector',
    },
    showQuickJumper: {
      control: { type: 'boolean' },
      description: 'Whether to show quick jump input',
    },
    showTotal: {
      control: { type: 'boolean' },
      description: 'Whether to show total items info',
    },
    showPrevNext: {
      control: { type: 'boolean' },
      description: 'Whether to show previous/next buttons',
    },
    showFirstLast: {
      control: { type: 'boolean' },
      description: 'Whether to show first/last buttons',
    },
    showPageNumbers: {
      control: { type: 'boolean' },
      description: 'Whether to show page numbers',
    },
    maxPageNumbers: {
      control: { type: 'number', min: 3, max: 15 },
      description: 'Maximum number of page numbers to show',
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Whether the pagination has borders',
    },
    shadowed: {
      control: { type: 'boolean' },
      description: 'Whether the pagination has shadows',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the pagination has rounded corners',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the pagination is full width',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Whether the pagination is centered',
    },
    compact: {
      control: { type: 'boolean' },
      description: 'Whether the pagination is compact',
    },
    simple: {
      control: { type: 'boolean' },
      description: 'Whether to use simple pagination style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Pagination Component
const InteractivePagination = ({ currentPage, totalPages, ...props }: any) => {
  const [page, setPage] = useState(currentPage);
  
  return (
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
      {...props}
    />
  );
};

// Basic Pagination
export const Basic: Story = {
  render: () => (
    <InteractivePagination currentPage={1} totalPages={10} />
  ),
};

// Pagination with Total Items
export const WithTotalItems: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={1} 
      totalPages={25} 
      totalItems={250}
      showTotal={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing total items count and current range.',
      },
    },
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div>
        <h4>Extra Small</h4>
        <InteractivePagination currentPage={1} totalPages={10} size="xs" bordered={true} />
      </div>
      
      <div>
        <h4>Small</h4>
        <InteractivePagination currentPage={1} totalPages={10} size="sm" bordered={true} />
      </div>
      
      <div>
        <h4>Medium (Default)</h4>
        <InteractivePagination currentPage={1} totalPages={10} size="md" bordered={true} />
      </div>
      
      <div>
        <h4>Large</h4>
        <InteractivePagination currentPage={1} totalPages={10} size="lg" bordered={true} />
      </div>
      
      <div>
        <h4>Extra Large</h4>
        <InteractivePagination currentPage={1} totalPages={10} size="xl" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination components with different sizes.',
      },
    },
  },
};

// Different Variants
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div>
        <h4>Primary</h4>
        <InteractivePagination currentPage={1} totalPages={10} variant="primary" bordered={true} />
      </div>
      
      <div>
        <h4>Secondary</h4>
        <InteractivePagination currentPage={1} totalPages={10} variant="secondary" bordered={true} />
      </div>
      
      <div>
        <h4>Success</h4>
        <InteractivePagination currentPage={1} totalPages={10} variant="success" bordered={true} />
      </div>
      
      <div>
        <h4>Warning</h4>
        <InteractivePagination currentPage={1} totalPages={10} variant="warning" bordered={true} />
      </div>
      
      <div>
        <h4>Error</h4>
        <InteractivePagination currentPage={1} totalPages={10} variant="error" bordered={true} />
      </div>
      
      <div>
        <h4>Info</h4>
        <InteractivePagination currentPage={1} totalPages={10} variant="info" bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination components with different color variants.',
      },
    },
  },
};

// With Page Size Selector
export const WithPageSizeSelector: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={1} 
      totalPages={25} 
      totalItems={250}
      pageSize={10}
      showSizeChanger={true}
      showTotal={true}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination with page size selector and total items display.',
      },
    },
  },
};

// With Quick Jumper
export const WithQuickJumper: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={1} 
      totalPages={50} 
      showQuickJumper={true}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination with quick jump input for direct page navigation.',
      },
    },
  },
};

// With First/Last Buttons
export const WithFirstLastButtons: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={5} 
      totalPages={20} 
      showFirstLast={true}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination with first and last page navigation buttons.',
      },
    },
  },
};

// Compact Pagination
export const CompactPagination: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={1} 
      totalPages={15} 
      compact={true}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact pagination with smaller spacing and buttons.',
      },
    },
  },
};

// Simple Pagination
export const SimplePagination: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={1} 
      totalPages={20} 
      simple={true}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple pagination showing only current page and total pages.',
      },
    },
  },
};

// Full Width Pagination
export const FullWidthPagination: Story = {
  render: () => (
    <div style={{ width: '800px' }}>
      <InteractivePagination 
        currentPage={1} 
        totalPages={15} 
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
        story: 'Full width pagination that spans the container.',
      },
    },
  },
};

// Centered Pagination
export const CenteredPagination: Story = {
  render: () => (
    <div style={{ width: '800px' }}>
      <InteractivePagination 
        currentPage={1} 
        totalPages={15} 
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
        story: 'Centered pagination with equal spacing.',
      },
    },
  },
};

// Many Pages with Ellipsis
export const ManyPagesWithEllipsis: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={50} 
      totalPages={100} 
      maxPageNumbers={7}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many pages showing ellipsis for better navigation.',
      },
    },
  },
};

// Custom Max Page Numbers
export const CustomMaxPageNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div>
        <h4>Max 5 Pages</h4>
        <InteractivePagination currentPage={10} totalPages={50} maxPageNumbers={5} bordered={true} />
      </div>
      
      <div>
        <h4>Max 9 Pages</h4>
        <InteractivePagination currentPage={10} totalPages={50} maxPageNumbers={9} bordered={true} />
      </div>
      
      <div>
        <h4>Max 11 Pages</h4>
        <InteractivePagination currentPage={10} totalPages={50} maxPageNumbers={11} bordered={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination with different maximum page number displays.',
      },
    },
  },
};

// Disabled Pagination
export const DisabledPagination: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={1} 
      totalPages={10} 
      disabled={true}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled pagination that cannot be interacted with.',
      },
    },
  },
};

// Custom Total Function
export const CustomTotalFunction: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={1} 
      totalPages={25} 
      totalItems={250}
      pageSize={10}
      showTotal={(total, [start, end]) => `${start}-${end} of ${total} results`}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination with custom total display function.',
      },
    },
  },
};

// Complex Pagination Example
export const ComplexPaginationExample: Story = {
  render: () => (
    <InteractivePagination 
      currentPage={7} 
      totalPages={50} 
      totalItems={500}
      pageSize={10}
      showSizeChanger={true}
      showQuickJumper={true}
      showTotal={true}
      showFirstLast={true}
      maxPageNumbers={9}
      bordered={true}
      shadowed={true}
      rounded={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complex pagination with all features enabled.',
      },
    },
  },
};
