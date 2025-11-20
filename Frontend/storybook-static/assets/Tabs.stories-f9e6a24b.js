import{s as o,A as c,j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as h}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const Ue=o.div`
  display: flex;
  flex-direction: ${({$orientation:e})=>e==="vertical"?"row":"column"};
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  background: ${({theme:e,$customColors:a})=>{var n,t;return(a==null?void 0:a.backgroundColor)||((t=(n=e==null?void 0:e.colors)==null?void 0:n.background)==null?void 0:t.primary)||"#ffffff"}};
  border: ${({$bordered:e,theme:a,$customColors:n})=>e?`1px solid ${(n==null?void 0:n.borderColor)||a.colors.border}`:"none"};
  border-radius: ${({$rounded:e,theme:a})=>e?a.borderRadius.md:"0"};
  box-shadow: ${({$shadowed:e,theme:a})=>e?a.shadows.md:"none"};
  overflow: hidden;
  
  ${({$type:e,theme:a})=>{switch(e){case"card":return c`
          border-radius: ${a.borderRadius.md};
          overflow: hidden;
        `;case"text":return c`
          background: transparent;
          border: none;
          box-shadow: none;
        `;default:return""}}}
`,Je=o.div`
  display: flex;
  flex-direction: ${({$orientation:e})=>e==="vertical"?"column":"row"};
  ${({$orientation:e,$fullWidth:a})=>e==="horizontal"&&a?"width: 100%;":""};
  ${({$centered:e})=>e&&"justify-content: center;"};
  ${({$sticky:e})=>e&&"position: sticky; top: 0; z-index: 10;"};
  ${({$scrollable:e})=>e&&"overflow-x: auto;"};
  gap: ${({$tabBarGutter:e})=>e}px;
  background: ${({theme:e,$type:a,$customColors:n})=>a==="text"?"transparent":(n==null?void 0:n.backgroundColor)||e.colors.background.paper};
  
  ${({$type:e,theme:a,$customColors:n})=>{switch(e){case"card":return c`
          border-bottom: 1px solid ${(n==null?void 0:n.borderColor)||a.colors.border};
          padding: 0 ${a.spacing.md};
        `;case"line":return c`
          border-bottom: 2px solid ${(n==null?void 0:n.borderColor)||a.colors.border};
        `;default:return""}}}
`,Ke=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e,$size:a})=>{switch(a){case"xs":return`${e.spacing.xs} ${e.spacing.sm}`;case"sm":return`${e.spacing.sm} ${e.spacing.md}`;case"lg":return`${e.spacing.md} ${e.spacing.lg}`;case"xl":return`${e.spacing.lg} ${e.spacing.xl}`;default:return`${e.spacing.sm} ${e.spacing.md}`}}};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  user-select: none;
  transition: all 0.2s ease;
  position: relative;
  ${({$fullWidth:e})=>e&&"flex: 1; justify-content: center;"};
  
  color: ${({theme:e,$active:a,$disabled:n,$customColors:t})=>n?e.colors.text.disabled:a?(t==null?void 0:t.activeTextColor)||e.colors.text.primary:(t==null?void 0:t.inactiveTextColor)||e.colors.text.secondary};
  
  background: ${({theme:e,$active:a,$type:n,$customColors:t})=>n==="text"?"transparent":a?(t==null?void 0:t.activeTabColor)||e.colors.primary.light:"transparent"};
  
  ${({$type:e,theme:a,$active:n,$customColors:t})=>{switch(e){case"card":return c`
          border-radius: ${a.borderRadius.sm} ${a.borderRadius.sm} 0 0;
          border: 1px solid ${(t==null?void 0:t.borderColor)||a.colors.border};
          border-bottom: ${n?"none":`1px solid ${(t==null?void 0:t.borderColor)||a.colors.border}`};
          margin-bottom: -1px;
          background: ${n?a.colors.background.paper:"transparent"};
        `;case"line":return c`
          border-bottom: 2px solid ${n?(t==null?void 0:t.activeTabColor)||a.colors.primary.main:"transparent"};
          margin-bottom: -2px;
        `;default:return""}}}
  
  &:hover {
    ${({$disabled:e,theme:a,$customColors:n})=>!e&&c`
      color: ${(n==null?void 0:n.activeTextColor)||a.colors.text.primary};
      background: ${a.colors.background.hover};
    `};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
`,Qe=o.span`
  font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.lg;case"xl":return e.typography.sizes.xl;default:return e.typography.sizes.md}}};
`,Xe=o.span`
  font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.lg;case"xl":return e.typography.sizes.xl;default:return e.typography.sizes.md}}};
  font-weight: ${({theme:e})=>e.typography.weights.medium};
`,Ze=o.span`
  background: ${({theme:e})=>e.colors.error.main};
  color: ${({theme:e})=>e.colors.text.white};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  padding: 2px 6px;
  font-size: ${({theme:e,$size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.lg;case"xl":return e.typography.sizes.xl;default:return e.typography.sizes.md}}};
  min-width: 16px;
  text-align: center;
  line-height: 1;
`,er=o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  margin-left: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  color: inherit;
  opacity: 0.6;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    background: ${({theme:e})=>e.colors.background.hover};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
`,rr=o.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.md};
  ${({$animated:e})=>e&&"transition: all 0.3s ease;"};
  
  ${({$orientation:e})=>e==="vertical"&&c`
    margin-left: ${({theme:a})=>a.spacing.md};
  `};
`,ar=o.button`
  background: none;
  border: 1px dashed ${({theme:e})=>e.colors.border};
  cursor: pointer;
  padding: ${({theme:e,$size:a})=>{switch(a){case"xs":return`${e.spacing.xs} ${e.spacing.sm}`;case"sm":return`${e.spacing.sm} ${e.spacing.md}`;case"lg":return`${e.spacing.md} ${e.spacing.lg}`;case"xl":return`${e.spacing.lg} ${e.spacing.xl}`;default:return`${e.spacing.sm} ${e.spacing.md}`}}};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary.main};
    color: ${({theme:e})=>e.colors.primary.main};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
`,s=({items:e,defaultActiveTab:a,variant:n="primary",size:t="md",orientation:q="horizontal",fullWidth:k=!1,bordered:Be=!1,shadowed:Ee=!1,rounded:Re=!1,closable:Le=!1,addable:Pe=!1,draggable:ir=!1,animated:_e=!0,lazy:W=!1,onTabChange:D,onTabClose:P,onTabAdd:A,onTabReorder:dr,tabBarExtraContent:_,tabBarGutter:Fe=0,tabBarStyle:He,tabPosition:or="top",type:B="line",centered:F=!1,sticky:H=!1,scrollable:Ne=!1,showActiveIndicator:lr=!0,showHoverEffects:cr=!0,showFocusIndicators:pr=!0,customColors:E,...Ye})=>{var C;const[p,R]=h.useState(a||((C=e[0])==null?void 0:C.id)||""),[b,N]=h.useState(e),[Y,G]=h.useState(new Set([p]));h.useEffect(()=>{N(e),!a&&e.length>0&&(R(e[0].id),G(new Set([e[0].id])))},[e,a]);const Ge=i=>{var l;(l=b.find(u=>u.id===i))!=null&&l.disabled||(R(i),W&&!Y.has(i)&&G(u=>new Set([...u,i])),D==null||D(i))},Ce=(i,l)=>{if(i.stopPropagation(),P)P(l);else{const u=b.filter(Oe=>Oe.id!==l);N(u),p===l&&u.length>0&&R(u[0].id)}},Me=()=>{A==null||A()},L=b.find(i=>i.id===p);return b.length===0?null:r.jsxs(Ue,{$orientation:q,$fullWidth:k,$bordered:Be,$shadowed:Ee,$rounded:Re,$variant:n,$size:t,$type:B,$centered:F,$sticky:H,$customColors:E,...Ye,children:[r.jsxs(Je,{$orientation:q,$fullWidth:k,$type:B,$centered:F,$sticky:H,$scrollable:Ne,$tabBarGutter:Fe,$customColors:E,style:He,children:[b.map(i=>r.jsxs(Ke,{$active:i.id===p,$disabled:i.disabled||!1,$variant:n,$size:t,$type:B,$fullWidth:k,$customColors:E,onClick:()=>Ge(i.id),role:"tab","aria-selected":i.id===p,"aria-disabled":i.disabled,children:[i.icon&&r.jsx(Qe,{$size:t,children:i.icon}),r.jsx(Xe,{$size:t,children:i.label}),i.badge&&r.jsx(Ze,{$size:t,children:i.badge}),Le&&i.closable!==!1&&r.jsx(er,{$size:t,onClick:l=>Ce(l,i.id),"aria-label":`Close ${i.label} tab`,children:"×"})]},i.id)),Pe&&r.jsx(ar,{$size:t,onClick:Me,"aria-label":"Add new tab",children:"+"}),_&&r.jsx("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center"},children:_})]}),r.jsx(rr,{$orientation:q,$animated:_e,$lazy:W,role:"tabpanel","aria-labelledby":p,children:L&&(W?Y.has(p)?L.content:null:L.content)})]})};try{s.displayName="Tabs",s.__docgenInfo={description:"",displayName:"Tabs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},defaultActiveTab:{defaultValue:null,description:"",name:"defaultActiveTab",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},shadowed:{defaultValue:{value:"false"},description:"",name:"shadowed",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},closable:{defaultValue:{value:"false"},description:"",name:"closable",required:!1,type:{name:"boolean"}},addable:{defaultValue:{value:"false"},description:"",name:"addable",required:!1,type:{name:"boolean"}},draggable:{defaultValue:{value:"false"},description:"",name:"draggable",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean"}},lazy:{defaultValue:{value:"false"},description:"",name:"lazy",required:!1,type:{name:"boolean"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((activeTabId: string) => void)"}},onTabClose:{defaultValue:null,description:"",name:"onTabClose",required:!1,type:{name:"((tabId: string) => void)"}},onTabAdd:{defaultValue:null,description:"",name:"onTabAdd",required:!1,type:{name:"(() => void)"}},onTabReorder:{defaultValue:null,description:"",name:"onTabReorder",required:!1,type:{name:"((fromIndex: number, toIndex: number) => void)"}},tabBarExtraContent:{defaultValue:null,description:"",name:"tabBarExtraContent",required:!1,type:{name:"ReactNode"}},tabBarGutter:{defaultValue:{value:"0"},description:"",name:"tabBarGutter",required:!1,type:{name:"number"}},tabBarStyle:{defaultValue:null,description:"",name:"tabBarStyle",required:!1,type:{name:"CSSProperties"}},tabPosition:{defaultValue:{value:"top"},description:"",name:"tabPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"line"'},{value:'"card"'}]}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},sticky:{defaultValue:{value:"false"},description:"",name:"sticky",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}},showActiveIndicator:{defaultValue:{value:"true"},description:"",name:"showActiveIndicator",required:!1,type:{name:"boolean"}},showHoverEffects:{defaultValue:{value:"true"},description:"",name:"showHoverEffects",required:!1,type:{name:"boolean"}},showFocusIndicators:{defaultValue:{value:"true"},description:"",name:"showFocusIndicators",required:!1,type:{name:"boolean"}},customColors:{defaultValue:null,description:"",name:"customColors",required:!1,type:{name:"{ activeTabColor?: string; inactiveTabColor?: string; activeTextColor?: string | undefined; inactiveTextColor?: string | undefined; borderColor?: string | undefined; backgroundColor?: string | undefined; } | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const xr={title:"Components/Navigation/Tabs",component:s,parameters:{layout:"centered",docs:{description:{component:"A comprehensive tabs component that supports horizontal/vertical orientation, different styles, closable tabs, and various customization options."}}},tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of tab items to display"},variant:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"],description:"The variant/style of the tabs"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"The size of the tabs"},orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"The orientation of the tabs"},type:{control:{type:"select"},options:["line","card","text"],description:"The type/style of the tabs"},fullWidth:{control:{type:"boolean"},description:"Whether the tabs are full width"},bordered:{control:{type:"boolean"},description:"Whether the tabs have borders"},shadowed:{control:{type:"boolean"},description:"Whether the tabs have shadows"},rounded:{control:{type:"boolean"},description:"Whether the tabs have rounded corners"},closable:{control:{type:"boolean"},description:"Whether tabs can be closed"},addable:{control:{type:"boolean"},description:"Whether new tabs can be added"},animated:{control:{type:"boolean"},description:"Whether tab transitions are animated"},lazy:{control:{type:"boolean"},description:"Whether tab content is loaded lazily"},centered:{control:{type:"boolean"},description:"Whether tabs are centered"},sticky:{control:{type:"boolean"},description:"Whether the tab bar is sticky"},scrollable:{control:{type:"boolean"},description:"Whether the tab bar is scrollable"}}},d=[{id:"tab1",label:"First Tab",icon:"📱",content:r.jsxs("div",{children:[r.jsx("h3",{children:"First Tab Content"}),r.jsx("p",{children:"This is the content of the first tab. You can put any React components here."}),r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},{id:"tab2",label:"Second Tab",icon:"💻",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Second Tab Content"}),r.jsx("p",{children:"This is the content of the second tab. It can contain forms, tables, or any other content."}),r.jsx("button",{children:"Sample Button"})]})},{id:"tab3",label:"Third Tab",icon:"🎨",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Third Tab Content"}),r.jsx("p",{children:"This is the content of the third tab. You can even put complex components here."}),r.jsx("div",{style:{padding:"16px",background:"#f0f0f0",borderRadius:"8px"},children:r.jsx("p",{children:"This is a styled content box within the tab."})})]})}],nr=[{id:"tab1",label:"Home",icon:"🏠",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Home Content"}),r.jsx("p",{children:"Welcome to the home page!"})]}),closable:!0},{id:"tab2",label:"Profile",icon:"👤",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Profile Content"}),r.jsx("p",{children:"User profile information."})]}),closable:!0},{id:"tab3",label:"Settings",icon:"⚙️",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Settings Content"}),r.jsx("p",{children:"Application settings and preferences."})]}),closable:!0},{id:"tab4",label:"Help",icon:"❓",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Help Content"}),r.jsx("p",{children:"Help and documentation."})]}),closable:!0}],tr=[{id:"tab1",label:"Inbox",icon:"📥",badge:12,content:r.jsxs("div",{children:[r.jsx("h3",{children:"Inbox"}),r.jsx("p",{children:"You have 12 unread messages."})]})},{id:"tab2",label:"Sent",icon:"📤",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Sent"}),r.jsx("p",{children:"Your sent messages."})]})},{id:"tab3",label:"Drafts",icon:"📝",badge:3,content:r.jsxs("div",{children:[r.jsx("h3",{children:"Drafts"}),r.jsx("p",{children:"You have 3 draft messages."})]})},{id:"tab4",label:"Trash",icon:"🗑️",badge:"!",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Trash"}),r.jsx("p",{children:"Deleted messages."})]})}],sr=[{id:"tab1",label:"Active Tab",icon:"✅",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Active Tab"}),r.jsx("p",{children:"This tab is active and enabled."})]})},{id:"tab2",label:"Disabled Tab",icon:"❌",disabled:!0,content:r.jsxs("div",{children:[r.jsx("h3",{children:"Disabled Tab"}),r.jsx("p",{children:"This tab is disabled and cannot be accessed."})]})},{id:"tab3",label:"Another Active Tab",icon:"✅",content:r.jsxs("div",{children:[r.jsx("h3",{children:"Another Active Tab"}),r.jsx("p",{children:"This tab is also active and enabled."})]})}],x={render:()=>r.jsx("div",{style:{width:"600px"},children:r.jsx(s,{items:d})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"600px"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Line Tabs (Default)"}),r.jsx(s,{items:d,type:"line",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Card Tabs"}),r.jsx(s,{items:d,type:"card",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Text Tabs"}),r.jsx(s,{items:d,type:"text"})]})]}),parameters:{docs:{description:{story:"Tabs with different visual styles: line, card, and text."}}}},f={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"600px"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Extra Small"}),r.jsx(s,{items:d,size:"xs",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Small"}),r.jsx(s,{items:d,size:"sm",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Medium (Default)"}),r.jsx(s,{items:d,size:"md",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Large"}),r.jsx(s,{items:d,size:"lg",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Extra Large"}),r.jsx(s,{items:d,size:"xl",bordered:!0})]})]}),parameters:{docs:{description:{story:"Tabs with different sizes."}}}},y={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"600px"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Primary"}),r.jsx(s,{items:d,variant:"primary",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Secondary"}),r.jsx(s,{items:d,variant:"secondary",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Success"}),r.jsx(s,{items:d,variant:"success",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Warning"}),r.jsx(s,{items:d,variant:"warning",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Error"}),r.jsx(s,{items:d,variant:"error",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Info"}),r.jsx(s,{items:d,variant:"info",bordered:!0})]})]}),parameters:{docs:{description:{story:"Tabs with different color variants."}}}},v={render:()=>r.jsx("div",{style:{width:"600px"},children:r.jsx(s,{items:nr,closable:!0,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Tabs that can be closed by the user."}}}},g={render:()=>r.jsx("div",{style:{width:"600px"},children:r.jsx(s,{items:tr,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Tabs with notification badges."}}}},T={render:()=>r.jsx("div",{style:{width:"600px"},children:r.jsx(s,{items:sr,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Tabs with some disabled states."}}}},j={render:()=>r.jsx("div",{style:{width:"800px",height:"400px"},children:r.jsx(s,{items:d,orientation:"vertical",bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Tabs with vertical orientation."}}}},w={render:()=>r.jsx("div",{style:{width:"800px"},children:r.jsx(s,{items:d,fullWidth:!0,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Full width tabs that span the container."}}}},$={render:()=>r.jsx("div",{style:{width:"800px"},children:r.jsx(s,{items:d,centered:!0,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Centered tabs with equal spacing."}}}},z={render:()=>r.jsx("div",{style:{width:"600px"},children:r.jsx(s,{items:d,addable:!0,onTabAdd:()=>alert("Add new tab clicked!"),bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Tabs with an add button for creating new tabs."}}}},I={render:()=>r.jsx("div",{style:{width:"600px"},children:r.jsx(s,{items:d,lazy:!0,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Tabs with lazy loading - content is only loaded when tab is first accessed."}}}},S={render:()=>r.jsx("div",{style:{width:"600px"},children:r.jsx(s,{items:d,onTabChange:e=>console.log(`Tab changed to: ${e}`),bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Interactive tabs with change event handling."}}}},V={render:()=>r.jsx("div",{style:{width:"600px"},children:r.jsx(s,{items:d,tabBarExtraContent:r.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[r.jsx("button",{style:{padding:"4px 8px",fontSize:"12px"},children:"Refresh"}),r.jsx("button",{style:{padding:"4px 8px",fontSize:"12px"},children:"Settings"})]}),bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Tabs with extra content in the tab bar."}}}};var M,O,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Tabs items={basicTabItems} />\r
    </div>
}`,...(U=(O=x.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '600px'
  }}>\r
      <div>\r
        <h4>Line Tabs (Default)</h4>\r
        <Tabs items={basicTabItems} type="line" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Card Tabs</h4>\r
        <Tabs items={basicTabItems} type="card" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Text Tabs</h4>\r
        <Tabs items={basicTabItems} type="text" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with different visual styles: line, card, and text.'
      }
    }
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '600px'
  }}>\r
      <div>\r
        <h4>Extra Small</h4>\r
        <Tabs items={basicTabItems} size="xs" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Small</h4>\r
        <Tabs items={basicTabItems} size="sm" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Medium (Default)</h4>\r
        <Tabs items={basicTabItems} size="md" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Large</h4>\r
        <Tabs items={basicTabItems} size="lg" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Extra Large</h4>\r
        <Tabs items={basicTabItems} size="xl" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with different sizes.'
      }
    }
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,ne;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '600px'
  }}>\r
      <div>\r
        <h4>Primary</h4>\r
        <Tabs items={basicTabItems} variant="primary" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Secondary</h4>\r
        <Tabs items={basicTabItems} variant="secondary" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Success</h4>\r
        <Tabs items={basicTabItems} variant="success" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Warning</h4>\r
        <Tabs items={basicTabItems} variant="warning" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Error</h4>\r
        <Tabs items={basicTabItems} variant="error" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Info</h4>\r
        <Tabs items={basicTabItems} variant="info" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with different color variants.'
      }
    }
  }
}`,...(ne=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,ie;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Tabs items={closableTabItems} closable={true} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs that can be closed by the user.'
      }
    }
  }
}`,...(ie=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,oe,le;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Tabs items={tabItemsWithBadges} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with notification badges.'
      }
    }
  }
}`,...(le=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,pe,ue;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Tabs items={disabledTabItems} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with some disabled states.'
      }
    }
  }
}`,...(ue=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,he,xe;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '800px',
    height: '400px'
  }}>\r
      <Tabs items={basicTabItems} orientation="vertical" bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with vertical orientation.'
      }
    }
  }
}`,...(xe=(he=j.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var me,fe,ye;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '800px'
  }}>\r
      <Tabs items={basicTabItems} fullWidth={true} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Full width tabs that span the container.'
      }
    }
  }
}`,...(ye=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,ge,Te;$.parameters={...$.parameters,docs:{...(ve=$.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '800px'
  }}>\r
      <Tabs items={basicTabItems} centered={true} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Centered tabs with equal spacing.'
      }
    }
  }
}`,...(Te=(ge=$.parameters)==null?void 0:ge.docs)==null?void 0:Te.source}}};var je,we,$e;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Tabs items={basicTabItems} addable={true} onTabAdd={() => alert('Add new tab clicked!')} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with an add button for creating new tabs.'
      }
    }
  }
}`,...($e=(we=z.parameters)==null?void 0:we.docs)==null?void 0:$e.source}}};var ze,Ie,Se;I.parameters={...I.parameters,docs:{...(ze=I.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Tabs items={basicTabItems} lazy={true} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with lazy loading - content is only loaded when tab is first accessed.'
      }
    }
  }
}`,...(Se=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var Ve,qe,ke;S.parameters={...S.parameters,docs:{...(Ve=S.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Tabs items={basicTabItems} onTabChange={tabId => console.log(\`Tab changed to: \${tabId}\`)} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive tabs with change event handling.'
      }
    }
  }
}`,...(ke=(qe=S.parameters)==null?void 0:qe.docs)==null?void 0:ke.source}}};var We,De,Ae;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Tabs items={basicTabItems} tabBarExtraContent={<div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>\r
            <button style={{
        padding: '4px 8px',
        fontSize: '12px'
      }}>Refresh</button>\r
            <button style={{
        padding: '4px 8px',
        fontSize: '12px'
      }}>Settings</button>\r
          </div>} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with extra content in the tab bar.'
      }
    }
  }
}`,...(Ae=(De=V.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};const mr=["Basic","DifferentTabTypes","DifferentSizes","DifferentVariants","ClosableTabs","TabsWithBadges","DisabledTabs","VerticalTabs","FullWidthTabs","CenteredTabs","AddableTabs","LazyLoadingTabs","InteractiveTabs","TabsWithExtraContent"];export{z as AddableTabs,x as Basic,$ as CenteredTabs,v as ClosableTabs,f as DifferentSizes,m as DifferentTabTypes,y as DifferentVariants,T as DisabledTabs,w as FullWidthTabs,S as InteractiveTabs,I as LazyLoadingTabs,g as TabsWithBadges,V as TabsWithExtraContent,j as VerticalTabs,mr as __namedExportsOrder,xr as default};
