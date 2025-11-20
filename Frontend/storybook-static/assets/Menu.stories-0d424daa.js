import{s as d,j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as h}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const _e=d.div`
  display: flex;
  flex-direction: ${({$orientation:e})=>e==="horizontal"?"row":"column"};
  align-items: ${({$orientation:e})=>e==="horizontal"?"center":"stretch"};
  gap: ${({theme:e,size:n})=>{switch(n){case"xs":return e.spacing.xs;case"sm":return e.spacing.sm;case"lg":return e.spacing.lg;case"xl":return e.spacing.xl;default:return e.spacing.md}}};
  padding: ${({theme:e,size:n})=>{switch(n){case"xs":return e.spacing.xs;case"sm":return e.spacing.sm;case"lg":return e.spacing.lg;case"xl":return e.spacing.xl;default:return e.spacing.md}}};
  border-radius: ${({theme:e,rounded:n})=>n?e.borderRadius.lg:e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: ${({theme:e,size:n})=>{switch(n){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.lg;case"xl":return e.typography.sizes.xl;default:return e.typography.sizes.md}}};
  line-height: 1.5;
  transition: all 0.2s ease-in-out;
  position: relative;
  width: ${({fullWidth:e,$collapsed:n,$orientation:o})=>e?"100%":"auto"};
  min-width: ${({$collapsed:e,$orientation:n})=>e&&n==="vertical"?"48px":"auto"};
  
  /* Variant styles */
  background-color: ${({variant:e,backgroundColor:n,theme:o})=>{if(n)return n;switch(e){case"success":return o.colors.success.light;case"error":return o.colors.error.light;case"warning":return o.colors.warning.light;case"info":return o.colors.info.light;case"secondary":return o.colors.secondary.light;default:return o.colors.primary.light}}};
  
  color: ${({variant:e,textColor:n,theme:o})=>{if(n)return n;switch(e){case"success":return o.colors.success.dark;case"error":return o.colors.error.dark;case"warning":return o.colors.warning.dark;case"info":return o.colors.info.dark;case"secondary":return o.colors.secondary.dark;default:return o.colors.primary.dark}}};
  
  border: ${({variant:e,borderColor:n,bordered:o,theme:i})=>o?`1px solid ${n||(()=>{switch(e){case"success":return i.colors.success.main;case"error":return i.colors.error.main;case"warning":return i.colors.warning.main;case"info":return i.colors.info.main;case"secondary":return i.colors.secondary.main;default:return i.colors.primary.main}})()}`:"none"};
  
  box-shadow: ${({theme:e,shadowed:n})=>n?e.shadows.md:"none"};
  
  /* Responsive design */
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`,Ne=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e,$collapsed:n,$orientation:o})=>n&&o==="vertical"?`${e.spacing.xs} ${e.spacing.xs}`:`${e.spacing.sm} ${e.spacing.md}`};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  position: relative;
  white-space: nowrap;
  min-width: ${({$collapsed:e,$orientation:n})=>e&&n==="vertical"?"32px":"auto"};
  
  /* Active state */
  background-color: ${({$active:e,theme:n})=>e?n.colors.primary.main:"transparent"};
  color: ${({$active:e,theme:n})=>e?n.colors.white:"inherit"};
  
  /* Hover effects */
  &:hover {
    ${({$disabled:e,$active:n})=>!e&&!n&&`
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
    width: 100%;
    justify-content: flex-start;
  }
`,Be=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({$size:e})=>{switch(e){case"xs":return"16px";case"sm":return"18px";case"lg":return"20px";case"xl":return"24px";default:return"18px"}}};
  height: ${({$size:e})=>{switch(e){case"xs":return"16px";case"sm":return"18px";case"lg":return"20px";case"xl":return"24px";default:return"18px"}}};
  font-size: ${({$size:e})=>{switch(e){case"xs":return"14px";case"sm":return"16px";case"lg":return"18px";case"xl":return"20px";default:return"16px"}}};
`,Te=d.span`
  display: ${({$collapsed:e,$orientation:n})=>e&&n==="vertical"?"none":"block"};
  font-weight: 500;
`,Qe=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  transition: transform 0.2s ease;
  transform: ${({$expanded:e,$orientation:n})=>n==="horizontal"?e?"rotate(90deg)":"rotate(0deg)":e?"rotate(180deg)":"rotate(0deg)"};
  
  &::after {
    content: '▶';
    font-size: 12px;
  }
`,Xe=d.div`
  position: ${({$orientation:e,$collapsed:n})=>n?"static":e==="horizontal"?"absolute":"static"};
  top: 100%;
  left: 0;
  background-color: inherit;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  min-width: 200px;
  z-index: 1000;
  opacity: ${({$expanded:e})=>e?1:0};
  visibility: ${({$expanded:e})=>e?"visible":"hidden"};
  transform: ${({$expanded:e,$orientation:n})=>n==="horizontal"?e?"translateY(0)":"translateY(-10px)":e?"translateX(0)":"translateX(-10px)"};
  transition: all 0.2s ease-in-out;
  
  ${({$collapsed:e,$orientation:n})=>e&&n==="vertical"&&`
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: ${({theme:o})=>o.spacing.xs};
  `}
`,Ye=d.div`
  height: 1px;
  background-color: currentColor;
  opacity: 0.2;
  margin: ${({theme:e})=>e.spacing.xs} 0;
`,s=({items:e,variant:n="primary",size:o="md",orientation:i="vertical",collapsed:c=!1,showIcons:ke=!0,showLabels:Ce=!0,fullWidth:Me=!1,bordered:Se=!1,shadowed:Ie=!1,rounded:We=!1,backgroundColor:De,textColor:je,borderColor:Ve,interactive:$e=!0,onItemClick:W,showActiveIndicator:ze=!0,showHoverEffects:Ge=!0,showFocusIndicators:Je=!0,autoExpandSubmenus:V=!1,closeOnClickOutside:$=!0,closeOnItemClick:Ee=!0,showSubmenuArrows:qe=!0,...Pe})=>{const[z,u]=h.useState(new Set),[Ke,E]=h.useState(null),D=h.useRef(null),Le=t=>{const l=new Set(z);l.has(t)?l.delete(t):l.add(t),u(l)},Ae=t=>{var l;t.disabled||(t.children&&t.children.length>0?Le(t.id):(Ee&&u(new Set),(l=t.onClick)==null||l.call(t),W==null||W(t)))},Fe=t=>{E(t),V&&u(l=>new Set([...l,t]))},Ue=t=>{E(null),V&&u(l=>{const m=new Set(l);return m.delete(t),m})};h.useEffect(()=>{if(!$)return;const t=l=>{D.current&&!D.current.contains(l.target)&&u(new Set)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[$]);const q=(t,l=0)=>{const m=t.children&&t.children.length>0,P=z.has(t.id),Re=t.active&&ze,He=t.disabled;return r.jsxs("div",{style:{position:"relative"},children:[r.jsxs(Ne,{$active:Re,$disabled:He,$orientation:i,$collapsed:c,onClick:()=>Ae(t),onMouseEnter:()=>Fe(t.id),onMouseLeave:()=>Ue(t.id),tabIndex:$e?0:-1,children:[ke&&t.icon&&r.jsx(Be,{$size:o,children:t.icon}),Ce&&r.jsx(Te,{$collapsed:c,$orientation:i,children:t.label}),qe&&m&&r.jsx(Qe,{$expanded:P,$orientation:i})]}),t.divider&&r.jsx(Ye,{}),m&&r.jsx(Xe,{$expanded:P,$orientation:i,$collapsed:c,children:t.children.map(Oe=>q(Oe,l+1))})]},t.id)};return r.jsx(_e,{ref:D,variant:n,size:o,orientation:i,collapsed:c,fullWidth:Me,bordered:Se,shadowed:Ie,rounded:We,backgroundColor:De,textColor:je,borderColor:Ve,$orientation:i,$collapsed:c,role:"menu","aria-orientation":i,...Pe,children:e.map(t=>q(t))})};try{s.displayName="Menu",s.__docgenInfo={description:"",displayName:"Menu",props:{items:{defaultValue:null,description:"Array of menu items to display",name:"items",required:!0,type:{name:"MenuItem[]"}},variant:{defaultValue:{value:"primary"},description:"The variant/style of the menu",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"The size of the menu",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},orientation:{defaultValue:{value:"vertical"},description:"Whether the menu is horizontal or vertical",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},collapsed:{defaultValue:{value:"false"},description:"Whether the menu is collapsed/condensed",name:"collapsed",required:!1,type:{name:"boolean"}},showIcons:{defaultValue:{value:"true"},description:"Whether to show icons",name:"showIcons",required:!1,type:{name:"boolean"}},showLabels:{defaultValue:{value:"true"},description:"Whether to show labels",name:"showLabels",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Whether the menu is full width",name:"fullWidth",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"false"},description:"Whether the menu has a border",name:"bordered",required:!1,type:{name:"boolean"}},shadowed:{defaultValue:{value:"false"},description:"Whether the menu has a shadow",name:"shadowed",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"Whether the menu is rounded",name:"rounded",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"Custom background color",name:"backgroundColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"Custom text color",name:"textColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"Custom border color",name:"borderColor",required:!1,type:{name:"string"}},interactive:{defaultValue:{value:"true"},description:"Whether the menu is interactive",name:"interactive",required:!1,type:{name:"boolean"}},onItemClick:{defaultValue:null,description:"Callback when menu item is clicked",name:"onItemClick",required:!1,type:{name:"((item: MenuItem) => void)"}},showActiveIndicator:{defaultValue:{value:"true"},description:"Whether to show active indicators",name:"showActiveIndicator",required:!1,type:{name:"boolean"}},showHoverEffects:{defaultValue:{value:"true"},description:"Whether to show hover effects",name:"showHoverEffects",required:!1,type:{name:"boolean"}},showFocusIndicators:{defaultValue:{value:"true"},description:"Whether to show focus indicators",name:"showFocusIndicators",required:!1,type:{name:"boolean"}},autoExpandSubmenus:{defaultValue:{value:"false"},description:"Whether to auto-expand submenus on hover",name:"autoExpandSubmenus",required:!1,type:{name:"boolean"}},closeOnClickOutside:{defaultValue:{value:"true"},description:"Whether to close submenus when clicking outside",name:"closeOnClickOutside",required:!1,type:{name:"boolean"}},closeOnItemClick:{defaultValue:{value:"true"},description:"Whether to close submenus when clicking item",name:"closeOnItemClick",required:!1,type:{name:"boolean"}},showSubmenuArrows:{defaultValue:{value:"true"},description:"Whether to show submenu arrows",name:"showSubmenuArrows",required:!1,type:{name:"boolean"}},showBadges:{defaultValue:null,description:"Whether to show item badges",name:"showBadges",required:!1,type:{name:"boolean"}},showDescriptions:{defaultValue:null,description:"Whether to show item descriptions",name:"showDescriptions",required:!1,type:{name:"boolean"}},showShortcuts:{defaultValue:null,description:"Whether to show item shortcuts",name:"showShortcuts",required:!1,type:{name:"boolean"}},showCounts:{defaultValue:null,description:"Whether to show item counts",name:"showCounts",required:!1,type:{name:"boolean"}},showStatus:{defaultValue:null,description:"Whether to show item status",name:"showStatus",required:!1,type:{name:"boolean"}},showProgress:{defaultValue:null,description:"Whether to show item progress",name:"showProgress",required:!1,type:{name:"boolean"}},showLoading:{defaultValue:null,description:"Whether to show item loading",name:"showLoading",required:!1,type:{name:"boolean"}},showErrors:{defaultValue:null,description:"Whether to show item errors",name:"showErrors",required:!1,type:{name:"boolean"}},showWarnings:{defaultValue:null,description:"Whether to show item warnings",name:"showWarnings",required:!1,type:{name:"boolean"}},showSuccess:{defaultValue:null,description:"Whether to show item success",name:"showSuccess",required:!1,type:{name:"boolean"}},showInfo:{defaultValue:null,description:"Whether to show item info",name:"showInfo",required:!1,type:{name:"boolean"}},showSecondary:{defaultValue:null,description:"Whether to show item secondary",name:"showSecondary",required:!1,type:{name:"boolean"}},showTertiary:{defaultValue:null,description:"Whether to show item tertiary",name:"showTertiary",required:!1,type:{name:"boolean"}},showQuaternary:{defaultValue:null,description:"Whether to show item quaternary",name:"showQuaternary",required:!1,type:{name:"boolean"}},showQuinary:{defaultValue:null,description:"Whether to show item quinary",name:"showQuinary",required:!1,type:{name:"boolean"}},showSenary:{defaultValue:null,description:"Whether to show item senary",name:"showSenary",required:!1,type:{name:"boolean"}},showSeptenary:{defaultValue:null,description:"Whether to show item septenary",name:"showSeptenary",required:!1,type:{name:"boolean"}},showOctonary:{defaultValue:null,description:"Whether to show item octonary",name:"showOctonary",required:!1,type:{name:"boolean"}},showNonary:{defaultValue:null,description:"Whether to show item nonary",name:"showNonary",required:!1,type:{name:"boolean"}},showDenary:{defaultValue:null,description:"Whether to show item denary",name:"showDenary",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const nr={title:"Components/Navigation/Menu",component:s,parameters:{layout:"centered",docs:{description:{component:"A comprehensive navigation menu component with support for submenus, icons, and various orientations. Features include horizontal/vertical layouts, collapsed states, and accessibility support."}}},tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of menu items to display"},variant:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"],description:"The variant/style of the menu"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"The size of the menu"},orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Whether the menu is horizontal or vertical"},collapsed:{control:{type:"boolean"},description:"Whether the menu is collapsed/condensed"},showIcons:{control:{type:"boolean"},description:"Whether to show icons"},showLabels:{control:{type:"boolean"},description:"Whether to show labels"},fullWidth:{control:{type:"boolean"},description:"Whether the menu is full width"},bordered:{control:{type:"boolean"},description:"Whether the menu has a border"},shadowed:{control:{type:"boolean"},description:"Whether the menu has a shadow"},rounded:{control:{type:"boolean"},description:"Whether the menu has rounded corners"},interactive:{control:{type:"boolean"},description:"Whether the menu is interactive"},showActiveIndicator:{control:{type:"boolean"},description:"Whether to show active indicators"},showHoverEffects:{control:{type:"boolean"},description:"Whether to show hover effects"},showFocusIndicators:{control:{type:"boolean"},description:"Whether to show focus indicators"},autoExpandSubmenus:{control:{type:"boolean"},description:"Whether to auto-expand submenus on hover"},closeOnClickOutside:{control:{type:"boolean"},description:"Whether to close submenus when clicking outside"},closeOnItemClick:{control:{type:"boolean"},description:"Whether to close submenus when clicking item"},showSubmenuArrows:{control:{type:"boolean"},description:"Whether to show submenu arrows"}}},a=[{id:"dashboard",label:"Dashboard",icon:"🏠",onClick:()=>alert("Dashboard clicked!")},{id:"analytics",label:"Analytics",icon:"📊",children:[{id:"reports",label:"Reports",icon:"📈",onClick:()=>alert("Reports clicked!")},{id:"insights",label:"Insights",icon:"💡",onClick:()=>alert("Insights clicked!")}]},{id:"users",label:"Users",icon:"👥",children:[{id:"manage",label:"Manage Users",icon:"⚙️",onClick:()=>alert("Manage Users clicked!")},{id:"permissions",label:"Permissions",icon:"🔐",onClick:()=>alert("Permissions clicked!")}]},{id:"divider1",divider:!0},{id:"settings",label:"Settings",icon:"⚙️",onClick:()=>alert("Settings clicked!")},{id:"help",label:"Help",icon:"❓",disabled:!0}],xe=[{id:"home",label:"Home",icon:"🏠",active:!0,onClick:()=>alert("Home clicked!")},{id:"about",label:"About",icon:"ℹ️",onClick:()=>alert("About clicked!")},{id:"services",label:"Services",icon:"🛠️",children:[{id:"web",label:"Web Development",icon:"🌐",onClick:()=>alert("Web Development clicked!")},{id:"mobile",label:"Mobile Apps",icon:"📱",onClick:()=>alert("Mobile Apps clicked!")},{id:"design",label:"UI/UX Design",icon:"🎨",onClick:()=>alert("UI/UX Design clicked!")}]},{id:"contact",label:"Contact",icon:"📞",onClick:()=>alert("Contact clicked!")}],j=[{id:"overview",label:"Overview",icon:"📋",active:!0,onClick:()=>alert("Overview clicked!")},{id:"users",label:"User Management",icon:"👥",children:[{id:"list",label:"User List",icon:"📝",onClick:()=>alert("User List clicked!")},{id:"create",label:"Create User",icon:"➕",onClick:()=>alert("Create User clicked!")},{id:"roles",label:"User Roles",icon:"🎭",onClick:()=>alert("User Roles clicked!")}]},{id:"content",label:"Content Management",icon:"📝",children:[{id:"posts",label:"Posts",icon:"📄",onClick:()=>alert("Posts clicked!")},{id:"media",label:"Media Library",icon:"🖼️",onClick:()=>alert("Media Library clicked!")}]},{id:"divider1",divider:!0},{id:"system",label:"System",icon:"⚙️",children:[{id:"logs",label:"System Logs",icon:"📊",onClick:()=>alert("System Logs clicked!")},{id:"backup",label:"Backup & Restore",icon:"💾",onClick:()=>alert("Backup & Restore clicked!")}]},{id:"logout",label:"Logout",icon:"🚪",onClick:()=>alert("Logout clicked!")}],p={render:()=>r.jsx(s,{items:a})},b={render:()=>r.jsx(s,{items:xe,orientation:"horizontal",fullWidth:!0,bordered:!0,shadowed:!0}),parameters:{docs:{description:{story:"Horizontal navigation menu with full width, border, and shadow."}}}},f={render:()=>r.jsx(s,{items:j,orientation:"vertical",bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Vertical admin menu with nested submenus, borders, and rounded corners."}}}},w={render:()=>r.jsx(s,{items:j,orientation:"vertical",collapsed:!0,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Collapsed vertical menu showing only icons."}}}},v={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Extra Small"}),r.jsx(s,{items:a,size:"xs",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Small"}),r.jsx(s,{items:a,size:"sm",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Medium (Default)"}),r.jsx(s,{items:a,size:"md",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Large"}),r.jsx(s,{items:a,size:"lg",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Extra Large"}),r.jsx(s,{items:a,size:"xl",bordered:!0})]})]}),parameters:{docs:{description:{story:"Menu components with different sizes."}}}},y={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Primary"}),r.jsx(s,{items:a,variant:"primary",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Secondary"}),r.jsx(s,{items:a,variant:"secondary",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Success"}),r.jsx(s,{items:a,variant:"success",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Warning"}),r.jsx(s,{items:a,variant:"warning",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Error"}),r.jsx(s,{items:a,variant:"error",bordered:!0})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Info"}),r.jsx(s,{items:a,variant:"info",bordered:!0})]})]}),parameters:{docs:{description:{story:"Menu components with different color variants."}}}},g={render:()=>r.jsx(s,{items:a,showIcons:!1,bordered:!0,shadowed:!0}),parameters:{docs:{description:{story:"Menu without icons, showing only labels."}}}},x={render:()=>r.jsx(s,{items:a,showLabels:!1,bordered:!0,shadowed:!0}),parameters:{docs:{description:{story:"Menu without labels, showing only icons."}}}},k={render:()=>{const[e,n]=h.useState("dashboard"),o=a.map(i=>({...i,active:i.id===e,onClick:()=>{n(i.id),alert(`${i.label} clicked!`)}}));return r.jsx(s,{items:o,onItemClick:i=>console.log("Item clicked:",i),bordered:!0,shadowed:!0,rounded:!0})},parameters:{docs:{story:"Interactive menu with active state management."}}},C={render:()=>r.jsx(s,{items:j,orientation:"vertical",autoExpandSubmenus:!0,bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Menu with auto-expanding submenus on hover."}}}},M={render:()=>r.jsx(s,{items:a,backgroundColor:"#f3e5f5",textColor:"#7b1fa2",borderColor:"#9c27b0",bordered:!0,shadowed:!0,rounded:!0}),parameters:{docs:{description:{story:"Menu with custom colors and styling."}}}},S={render:()=>r.jsx("div",{style:{width:"100%",maxWidth:"800px"},children:r.jsx(s,{items:xe,orientation:"horizontal",fullWidth:!0,bordered:!0,shadowed:!0,rounded:!0})}),parameters:{docs:{description:{story:"Full width horizontal navigation menu."}}}},I={render:()=>{const e=[{id:"dashboard",label:"Dashboard",icon:"🏠",active:!0,onClick:()=>alert("Dashboard clicked!")},{id:"content",label:"Content",icon:"📝",children:[{id:"posts",label:"Posts",icon:"📄",children:[{id:"create-post",label:"Create Post",icon:"✏️",onClick:()=>alert("Create Post clicked!")},{id:"edit-post",label:"Edit Post",icon:"🔧",onClick:()=>alert("Edit Post clicked!")},{id:"delete-post",label:"Delete Post",icon:"🗑️",onClick:()=>alert("Delete Post clicked!")}]},{id:"pages",label:"Pages",icon:"📖",children:[{id:"create-page",label:"Create Page",icon:"✏️",onClick:()=>alert("Create Page clicked!")},{id:"edit-page",label:"Edit Page",icon:"🔧",onClick:()=>alert("Edit Page clicked!")}]}]},{id:"users",label:"Users",icon:"👥",children:[{id:"user-list",label:"User List",icon:"📋",onClick:()=>alert("User List clicked!")},{id:"user-roles",label:"User Roles",icon:"🎭",children:[{id:"admin",label:"Administrator",icon:"👑",onClick:()=>alert("Administrator role clicked!")},{id:"editor",label:"Editor",icon:"✏️",onClick:()=>alert("Editor role clicked!")},{id:"viewer",label:"Viewer",icon:"👁️",onClick:()=>alert("Viewer role clicked!")}]}]},{id:"divider1",divider:!0},{id:"settings",label:"Settings",icon:"⚙️",onClick:()=>alert("Settings clicked!")}];return r.jsx(s,{items:e,orientation:"vertical",bordered:!0,shadowed:!0,rounded:!0,showSubmenuArrows:!0})},parameters:{docs:{description:{story:"Complex nested menu with multiple levels of submenus."}}}};var L,A,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Menu items={sampleMenuItems} />
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var U,R,H;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Menu items={navigationMenuItems} orientation="horizontal" fullWidth={true} bordered={true} shadowed={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Horizontal navigation menu with full width, border, and shadow.'
      }
    }
  }
}`,...(H=(R=b.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var O,_,N;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Menu items={adminMenuItems} orientation="vertical" bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Vertical admin menu with nested submenus, borders, and rounded corners.'
      }
    }
  }
}`,...(N=(_=f.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var B,T,Q;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Menu items={adminMenuItems} orientation="vertical" collapsed={true} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Collapsed vertical menu showing only icons.'
      }
    }
  }
}`,...(Q=(T=w.parameters)==null?void 0:T.docs)==null?void 0:Q.source}}};var X,Y,G;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <h4>Extra Small</h4>\r
        <Menu items={sampleMenuItems} size="xs" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Small</h4>\r
        <Menu items={sampleMenuItems} size="sm" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Medium (Default)</h4>\r
        <Menu items={sampleMenuItems} size="md" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Large</h4>\r
        <Menu items={sampleMenuItems} size="lg" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Extra Large</h4>\r
        <Menu items={sampleMenuItems} size="xl" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Menu components with different sizes.'
      }
    }
  }
}`,...(G=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,K,Z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <h4>Primary</h4>\r
        <Menu items={sampleMenuItems} variant="primary" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Secondary</h4>\r
        <Menu items={sampleMenuItems} variant="secondary" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Success</h4>\r
        <Menu items={sampleMenuItems} variant="success" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Warning</h4>\r
        <Menu items={sampleMenuItems} variant="warning" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Error</h4>\r
        <Menu items={sampleMenuItems} variant="error" bordered={true} />\r
      </div>\r
      \r
      <div>\r
        <h4>Info</h4>\r
        <Menu items={sampleMenuItems} variant="info" bordered={true} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Menu components with different color variants.'
      }
    }
  }
}`,...(Z=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var ee,re,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Menu items={sampleMenuItems} showIcons={false} bordered={true} shadowed={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Menu without icons, showing only labels.'
      }
    }
  }
}`,...(ne=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,oe,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Menu items={sampleMenuItems} showLabels={false} bordered={true} shadowed={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Menu without labels, showing only icons.'
      }
    }
  }
}`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ae,le;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    const interactiveItems = sampleMenuItems.map(item => ({
      ...item,
      active: item.id === activeItem,
      onClick: () => {
        setActiveItem(item.id);
        alert(\`\${item.label} clicked!\`);
      }
    }));
    return <Menu items={interactiveItems} onItemClick={item => console.log('Item clicked:', item)} bordered={true} shadowed={true} rounded={true} />;
  },
  parameters: {
    docs: {
      story: 'Interactive menu with active state management.'
    }
  }
}`,...(le=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var de,ce,ue;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <Menu items={adminMenuItems} orientation="vertical" autoExpandSubmenus={true} bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Menu with auto-expanding submenus on hover.'
      }
    }
  }
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,he,pe;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Menu items={sampleMenuItems} backgroundColor="#f3e5f5" textColor="#7b1fa2" borderColor="#9c27b0" bordered={true} shadowed={true} rounded={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Menu with custom colors and styling.'
      }
    }
  }
}`,...(pe=(he=M.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var be,fe,we;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '800px'
  }}>\r
      <Menu items={navigationMenuItems} orientation="horizontal" fullWidth={true} bordered={true} shadowed={true} rounded={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Full width horizontal navigation menu.'
      }
    }
  }
}`,...(we=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};var ve,ye,ge;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const complexItems: MenuItem[] = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: '🏠',
      active: true,
      onClick: () => alert('Dashboard clicked!')
    }, {
      id: 'content',
      label: 'Content',
      icon: '📝',
      children: [{
        id: 'posts',
        label: 'Posts',
        icon: '📄',
        children: [{
          id: 'create-post',
          label: 'Create Post',
          icon: '✏️',
          onClick: () => alert('Create Post clicked!')
        }, {
          id: 'edit-post',
          label: 'Edit Post',
          icon: '🔧',
          onClick: () => alert('Edit Post clicked!')
        }, {
          id: 'delete-post',
          label: 'Delete Post',
          icon: '🗑️',
          onClick: () => alert('Delete Post clicked!')
        }]
      }, {
        id: 'pages',
        label: 'Pages',
        icon: '📖',
        children: [{
          id: 'create-page',
          label: 'Create Page',
          icon: '✏️',
          onClick: () => alert('Create Page clicked!')
        }, {
          id: 'edit-page',
          label: 'Edit Page',
          icon: '🔧',
          onClick: () => alert('Edit Page clicked!')
        }]
      }]
    }, {
      id: 'users',
      label: 'Users',
      icon: '👥',
      children: [{
        id: 'user-list',
        label: 'User List',
        icon: '📋',
        onClick: () => alert('User List clicked!')
      }, {
        id: 'user-roles',
        label: 'User Roles',
        icon: '🎭',
        children: [{
          id: 'admin',
          label: 'Administrator',
          icon: '👑',
          onClick: () => alert('Administrator role clicked!')
        }, {
          id: 'editor',
          label: 'Editor',
          icon: '✏️',
          onClick: () => alert('Editor role clicked!')
        }, {
          id: 'viewer',
          label: 'Viewer',
          icon: '👁️',
          onClick: () => alert('Viewer role clicked!')
        }]
      }]
    }, {
      id: 'divider1',
      divider: true
    }, {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️',
      onClick: () => alert('Settings clicked!')
    }];
    return <Menu items={complexItems} orientation="vertical" bordered={true} shadowed={true} rounded={true} showSubmenuArrows={true} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex nested menu with multiple levels of submenus.'
      }
    }
  }
}`,...(ge=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};const tr=["Basic","HorizontalMenu","VerticalMenuWithSubmenus","CollapsedMenu","DifferentSizes","DifferentVariants","MenuWithoutIcons","MenuWithoutLabels","InteractiveMenu","AutoExpandSubmenus","CustomStyling","FullWidthMenu","ComplexNestedMenu"];export{C as AutoExpandSubmenus,p as Basic,w as CollapsedMenu,I as ComplexNestedMenu,M as CustomStyling,v as DifferentSizes,y as DifferentVariants,S as FullWidthMenu,b as HorizontalMenu,k as InteractiveMenu,g as MenuWithoutIcons,x as MenuWithoutLabels,f as VerticalMenuWithSubmenus,tr as __namedExportsOrder,nr as default};
