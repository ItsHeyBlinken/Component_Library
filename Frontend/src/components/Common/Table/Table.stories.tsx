import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableColumn } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Common/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    sortable: {
      control: { type: 'boolean' },
    },
    filterable: {
      control: { type: 'boolean' },
    },
    pagination: {
      control: { type: 'boolean' },
    },
    bordered: {
      control: { type: 'boolean' },
    },
    striped: {
      control: { type: 'boolean' },
    },
    hoverable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

const sampleUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-15' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', createdAt: '2024-02-20' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', createdAt: '2024-03-10' },
  { id: '4', name: 'Alice Williams', email: 'alice@example.com', role: 'Moderator', status: 'Active', createdAt: '2024-01-05' },
  { id: '5', name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active', createdAt: '2024-04-12' },
  { id: '6', name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active', createdAt: '2024-02-28' },
  { id: '7', name: 'Edward Norton', email: 'edward@example.com', role: 'User', status: 'Inactive', createdAt: '2024-03-22' },
  { id: '8', name: 'Fiona Apple', email: 'fiona@example.com', role: 'User', status: 'Active', createdAt: '2024-01-18' },
];

const columns: TableColumn<User>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
    filterable: true,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    sortable: true,
    filterable: true,
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
    filterable: true,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    sortable: true,
    render: (value: string) => (
      <span style={{ 
        color: value === 'Active' ? '#28a745' : '#dc3545',
        fontWeight: 'bold'
      }}>
        {value}
      </span>
    ),
  },
  {
    key: 'createdAt',
    title: 'Created',
    dataIndex: 'createdAt',
    sortable: true,
  },
];

export const Basic: Story = {
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    pagination: false,
  },
};

export const WithPagination: Story = {
  args: {
    columns,
    data: sampleUsers,
    sortable: true,
    pagination: true,
    pageSize: 5,
  },
};

export const WithFiltering: Story = {
  args: {
    columns,
    data: sampleUsers,
    sortable: true,
    filterable: true,
    pagination: true,
    pageSize: 5,
  },
};

export const WithRowSelection: Story = {
  args: {
    columns,
    data: sampleUsers,
    sortable: true,
    pagination: true,
    pageSize: 5,
    rowSelection: {
      type: 'checkbox',
      onChange: (selectedRowKeys, selectedRows) => {
        console.log('Selected:', selectedRowKeys, selectedRows);
      },
    },
  },
};

export const WithRadioSelection: Story = {
  args: {
    columns,
    data: sampleUsers,
    sortable: true,
    pagination: true,
    pageSize: 5,
    rowSelection: {
      type: 'radio',
      onChange: (selectedRowKeys, selectedRows) => {
        console.log('Selected:', selectedRowKeys, selectedRows);
      },
    },
  },
};

export const Bordered: Story = {
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    bordered: true,
  },
};

export const Striped: Story = {
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    striped: true,
  },
};

export const SmallSize: Story = {
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    size: 'lg',
  },
};

export const WithRowClick: Story = {
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    hoverable: true,
    onRowClick: (record, index) => {
      alert(`Clicked row ${index + 1}: ${(record as User).name}`);
    },
  },
};

export const EmptyState: Story = {
  args: {
    columns,
    data: [],
    sortable: true,
    emptyText: 'No users found',
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const CustomRender: Story = {
  args: {
    columns: [
      {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        sortable: true,
      },
      {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
        sortable: true,
        render: (value: string) => (
          <a href={`mailto:${value}`} style={{ color: '#007bff' }}>
            {value}
          </a>
        ),
      },
      {
        key: 'role',
        title: 'Role',
        dataIndex: 'role',
        sortable: true,
        render: (value: string) => (
          <span style={{
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: value === 'Admin' ? '#e3f2fd' : '#f5f5f5',
            color: value === 'Admin' ? '#1976d2' : '#666',
          }}>
            {value}
          </span>
        ),
      },
      {
        key: 'actions',
        title: 'Actions',
        align: 'right',
        render: (_, record) => (
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button style={{ padding: '4px 8px', cursor: 'pointer' }}>Edit</button>
            <button style={{ padding: '4px 8px', cursor: 'pointer' }}>Delete</button>
          </div>
        ),
      },
    ],
    data: sampleUsers.slice(0, 5),
    sortable: true,
  },
};

