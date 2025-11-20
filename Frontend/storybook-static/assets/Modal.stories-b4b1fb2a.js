import{s as c,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as p,R as ce}from"./index-8b3efc3f.js";import{B as o}from"./Button-e75f0250.js";import{T as n}from"./Typography-984ac10a.js";import{C as M}from"./Card-956b6d64.js";import"./_commonjsHelpers-de833af9.js";const me=r=>{switch(r){case"xs":return"320px";case"sm":return"480px";case"md":return"640px";case"lg":return"800px";case"xl":return"1024px";case"full":return"95vw";default:return"640px"}},ye=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({overlayColor:r})=>r||"rgba(0, 0, 0, 0.5)"};
  opacity: ${({overlayOpacity:r})=>r!==void 0?r:1};
  z-index: ${({zIndex:r})=>r||1e3};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: ${({isOpen:r})=>r?1:0};
  visibility: ${({isOpen:r})=>r?"visible":"hidden"};
  transition: all 0.3s ease-in-out;
  
  /* Prevent scroll on body when modal is open */
  ${({isOpen:r,preventScroll:i})=>r&&i&&`
    overflow: hidden;
  `}
`,ue=c.div`
  background-color: ${({theme:r})=>r.colors.background.paper};
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: ${({size:r})=>me(r)};
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  transform: ${({isOpen:r})=>r?"scale(1)":"scale(0.95)"};
  opacity: ${({isOpen:r})=>r?1:0};
  transition: all 0.3s ease-in-out;
  z-index: ${({zIndex:r})=>(r||1e3)+1};
  
  /* Responsive behavior */
  @media (max-width: ${({theme:r})=>r.breakpoints.sm}) {
    margin: 8px;
    max-width: calc(100vw - 16px);
    max-height: calc(100vh - 16px);
  }
`,he=c.div`
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.background.secondary};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  h2 {
    margin: 0;
    font-size: ${({theme:r})=>r.typography.fontSize.lg};
    font-weight: 600;
    color: ${({theme:r})=>r.colors.text.primary};
    line-height: 1.3;
  }
  
  p {
    margin: 8px 0 0 0;
    font-size: ${({theme:r})=>r.typography.fontSize.sm};
    color: ${({theme:r})=>r.colors.text.secondary};
    line-height: 1.4;
  }
`,xe=c.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({theme:r})=>r.colors.text.secondary};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({theme:r})=>r.colors.background.secondary};
    color: ${({theme:r})=>r.colors.text.primary};
  }
  
  &:focus {
    outline: 2px solid ${({theme:r})=>r.colors.primary};
    outline-offset: 2px;
  }
`,ge=c.div`
  padding: 24px;
  overflow-y: auto;
  max-height: calc(90vh - 120px); // Account for header and padding
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:r})=>r.colors.background.secondary};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:r})=>r.colors.background.tertiary};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:r})=>r.colors.text.secondary};
  }
`,t=({isOpen:r,onClose:i,title:s,subtitle:l,size:re="md",closeOnOverlayClick:ne=!0,closeOnEscape:B=!0,showCloseButton:C=!0,preventScroll:j=!0,overlayColor:te,overlayOpacity:oe,zIndex:W,children:ae,className:ie,style:le,...se})=>{const w=p.useRef(null),T=p.useRef(null);p.useEffect(()=>{const d=pe=>{pe.key==="Escape"&&r&&B&&i()};return r&&(document.addEventListener("keydown",d),T.current=document.activeElement,w.current&&w.current.focus()),()=>{document.removeEventListener("keydown",d),T.current&&T.current.focus()}},[r,B,i]),p.useEffect(()=>(r&&j?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[r,j]);const de=d=>{ne&&d.target===d.currentTarget&&i()};return r?e.jsx(ye,{isOpen:r,overlayColor:te,overlayOpacity:oe,zIndex:W,preventScroll:j,onClick:de,children:e.jsxs(ue,{ref:w,isOpen:r,size:re,zIndex:W,className:ie,style:le,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":s?"modal-title":void 0,"aria-describedby":l?"modal-subtitle":void 0,...se,children:[(s||l||C)&&e.jsxs(he,{children:[e.jsxs("div",{children:[s&&e.jsx("h2",{id:"modal-title",children:s}),l&&e.jsx("p",{id:"modal-subtitle",children:l})]}),C&&e.jsx(xe,{onClick:i,"aria-label":"Close modal",type:"button",children:"×"})]}),e.jsx(ge,{children:ae})]})}):null};try{t.displayName="Modal",t.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},preventScroll:{defaultValue:{value:"true"},description:"",name:"preventScroll",required:!1,type:{name:"boolean"}},overlayColor:{defaultValue:null,description:"",name:"overlayColor",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:null,description:"",name:"overlayOpacity",required:!1,type:{name:"number"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Me={title:"Components/Feedback/Modal",component:t,parameters:{layout:"centered",docs:{description:{component:"A modal component that provides overlay dialogs for user interaction and content display. Features include focus management, keyboard navigation, and comprehensive accessibility support."}}},tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"},description:"Whether the modal is open"},onClose:{action:"closed",description:"Callback when modal is closed"},title:{control:{type:"text"},description:"Modal title"},subtitle:{control:{type:"text"},description:"Modal subtitle"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","full"],description:"Size of the modal"},closeOnOverlayClick:{control:{type:"boolean"},description:"Whether clicking overlay closes modal"},closeOnEscape:{control:{type:"boolean"},description:"Whether pressing Escape closes modal"},showCloseButton:{control:{type:"boolean"},description:"Whether to show close button"},preventScroll:{control:{type:"boolean"},description:"Whether to prevent body scroll"},overlayColor:{control:{type:"color"},description:"Custom overlay color"},overlayOpacity:{control:{type:"range",min:0,max:1,step:.1},description:"Overlay opacity"},zIndex:{control:{type:"number"},description:"Z-index for modal layering"}}},a=({children:r,...i})=>{const[s,l]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>l(!0),children:"Open Modal"}),ce.cloneElement(r,{...i,isOpen:s,onClose:()=>l(!1)})]})},m={render:()=>e.jsx(a,{children:e.jsxs(t,{title:"Basic Modal",subtitle:"This is a basic modal example",children:[e.jsx(n,{variant:"body1",children:"This is the content of the modal. You can put any content here including text, forms, images, or other components."}),e.jsxs("div",{style:{marginTop:"24px",textAlign:"right"},children:[e.jsx(o,{variant:"secondary",style:{marginRight:"12px"},children:"Cancel"}),e.jsx(o,{variant:"primary",children:"Confirm"})]})]})})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{children:e.jsx(t,{size:"xs",title:"Extra Small Modal",subtitle:"320px max width",children:e.jsx(n,{variant:"body2",children:"This is an extra small modal perfect for simple confirmations or alerts."})})}),e.jsx(a,{children:e.jsx(t,{size:"sm",title:"Small Modal",subtitle:"480px max width",children:e.jsx(n,{variant:"body1",children:"This is a small modal suitable for simple forms or content display."})})}),e.jsx(a,{children:e.jsx(t,{size:"md",title:"Medium Modal",subtitle:"640px max width (default)",children:e.jsx(n,{variant:"body1",children:"This is a medium modal, the default size. Perfect for most use cases including forms, content previews, and detailed information."})})}),e.jsx(a,{children:e.jsx(t,{size:"lg",title:"Large Modal",subtitle:"800px max width",children:e.jsx(n,{variant:"body1",children:"This is a large modal great for complex forms, detailed content, or when you need more space for your content."})})}),e.jsx(a,{children:e.jsx(t,{size:"xl",title:"Extra Large Modal",subtitle:"1024px max width",children:e.jsx(n,{variant:"body1",children:"This is an extra large modal perfect for dashboards, complex interfaces, or when you need maximum space for your content."})})}),e.jsx(a,{children:e.jsx(t,{size:"full",title:"Full Width Modal",subtitle:"95% viewport width",children:e.jsx(n,{variant:"body1",children:"This is a full width modal that takes up most of the viewport. Great for immersive experiences or when you need maximum space."})})})]}),parameters:{docs:{description:{story:"Different modal sizes available for various use cases."}}}},u={render:()=>e.jsx(a,{children:e.jsxs(t,{title:"Confirm Action",subtitle:"Are you sure you want to proceed?",size:"sm",children:[e.jsx(n,{variant:"body1",style:{marginBottom:"24px"},children:"This action cannot be undone. Please confirm that you want to delete this item permanently."}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx(o,{variant:"secondary",children:"Cancel"}),e.jsx(o,{variant:"error",children:"Delete"})]})]})}),parameters:{docs:{description:{story:"A confirmation modal example with action buttons."}}}},h={render:()=>e.jsx(a,{children:e.jsx(t,{title:"User Profile",subtitle:"Update your profile information",size:"lg",children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Full Name"}),e.jsx("input",{id:"name",type:"text",placeholder:"Enter your full name",style:{width:"100%",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px"}})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Email Address"}),e.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",style:{width:"100%",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px"}})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"bio",style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Bio"}),e.jsx("textarea",{id:"bio",rows:4,placeholder:"Tell us about yourself",style:{width:"100%",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",resize:"vertical"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px",marginTop:"8px"},children:[e.jsx(o,{variant:"secondary",children:"Cancel"}),e.jsx(o,{variant:"primary",children:"Save Changes"})]})]})})}),parameters:{docs:{description:{story:"A form modal example showing how to use the modal for data entry."}}}},x={render:()=>e.jsx(a,{children:e.jsx(t,{title:"Article Preview",subtitle:"Preview your article before publishing",size:"xl",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{textAlign:"center",marginBottom:"16px"},children:e.jsx("div",{style:{width:"200px",height:"120px",backgroundColor:"#f0f0f0",borderRadius:"8px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",color:"#666"},children:"🖼️"})}),e.jsx(n,{variant:"h3",style:{marginBottom:"16px"},children:"The Future of Web Development"}),e.jsx(n,{variant:"body1",style:{marginBottom:"16px"},children:"Web development has evolved significantly over the past decade. From simple HTML pages to complex single-page applications, the landscape continues to change rapidly. Modern frameworks and tools have made it easier than ever to build sophisticated web applications."}),e.jsx(n,{variant:"body1",style:{marginBottom:"16px"},children:"The rise of component-based architecture, improved build tools, and better developer experience have all contributed to this evolution. As we look to the future, we can expect even more innovation in areas like performance, accessibility, and user experience."}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"24px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("span",{style:{backgroundColor:"#e3f2fd",color:"#1976d2",padding:"4px 8px",borderRadius:"12px",fontSize:"12px",fontWeight:"500"},children:"Technology"}),e.jsx("span",{style:{backgroundColor:"#f3e5f5",color:"#7b1fa2",padding:"4px 8px",borderRadius:"12px",fontSize:"12px",fontWeight:"500"},children:"Web Development"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(o,{variant:"secondary",children:"Edit"}),e.jsx(o,{variant:"primary",children:"Publish"})]})]})]})})}),parameters:{docs:{description:{story:"A content preview modal example showing how to display rich content."}}}},g={render:()=>e.jsx(a,{children:e.jsx(t,{title:"Custom Overlay",subtitle:"Modal with custom overlay styling",overlayColor:"rgba(25, 118, 210, 0.8)",overlayOpacity:.9,zIndex:2e3,children:e.jsx(n,{variant:"body1",children:"This modal has a custom blue overlay with increased opacity and higher z-index."})})}),parameters:{docs:{description:{story:"Modal with custom overlay color, opacity, and z-index."}}}},f={render:()=>e.jsx(a,{children:e.jsxs(t,{title:"Important Notice",subtitle:"This modal cannot be closed by the user",showCloseButton:!1,closeOnOverlayClick:!1,closeOnEscape:!1,children:[e.jsx(n,{variant:"body1",style:{marginBottom:"24px"},children:"This is an important notice that requires user acknowledgment. The modal cannot be closed by clicking the overlay, pressing Escape, or using a close button."}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(o,{variant:"primary",children:"I Understand"})})]})}),parameters:{docs:{description:{story:"Modal that cannot be closed by the user, requiring explicit action."}}}},b={render:()=>e.jsx(a,{children:e.jsxs(t,{title:"Terms of Service",subtitle:"Please read our terms and conditions",size:"lg",children:[e.jsxs("div",{style:{maxHeight:"400px",overflowY:"auto"},children:[e.jsx(n,{variant:"body1",style:{marginBottom:"16px"},children:e.jsx("strong",{children:"1. Acceptance of Terms"})}),e.jsx(n,{variant:"body2",style:{marginBottom:"16px"},children:"By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."}),e.jsx(n,{variant:"body1",style:{marginBottom:"16px"},children:e.jsx("strong",{children:"2. Use License"})}),e.jsx(n,{variant:"body2",style:{marginBottom:"16px"},children:"Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only."}),e.jsx(n,{variant:"body1",style:{marginBottom:"16px"},children:e.jsx("strong",{children:"3. Disclaimer"})}),e.jsx(n,{variant:"body2",style:{marginBottom:"16px"},children:"The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."}),e.jsx(n,{variant:"body1",style:{marginBottom:"16px"},children:e.jsx("strong",{children:"4. Limitations"})}),e.jsx(n,{variant:"body2",style:{marginBottom:"16px"},children:"In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website."}),e.jsx(n,{variant:"body1",style:{marginBottom:"16px"},children:e.jsx("strong",{children:"5. Revisions and Errata"})}),e.jsx(n,{variant:"body2",style:{marginBottom:"16px"},children:"The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete or current."})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"24px"},children:[e.jsx(n,{variant:"body2",color:"secondary",children:"By continuing, you agree to these terms."}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(o,{variant:"secondary",children:"Decline"}),e.jsx(o,{variant:"primary",children:"Accept"})]})]})]})}),parameters:{docs:{description:{story:"Modal with long scrollable content demonstrating the scrollable content area."}}}},v={render:()=>e.jsx(a,{children:e.jsx(t,{title:"Choose Your Plan",subtitle:"Select the plan that best fits your needs",size:"xl",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[e.jsxs(M,{title:"Basic Plan",subtitle:"$9/month",variant:"secondary",children:[e.jsx(n,{variant:"body2",style:{marginBottom:"16px"},children:"Perfect for individuals and small projects."}),e.jsxs("ul",{style:{margin:"0 0 16px 0",paddingLeft:"20px"},children:[e.jsx("li",{children:"Up to 5 projects"}),e.jsx("li",{children:"Basic support"}),e.jsx("li",{children:"Standard features"})]}),e.jsx(o,{variant:"primary",fullWidth:!0,children:"Select Basic"})]}),e.jsxs(M,{title:"Pro Plan",subtitle:"$19/month",variant:"primary",children:[e.jsx(n,{variant:"body2",style:{marginBottom:"16px"},children:"Ideal for growing teams and businesses."}),e.jsxs("ul",{style:{margin:"0 0 16px 0",paddingLeft:"20px"},children:[e.jsx("li",{children:"Up to 25 projects"}),e.jsx("li",{children:"Priority support"}),e.jsx("li",{children:"Advanced features"}),e.jsx("li",{children:"Team collaboration"})]}),e.jsx(o,{variant:"primary",fullWidth:!0,children:"Select Pro"})]}),e.jsxs(M,{title:"Enterprise Plan",subtitle:"$49/month",variant:"success",children:[e.jsx(n,{variant:"body2",style:{marginBottom:"16px"},children:"For large organizations with complex needs."}),e.jsxs("ul",{style:{margin:"0 0 16px 0",paddingLeft:"20px"},children:[e.jsx("li",{children:"Unlimited projects"}),e.jsx("li",{children:"24/7 support"}),e.jsx("li",{children:"All features"}),e.jsx("li",{children:"Custom integrations"}),e.jsx("li",{children:"Dedicated account manager"})]}),e.jsx(o,{variant:"primary",fullWidth:!0,children:"Select Enterprise"})]})]})})}),parameters:{docs:{description:{story:"Modal containing multiple cards for plan selection."}}}};var z,k,S;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ModalWrapper>\r
      <Modal title="Basic Modal" subtitle="This is a basic modal example">\r
        <Typography variant="body1">\r
          This is the content of the modal. You can put any content here including text, forms, images, or other components.\r
        </Typography>\r
        <div style={{
        marginTop: '24px',
        textAlign: 'right'
      }}>\r
          <Button variant="secondary" style={{
          marginRight: '12px'
        }}>Cancel</Button>\r
          <Button variant="primary">Confirm</Button>\r
        </div>\r
      </Modal>\r
    </ModalWrapper>
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var E,P,A;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <ModalWrapper>\r
        <Modal size="xs" title="Extra Small Modal" subtitle="320px max width">\r
          <Typography variant="body2">\r
            This is an extra small modal perfect for simple confirmations or alerts.\r
          </Typography>\r
        </Modal>\r
      </ModalWrapper>\r
      \r
      <ModalWrapper>\r
        <Modal size="sm" title="Small Modal" subtitle="480px max width">\r
          <Typography variant="body1">\r
            This is a small modal suitable for simple forms or content display.\r
          </Typography>\r
        </Modal>\r
      </ModalWrapper>\r
      \r
      <ModalWrapper>\r
        <Modal size="md" title="Medium Modal" subtitle="640px max width (default)">\r
          <Typography variant="body1">\r
            This is a medium modal, the default size. Perfect for most use cases including forms, content previews, and detailed information.\r
          </Typography>\r
        </Modal>\r
      </ModalWrapper>\r
      \r
      <ModalWrapper>\r
        <Modal size="lg" title="Large Modal" subtitle="800px max width">\r
          <Typography variant="body1">\r
            This is a large modal great for complex forms, detailed content, or when you need more space for your content.\r
          </Typography>\r
        </Modal>\r
      </ModalWrapper>\r
      \r
      <ModalWrapper>\r
        <Modal size="xl" title="Extra Large Modal" subtitle="1024px max width">\r
          <Typography variant="body1">\r
            This is an extra large modal perfect for dashboards, complex interfaces, or when you need maximum space for your content.\r
          </Typography>\r
        </Modal>\r
      </ModalWrapper>\r
      \r
      <ModalWrapper>\r
        <Modal size="full" title="Full Width Modal" subtitle="95% viewport width">\r
          <Typography variant="body1">\r
            This is a full width modal that takes up most of the viewport. Great for immersive experiences or when you need maximum space.\r
          </Typography>\r
        </Modal>\r
      </ModalWrapper>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different modal sizes available for various use cases.'
      }
    }
  }
}`,...(A=(P=y.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var $,D,O;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <ModalWrapper>\r
      <Modal title="Confirm Action" subtitle="Are you sure you want to proceed?" size="sm">\r
        <Typography variant="body1" style={{
        marginBottom: '24px'
      }}>\r
          This action cannot be undone. Please confirm that you want to delete this item permanently.\r
        </Typography>\r
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '12px'
      }}>\r
          <Button variant="secondary">Cancel</Button>\r
          <Button variant="error">Delete</Button>\r
        </div>\r
      </Modal>\r
    </ModalWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'A confirmation modal example with action buttons.'
      }
    }
  }
}`,...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var F,R,I;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <ModalWrapper>\r
      <Modal title="User Profile" subtitle="Update your profile information" size="lg">\r
        <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
          <div>\r
            <label htmlFor="name" style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500'
          }}>\r
              Full Name\r
            </label>\r
            <input id="name" type="text" placeholder="Enter your full name" style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }} />\r
          </div>\r
          \r
          <div>\r
            <label htmlFor="email" style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500'
          }}>\r
              Email Address\r
            </label>\r
            <input id="email" type="email" placeholder="Enter your email" style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }} />\r
          </div>\r
          \r
          <div>\r
            <label htmlFor="bio" style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500'
          }}>\r
              Bio\r
            </label>\r
            <textarea id="bio" rows={4} placeholder="Tell us about yourself" style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            resize: 'vertical'
          }} />\r
          </div>\r
          \r
          <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: '8px'
        }}>\r
            <Button variant="secondary">Cancel</Button>\r
            <Button variant="primary">Save Changes</Button>\r
          </div>\r
        </form>\r
      </Modal>\r
    </ModalWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'A form modal example showing how to use the modal for data entry.'
      }
    }
  }
}`,...(I=(R=h.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var L,q,U;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ModalWrapper>\r
      <Modal title="Article Preview" subtitle="Preview your article before publishing" size="xl">\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
          <div style={{
          textAlign: 'center',
          marginBottom: '16px'
        }}>\r
            <div style={{
            width: '200px',
            height: '120px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#666'
          }}>\r
              🖼️\r
            </div>\r
          </div>\r
          \r
          <Typography variant="h3" style={{
          marginBottom: '16px'
        }}>\r
            The Future of Web Development\r
          </Typography>\r
          \r
          <Typography variant="body1" style={{
          marginBottom: '16px'
        }}>\r
            Web development has evolved significantly over the past decade. From simple HTML pages to complex single-page applications, \r
            the landscape continues to change rapidly. Modern frameworks and tools have made it easier than ever to build \r
            sophisticated web applications.\r
          </Typography>\r
          \r
          <Typography variant="body1" style={{
          marginBottom: '16px'
        }}>\r
            The rise of component-based architecture, improved build tools, and better developer experience have all contributed \r
            to this evolution. As we look to the future, we can expect even more innovation in areas like performance, \r
            accessibility, and user experience.\r
          </Typography>\r
          \r
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '24px'
        }}>\r
            <div style={{
            display: 'flex',
            gap: '8px'
          }}>\r
              <span style={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500'
            }}>\r
                Technology\r
              </span>\r
              <span style={{
              backgroundColor: '#f3e5f5',
              color: '#7b1fa2',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500'
            }}>\r
                Web Development\r
              </span>\r
            </div>\r
            \r
            <div style={{
            display: 'flex',
            gap: '12px'
          }}>\r
              <Button variant="secondary">Edit</Button>\r
              <Button variant="primary">Publish</Button>\r
            </div>\r
          </div>\r
        </div>\r
      </Modal>\r
    </ModalWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'A content preview modal example showing how to display rich content.'
      }
    }
  }
}`,...(U=(q=x.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var V,_,N;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ModalWrapper>\r
      <Modal title="Custom Overlay" subtitle="Modal with custom overlay styling" overlayColor="rgba(25, 118, 210, 0.8)" overlayOpacity={0.9} zIndex={2000}>\r
        <Typography variant="body1">\r
          This modal has a custom blue overlay with increased opacity and higher z-index.\r
        </Typography>\r
      </Modal>\r
    </ModalWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Modal with custom overlay color, opacity, and z-index.'
      }
    }
  }
}`,...(N=(_=g.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var Y,H,G;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ModalWrapper>\r
      <Modal title="Important Notice" subtitle="This modal cannot be closed by the user" showCloseButton={false} closeOnOverlayClick={false} closeOnEscape={false}>\r
        <Typography variant="body1" style={{
        marginBottom: '24px'
      }}>\r
          This is an important notice that requires user acknowledgment. The modal cannot be closed \r
          by clicking the overlay, pressing Escape, or using a close button.\r
        </Typography>\r
        <div style={{
        textAlign: 'center'
      }}>\r
          <Button variant="primary">I Understand</Button>\r
        </div>\r
      </Modal>\r
    </ModalWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Modal that cannot be closed by the user, requiring explicit action.'
      }
    }
  }
}`,...(G=(H=f.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var Z,J,K;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <ModalWrapper>\r
      <Modal title="Terms of Service" subtitle="Please read our terms and conditions" size="lg">\r
        <div style={{
        maxHeight: '400px',
        overflowY: 'auto'
      }}>\r
          <Typography variant="body1" style={{
          marginBottom: '16px'
        }}>\r
            <strong>1. Acceptance of Terms</strong>\r
          </Typography>\r
          <Typography variant="body2" style={{
          marginBottom: '16px'
        }}>\r
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.\r
          </Typography>\r
          \r
          <Typography variant="body1" style={{
          marginBottom: '16px'
        }}>\r
            <strong>2. Use License</strong>\r
          </Typography>\r
          <Typography variant="body2" style={{
          marginBottom: '16px'
        }}>\r
            Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, \r
            non-commercial transitory viewing only.\r
          </Typography>\r
          \r
          <Typography variant="body1" style={{
          marginBottom: '16px'
        }}>\r
            <strong>3. Disclaimer</strong>\r
          </Typography>\r
          <Typography variant="body2" style={{
          marginBottom: '16px'
        }}>\r
            The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, \r
            and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions \r
            of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other \r
            violation of rights.\r
          </Typography>\r
          \r
          <Typography variant="body1" style={{
          marginBottom: '16px'
        }}>\r
            <strong>4. Limitations</strong>\r
          </Typography>\r
          <Typography variant="body2" style={{
          marginBottom: '16px'
        }}>\r
            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss \r
            of data or profit, or due to business interruption) arising out of the use or inability to use the materials \r
            on this website.\r
          </Typography>\r
          \r
          <Typography variant="body1" style={{
          marginBottom: '16px'
        }}>\r
            <strong>5. Revisions and Errata</strong>\r
          </Typography>\r
          <Typography variant="body2" style={{
          marginBottom: '16px'
        }}>\r
            The materials appearing on this website could include technical, typographical, or photographic errors. \r
            We do not warrant that any of the materials on this website are accurate, complete or current.\r
          </Typography>\r
        </div>\r
        \r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '24px'
      }}>\r
          <Typography variant="body2" color="secondary">\r
            By continuing, you agree to these terms.\r
          </Typography>\r
          <div style={{
          display: 'flex',
          gap: '12px'
        }}>\r
            <Button variant="secondary">Decline</Button>\r
            <Button variant="primary">Accept</Button>\r
          </div>\r
        </div>\r
      </Modal>\r
    </ModalWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Modal with long scrollable content demonstrating the scrollable content area.'
      }
    }
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <ModalWrapper>\r
      <Modal title="Choose Your Plan" subtitle="Select the plan that best fits your needs" size="xl">\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px'
      }}>\r
          <Card title="Basic Plan" subtitle="$9/month" variant="secondary">\r
            <Typography variant="body2" style={{
            marginBottom: '16px'
          }}>\r
              Perfect for individuals and small projects.\r
            </Typography>\r
            <ul style={{
            margin: '0 0 16px 0',
            paddingLeft: '20px'
          }}>\r
              <li>Up to 5 projects</li>\r
              <li>Basic support</li>\r
              <li>Standard features</li>\r
            </ul>\r
            <Button variant="primary" fullWidth>Select Basic</Button>\r
          </Card>\r
          \r
          <Card title="Pro Plan" subtitle="$19/month" variant="primary">\r
            <Typography variant="body2" style={{
            marginBottom: '16px'
          }}>\r
              Ideal for growing teams and businesses.\r
            </Typography>\r
            <ul style={{
            margin: '0 0 16px 0',
            paddingLeft: '20px'
          }}>\r
              <li>Up to 25 projects</li>\r
              <li>Priority support</li>\r
              <li>Advanced features</li>\r
              <li>Team collaboration</li>\r
            </ul>\r
            <Button variant="primary" fullWidth>Select Pro</Button>\r
          </Card>\r
          \r
          <Card title="Enterprise Plan" subtitle="$49/month" variant="success">\r
            <Typography variant="body2" style={{
            marginBottom: '16px'
          }}>\r
              For large organizations with complex needs.\r
            </Typography>\r
            <ul style={{
            margin: '0 0 16px 0',
            paddingLeft: '20px'
          }}>\r
              <li>Unlimited projects</li>\r
              <li>24/7 support</li>\r
              <li>All features</li>\r
              <li>Custom integrations</li>\r
              <li>Dedicated account manager</li>\r
            </ul>\r
            <Button variant="primary" fullWidth>Select Enterprise</Button>\r
          </Card>\r
        </div>\r
      </Modal>\r
    </ModalWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Modal containing multiple cards for plan selection.'
      }
    }
  }
}`,...(ee=(X=v.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};const Be=["Basic","DifferentSizes","ConfirmationModal","FormModal","ContentPreviewModal","CustomOverlayModal","ModalWithoutCloseButton","ModalWithLongContent","ModalWithCards"];export{m as Basic,u as ConfirmationModal,x as ContentPreviewModal,g as CustomOverlayModal,y as DifferentSizes,h as FormModal,v as ModalWithCards,b as ModalWithLongContent,f as ModalWithoutCloseButton,Be as __namedExportsOrder,Me as default};
