import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Typography, Box } from '../Common';
import styled from 'styled-components';

const CodeBlock = styled.pre`
  background: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const CopyButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-size: 14px;
  margin-top: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const CodeExample: React.FC<{ code: string; title?: string }> = ({ code, title }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <Box>
      {title && <Typography variant="h6" style={{ marginBottom: '8px' }}>{title}</Typography>}
      <CodeBlock>{code}</CodeBlock>
      <CopyButton onClick={handleCopy}>Copy Code</CopyButton>
    </Box>
  );
};

const meta = {
  title: 'Backend Components/Security/RBACMiddleware',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const initialize = `import { RBACMiddleware } from 'backend-component-library';

// Initialize RBAC with roles and permissions
RBACMiddleware.initialize({
  roles: [
    {
      name: 'admin',
      permissions: ['users.create', 'users.delete', 'users.update', 'users.read']
    },
    {
      name: 'moderator',
      permissions: ['users.read', 'users.update'],
      parent: 'user' // Inherits from 'user' role
    },
    {
      name: 'user',
      permissions: ['users.read']
    }
  ],
  enableInheritance: true // Enable role inheritance
});`;

const requirePermission = `import { RBACMiddleware, AuthMiddleware } from 'backend-component-library';

// Require specific permission
app.get('/api/users',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requirePermission('users.read'),
  (req, res) => {
    // User must have 'users.read' permission
    res.json({ users: [] });
  }
);

// Require multiple permissions (user needs ALL)
app.post('/api/users',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requirePermission(['users.create', 'users.write']),
  (req, res) => {
    // User must have both permissions
    res.json({ message: 'User created' });
  }
);`;

const requireRole = `import { RBACMiddleware, AuthMiddleware } from 'backend-component-library';

// Require specific role
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requireRole('admin'),
  (req, res) => {
    // Only admins can access
    res.json({ message: 'User deleted' });
  }
);

// Require one of multiple roles
app.get('/api/admin',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requireRole(['admin', 'moderator']),
  (req, res) => {
    // Admin or moderator can access
    res.json({ message: 'Admin area' });
  }
);`;

const roleHierarchy = `import { RBACMiddleware } from 'backend-component-library';

// Define roles with inheritance
RBACMiddleware.initialize({
  roles: [
    {
      name: 'superadmin',
      permissions: ['*'] // All permissions
    },
    {
      name: 'admin',
      permissions: ['users.*', 'posts.*'],
      parent: 'moderator' // Inherits moderator permissions
    },
    {
      name: 'moderator',
      permissions: ['posts.read', 'posts.update'],
      parent: 'user' // Inherits user permissions
    },
    {
      name: 'user',
      permissions: ['posts.read', 'profile.read']
    }
  ],
  enableInheritance: true
});

// A user with 'admin' role will have:
// - All admin permissions: users.*, posts.*
// - All moderator permissions: posts.read, posts.update
// - All user permissions: posts.read, profile.read`;

const completeExample = `import express from 'express';
import { 
  AuthMiddleware, 
  RBACMiddleware, 
  ResponseFormatter 
} from 'backend-component-library';

const app = express();

// Initialize authentication
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET!,
  expiresIn: '24h'
});

// Initialize RBAC
RBACMiddleware.initialize({
  roles: [
    {
      name: 'admin',
      permissions: ['users.create', 'users.delete', 'users.update', 'users.read']
    },
    {
      name: 'moderator',
      permissions: ['users.read', 'users.update'],
      parent: 'user'
    },
    {
      name: 'user',
      permissions: ['users.read']
    }
  ],
  enableInheritance: true
});

// Public route
app.get('/api/public', (req, res) => {
  ResponseFormatter.success(res, { message: 'Public endpoint' });
});

// Protected route - requires authentication
app.get('/api/profile',
  AuthMiddleware.verifyToken,
  (req, res) => {
    const user = (req as any).user;
    ResponseFormatter.success(res, { profile: user });
  }
);

// Protected route - requires permission
app.get('/api/users',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requirePermission('users.read'),
  (req, res) => {
    ResponseFormatter.success(res, { users: [] });
  }
);

// Protected route - requires role
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requireRole('admin'),
  (req, res) => {
    ResponseFormatter.success(res, { message: 'User deleted' });
  }
);`;

export const Overview: Story = {
  render: () => (
    <Card>
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        RBACMiddleware
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '24px' }}>
        Role-Based Access Control middleware for Express.js applications.
        Provides hierarchical roles, permission inheritance, and dynamic permission checking.
      </Typography>
      
      <Typography variant="h5" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Features
      </Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
        <li>Hierarchical role system</li>
        <li>Permission inheritance</li>
        <li>Dynamic permission checking</li>
        <li>Role management</li>
        <li>User permission aggregation</li>
      </ul>
    </Card>
  ),
};

export const Initialize: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Initialize RBAC
      </Typography>
      <CodeExample code={initialize} />
    </Card>
  ),
};

export const RequirePermission: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Require Permission
      </Typography>
      <CodeExample code={requirePermission} />
    </Card>
  ),
};

export const RequireRole: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Require Role
      </Typography>
      <CodeExample code={requireRole} />
    </Card>
  ),
};

export const RoleHierarchy: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Role Hierarchy and Inheritance
      </Typography>
      <CodeExample code={roleHierarchy} />
    </Card>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Complete Example
      </Typography>
      <CodeExample code={completeExample} />
    </Card>
  ),
};

