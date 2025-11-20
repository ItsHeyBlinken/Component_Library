import{s as k,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as i}from"./Card-956b6d64.js";import{T as s}from"./Typography-984ac10a.js";import{B as P}from"./Box-8deee1ca.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const I=k.pre`
  background: ${({theme:r})=>r.colors.background.paper};
  border: 1px solid ${({theme:r})=>r.colors.border};
  border-radius: ${({theme:r})=>r.borderRadius.md};
  padding: ${({theme:r})=>r.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({theme:r})=>r.spacing.md} 0;
`,z=k.button`
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
`,a=({code:r,title:l})=>{const E=()=>{navigator.clipboard.writeText(r),alert("Code copied to clipboard!")};return e.jsxs(P,{children:[l&&e.jsx(s,{variant:"h6",style:{marginBottom:"8px"},children:l}),e.jsx(I,{children:r}),e.jsx(z,{onClick:E,children:"Copy Code"})]})},W={title:"Backend Components/Security/RBACMiddleware",parameters:{layout:"padded"},tags:["autodocs"]},$=`import { RBACMiddleware } from 'backend-component-library';

// Initialize RBAC with roles and permissions
RBACMiddleware.initialize({
  roles: [
    {
      name: 'admin',
      permissions: ['users.create', 'users.delete', 'users.update', 'users.read']
    },
    {
      name: 'moderator',
      permissions: ['users.read', 'users.update'],
      parent: 'user' // Inherits from 'user' role
    },
    {
      name: 'user',
      permissions: ['users.read']
    }
  ],
  enableInheritance: true // Enable role inheritance
});`,H=`import { RBACMiddleware, AuthMiddleware } from 'backend-component-library';

// Require specific permission
app.get('/api/users',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requirePermission('users.read'),
  (req, res) => {
    // User must have 'users.read' permission
    res.json({ users: [] });
  }
);

// Require multiple permissions (user needs ALL)
app.post('/api/users',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requirePermission(['users.create', 'users.write']),
  (req, res) => {
    // User must have both permissions
    res.json({ message: 'User created' });
  }
);`,S=`import { RBACMiddleware, AuthMiddleware } from 'backend-component-library';

// Require specific role
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requireRole('admin'),
  (req, res) => {
    // Only admins can access
    res.json({ message: 'User deleted' });
  }
);

// Require one of multiple roles
app.get('/api/admin',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requireRole(['admin', 'moderator']),
  (req, res) => {
    // Admin or moderator can access
    res.json({ message: 'Admin area' });
  }
);`,F=`import { RBACMiddleware } from 'backend-component-library';

// Define roles with inheritance
RBACMiddleware.initialize({
  roles: [
    {
      name: 'superadmin',
      permissions: ['*'] // All permissions
    },
    {
      name: 'admin',
      permissions: ['users.*', 'posts.*'],
      parent: 'moderator' // Inherits moderator permissions
    },
    {
      name: 'moderator',
      permissions: ['posts.read', 'posts.update'],
      parent: 'user' // Inherits user permissions
    },
    {
      name: 'user',
      permissions: ['posts.read', 'profile.read']
    }
  ],
  enableInheritance: true
});

// A user with 'admin' role will have:
// - All admin permissions: users.*, posts.*
// - All moderator permissions: posts.read, posts.update
// - All user permissions: posts.read, profile.read`,U=`import express from 'express';
import { 
  AuthMiddleware, 
  RBACMiddleware, 
  ResponseFormatter 
} from 'backend-component-library';

const app = express();

// Initialize authentication
AuthMiddleware.initialize({
  secret: ({}).JWT_SECRET!,
  expiresIn: '24h'
});

// Initialize RBAC
RBACMiddleware.initialize({
  roles: [
    {
      name: 'admin',
      permissions: ['users.create', 'users.delete', 'users.update', 'users.read']
    },
    {
      name: 'moderator',
      permissions: ['users.read', 'users.update'],
      parent: 'user'
    },
    {
      name: 'user',
      permissions: ['users.read']
    }
  ],
  enableInheritance: true
});

// Public route
app.get('/api/public', (req, res) => {
  ResponseFormatter.success(res, { message: 'Public endpoint' });
});

// Protected route - requires authentication
app.get('/api/profile',
  AuthMiddleware.verifyToken,
  (req, res) => {
    const user = (req as any).user;
    ResponseFormatter.success(res, { profile: user });
  }
);

// Protected route - requires permission
app.get('/api/users',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requirePermission('users.read'),
  (req, res) => {
    ResponseFormatter.success(res, { users: [] });
  }
);

// Protected route - requires role
app.delete('/api/users/:id',
  AuthMiddleware.verifyToken,
  RBACMiddleware.requireRole('admin'),
  (req, res) => {
    ResponseFormatter.success(res, { message: 'User deleted' });
  }
);`,n={render:()=>e.jsxs(i,{children:[e.jsx(s,{variant:"h3",style:{marginBottom:"16px"},children:"RBACMiddleware"}),e.jsx(s,{variant:"body1",style:{marginBottom:"24px"},children:"Role-Based Access Control middleware for Express.js applications. Provides hierarchical roles, permission inheritance, and dynamic permission checking."}),e.jsx(s,{variant:"h5",style:{marginTop:"32px",marginBottom:"16px"},children:"Features"}),e.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"24px"},children:[e.jsx("li",{children:"Hierarchical role system"}),e.jsx("li",{children:"Permission inheritance"}),e.jsx("li",{children:"Dynamic permission checking"}),e.jsx("li",{children:"Role management"}),e.jsx("li",{children:"User permission aggregation"})]})]})},o={render:()=>e.jsxs(i,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Initialize RBAC"}),e.jsx(a,{code:$})]})},t={render:()=>e.jsxs(i,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Require Permission"}),e.jsx(a,{code:H})]})},d={render:()=>e.jsxs(i,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Require Role"}),e.jsx(a,{code:S})]})},p={render:()=>e.jsxs(i,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Role Hierarchy and Inheritance"}),e.jsx(a,{code:F})]})},m={render:()=>e.jsxs(i,{children:[e.jsx(s,{variant:"h4",style:{marginBottom:"16px"},children:"Complete Example"}),e.jsx(a,{code:U})]})};var c,u,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h3" style={{
      marginBottom: '16px'
    }}>\r
        RBACMiddleware\r
      </Typography>\r
      <Typography variant="body1" style={{
      marginBottom: '24px'
    }}>\r
        Role-Based Access Control middleware for Express.js applications.\r
        Provides hierarchical roles, permission inheritance, and dynamic permission checking.\r
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
        <li>Hierarchical role system</li>\r
        <li>Permission inheritance</li>\r
        <li>Dynamic permission checking</li>\r
        <li>Role management</li>\r
        <li>User permission aggregation</li>\r
      </ul>\r
    </Card>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Initialize RBAC\r
      </Typography>\r
      <CodeExample code={initialize} />\r
    </Card>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var R,C,B;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Require Permission\r
      </Typography>\r
      <CodeExample code={requirePermission} />\r
    </Card>
}`,...(B=(C=t.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var A,w,j;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Require Role\r
      </Typography>\r
      <CodeExample code={requireRole} />\r
    </Card>
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var f,v,b;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Role Hierarchy and Inheritance\r
      </Typography>\r
      <CodeExample code={roleHierarchy} />\r
    </Card>
}`,...(b=(v=p.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var q,T,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Complete Example\r
      </Typography>\r
      <CodeExample code={completeExample} />\r
    </Card>
}`,...(M=(T=m.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};const G=["Overview","Initialize","RequirePermission","RequireRole","RoleHierarchy","CompleteExample"];export{m as CompleteExample,o as Initialize,n as Overview,t as RequirePermission,d as RequireRole,p as RoleHierarchy,G as __namedExportsOrder,W as default};
