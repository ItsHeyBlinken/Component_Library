import{W as c,s as i,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as $,R as Fe}from"./index-8b3efc3f.js";import{B as d}from"./Button-e75f0250.js";import"./_commonjsHelpers-de833af9.js";const Re=c`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,He=c`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,Ee=c`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`,Ue=c`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`,_e=c`
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
`,Ne=c`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Me=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({$centered:n})=>n?"center":"flex-start"};
  gap: ${({theme:n})=>n.spacing.sm};
  
  /* Size-based dimensions */
  width: ${({$inline:n,$fullScreen:t,size:s})=>{if(t)return"100vw";if(n)switch(s){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}return"auto"}};
  
  height: ${({$inline:n,$fullScreen:t,size:s})=>{if(t)return"100vh";if(n)switch(s){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}return"auto"}};
  
  /* Full screen positioning */
  ${({$fullScreen:n})=>n&&`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.9);
  `}
  
  /* Inline positioning */
  ${({$inline:n})=>n&&`
    display: inline-flex;
  `}
  
  /* Backdrop styles */
  ${({backdrop:n,backdropColor:t})=>n&&`
    background-color: ${t||"rgba(0, 0, 0, 0.5)"};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  `}
  
  /* Visibility */
  opacity: ${({visible:n})=>n!==!1?1:0};
  transition: opacity 0.3s ease-in-out;
  
  /* Responsive design */
  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    gap: ${({theme:n})=>n.spacing.xs};
  }
`,Oe=i.div`
  width: ${({$size:n})=>{switch(n){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}}};
  height: ${({$size:n})=>{switch(n){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}}};
  border: ${({$thickness:n})=>n}px solid transparent;
  border-top: ${({$thickness:n})=>n}px solid ${({$color:n})=>n};
  border-radius: 50%;
  animation: ${Re} ${({$speed:n})=>n}ms linear infinite;
`,Ye=i.div`
  display: flex;
  gap: ${({$size:n})=>{switch(n){case"xs":return"2px";case"sm":return"3px";case"lg":return"6px";case"xl":return"8px";default:return"4px"}}};
  
  div {
    width: ${({$size:n})=>{switch(n){case"xs":return"4px";case"sm":return"6px";case"lg":return"12px";case"xl":return"16px";default:return"8px"}}};
    height: ${({$size:n})=>{switch(n){case"xs":return"4px";case"sm":return"6px";case"lg":return"12px";case"xl":return"16px";default:return"8px"}}};
    background-color: ${({$color:n})=>n};
    border-radius: 50%;
    animation: ${Ue} ${({$speed:n})=>n}ms ease-in-out infinite;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: ${({$speed:n})=>n*.2}ms; }
    &:nth-child(3) { animation-delay: ${({$speed:n})=>n*.4}ms; }
  }
`,Ge=i.div`
  display: flex;
  gap: ${({$size:n})=>{switch(n){case"xs":return"1px";case"sm":return"2px";case"lg":return"4px";case"xl":return"6px";default:return"3px"}}};
  
  div {
    width: ${({$size:n})=>{switch(n){case"xs":return"2px";case"sm":return"3px";case"lg":return"6px";case"xl":return"8px";default:return"4px"}}};
    height: ${({$size:n})=>{switch(n){case"xs":return"8px";case"sm":return"12px";case"lg":return"24px";case"xl":return"32px";default:return"16px"}}};
    background-color: ${({$color:n})=>n};
    border-radius: 2px;
    animation: ${_e} ${({$speed:n})=>n}ms ease-in-out infinite;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: ${({$speed:n})=>n*.1}ms; }
    &:nth-child(3) { animation-delay: ${({$speed:n})=>n*.2}ms; }
    &:nth-child(4) { animation-delay: ${({$speed:n})=>n*.3}ms; }
  }
`,Je=i.div`
  width: ${({$size:n})=>{switch(n){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}}};
  height: ${({$size:n})=>{switch(n){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}}};
  background-color: ${({$color:n})=>n};
  border-radius: 50%;
  animation: ${He} ${({$speed:n})=>n}ms ease-in-out infinite;
`,Ke=i.div`
  position: relative;
  width: ${({$size:n})=>{switch(n){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}}};
  height: ${({$size:n})=>{switch(n){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}}};
  
  div {
    position: absolute;
    border: 2px solid ${({$color:n})=>n};
    border-radius: 50%;
    animation: ${Ee} ${({$speed:n})=>n}ms cubic-bezier(0, 0.2, 0.8, 1) infinite;
    
    &:nth-child(2) {
      animation-delay: ${({$speed:n})=>n*.5}ms;
    }
  }
`,Qe=i.div`
  position: relative;
  width: ${({$size:n})=>{switch(n){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}}};
  height: ${({$size:n})=>{switch(n){case"xs":return"16px";case"sm":return"24px";case"lg":return"48px";case"xl":return"64px";default:return"32px"}}};
  
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${({$thickness:n})=>n}px solid transparent;
    border-top: ${({$thickness:n})=>n}px solid ${({$color:n})=>n};
    border-radius: 50%;
    animation: ${Ne} ${({$speed:n})=>n}ms linear infinite;
    
    &:nth-child(2) {
      border-top-color: transparent;
      border-right: ${({$thickness:n})=>n}px solid ${({$color:n})=>n};
      animation-delay: ${({$speed:n})=>n*.25}ms;
    }
    
    &:nth-child(3) {
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom: ${({$thickness:n})=>n}px solid ${({$color:n})=>n};
      animation-delay: ${({$speed:n})=>n*.5}ms;
    }
    
    &:nth-child(4) {
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left: ${({$thickness:n})=>n}px solid ${({$color:n})=>n};
      animation-delay: ${({$speed:n})=>n*.75}ms;
    }
  }
`,P=i.div`
  color: ${({$color:n})=>n};
  font-size: ${({$size:n})=>{switch(n){case"xs":return"10px";case"sm":return"12px";case"lg":return"16px";case"xl":return"20px";default:return"14px"}}};
  font-weight: 500;
  text-align: center;
  margin-top: ${({theme:n})=>n.spacing.xs};
`,Xe=i.div`
  width: ${({$size:n})=>{switch(n){case"xs":return"60px";case"sm":return"80px";case"lg":return"120px";case"xl":return"160px";default:return"100px"}}};
  height: ${({$size:n})=>{switch(n){case"xs":return"4px";case"sm":return"6px";case"lg":return"8px";case"xl":return"12px";default:return"6px"}}};
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: ${({$size:n})=>n==="xs"?"2px":"3px"};
  overflow: hidden;
  margin-top: ${({theme:n})=>n.spacing.xs};
`,Ze=i.div`
  height: 100%;
  width: ${({$progress:n})=>n}%;
  background-color: ${({$color:n})=>n};
  transition: width 0.3s ease-in-out;
`,en=i.button`
  background: none;
  border: 1px solid ${({$color:n})=>n};
  color: ${({$color:n})=>n};
  cursor: pointer;
  padding: ${({$size:n})=>{switch(n){case"xs":return"4px 8px";case"sm":return"6px 12px";case"lg":return"8px 16px";case"xl":return"10px 20px";default:return"6px 12px"}}};
  border-radius: ${({theme:n})=>n.borderRadius.sm};
  font-size: ${({$size:n})=>{switch(n){case"xs":return"10px";case"sm":return"11px";case"lg":return"13px";case"xl":return"16px";default:return"12px"}}};
  font-weight: 500;
  transition: all 0.2s ease;
  margin-top: ${({theme:n})=>n.spacing.sm};
  
  &:hover {
    background-color: ${({$color:n})=>n};
    color: white;
  }
  
  &:focus {
    outline: 2px solid ${({$color:n})=>n};
    outline-offset: 2px;
  }
`,r=({size:n="md",variant:t="spinner",color:s="primary",customColor:o,showText:p=!1,text:ze="Loading...",fullScreen:Le=!1,inline:Te=!1,backdrop:$e=!1,backdropColor:ke,visible:k=!0,speed:l=1e3,showProgress:Ce=!1,progress:Ae=0,indeterminate:Ie=!1,thickness:C=3,showLabel:Pe=!1,label:A,centered:Be=!0,bordered:nn=!1,shadowed:rn=!1,rounded:tn=!1,backgroundColor:sn,borderColor:an,transparent:on=!1,showCancel:De=!1,cancelText:We="Cancel",onCancel:I,...Ve})=>{const a=(()=>{if(o)return o;switch(s){case"success":return"#4caf50";case"error":return"#f44336";case"warning":return"#ff9800";case"info":return"#2196f3";case"secondary":return"#9e9e9e";default:return"#1976d2"}})(),qe=()=>{switch(t){case"dots":return e.jsxs(Ye,{$size:n,$color:a,$speed:l,children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]});case"bars":return e.jsxs(Ge,{$size:n,$color:a,$speed:l,children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]});case"pulse":return e.jsx(Je,{$size:n,$color:a,$speed:l});case"ripple":return e.jsxs(Ke,{$size:n,$color:a,$speed:l,children:[e.jsx("div",{}),e.jsx("div",{})]});case"ring":return e.jsxs(Qe,{$size:n,$color:a,$speed:l,$thickness:C,children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]});default:return e.jsx(Oe,{$size:n,$color:a,$speed:l,$thickness:C})}};return k?e.jsxs(Me,{$fullScreen:Le,$centered:Be,$inline:Te,backdrop:$e,backdropColor:ke,visible:k,...Ve,children:[qe(),p&&e.jsx(P,{$size:n,$color:a,children:ze}),Pe&&A&&e.jsx(P,{$size:n,$color:a,children:A}),Ce&&e.jsx(Xe,{$size:n,children:e.jsx(Ze,{$progress:Ie?100:Ae,$color:a})}),De&&I&&e.jsx(en,{$size:n,$color:a,onClick:I,children:We})]}):null};try{r.displayName="Loading",r.__docgenInfo={description:"",displayName:"Loading",props:{size:{defaultValue:{value:"md"},description:"The size of the loading spinner",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"spinner"},description:"The variant/type of loading animation",name:"variant",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"dots"'},{value:'"bars"'},{value:'"pulse"'},{value:'"ripple"'},{value:'"ring"'}]}},color:{defaultValue:{value:"primary"},description:"The color variant of the loading component",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},customColor:{defaultValue:null,description:"Custom color for the loading component",name:"customColor",required:!1,type:{name:"string"}},showText:{defaultValue:{value:"false"},description:"Whether to show loading text",name:"showText",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"Loading..."},description:"Custom loading text",name:"text",required:!1,type:{name:"string"}},fullScreen:{defaultValue:{value:"false"},description:"Whether the loading component is full screen",name:"fullScreen",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Whether the loading component is inline",name:"inline",required:!1,type:{name:"boolean"}},backdrop:{defaultValue:{value:"false"},description:"Whether the loading component has a backdrop",name:"backdrop",required:!1,type:{name:"boolean"}},backdropColor:{defaultValue:null,description:"Custom backdrop color",name:"backdropColor",required:!1,type:{name:"string"}},visible:{defaultValue:{value:"true"},description:"Whether the loading component is visible",name:"visible",required:!1,type:{name:"boolean"}},speed:{defaultValue:{value:"1000"},description:"Animation speed in milliseconds",name:"speed",required:!1,type:{name:"number"}},showProgress:{defaultValue:{value:"false"},description:"Whether to show a progress indicator",name:"showProgress",required:!1,type:{name:"boolean"}},progress:{defaultValue:{value:"0"},description:"Progress value (0-100)",name:"progress",required:!1,type:{name:"number"}},indeterminate:{defaultValue:{value:"false"},description:"Whether the loading is indeterminate",name:"indeterminate",required:!1,type:{name:"boolean"}},thickness:{defaultValue:{value:"3"},description:"Custom spinner thickness",name:"thickness",required:!1,type:{name:"number"}},showLabel:{defaultValue:{value:"false"},description:"Whether to show a label",name:"showLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Custom label text",name:"label",required:!1,type:{name:"string"}},centered:{defaultValue:{value:"true"},description:"Whether the loading component is centered",name:"centered",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"false"},description:"Whether to show a border around the loading component",name:"bordered",required:!1,type:{name:"boolean"}},shadowed:{defaultValue:{value:"false"},description:"Whether the loading component has a shadow",name:"shadowed",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"Whether the loading component is rounded",name:"rounded",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"Custom background color",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"Custom border color",name:"borderColor",required:!1,type:{name:"string"}},transparent:{defaultValue:{value:"false"},description:"Whether the loading component is transparent",name:"transparent",required:!1,type:{name:"boolean"}},showCancel:{defaultValue:{value:"false"},description:"Whether to show a cancel button",name:"showCancel",required:!1,type:{name:"boolean"}},cancelText:{defaultValue:{value:"Cancel"},description:"Cancel button text",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"Callback when cancel button is clicked",name:"onCancel",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const gn={title:"Components/Feedback/Loading",component:r,parameters:{layout:"centered",docs:{description:{component:"A loading component that provides various loading animations and states. Features include multiple animation variants, sizes, progress indicators, and full-screen overlays."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"The size of the loading spinner"},variant:{control:{type:"select"},options:["spinner","dots","bars","pulse","ripple","ring"],description:"The variant/type of loading animation"},color:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"],description:"The color variant of the loading component"},customColor:{control:{type:"color"},description:"Custom color for the loading component"},showText:{control:{type:"boolean"},description:"Whether to show loading text"},text:{control:{type:"text"},description:"Custom loading text"},fullScreen:{control:{type:"boolean"},description:"Whether the loading component is full screen"},inline:{control:{type:"boolean"},description:"Whether the loading component is inline"},backdrop:{control:{type:"boolean"},description:"Whether the loading component has a backdrop"},backdropColor:{control:{type:"color"},description:"Custom backdrop color"},visible:{control:{type:"boolean"},description:"Whether the loading component is visible"},speed:{control:{type:"number"},description:"Animation speed in milliseconds"},showProgress:{control:{type:"boolean"},description:"Whether to show a progress indicator"},progress:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0-100)"},indeterminate:{control:{type:"boolean"},description:"Whether the loading is indeterminate"},thickness:{control:{type:"range",min:1,max:10,step:1},description:"Custom spinner thickness"},showLabel:{control:{type:"boolean"},description:"Whether to show a label"},label:{control:{type:"text"},description:"Custom label text"},centered:{control:{type:"boolean"},description:"Whether the loading component is centered"},showCancel:{control:{type:"boolean"},description:"Whether to show a cancel button"},cancelText:{control:{type:"text"},description:"Cancel button text"},onCancel:{action:"cancelled",description:"Callback when cancel button is clicked"}}},x={render:()=>e.jsx(r,{})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"spinner",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Spinner"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"dots",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Dots"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"bars",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Bars"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"pulse",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Pulse"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"ripple",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Ripple"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"ring",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Ring"})]})]}),parameters:{docs:{description:{story:"Different loading animation variants available."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"xs"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:"Extra Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"sm"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:"Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"md"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:"Medium (Default)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:"Large"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"xl"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:"Extra Large"})]})]}),parameters:{docs:{description:{story:"Different loading sizes available."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{color:"primary",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Primary"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{color:"secondary",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Secondary"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{color:"success",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Success"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{color:"error",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Error"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{color:"warning",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Warning"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{color:"info",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Info"})]})]}),parameters:{docs:{description:{story:"Different color variants available."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[e.jsx(r,{showText:!0,text:"Loading..."}),e.jsx(r,{showText:!0,text:"Please wait..."}),e.jsx(r,{showText:!0,text:"Processing request..."}),e.jsx(r,{showText:!0,text:"Uploading files..."})]}),parameters:{docs:{description:{story:"Loading components with text labels."}}}},v={render:()=>{const[n,t]=$.useState(0);return Fe.useEffect(()=>{const s=setInterval(()=>{t(o=>o>=100?(clearInterval(s),100):o+10)},500);return()=>clearInterval(s)},[]),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[e.jsx(r,{showProgress:!0,progress:n,showText:!0,text:`Loading... ${n}%`}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{marginBottom:"8px"},children:"Indeterminate Progress:"}),e.jsx(r,{showProgress:!0,indeterminate:!0,showText:!0,text:"Processing..."})]})]})},parameters:{docs:{description:{story:"Loading components with progress indicators."}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{customColor:"#e91e63",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Pink"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{customColor:"#9c27b0",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Purple"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{customColor:"#ff9800",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Orange"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{customColor:"#795548",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Brown"})]})]}),parameters:{docs:{description:{story:"Loading components with custom colors."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{speed:500,size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Fast (500ms)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{speed:1e3,size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Normal (1000ms)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{speed:2e3,size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Slow (2000ms)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{speed:3e3,size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Very Slow (3000ms)"})]})]}),parameters:{docs:{description:{story:"Loading components with different animation speeds."}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"spinner",thickness:1,size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Thin (1px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"spinner",thickness:3,size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Normal (3px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"spinner",thickness:6,size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Thick (6px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"spinner",thickness:10,size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Very Thick (10px)"})]})]}),parameters:{docs:{description:{story:"Spinner variants with different thickness values."}}}},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{inline:!0,size:"xs"}),e.jsx("span",{children:"Loading data..."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{inline:!0,size:"sm"}),e.jsx("span",{children:"Processing request..."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{inline:!0,size:"md"}),e.jsx("span",{children:"Uploading files..."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{inline:!0,size:"lg"}),e.jsx("span",{children:"Initializing application..."})]})]}),parameters:{docs:{description:{story:"Inline loading components that fit within text lines."}}}},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[e.jsx(r,{showLabel:!0,label:"Connecting to server..."}),e.jsx(r,{showLabel:!0,label:"Downloading updates..."}),e.jsx(r,{showLabel:!0,label:"Installing packages..."}),e.jsx(r,{showLabel:!0,label:"Building project..."})]}),parameters:{docs:{description:{story:"Loading components with custom labels."}}}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[e.jsx(r,{showCancel:!0,cancelText:"Cancel Upload",onCancel:()=>alert("Upload cancelled!"),showText:!0,text:"Uploading large file..."}),e.jsx(r,{showCancel:!0,cancelText:"Stop Processing",onCancel:()=>alert("Processing stopped!"),showText:!0,text:"Processing data..."})]}),parameters:{docs:{description:{story:"Loading components with cancel buttons."}}}},z={render:()=>{const[n,t]=$.useState(!1);return e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(d,{onClick:()=>t(!0),children:"Show Full Screen Loading"}),n&&e.jsx(r,{fullScreen:!0,showText:!0,text:"Loading application...",showCancel:!0,cancelText:"Skip Loading",onCancel:()=>t(!1)})]})},parameters:{docs:{description:{story:"Full screen loading overlay with cancel option."}}}},L={render:()=>{const[n,t]=$.useState(!1);return e.jsxs("div",{style:{position:"relative",minHeight:"200px",border:"1px solid #ddd",padding:"20px"},children:[e.jsx("div",{style:{textAlign:"center",marginBottom:"20px"},children:e.jsx(d,{onClick:()=>t(!0),children:"Show Backdrop Loading"})}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[e.jsx("p",{children:"This is the content area. When backdrop loading is active, it will be covered."}),e.jsx("p",{children:"Click the button above to see the backdrop loading effect."})]}),n&&e.jsx(r,{backdrop:!0,backdropColor:"rgba(0, 0, 0, 0.7)",showText:!0,text:"Processing in background...",showCancel:!0,cancelText:"Hide",onCancel:()=>t(!1)})]})},parameters:{docs:{description:{story:"Loading component with backdrop overlay."}}}},T={render:()=>{const[n,t]=$.useState({spinner:!0,dots:!0,bars:!0,pulse:!0}),s=o=>{t(p=>({...p,[o]:!p[o]}))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsxs(d,{onClick:()=>s("spinner"),children:[n.spinner?"Hide":"Show"," Spinner"]}),e.jsxs(d,{onClick:()=>s("dots"),children:[n.dots?"Hide":"Show"," Dots"]}),e.jsxs(d,{onClick:()=>s("bars"),children:[n.bars?"Hide":"Show"," Bars"]}),e.jsxs(d,{onClick:()=>s("pulse"),children:[n.pulse?"Hide":"Show"," Pulse"]})]}),e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center",justifyContent:"center"},children:[n.spinner&&e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"spinner",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Spinner"})]}),n.dots&&e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"dots",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Dots"})]}),n.bars&&e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"bars",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Bars"})]}),n.pulse&&e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"pulse",size:"lg"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"14px"},children:"Pulse"})]})]})]})},parameters:{docs:{description:{story:"Interactive demonstration of multiple loading states."}}}};var B,D,W;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Loading />
}`,...(W=(D=x.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var V,q,F;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="spinner" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Spinner</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="dots" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Dots</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="bars" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Bars</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="pulse" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Pulse</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="ripple" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Ripple</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="ring" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Ring</div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different loading animation variants available.'
      }
    }
  }
}`,...(F=(q=g.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,H,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading size="xs" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>Extra Small</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading size="sm" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>Small</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading size="md" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>Medium (Default)</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>Large</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading size="xl" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>Extra Large</div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different loading sizes available.'
      }
    }
  }
}`,...(E=(H=u.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var U,_,N;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading color="primary" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Primary</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading color="secondary" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Secondary</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading color="success" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Success</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading color="error" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Error</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading color="warning" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Warning</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading color="info" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Info</div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different color variants available.'
      }
    }
  }
}`,...(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var M,O,Y;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <Loading showText={true} text="Loading..." />\r
      <Loading showText={true} text="Please wait..." />\r
      <Loading showText={true} text="Processing request..." />\r
      <Loading showText={true} text="Uploading files..." />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading components with text labels.'
      }
    }
  }
}`,...(Y=(O=h.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(interval);
    }, []);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'center'
    }}>\r
        <Loading showProgress={true} progress={progress} showText={true} text={\`Loading... \${progress}%\`} />\r
        \r
        <div style={{
        textAlign: 'center'
      }}>\r
          <div style={{
          marginBottom: '8px'
        }}>Indeterminate Progress:</div>\r
          <Loading showProgress={true} indeterminate={true} showText={true} text="Processing..." />\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading components with progress indicators.'
      }
    }
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading customColor="#e91e63" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Pink</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading customColor="#9c27b0" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Purple</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading customColor="#ff9800" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Orange</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading customColor="#795548" size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Brown</div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading components with custom colors.'
      }
    }
  }
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,re;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading speed={500} size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Fast (500ms)</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading speed={1000} size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Normal (1000ms)</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading speed={2000} size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Slow (2000ms)</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading speed={3000} size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Very Slow (3000ms)</div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading components with different animation speeds.'
      }
    }
  }
}`,...(re=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,se,ie;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="spinner" thickness={1} size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Thin (1px)</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="spinner" thickness={3} size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Normal (3px)</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="spinner" thickness={6} size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Thick (6px)</div>\r
      </div>\r
      \r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Loading variant="spinner" thickness={10} size="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Very Thick (10px)</div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Spinner variants with different thickness values.'
      }
    }
  }
}`,...(ie=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ae,oe,le;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>\r
        <Loading inline={true} size="xs" />\r
        <span>Loading data...</span>\r
      </div>\r
      \r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>\r
        <Loading inline={true} size="sm" />\r
        <span>Processing request...</span>\r
      </div>\r
      \r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>\r
        <Loading inline={true} size="md" />\r
        <span>Uploading files...</span>\r
      </div>\r
      \r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>\r
        <Loading inline={true} size="lg" />\r
        <span>Initializing application...</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Inline loading components that fit within text lines.'
      }
    }
  }
}`,...(le=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var de,ce,pe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <Loading showLabel={true} label="Connecting to server..." />\r
      <Loading showLabel={true} label="Downloading updates..." />\r
      <Loading showLabel={true} label="Installing packages..." />\r
      <Loading showLabel={true} label="Building project..." />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading components with custom labels.'
      }
    }
  }
}`,...(pe=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var xe,ge,ue;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <Loading showCancel={true} cancelText="Cancel Upload" onCancel={() => alert('Upload cancelled!')} showText={true} text="Uploading large file..." />\r
      \r
      <Loading showCancel={true} cancelText="Stop Processing" onCancel={() => alert('Processing stopped!')} showText={true} text="Processing data..." />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading components with cancel buttons.'
      }
    }
  }
}`,...(ue=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var me,he,ve;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    return <div style={{
      textAlign: 'center'
    }}>\r
        <Button onClick={() => setShowFullScreen(true)}>\r
          Show Full Screen Loading\r
        </Button>\r
        \r
        {showFullScreen && <Loading fullScreen={true} showText={true} text="Loading application..." showCancel={true} cancelText="Skip Loading" onCancel={() => setShowFullScreen(false)} />}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Full screen loading overlay with cancel option.'
      }
    }
  }
}`,...(ve=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,ye,be;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const [showBackdrop, setShowBackdrop] = useState(false);
    return <div style={{
      position: 'relative',
      minHeight: '200px',
      border: '1px solid #ddd',
      padding: '20px'
    }}>\r
        <div style={{
        textAlign: 'center',
        marginBottom: '20px'
      }}>\r
          <Button onClick={() => setShowBackdrop(true)}>\r
            Show Backdrop Loading\r
          </Button>\r
        </div>\r
        \r
        <div style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>\r
          <p>This is the content area. When backdrop loading is active, it will be covered.</p>\r
          <p>Click the button above to see the backdrop loading effect.</p>\r
        </div>\r
        \r
        {showBackdrop && <Loading backdrop={true} backdropColor="rgba(0, 0, 0, 0.7)" showText={true} text="Processing in background..." showCancel={true} cancelText="Hide" onCancel={() => setShowBackdrop(false)} />}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading component with backdrop overlay.'
      }
    }
  }
}`,...(be=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var je,Se,we;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [loadingStates, setLoadingStates] = useState({
      spinner: true,
      dots: true,
      bars: true,
      pulse: true
    });
    const toggleLoading = (key: keyof typeof loadingStates) => {
      setLoadingStates(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>\r
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>\r
          <Button onClick={() => toggleLoading('spinner')}>\r
            {loadingStates.spinner ? 'Hide' : 'Show'} Spinner\r
          </Button>\r
          <Button onClick={() => toggleLoading('dots')}>\r
            {loadingStates.dots ? 'Hide' : 'Show'} Dots\r
          </Button>\r
          <Button onClick={() => toggleLoading('bars')}>\r
            {loadingStates.bars ? 'Hide' : 'Show'} Bars\r
          </Button>\r
          <Button onClick={() => toggleLoading('pulse')}>\r
            {loadingStates.pulse ? 'Hide' : 'Show'} Pulse\r
          </Button>\r
        </div>\r
        \r
        <div style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>\r
          {loadingStates.spinner && <div style={{
          textAlign: 'center'
        }}>\r
              <Loading variant="spinner" size="lg" />\r
              <div style={{
            marginTop: '8px',
            fontSize: '14px'
          }}>Spinner</div>\r
            </div>}\r
          \r
          {loadingStates.dots && <div style={{
          textAlign: 'center'
        }}>\r
              <Loading variant="dots" size="lg" />\r
              <div style={{
            marginTop: '8px',
            fontSize: '14px'
          }}>Dots</div>\r
            </div>}\r
          \r
          {loadingStates.bars && <div style={{
          textAlign: 'center'
        }}>\r
              <Loading variant="bars" size="lg" />\r
              <div style={{
            marginTop: '8px',
            fontSize: '14px'
          }}>Bars</div>\r
            </div>}\r
          \r
          {loadingStates.pulse && <div style={{
          textAlign: 'center'
        }}>\r
              <Loading variant="pulse" size="lg" />\r
              <div style={{
            marginTop: '8px',
            fontSize: '14px'
          }}>Pulse</div>\r
            </div>}\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of multiple loading states.'
      }
    }
  }
}`,...(we=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const un=["Basic","DifferentVariants","DifferentSizes","DifferentColors","WithText","WithProgress","CustomColors","DifferentSpeeds","DifferentThickness","InlineLoading","WithLabels","WithCancelButton","FullScreenLoading","BackdropLoading","MultipleLoadingStates"];export{L as BackdropLoading,x as Basic,f as CustomColors,m as DifferentColors,u as DifferentSizes,y as DifferentSpeeds,b as DifferentThickness,g as DifferentVariants,z as FullScreenLoading,j as InlineLoading,T as MultipleLoadingStates,w as WithCancelButton,S as WithLabels,v as WithProgress,h as WithText,un as __namedExportsOrder,gn as default};
