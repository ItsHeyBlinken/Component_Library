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
  title: 'Backend Components/Security/OAuth2Middleware',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const registerProvider = `import { OAuth2Middleware } from 'backend-component-library';

// Register OAuth provider (e.g., Google)
OAuth2Middleware.registerProvider('google', {
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenURL: 'https://oauth2.googleapis.com/token',
  userInfoURL: 'https://www.googleapis.com/oauth2/v2/userinfo',
  redirectURI: 'http://localhost:3000/api/auth/google/callback',
  scope: ['email', 'profile'],
  pkce: true // Recommended for security
});`;

const authorizationFlow = `import { OAuth2Middleware } from 'backend-component-library';

// Step 1: Get authorization URL (redirect user here)
app.get('/api/auth/google', (req, res) => {
  OAuth2Middleware.getAuthorizationURL('google', req, res);
});

// Step 2: Handle callback (OAuth provider redirects here)
app.get('/api/auth/google/callback',
  OAuth2Middleware.handleCallback('google'),
  (req, res) => {
    const { token, userInfo } = (req as any).oauth2;
    
    // Create or update user account
    const user = await findOrCreateUser(userInfo);
    
    // Generate your own JWT token
    const jwtToken = AuthMiddleware.generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });
    
    res.json({ token: jwtToken, user });
  }
);`;

const multipleProviders = `import { OAuth2Middleware } from 'backend-component-library';

// Register multiple providers
OAuth2Middleware.registerProvider('google', {
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenURL: 'https://oauth2.googleapis.com/token',
  userInfoURL: 'https://www.googleapis.com/oauth2/v2/userinfo',
  redirectURI: 'http://localhost:3000/api/auth/google/callback',
  scope: ['email', 'profile'],
  pkce: true
});

OAuth2Middleware.registerProvider('github', {
  clientId: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  authorizationURL: 'https://github.com/login/oauth/authorize',
  tokenURL: 'https://github.com/login/oauth/access_token',
  userInfoURL: 'https://api.github.com/user',
  redirectURI: 'http://localhost:3000/api/auth/github/callback',
  scope: ['user:email'],
  pkce: false
});

// Routes for each provider
app.get('/api/auth/google', (req, res) => {
  OAuth2Middleware.getAuthorizationURL('google', req, res);
});

app.get('/api/auth/github', (req, res) => {
  OAuth2Middleware.getAuthorizationURL('github', req, res);
});`;

const completeExample = `import express from 'express';
import { OAuth2Middleware, AuthMiddleware } from 'backend-component-library';

const app = express();

// Initialize JWT auth
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET!,
  expiresIn: '24h'
});

// Register Google OAuth
OAuth2Middleware.registerProvider('google', {
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenURL: 'https://oauth2.googleapis.com/token',
  userInfoURL: 'https://www.googleapis.com/oauth2/v2/userinfo',
  redirectURI: 'http://localhost:3000/api/auth/google/callback',
  scope: ['email', 'profile'],
  pkce: true
});

// Start OAuth flow
app.get('/api/auth/google', (req, res) => {
  OAuth2Middleware.getAuthorizationURL('google', req, res);
});

// Handle OAuth callback
app.get('/api/auth/google/callback',
  OAuth2Middleware.handleCallback('google'),
  async (req, res) => {
    try {
      const { token, userInfo } = (req as any).oauth2;
      
      // Find or create user
      let user = await findUserByEmail(userInfo.email);
      if (!user) {
        user = await createUser({
          email: userInfo.email,
          name: userInfo.name,
          provider: 'google',
          providerId: userInfo.id
        });
      }
      
      // Generate JWT token
      const jwtToken = AuthMiddleware.generateToken({
        id: user.id,
        email: user.email,
        role: user.role
      });
      
      // Redirect to frontend with token
      res.redirect(\`http://localhost:3001/auth/callback?token=\${jwtToken}\`);
    } catch (error) {
      res.redirect('http://localhost:3001/auth/error');
    }
  }
);`;

export const Overview: Story = {
  render: () => (
    <Card>
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        OAuth2Middleware
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '24px' }}>
        Handles OAuth 2.0 authentication flows with multiple providers (Google, GitHub, etc.).
        Supports PKCE, token refresh, state verification, and user info fetching.
      </Typography>
      
      <Typography variant="h5" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Features
      </Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
        <li>Multiple OAuth providers (Google, GitHub, etc.)</li>
        <li>PKCE (Proof Key for Code Exchange) support</li>
        <li>Token refresh handling</li>
        <li>State verification for security</li>
        <li>User info fetching</li>
        <li>Scope validation</li>
      </ul>
    </Card>
  ),
};

export const RegisterProvider: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Register OAuth Provider
      </Typography>
      <CodeExample code={registerProvider} />
    </Card>
  ),
};

export const AuthorizationFlow: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        OAuth Authorization Flow
      </Typography>
      <CodeExample code={authorizationFlow} />
    </Card>
  ),
};

export const MultipleProviders: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Multiple Providers
      </Typography>
      <CodeExample code={multipleProviders} />
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

