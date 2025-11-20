import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import type { SelectOption } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    multiple: {
      control: { type: 'boolean' },
    },
    searchable: {
      control: { type: 'boolean' },
    },
    clearable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions: SelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

const manyOptions: SelectOption[] = Array.from({ length: 50 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: i + 1,
}));

const groupedOptions: SelectOption[] = [
  { label: 'Apple', value: 'apple', group: 'Fruits' },
  { label: 'Banana', value: 'banana', group: 'Fruits' },
  { label: 'Orange', value: 'orange', group: 'Fruits' },
  { label: 'Carrot', value: 'carrot', group: 'Vegetables' },
  { label: 'Broccoli', value: 'broccoli', group: 'Vegetables' },
  { label: 'Spinach', value: 'spinach', group: 'Vegetables' },
  { label: 'Chicken', value: 'chicken', group: 'Meat' },
  { label: 'Beef', value: 'beef', group: 'Meat' },
  { label: 'Pork', value: 'pork', group: 'Meat' },
];

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>();
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as string | number)}
        />
      </div>
    );
  },
  args: {
    options: basicOptions,
    placeholder: 'Select an option...',
  },
};

export const WithDefaultValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>('2');
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as string | number)}
        />
      </div>
    );
  },
  args: {
    options: basicOptions,
    placeholder: 'Select an option...',
  },
};

export const Multiple: Story = {
  render: (args) => {
    const [value, setValue] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as (string | number)[])}
        />
      </div>
    );
  },
  args: {
    options: basicOptions,
    multiple: true,
    placeholder: 'Select multiple options...',
  },
};

export const Searchable: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>();
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as string | number)}
        />
      </div>
    );
  },
  args: {
    options: manyOptions,
    searchable: true,
    placeholder: 'Search and select...',
  },
};

export const SearchableMultiple: Story = {
  render: (args) => {
    const [value, setValue] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as (string | number)[])}
        />
      </div>
    );
  },
  args: {
    options: manyOptions,
    multiple: true,
    searchable: true,
    placeholder: 'Search and select multiple...',
  },
};

export const WithGroups: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>();
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as string | number)}
        />
      </div>
    );
  },
  args: {
    options: groupedOptions,
    placeholder: 'Select a food item...',
  },
};

export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>('2');
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as string | number)}
        />
      </div>
    );
  },
  args: {
    options: basicOptions,
    clearable: true,
    placeholder: 'Select an option...',
  },
};

export const Disabled: Story = {
  args: {
    options: basicOptions,
    value: '2',
    disabled: true,
    placeholder: 'Select an option...',
  },
};

export const WithDisabledOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>();
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as string | number)}
        />
      </div>
    );
  },
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4', disabled: true },
      { label: 'Option 5', value: '5' },
    ],
    placeholder: 'Select an option...',
  },
};

export const SmallSize: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>();
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as string | number)}
        />
      </div>
    );
  },
  args: {
    options: basicOptions,
    size: 'sm',
    placeholder: 'Select an option...',
  },
};

export const LargeSize: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>();
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          value={value}
          onChange={(val) => setValue(val as string | number)}
        />
      </div>
    );
  },
  args: {
    options: basicOptions,
    size: 'lg',
    placeholder: 'Select an option...',
  },
};

export const Loading: Story = {
  args: {
    options: [],
    loading: true,
    placeholder: 'Loading options...',
  },
};

export const Empty: Story = {
  args: {
    options: [],
    emptyText: 'No options available',
    placeholder: 'Select an option...',
  },
};

