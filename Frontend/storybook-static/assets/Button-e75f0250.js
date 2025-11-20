import{s as o,j as n}from"./styled-components.browser.esm-6cdfd3cd.js";const x=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e,size:r})=>r==="xs"?`${e.spacing.xs} ${e.spacing.sm}`:r==="sm"?`${e.spacing.sm} ${e.spacing.md}`:r==="lg"?`${e.spacing.md} ${e.spacing.lg}`:r==="xl"?`${e.spacing.lg} ${e.spacing.xl}`:`${e.spacing.sm} ${e.spacing.md}`};
  font-size: ${({theme:e,size:r})=>r==="xs"?e.typography.fontSize.xs:r==="sm"?e.typography.fontSize.sm:r==="lg"?e.typography.fontSize.lg:r==="xl"?e.typography.fontSize.xl:e.typography.fontSize.md};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  
  /* Variant styles */
  background-color: ${({theme:e,variant:r,disabled:a})=>a?e.colors.background.secondary:r==="primary"?e.colors.primary:r==="secondary"?e.colors.secondary:r==="success"?e.colors.success:r==="warning"?e.colors.warning:r==="error"?e.colors.error:r==="info"?e.colors.info:e.colors.primary};
  
  color: ${({theme:e,variant:r,disabled:a})=>a?e.colors.text.disabled:"#ffffff"};
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
    outline-offset: 2px;
  }
`,b=o.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,s=({children:e,onClick:r,disabled:a=!1,loading:l=!1,fullWidth:u=!1,type:d="button",icon:i,iconPosition:t="left",variant:f="primary",size:p="md",className:c,style:y,...g})=>{const m=()=>{!a&&!l&&r&&r()},v=()=>l?n.jsxs(n.Fragment,{children:[n.jsx(b,{}),e]}):i?n.jsxs(n.Fragment,{children:[t==="left"&&i,e,t==="right"&&i]}):e;return n.jsx(x,{onClick:m,disabled:a||l,fullWidth:u,type:d,variant:f,size:p,className:c,style:y,...g,children:v()})};try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}export{s as B};
