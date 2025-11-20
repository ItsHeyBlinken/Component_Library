import{s as b,j as l}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as we}from"./index-8b3efc3f.js";import{T as We}from"./ThemeProvider-c89a20b8.js";import"./_commonjsHelpers-de833af9.js";const Te=b.div`
  display: flex;
  flex-direction: column;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
`,ze=b.label`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: 500;
  color: ${({theme:e,error:a})=>a?e.colors.error:e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Fe=b.input`
  padding: ${({theme:e,size:a})=>a==="xs"?`${e.spacing.xs} ${e.spacing.sm}`:a==="sm"?`${e.spacing.sm} ${e.spacing.md}`:a==="lg"?`${e.spacing.md} ${e.spacing.lg}`:a==="xl"?`${e.spacing.lg} ${e.spacing.xl}`:`${e.spacing.sm} ${e.spacing.md}`};
  font-size: ${({theme:e,size:a})=>a==="xs"?e.typography.fontSize.xs:a==="sm"?e.typography.fontSize.sm:a==="lg"?e.typography.fontSize.lg:a==="xl"?e.typography.fontSize.xl:e.typography.fontSize.md};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  border: 2px solid ${({theme:e,hasError:a})=>a?e.colors.error:e.colors.background.secondary};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.colors.background.primary};
  color: ${({theme:e})=>e.colors.text.primary};
  width: 100%;
  transition: all 0.2s ease-in-out;
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.secondary};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.colors.background.secondary};
    color: ${({theme:e})=>e.colors.text.disabled};
    cursor: not-allowed;
  }
  
  &:read-only {
    background-color: ${({theme:e})=>e.colors.background.secondary};
  }
`,w=b.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e,error:a})=>a?e.colors.error:e.colors.text.secondary};
  margin-top: ${({theme:e})=>e.spacing.xs};
`,h=we.forwardRef(({type:e="text",placeholder:a,value:de,defaultValue:ce,onValueChange:$,onFocus:pe,onBlur:me,disabled:ge=!1,required:q=!1,readOnly:fe=!1,error:r,label:x,helperText:v,fullWidth:ye=!1,name:S,id:he,autoComplete:be,autoFocus:xe=!1,className:ve,style:$e,...qe},Se)=>{const s=he||S||`input-${Math.random().toString(36).substr(2,9)}`,V=`${s}-label`,E=`${s}-helper`,I=`${s}-error`,Ve=Ie=>{$&&$(Ie.target.value)},Ee=[v&&E,r&&I].filter(Boolean).join(" ")||void 0;return l.jsxs(Te,{fullWidth:ye,className:ve,style:$e,children:[x&&l.jsxs(ze,{htmlFor:s,id:V,error:r,children:[x,q&&l.jsx("span",{"aria-label":"required",children:" *"})]}),l.jsx(Fe,{ref:Se,id:s,type:e,placeholder:a,value:de,defaultValue:ce,onChange:Ve,onFocus:pe,onBlur:me,disabled:ge,required:q,readOnly:fe,name:S,autoComplete:be,autoFocus:xe,hasError:!!r,"aria-labelledby":x?V:void 0,"aria-describedby":Ee,"aria-invalid":!!r,...qe}),v&&!r&&l.jsx(w,{id:E,children:v}),r&&l.jsx(w,{error:r,id:I,children:r})]})});h.displayName="Input";try{h.displayName="Input",h.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"url"'},{value:'"search"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}const Ne={title:"Components/Common/Input",component:h,decorators:[e=>l.jsx(We,{children:l.jsx(e,{})})],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"]},variant:{control:{type:"select"},options:["primary","secondary","success","warning","error","info"]}}},n={args:{placeholder:"Enter text..."}},o={args:{label:"Email Address",placeholder:"Enter your email...",type:"email"}},t={args:{label:"Password",type:"password",placeholder:"Enter your password...",helperText:"Must be at least 8 characters long"}},i={args:{label:"Username",placeholder:"Enter username...",error:"Username is required"}},u={args:{label:"Full Name",placeholder:"Enter your full name...",required:!0}},d={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},c={args:{label:"Read Only",value:"This value cannot be changed",readOnly:!0}},p={args:{label:"Small Input",placeholder:"Small size..."}},m={args:{label:"Large Input",placeholder:"Large size..."}},g={args:{label:"Full Width Input",fullWidth:!0,placeholder:"This input takes full width..."}},f={args:{label:"Age",type:"number",placeholder:"Enter your age..."}},y={args:{label:"Search",type:"search",placeholder:"Search for something..."}};var W,T,z;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(z=(T=n.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var F,j,_;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email...',
    type: 'email'
  }
}`,...(_=(j=o.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var k,L,N;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    helperText: 'Must be at least 8 characters long'
  }
}`,...(N=(L=t.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,C,R;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username...',
    error: 'Username is required'
  }
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var D,A,B;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name...',
    required: true
  }
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var P,U,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...(H=(U=d.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var M,G,J;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Read Only',
    value: 'This value cannot be changed',
    readOnly: true
  }
}`,...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    placeholder: 'Small size...'
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    placeholder: 'Large size...'
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,le;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    fullWidth: true,
    placeholder: 'This input takes full width...'
  }
}`,...(le=(re=g.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ne,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age...'
  }
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,ie,ue;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search for something...'
  }
}`,...(ue=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const Oe=["Default","WithLabel","WithHelperText","WithError","Required","Disabled","ReadOnly","Small","Large","FullWidth","Number","Search"];export{n as Default,d as Disabled,g as FullWidth,m as Large,f as Number,c as ReadOnly,u as Required,y as Search,p as Small,i as WithError,t as WithHelperText,o as WithLabel,Oe as __namedExportsOrder,Ne as default};
