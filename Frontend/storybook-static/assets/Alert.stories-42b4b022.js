import{s as o,j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as Se}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const $e=o.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e,size:a})=>{switch(a){case"xs":return e.spacing.xs;case"sm":return e.spacing.sm;case"lg":return e.spacing.lg;case"xl":return e.spacing.xl;default:return e.spacing.md}}};
  padding: ${({theme:e,size:a})=>{switch(a){case"xs":return e.spacing.xs;case"sm":return e.spacing.sm;case"lg":return e.spacing.lg;case"xl":return e.spacing.xl;default:return e.spacing.md}}};
  border-radius: ${({theme:e,rounded:a})=>a?e.borderRadius.lg:e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: ${({theme:e,size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.lg;case"xl":return e.typography.sizes.xl;default:return e.typography.sizes.md}}};
  line-height: 1.5;
  transition: all 0.2s ease-in-out;
  position: relative;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  max-width: ${({fullWidth:e})=>e?"none":"600px"};
  
  /* Interactive styles */
  cursor: ${({$isInteractive:e})=>e?"pointer":"default"};
  
  &:hover {
    ${({$isInteractive:e,theme:a,shadowed:n})=>e&&n&&`
      box-shadow: ${a.shadows.lg};
      transform: translateY(-1px);
    `}
  }
  
  /* Variant styles */
  background-color: ${({variant:e,backgroundColor:a,filled:n,subtle:i,theme:s})=>{if(a)return a;if(i)switch(e){case"success":return s.colors.success.veryLight;case"error":return s.colors.error.veryLight;case"warning":return s.colors.warning.veryLight;case"info":return s.colors.info.veryLight;case"secondary":return s.colors.secondary.veryLight;default:return s.colors.primary.veryLight}if(n)switch(e){case"success":return s.colors.success.main;case"error":return s.colors.error.main;case"warning":return s.colors.warning.main;case"info":return s.colors.info.main;case"secondary":return s.colors.secondary.main;default:return s.colors.primary.main}return"transparent"}};
  
  color: ${({variant:e,textColor:a,filled:n,subtle:i,theme:s})=>{if(a)return a;if(n)return s.colors.white;if(i)switch(e){case"success":return s.colors.success.dark;case"error":return s.colors.error.dark;case"warning":return s.colors.warning.dark;case"info":return s.colors.info.dark;case"secondary":return s.colors.secondary.dark;default:return s.colors.primary.dark}switch(e){case"success":return s.colors.success.main;case"error":return s.colors.error.main;case"warning":return s.colors.warning.main;case"info":return s.colors.info.main;case"secondary":return s.colors.secondary.main;default:return s.colors.primary.main}}};
  
  border: ${({variant:e,borderColor:a,bordered:n,outlined:i,theme:s})=>{if(!n&&!i)return"none";const l=i?"2px":"1px",c="solid",d=a||(()=>{switch(e){case"success":return s.colors.success.main;case"error":return s.colors.error.main;case"warning":return s.colors.warning.main;case"info":return s.colors.info.main;case"secondary":return s.colors.secondary.main;default:return s.colors.primary.main}})();return`${l} ${c} ${d}`}};
  
  box-shadow: ${({theme:e,shadowed:a,variant:n})=>{if(!a)return"none";const i=n==="error"?e.colors.error.main:n==="warning"?e.colors.warning.main:n==="success"?e.colors.success.main:n==="info"?e.colors.info.main:n==="secondary"?e.colors.secondary.main:e.colors.primary.main;return`0 2px 8px rgba(${i}, 0.15), 0 1px 3px rgba(${i}, 0.1)`}};
  
  /* Responsive design */
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e,size:a})=>{switch(a){case"xs":return e.spacing.xs;case"sm":return e.spacing.sm;case"lg":return e.spacing.md;case"xl":return e.spacing.lg;default:return e.spacing.sm}}};
    font-size: ${({theme:e,size:a})=>{switch(a){case"xs":return e.typography.sizes.xs;case"sm":return e.typography.sizes.sm;case"lg":return e.typography.sizes.md;case"xl":return e.typography.sizes.lg;default:return e.typography.sizes.sm}}};
  }
`,qe=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({$size:e})=>{switch(e){case"xs":return"16px";case"sm":return"18px";case"lg":return"24px";case"xl":return"28px";default:return"20px"}}};
  height: ${({$size:e})=>{switch(e){case"xs":return"16px";case"sm":return"18px";case"lg":return"24px";case"xl":return"28px";default:return"20px"}}};
  font-size: ${({$size:e})=>{switch(e){case"xs":return"14px";case"sm":return"16px";case"lg":return"20px";case"xl":return"24px";default:return"18px"}}};
`,ze=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
`,Ie=o.div`
  font-weight: 600;
  font-size: ${({$size:e})=>{switch(e){case"xs":return"12px";case"sm":return"14px";case"lg":return"16px";case"xl":return"18px";default:return"14px"}}};
  line-height: 1.3;
`,Ve=o.div`
  word-wrap: break-word;
`,Pe=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-left: auto;
  flex-shrink: 0;
`,Re=o.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 4px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  opacity: 0.7;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
  }
  
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  
  width: ${({$size:e})=>{switch(e){case"xs":return"16px";case"sm":return"18px";case"lg":return"24px";case"xl":return"28px";default:return"20px"}}};
  height: ${({$size:e})=>{switch(e){case"xs":return"16px";case"sm":return"18px";case"lg":return"24px";case"xl":return"28px";default:return"20px"}}};
`,Fe=o.button`
  background: none;
  border: 1px solid currentColor;
  color: inherit;
  cursor: pointer;
  padding: ${({$size:e})=>{switch(e){case"xs":return"4px 8px";case"sm":return"6px 12px";case"lg":return"8px 16px";case"xl":return"10px 20px";default:return"6px 12px"}}};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-size: ${({$size:e})=>{switch(e){case"xs":return"11px";case"sm":return"12px";case"lg":return"14px";case"xl":return"16px";default:return"12px"}}};
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: currentColor;
    color: white;
  }
  
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,Le=o.div`
  width: ${({$size:e})=>{switch(e){case"xs":return"12px";case"sm":return"14px";case"lg":return"18px";case"xl":return"20px";default:return"14px"}}};
  height: ${({$size:e})=>{switch(e){case"xs":return"12px";case"sm":return"14px";case"lg":return"18px";case"xl":return"20px";default:return"14px"}}};
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,t=({title:e,message:a,variant:n="primary",size:i="md",dismissible:s=!1,onDismiss:l,icon:c,showCloseButton:d,bordered:pe=!0,shadowed:me=!1,filled:ge=!1,outlined:he=!1,backgroundColor:fe,textColor:xe,borderColor:ye,rounded:ve=!1,fullWidth:we=!1,subtle:be=!1,interactive:k=!1,onClick:j,showAction:Ae=!1,actionText:W="Action",onAction:T,loading:D=!1,loadingText:Te="Loading...",...Ce})=>{const ke=d!==void 0?d:s,S=()=>{if(c)return c;if(D)return r.jsx(Le,{$size:i});switch(n){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":return"ℹ";default:return null}},je=()=>{k&&j&&j()},We=C=>{C.stopPropagation(),l==null||l()},De=C=>{C.stopPropagation(),T==null||T()};return r.jsxs($e,{variant:n,size:i,backgroundColor:fe,textColor:xe,borderColor:ye,bordered:pe,shadowed:me,filled:ge,outlined:he,rounded:ve,fullWidth:we,subtle:be,$isInteractive:k,onClick:je,role:"alert","aria-live":"polite",...Ce,children:[S()&&r.jsx(qe,{$size:i,children:S()}),r.jsxs(ze,{children:[e&&r.jsx(Ie,{$size:i,children:e}),r.jsx(Ve,{children:D?Te:a})]}),r.jsxs(Pe,{children:[Ae&&r.jsx(Fe,{$size:i,onClick:De,"aria-label":W,children:W}),ke&&r.jsx(Re,{$size:i,onClick:We,"aria-label":"Close alert",children:"✕"})]})]})};try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"The title/heading of the alert",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The main message content",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"The type/variant of the alert",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"The size of the alert",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},dismissible:{defaultValue:{value:"false"},description:"Whether the alert can be dismissed",name:"dismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback when alert is dismissed",name:"onDismiss",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:null,description:"Custom icon to display",name:"icon",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:null,description:"Whether to show a close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"Whether the alert has a border",name:"bordered",required:!1,type:{name:"boolean"}},shadowed:{defaultValue:{value:"false"},description:"Whether the alert has a shadow",name:"shadowed",required:!1,type:{name:"boolean"}},filled:{defaultValue:{value:"false"},description:"Whether the alert is filled/colored",name:"filled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:{value:"false"},description:"Whether the alert is outlined",name:"outlined",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"Custom background color",name:"backgroundColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"Custom text color",name:"textColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"Custom border color",name:"borderColor",required:!1,type:{name:"string"}},rounded:{defaultValue:{value:"false"},description:"Whether the alert has rounded corners",name:"rounded",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Whether the alert is full width",name:"fullWidth",required:!1,type:{name:"boolean"}},subtle:{defaultValue:{value:"false"},description:"Whether the alert has a subtle appearance",name:"subtle",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:"Whether the alert is interactive (clickable)",name:"interactive",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Callback when alert is clicked (if interactive)",name:"onClick",required:!1,type:{name:"(() => void)"}},showAction:{defaultValue:{value:"false"},description:"Whether to show an action button",name:"showAction",required:!1,type:{name:"boolean"}},actionText:{defaultValue:{value:"Action"},description:"Action button text",name:"actionText",required:!1,type:{name:"string"}},onAction:{defaultValue:null,description:"Callback when action button is clicked",name:"onAction",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:{value:"false"},description:"Whether the alert is loading",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Loading..."},description:"Loading text to display",name:"loadingText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const _e={title:"Components/Feedback/Alert",component:t,parameters:{layout:"centered",docs:{description:{component:"An alert component that provides user notifications, warnings, and informational messages. Features include multiple variants, sizes, styling options, and interactive capabilities."}}},tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"The title/heading of the alert"},message:{control:{type:"text"},description:"The main message content"},variant:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"],description:"The type/variant of the alert"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"The size of the alert"},dismissible:{control:{type:"boolean"},description:"Whether the alert can be dismissed"},onDismiss:{action:"dismissed",description:"Callback when alert is dismissed"},showCloseButton:{control:{type:"boolean"},description:"Whether to show a close button"},bordered:{control:{type:"boolean"},description:"Whether the alert has a border"},shadowed:{control:{type:"boolean"},description:"Whether the alert has a shadow"},filled:{control:{type:"boolean"},description:"Whether the alert is filled/colored"},outlined:{control:{type:"boolean"},description:"Whether the alert is outlined"},backgroundColor:{control:{type:"color"},description:"Custom background color"},textColor:{control:{type:"color"},description:"Custom text color"},borderColor:{control:{type:"color"},description:"Custom border color"},rounded:{control:{type:"boolean"},description:"Whether the alert has rounded corners"},fullWidth:{control:{type:"boolean"},description:"Whether the alert is full width"},subtle:{control:{type:"boolean"},description:"Whether the alert has a subtle appearance"},interactive:{control:{type:"boolean"},description:"Whether the alert is interactive (clickable)"},onClick:{action:"clicked",description:"Callback when alert is clicked (if interactive)"},showAction:{control:{type:"boolean"},description:"Whether to show an action button"},actionText:{control:{type:"text"},description:"Action button text"},onAction:{action:"action clicked",description:"Callback when action button is clicked"},loading:{control:{type:"boolean"},description:"Whether the alert is loading"},loadingText:{control:{type:"text"},description:"Loading text to display"}}},u={render:()=>r.jsx(t,{message:"This is a basic alert message"})},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Success Alert",message:"Your action was completed successfully!",variant:"success"}),r.jsx(t,{title:"Warning Alert",message:"Please review your input before proceeding.",variant:"warning"}),r.jsx(t,{title:"Error Alert",message:"Something went wrong. Please try again.",variant:"error"}),r.jsx(t,{title:"Info Alert",message:"Here's some helpful information for you.",variant:"info"}),r.jsx(t,{title:"Secondary Alert",message:"This is a secondary notification.",variant:"secondary"}),r.jsx(t,{title:"Primary Alert",message:"This is the default primary alert.",variant:"primary"})]}),parameters:{docs:{description:{story:"Different alert variants with various colors and icons."}}}},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Extra Small",message:"This is an extra small alert",size:"xs"}),r.jsx(t,{title:"Small",message:"This is a small alert",size:"sm"}),r.jsx(t,{title:"Medium (Default)",message:"This is a medium alert, the default size",size:"md"}),r.jsx(t,{title:"Large",message:"This is a large alert",size:"lg"}),r.jsx(t,{title:"Extra Large",message:"This is an extra large alert",size:"xl"})]}),parameters:{docs:{description:{story:"Different alert sizes available."}}}},g={render:()=>{const[e,a]=Se.useState({success:!0,warning:!0,error:!0,info:!0}),n=i=>{a(s=>({...s,[i]:!1}))};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.success&&r.jsx(t,{title:"Success Alert",message:"This alert can be dismissed by clicking the close button.",variant:"success",dismissible:!0,onDismiss:()=>n("success")}),e.warning&&r.jsx(t,{title:"Warning Alert",message:"This alert can also be dismissed.",variant:"warning",dismissible:!0,onDismiss:()=>n("warning")}),e.error&&r.jsx(t,{title:"Error Alert",message:"This error alert can be dismissed too.",variant:"error",dismissible:!0,onDismiss:()=>n("error")}),e.info&&r.jsx(t,{title:"Info Alert",message:"This info alert can be dismissed as well.",variant:"info",dismissible:!0,onDismiss:()=>n("info")}),Object.values(e).every(i=>!i)&&r.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#666"},children:"All alerts have been dismissed. Refresh the page to see them again."})]})},parameters:{docs:{description:{story:"Dismissible alerts that can be closed by the user."}}}},h={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Subtle Alert",message:"This alert has a subtle appearance with light background colors.",variant:"info",subtle:!0}),r.jsx(t,{title:"Filled Alert",message:"This alert is filled with the variant color.",variant:"success",filled:!0}),r.jsx(t,{title:"Outlined Alert",message:"This alert has a thick outline border.",variant:"warning",outlined:!0}),r.jsx(t,{title:"Shadowed Alert",message:"This alert has a shadow effect.",variant:"primary",shadowed:!0}),r.jsx(t,{title:"Rounded Alert",message:"This alert has rounded corners.",variant:"secondary",rounded:!0}),r.jsx(t,{title:"No Border Alert",message:"This alert has no border.",variant:"info",bordered:!1})]}),parameters:{docs:{description:{story:"Different styling options for alerts."}}}},f={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Clickable Alert",message:"Click this alert to trigger an action!",variant:"primary",interactive:!0,onClick:()=>alert("Alert clicked!"),shadowed:!0}),r.jsx(t,{title:"Interactive Info Alert",message:"This alert is also clickable and will show a message.",variant:"info",interactive:!0,onClick:()=>alert("Info alert clicked!"),shadowed:!0})]}),parameters:{docs:{description:{story:"Interactive alerts that can be clicked."}}}},x={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Action Required",message:"Please review and approve this request.",variant:"warning",showAction:!0,actionText:"Review Now",onAction:()=>alert("Action button clicked!")}),r.jsx(t,{title:"Update Available",message:"A new version is available for download.",variant:"info",showAction:!0,actionText:"Download",onAction:()=>alert("Download started!")}),r.jsx(t,{title:"Permission Request",message:"This app needs access to your camera.",variant:"primary",showAction:!0,actionText:"Allow Access",onAction:()=>alert("Access granted!")})]}),parameters:{docs:{description:{story:"Alerts with action buttons for user interaction."}}}},y={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Processing Request",message:"Please wait while we process your request...",variant:"info",loading:!0,loadingText:"Processing..."}),r.jsx(t,{title:"Uploading Files",message:"Your files are being uploaded to the server.",variant:"success",loading:!0,loadingText:"Uploading..."}),r.jsx(t,{title:"Saving Changes",message:"Your changes are being saved automatically.",variant:"primary",loading:!0,loadingText:"Saving..."})]}),parameters:{docs:{description:{story:"Alerts that show loading states with spinners."}}}},v={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Custom Purple Alert",message:"This alert has custom purple colors.",backgroundColor:"#f3e5f5",textColor:"#7b1fa2",borderColor:"#9c27b0"}),r.jsx(t,{title:"Custom Blue Alert",message:"This alert has custom blue colors.",backgroundColor:"#e3f2fd",textColor:"#1976d2",borderColor:"#2196f3"}),r.jsx(t,{title:"Custom Green Alert",message:"This alert has custom green colors.",backgroundColor:"#e8f5e8",textColor:"#2e7d32",borderColor:"#4caf50"})]}),parameters:{docs:{description:{story:"Alerts with custom colors and styling."}}}},w={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[r.jsx(t,{title:"Full Width Success",message:"This alert spans the full width of its container.",variant:"success",fullWidth:!0}),r.jsx(t,{title:"Full Width Warning",message:"This warning alert also spans the full width.",variant:"warning",fullWidth:!0}),r.jsx(t,{title:"Full Width Info",message:"This info alert spans the full width as well.",variant:"info",fullWidth:!0})]}),parameters:{docs:{description:{story:"Full width alerts that span their container."}}}},b={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Important System Update",message:"This is a very long alert message that demonstrates how the component handles longer text content. The alert will automatically wrap the text and maintain its layout while ensuring readability for users. This is particularly useful for important notifications that require detailed explanations or instructions.",variant:"info",fullWidth:!0}),r.jsx(t,{title:"Terms of Service Update",message:"We have updated our terms of service to better protect your privacy and provide you with enhanced security features. These changes include improved data encryption, better privacy controls, and enhanced user rights. Please review the updated terms and accept them to continue using our services.",variant:"warning",showAction:!0,actionText:"Review Terms",onAction:()=>alert("Opening terms of service..."),fullWidth:!0})]}),parameters:{docs:{description:{story:"Alerts with long content to demonstrate text wrapping."}}}},A={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(t,{title:"Custom Icon Alert",message:"This alert uses a custom star icon instead of the default variant icon.",variant:"primary",icon:"⭐"}),r.jsx(t,{title:"Heart Icon Alert",message:"This alert uses a heart icon for a special message.",variant:"error",icon:"❤️"}),r.jsx(t,{title:"Rocket Icon Alert",message:"This alert uses a rocket icon for launch-related content.",variant:"success",icon:"🚀"})]}),parameters:{docs:{description:{story:"Alerts with custom icons instead of default variant icons."}}}};var $,q,z;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Alert message="This is a basic alert message" />
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var I,V,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Success Alert" message="Your action was completed successfully!" variant="success" />\r
      \r
      <Alert title="Warning Alert" message="Please review your input before proceeding." variant="warning" />\r
      \r
      <Alert title="Error Alert" message="Something went wrong. Please try again." variant="error" />\r
      \r
      <Alert title="Info Alert" message="Here's some helpful information for you." variant="info" />\r
      \r
      <Alert title="Secondary Alert" message="This is a secondary notification." variant="secondary" />\r
      \r
      <Alert title="Primary Alert" message="This is the default primary alert." variant="primary" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different alert variants with various colors and icons.'
      }
    }
  }
}`,...(P=(V=p.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var R,F,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Extra Small" message="This is an extra small alert" size="xs" />\r
      \r
      <Alert title="Small" message="This is a small alert" size="sm" />\r
      \r
      <Alert title="Medium (Default)" message="This is a medium alert, the default size" size="md" />\r
      \r
      <Alert title="Large" message="This is a large alert" size="lg" />\r
      \r
      <Alert title="Extra Large" message="This is an extra large alert" size="xl" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different alert sizes available.'
      }
    }
  }
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var E,B,U;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [alerts, setAlerts] = useState({
      success: true,
      warning: true,
      error: true,
      info: true
    });
    const dismissAlert = (key: keyof typeof alerts) => {
      setAlerts(prev => ({
        ...prev,
        [key]: false
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        {alerts.success && <Alert title="Success Alert" message="This alert can be dismissed by clicking the close button." variant="success" dismissible={true} onDismiss={() => dismissAlert('success')} />}\r
        \r
        {alerts.warning && <Alert title="Warning Alert" message="This alert can also be dismissed." variant="warning" dismissible={true} onDismiss={() => dismissAlert('warning')} />}\r
        \r
        {alerts.error && <Alert title="Error Alert" message="This error alert can be dismissed too." variant="error" dismissible={true} onDismiss={() => dismissAlert('error')} />}\r
        \r
        {alerts.info && <Alert title="Info Alert" message="This info alert can be dismissed as well." variant="info" dismissible={true} onDismiss={() => dismissAlert('info')} />}\r
        \r
        {Object.values(alerts).every(visible => !visible) && <div style={{
        textAlign: 'center',
        padding: '20px',
        color: '#666'
      }}>\r
            All alerts have been dismissed. Refresh the page to see them again.\r
          </div>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts that can be closed by the user.'
      }
    }
  }
}`,...(U=(B=g.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var _,N,O;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Subtle Alert" message="This alert has a subtle appearance with light background colors." variant="info" subtle={true} />\r
      \r
      <Alert title="Filled Alert" message="This alert is filled with the variant color." variant="success" filled={true} />\r
      \r
      <Alert title="Outlined Alert" message="This alert has a thick outline border." variant="warning" outlined={true} />\r
      \r
      <Alert title="Shadowed Alert" message="This alert has a shadow effect." variant="primary" shadowed={true} />\r
      \r
      <Alert title="Rounded Alert" message="This alert has rounded corners." variant="secondary" rounded={true} />\r
      \r
      <Alert title="No Border Alert" message="This alert has no border." variant="info" bordered={false} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different styling options for alerts.'
      }
    }
  }
}`,...(O=(N=h.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var Y,H,M;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Clickable Alert" message="Click this alert to trigger an action!" variant="primary" interactive={true} onClick={() => alert('Alert clicked!')} shadowed={true} />\r
      \r
      <Alert title="Interactive Info Alert" message="This alert is also clickable and will show a message." variant="info" interactive={true} onClick={() => alert('Info alert clicked!')} shadowed={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive alerts that can be clicked.'
      }
    }
  }
}`,...(M=(H=f.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Action Required" message="Please review and approve this request." variant="warning" showAction={true} actionText="Review Now" onAction={() => alert('Action button clicked!')} />\r
      \r
      <Alert title="Update Available" message="A new version is available for download." variant="info" showAction={true} actionText="Download" onAction={() => alert('Download started!')} />\r
      \r
      <Alert title="Permission Request" message="This app needs access to your camera." variant="primary" showAction={true} actionText="Allow Access" onAction={() => alert('Access granted!')} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts with action buttons for user interaction.'
      }
    }
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Processing Request" message="Please wait while we process your request..." variant="info" loading={true} loadingText="Processing..." />\r
      \r
      <Alert title="Uploading Files" message="Your files are being uploaded to the server." variant="success" loading={true} loadingText="Uploading..." />\r
      \r
      <Alert title="Saving Changes" message="Your changes are being saved automatically." variant="primary" loading={true} loadingText="Saving..." />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts that show loading states with spinners.'
      }
    }
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Custom Purple Alert" message="This alert has custom purple colors." backgroundColor="#f3e5f5" textColor="#7b1fa2" borderColor="#9c27b0" />\r
      \r
      <Alert title="Custom Blue Alert" message="This alert has custom blue colors." backgroundColor="#e3f2fd" textColor="#1976d2" borderColor="#2196f3" />\r
      \r
      <Alert title="Custom Green Alert" message="This alert has custom green colors." backgroundColor="#e8f5e8" textColor="#2e7d32" borderColor="#4caf50" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts with custom colors and styling.'
      }
    }
  }
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,ae,ne;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Alert title="Full Width Success" message="This alert spans the full width of its container." variant="success" fullWidth={true} />\r
      \r
      <Alert title="Full Width Warning" message="This warning alert also spans the full width." variant="warning" fullWidth={true} />\r
      \r
      <Alert title="Full Width Info" message="This info alert spans the full width as well." variant="info" fullWidth={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Full width alerts that span their container.'
      }
    }
  }
}`,...(ne=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,oe,le;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Important System Update" message="This is a very long alert message that demonstrates how the component handles longer text content. The alert will automatically wrap the text and maintain its layout while ensuring readability for users. This is particularly useful for important notifications that require detailed explanations or instructions." variant="info" fullWidth={true} />\r
      \r
      <Alert title="Terms of Service Update" message="We have updated our terms of service to better protect your privacy and provide you with enhanced security features. These changes include improved data encryption, better privacy controls, and enhanced user rights. Please review the updated terms and accept them to continue using our services." variant="warning" showAction={true} actionText="Review Terms" onAction={() => alert('Opening terms of service...')} fullWidth={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts with long content to demonstrate text wrapping.'
      }
    }
  }
}`,...(le=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,ue;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert title="Custom Icon Alert" message="This alert uses a custom star icon instead of the default variant icon." variant="primary" icon="⭐" />\r
      \r
      <Alert title="Heart Icon Alert" message="This alert uses a heart icon for a special message." variant="error" icon="❤️" />\r
      \r
      <Alert title="Rocket Icon Alert" message="This alert uses a rocket icon for launch-related content." variant="success" icon="🚀" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts with custom icons instead of default variant icons.'
      }
    }
  }
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Ne=["Basic","DifferentVariants","DifferentSizes","DismissibleAlerts","StylingOptions","InteractiveAlerts","AlertsWithActions","LoadingAlerts","CustomStyling","FullWidthAlerts","LongContentAlerts","AlertWithCustomIcon"];export{A as AlertWithCustomIcon,x as AlertsWithActions,u as Basic,v as CustomStyling,m as DifferentSizes,p as DifferentVariants,g as DismissibleAlerts,w as FullWidthAlerts,f as InteractiveAlerts,y as LoadingAlerts,b as LongContentAlerts,h as StylingOptions,Ne as __namedExportsOrder,_e as default};
