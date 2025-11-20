import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Common/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    mode: {
      control: { type: 'select' },
      options: ['date', 'datetime', 'time', 'range'],
    },
    format: {
      control: { type: 'select' },
      options: ['YYYY-MM-DD', 'MM/DD/YYYY', 'DD/MM/YYYY', 'DD-MM-YYYY'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as Date | null)}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select a date...',
  },
};

export const WithDefaultValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as Date | null)}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select a date...',
  },
};

export const WithTime: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as Date | null)}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select date and time...',
    showTime: true,
  },
};

export const DateRange: Story = {
  render: (args) => {
    const [value, setValue] = useState<[Date, Date] | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as [Date, Date] | null)}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select date range...',
    mode: 'range',
  },
};

export const WithMinMax: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null);
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 7);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as Date | null)}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select a date (within range)...',
  },
};

export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as Date | null)}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select a date...',
    clearable: true,
  },
};

export const DifferentFormats: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as Date | null)}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select a date...',
    format: 'MM/DD/YYYY',
  },
};

export const SmallSize: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as Date | null)}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select a date...',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={(val) => setValue(val as Date | null)}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select a date...',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    value: new Date(),
    disabled: true,
    placeholder: 'Select a date...',
  },
};

