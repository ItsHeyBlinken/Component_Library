import{s as j,j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as t}from"./Card-956b6d64.js";import{T as o}from"./Typography-984ac10a.js";import{B as b}from"./Box-8deee1ca.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const B=j.pre`
  background: ${({theme:e})=>e.colors.background.paper};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({theme:e})=>e.spacing.md} 0;
`,v=j.button`
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
`,p=({code:e,title:d})=>{const T=()=>{navigator.clipboard.writeText(e),alert("Code copied to clipboard!")};return r.jsxs(b,{children:[d&&r.jsx(o,{variant:"h6",style:{marginBottom:"8px"},children:d}),r.jsx(B,{children:e}),r.jsx(v,{onClick:T,children:"Copy Code"})]})},P={title:"Backend Components/Security/SecurityMiddleware",parameters:{layout:"padded"},tags:["autodocs"]},M=`import express from 'express';
import { SecurityMiddleware } from 'backend-component-library';

const app = express();

// Apply security middleware (apply first, before routes)
app.use(SecurityMiddleware.helmet());      // Security headers
app.use(SecurityMiddleware.cors());       // CORS configuration
app.use(SecurityMiddleware.compression()); // Response compression
app.use(SecurityMiddleware.logging());    // HTTP request logging
app.use(SecurityMiddleware.securityHeaders); // Additional security headers
app.use(SecurityMiddleware.requestSizeLimit('10mb')); // Request size limit

// Health check endpoint
app.get('/health', SecurityMiddleware.healthCheck);`,R=`import { SecurityMiddleware } from 'backend-component-library';

// Custom CORS configuration
app.use(SecurityMiddleware.cors({
  origin: 'https://yourdomain.com',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['X-Total-Count'],
  maxAge: 86400 // 24 hours
}));`,E=`import express from 'express';
import { SecurityMiddleware } from 'backend-component-library';

const app = express();

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security middleware (apply in order)
app.use(SecurityMiddleware.helmet());
app.use(SecurityMiddleware.cors({
  origin: ({}).CORS_ORIGIN || '*',
  credentials: true
}));
app.use(SecurityMiddleware.compression());
app.use(SecurityMiddleware.logging());
app.use(SecurityMiddleware.securityHeaders);
app.use(SecurityMiddleware.requestSizeLimit('10mb'));

// Health check
app.get('/health', SecurityMiddleware.healthCheck);

// Your routes here
app.get('/api/data', (req, res) => {
  res.json({ message: 'Data' });
});

// 404 handler
app.use(SecurityMiddleware.notFound);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,a={render:()=>r.jsxs(t,{children:[r.jsx(o,{variant:"h3",style:{marginBottom:"16px"},children:"SecurityMiddleware"}),r.jsx(o,{variant:"body1",style:{marginBottom:"24px"},children:"Comprehensive security middleware for Express.js applications. Includes Helmet, CORS, compression, logging, and additional security headers."}),r.jsx(o,{variant:"h5",style:{marginTop:"32px",marginBottom:"16px"},children:"Features"}),r.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"24px"},children:[r.jsx("li",{children:"Helmet security headers"}),r.jsx("li",{children:"CORS configuration"}),r.jsx("li",{children:"Response compression"}),r.jsx("li",{children:"HTTP request logging"}),r.jsx("li",{children:"Request size limiting"}),r.jsx("li",{children:"Health check endpoint"})]})]})},i={render:()=>r.jsxs(t,{children:[r.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Basic Setup"}),r.jsx(p,{code:M})]})},n={render:()=>r.jsxs(t,{children:[r.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"CORS Configuration"}),r.jsx(p,{code:R})]})},s={render:()=>r.jsxs(t,{children:[r.jsx(o,{variant:"h4",style:{marginBottom:"16px"},children:"Complete Example"}),r.jsx(p,{code:E})]})};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h3" style={{
      marginBottom: '16px'
    }}>\r
        SecurityMiddleware\r
      </Typography>\r
      <Typography variant="body1" style={{
      marginBottom: '24px'
    }}>\r
        Comprehensive security middleware for Express.js applications.\r
        Includes Helmet, CORS, compression, logging, and additional security headers.\r
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
        <li>Helmet security headers</li>\r
        <li>CORS configuration</li>\r
        <li>Response compression</li>\r
        <li>HTTP request logging</li>\r
        <li>Request size limiting</li>\r
        <li>Health check endpoint</li>\r
      </ul>\r
    </Card>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,g,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Basic Setup\r
      </Typography>\r
      <CodeExample code={basicSetup} />\r
    </Card>
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,x,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        CORS Configuration\r
      </Typography>\r
      <CodeExample code={corsConfiguration} />\r
    </Card>
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,w,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Complete Example\r
      </Typography>\r
      <CodeExample code={completeExample} />\r
    </Card>
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const L=["Overview","BasicSetup","CORSConfiguration","CompleteExample"];export{i as BasicSetup,n as CORSConfiguration,s as CompleteExample,a as Overview,L as __namedExportsOrder,P as default};
