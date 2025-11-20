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
  title: 'Backend Components/API/ResponseFormatter',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const successResponse = 'import { ResponseFormatter } from \'backend-component-library\';\n\n// Success response\napp.get(\'/api/users/:id\', (req, res) => {\n  const user = { id: req.params.id, name: \'John Doe\' };\n  ResponseFormatter.success(res, user, \'User retrieved successfully\');\n});';

const errorResponse = 'import { ResponseFormatter } from \'backend-component-library\';\n\n// Error response\napp.get(\'/api/users/:id\', (req, res) => {\n  try {\n    const user = await getUserById(req.params.id);\n    if (!user) {\n      ResponseFormatter.notFound(res, \'USER_NOT_FOUND\', \'User not found\');\n      return;\n    }\n    ResponseFormatter.success(res, user);\n  } catch (error) {\n    ResponseFormatter.internalError(res, \'INTERNAL_ERROR\', error.message);\n  }\n});';

const paginatedResponse = 'import { ResponseFormatter } from \'backend-component-library\';\n\n// Paginated response\napp.get(\'/api/users\', async (req, res) => {\n  const page = parseInt(req.query.page as string) || 1;\n  const limit = parseInt(req.query.limit as string) || 10;\n  \n  const { users, total } = await getUsers(page, limit);\n  \n  ResponseFormatter.paginated(res, users, page, limit, total, \'Users retrieved\');\n});';

const createdResponse = 'import { ResponseFormatter } from \'backend-component-library\';\n\n// Created response (201)\napp.post(\'/api/users\', async (req, res) => {\n  const user = await createUser(req.body);\n  ResponseFormatter.created(res, user, \'User created successfully\');\n});';

const httpStatusCodes = 'import { ResponseFormatter } from \'backend-component-library\';\n\n// All HTTP status code methods:\nResponseFormatter.success(res, data);           // 200\nResponseFormatter.created(res, data);           // 201\nResponseFormatter.noContent(res);                // 204\nResponseFormatter.badRequest(res, error, msg);  // 400\nResponseFormatter.unauthorized(res, error, msg); // 401\nResponseFormatter.forbidden(res, error, msg);   // 403\nResponseFormatter.notFound(res, error, msg);    // 404\nResponseFormatter.conflict(res, error, msg);    // 409\nResponseFormatter.tooManyRequests(res, error, msg); // 429\nResponseFormatter.internalError(res, error, msg); // 500\nResponseFormatter.serviceUnavailable(res, error, msg); // 503';

const validationError = 'import { ResponseFormatter } from \'backend-component-library\';\n\n// Validation error response\napp.post(\'/api/users\', (req, res) => {\n  const errors = validateUser(req.body);\n  \n  if (errors.length > 0) {\n    ResponseFormatter.validationError(res, errors, \'Validation failed\');\n    return;\n  }\n  \n  // Continue with user creation...\n});';

const fileDownload = 'import { ResponseFormatter } from \'backend-component-library\';\n\n// File download response\napp.get(\'/api/files/:id/download\', (req, res) => {\n  const file = getFileById(req.params.id);\n  ResponseFormatter.fileDownload(\n    res,\n    file.path,\n    file.filename,\n    file.contentType\n  );\n});';

const cachedResponse = 'import { ResponseFormatter } from \'backend-component-library\';\n\n// Cached response\napp.get(\'/api/public/data\', (req, res) => {\n  const data = getPublicData();\n  const etag = generateETag(data);\n  \n  ResponseFormatter.cached(res, data, 3600, etag); // Cache for 1 hour\n});';

const completeExample = 'import express from \'express\';\nimport { ResponseFormatter } from \'backend-component-library\';\n\nconst app = express();\napp.use(express.json());\n\n// Success response\napp.get(\'/api/users/:id\', async (req, res) => {\n  try {\n    const user = await getUserById(req.params.id);\n    if (!user) {\n      ResponseFormatter.notFound(res, \'USER_NOT_FOUND\', \'User not found\');\n      return;\n    }\n    ResponseFormatter.success(res, user, \'User retrieved\');\n  } catch (error) {\n    ResponseFormatter.internalError(res, \'INTERNAL_ERROR\', error.message);\n  }\n});\n\n// Create with validation\napp.post(\'/api/users\', async (req, res) => {\n  const errors = validateUser(req.body);\n  if (errors.length > 0) {\n    ResponseFormatter.validationError(res, errors);\n    return;\n  }\n  \n  const user = await createUser(req.body);\n  ResponseFormatter.created(res, user, \'User created\');\n});\n\n// Paginated list\napp.get(\'/api/users\', async (req, res) => {\n  const page = parseInt(req.query.page as string) || 1;\n  const limit = parseInt(req.query.limit as string) || 10;\n  const { users, total } = await getUsers(page, limit);\n  ResponseFormatter.paginated(res, users, page, limit, total);\n});';

export const Overview: Story = {
  render: () => (
    <Card>
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        ResponseFormatter
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '24px' }}>
        Standardized API response formatting for Express.js applications. Provides consistent response structures for success, error, pagination, and file operations.
      </Typography>
      
      <Typography variant="h5" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Features
      </Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
        <li>Success and error responses</li>
        <li>Paginated responses</li>
        <li>All HTTP status codes</li>
        <li>Validation error responses</li>
        <li>File download and streaming</li>
        <li>Cached responses with ETag</li>
        <li>CORS headers support</li>
        <li>Custom headers</li>
      </ul>
    </Card>
  ),
};

export const SuccessResponse: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Success Response
      </Typography>
      <CodeExample code={successResponse} />
    </Card>
  ),
};

export const ErrorResponse: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Error Responses
      </Typography>
      <CodeExample code={errorResponse} />
    </Card>
  ),
};

export const PaginatedResponse: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Paginated Response
      </Typography>
      <CodeExample code={paginatedResponse} />
    </Card>
  ),
};

export const CreatedResponse: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Created Response (201)
      </Typography>
      <CodeExample code={createdResponse} />
    </Card>
  ),
};

export const HTTPStatusCodes: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        All HTTP Status Code Methods
      </Typography>
      <CodeExample code={httpStatusCodes} />
    </Card>
  ),
};

export const ValidationError: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Validation Error Response
      </Typography>
      <CodeExample code={validationError} />
    </Card>
  ),
};

export const FileDownload: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        File Download Response
      </Typography>
      <CodeExample code={fileDownload} />
    </Card>
  ),
};

export const CachedResponse: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Cached Response
      </Typography>
      <CodeExample code={cachedResponse} />
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

