import{s as u,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as p,R as Ve}from"./index-8b3efc3f.js";import{B as f}from"./Button-e75f0250.js";import"./_commonjsHelpers-de833af9.js";const ze=u.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: ${({theme:s,size:a})=>{switch(a){case"xs":return s.spacing.xs;case"sm":return s.spacing.sm;case"lg":return s.spacing.lg;case"xl":return s.spacing.xl;default:return s.spacing.md}}};
  border-radius: ${({theme:s})=>s.borderRadius.md};
  box-shadow: ${({theme:s})=>s.shadows.md};
  max-width: ${({maxWidth:s})=>s||"400px"};
  min-width: 300px;
  font-family: ${({theme:s})=>s.typography.fontFamily};
  font-size: ${({theme:s,size:a})=>{switch(a){case"xs":return s.typography.sizes.xs;case"sm":return s.typography.sizes.sm;case"lg":return s.typography.sizes.lg;case"xl":return s.typography.sizes.xl;default:return s.typography.sizes.md}}};
  line-height: 1.5;
  transition: all ${({animationDuration:s})=>s||300}ms ease-in-out;
  cursor: ${({dismissible:s})=>s?"pointer":"default"};
  
  /* Position styles */
  ${({$position:s})=>{switch(s){case"top-left":return`
          top: 20px;
          left: 20px;
        `;case"top-right":return`
          top: 20px;
          right: 20px;
        `;case"top-center":return`
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
        `;case"bottom-left":return`
          bottom: 20px;
          left: 20px;
        `;case"bottom-right":return`
          bottom: 20px;
          right: 20px;
        `;case"bottom-center":return`
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        `;default:return`
          top: 20px;
          right: 20px;
        `}}}
  
  /* Variant styles */
  background-color: ${({variant:s,backgroundColor:a,theme:r})=>{if(a)return a;switch(s){case"success":return r.colors.success.light;case"error":return r.colors.error.light;case"warning":return r.colors.warning.light;case"info":return r.colors.info.light;case"secondary":return r.colors.secondary.light;default:return r.colors.primary.light}}};
  
  color: ${({variant:s,textColor:a,theme:r})=>{if(a)return a;switch(s){case"success":return r.colors.success.dark;case"error":return r.colors.error.dark;case"warning":return r.colors.warning.dark;case"info":return r.colors.info.dark;case"secondary":return r.colors.secondary.dark;default:return r.colors.primary.dark}}};
  
  border: 1px solid ${({variant:s,borderColor:a,theme:r})=>{if(a)return a;switch(s){case"success":return r.colors.success.main;case"error":return r.colors.error.main;case"warning":return r.colors.warning.main;case"info":return r.colors.info.main;case"secondary":return r.colors.secondary.main;default:return r.colors.primary.main}}};
  
  /* Visibility and animation */
  opacity: ${({$isVisible:s})=>s?1:0};
  transform: ${({$isVisible:s,$position:a})=>s?"none":a.includes("top")?"translateY(-100%)":a.includes("bottom")?"translateY(100%)":a.includes("left")?"translateX(-100%)":a.includes("right")?"translateX(100%)":"scale(0.8)"};
  
  /* Hover effects */
  &:hover {
    box-shadow: ${({theme:s})=>s.shadows.lg};
    transform: ${({$position:s,$isVisible:a})=>a?s.includes("top")?"translateY(-2px)":s.includes("bottom")?"translateY(2px)":"scale(1.02)":"none"};
  }
  
  /* Responsive design */
  @media (max-width: ${({theme:s})=>s.breakpoints.sm}) {
    min-width: 280px;
    max-width: calc(100vw - 40px);
    ${({$position:s})=>s.includes("center")?`
          left: 20px;
          right: 20px;
          transform: none;
        `:""}
  }
`,$e=u.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: ${({theme:s})=>s.spacing.sm};
`,Be=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  font-size: 16px;
`,qe=u.div`
  flex: 1;
  word-wrap: break-word;
`,Ae=u.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 4px;
  margin-left: ${({theme:s})=>s.spacing.sm};
  border-radius: ${({theme:s})=>s.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,Me=u.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: currentColor;
  opacity: 0.6;
  width: ${({$isVisible:s})=>s?"0%":"100%"};
  transition: width ${({$duration:s})=>s}ms linear;
`,t=({message:s,variant:a="primary",size:r="md",isVisible:l=!0,onDismiss:n,autoDismiss:i=5e3,showCloseButton:m=!0,icon:g,dismissible:c=!0,position:V="top-right",backgroundColor:be,textColor:ve,borderColor:We,showProgress:z=!0,animationDuration:je=300,maxWidth:Ce="400px",pauseOnHover:q=!0,...ke})=>{const d=p.useRef(null),$=p.useRef(null),B=p.useRef(!1);p.useEffect(()=>(i>0&&l&&!B.current&&(d.current=setTimeout(()=>{n==null||n()},i)),()=>{d.current&&clearTimeout(d.current)}),[i,l,n]),p.useEffect(()=>{if(z&&$.current&&i>0&&l){const h=$.current;h.style.width="0%",h.offsetHeight,h.style.width="100%"}},[z,i,l]);const De=()=>{q&&d.current&&(clearTimeout(d.current),B.current=!0)},Se=()=>{q&&i>0&&(B.current=!1,d.current=setTimeout(()=>{n==null||n()},i))},Pe=()=>{c&&(n==null||n())},A=()=>{if(g)return g;switch(a){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":return"ℹ";default:return null}};return l?e.jsxs(ze,{$isVisible:l,$position:V,variant:a,size:r,backgroundColor:be,textColor:ve,borderColor:We,animationDuration:je,maxWidth:Ce,dismissible:c,onClick:Pe,onMouseEnter:De,onMouseLeave:Se,role:"alert","aria-live":"polite",...ke,children:[e.jsxs($e,{children:[A()&&e.jsx(Be,{children:A()}),e.jsx(qe,{children:s})]}),m&&e.jsx(Ae,{onClick:h=>{h.stopPropagation(),n==null||n()},"aria-label":"Close toast",children:"✕"}),z&&i>0&&e.jsx(Me,{ref:$,$duration:i,$isVisible:l,"aria-hidden":"true"})]}):null};try{t.displayName="Toast",t.__docgenInfo={description:"",displayName:"Toast",props:{message:{defaultValue:null,description:"The message content to display",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"The type/variant of the toast",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"The size of the toast",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},isVisible:{defaultValue:{value:"true"},description:"Whether the toast is visible",name:"isVisible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback when toast is dismissed",name:"onDismiss",required:!1,type:{name:"(() => void)"}},autoDismiss:{defaultValue:{value:"5000"},description:"Auto-dismiss timeout in milliseconds (0 = no auto-dismiss)",name:"autoDismiss",required:!1,type:{name:"number"}},showCloseButton:{defaultValue:{value:"true"},description:"Whether to show a close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Custom icon to display",name:"icon",required:!1,type:{name:"ReactNode"}},dismissible:{defaultValue:{value:"true"},description:"Whether the toast can be dismissed by clicking",name:"dismissible",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"top-right"},description:"Position of the toast",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"top-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-center"'}]}},backgroundColor:{defaultValue:null,description:"Custom background color",name:"backgroundColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"Custom text color",name:"textColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"Custom border color",name:"borderColor",required:!1,type:{name:"string"}},showProgress:{defaultValue:{value:"true"},description:"Whether to show a progress bar for auto-dismiss",name:"showProgress",required:!1,type:{name:"boolean"}},animationDuration:{defaultValue:{value:"300"},description:"Animation duration in milliseconds",name:"animationDuration",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"400px"},description:"Maximum width of the toast",name:"maxWidth",required:!1,type:{name:"string"}},pauseOnHover:{defaultValue:{value:"true"},description:"Whether to pause auto-dismiss on hover",name:"pauseOnHover",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const _e={title:"Components/Feedback/Toast",component:t,parameters:{layout:"centered",docs:{description:{component:"A toast notification component that provides user feedback and alerts. Features include auto-dismiss, multiple positions, variants, and accessibility support."}}},tags:["autodocs"],argTypes:{message:{control:{type:"text"},description:"The message content to display"},variant:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"],description:"The type/variant of the toast"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"The size of the toast"},isVisible:{control:{type:"boolean"},description:"Whether the toast is visible"},onDismiss:{action:"dismissed",description:"Callback when toast is dismissed"},autoDismiss:{control:{type:"number"},description:"Auto-dismiss timeout in milliseconds (0 = no auto-dismiss)"},showCloseButton:{control:{type:"boolean"},description:"Whether to show a close button"},dismissible:{control:{type:"boolean"},description:"Whether the toast can be dismissed by clicking"},position:{control:{type:"select"},options:["top-left","top-right","top-center","bottom-left","bottom-right","bottom-center"],description:"Position of the toast"},backgroundColor:{control:{type:"color"},description:"Custom background color"},textColor:{control:{type:"color"},description:"Custom text color"},borderColor:{control:{type:"color"},description:"Custom border color"},showProgress:{control:{type:"boolean"},description:"Whether to show a progress bar for auto-dismiss"},animationDuration:{control:{type:"number"},description:"Animation duration in milliseconds"},maxWidth:{control:{type:"text"},description:"Maximum width of the toast"},pauseOnHover:{control:{type:"boolean"},description:"Whether to pause auto-dismiss on hover"}}},o=({children:s,...a})=>{const[r,l]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:()=>l(!0),children:"Show Toast"}),Ve.cloneElement(s,{...a,isVisible:r,onDismiss:()=>l(!1)})]})},x={render:()=>e.jsx(o,{children:e.jsx(t,{message:"This is a basic toast notification"})})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{children:e.jsx(t,{message:"Success! Your action was completed successfully.",variant:"success",position:"top-left"})}),e.jsx(o,{children:e.jsx(t,{message:"Warning: Please review your input before proceeding.",variant:"warning",position:"top-center"})}),e.jsx(o,{children:e.jsx(t,{message:"Error: Something went wrong. Please try again.",variant:"error",position:"top-right"})}),e.jsx(o,{children:e.jsx(t,{message:"Info: Here's some helpful information for you.",variant:"info",position:"bottom-left"})}),e.jsx(o,{children:e.jsx(t,{message:"Secondary: This is a secondary notification.",variant:"secondary",position:"bottom-center"})}),e.jsx(o,{children:e.jsx(t,{message:"Primary: This is the default primary notification.",variant:"primary",position:"bottom-right"})})]}),parameters:{docs:{description:{story:"Different toast variants with various positions."}}}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{children:e.jsx(t,{message:"Extra small toast",size:"xs",position:"top-left"})}),e.jsx(o,{children:e.jsx(t,{message:"Small toast",size:"sm",position:"top-center"})}),e.jsx(o,{children:e.jsx(t,{message:"Medium toast (default)",size:"md",position:"top-right"})}),e.jsx(o,{children:e.jsx(t,{message:"Large toast",size:"lg",position:"bottom-left"})}),e.jsx(o,{children:e.jsx(t,{message:"Extra large toast",size:"xl",position:"bottom-center"})})]}),parameters:{docs:{description:{story:"Different toast sizes available."}}}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{children:e.jsx(t,{message:"This toast will auto-dismiss in 3 seconds with progress bar",autoDismiss:3e3,showProgress:!0,position:"top-left"})}),e.jsx(o,{children:e.jsx(t,{message:"This toast will auto-dismiss in 5 seconds with progress bar",autoDismiss:5e3,showProgress:!0,position:"top-center"})}),e.jsx(o,{children:e.jsx(t,{message:"This toast will auto-dismiss in 10 seconds with progress bar",autoDismiss:1e4,showProgress:!0,position:"top-right"})})]}),parameters:{docs:{description:{story:"Toasts with auto-dismiss functionality and progress bars."}}}},b={render:()=>e.jsx(o,{children:e.jsx(t,{message:"This toast will not auto-dismiss. You must close it manually.",autoDismiss:0,showProgress:!1,position:"top-center"})}),parameters:{docs:{description:{story:"Toast that requires manual dismissal."}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{children:e.jsx(t,{message:"Custom styled toast with purple theme",backgroundColor:"#f3e5f5",textColor:"#7b1fa2",borderColor:"#9c27b0",position:"top-left"})}),e.jsx(o,{children:e.jsx(t,{message:"Custom styled toast with blue theme",backgroundColor:"#e3f2fd",textColor:"#1976d2",borderColor:"#2196f3",position:"top-center"})}),e.jsx(o,{children:e.jsx(t,{message:"Custom styled toast with green theme",backgroundColor:"#e8f5e8",textColor:"#2e7d32",borderColor:"#4caf50",position:"top-right"})})]}),parameters:{docs:{description:{story:"Toasts with custom colors and styling."}}}},W={render:()=>e.jsx(o,{children:e.jsx(t,{message:"This toast has no close button and will auto-dismiss in 5 seconds",showCloseButton:!1,autoDismiss:5e3,position:"top-center"})}),parameters:{docs:{description:{story:"Toast without a close button."}}}},j={render:()=>e.jsx(o,{children:e.jsx(t,{message:"This toast cannot be dismissed by clicking. It will auto-dismiss in 8 seconds.",dismissible:!1,autoDismiss:8e3,position:"top-center"})}),parameters:{docs:{description:{story:"Toast that cannot be dismissed by clicking."}}}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{children:e.jsx(t,{message:"Fast animation (100ms)",animationDuration:100,position:"top-left"})}),e.jsx(o,{children:e.jsx(t,{message:"Slow animation (800ms)",animationDuration:800,position:"top-center"})}),e.jsx(o,{children:e.jsx(t,{message:"Very slow animation (1500ms)",animationDuration:1500,position:"top-right"})})]}),parameters:{docs:{description:{story:"Toasts with different animation durations."}}}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{children:e.jsx(t,{message:"This toast has a narrow max width of 200px",maxWidth:"200px",position:"top-left"})}),e.jsx(o,{children:e.jsx(t,{message:"This toast has a wide max width of 600px",maxWidth:"600px",position:"top-center"})}),e.jsx(o,{children:e.jsx(t,{message:"This toast has a very wide max width of 800px",maxWidth:"800px",position:"top-right"})})]}),parameters:{docs:{description:{story:"Toasts with different maximum widths."}}}},D={render:()=>e.jsx(o,{children:e.jsx(t,{message:"Hover over this toast to pause the auto-dismiss timer. Move your mouse away to resume.",autoDismiss:8e3,pauseOnHover:!0,showProgress:!0,position:"top-center"})}),parameters:{docs:{description:{story:"Toast that pauses auto-dismiss when hovered over."}}}},S={render:()=>e.jsx(o,{children:e.jsx(t,{message:"This is a very long toast message that demonstrates how the component handles longer text content. The toast will automatically wrap the text and maintain its layout while ensuring readability for users.",position:"top-center",maxWidth:"500px"})}),parameters:{docs:{description:{story:"Toast with a long message to demonstrate text wrapping."}}}},P={render:()=>{const[s,a]=p.useState([]),r=(n,i,m)=>{const g=Date.now();a(c=>[...c,{id:g,message:n,variant:i,position:m}]),setTimeout(()=>{a(c=>c.filter(V=>V.id!==g))},5e3)},l=n=>{a(i=>i.filter(m=>m.id!==n))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(f,{onClick:()=>r("Success message!","success","top-left"),children:"Add Success"}),e.jsx(f,{onClick:()=>r("Warning message!","warning","top-center"),children:"Add Warning"}),e.jsx(f,{onClick:()=>r("Error message!","error","top-right"),children:"Add Error"}),e.jsx(f,{onClick:()=>r("Info message!","info","bottom-left"),children:"Add Info"})]}),s.map(n=>e.jsx(t,{message:n.message,variant:n.variant,position:n.position,isVisible:!0,onDismiss:()=>l(n.id),autoDismiss:5e3,showProgress:!0},n.id))]})},parameters:{docs:{description:{story:"Multiple toasts displayed simultaneously with different variants and positions."}}}};var M,E,H;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ToastWrapper>\r
      <Toast message="This is a basic toast notification" />\r
    </ToastWrapper>
}`,...(H=(E=x.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,I,_;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <ToastWrapper>\r
        <Toast message="Success! Your action was completed successfully." variant="success" position="top-left" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Warning: Please review your input before proceeding." variant="warning" position="top-center" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Error: Something went wrong. Please try again." variant="error" position="top-right" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Info: Here's some helpful information for you." variant="info" position="bottom-left" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Secondary: This is a secondary notification." variant="secondary" position="bottom-center" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Primary: This is the default primary notification." variant="primary" position="bottom-right" />\r
      </ToastWrapper>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different toast variants with various positions.'
      }
    }
  }
}`,...(_=(I=y.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var N,Y,O;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <ToastWrapper>\r
        <Toast message="Extra small toast" size="xs" position="top-left" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Small toast" size="sm" position="top-center" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Medium toast (default)" size="md" position="top-right" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Large toast" size="lg" position="bottom-left" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Extra large toast" size="xl" position="bottom-center" />\r
      </ToastWrapper>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different toast sizes available.'
      }
    }
  }
}`,...(O=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var F,L,X;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <ToastWrapper>\r
        <Toast message="This toast will auto-dismiss in 3 seconds with progress bar" autoDismiss={3000} showProgress={true} position="top-left" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="This toast will auto-dismiss in 5 seconds with progress bar" autoDismiss={5000} showProgress={true} position="top-center" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="This toast will auto-dismiss in 10 seconds with progress bar" autoDismiss={10000} showProgress={true} position="top-right" />\r
      </ToastWrapper>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Toasts with auto-dismiss functionality and progress bars.'
      }
    }
  }
}`,...(X=(L=w.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ToastWrapper>\r
      <Toast message="This toast will not auto-dismiss. You must close it manually." autoDismiss={0} showProgress={false} position="top-center" />\r
    </ToastWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Toast that requires manual dismissal.'
      }
    }
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <ToastWrapper>\r
        <Toast message="Custom styled toast with purple theme" backgroundColor="#f3e5f5" textColor="#7b1fa2" borderColor="#9c27b0" position="top-left" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Custom styled toast with blue theme" backgroundColor="#e3f2fd" textColor="#1976d2" borderColor="#2196f3" position="top-center" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Custom styled toast with green theme" backgroundColor="#e8f5e8" textColor="#2e7d32" borderColor="#4caf50" position="top-right" />\r
      </ToastWrapper>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Toasts with custom colors and styling.'
      }
    }
  }
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var ee,se,te;W.parameters={...W.parameters,docs:{...(ee=W.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ToastWrapper>\r
      <Toast message="This toast has no close button and will auto-dismiss in 5 seconds" showCloseButton={false} autoDismiss={5000} position="top-center" />\r
    </ToastWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Toast without a close button.'
      }
    }
  }
}`,...(te=(se=W.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,oe,ae;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <ToastWrapper>\r
      <Toast message="This toast cannot be dismissed by clicking. It will auto-dismiss in 8 seconds." dismissible={false} autoDismiss={8000} position="top-center" />\r
    </ToastWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Toast that cannot be dismissed by clicking.'
      }
    }
  }
}`,...(ae=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,ie,le;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <ToastWrapper>\r
        <Toast message="Fast animation (100ms)" animationDuration={100} position="top-left" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Slow animation (800ms)" animationDuration={800} position="top-center" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="Very slow animation (1500ms)" animationDuration={1500} position="top-right" />\r
      </ToastWrapper>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Toasts with different animation durations.'
      }
    }
  }
}`,...(le=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var pe,ce,de;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <ToastWrapper>\r
        <Toast message="This toast has a narrow max width of 200px" maxWidth="200px" position="top-left" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="This toast has a wide max width of 600px" maxWidth="600px" position="top-center" />\r
      </ToastWrapper>\r
      \r
      <ToastWrapper>\r
        <Toast message="This toast has a very wide max width of 800px" maxWidth="800px" position="top-right" />\r
      </ToastWrapper>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Toasts with different maximum widths.'
      }
    }
  }
}`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,ge;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <ToastWrapper>\r
      <Toast message="Hover over this toast to pause the auto-dismiss timer. Move your mouse away to resume." autoDismiss={8000} pauseOnHover={true} showProgress={true} position="top-center" />\r
    </ToastWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Toast that pauses auto-dismiss when hovered over.'
      }
    }
  }
}`,...(ge=(me=D.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,fe,xe;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <ToastWrapper>\r
      <Toast message="This is a very long toast message that demonstrates how the component handles longer text content. The toast will automatically wrap the text and maintain its layout while ensuring readability for users." position="top-center" maxWidth="500px" />\r
    </ToastWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Toast with a long message to demonstrate text wrapping.'
      }
    }
  }
}`,...(xe=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ye,Te,we;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: number;
      message: string;
      variant: any;
      position: any;
    }>>([]);
    const addToast = (message: string, variant: any, position: any) => {
      const id = Date.now();
      setToasts(prev => [...prev, {
        id,
        message,
        variant,
        position
      }]);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 5000);
    };
    const removeToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>\r
          <Button onClick={() => addToast('Success message!', 'success', 'top-left')}>\r
            Add Success\r
          </Button>\r
          <Button onClick={() => addToast('Warning message!', 'warning', 'top-center')}>\r
            Add Warning\r
          </Button>\r
          <Button onClick={() => addToast('Error message!', 'error', 'top-right')}>\r
            Add Error\r
          </Button>\r
          <Button onClick={() => addToast('Info message!', 'info', 'bottom-left')}>\r
            Add Info\r
          </Button>\r
        </div>\r
        \r
        {toasts.map(toast => <Toast key={toast.id} message={toast.message} variant={toast.variant} position={toast.position} isVisible={true} onDismiss={() => removeToast(toast.id)} autoDismiss={5000} showProgress={true} />)}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple toasts displayed simultaneously with different variants and positions.'
      }
    }
  }
}`,...(we=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};const Ne=["Basic","DifferentVariants","DifferentSizes","AutoDismissWithProgress","NoAutoDismiss","CustomStyling","WithoutCloseButton","NonDismissibleToast","CustomAnimationDuration","CustomMaxWidth","PauseOnHover","LongMessage","MultipleToasts"];export{w as AutoDismissWithProgress,x as Basic,C as CustomAnimationDuration,k as CustomMaxWidth,v as CustomStyling,T as DifferentSizes,y as DifferentVariants,S as LongMessage,P as MultipleToasts,b as NoAutoDismiss,j as NonDismissibleToast,D as PauseOnHover,W as WithoutCloseButton,Ne as __namedExportsOrder,_e as default};
