import{s as E,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as t}from"./Card-956b6d64.js";import{T as o}from"./Typography-984ac10a.js";import{B as R}from"./Box-8deee1ca.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const I=E.pre`
  background: ${({theme:r})=>r.colors.background.paper};
  border: 1px solid ${({theme:r})=>r.colors.border};
  border-radius: ${({theme:r})=>r.borderRadius.md};
  padding: ${({theme:r})=>r.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({theme:r})=>r.spacing.md} 0;
`,j=E.button`
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
`,p=({code:r,title:d})=>{const A=()=>{navigator.clipboard.writeText(r),alert("Code copied to clipboard!")};return e.jsxs(R,{children:[d&&e.jsx(o,{variant:"h6",style:{marginBottom:"8px"},children:d}),e.jsx(I,{children:r}),e.jsx(j,{onClick:A,children:"Copy Code"})]})},$={title:"Backend Components/Security/OAuth2Middleware",parameters:{layout:"padded"},tags:["autodocs"]},L=`import { OAuth2Middleware } from 'backend-component-library';

// Register OAuth provider (e.g., Google)
OAuth2Middleware.registerProvider('google', {
  clientId: ({}).GOOGLE_CLIENT_ID!,
  clientSecret: ({}).GOOGLE_CLIENT_SECRET!,
  authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenURL: 'https://oauth2.googleapis.com/token',
  userInfoURL: 'https://www.googleapis.com/oauth2/v2/userinfo',
  redirectURI: 'http://localhost:3000/api/auth/google/callback',
  scope: ['email', 'profile'],
  pkce: true // Recommended for security
});`,U=`import { OAuth2Middleware } from 'backend-component-library';

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
);`,G=`import { OAuth2Middleware } from 'backend-component-library';

// Register multiple providers
OAuth2Middleware.registerProvider('google', {
  clientId: ({}).GOOGLE_CLIENT_ID!,
  clientSecret: ({}).GOOGLE_CLIENT_SECRET!,
  authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenURL: 'https://oauth2.googleapis.com/token',
  userInfoURL: 'https://www.googleapis.com/oauth2/v2/userinfo',
  redirectURI: 'http://localhost:3000/api/auth/google/callback',
  scope: ['email', 'profile'],
  pkce: true
});

OAuth2Middleware.registerProvider('github', {
  clientId: ({}).GITHUB_CLIENT_ID!,
  clientSecret: ({}).GITHUB_CLIENT_SECRET!,
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
});`,M=`import express from 'express';
import { OAuth2Middleware, AuthMiddleware } from 'backend-component-library';

const app = express();

// Initialize JWT auth
AuthMiddleware.initialize({
  secret: ({}).JWT_SECRET!,
  expiresIn: '24h'
});

// Register Google OAuth
OAuth2Middleware.registerProvider('google', {
  clientId: ({}).GOOGLE_CLIENT_ID!,
  clientSecret: ({}).GOOGLE_CLIENT_SECRET!,
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
);`,a={render:()=>e.jsxs(t,{children:[e.jsx(o,{variant:"h3",style:{marginBottom:"16px"},children:"OAuth2Middleware"}),e.jsx(o,{variant:"body1",style:{marginBottom:"24px"},children:"Handles OAuth 2.0 authentication flows with multiple providers (Google, GitHub, etc.). Supports PKCE, token refresh, state verification, and user info fetching."}),e.jsx(o,{variant:"h5",style:{marginTop:"32px",marginBottom:"16px"},children:"Features"}),e.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"24px"},children:[e.jsx("li",{children:"Multiple OAuth providers (Google, GitHub, etc.)"}),e.jsx("li",{children:"PKCE (Proof Key for Code Exchange) support"}),e.jsx("li",{children:"Token refresh handling"}),e.jsx("li",{children:"State verification for security"}),e.jsx("li",{children:"User info fetching"}),e.jsx("li",{children:"Scope validation"})]})]})},i={render:()=>e.jsxs(t,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Register OAuth Provider"}),e.jsx(p,{code:L})]})},n={render:()=>e.jsxs(t,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"OAuth Authorization Flow"}),e.jsx(p,{code:U})]})},s={render:()=>e.jsxs(t,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Multiple Providers"}),e.jsx(p,{code:G})]})},l={render:()=>e.jsxs(t,{children:[e.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Complete Example"}),e.jsx(p,{code:M})]})};var c,u,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h3" style={{
      marginBottom: '16px'
    }}>\r
        OAuth2Middleware\r
      </Typography>\r
      <Typography variant="body1" style={{
      marginBottom: '24px'
    }}>\r
        Handles OAuth 2.0 authentication flows with multiple providers (Google, GitHub, etc.).\r
        Supports PKCE, token refresh, state verification, and user info fetching.\r
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
        <li>Multiple OAuth providers (Google, GitHub, etc.)</li>\r
        <li>PKCE (Proof Key for Code Exchange) support</li>\r
        <li>Token refresh handling</li>\r
        <li>State verification for security</li>\r
        <li>User info fetching</li>\r
        <li>Scope validation</li>\r
      </ul>\r
    </Card>
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,m,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Register OAuth Provider\r
      </Typography>\r
      <CodeExample code={registerProvider} />\r
    </Card>
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var y,f,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        OAuth Authorization Flow\r
      </Typography>\r
      <CodeExample code={authorizationFlow} />\r
    </Card>
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,C,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Multiple Providers\r
      </Typography>\r
      <CodeExample code={multipleProviders} />\r
    </Card>
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var b,O,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Complete Example\r
      </Typography>\r
      <CodeExample code={completeExample} />\r
    </Card>
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const H=["Overview","RegisterProvider","AuthorizationFlow","MultipleProviders","CompleteExample"];export{n as AuthorizationFlow,l as CompleteExample,s as MultipleProviders,a as Overview,i as RegisterProvider,H as __namedExportsOrder,$ as default};
