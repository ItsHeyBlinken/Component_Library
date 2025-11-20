import{s as E,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as t}from"./Card-956b6d64.js";import{T as a}from"./Typography-984ac10a.js";import{B as P}from"./Box-8deee1ca.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const k=E.pre`
  background: ${({theme:r})=>r.colors.background.paper};
  border: 1px solid ${({theme:r})=>r.colors.border};
  border-radius: ${({theme:r})=>r.borderRadius.md};
  padding: ${({theme:r})=>r.spacing.md};
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: ${({theme:r})=>r.spacing.md} 0;
`,$=E.button`
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
`,i=({code:r,title:p})=>{const M=()=>{navigator.clipboard.writeText(r),alert("Code copied to clipboard!")};return e.jsxs(P,{children:[p&&e.jsx(a,{variant:"h6",style:{marginBottom:"8px"},children:p}),e.jsx(k,{children:r}),e.jsx($,{onClick:M,children:"Copy Code"})]})},Z={title:"Backend Components/Validation/RequestValidator",parameters:{layout:"padded"},tags:["autodocs"]},z=`import { RequestValidator } from 'backend-component-library';

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
);`,A=`import { RequestValidator } from 'backend-component-library';

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
);`,N=`import { RequestValidator } from 'backend-component-library';

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
);`,Q=`// Available Validation Rules:

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
'status|required|in:active,inactive,pending'`,U=`import express from 'express';
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
);`,s={render:()=>e.jsxs(t,{children:[e.jsx(a,{variant:"h3",style:{marginBottom:"16px"},children:"RequestValidator"}),e.jsx(a,{variant:"body1",style:{marginBottom:"24px"},children:"Validates and sanitizes request data (body, query, params) with a flexible rule system. Provides built-in validation rules and sanitizers for common use cases."}),e.jsx(a,{variant:"h5",style:{marginTop:"32px",marginBottom:"16px"},children:"Features"}),e.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"24px"},children:[e.jsx("li",{children:"Request body validation"}),e.jsx("li",{children:"Query parameter validation"}),e.jsx("li",{children:"URL parameter validation"}),e.jsx("li",{children:"Built-in validation rules"}),e.jsx("li",{children:"Data sanitization"}),e.jsx("li",{children:"Custom error messages"})]})]})},n={render:()=>e.jsxs(t,{children:[e.jsx(a,{variant:"h4",style:{marginBottom:"16px"},children:"Validate Request Body"}),e.jsx(i,{code:z})]})},o={render:()=>e.jsxs(t,{children:[e.jsx(a,{variant:"h4",style:{marginBottom:"16px"},children:"Validate Query Parameters"}),e.jsx(i,{code:A})]})},d={render:()=>e.jsxs(t,{children:[e.jsx(a,{variant:"h4",style:{marginBottom:"16px"},children:"Validate URL Parameters"}),e.jsx(i,{code:N})]})},l={render:()=>e.jsxs(t,{children:[e.jsx(a,{variant:"h4",style:{marginBottom:"16px"},children:"Available Validation Rules"}),e.jsx(i,{code:Q})]})},m={render:()=>e.jsxs(t,{children:[e.jsx(a,{variant:"h4",style:{marginBottom:"16px"},children:"Complete Example"}),e.jsx(i,{code:U})]})};var u,c,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h3" style={{
      marginBottom: '16px'
    }}>\r
        RequestValidator\r
      </Typography>\r
      <Typography variant="body1" style={{
      marginBottom: '24px'
    }}>\r
        Validates and sanitizes request data (body, query, params) with a flexible rule system.\r
        Provides built-in validation rules and sanitizers for common use cases.\r
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
        <li>Request body validation</li>\r
        <li>Query parameter validation</li>\r
        <li>URL parameter validation</li>\r
        <li>Built-in validation rules</li>\r
        <li>Data sanitization</li>\r
        <li>Custom error messages</li>\r
      </ul>\r
    </Card>
}`,...(y=(c=s.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var g,x,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Validate Request Body\r
      </Typography>\r
      <CodeExample code={validateBody} />\r
    </Card>
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,v,q;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Validate Query Parameters\r
      </Typography>\r
      <CodeExample code={validateQuery} />\r
    </Card>
}`,...(q=(v=o.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var C,R,V;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Validate URL Parameters\r
      </Typography>\r
      <CodeExample code={validateParams} />\r
    </Card>
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var j,B,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Available Validation Rules\r
      </Typography>\r
      <CodeExample code={validationRules} />\r
    </Card>
}`,...(w=(B=l.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var f,T,L;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Typography variant="h4" style={{
      marginBottom: '16px'
    }}>\r
        Complete Example\r
      </Typography>\r
      <CodeExample code={completeExample} />\r
    </Card>
}`,...(L=(T=m.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const G=["Overview","ValidateBody","ValidateQuery","ValidateParams","ValidationRules","CompleteExample"];export{m as CompleteExample,s as Overview,n as ValidateBody,d as ValidateParams,o as ValidateQuery,l as ValidationRules,G as __namedExportsOrder,Z as default};
