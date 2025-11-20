import{s as J,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as n}from"./Card-956b6d64.js";import{T as s}from"./Typography-984ac10a.js";import{B as K}from"./Box-8deee1ca.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const Q=J.pre`
  background: ${({theme:r})=>r.colors.background.paper};
  border: 1px solid ${({theme:r})=>r.colors.border};
  border-radius: ${({theme:r})=>r.borderRadius.md};
  padding: ${({theme:r})=>r.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({theme:r})=>r.spacing.md} 0;
`,W=J.button`
  background: ${({theme:r})=>r.colors.primary.main};
  color: white;
  border: none;
  padding: ${({theme:r})=>r.spacing.sm} ${({theme:r})=>r.spacing.md};
  border-radius: ${({theme:r})=>r.borderRadius.sm};
  cursor: pointer;
  font-size: 14px;
  margin-top: ${({theme:r})=>r.spacing.sm};
  
  &:hover {
    background: ${({theme:r})=>r.colors.primary.dark};
  }
`,o=({code:r,title:h})=>{const G=()=>{navigator.clipboard.writeText(r),alert("Code copied to clipboard!")};return e.jsxs(K,{children:[h&&e.jsx(s,{variant:"h6",style:{marginBottom:"8px"},children:h}),e.jsx(Q,{children:r}),e.jsx(W,{onClick:G,children:"Copy Code"})]})},le={title:"Backend Components/API/ResponseFormatter",parameters:{layout:"padded"},tags:["autodocs"]},X=`import { ResponseFormatter } from 'backend-component-library';

// Success response
app.get('/api/users/:id', (req, res) => {
  const user = { id: req.params.id, name: 'John Doe' };
  ResponseFormatter.success(res, user, 'User retrieved successfully');
});`,Y=`import { ResponseFormatter } from 'backend-component-library';

// Error response
app.get('/api/users/:id', (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      ResponseFormatter.notFound(res, 'USER_NOT_FOUND', 'User not found');
      return;
    }
    ResponseFormatter.success(res, user);
  } catch (error) {
    ResponseFormatter.internalError(res, 'INTERNAL_ERROR', error.message);
  }
});`,Z=`import { ResponseFormatter } from 'backend-component-library';

// Paginated response
app.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  
  const { users, total } = await getUsers(page, limit);
  
  ResponseFormatter.paginated(res, users, page, limit, total, 'Users retrieved');
});`,ee=`import { ResponseFormatter } from 'backend-component-library';

// Created response (201)
app.post('/api/users', async (req, res) => {
  const user = await createUser(req.body);
  ResponseFormatter.created(res, user, 'User created successfully');
});`,re=`import { ResponseFormatter } from 'backend-component-library';

// All HTTP status code methods:
ResponseFormatter.success(res, data);           // 200
ResponseFormatter.created(res, data);           // 201
ResponseFormatter.noContent(res);                // 204
ResponseFormatter.badRequest(res, error, msg);  // 400
ResponseFormatter.unauthorized(res, error, msg); // 401
ResponseFormatter.forbidden(res, error, msg);   // 403
ResponseFormatter.notFound(res, error, msg);    // 404
ResponseFormatter.conflict(res, error, msg);    // 409
ResponseFormatter.tooManyRequests(res, error, msg); // 429
ResponseFormatter.internalError(res, error, msg); // 500
ResponseFormatter.serviceUnavailable(res, error, msg); // 503`,se=`import { ResponseFormatter } from 'backend-component-library';

// Validation error response
app.post('/api/users', (req, res) => {
  const errors = validateUser(req.body);
  
  if (errors.length > 0) {
    ResponseFormatter.validationError(res, errors, 'Validation failed');
    return;
  }
  
  // Continue with user creation...
});`,ne=`import { ResponseFormatter } from 'backend-component-library';

// File download response
app.get('/api/files/:id/download', (req, res) => {
  const file = getFileById(req.params.id);
  ResponseFormatter.fileDownload(
    res,
    file.path,
    file.filename,
    file.contentType
  );
});`,oe=`import { ResponseFormatter } from 'backend-component-library';

// Cached response
app.get('/api/public/data', (req, res) => {
  const data = getPublicData();
  const etag = generateETag(data);
  
  ResponseFormatter.cached(res, data, 3600, etag); // Cache for 1 hour
});`,ae=`import express from 'express';
import { ResponseFormatter } from 'backend-component-library';

const app = express();
app.use(express.json());

// Success response
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      ResponseFormatter.notFound(res, 'USER_NOT_FOUND', 'User not found');
      return;
    }
    ResponseFormatter.success(res, user, 'User retrieved');
  } catch (error) {
    ResponseFormatter.internalError(res, 'INTERNAL_ERROR', error.message);
  }
});

// Create with validation
app.post('/api/users', async (req, res) => {
  const errors = validateUser(req.body);
  if (errors.length > 0) {
    ResponseFormatter.validationError(res, errors);
    return;
  }
  
  const user = await createUser(req.body);
  ResponseFormatter.created(res, user, 'User created');
});

// Paginated list
app.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const { users, total } = await getUsers(page, limit);
  ResponseFormatter.paginated(res, users, page, limit, total);
});`,a={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h3",style:{marginBottom:"16px"},children:"ResponseFormatter"}),e.jsx(s,{variant:"body1",style:{marginBottom:"24px"},children:"Standardized API response formatting for Express.js applications. Provides consistent response structures for success, error, pagination, and file operations."}),e.jsx(s,{variant:"h5",style:{marginTop:"32px",marginBottom:"16px"},children:"Features"}),e.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"24px"},children:[e.jsx("li",{children:"Success and error responses"}),e.jsx("li",{children:"Paginated responses"}),e.jsx("li",{children:"All HTTP status codes"}),e.jsx("li",{children:"Validation error responses"}),e.jsx("li",{children:"File download and streaming"}),e.jsx("li",{children:"Cached responses with ETag"}),e.jsx("li",{children:"CORS headers support"}),e.jsx("li",{children:"Custom headers"})]})]})},t={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Success Response"}),e.jsx(o,{code:X})]})},p={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Error Responses"}),e.jsx(o,{code:Y})]})},i={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Paginated Response"}),e.jsx(o,{code:Z})]})},d={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Created Response (201)"}),e.jsx(o,{code:ee})]})},c={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"All HTTP Status Code Methods"}),e.jsx(o,{code:re})]})},m={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Validation Error Response"}),e.jsx(o,{code:se})]})},l={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"File Download Response"}),e.jsx(o,{code:ne})]})},g={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Cached Response"}),e.jsx(o,{code:oe})]})},u={render:()=>e.jsxs(n,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Complete Example"}),e.jsx(o,{code:ae})]})};var y,x,R;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h3" style={{
      marginBottom: '16px'
    }}>\r
        ResponseFormatter\r
      </Typography>\r
      <Typography variant="body1" style={{
      marginBottom: '24px'
    }}>\r
        Standardized API response formatting for Express.js applications. Provides consistent response structures for success, error, pagination, and file operations.\r
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
        <li>Success and error responses</li>\r
        <li>Paginated responses</li>\r
        <li>All HTTP status codes</li>\r
        <li>Validation error responses</li>\r
        <li>File download and streaming</li>\r
        <li>Cached responses with ETag</li>\r
        <li>CORS headers support</li>\r
        <li>Custom headers</li>\r
      </ul>\r
    </Card>
}`,...(R=(x=a.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var C,F,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Success Response\r
      </Typography>\r
      <CodeExample code={successResponse} />\r
    </Card>
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var T,j,v;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Error Responses\r
      </Typography>\r
      <CodeExample code={errorResponse} />\r
    </Card>
}`,...(v=(j=p.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var E,b,B;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Paginated Response\r
      </Typography>\r
      <CodeExample code={paginatedResponse} />\r
    </Card>
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var S,q,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Created Response (201)\r
      </Typography>\r
      <CodeExample code={createdResponse} />\r
    </Card>
}`,...(w=(q=d.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var P,U,k;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        All HTTP Status Code Methods\r
      </Typography>\r
      <CodeExample code={httpStatusCodes} />\r
    </Card>
}`,...(k=(U=c.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var I,D,O;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Validation Error Response\r
      </Typography>\r
      <CodeExample code={validationError} />\r
    </Card>
}`,...(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var $,A,N;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        File Download Response\r
      </Typography>\r
      <CodeExample code={fileDownload} />\r
    </Card>
}`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var V,_,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Cached Response\r
      </Typography>\r
      <CodeExample code={cachedResponse} />\r
    </Card>
}`,...(H=(_=g.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var z,L,M;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Complete Example\r
      </Typography>\r
      <CodeExample code={completeExample} />\r
    </Card>
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ge=["Overview","SuccessResponse","ErrorResponse","PaginatedResponse","CreatedResponse","HTTPStatusCodes","ValidationError","FileDownload","CachedResponse","CompleteExample"];export{g as CachedResponse,u as CompleteExample,d as CreatedResponse,p as ErrorResponse,l as FileDownload,c as HTTPStatusCodes,a as Overview,i as PaginatedResponse,t as SuccessResponse,m as ValidationError,ge as __namedExportsOrder,le as default};
