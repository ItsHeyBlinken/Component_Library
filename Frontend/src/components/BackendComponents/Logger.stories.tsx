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
  title: 'Backend Components/Logging/Logger',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const basicUsage = 'import { Logger } from \'backend-component-library\';\n\n// Create a logger\nconst logger = new Logger(\'MyService\');\n\n// Log messages\nlogger.info(\'Application started\');\nlogger.error(\'Something went wrong\', { error: error.message });\nlogger.warn(\'Warning message\');\nlogger.debug(\'Debug information\');';

const specializedLoggers = 'import { appLogger, httpLogger, dbLogger, authLogger, securityLogger, businessLogger } from \'backend-component-library\';\n\n// Use pre-configured loggers\nappLogger.info(\'Application started\');\nhttpLogger.logRequest(req, res, responseTime);\ndbLogger.logDatabase(\'query\', \'users\', 150);\nauthLogger.logAuth(\'login\', userId);\nsecurityLogger.logSecurity(\'unauthorized_access\', \'high\');\nbusinessLogger.logBusiness(\'order_created\', \'Order\', orderId);';

const customConfig = 'import { Logger } from \'backend-component-library\';\n\n// Create logger with custom configuration\nconst logger = new Logger(\'MyService\', {\n  level: \'debug\',\n  format: \'json\',\n  transports: [\'console\', \'file\'],\n  filename: \'logs/myservice.log\',\n  maxSize: \'50m\',\n  maxFiles: 10\n});';

const httpLogging = 'import { httpLogger } from \'backend-component-library\';\n\n// Log HTTP requests\napp.use((req, res, next) => {\n  const start = Date.now();\n  \n  res.on(\'finish\', () => {\n    const responseTime = Date.now() - start;\n    httpLogger.logRequest(req, res, responseTime);\n  });\n  \n  next();\n});';

const databaseLogging = 'import { dbLogger } from \'backend-component-library\';\n\n// Log database operations\nasync function getUserById(id: string) {\n  const start = Date.now();\n  try {\n    const user = await db.query(\'SELECT * FROM users WHERE id = ?\', [id]);\n    const duration = Date.now() - start;\n    dbLogger.logDatabase(\'select\', \'users\', duration, { id });\n    return user;\n  } catch (error) {\n    dbLogger.error(\'Database query failed\', { error: error.message, id });\n    throw error;\n  }\n}';

const securityLogging = 'import { securityLogger } from \'backend-component-library\';\n\n// Log security events\nsecurityLogger.logSecurity(\'failed_login\', \'medium\', {\n  email: userEmail,\n  ip: req.ip,\n  attempts: loginAttempts\n});\n\nsecurityLogger.logSecurity(\'data_breach_attempt\', \'critical\', {\n  endpoint: req.path,\n  ip: req.ip,\n  timestamp: new Date().toISOString()\n});';

const completeExample = 'import express from \'express\';\nimport { Logger, appLogger, httpLogger } from \'backend-component-library\';\n\nconst app = express();\n\n// Application startup\nappLogger.info(\'Server starting\', { port: 3000 });\n\n// HTTP request logging middleware\napp.use((req, res, next) => {\n  const start = Date.now();\n  res.on(\'finish\', () => {\n    httpLogger.logRequest(req, res, Date.now() - start);\n  });\n  next();\n});\n\n// Custom logger for specific service\nconst userServiceLogger = new Logger(\'UserService\', {\n  level: \'debug\',\n  format: \'json\'\n});\n\napp.post(\'/api/users\', async (req, res) => {\n  try {\n    userServiceLogger.info(\'Creating user\', { email: req.body.email });\n    const user = await createUser(req.body);\n    userServiceLogger.info(\'User created\', { userId: user.id });\n    res.json(user);\n  } catch (error) {\n    userServiceLogger.error(\'User creation failed\', { error: error.message });\n    res.status(500).json({ error: \'Failed to create user\' });\n  }\n});\n\napp.listen(3000, () => {\n  appLogger.info(\'Server running on port 3000\');\n});';

export const Overview: Story = {
  render: () => (
    <Card>
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        Logger
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '24px' }}>
        Structured logging component built on Winston. Provides multiple log levels, formats, transports, and specialized logging methods for different contexts.
      </Typography>
      
      <Typography variant="h5" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Features
      </Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
        <li>Multiple log levels (info, error, warn, debug)</li>
        <li>Multiple formats (JSON, simple, colorized)</li>
        <li>Multiple transports (console, file)</li>
        <li>Specialized loggers (HTTP, Database, Auth, Security, Business)</li>
        <li>Request logging</li>
        <li>Performance metrics</li>
        <li>Child loggers for context</li>
      </ul>
    </Card>
  ),
};

export const BasicUsage: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Basic Usage
      </Typography>
      <CodeExample code={basicUsage} />
    </Card>
  ),
};

export const SpecializedLoggers: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Pre-configured Specialized Loggers
      </Typography>
      <CodeExample code={specializedLoggers} />
    </Card>
  ),
};

export const CustomConfig: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Custom Configuration
      </Typography>
      <CodeExample code={customConfig} />
    </Card>
  ),
};

export const HTTPLogging: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        HTTP Request Logging
      </Typography>
      <CodeExample code={httpLogging} />
    </Card>
  ),
};

export const DatabaseLogging: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Database Operation Logging
      </Typography>
      <CodeExample code={databaseLogging} />
    </Card>
  ),
};

export const SecurityLogging: Story = {
  render: () => (
    <Card>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        Security Event Logging
      </Typography>
      <CodeExample code={securityLogging} />
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

