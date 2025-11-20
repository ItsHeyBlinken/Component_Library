import{s as B,j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as n}from"./Card-956b6d64.js";import{T as o}from"./Typography-984ac10a.js";import{B as k}from"./Box-8deee1ca.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const A=B.pre`
  background: ${({theme:e})=>e.colors.background.paper};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({theme:e})=>e.spacing.md} 0;
`,S=B.button`
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
`,d=({code:e,title:p})=>{const H=()=>{navigator.clipboard.writeText(e),alert("Code copied to clipboard!")};return r.jsxs(k,{children:[p&&r.jsx(o,{variant:"h6",style:{marginBottom:"8px"},children:p}),r.jsx(A,{children:e}),r.jsx(S,{onClick:H,children:"Copy Code"})]})},L={title:"Backend Components/ErrorHandling/ErrorHandler",parameters:{layout:"padded"},tags:["autodocs"]},$=`import { NotFoundError, ValidationError, AuthenticationError, AuthorizationError } from 'backend-component-library';

// Throw custom errors
app.get('/api/users/:id', async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});`,q=`import express from 'express';
import { ErrorHandler } from 'backend-component-library';

const app = express();

// Your routes here
app.get('/api/data', (req, res) => {
  res.json({ data: 'value' });
});

// Global error handler (apply LAST, after all routes)
app.use(ErrorHandler.global());

app.listen(3000);`,U=`import { CustomError, ValidationError, AuthenticationError, AuthorizationError, NotFoundError, ConflictError, RateLimitError, DatabaseError, ExternalServiceError } from 'backend-component-library';

// Usage examples:
throw new ValidationError('Invalid input');
throw new AuthenticationError('Invalid token');
throw new AuthorizationError('Access denied');
throw new NotFoundError('User not found');
throw new ConflictError('Email already exists');
throw new RateLimitError('Too many requests');
throw new DatabaseError('Database connection failed');
throw new ExternalServiceError('External API failed');`,F=`import express from 'express';
import { ErrorHandler, NotFoundError, ValidationError } from 'backend-component-library';

const app = express();
app.use(express.json());

// Route with error handling
app.get('/api/users/:id', async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.post('/api/users', async (req, res, next) => {
  try {
    if (!req.body.email) {
      throw new ValidationError('Email is required');
    }
    const user = await createUser(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Global error handler (MUST be last)
app.use(ErrorHandler.global());

app.listen(3000);`,a={render:()=>r.jsxs(n,{children:[r.jsx(o,{variant:"h3",style:{marginBottom:"16px"},children:"ErrorHandler"}),r.jsx(o,{variant:"body1",style:{marginBottom:"24px"},children:"Centralized error handling with custom error classes and global error handler. Provides structured error responses and proper HTTP status codes."}),r.jsx(o,{variant:"h5",style:{marginTop:"32px",marginBottom:"16px"},children:"Features"}),r.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"24px"},children:[r.jsx("li",{children:"Custom error classes"}),r.jsx("li",{children:"Global error handler"}),r.jsx("li",{children:"Structured error responses"}),r.jsx("li",{children:"HTTP status code mapping"}),r.jsx("li",{children:"Error logging"})]})]})},s={render:()=>r.jsxs(n,{children:[r.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Using Custom Errors"}),r.jsx(d,{code:$})]})},t={render:()=>r.jsxs(n,{children:[r.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Global Error Handler"}),r.jsx(d,{code:q})]})},i={render:()=>r.jsxs(n,{children:[r.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Available Error Types"}),r.jsx(d,{code:U})]})},l={render:()=>r.jsxs(n,{children:[r.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Complete Example"}),r.jsx(d,{code:F})]})};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h3" style={{
      marginBottom: '16px'
    }}>\r
        ErrorHandler\r
      </Typography>\r
      <Typography variant="body1" style={{
      marginBottom: '24px'
    }}>\r
        Centralized error handling with custom error classes and global error handler.\r
        Provides structured error responses and proper HTTP status codes.\r
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
        <li>Custom error classes</li>\r
        <li>Global error handler</li>\r
        <li>Structured error responses</li>\r
        <li>HTTP status code mapping</li>\r
        <li>Error logging</li>\r
      </ul>\r
    </Card>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,x,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Using Custom Errors\r
      </Typography>\r
      <CodeExample code={customErrorsCode} />\r
    </Card>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,E,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Global Error Handler\r
      </Typography>\r
      <CodeExample code={globalHandlerCode} />\r
    </Card>
}`,...(C=(E=t.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var b,T,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Available Error Types\r
      </Typography>\r
      <CodeExample code={allErrorTypesCode} />\r
    </Card>
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var j,v,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Complete Example\r
      </Typography>\r
      <CodeExample code={completeExampleCode} />\r
    </Card>
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const V=["Overview","CustomErrors","GlobalHandler","AllErrorTypes","CompleteExample"];export{i as AllErrorTypes,l as CompleteExample,s as CustomErrors,t as GlobalHandler,a as Overview,V as __namedExportsOrder,L as default};
