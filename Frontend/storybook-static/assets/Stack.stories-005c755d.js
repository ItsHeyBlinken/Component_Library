import{s as X,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{R as j}from"./index-8b3efc3f.js";import{T as r}from"./Typography-984ac10a.js";import{C as Y}from"./Card-956b6d64.js";import{B as o}from"./Button-e75f0250.js";import"./_commonjsHelpers-de833af9.js";const s=(n,i)=>n==="none"?"0":n==="xs"?i.spacing.xs:n==="sm"?i.spacing.sm:n==="lg"?i.spacing.lg:n==="xl"?i.spacing.xl:i.spacing.md,le=X.div`
  display: ${({inline:n})=>n?"inline-flex":"flex"};
  flex-direction: column;
  font-family: ${({theme:n})=>n.typography.fontFamily};
  
  /* Alignment */
  align-items: ${({align:n})=>n||"stretch"};
  justify-content: ${({justify:n})=>n||"start"};
  
  /* Wrapping */
  flex-wrap: ${({wrap:n})=>n===!0||n==="true"?"wrap":"nowrap"};
  
  /* Spacing between children */
  > * + * {
    margin-top: ${({spacing:n,theme:i})=>s(n,i)};
  }
  
  /* Divider spacing */
  ${({divider:n,dividerSpacing:i,theme:l})=>n&&`
    > * + * {
      margin-top: ${s(i||"md",l)};
    }
  `}
  
  /* Remove margin from first child */
  > *:first-child {
    margin-top: 0;
  }
  
  /* Responsive behavior for small screens */
  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    > * + * {
      margin-top: ${({spacing:n,theme:i})=>{const l=s(n,i);return l==="0"?"0":`calc(${l} * 0.75)`}};
    }
  }
`,se=X.div`
  margin-top: ${({spacing:n,theme:i})=>s(n,i)};
  margin-bottom: ${({spacing:n,theme:i})=>s(n,i)};
  display: flex;
  align-items: center;
  
  /* Divider line */
  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({theme:n})=>n.colors.background.secondary};
  }
  
  /* Divider content */
  > * {
    margin: 0 16px;
  }
  
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({theme:n})=>n.colors.background.secondary};
  }
`,a=({children:n,spacing:i="md",align:l,justify:y,as:Z,inline:ee=!1,wrap:te=!1,divider:g,dividerSpacing:S,className:ne,style:re,...ae})=>{const ie=()=>{if(!g)return n;const I=j.Children.toArray(n);return I.map((oe,k)=>e.jsxs(j.Fragment,{children:[oe,k<I.length-1&&e.jsx(se,{spacing:S||i,children:g})]},k))};return e.jsx(le,{as:Z,spacing:i,align:l,justify:y,inline:ee,wrap:te,divider:g,dividerSpacing:S,className:ne,style:re,...ae,children:ie()})};try{a.displayName="Stack",a.__docgenInfo={description:"",displayName:"Stack",props:{spacing:{defaultValue:{value:"md"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"button"'},{value:'"label"'},{value:'"text"'},{value:'"search"'},{value:'"title"'},{value:'"header"'},{value:'"footer"'},{value:'"time"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"caption"'},{value:'"code"'},{value:'"link"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"center"'},{value:'"cite"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"form"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"ReactNode"}},dividerSpacing:{defaultValue:null,description:"",name:"dividerSpacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ve={title:"Components/Layout/Stack",component:a,parameters:{layout:"centered",docs:{description:{component:"A vertical spacing component that provides consistent layout spacing between child elements. Perfect for organizing content with consistent vertical rhythm."}}},tags:["autodocs"],argTypes:{spacing:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Spacing between stack items"},align:{control:{type:"select"},options:["start","center","end","stretch"],description:"Horizontal alignment of stack items"},justify:{control:{type:"select"},options:["start","center","end","space-between","space-around","space-evenly"],description:"Vertical distribution of stack items"},as:{control:{type:"text"},description:"HTML element to render"},inline:{control:{type:"boolean"},description:"Whether to display as inline-flex"},wrap:{control:{type:"boolean"},description:"Whether to allow wrapping"},divider:{control:{type:"text"},description:"Divider content between items"},dividerSpacing:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Spacing around dividers"}}},t=({children:n,color:i="#e3f2fd",height:l="60px",style:y})=>e.jsx("div",{style:{backgroundColor:i,padding:"16px",borderRadius:"6px",textAlign:"center",height:l,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold",minWidth:"200px"},children:n}),c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"#e3f2fd",children:"Stack Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Stack Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Stack Item 3"}),e.jsx(t,{color:"#fff3e0",children:"Stack Item 4"})]})}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Small Spacing"}),e.jsxs(a,{spacing:"xs",children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Small Spacing"}),e.jsxs(a,{spacing:"sm",children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Medium Spacing (Default)"}),e.jsxs(a,{spacing:"md",children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Large Spacing"}),e.jsxs(a,{spacing:"lg",children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Large Spacing"}),e.jsxs(a,{spacing:"xl",children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"No Spacing"}),e.jsxs(a,{spacing:"none",children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]})]}),parameters:{docs:{description:{story:"Different spacing options available for the stack component."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Align: Start (Default)"}),e.jsxs(a,{spacing:"md",align:"start",children:[e.jsx(t,{color:"#e3f2fd",height:"40px",children:"Short Item"}),e.jsx(t,{color:"#f3e5f5",height:"80px",children:"Tall Item"}),e.jsx(t,{color:"#e8f5e8",height:"60px",children:"Medium Item"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Align: Center"}),e.jsxs(a,{spacing:"md",align:"center",children:[e.jsx(t,{color:"#e3f2fd",height:"40px",children:"Short Item"}),e.jsx(t,{color:"#f3e5f5",height:"80px",children:"Tall Item"}),e.jsx(t,{color:"#e8f5e8",height:"60px",children:"Medium Item"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Align: End"}),e.jsxs(a,{spacing:"md",align:"end",children:[e.jsx(t,{color:"#e3f2fd",height:"40px",children:"Short Item"}),e.jsx(t,{color:"#f3e5f5",height:"80px",children:"Tall Item"}),e.jsx(t,{color:"#e8f5e8",height:"60px",children:"Medium Item"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Align: Stretch"}),e.jsxs(a,{spacing:"md",align:"stretch",children:[e.jsx(t,{color:"#e3f2fd",height:"40px",children:"Short Item"}),e.jsx(t,{color:"#f3e5f5",height:"80px",children:"Tall Item"}),e.jsx(t,{color:"#e8f5e8",height:"60px",children:"Medium Item"})]})]})]}),parameters:{docs:{description:{story:"Different alignment options for stack items."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Justify: Start (Default)"}),e.jsxs(a,{spacing:"md",justify:"start",style:{height:"300px"},children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Justify: Center"}),e.jsxs(a,{spacing:"md",justify:"center",style:{height:"300px"},children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Justify: End"}),e.jsxs(a,{spacing:"md",justify:"end",style:{height:"300px"},children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Justify: Space Between"}),e.jsxs(a,{spacing:"md",justify:"space-between",style:{height:"300px"},children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Justify: Space Around"}),e.jsxs(a,{spacing:"md",justify:"space-around",style:{height:"300px"},children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Justify: Space Evenly"}),e.jsxs(a,{spacing:"md",justify:"space-evenly",style:{height:"300px"},children:[e.jsx(t,{color:"#e3f2fd",children:"Item 1"}),e.jsx(t,{color:"#f3e5f5",children:"Item 2"}),e.jsx(t,{color:"#e8f5e8",children:"Item 3"})]})]})]}),parameters:{docs:{description:{story:"Different justify options for distributing stack items vertically."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Text Divider"}),e.jsxs(a,{spacing:"lg",divider:"•",dividerSpacing:"md",children:[e.jsx(t,{color:"#e3f2fd",children:"Section 1"}),e.jsx(t,{color:"#f3e5f5",children:"Section 2"}),e.jsx(t,{color:"#e8f5e8",children:"Section 3"}),e.jsx(t,{color:"#fff3e0",children:"Section 4"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Icon Divider"}),e.jsxs(a,{spacing:"lg",divider:"→",dividerSpacing:"lg",children:[e.jsx(t,{color:"#e3f2fd",children:"Step 1"}),e.jsx(t,{color:"#f3e5f5",children:"Step 2"}),e.jsx(t,{color:"#e8f5e8",children:"Step 3"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Divider"}),e.jsxs(a,{spacing:"lg",divider:e.jsx("div",{style:{color:"#666",fontSize:"12px",fontWeight:"bold"},children:"SEPARATOR"}),children:[e.jsx(t,{color:"#e3f2fd",children:"Group A"}),e.jsx(t,{color:"#f3e5f5",children:"Group B"}),e.jsx(t,{color:"#e8f5e8",children:"Group C"})]})]})]}),parameters:{docs:{description:{story:"Stack with different types of dividers between items."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Inline Stack"}),e.jsxs("div",{style:{border:"1px solid #ddd",padding:"16px",borderRadius:"6px"},children:[e.jsx(r,{variant:"body2",style:{marginBottom:"8px"},children:"This is some text with an inline stack:"}),e.jsxs(a,{inline:!0,spacing:"sm",children:[e.jsx(o,{size:"sm",variant:"primary",children:"Button 1"}),e.jsx(o,{size:"sm",variant:"secondary",children:"Button 2"}),e.jsx(o,{size:"sm",variant:"success",children:"Button 3"})]}),e.jsx(r,{variant:"body2",style:{marginTop:"8px"},children:"And more text continues here."})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"Inline Stack with Wrapping"}),e.jsx("div",{style:{border:"1px solid #ddd",padding:"16px",borderRadius:"6px",maxWidth:"400px"},children:e.jsxs(a,{inline:!0,spacing:"sm",wrap:!0,children:[e.jsx(o,{size:"sm",variant:"primary",children:"Long Button Text"}),e.jsx(o,{size:"sm",variant:"secondary",children:"Another Button"}),e.jsx(o,{size:"sm",variant:"success",children:"Third Button"}),e.jsx(o,{size:"sm",variant:"warning",children:"Fourth Button"}),e.jsx(o,{size:"sm",variant:"error",children:"Fifth Button"})]})})]})]}),parameters:{docs:{description:{story:"Inline stack examples showing how the component can be used within text flow."}}}},v={render:()=>e.jsx(Y,{title:"Contact Form",subtitle:"Please fill out the form below",children:e.jsxs(a,{spacing:"lg",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body2",style:{display:"block",marginBottom:"8px"},children:"Name"}),e.jsx("input",{type:"text",placeholder:"Enter your name",style:{width:"100%",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px"}})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",style:{display:"block",marginBottom:"8px"},children:"Email"}),e.jsx("input",{type:"email",placeholder:"Enter your email",style:{width:"100%",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px"}})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",style:{display:"block",marginBottom:"8px"},children:"Message"}),e.jsx("textarea",{placeholder:"Enter your message",rows:4,style:{width:"100%",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",resize:"vertical"}})]}),e.jsxs(a,{spacing:"sm",align:"center",children:[e.jsx(o,{variant:"primary",fullWidth:!0,children:"Submit"}),e.jsx(o,{variant:"secondary",size:"sm",children:"Cancel"})]})]})}),parameters:{docs:{description:{story:"Example of using the Stack component to create a well-organized form layout with consistent spacing."}}}},x={render:()=>e.jsx(Y,{title:"Navigation Menu",subtitle:"Vertical navigation structure",children:e.jsxs(a,{spacing:"xs",divider:e.jsx("hr",{style:{border:"none",borderTop:"1px solid #eee",margin:"8px 0"}}),children:[e.jsx("div",{style:{padding:"12px 16px",cursor:"pointer",borderRadius:"4px",backgroundColor:"#f8f9fa"},children:e.jsx(r,{variant:"body1",style:{fontWeight:"500"},children:"Dashboard"})}),e.jsx("div",{style:{padding:"12px 16px",cursor:"pointer",borderRadius:"4px"},children:e.jsx(r,{variant:"body1",children:"Profile"})}),e.jsx("div",{style:{padding:"12px 16px",cursor:"pointer",borderRadius:"4px"},children:e.jsx(r,{variant:"body1",children:"Settings"})}),e.jsx("div",{style:{padding:"12px 16px",cursor:"pointer",borderRadius:"4px"},children:e.jsx(r,{variant:"body1",children:"Help"})}),e.jsx("div",{style:{padding:"12px 16px",cursor:"pointer",borderRadius:"4px"},children:e.jsx(r,{variant:"body1",children:"Logout"})})]})}),parameters:{docs:{description:{story:"Example of using the Stack component to create a navigation menu with dividers."}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"As List Element"}),e.jsxs(a,{as:"ul",spacing:"md",children:[e.jsx("li",{style:{listStyle:"none"},children:e.jsx(t,{color:"#e3f2fd",children:"List Item 1"})}),e.jsx("li",{style:{listStyle:"none"},children:e.jsx(t,{color:"#f3e5f5",children:"List Item 2"})}),e.jsx("li",{style:{listStyle:"none"},children:e.jsx(t,{color:"#e8f5e8",children:"List Item 3"})})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h6",style:{marginBottom:"16px"},children:"As Section Element"}),e.jsxs(a,{as:"section",spacing:"lg",children:[e.jsx(t,{color:"#e3f2fd",children:"Section Content 1"}),e.jsx(t,{color:"#f3e5f5",children:"Section Content 2"}),e.jsx(t,{color:"#e8f5e8",children:"Section Content 3"})]})]})]}),parameters:{docs:{description:{story:"Using the Stack component with different semantic HTML elements for better accessibility."}}}};var b,B,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <StackItem color="#e3f2fd">Stack Item 1</StackItem>\r
        <StackItem color="#f3e5f5">Stack Item 2</StackItem>\r
        <StackItem color="#e8f5e8">Stack Item 3</StackItem>\r
        <StackItem color="#fff3e0">Stack Item 4</StackItem>\r
      </>
  }
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var w,D,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Small Spacing</Typography>\r
        <Stack spacing="xs">\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Small Spacing</Typography>\r
        <Stack spacing="sm">\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Medium Spacing (Default)</Typography>\r
        <Stack spacing="md">\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Large Spacing</Typography>\r
        <Stack spacing="lg">\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Large Spacing</Typography>\r
        <Stack spacing="xl">\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>No Spacing</Typography>\r
        <Stack spacing="none">\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different spacing options available for the stack component.'
      }
    }
  }
}`,...(C=(D=d.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var E,z,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Align: Start (Default)</Typography>\r
        <Stack spacing="md" align="start">\r
          <StackItem color="#e3f2fd" height="40px">Short Item</StackItem>\r
          <StackItem color="#f3e5f5" height="80px">Tall Item</StackItem>\r
          <StackItem color="#e8f5e8" height="60px">Medium Item</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Align: Center</Typography>\r
        <Stack spacing="md" align="center">\r
          <StackItem color="#e3f2fd" height="40px">Short Item</StackItem>\r
          <StackItem color="#f3e5f5" height="80px">Tall Item</StackItem>\r
          <StackItem color="#e8f5e8" height="60px">Medium Item</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Align: End</Typography>\r
        <Stack spacing="md" align="end">\r
          <StackItem color="#e3f2fd" height="40px">Short Item</StackItem>\r
          <StackItem color="#f3e5f5" height="80px">Tall Item</StackItem>\r
          <StackItem color="#e8f5e8" height="60px">Medium Item</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Align: Stretch</Typography>\r
        <Stack spacing="md" align="stretch">\r
          <StackItem color="#e3f2fd" height="40px">Short Item</StackItem>\r
          <StackItem color="#f3e5f5" height="80px">Tall Item</StackItem>\r
          <StackItem color="#e8f5e8" height="60px">Medium Item</StackItem>\r
        </Stack>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different alignment options for stack items.'
      }
    }
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var R,L,M;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Justify: Start (Default)</Typography>\r
        <Stack spacing="md" justify="start" style={{
        height: '300px'
      }}>\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Justify: Center</Typography>\r
        <Stack spacing="md" justify="center" style={{
        height: '300px'
      }}>\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Justify: End</Typography>\r
        <Stack spacing="md" justify="end" style={{
        height: '300px'
      }}>\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Justify: Space Between</Typography>\r
        <Stack spacing="md" justify="space-between" style={{
        height: '300px'
      }}>\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Justify: Space Around</Typography>\r
        <Stack spacing="md" justify="space-around" style={{
        height: '300px'
      }}>\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Justify: Space Evenly</Typography>\r
        <Stack spacing="md" justify="space-evenly" style={{
        height: '300px'
      }}>\r
          <StackItem color="#e3f2fd">Item 1</StackItem>\r
          <StackItem color="#f3e5f5">Item 2</StackItem>\r
          <StackItem color="#e8f5e8">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different justify options for distributing stack items vertically.'
      }
    }
  }
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,F,$;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Text Divider</Typography>\r
        <Stack spacing="lg" divider="•" dividerSpacing="md">\r
          <StackItem color="#e3f2fd">Section 1</StackItem>\r
          <StackItem color="#f3e5f5">Section 2</StackItem>\r
          <StackItem color="#e8f5e8">Section 3</StackItem>\r
          <StackItem color="#fff3e0">Section 4</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Icon Divider</Typography>\r
        <Stack spacing="lg" divider="→" dividerSpacing="lg">\r
          <StackItem color="#e3f2fd">Step 1</StackItem>\r
          <StackItem color="#f3e5f5">Step 2</StackItem>\r
          <StackItem color="#e8f5e8">Step 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Divider</Typography>\r
        <Stack spacing="lg" divider={<div style={{
        color: '#666',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>SEPARATOR</div>}>\r
          <StackItem color="#e3f2fd">Group A</StackItem>\r
          <StackItem color="#f3e5f5">Group B</StackItem>\r
          <StackItem color="#e8f5e8">Group C</StackItem>\r
        </Stack>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Stack with different types of dividers between items.'
      }
    }
  }
}`,...($=(F=u.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var J,N,V;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Inline Stack</Typography>\r
        <div style={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '6px'
      }}>\r
          <Typography variant="body2" style={{
          marginBottom: '8px'
        }}>\r
            This is some text with an inline stack:\r
          </Typography>\r
          <Stack inline spacing="sm">\r
            <Button size="sm" variant="primary">Button 1</Button>\r
            <Button size="sm" variant="secondary">Button 2</Button>\r
            <Button size="sm" variant="success">Button 3</Button>\r
          </Stack>\r
          <Typography variant="body2" style={{
          marginTop: '8px'
        }}>\r
            And more text continues here.\r
          </Typography>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Inline Stack with Wrapping</Typography>\r
        <div style={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '6px',
        maxWidth: '400px'
      }}>\r
          <Stack inline spacing="sm" wrap>\r
            <Button size="sm" variant="primary">Long Button Text</Button>\r
            <Button size="sm" variant="secondary">Another Button</Button>\r
            <Button size="sm" variant="success">Third Button</Button>\r
            <Button size="sm" variant="warning">Fourth Button</Button>\r
            <Button size="sm" variant="error">Fifth Button</Button>\r
          </Stack>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Inline stack examples showing how the component can be used within text flow.'
      }
    }
  }
}`,...(V=(N=h.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,P,G;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Card title="Contact Form" subtitle="Please fill out the form below">\r
      <Stack spacing="lg">\r
        <div>\r
          <Typography variant="body2" style={{
          display: 'block',
          marginBottom: '8px'
        }}>\r
            Name\r
          </Typography>\r
          <input type="text" placeholder="Enter your name" style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px'
        }} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body2" style={{
          display: 'block',
          marginBottom: '8px'
        }}>\r
            Email\r
          </Typography>\r
          <input type="email" placeholder="Enter your email" style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px'
        }} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body2" style={{
          display: 'block',
          marginBottom: '8px'
        }}>\r
            Message\r
          </Typography>\r
          <textarea placeholder="Enter your message" rows={4} style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px',
          resize: 'vertical'
        }} />\r
        </div>\r
        \r
        <Stack spacing="sm" align="center">\r
          <Button variant="primary" fullWidth>Submit</Button>\r
          <Button variant="secondary" size="sm">Cancel</Button>\r
        </Stack>\r
      </Stack>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using the Stack component to create a well-organized form layout with consistent spacing.'
      }
    }
  }
}`,...(G=(P=v.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var _,O,H;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Card title="Navigation Menu" subtitle="Vertical navigation structure">\r
      <Stack spacing="xs" divider={<hr style={{
      border: 'none',
      borderTop: '1px solid #eee',
      margin: '8px 0'
    }} />}>\r
        <div style={{
        padding: '12px 16px',
        cursor: 'pointer',
        borderRadius: '4px',
        backgroundColor: '#f8f9fa'
      }}>\r
          <Typography variant="body1" style={{
          fontWeight: '500'
        }}>Dashboard</Typography>\r
        </div>\r
        \r
        <div style={{
        padding: '12px 16px',
        cursor: 'pointer',
        borderRadius: '4px'
      }}>\r
          <Typography variant="body1">Profile</Typography>\r
        </div>\r
        \r
        <div style={{
        padding: '12px 16px',
        cursor: 'pointer',
        borderRadius: '4px'
      }}>\r
          <Typography variant="body1">Settings</Typography>\r
        </div>\r
        \r
        <div style={{
        padding: '12px 16px',
        cursor: 'pointer',
        borderRadius: '4px'
      }}>\r
          <Typography variant="body1">Help</Typography>\r
        </div>\r
        \r
        <div style={{
        padding: '12px 16px',
        cursor: 'pointer',
        borderRadius: '4px'
      }}>\r
          <Typography variant="body1">Logout</Typography>\r
        </div>\r
      </Stack>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using the Stack component to create a navigation menu with dividers.'
      }
    }
  }
}`,...(H=(O=x.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var U,K,Q;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>As List Element</Typography>\r
        <Stack as="ul" spacing="md">\r
          <li style={{
          listStyle: 'none'
        }}>\r
            <StackItem color="#e3f2fd">List Item 1</StackItem>\r
          </li>\r
          <li style={{
          listStyle: 'none'
        }}>\r
            <StackItem color="#f3e5f5">List Item 2</StackItem>\r
          </li>\r
          <li style={{
          listStyle: 'none'
        }}>\r
            <StackItem color="#e8f5e8">List Item 3</StackItem>\r
          </li>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>As Section Element</Typography>\r
        <Stack as="section" spacing="lg">\r
          <StackItem color="#e3f2fd">Section Content 1</StackItem>\r
          <StackItem color="#f3e5f5">Section Content 2</StackItem>\r
          <StackItem color="#e8f5e8">Section Content 3</StackItem>\r
        </Stack>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Using the Stack component with different semantic HTML elements for better accessibility.'
      }
    }
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const xe=["Basic","DifferentSpacing","AlignmentOptions","JustifyOptions","WithDividers","InlineStack","FormLayout","NavigationExample","SemanticElements"];export{p as AlignmentOptions,c as Basic,d as DifferentSpacing,v as FormLayout,h as InlineStack,m as JustifyOptions,x as NavigationExample,f as SemanticElements,u as WithDividers,xe as __namedExportsOrder,ve as default};
