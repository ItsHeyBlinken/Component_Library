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
  title: 'Backend Components/ErrorHandling/ErrorHandler',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const customErrorsCode = 'import { NotFoundError, ValidationError, AuthenticationError, AuthorizationError } from \'backend-component-library\';\n\n// Throw custom errors\napp.get(\'/api/users/:id\', async (req, res, next) => {\n  try {\n    const user = await getUserById(req.params.id);\n    if (!user) {\n      throw new NotFoundError(\'User not found\');\n    }\n    res.json(user);\n  } catch (error) {\n    next(error);\n  }\n});';

const globalHandlerCode = 'import express from \'express\';\nimport { ErrorHandler } from \'backend-component-library\';\n\nconst app = express();\n\n// Your routes here\napp.get(\'/api/data\', (req, res) => {\n  res.json({ data: \'value\' });\n});\n\n// Global error handler (apply LAST, after all routes)\napp.use(ErrorHandler.global());\n\napp.listen(3000);';

const allErrorTypesCode = 'import { CustomError, ValidationError, AuthenticationError, AuthorizationError, NotFoundError, ConflictError, RateLimitError, DatabaseError, ExternalServiceError } from \'backend-component-library\';\n\n// Usage examples:\nthrow new ValidationError(\'Invalid input\');\nthrow new AuthenticationError(\'Invalid token\');\nthrow new AuthorizationError(\'Access denied\');\nthrow new NotFoundError(\'User not found\');\nthrow new ConflictError(\'Email already exists\');\nthrow new RateLimitError(\'Too many requests\');\nthrow new DatabaseError(\'Database connection failed\');\nthrow new ExternalServiceError(\'External API failed\');';

const completeExampleCode = 'import express from \'express\';\nimport { ErrorHandler, NotFoundError, ValidationError } from \'backend-component-library\';\n\nconst app = express();\napp.use(express.json());\n\n// Route with error handling\napp.get(\'/api/users/:id\', async (req, res, next) => {\n  try {\n    const user = await getUserById(req.params.id);\n    if (!user) {\n      throw new NotFoundError(\'User not found\');\n    }\n    res.json(user);\n  } catch (error) {\n    next(error);\n  }\n});\n\napp.post(\'/api/users\', async (req, res, next) => {\n  try {\n    if (!req.body.email) {\n      throw new ValidationError(\'Email is required\');\n    }\n    const user = await createUser(req.body);\n    res.json(user);\n  } catch (error) {\n    next(error);\n  }\n});\n\n// Global error handler (MUST be last)\napp.use(ErrorHandler.global());\n\napp.listen(3000);';

export const Overview: Story = {
  render: () => (
    <Card>
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        ErrorHandler
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '24px' }}>
        Centralized error handling with custom error classes and global error handler.
        Provides structured error responses and proper HTTP status codes.
      </Typography>
      
      <Typography variant="h5" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Features
      </Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
        <li>Custom error classes</li>
        <li>Global error handler</li>
        <li>Structured error responses</li>
        <li>HTTP status code mapping</li>
        <li>Error logging</li>
      </ul>
    </Card>
  ),
};

export const CustomErrors: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Using Custom Errors
      </Typography>
      <CodeExample code={customErrorsCode} />
    </Card>
  ),
};

export const GlobalHandler: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Global Error Handler
      </Typography>
      <CodeExample code={globalHandlerCode} />
    </Card>
  ),
};

export const AllErrorTypes: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Available Error Types
      </Typography>
      <CodeExample code={allErrorTypesCode} />
    </Card>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Complete Example
      </Typography>
      <CodeExample code={completeExampleCode} />
    </Card>
  ),
};
