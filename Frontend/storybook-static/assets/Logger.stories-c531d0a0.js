import{s as H,j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as o}from"./Card-956b6d64.js";import{T as n}from"./Typography-984ac10a.js";import{B as A}from"./Box-8deee1ca.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const _=H.pre`
  background: ${({theme:e})=>e.colors.background.paper};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({theme:e})=>e.spacing.md} 0;
`,F=H.button`
  background: ${({theme:e})=>e.colors.primary.main};
  color: white;
  border: none;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
  font-size: 14px;
  margin-top: ${({theme:e})=>e.spacing.sm};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary.dark};
  }
`,s=({code:e,title:m})=>{const M=()=>{navigator.clipboard.writeText(e),alert("Code copied to clipboard!")};return r.jsxs(A,{children:[m&&r.jsx(n,{variant:"h6",style:{marginBottom:"8px"},children:m}),r.jsx(_,{children:e}),r.jsx(F,{onClick:M,children:"Copy Code"})]})},nr={title:"Backend Components/Logging/Logger",parameters:{layout:"padded"},tags:["autodocs"]},I=`import { Logger } from 'backend-component-library';

// Create a logger
const logger = new Logger('MyService');

// Log messages
logger.info('Application started');
logger.error('Something went wrong', { error: error.message });
logger.warn('Warning message');
logger.debug('Debug information');`,W=`import { appLogger, httpLogger, dbLogger, authLogger, securityLogger, businessLogger } from 'backend-component-library';

// Use pre-configured loggers
appLogger.info('Application started');
httpLogger.logRequest(req, res, responseTime);
dbLogger.logDatabase('query', 'users', 150);
authLogger.logAuth('login', userId);
securityLogger.logSecurity('unauthorized_access', 'high');
businessLogger.logBusiness('order_created', 'Order', orderId);`,N=`import { Logger } from 'backend-component-library';

// Create logger with custom configuration
const logger = new Logger('MyService', {
  level: 'debug',
  format: 'json',
  transports: ['console', 'file'],
  filename: 'logs/myservice.log',
  maxSize: '50m',
  maxFiles: 10
});`,J=`import { httpLogger } from 'backend-component-library';

// Log HTTP requests
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const responseTime = Date.now() - start;
    httpLogger.logRequest(req, res, responseTime);
  });
  
  next();
});`,G=`import { dbLogger } from 'backend-component-library';

// Log database operations
async function getUserById(id: string) {
  const start = Date.now();
  try {
    const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    const duration = Date.now() - start;
    dbLogger.logDatabase('select', 'users', duration, { id });
    return user;
  } catch (error) {
    dbLogger.error('Database query failed', { error: error.message, id });
    throw error;
  }
}`,K=`import { securityLogger } from 'backend-component-library';

// Log security events
securityLogger.logSecurity('failed_login', 'medium', {
  email: userEmail,
  ip: req.ip,
  attempts: loginAttempts
});

securityLogger.logSecurity('data_breach_attempt', 'critical', {
  endpoint: req.path,
  ip: req.ip,
  timestamp: new Date().toISOString()
});`,Q=`import express from 'express';
import { Logger, appLogger, httpLogger } from 'backend-component-library';

const app = express();

// Application startup
appLogger.info('Server starting', { port: 3000 });

// HTTP request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    httpLogger.logRequest(req, res, Date.now() - start);
  });
  next();
});

// Custom logger for specific service
const userServiceLogger = new Logger('UserService', {
  level: 'debug',
  format: 'json'
});

app.post('/api/users', async (req, res) => {
  try {
    userServiceLogger.info('Creating user', { email: req.body.email });
    const user = await createUser(req.body);
    userServiceLogger.info('User created', { userId: user.id });
    res.json(user);
  } catch (error) {
    userServiceLogger.error('User creation failed', { error: error.message });
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.listen(3000, () => {
  appLogger.info('Server running on port 3000');
});`,t={render:()=>r.jsxs(o,{children:[r.jsx(n,{variant:"h3",style:{marginBottom:"16px"},children:"Logger"}),r.jsx(n,{variant:"body1",style:{marginBottom:"24px"},children:"Structured logging component built on Winston. Provides multiple log levels, formats, transports, and specialized logging methods for different contexts."}),r.jsx(n,{variant:"h5",style:{marginTop:"32px",marginBottom:"16px"},children:"Features"}),r.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"24px"},children:[r.jsx("li",{children:"Multiple log levels (info, error, warn, debug)"}),r.jsx("li",{children:"Multiple formats (JSON, simple, colorized)"}),r.jsx("li",{children:"Multiple transports (console, file)"}),r.jsx("li",{children:"Specialized loggers (HTTP, Database, Auth, Security, Business)"}),r.jsx("li",{children:"Request logging"}),r.jsx("li",{children:"Performance metrics"}),r.jsx("li",{children:"Child loggers for context"})]})]})},a={render:()=>r.jsxs(o,{children:[r.jsx(n,{variant:"h4",style:{marginBottom:"16px"},children:"Basic Usage"}),r.jsx(s,{code:I})]})},i={render:()=>r.jsxs(o,{children:[r.jsx(n,{variant:"h4",style:{marginBottom:"16px"},children:"Pre-configured Specialized Loggers"}),r.jsx(s,{code:W})]})},g={render:()=>r.jsxs(o,{children:[r.jsx(n,{variant:"h4",style:{marginBottom:"16px"},children:"Custom Configuration"}),r.jsx(s,{code:N})]})},p={render:()=>r.jsxs(o,{children:[r.jsx(n,{variant:"h4",style:{marginBottom:"16px"},children:"HTTP Request Logging"}),r.jsx(s,{code:J})]})},c={render:()=>r.jsxs(o,{children:[r.jsx(n,{variant:"h4",style:{marginBottom:"16px"},children:"Database Operation Logging"}),r.jsx(s,{code:G})]})},l={render:()=>r.jsxs(o,{children:[r.jsx(n,{variant:"h4",style:{marginBottom:"16px"},children:"Security Event Logging"}),r.jsx(s,{code:K})]})},d={render:()=>r.jsxs(o,{children:[r.jsx(n,{variant:"h4",style:{marginBottom:"16px"},children:"Complete Example"}),r.jsx(s,{code:Q})]})};var u,y,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h3" style={{
      marginBottom: '16px'
    }}>\r
        Logger\r
      </Typography>\r
      <Typography variant="body1" style={{
      marginBottom: '24px'
    }}>\r
        Structured logging component built on Winston. Provides multiple log levels, formats, transports, and specialized logging methods for different contexts.\r
      </Typography>\r
      \r
      <Typography variant="h5" style={{
      marginTop: '32px',
      marginBottom: '16px'
    }}>\r
        Features\r
      </Typography>\r
      <ul style={{
      marginLeft: '20px',
      marginBottom: '24px'
    }}>\r
        <li>Multiple log levels (info, error, warn, debug)</li>\r
        <li>Multiple formats (JSON, simple, colorized)</li>\r
        <li>Multiple transports (console, file)</li>\r
        <li>Specialized loggers (HTTP, Database, Auth, Security, Business)</li>\r
        <li>Request logging</li>\r
        <li>Performance metrics</li>\r
        <li>Child loggers for context</li>\r
      </ul>\r
    </Card>
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,L,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Basic Usage\r
      </Typography>\r
      <CodeExample code={basicUsage} />\r
    </Card>
}`,...(f=(L=a.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var b,C,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Pre-configured Specialized Loggers\r
      </Typography>\r
      <CodeExample code={specializedLoggers} />\r
    </Card>
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var T,j,S;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Custom Configuration\r
      </Typography>\r
      <CodeExample code={customConfig} />\r
    </Card>
}`,...(S=(j=g.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,w,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        HTTP Request Logging\r
      </Typography>\r
      <CodeExample code={httpLogging} />\r
    </Card>
}`,...(q=(w=p.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var E,D,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Database Operation Logging\r
      </Typography>\r
      <CodeExample code={databaseLogging} />\r
    </Card>
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var k,P,R;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Security Event Logging\r
      </Typography>\r
      <CodeExample code={securityLogging} />\r
    </Card>
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,$,O;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Complete Example\r
      </Typography>\r
      <CodeExample code={completeExample} />\r
    </Card>
}`,...(O=($=d.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const or=["Overview","BasicUsage","SpecializedLoggers","CustomConfig","HTTPLogging","DatabaseLogging","SecurityLogging","CompleteExample"];export{a as BasicUsage,d as CompleteExample,g as CustomConfig,c as DatabaseLogging,p as HTTPLogging,t as Overview,l as SecurityLogging,i as SpecializedLoggers,or as __namedExportsOrder,nr as default};
