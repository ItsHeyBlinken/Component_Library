import{s as c,j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{R as Le}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const Se=c.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e,size:a})=>{switch(a){case"xs":return e.spacing.xs;case"sm":return e.spacing.sm;case"lg":return e.spacing.lg;case"xl":return e.spacing.xl;default:return e.spacing.md}}};
  padding: ${({theme:e,size:a})=>{switch(a){case"xs":return e.spacing.xs;case"sm":return e.spacing.sm;case"lg":return e.spacing.lg;case"xl":return e.spacing.xl;default:return e.spacing.md}}};
  border-radius: ${({theme:e,rounded:a})=>a?e.borderRadius.lg:e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: ${({theme:e,size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.lg;case"xl":return e.typography.sizes.xl;default:return e.typography.sizes.md}}};
  line-height: 1.5;
  transition: all 0.2s ease-in-out;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  
  /* Variant styles */
  background-color: ${({variant:e,backgroundColor:a,theme:o})=>{if(a)return a;switch(e){case"success":return o.colors.success.light;case"error":return o.colors.error.light;case"warning":return o.colors.warning.light;case"info":return o.colors.info.light;case"secondary":return o.colors.secondary.light;default:return o.colors.primary.light}}};
  
  color: ${({variant:e,textColor:a,theme:o})=>{if(a)return a;switch(e){case"success":return o.colors.success.dark;case"error":return o.colors.error.dark;case"warning":return o.colors.warning.dark;case"info":return o.colors.info.dark;case"secondary":return o.colors.secondary.dark;default:return o.colors.primary.dark}}};
  
  border: ${({variant:e,borderColor:a,bordered:o,theme:i})=>o?`1px solid ${a||(()=>{switch(e){case"success":return i.colors.success.main;case"error":return i.colors.error.main;case"warning":return i.colors.warning.main;case"info":return i.colors.info.main;case"secondary":return i.colors.secondary.main;default:return i.colors.primary.main}})()}`:"none"};
  
  box-shadow: ${({theme:e,shadowed:a})=>a?e.shadows.md:"none"};
  
  /* Responsive design */
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing.xs};
  }
`,qe=c.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  cursor: ${({$disabled:e,$interactive:a})=>e?"not-allowed":a?"pointer":"default"};
  transition: all 0.2s ease-in-out;
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  
  /* Active state */
  font-weight: ${({$active:e})=>e?"600":"400"};
  color: ${({$active:e,theme:a})=>e?a.colors.primary.main:"inherit"};
  
  /* Hover effects */
  &:hover {
    ${({$disabled:e,$interactive:a})=>!e&&a&&`
      background-color: rgba(0, 0, 0, 0.1);
    `}
  }
  
  /* Focus indicators */
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  
  /* Disabled state */
  opacity: ${({$disabled:e})=>e?.5:1};
  
  /* Responsive design */
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.sizes.sm};
  }
`,ze=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({$size:e})=>{switch(e){case"xs":return"14px";case"sm":return"16px";case"lg":return"18px";case"xl":return"20px";default:return"16px"}}};
  height: ${({$size:e})=>{switch(e){case"xs":return"14px";case"sm":return"16px";case"lg":return"18px";case"xl":return"20px";default:return"16px"}}};
  font-size: ${({$size:e})=>{switch(e){case"xs":return"12px";case"sm":return"14px";case"lg":return"16px";case"xl":return"18px";default:return"14px"}}};
`,ke=c.span`
  ${({$truncate:e,$maxLength:a})=>e&&`
    max-width: ${a}px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`,Fe=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  opacity: 0.6;
  font-size: ${({$size:e})=>{switch(e){case"xs":return"10px";case"sm":return"12px";case"lg":return"14px";case"xl":return"16px";default:return"12px"}}};
  margin: 0 ${({theme:e})=>e.spacing.xs};
  
  /* Responsive design */
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin: 0 ${({theme:e})=>e.spacing.xs};
  }
`,Ae=c.a`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  text-decoration: none;
  color: inherit;
  cursor: ${({$disabled:e,$interactive:a})=>e?"not-allowed":a?"pointer":"default"};
  transition: all 0.2s ease-in-out;
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  
  /* Active state */
  font-weight: ${({$active:e})=>e?"600":"400"};
  color: ${({$active:e,theme:a})=>e?a.colors.primary.main:"inherit"};
  
  /* Hover effects */
  &:hover {
    ${({$disabled:e,$interactive:a})=>!e&&a&&`
      background-color: rgba(0, 0, 0, 0.1);
    `}
  }
  
  /* Focus indicators */
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  
  /* Disabled state */
  opacity: ${({$disabled:e})=>e?.5:1};
  
  /* Responsive design */
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.sizes.sm};
  }
`,n=({items:e,variant:a="primary",size:o="md",separator:i="/",showIcons:I=!0,showLabels:be=!0,fullWidth:fe=!1,bordered:ye=!1,shadowed:ge=!1,rounded:xe=!1,backgroundColor:we,textColor:ve,borderColor:Be,interactive:j=!0,onItemClick:W,showActiveIndicator:je=!0,showHoverEffects:Re=!0,showFocusIndicators:He=!0,truncateLabels:We=!1,maxLabelLength:Ie=100,...Ce})=>{const C=t=>{var d;t.disabled||((d=t.onClick)==null||d.call(t),W==null||W(t))},$e=(t,d)=>{const De=d===e.length-1,$=t.active&&je,D=t.disabled,Ve=t.href&&!De,V=r.jsxs(r.Fragment,{children:[I&&t.icon&&r.jsx(ze,{$size:o,children:t.icon}),be&&r.jsx(ke,{$truncate:We,$maxLength:Ie,children:t.label})]});return Ve?r.jsx(Ae,{href:t.href,target:t.target,$active:$,$disabled:D,$interactive:j,onClick:()=>C(t),children:V},t.id):r.jsx(qe,{$active:$,$disabled:D,$interactive:j,onClick:()=>C(t),style:t.customStyle,tabIndex:j?0:-1,children:V},t.id)};return r.jsx(Se,{variant:a,size:o,fullWidth:fe,bordered:ye,shadowed:ge,rounded:xe,backgroundColor:we,textColor:ve,borderColor:Be,"aria-label":"Breadcrumb navigation",...Ce,children:e.map((t,d)=>r.jsxs(Le.Fragment,{children:[$e(t,d),d<e.length-1&&r.jsx(Fe,{$size:o,children:i})]},t.id))})};try{n.displayName="Breadcrumb",n.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"Array of breadcrumb items to display",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},variant:{defaultValue:{value:"primary"},description:"The variant/style of the breadcrumb",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"The size of the breadcrumb",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},separator:{defaultValue:{value:"/"},description:"The separator between breadcrumb items",name:"separator",required:!1,type:{name:"ReactNode"}},showIcons:{defaultValue:{value:"true"},description:"Whether to show icons",name:"showIcons",required:!1,type:{name:"boolean"}},showLabels:{defaultValue:{value:"true"},description:"Whether to show labels",name:"showLabels",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Whether the breadcrumb is full width",name:"fullWidth",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"false"},description:"Whether the breadcrumb has a border",name:"bordered",required:!1,type:{name:"boolean"}},shadowed:{defaultValue:{value:"false"},description:"Whether the breadcrumb has a shadow",name:"shadowed",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"Whether the breadcrumb is rounded",name:"rounded",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"Custom background color",name:"backgroundColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"Custom text color",name:"textColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"Custom border color",name:"borderColor",required:!1,type:{name:"string"}},interactive:{defaultValue:{value:"true"},description:"Whether the breadcrumb is interactive",name:"interactive",required:!1,type:{name:"boolean"}},onItemClick:{defaultValue:null,description:"Callback when breadcrumb item is clicked",name:"onItemClick",required:!1,type:{name:"((item: BreadcrumbItem) => void)"}},showActiveIndicator:{defaultValue:{value:"true"},description:"Whether to show active indicators",name:"showActiveIndicator",required:!1,type:{name:"boolean"}},showHoverEffects:{defaultValue:{value:"true"},description:"Whether to show hover effects",name:"showHoverEffects",required:!1,type:{name:"boolean"}},showFocusIndicators:{defaultValue:{value:"true"},description:"Whether to show focus indicators",name:"showFocusIndicators",required:!1,type:{name:"boolean"}},truncateLabels:{defaultValue:{value:"false"},description:"Whether to truncate long labels",name:"truncateLabels",required:!1,type:{name:"boolean"}},maxLabelLength:{defaultValue:{value:"100"},description:"Maximum length for truncated labels",name:"maxLabelLength",required:!1,type:{name:"number"}},showBadges:{defaultValue:null,description:"Whether to show item badges",name:"showBadges",required:!1,type:{name:"boolean"}},showDescriptions:{defaultValue:null,description:"Whether to show item descriptions",name:"showDescriptions",required:!1,type:{name:"boolean"}},showCounts:{defaultValue:null,description:"Whether to show item counts",name:"showCounts",required:!1,type:{name:"boolean"}},showStatus:{defaultValue:null,description:"Whether to show item status",name:"showStatus",required:!1,type:{name:"boolean"}},showProgress:{defaultValue:null,description:"Whether to show item progress",name:"showProgress",required:!1,type:{name:"boolean"}},showLoading:{defaultValue:null,description:"Whether to show item loading",name:"showLoading",required:!1,type:{name:"boolean"}},showErrors:{defaultValue:null,description:"Whether to show item errors",name:"showErrors",required:!1,type:{name:"boolean"}},showWarnings:{defaultValue:null,description:"Whether to show item warnings",name:"showWarnings",required:!1,type:{name:"boolean"}},showSuccess:{defaultValue:null,description:"Whether to show item success",name:"showSuccess",required:!1,type:{name:"boolean"}},showInfo:{defaultValue:null,description:"Whether to show item info",name:"showInfo",required:!1,type:{name:"boolean"}},showSecondary:{defaultValue:null,description:"Whether to show item secondary",name:"showSecondary",required:!1,type:{name:"boolean"}},showTertiary:{defaultValue:null,description:"Whether to show item tertiary",name:"showTertiary",required:!1,type:{name:"boolean"}},showQuaternary:{defaultValue:null,description:"Whether to show item quaternary",name:"showQuaternary",required:!1,type:{name:"boolean"}},showQuinary:{defaultValue:null,description:"Whether to show item quinary",name:"showQuinary",required:!1,type:{name:"boolean"}},showSenary:{defaultValue:null,description:"Whether to show item senary",name:"showSenary",required:!1,type:{name:"boolean"}},showSeptenary:{defaultValue:null,description:"Whether to show item septenary",name:"showSeptenary",required:!1,type:{name:"boolean"}},showOctonary:{defaultValue:null,description:"Whether to show item octonary",name:"showOctonary",required:!1,type:{name:"boolean"}},showNonary:{defaultValue:null,description:"Whether to show item nonary",name:"showNonary",required:!1,type:{name:"boolean"}},showDenary:{defaultValue:null,description:"Whether to show item denary",name:"showDenary",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Qe={title:"Components/Navigation/Breadcrumb",component:n,parameters:{layout:"centered",docs:{description:{component:"A breadcrumb navigation component that shows the current page location within a website hierarchy. Features include icons, custom separators, and interactive navigation."}}},tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of breadcrumb items to display"},variant:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"],description:"The variant/style of the breadcrumb"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"The size of the breadcrumb"},separator:{control:{type:"text"},description:"The separator between breadcrumb items"},showIcons:{control:{type:"boolean"},description:"Whether to show icons"},showLabels:{control:{type:"boolean"},description:"Whether to show labels"},fullWidth:{control:{type:"boolean"},description:"Whether the breadcrumb is full width"},bordered:{control:{type:"boolean"},description:"Whether the breadcrumb has a border"},shadowed:{control:{type:"boolean"},description:"Whether the breadcrumb has a shadow"},rounded:{control:{type:"boolean"},description:"Whether the breadcrumb has rounded corners"},interactive:{control:{type:"boolean"},description:"Whether the breadcrumb is interactive"},showActiveIndicator:{control:{type:"boolean"},description:"Whether to show active indicators"},showHoverEffects:{control:{type:"boolean"},description:"Whether to show hover effects"},showFocusIndicators:{control:{type:"boolean"},description:"Whether to show focus indicators"},truncateLabels:{control:{type:"boolean"},description:"Whether to truncate long labels"},maxLabelLength:{control:{type:"number"},description:"Maximum length for truncated labels"}}},s=[{id:"home",label:"Home",icon:"🏠",href:"/"},{id:"products",label:"Products",icon:"📦",href:"/products"},{id:"electronics",label:"Electronics",icon:"📱",href:"/products/electronics"},{id:"smartphones",label:"Smartphones",icon:"📱",active:!0}],Ee=[{id:"home",label:"Home",icon:"🏠",href:"/"},{id:"blog",label:"Blog",icon:"📝",href:"/blog"},{id:"technology",label:"Technology",icon:"💻",href:"/blog/technology"},{id:"web-development",label:"Web Development",icon:"🌐",href:"/blog/technology/web-development"},{id:"react",label:"React Best Practices",icon:"⚛️",active:!0}],Te=[{id:"dashboard",label:"Dashboard",icon:"📊",href:"/admin"},{id:"users",label:"User Management",icon:"👥",href:"/admin/users"},{id:"user-details",label:"User Details",icon:"👤",href:"/admin/users/details"},{id:"edit-user",label:"Edit User Profile",icon:"✏️",active:!0}],Pe=[{id:"home",label:"Home",icon:"🏠",href:"/"},{id:"very-long-section",label:"This is a very long section name that might need truncation",icon:"📚",href:"/very-long-section"},{id:"another-long-section",label:"Another extremely long section name that demonstrates truncation",icon:"📖",href:"/very-long-section/another-long-section"},{id:"current-page",label:"Current page with a very long name that shows truncation in action",icon:"📍",active:!0}],l={render:()=>r.jsx(n,{items:s})},u={render:()=>r.jsx(n,{items:Ee,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Website navigation breadcrumb with multiple levels and styling."}}}},m={render:()=>r.jsx(n,{items:Te,variant:"secondary",bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Admin panel breadcrumb with secondary variant styling."}}}},h={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Extra Small"}),r.jsx(n,{items:s,size:"xs",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Small"}),r.jsx(n,{items:s,size:"sm",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Medium (Default)"}),r.jsx(n,{items:s,size:"md",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Large"}),r.jsx(n,{items:s,size:"lg",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Extra Large"}),r.jsx(n,{items:s,size:"xl",bordered:!0})]})]}),parameters:{docs:{description:{story:"Breadcrumb components with different sizes."}}}},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Primary"}),r.jsx(n,{items:s,variant:"primary",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Secondary"}),r.jsx(n,{items:s,variant:"secondary",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Success"}),r.jsx(n,{items:s,variant:"success",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Warning"}),r.jsx(n,{items:s,variant:"warning",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Error"}),r.jsx(n,{items:s,variant:"error",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Info"}),r.jsx(n,{items:s,variant:"info",bordered:!0})]})]}),parameters:{docs:{description:{story:"Breadcrumb components with different color variants."}}}},b={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Forward Slash (/)"}),r.jsx(n,{items:s,separator:"/",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Greater Than (>)"}),r.jsx(n,{items:s,separator:">",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Arrow (→)"}),r.jsx(n,{items:s,separator:"→",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Bullet (•)"}),r.jsx(n,{items:s,separator:"•",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Custom Icon (🎯)"}),r.jsx(n,{items:s,separator:"🎯",bordered:!0})]})]}),parameters:{docs:{description:{story:"Breadcrumb components with different separator styles."}}}},f={render:()=>r.jsx(n,{items:s,showIcons:!1,bordered:!0,shadowed:!0}),parameters:{docs:{description:{story:"Breadcrumb without icons, showing only labels."}}}},y={render:()=>r.jsx(n,{items:s,showLabels:!1,bordered:!0,shadowed:!0}),parameters:{docs:{description:{story:"Breadcrumb without labels, showing only icons."}}}},g={render:()=>r.jsx(n,{items:s,onItemClick:e=>alert(`${e.label} clicked!`),bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Interactive breadcrumb with click handlers."}}}},x={render:()=>r.jsx("div",{style:{width:"100%",maxWidth:"800px"},children:r.jsx(n,{items:s,fullWidth:!0,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Full width breadcrumb that spans its container."}}}},w={render:()=>r.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:r.jsx(n,{items:Pe,truncateLabels:!0,maxLabelLength:30,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Breadcrumb with truncated long labels."}}}},v={render:()=>r.jsx(n,{items:s,backgroundColor:"#f3e5f5",textColor:"#7b1fa2",borderColor:"#9c27b0",bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Breadcrumb with custom colors and styling."}}}},B={render:()=>{const e=[{id:"home",label:"Home",icon:"🏠",href:"/"},{id:"admin",label:"Admin",icon:"⚙️",href:"/admin"},{id:"content",label:"Content Management",icon:"📝",href:"/admin/content"},{id:"posts",label:"Posts",icon:"📄",href:"/admin/content/posts"},{id:"categories",label:"Categories",icon:"🏷️",href:"/admin/content/posts/categories"},{id:"technology",label:"Technology",icon:"💻",href:"/admin/content/posts/categories/technology"},{id:"web-development",label:"Web Development",icon:"🌐",href:"/admin/content/posts/categories/technology/web-development"},{id:"current-post",label:"Building a Component Library",icon:"📚",active:!0}];return r.jsx("div",{style:{width:"100%",maxWidth:"1000px"},children:r.jsx(n,{items:e,variant:"secondary",bordered:!0,shadowed:!0,rounded:!0,truncateLabels:!0,maxLabelLength:25})})},parameters:{docs:{description:{story:"Complex navigation path with many levels and truncation."}}}};var L,S,q;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={basicBreadcrumbItems} />
}`,...(q=(S=l.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var z,k,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={websiteBreadcrumbItems} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Website navigation breadcrumb with multiple levels and styling.'
      }
    }
  }
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var A,E,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={adminBreadcrumbItems} variant="secondary" bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Admin panel breadcrumb with secondary variant styling.'
      }
    }
  }
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var P,R,H;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <h4>Extra Small</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} size="xs" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Small</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} size="sm" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Medium (Default)</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} size="md" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Large</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} size="lg" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Extra Large</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} size="xl" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb components with different sizes.'
      }
    }
  }
}`,...(H=(R=h.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var N,_,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <h4>Primary</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} variant="primary" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Secondary</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} variant="secondary" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Success</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} variant="success" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Warning</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} variant="warning" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Error</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} variant="error" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Info</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} variant="info" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb components with different color variants.'
      }
    }
  }
}`,...(M=(_=p.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var Q,O,U;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <h4>Forward Slash (/)</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} separator="/" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Greater Than (&gt;)</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} separator=">" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Arrow (→)</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} separator="→" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Bullet (•)</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} separator="•" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Custom Icon (🎯)</h4>\r
        <Breadcrumb items={basicBreadcrumbItems} separator="🎯" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb components with different separator styles.'
      }
    }
  }
}`,...(U=(O=b.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={basicBreadcrumbItems} showIcons={false} bordered={true} shadowed={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb without icons, showing only labels.'
      }
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={basicBreadcrumbItems} showLabels={false} bordered={true} shadowed={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb without labels, showing only icons.'
      }
    }
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={basicBreadcrumbItems} onItemClick={item => alert(\`\${item.label} clicked!\`)} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive breadcrumb with click handlers.'
      }
    }
  }
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '800px'
  }}>\r
      <Breadcrumb items={basicBreadcrumbItems} fullWidth={true} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Full width breadcrumb that spans its container.'
      }
    }
  }
}`,...(se=(te=x.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ie,de;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>\r
      <Breadcrumb items={longLabelBreadcrumbItems} truncateLabels={true} maxLabelLength={30} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb with truncated long labels.'
      }
    }
  }
}`,...(de=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,le,ue;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={basicBreadcrumbItems} backgroundColor="#f3e5f5" textColor="#7b1fa2" borderColor="#9c27b0" bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb with custom colors and styling.'
      }
    }
  }
}`,...(ue=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var me,he,pe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const complexItems: BreadcrumbItem[] = [{
      id: 'home',
      label: 'Home',
      icon: '🏠',
      href: '/'
    }, {
      id: 'admin',
      label: 'Admin',
      icon: '⚙️',
      href: '/admin'
    }, {
      id: 'content',
      label: 'Content Management',
      icon: '📝',
      href: '/admin/content'
    }, {
      id: 'posts',
      label: 'Posts',
      icon: '📄',
      href: '/admin/content/posts'
    }, {
      id: 'categories',
      label: 'Categories',
      icon: '🏷️',
      href: '/admin/content/posts/categories'
    }, {
      id: 'technology',
      label: 'Technology',
      icon: '💻',
      href: '/admin/content/posts/categories/technology'
    }, {
      id: 'web-development',
      label: 'Web Development',
      icon: '🌐',
      href: '/admin/content/posts/categories/technology/web-development'
    }, {
      id: 'current-post',
      label: 'Building a Component Library',
      icon: '📚',
      active: true
    }];
    return <div style={{
      width: '100%',
      maxWidth: '1000px'
    }}>\r
        <Breadcrumb items={complexItems} variant="secondary" bordered={true} shadowed={true} rounded={true} truncateLabels={true} maxLabelLength={25} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex navigation path with many levels and truncation.'
      }
    }
  }
}`,...(pe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};const Oe=["Basic","WebsiteNavigation","AdminPanel","DifferentSizes","DifferentVariants","CustomSeparators","WithoutIcons","WithoutLabels","InteractiveBreadcrumb","FullWidthBreadcrumb","TruncatedLabels","CustomStyling","ComplexNavigationPath"];export{m as AdminPanel,l as Basic,B as ComplexNavigationPath,b as CustomSeparators,v as CustomStyling,h as DifferentSizes,p as DifferentVariants,x as FullWidthBreadcrumb,g as InteractiveBreadcrumb,w as TruncatedLabels,u as WebsiteNavigation,f as WithoutIcons,y as WithoutLabels,Oe as __namedExportsOrder,Qe as default};
