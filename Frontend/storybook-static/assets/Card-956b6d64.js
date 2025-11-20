import{s as l,j as n}from"./styled-components.browser.esm-6cdfd3cd.js";const C=l.div`
  background-color: ${({theme:r})=>r.colors.background.paper};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  font-family: ${({theme:r})=>r.typography.fontFamily};
  
  /* Padding based on size */
  padding: ${({theme:r,padding:e,size:a})=>e==="none"?"0":e==="xs"?r.spacing.xs:e==="sm"?r.spacing.sm:e==="lg"?r.spacing.lg:e==="xl"?r.spacing.xl:a==="xs"?r.spacing.xs:a==="sm"?r.spacing.sm:a==="lg"?r.spacing.lg:a==="xl"?r.spacing.xl:r.spacing.md};
  
  /* Elevation and shadows */
  box-shadow: ${({elevation:r})=>r==="none"?"none":r==="sm"?"0 1px 3px rgba(0, 0, 0, 0.12)":r==="md"?"0 4px 6px rgba(0, 0, 0, 0.1)":r==="lg"?"0 10px 15px rgba(0, 0, 0, 0.1)":r==="xl"?"0 20px 25px rgba(0, 0, 0, 0.15)":"0 4px 6px rgba(0, 0, 0, 0.1)"};
  
  /* Border styling */
  border: ${({bordered:r,theme:e,variant:a})=>r?a==="primary"?`1px solid ${e.colors.primary}`:a==="secondary"?`1px solid ${e.colors.secondary}`:a==="success"?`1px solid ${e.colors.success}`:a==="warning"?`1px solid ${e.colors.warning}`:a==="error"?`1px solid ${e.colors.error}`:a==="info"?`1px solid ${e.colors.info}`:`1px solid ${e.colors.background.secondary}`:"none"};
  
  /* Interactive states */
  cursor: ${({interactive:r,onClick:e})=>r||e?"pointer":"default"};
  
  &:hover {
    ${({hoverable:r,interactive:e,onClick:a})=>r||e||a?`
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        `:""}
  }
  
  &:focus {
    ${({interactive:r,onClick:e,theme:a})=>r||e?`
      outline: 2px solid ${a.colors.primary.main};
      outline-offset: 2px;
    `:""}
  }
`,j=l.div`
  margin-bottom: ${({theme:r,size:e})=>e==="xs"?r.spacing.xs:e==="sm"?r.spacing.sm:e==="lg"?r.spacing.lg:e==="xl"?r.spacing.xl:r.spacing.md};
  
  h3 {
    margin: 0 0 ${({theme:r})=>r.spacing.xs} 0;
    font-size: ${({theme:r,size:e})=>e==="xs"?r.typography.fontSize.sm:e==="sm"?r.typography.fontSize.md:e==="lg"?r.typography.fontSize.lg:e==="xl"?r.typography.fontSize.xl:r.typography.fontSize.md};
    font-weight: 600;
    color: ${({theme:r})=>r.colors.text.primary};
  }
  
  p {
    margin: 0;
    font-size: ${({theme:r,size:e})=>e==="xs"?r.typography.fontSize.xs:e==="sm"?r.typography.fontSize.sm:e==="lg"?r.typography.fontSize.md:e==="xl"?r.typography.fontSize.lg:r.typography.fontSize.sm};
    color: ${({theme:r})=>r.colors.text.secondary};
  }
`,V=l.div`
  color: ${({theme:r})=>r.colors.text.primary};
  line-height: 1.5;
`,w=l.div`
  margin-top: ${({theme:r,size:e})=>e==="xs"?r.spacing.xs:e==="sm"?r.spacing.sm:e==="lg"?r.spacing.lg:e==="xl"?r.spacing.xl:r.spacing.md};
  padding-top: ${({theme:r,size:e})=>e==="xs"?r.spacing.xs:e==="sm"?r.spacing.sm:e==="lg"?r.spacing.lg:e==="xl"?r.spacing.xl:r.spacing.md};
  border-top: 1px solid ${({theme:r})=>r.colors.background.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,d=({children:r,title:e,subtitle:a,header:s,footer:o,padding:t="md",elevation:u="md",bordered:f=!1,hoverable:g=!1,onClick:p,interactive:c=!1,variant:x="primary",size:i="md",className:y,style:v,...m})=>{const $=()=>{p&&p()},b=e||a||s,q=o;return n.jsxs(C,{onClick:$,padding:t,elevation:u,bordered:f,hoverable:g,interactive:c,variant:x,size:i,className:y,style:v,...m,children:[b&&n.jsx(j,{size:i,children:s||n.jsxs(n.Fragment,{children:[e&&n.jsx("h3",{children:e}),a&&n.jsx("p",{children:a})]})}),n.jsx(V,{children:r}),q&&n.jsx(w,{size:i,children:o})]})};try{d.displayName="Card",d.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},padding:{defaultValue:{value:"md"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},elevation:{defaultValue:{value:"md"},description:"",name:"elevation",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"false"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},interactive:{defaultValue:{value:"false"},description:"",name:"interactive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{d as C};
