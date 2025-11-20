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
  title: 'Backend Components/Security/SecurityMiddleware',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const basicSetup = `import express from 'express';
import { SecurityMiddleware } from 'backend-component-library';

const app = express();

// Apply security middleware (apply first, before routes)
app.use(SecurityMiddleware.helmet());      // Security headers
app.use(SecurityMiddleware.cors());       // CORS configuration
app.use(SecurityMiddleware.compression()); // Response compression
app.use(SecurityMiddleware.logging());    // HTTP request logging
app.use(SecurityMiddleware.securityHeaders); // Additional security headers
app.use(SecurityMiddleware.requestSizeLimit('10mb')); // Request size limit

// Health check endpoint
app.get('/health', SecurityMiddleware.healthCheck);`;

const corsConfiguration = `import { SecurityMiddleware } from 'backend-component-library';

// Custom CORS configuration
app.use(SecurityMiddleware.cors({
  origin: 'https://yourdomain.com',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['X-Total-Count'],
  maxAge: 86400 // 24 hours
}));`;

const completeExample = `import express from 'express';
import { SecurityMiddleware } from 'backend-component-library';

const app = express();

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security middleware (apply in order)
app.use(SecurityMiddleware.helmet());
app.use(SecurityMiddleware.cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(SecurityMiddleware.compression());
app.use(SecurityMiddleware.logging());
app.use(SecurityMiddleware.securityHeaders);
app.use(SecurityMiddleware.requestSizeLimit('10mb'));

// Health check
app.get('/health', SecurityMiddleware.healthCheck);

// Your routes here
app.get('/api/data', (req, res) => {
  res.json({ message: 'Data' });
});

// 404 handler
app.use(SecurityMiddleware.notFound);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`;

export const Overview: Story = {
  render: () => (
    <Card>
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        SecurityMiddleware
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '24px' }}>
        Comprehensive security middleware for Express.js applications.
        Includes Helmet, CORS, compression, logging, and additional security headers.
      </Typography>
      
      <Typography variant="h5" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Features
      </Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
        <li>Helmet security headers</li>
        <li>CORS configuration</li>
        <li>Response compression</li>
        <li>HTTP request logging</li>
        <li>Request size limiting</li>
        <li>Health check endpoint</li>
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

export const CORSConfiguration: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        CORS Configuration
      </Typography>
      <CodeExample code={corsConfiguration} />
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

