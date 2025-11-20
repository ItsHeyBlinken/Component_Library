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
  title: 'Backend Components/Security/AuthMiddleware',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const basicSetup = `import express from 'express';
import { AuthMiddleware } from 'backend-component-library';

const app = express();

// Initialize authentication (do this once at app startup)
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: '24h',
  issuer: 'your-app-name',
  audience: 'your-app-users'
});`;

const generateToken = `import { AuthMiddleware } from 'backend-component-library';

// Generate token after successful login
const token = AuthMiddleware.generateToken({
  id: user.id,
  email: user.email,
  role: user.role,
  permissions: user.permissions || []
});

// Return token to client
res.json({ token, user });`;

const protectRoute = `import { AuthMiddleware } from 'backend-component-library';

// Protect a route - requires valid JWT token
app.get('/api/protected',
  AuthMiddleware.verifyToken,
  (req, res) => {
    // Access user from request
    const user = (req as any).user;
    res.json({ message: 'Protected route', user });
  }
);`;

const requireRole = `import { AuthMiddleware } from 'backend-component-library';

// Require specific role
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requireRole('admin'),
  (req, res) => {
    // Only admins can access this route
    res.json({ message: 'User deleted' });
  }
);`;

const requirePermission = `import { AuthMiddleware } from 'backend-component-library';

// Require specific permission
app.post('/api/posts',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requirePermission('posts.create'),
  (req, res) => {
    // User must have 'posts.create' permission
    res.json({ message: 'Post created' });
  }
);`;

const completeExample = `import express from 'express';
import { AuthMiddleware, ResponseFormatter } from 'backend-component-library';

const app = express();

// 1. Initialize (once at startup)
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: '24h'
});

// 2. Login endpoint
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Verify credentials
  const user = await verifyCredentials(email, password);
  
  if (user) {
    // Generate token
    const token = AuthMiddleware.generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      permissions: user.permissions || []
    });
    
    ResponseFormatter.success(res, { token, user });
  } else {
    ResponseFormatter.unauthorized(res, 'Invalid credentials');
  }
});

// 3. Protected route
app.get('/api/profile',
  AuthMiddleware.verifyToken,
  (req, res) => {
    const user = (req as any).user;
    ResponseFormatter.success(res, { profile: user });
  }
);

// 4. Admin-only route
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requireRole('admin'),
  async (req, res) => {
    await deleteUser(req.params.id);
    ResponseFormatter.success(res, { message: 'User deleted' });
  }
);`;

export const Overview: Story = {
  render: () => (
    <Card>
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        AuthMiddleware
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '24px' }}>
        Handles JWT-based authentication and authorization for Express.js applications.
        Provides token generation, verification, role-based access control, and permission checking.
      </Typography>
      
      <Typography variant="h5" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Features
      </Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
        <li>JWT token generation and verification</li>
        <li>Role-based access control (RBAC)</li>
        <li>Permission-based authorization</li>
        <li>Express middleware integration</li>
        <li>TypeScript support</li>
      </ul>
    </Card>
  ),
};

export const BasicSetup: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Basic Setup
      </Typography>
      <CodeExample code={basicSetup} />
    </Card>
  ),
};

export const GenerateToken: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Generate Token
      </Typography>
      <CodeExample code={generateToken} />
    </Card>
  ),
};

export const ProtectRoute: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Protect a Route
      </Typography>
      <CodeExample code={protectRoute} />
    </Card>
  ),
};

export const RequireRole: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Require Specific Role
      </Typography>
      <CodeExample code={requireRole} />
    </Card>
  ),
};

export const RequirePermission: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Require Specific Permission
      </Typography>
      <CodeExample code={requirePermission} />
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

