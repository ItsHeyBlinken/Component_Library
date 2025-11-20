import{s as x,A as Q,j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as R,R as Ze}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const er=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e,$compact:a})=>a?e.spacing.xs:e.spacing.sm};
  ${({$fullWidth:e})=>e&&"width: 100%; justify-content: center;"};
  ${({$centered:e})=>e&&"justify-content: center;"};
  padding: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.spacing.xs;case"sm":return e.spacing.sm;case"lg":return e.spacing.md;case"xl":return e.spacing.lg;default:return e.spacing.sm}}};
  background: ${({theme:e,$customColors:a})=>(a==null?void 0:a.backgroundColor)||e.colors.background.paper};
  border: ${({$bordered:e,theme:a,$customColors:n})=>e?`1px solid ${(n==null?void 0:n.borderColor)||a.colors.border}`:"none"};
  border-radius: ${({$rounded:e,theme:a})=>e?a.borderRadius.md:"0"};
  box-shadow: ${({$shadowed:e,theme:a})=>e?a.shadows.sm:"none"};
  
  ${({$simple:e})=>e&&Q`
    gap: ${({theme:a})=>a.spacing.xs};
  `};
`,P=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({$size:e,$compact:a})=>{if(a)return"28px";switch(e){case"xs":return"24px";case"sm":return"28px";case"lg":return"36px";case"xl":return"44px";default:return"32px"}}};
  height: ${({$size:e,$compact:a})=>{if(a)return"28px";switch(e){case"xs":return"24px";case"sm":return"28px";case"lg":return"36px";case"xl":return"44px";default:return"32px"}}};
  padding: ${({$size:e,$compact:a})=>{if(a)return"4px";switch(e){case"xs":return"2px 4px";case"sm":return"4px 6px";case"lg":return"6px 10px";case"xl":return"8px 12px";default:return"4px 8px"}}};
  border: 1px solid ${({theme:e,$customColors:a})=>(a==null?void 0:a.borderColor)||e.colors.border};
  border-radius: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.borderRadius.xs;case"sm":return e.borderRadius.sm;case"lg":return e.borderRadius.md;case"xl":return e.borderRadius.lg;default:return e.borderRadius.sm}}};
  background: ${({theme:e,$active:a,$customColors:n})=>a?(n==null?void 0:n.activePageColor)||e.colors.primary.main:e.colors.background.primary};
  color: ${({theme:e,$active:a,$disabled:n,$customColors:d})=>n?e.colors.text.disabled:a?(d==null?void 0:d.activeTextColor)||e.colors.text.white:(d==null?void 0:d.inactiveTextColor)||e.colors.text.primary};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.md;case"xl":return e.typography.sizes.lg;default:return e.typography.sizes.sm}}};
  font-weight: ${({theme:e,$active:a})=>a?e.typography.weights.semibold:e.typography.weights.normal};
  transition: all 0.2s ease;
  user-select: none;
  
  &:hover {
    ${({$disabled:e,theme:a,$customColors:n})=>!e&&Q`
      background: ${(n==null?void 0:n.activePageColor)||a.colors.primary.light};
      color: ${(n==null?void 0:n.activeTextColor)||a.colors.text.white};
      border-color: ${(n==null?void 0:n.activePageColor)||a.colors.primary.main};
    `};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
  
  ${({$simple:e})=>e&&Q`
    min-width: auto;
    padding: 4px 8px;
  `};
`,rr=x.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({$size:e})=>{switch(e){case"xs":return"24px";case"sm":return"28px";case"lg":return"36px";case"xl":return"44px";default:return"32px"}}};
  height: ${({$size:e})=>{switch(e){case"xs":return"24px";case"sm":return"28px";case"lg":return"36px";case"xl":return"44px";default:return"32px"}}};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.md;case"xl":return e.typography.sizes.lg;default:return e.typography.sizes.sm}}};
`,ar=x.select`
  padding: ${({$size:e})=>{switch(e){case"xs":return"2px 4px";case"sm":return"4px 6px";case"lg":return"6px 10px";case"xl":return"8px 12px";default:return"4px 6px"}}};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.background.paper};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.md;case"xl":return e.typography.sizes.lg;default:return e.typography.sizes.sm}}};
  cursor: pointer;
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
`,tr=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  
  input {
    width: 50px;
    padding: ${({$size:e})=>{switch(e){case"xs":return"2px 4px";case"sm":return"4px 6px";case"lg":return"6px 10px";case"xl":return"8px 12px";default:return"4px 6px"}}};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    background: ${({theme:e})=>e.colors.background.paper};
    color: ${({theme:e})=>e.colors.text.primary};
    font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.md;case"xl":return e.typography.sizes.lg;default:return e.typography.sizes.sm}}};
    text-align: center;
    
    &:focus {
      outline: 2px solid ${({theme:e})=>e.colors.primary.main};
      outline-offset: 2px;
    }
  }
  
  span {
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.md;case"xl":return e.typography.sizes.lg;default:return e.typography.sizes.sm}}};
  }
`,nr=x.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.md;case"xl":return e.typography.sizes.lg;default:return e.typography.sizes.sm}}};
  margin-right: ${({theme:e})=>e.spacing.md};
`,F=({currentPage:e,totalPages:a,totalItems:n,pageSize:d=10,variant:l="primary",size:c="md",showSizeChanger:C=!1,showQuickJumper:Ce=!1,showTotal:f=!1,showPrevNext:_=!0,showFirstLast:G=!1,showPageNumbers:E=!0,maxPageNumbers:y=7,pageSizeOptions:_e=[10,20,50,100],onPageChange:J,onPageSizeChange:L,disabled:p=!1,bordered:Ge=!1,shadowed:Be=!1,rounded:Ae=!1,fullWidth:Oe=!1,centered:Ke=!1,compact:g=!1,simple:u=!1,customColors:m,...He})=>{const[B,A]=R.useState(""),Ue=R.useMemo(()=>{if(u||!E)return[];const t=[],i=Math.floor(y/2);if(a<=y)for(let o=1;o<=a;o++)t.push(o);else if(e<=i+1){for(let o=1;o<=y-1;o++)t.push(o);t.push("..."),t.push(a)}else if(e>=a-i){t.push(1),t.push("...");for(let o=a-y+2;o<=a;o++)t.push(o)}else{t.push(1),t.push("...");for(let o=e-i;o<=e+i;o++)t.push(o);t.push("..."),t.push(a)}return t},[e,a,y,E,u]),h=t=>{p||t<1||t>a||t===e||J==null||J(t)},Xe=t=>{const i=parseInt(t.target.value);L==null||L(i)},Ye=t=>{if(t.key==="Enter"){const i=parseInt(B);i>=1&&i<=a&&(h(i),A(""))}},O=()=>{if(typeof f=="function"){const t=(e-1)*d+1,i=Math.min(e*d,n||0);return f(n||0,[t,i])}if(f&&n){const t=(e-1)*d+1,i=Math.min(e*d,n);return`Showing ${t}-${i} of ${n} items`}return null};return a<=1&&!f&&!C?null:r.jsxs(er,{$fullWidth:Oe,$centered:Ke,$bordered:Ge,$shadowed:Be,$rounded:Ae,$variant:l,$size:c,$compact:g,$simple:u,$customColors:m,...He,children:[f&&O()&&r.jsx(nr,{$size:c,children:O()}),C&&r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{color:"#666",fontSize:"12px"},children:"Show:"}),r.jsx(ar,{$size:c,value:d,onChange:Xe,disabled:p,children:_e.map(t=>r.jsx("option",{value:t,children:t},t))})]}),G&&r.jsx(P,{$active:!1,$disabled:p||e===1,$variant:l,$size:c,$compact:g,$simple:u,$customColors:m,onClick:()=>h(1),"aria-label":"Go to first page",children:"«"}),_&&r.jsx(P,{$active:!1,$disabled:p||e===1,$variant:l,$size:c,$compact:g,$simple:u,$customColors:m,onClick:()=>h(e-1),"aria-label":"Go to previous page",children:"‹"}),E&&!u&&Ue.map((t,i)=>r.jsx(Ze.Fragment,{children:t==="..."?r.jsx(rr,{$size:c,children:"…"}):r.jsx(P,{$active:t===e,$disabled:p,$variant:l,$size:c,$compact:g,$simple:u,$customColors:m,onClick:()=>h(t),"aria-label":`Go to page ${t}`,children:t})},i)),u&&r.jsxs("span",{style:{color:"#666",fontSize:"12px"},children:[e," / ",a]}),_&&r.jsx(P,{$active:!1,$disabled:p||e===a,$variant:l,$size:c,$compact:g,$simple:u,$customColors:m,onClick:()=>h(e+1),"aria-label":"Go to next page",children:"›"}),G&&r.jsx(P,{$active:!1,$disabled:p||e===a,$variant:l,$size:c,$compact:g,$simple:u,$customColors:m,onClick:()=>h(a),"aria-label":"Go to last page",children:"»"}),Ce&&r.jsxs(tr,{$size:c,children:[r.jsx("span",{children:"Go to:"}),r.jsx("input",{type:"text",value:B,onChange:t=>A(t.target.value),onKeyDown:Ye,placeholder:"Page",disabled:p})]})]})};try{F.displayName="Pagination",F.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!1,type:{name:"number"}},pageSize:{defaultValue:{value:"10"},description:"",name:"pageSize",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},showSizeChanger:{defaultValue:{value:"false"},description:"",name:"showSizeChanger",required:!1,type:{name:"boolean"}},showQuickJumper:{defaultValue:{value:"false"},description:"",name:"showQuickJumper",required:!1,type:{name:"boolean"}},showTotal:{defaultValue:{value:"false"},description:"",name:"showTotal",required:!1,type:{name:"boolean | ((total: number, range: [number, number]) => string)"}},showPrevNext:{defaultValue:{value:"true"},description:"",name:"showPrevNext",required:!1,type:{name:"boolean"}},showFirstLast:{defaultValue:{value:"false"},description:"",name:"showFirstLast",required:!1,type:{name:"boolean"}},showPageNumbers:{defaultValue:{value:"true"},description:"",name:"showPageNumbers",required:!1,type:{name:"boolean"}},maxPageNumbers:{defaultValue:{value:"7"},description:"",name:"maxPageNumbers",required:!1,type:{name:"number"}},pageSizeOptions:{defaultValue:{value:"[10, 20, 50, 100]"},description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"((page: number) => void)"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"((pageSize: number) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},shadowed:{defaultValue:{value:"false"},description:"",name:"shadowed",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},compact:{defaultValue:{value:"false"},description:"",name:"compact",required:!1,type:{name:"boolean"}},simple:{defaultValue:{value:"false"},description:"",name:"simple",required:!1,type:{name:"boolean"}},customColors:{defaultValue:null,description:"",name:"customColors",required:!1,type:{name:"{ activePageColor?: string; inactivePageColor?: string; activeTextColor?: string | undefined; inactiveTextColor?: string | undefined; borderColor?: string | undefined; backgroundColor?: string | undefined; } | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const dr={title:"Components/Navigation/Pagination",component:F,parameters:{layout:"centered",docs:{description:{component:"A comprehensive pagination component that supports various display options, page size selection, quick jumping, and customizable styling."}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"The current active page"},totalPages:{control:{type:"number",min:1},description:"The total number of pages"},totalItems:{control:{type:"number",min:0},description:"The total number of items"},pageSize:{control:{type:"number",min:1},description:"The number of items per page"},variant:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"],description:"The variant/style of the pagination"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"The size of the pagination"},showSizeChanger:{control:{type:"boolean"},description:"Whether to show page size selector"},showQuickJumper:{control:{type:"boolean"},description:"Whether to show quick jump input"},showTotal:{control:{type:"boolean"},description:"Whether to show total items info"},showPrevNext:{control:{type:"boolean"},description:"Whether to show previous/next buttons"},showFirstLast:{control:{type:"boolean"},description:"Whether to show first/last buttons"},showPageNumbers:{control:{type:"boolean"},description:"Whether to show page numbers"},maxPageNumbers:{control:{type:"number",min:3,max:15},description:"Maximum number of page numbers to show"},bordered:{control:{type:"boolean"},description:"Whether the pagination has borders"},shadowed:{control:{type:"boolean"},description:"Whether the pagination has shadows"},rounded:{control:{type:"boolean"},description:"Whether the pagination has rounded corners"},fullWidth:{control:{type:"boolean"},description:"Whether the pagination is full width"},centered:{control:{type:"boolean"},description:"Whether the pagination is centered"},compact:{control:{type:"boolean"},description:"Whether the pagination is compact"},simple:{control:{type:"boolean"},description:"Whether to use simple pagination style"}}},s=({currentPage:e,totalPages:a,...n})=>{const[d,l]=R.useState(e);return r.jsx(F,{currentPage:d,totalPages:a,onPageChange:l,...n})},b={render:()=>r.jsx(s,{currentPage:1,totalPages:10})},v={render:()=>r.jsx(s,{currentPage:1,totalPages:25,totalItems:250,showTotal:!0}),parameters:{docs:{description:{story:"Pagination showing total items count and current range."}}}},w={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Extra Small"}),r.jsx(s,{currentPage:1,totalPages:10,size:"xs",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Small"}),r.jsx(s,{currentPage:1,totalPages:10,size:"sm",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Medium (Default)"}),r.jsx(s,{currentPage:1,totalPages:10,size:"md",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Large"}),r.jsx(s,{currentPage:1,totalPages:10,size:"lg",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Extra Large"}),r.jsx(s,{currentPage:1,totalPages:10,size:"xl",bordered:!0})]})]}),parameters:{docs:{description:{story:"Pagination components with different sizes."}}}},j={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Primary"}),r.jsx(s,{currentPage:1,totalPages:10,variant:"primary",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Secondary"}),r.jsx(s,{currentPage:1,totalPages:10,variant:"secondary",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Success"}),r.jsx(s,{currentPage:1,totalPages:10,variant:"success",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Warning"}),r.jsx(s,{currentPage:1,totalPages:10,variant:"warning",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Error"}),r.jsx(s,{currentPage:1,totalPages:10,variant:"error",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Info"}),r.jsx(s,{currentPage:1,totalPages:10,variant:"info",bordered:!0})]})]}),parameters:{docs:{description:{story:"Pagination components with different color variants."}}}},z={render:()=>r.jsx(s,{currentPage:1,totalPages:25,totalItems:250,pageSize:10,showSizeChanger:!0,showTotal:!0,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Pagination with page size selector and total items display."}}}},$={render:()=>r.jsx(s,{currentPage:1,totalPages:50,showQuickJumper:!0,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Pagination with quick jump input for direct page navigation."}}}},S={render:()=>r.jsx(s,{currentPage:5,totalPages:20,showFirstLast:!0,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Pagination with first and last page navigation buttons."}}}},I={render:()=>r.jsx(s,{currentPage:1,totalPages:15,compact:!0,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Compact pagination with smaller spacing and buttons."}}}},q={render:()=>r.jsx(s,{currentPage:1,totalPages:20,simple:!0,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Simple pagination showing only current page and total pages."}}}},W={render:()=>r.jsx("div",{style:{width:"800px"},children:r.jsx(s,{currentPage:1,totalPages:15,fullWidth:!0,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Full width pagination that spans the container."}}}},k={render:()=>r.jsx("div",{style:{width:"800px"},children:r.jsx(s,{currentPage:1,totalPages:15,centered:!0,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Centered pagination with equal spacing."}}}},V={render:()=>r.jsx(s,{currentPage:50,totalPages:100,maxPageNumbers:7,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Pagination with many pages showing ellipsis for better navigation."}}}},T={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Max 5 Pages"}),r.jsx(s,{currentPage:10,totalPages:50,maxPageNumbers:5,bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Max 9 Pages"}),r.jsx(s,{currentPage:10,totalPages:50,maxPageNumbers:9,bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Max 11 Pages"}),r.jsx(s,{currentPage:10,totalPages:50,maxPageNumbers:11,bordered:!0})]})]}),parameters:{docs:{description:{story:"Pagination with different maximum page number displays."}}}},N={render:()=>r.jsx(s,{currentPage:1,totalPages:10,disabled:!0,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Disabled pagination that cannot be interacted with."}}}},M={render:()=>r.jsx(s,{currentPage:1,totalPages:25,totalItems:250,pageSize:10,showTotal:(e,[a,n])=>`${a}-${n} of ${e} results`,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Pagination with custom total display function."}}}},D={render:()=>r.jsx(s,{currentPage:7,totalPages:50,totalItems:500,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:!0,showFirstLast:!0,maxPageNumbers:9,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Complex pagination with all features enabled."}}}};var K,H,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={1} totalPages={10} />
}`,...(U=(H=b.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={1} totalPages={25} totalItems={250} showTotal={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing total items count and current range.'
      }
    }
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <div>\r
        <h4>Extra Small</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} size="xs" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Small</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} size="sm" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Medium (Default)</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} size="md" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Large</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} size="lg" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Extra Large</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} size="xl" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pagination components with different sizes.'
      }
    }
  }
}`,...(ae=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ne,se;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <div>\r
        <h4>Primary</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} variant="primary" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Secondary</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} variant="secondary" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Success</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} variant="success" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Warning</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} variant="warning" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Error</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} variant="error" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Info</h4>\r
        <InteractivePagination currentPage={1} totalPages={10} variant="info" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pagination components with different color variants.'
      }
    }
  }
}`,...(se=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,oe,de;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={1} totalPages={25} totalItems={250} pageSize={10} showSizeChanger={true} showTotal={true} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with page size selector and total items display.'
      }
    }
  }
}`,...(de=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,ue,le;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={1} totalPages={50} showQuickJumper={true} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with quick jump input for direct page navigation.'
      }
    }
  }
}`,...(le=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var pe,ge,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={5} totalPages={20} showFirstLast={true} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with first and last page navigation buttons.'
      }
    }
  }
}`,...(me=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,xe,fe;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={1} totalPages={15} compact={true} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Compact pagination with smaller spacing and buttons.'
      }
    }
  }
}`,...(fe=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ye,Pe,be;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={1} totalPages={20} simple={true} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Simple pagination showing only current page and total pages.'
      }
    }
  }
}`,...(be=(Pe=q.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};var ve,we,je;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '800px'
  }}>\r
      <InteractivePagination currentPage={1} totalPages={15} fullWidth={true} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Full width pagination that spans the container.'
      }
    }
  }
}`,...(je=(we=W.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var ze,$e,Se;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '800px'
  }}>\r
      <InteractivePagination currentPage={1} totalPages={15} centered={true} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Centered pagination with equal spacing.'
      }
    }
  }
}`,...(Se=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:Se.source}}};var Ie,qe,We;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={50} totalPages={100} maxPageNumbers={7} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many pages showing ellipsis for better navigation.'
      }
    }
  }
}`,...(We=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:We.source}}};var ke,Ve,Te;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <div>\r
        <h4>Max 5 Pages</h4>\r
        <InteractivePagination currentPage={10} totalPages={50} maxPageNumbers={5} bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Max 9 Pages</h4>\r
        <InteractivePagination currentPage={10} totalPages={50} maxPageNumbers={9} bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Max 11 Pages</h4>\r
        <InteractivePagination currentPage={10} totalPages={50} maxPageNumbers={11} bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with different maximum page number displays.'
      }
    }
  }
}`,...(Te=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:Te.source}}};var Ne,Me,De;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={1} totalPages={10} disabled={true} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Disabled pagination that cannot be interacted with.'
      }
    }
  }
}`,...(De=(Me=N.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Fe,Ee,Je;M.parameters={...M.parameters,docs:{...(Fe=M.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={1} totalPages={25} totalItems={250} pageSize={10} showTotal={(total, [start, end]) => \`\${start}-\${end} of \${total} results\`} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with custom total display function.'
      }
    }
  }
}`,...(Je=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:Je.source}}};var Le,Qe,Re;D.parameters={...D.parameters,docs:{...(Le=D.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <InteractivePagination currentPage={7} totalPages={50} totalItems={500} pageSize={10} showSizeChanger={true} showQuickJumper={true} showTotal={true} showFirstLast={true} maxPageNumbers={9} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Complex pagination with all features enabled.'
      }
    }
  }
}`,...(Re=(Qe=D.parameters)==null?void 0:Qe.docs)==null?void 0:Re.source}}};const cr=["Basic","WithTotalItems","DifferentSizes","DifferentVariants","WithPageSizeSelector","WithQuickJumper","WithFirstLastButtons","CompactPagination","SimplePagination","FullWidthPagination","CenteredPagination","ManyPagesWithEllipsis","CustomMaxPageNumbers","DisabledPagination","CustomTotalFunction","ComplexPaginationExample"];export{b as Basic,k as CenteredPagination,I as CompactPagination,D as ComplexPaginationExample,T as CustomMaxPageNumbers,M as CustomTotalFunction,w as DifferentSizes,j as DifferentVariants,N as DisabledPagination,W as FullWidthPagination,V as ManyPagesWithEllipsis,q as SimplePagination,S as WithFirstLastButtons,z as WithPageSizeSelector,$ as WithQuickJumper,v as WithTotalItems,cr as __namedExportsOrder,dr as default};
