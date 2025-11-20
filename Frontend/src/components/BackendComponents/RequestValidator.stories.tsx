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
  title: 'Backend Components/Validation/RequestValidator',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const validateBody = `import { RequestValidator } from 'backend-component-library';

// Validate request body
app.post('/api/users',
  RequestValidator.validateBody({
    'name|required|string|min:2|max:50': 'Name is required and must be 2-50 characters',
    'email|required|email|trim|toLowerCase': 'Email is required and must be valid',
    'age|required|number|min:18|max:100': 'Age must be between 18 and 100',
    'password|required|string|min:8': 'Password must be at least 8 characters'
  }),
  (req, res) => {
    // req.body is validated and sanitized
    const { name, email, age, password } = req.body;
    // Create user...
  }
);`;

const validateQuery = `import { RequestValidator } from 'backend-component-library';

// Validate query parameters
app.get('/api/users',
  RequestValidator.validateQuery({
    'page|toNumber|min:1': 'Page must be a positive number',
    'limit|toNumber|min:1|max:100': 'Limit must be between 1 and 100',
    'sort|string|in:name,email,createdAt': 'Sort must be name, email, or createdAt'
  }),
  (req, res) => {
    // req.query is validated
    const { page, limit, sort } = req.query;
    // Fetch users...
  }
);`;

const validateParams = `import { RequestValidator } from 'backend-component-library';

// Validate URL parameters
app.get('/api/users/:id',
  RequestValidator.validateParams({
    'id|required|string|pattern:^[0-9a-f]{24}$': 'ID must be a valid MongoDB ObjectId'
  }),
  (req, res) => {
    // req.params.id is validated
    const { id } = req.params;
    // Fetch user...
  }
);`;

const validationRules = `// Available Validation Rules:

// Type Rules
'required'        // Field must be present
'string'          // Must be a string
'number'          // Must be a number
'boolean'         // Must be a boolean
'array'           // Must be an array
'object'          // Must be an object
'email'           // Must be a valid email
'url'             // Must be a valid URL
'date'            // Must be a valid date

// Comparison Rules
'min:5'           // Minimum value/length
'max:100'         // Maximum value/length
'between:5,100'   // Value between two numbers

// String Rules
'minLength:3'     // Minimum string length
'maxLength:50'    // Maximum string length
'pattern:^[A-Z]'  // Regex pattern match
'alpha'           // Only letters
'alphaNum'        // Letters and numbers
'alphanumeric'    // Alphanumeric characters

// Number Rules
'positive'        // Must be positive
'negative'        // Must be negative
'integer'         // Must be an integer

// Array Rules
'in:value1,value2' // Value must be in list
'notIn:value1'     // Value must not be in list

// Sanitizers
'trim'            // Trim whitespace
'toLowerCase'     // Convert to lowercase
'toUpperCase'     // Convert to uppercase
'toNumber'        // Convert to number
'toBoolean'       // Convert to boolean

// Example:
'email|required|email|trim|toLowerCase'
'age|required|number|min:18|max:100'
'status|required|in:active,inactive,pending'`;

const completeExample = `import express from 'express';
import { RequestValidator, ResponseFormatter } from 'backend-component-library';

const app = express();
app.use(express.json());

// Create user with validation
app.post('/api/users',
  RequestValidator.validateBody({
    'name|required|string|min:2|max:50': 'Name is required',
    'email|required|email|trim|toLowerCase': 'Email is required',
    'age|required|number|min:18|max:100': 'Age must be 18-100',
    'role|required|in:user,admin,moderator': 'Role must be user, admin, or moderator'
  }),
  async (req, res) => {
    try {
      // req.body is validated and sanitized
      const { name, email, age, role } = req.body;
      
      const user = await createUser({ name, email, age, role });
      ResponseFormatter.created(res, user, 'User created successfully');
    } catch (error) {
      next(error);
    }
  }
);

// List users with query validation
app.get('/api/users',
  RequestValidator.validateQuery({
    'page|toNumber|min:1': 'Page must be positive',
    'limit|toNumber|min:1|max:100': 'Limit must be 1-100'
  }),
  async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const users = await getUsers(page, limit);
    ResponseFormatter.success(res, users);
  }
);`;

export const Overview: Story = {
  render: () => (
    <Card>
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        RequestValidator
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '24px' }}>
        Validates and sanitizes request data (body, query, params) with a flexible rule system.
        Provides built-in validation rules and sanitizers for common use cases.
      </Typography>
      
      <Typography variant="h5" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Features
      </Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
        <li>Request body validation</li>
        <li>Query parameter validation</li>
        <li>URL parameter validation</li>
        <li>Built-in validation rules</li>
        <li>Data sanitization</li>
        <li>Custom error messages</li>
      </ul>
    </Card>
  ),
};

export const ValidateBody: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Validate Request Body
      </Typography>
      <CodeExample code={validateBody} />
    </Card>
  ),
};

export const ValidateQuery: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Validate Query Parameters
      </Typography>
      <CodeExample code={validateQuery} />
    </Card>
  ),
};

export const ValidateParams: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Validate URL Parameters
      </Typography>
      <CodeExample code={validateParams} />
    </Card>
  ),
};

export const ValidationRules: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Available Validation Rules
      </Typography>
      <CodeExample code={validationRules} />
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

