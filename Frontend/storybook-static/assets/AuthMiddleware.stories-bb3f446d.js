import{s as z,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as s}from"./Card-956b6d64.js";import{T as o}from"./Typography-984ac10a.js";import{B as F}from"./Box-8deee1ca.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const J=z.pre`
  background: ${({theme:r})=>r.colors.background.paper};
  border: 1px solid ${({theme:r})=>r.colors.border};
  border-radius: ${({theme:r})=>r.borderRadius.md};
  padding: ${({theme:r})=>r.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({theme:r})=>r.spacing.md} 0;
`,W=z.button`
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
`,a=({code:r,title:m})=>{const $=()=>{navigator.clipboard.writeText(r),alert("Code copied to clipboard!")};return e.jsxs(F,{children:[m&&e.jsx(o,{variant:"h6",style:{marginBottom:"8px"},children:m}),e.jsx(J,{children:r}),e.jsx(W,{onClick:$,children:"Copy Code"})]})},X={title:"Backend Components/Security/AuthMiddleware",parameters:{layout:"padded"},tags:["autodocs"]},G=`import express from 'express';
import { AuthMiddleware } from 'backend-component-library';

const app = express();

// Initialize authentication (do this once at app startup)
AuthMiddleware.initialize({
  secret: ({}).JWT_SECRET || 'your-secret-key',
  expiresIn: '24h',
  issuer: 'your-app-name',
  audience: 'your-app-users'
});`,I=`import { AuthMiddleware } from 'backend-component-library';

// Generate token after successful login
const token = AuthMiddleware.generateToken({
  id: user.id,
  email: user.email,
  role: user.role,
  permissions: user.permissions || []
});

// Return token to client
res.json({ token, user });`,O=`import { AuthMiddleware } from 'backend-component-library';

// Protect a route - requires valid JWT token
app.get('/api/protected',
  AuthMiddleware.verifyToken,
  (req, res) => {
    // Access user from request
    const user = (req as any).user;
    res.json({ message: 'Protected route', user });
  }
);`,U=`import { AuthMiddleware } from 'backend-component-library';

// Require specific role
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requireRole('admin'),
  (req, res) => {
    // Only admins can access this route
    res.json({ message: 'User deleted' });
  }
);`,_=`import { AuthMiddleware } from 'backend-component-library';

// Require specific permission
app.post('/api/posts',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requirePermission('posts.create'),
  (req, res) => {
    // User must have 'posts.create' permission
    res.json({ message: 'Post created' });
  }
);`,L=`import express from 'express';
import { AuthMiddleware, ResponseFormatter } from 'backend-component-library';

const app = express();

// 1. Initialize (once at startup)
AuthMiddleware.initialize({
  secret: ({}).JWT_SECRET || 'your-secret-key',
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
);`,n={render:()=>e.jsxs(s,{children:[e.jsx(o,{variant:"h3",style:{marginBottom:"16px"},children:"AuthMiddleware"}),e.jsx(o,{variant:"body1",style:{marginBottom:"24px"},children:"Handles JWT-based authentication and authorization for Express.js applications. Provides token generation, verification, role-based access control, and permission checking."}),e.jsx(o,{variant:"h5",style:{marginTop:"32px",marginBottom:"16px"},children:"Features"}),e.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"24px"},children:[e.jsx("li",{children:"JWT token generation and verification"}),e.jsx("li",{children:"Role-based access control (RBAC)"}),e.jsx("li",{children:"Permission-based authorization"}),e.jsx("li",{children:"Express middleware integration"}),e.jsx("li",{children:"TypeScript support"})]})]})},t={render:()=>e.jsxs(s,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Basic Setup"}),e.jsx(a,{code:G})]})},i={render:()=>e.jsxs(s,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Generate Token"}),e.jsx(a,{code:I})]})},p={render:()=>e.jsxs(s,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Protect a Route"}),e.jsx(a,{code:O})]})},d={render:()=>e.jsxs(s,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Require Specific Role"}),e.jsx(a,{code:U})]})},c={render:()=>e.jsxs(s,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Require Specific Permission"}),e.jsx(a,{code:_})]})},l={render:()=>e.jsxs(s,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Complete Example"}),e.jsx(a,{code:L})]})};var u,h,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h3" style={{
      marginBottom: '16px'
    }}>\r
        AuthMiddleware\r
      </Typography>\r
      <Typography variant="body1" style={{
      marginBottom: '24px'
    }}>\r
        Handles JWT-based authentication and authorization for Express.js applications.\r
        Provides token generation, verification, role-based access control, and permission checking.\r
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
        <li>JWT token generation and verification</li>\r
        <li>Role-based access control (RBAC)</li>\r
        <li>Permission-based authorization</li>\r
        <li>Express middleware integration</li>\r
        <li>TypeScript support</li>\r
      </ul>\r
    </Card>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,g,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Basic Setup\r
      </Typography>\r
      <CodeExample code={basicSetup} />\r
    </Card>
}`,...(T=(g=t.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var f,k,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Generate Token\r
      </Typography>\r
      <CodeExample code={generateToken} />\r
    </Card>
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var C,j,b;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Protect a Route\r
      </Typography>\r
      <CodeExample code={protectRoute} />\r
    </Card>
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var R,w,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Require Specific Role\r
      </Typography>\r
      <CodeExample code={requireRole} />\r
    </Card>
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var q,A,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Require Specific Permission\r
      </Typography>\r
      <CodeExample code={requirePermission} />\r
    </Card>
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var S,M,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Complete Example\r
      </Typography>\r
      <CodeExample code={completeExample} />\r
    </Card>
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Y=["Overview","BasicSetup","GenerateToken","ProtectRoute","RequireRole","RequirePermission","CompleteExample"];export{t as BasicSetup,l as CompleteExample,i as GenerateToken,n as Overview,p as ProtectRoute,c as RequirePermission,d as RequireRole,Y as __namedExportsOrder,X as default};
