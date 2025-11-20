import{j as r}from"./styled-components.browser.esm-6cdfd3cd.js";import{B as o}from"./Box-8deee1ca.js";import{T as n}from"./Typography-984ac10a.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const or={title:"Components/Layout/Box",component:o,parameters:{layout:"centered",docs:{description:{component:"A flexible container component that provides comprehensive control over spacing, dimensions, positioning, and styling. Perfect for layout composition and spacing utilities."}}},tags:["autodocs"],argTypes:{padding:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Padding around all sides"},paddingX:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Horizontal padding (left and right)"},paddingY:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Vertical padding (top and bottom)"},paddingTop:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Top padding"},paddingRight:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Right padding"},paddingBottom:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Bottom padding"},paddingLeft:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Left padding"},margin:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Margin around all sides"},marginX:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Horizontal margin (left and right)"},marginY:{control:{type:"select"},options:["xs","sm","md","lg","xl","none"],description:"Vertical margin (top and bottom)"},display:{control:{type:"select"},options:["block","inline","inline-block","flex","inline-flex","grid","inline-grid","none"],description:"Display property"},width:{control:{type:"text"},description:"Width of the box"},height:{control:{type:"text"},description:"Height of the box"},backgroundColor:{control:{type:"color"},description:"Background color"},border:{control:{type:"text"},description:"Border style"},borderRadius:{control:{type:"text"},description:"Border radius"},boxShadow:{control:{type:"text"},description:"Box shadow"},as:{control:{type:"text"},description:"HTML element to render"}}},e=({title:q,description:J})=>r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(n,{variant:"h6",style:{marginBottom:"8px"},children:q}),r.jsx(n,{variant:"body2",children:J})]}),i={args:{padding:"md",backgroundColor:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"8px",children:r.jsx(e,{title:"Basic Box",description:"This is a basic box with default padding and styling."})}},d={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Small Padding"}),r.jsx(o,{padding:"xs",backgroundColor:"#e3f2fd",border:"1px solid #bbdefb",borderRadius:"6px",children:r.jsx(e,{title:"Extra Small Padding",description:"This box has minimal padding for compact layouts."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Small Padding"}),r.jsx(o,{padding:"sm",backgroundColor:"#f3e5f5",border:"1px solid #e1bee7",borderRadius:"6px",children:r.jsx(e,{title:"Small Padding",description:"This box has small padding for tight layouts."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Medium Padding (Default)"}),r.jsx(o,{padding:"md",backgroundColor:"#e8f5e8",border:"1px solid #c8e6c9",borderRadius:"6px",children:r.jsx(e,{title:"Medium Padding",description:"This box has standard padding, the default setting."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Large Padding"}),r.jsx(o,{padding:"lg",backgroundColor:"#fff3e0",border:"1px solid #ffcc80",borderRadius:"6px",children:r.jsx(e,{title:"Large Padding",description:"This box has generous padding for spacious layouts."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Large Padding"}),r.jsx(o,{padding:"xl",backgroundColor:"#fce4ec",border:"1px solid #f8bbd9",borderRadius:"6px",children:r.jsx(e,{title:"Extra Large Padding",description:"This box has maximum padding for very spacious layouts."})})]})]}),parameters:{docs:{description:{story:"Different padding options available for the box component."}}}},a={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Horizontal Padding"}),r.jsx(o,{paddingX:"lg",paddingY:"xs",backgroundColor:"#e3f2fd",border:"1px solid #bbdefb",borderRadius:"6px",children:r.jsx(e,{title:"Custom Horizontal Padding",description:"This box has large horizontal padding but small vertical padding."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Vertical Padding"}),r.jsx(o,{paddingX:"xs",paddingY:"lg",backgroundColor:"#f3e5f5",border:"1px solid #e1bee7",borderRadius:"6px",children:r.jsx(e,{title:"Custom Vertical Padding",description:"This box has small horizontal padding but large vertical padding."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Individual Side Padding"}),r.jsx(o,{paddingTop:"xl",paddingRight:"sm",paddingBottom:"xs",paddingLeft:"lg",backgroundColor:"#e8f5e8",border:"1px solid #c8e6c9",borderRadius:"6px",children:r.jsx(e,{title:"Individual Side Padding",description:"This box has different padding on each side for custom layouts."})})]})]}),parameters:{docs:{description:{story:"Custom padding configurations for different axes and individual sides."}}}},t={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"With Margin"}),r.jsx(o,{padding:"md",margin:"lg",backgroundColor:"#e3f2fd",border:"1px solid #bbdefb",borderRadius:"6px",children:r.jsx(e,{title:"Box with Margin",description:"This box has large margin around it, creating space from other elements."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Margin Axes"}),r.jsx(o,{padding:"md",marginX:"xl",marginY:"sm",backgroundColor:"#f3e5f5",border:"1px solid #e1bee7",borderRadius:"6px",children:r.jsx(e,{title:"Custom Margin Axes",description:"This box has extra large horizontal margin but small vertical margin."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Individual Side Margins"}),r.jsx(o,{padding:"md",marginTop:"xl",marginRight:"md",marginBottom:"xs",marginLeft:"lg",backgroundColor:"#e8f5e8",border:"1px solid #c8e6c9",borderRadius:"6px",children:r.jsx(e,{title:"Individual Side Margins",description:"This box has different margins on each side for custom spacing."})})]})]}),parameters:{docs:{description:{story:"Different margin configurations for the box component."}}}},s={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Block Display (Default)"}),r.jsxs("div",{style:{border:"1px solid #ddd",padding:"16px",borderRadius:"6px"},children:[r.jsx(o,{display:"block",padding:"sm",backgroundColor:"#e3f2fd",borderRadius:"4px",children:"Block Box 1"}),r.jsx(o,{display:"block",padding:"sm",backgroundColor:"#f3e5f5",borderRadius:"4px",children:"Block Box 2"})]})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Inline Display"}),r.jsxs("div",{style:{border:"1px solid #ddd",padding:"16px",borderRadius:"6px"},children:[r.jsx(o,{display:"inline",padding:"sm",backgroundColor:"#e3f2fd",borderRadius:"4px",children:"Inline Box 1"}),r.jsx(o,{display:"inline",padding:"sm",backgroundColor:"#f3e5f5",borderRadius:"4px",children:"Inline Box 2"}),r.jsx(n,{variant:"body2",style:{marginTop:"8px"},children:"Notice how inline boxes flow with text and don't create line breaks."})]})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Flex Display"}),r.jsxs(o,{display:"flex",padding:"md",backgroundColor:"#e8f5e8",border:"1px solid #c8e6c9",borderRadius:"6px",style:{gap:"12px"},children:[r.jsx(o,{padding:"sm",backgroundColor:"#c8e6c9",borderRadius:"4px",children:"Flex Item 1"}),r.jsx(o,{padding:"sm",backgroundColor:"#a5d6a7",borderRadius:"4px",children:"Flex Item 2"}),r.jsx(o,{padding:"sm",backgroundColor:"#81c784",borderRadius:"4px",children:"Flex Item 3"})]})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Grid Display"}),r.jsxs(o,{display:"grid",padding:"md",backgroundColor:"#fff3e0",border:"1px solid #ffcc80",borderRadius:"6px",style:{gridTemplateColumns:"repeat(3, 1fr)",gap:"12px"},children:[r.jsx(o,{padding:"sm",backgroundColor:"#ffcc80",borderRadius:"4px",children:"Grid Item 1"}),r.jsx(o,{padding:"sm",backgroundColor:"#ffb74d",borderRadius:"4px",children:"Grid Item 2"}),r.jsx(o,{padding:"sm",backgroundColor:"#ffa726",borderRadius:"4px",children:"Grid Item 3"})]})]})]}),parameters:{docs:{description:{story:"Different display properties and their effects on box layout."}}}},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Fixed Dimensions"}),r.jsx(o,{width:300,height:150,padding:"md",backgroundColor:"#e3f2fd",border:"1px solid #bbdefb",borderRadius:"6px",children:r.jsx(e,{title:"Fixed Dimensions",description:"This box has a fixed width of 300px and height of 150px."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Percentage Dimensions"}),r.jsx(o,{width:"80%",height:"120px",padding:"md",backgroundColor:"#f3e5f5",border:"1px solid #e1bee7",borderRadius:"6px",children:r.jsx(e,{title:"Percentage Dimensions",description:"This box has 80% width and 120px height."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Min/Max Dimensions"}),r.jsx(o,{minWidth:200,maxWidth:"600px",minHeight:100,maxHeight:200,padding:"md",backgroundColor:"#e8f5e8",border:"1px solid #c8e6c9",borderRadius:"6px",children:r.jsx(e,{title:"Min/Max Dimensions",description:"This box has minimum and maximum constraints on both width and height."})})]})]}),parameters:{docs:{description:{story:"Different dimension and sizing options for the box component."}}}},l={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Background and Border"}),r.jsx(o,{padding:"lg",backgroundColor:"#fce4ec",border:"2px solid #f48fb1",borderRadius:"12px",children:r.jsx(e,{title:"Styled Box",description:"This box has a custom background color, border, and border radius."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Box Shadow"}),r.jsx(o,{padding:"lg",backgroundColor:"#fff",border:"1px solid #e0e0e0",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",children:r.jsx(e,{title:"Box with Shadow",description:"This box has a subtle box shadow for depth and elevation."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Styling"}),r.jsx(o,{padding:"xl",backgroundColor:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"3px solid #5a67d8",borderRadius:"16px",boxShadow:"0 10px 25px rgba(102, 126, 234, 0.3)",style:{color:"white"},children:r.jsx(e,{title:"Gradient Box",description:"This box uses a gradient background and enhanced shadows for a premium look."})})]})]}),parameters:{docs:{description:{story:"Different styling and appearance options for the box component."}}}},x={render:()=>r.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px",padding:"16px"},children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Positioning Examples"}),r.jsx(o,{position:"absolute",top:20,left:20,padding:"md",backgroundColor:"#e3f2fd",border:"1px solid #bbdefb",borderRadius:"6px",width:150,children:r.jsx(n,{variant:"body2",children:"Absolute Top-Left"})}),r.jsx(o,{position:"absolute",top:20,right:20,padding:"md",backgroundColor:"#f3e5f5",border:"1px solid #e1bee7",borderRadius:"6px",width:150,children:r.jsx(n,{variant:"body2",children:"Absolute Top-Right"})}),r.jsx(o,{position:"absolute",bottom:20,left:20,padding:"md",backgroundColor:"#e8f5e8",border:"1px solid #c8e6c9",borderRadius:"6px",width:150,children:r.jsx(n,{variant:"body2",children:"Absolute Bottom-Left"})}),r.jsx(o,{position:"absolute",bottom:20,right:20,padding:"md",backgroundColor:"#fff3e0",border:"1px solid #ffcc80",borderRadius:"6px",width:150,children:r.jsx(n,{variant:"body2",children:"Absolute Bottom-Right"})}),r.jsx(o,{position:"absolute",top:"50%",left:"50%",padding:"md",backgroundColor:"#fce4ec",border:"1px solid #f48fb1",borderRadius:"6px",width:150,style:{transform:"translate(-50%, -50%)"},children:r.jsx(n,{variant:"body2",children:"Absolute Center"})})]}),parameters:{docs:{description:{story:"Different positioning options for the box component."}}}},c={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Visible Overflow (Default)"}),r.jsx(o,{width:200,height:100,padding:"md",backgroundColor:"#e3f2fd",border:"1px solid #bbdefb",borderRadius:"6px",overflow:"visible",children:r.jsx(n,{variant:"body2",children:"This box has visible overflow, so content extends beyond the box boundaries."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Hidden Overflow"}),r.jsx(o,{width:200,height:100,padding:"md",backgroundColor:"#f3e5f5",border:"1px solid #e1bee7",borderRadius:"6px",overflow:"hidden",children:r.jsx(n,{variant:"body2",children:"This box has hidden overflow, so content is clipped at the box boundaries."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"Scroll Overflow"}),r.jsx(o,{width:200,height:100,padding:"md",backgroundColor:"#e8f5e8",border:"1px solid #c8e6c9",borderRadius:"6px",overflow:"scroll",children:r.jsx(n,{variant:"body2",children:"This box has scroll overflow, so scrollbars appear when content exceeds the box size."})})]})]}),parameters:{docs:{description:{story:"Different overflow handling options for the box component."}}}},g={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"As Main Element"}),r.jsx(o,{as:"main",padding:"lg",backgroundColor:"#e3f2fd",border:"1px solid #bbdefb",borderRadius:"6px",children:r.jsx(e,{title:"Main Box",description:"This box is rendered as a main HTML element for semantic meaning."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"As Section Element"}),r.jsx(o,{as:"section",padding:"lg",backgroundColor:"#f3e5f5",border:"1px solid #e1bee7",borderRadius:"6px",children:r.jsx(e,{title:"Section Box",description:"This box is rendered as a section HTML element for content organization."})})]}),r.jsxs("div",{children:[r.jsx(n,{variant:"h6",style:{marginBottom:"16px"},children:"As Article Element"}),r.jsx(o,{as:"article",padding:"lg",backgroundColor:"#e8f5e8",border:"1px solid #c8e6c9",borderRadius:"6px",children:r.jsx(e,{title:"Article Box",description:"This box is rendered as an article HTML element for self-contained content."})})]})]}),parameters:{docs:{description:{story:"Using the Box component with different semantic HTML elements for better accessibility."}}}},h={render:()=>r.jsx("div",{style:{backgroundColor:"#f8f9fa",minHeight:"100vh",padding:"24px"},children:r.jsxs(o,{as:"main",maxWidth:"1200px",margin:"0 auto",children:[r.jsxs(o,{as:"header",padding:"lg",marginBottom:"xl",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",children:[r.jsx(n,{variant:"h1",style:{textAlign:"center",marginBottom:"16px"},children:"Layout Example"}),r.jsx(n,{variant:"body1",style:{textAlign:"center"},children:"This demonstrates how the Box component can be used to create complex layouts."})]}),r.jsxs(o,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",marginBottom:"xl",children:[r.jsxs(o,{padding:"lg",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",children:[r.jsx(n,{variant:"h3",style:{marginBottom:"16px"},children:"Feature 1"}),r.jsx(n,{variant:"body1",children:"The Box component provides flexible layout capabilities with comprehensive spacing control."})]}),r.jsxs(o,{padding:"lg",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",children:[r.jsx(n,{variant:"h3",style:{marginBottom:"16px"},children:"Feature 2"}),r.jsx(n,{variant:"body1",children:"Easy to use with theme-based spacing values and responsive design patterns."})]}),r.jsxs(o,{padding:"lg",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",children:[r.jsx(n,{variant:"h3",style:{marginBottom:"16px"},children:"Feature 3"}),r.jsx(n,{variant:"body1",children:"Perfect for creating consistent layouts and spacing throughout your application."})]})]}),r.jsx(o,{as:"footer",padding:"lg",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",textAlign:"center",children:r.jsx(n,{variant:"body2",color:"secondary",children:"Built with the Box component for consistent spacing and layout."})})]})}),parameters:{docs:{description:{story:"A real-world example showing how the Box component can be used to create complete page layouts."}}}};var m,b,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    padding: 'md',
    backgroundColor: '#f8f9fa',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    children: <SampleContent title="Basic Box" description="This is a basic box with default padding and styling." />
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,u,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Small Padding</Typography>\r
        <Box padding="xs" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px">\r
          <SampleContent title="Extra Small Padding" description="This box has minimal padding for compact layouts." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Small Padding</Typography>\r
        <Box padding="sm" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px">\r
          <SampleContent title="Small Padding" description="This box has small padding for tight layouts." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Medium Padding (Default)</Typography>\r
        <Box padding="md" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px">\r
          <SampleContent title="Medium Padding" description="This box has standard padding, the default setting." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Large Padding</Typography>\r
        <Box padding="lg" backgroundColor="#fff3e0" border="1px solid #ffcc80" borderRadius="6px">\r
          <SampleContent title="Large Padding" description="This box has generous padding for spacious layouts." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Large Padding</Typography>\r
        <Box padding="xl" backgroundColor="#fce4ec" border="1px solid #f8bbd9" borderRadius="6px">\r
          <SampleContent title="Extra Large Padding" description="This box has maximum padding for very spacious layouts." />\r
        </Box>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different padding options available for the box component.'
      }
    }
  }
}`,...(v=(u=d.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var B,T,j;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Horizontal Padding</Typography>\r
        <Box paddingX="lg" paddingY="xs" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px">\r
          <SampleContent title="Custom Horizontal Padding" description="This box has large horizontal padding but small vertical padding." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Vertical Padding</Typography>\r
        <Box paddingX="xs" paddingY="lg" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px">\r
          <SampleContent title="Custom Vertical Padding" description="This box has small horizontal padding but large vertical padding." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Individual Side Padding</Typography>\r
        <Box paddingTop="xl" paddingRight="sm" paddingBottom="xs" paddingLeft="lg" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px">\r
          <SampleContent title="Individual Side Padding" description="This box has different padding on each side for custom layouts." />\r
        </Box>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom padding configurations for different axes and individual sides.'
      }
    }
  }
}`,...(j=(T=a.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var C,w,k;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>With Margin</Typography>\r
        <Box padding="md" margin="lg" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px">\r
          <SampleContent title="Box with Margin" description="This box has large margin around it, creating space from other elements." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Margin Axes</Typography>\r
        <Box padding="md" marginX="xl" marginY="sm" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px">\r
          <SampleContent title="Custom Margin Axes" description="This box has extra large horizontal margin but small vertical margin." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Individual Side Margins</Typography>\r
        <Box padding="md" marginTop="xl" marginRight="md" marginBottom="xs" marginLeft="lg" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px">\r
          <SampleContent title="Individual Side Margins" description="This box has different margins on each side for custom spacing." />\r
        </Box>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different margin configurations for the box component.'
      }
    }
  }
}`,...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var R,S,D;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Block Display (Default)</Typography>\r
        <div style={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '6px'
      }}>\r
          <Box display="block" padding="sm" backgroundColor="#e3f2fd" borderRadius="4px">\r
            Block Box 1\r
          </Box>\r
          <Box display="block" padding="sm" backgroundColor="#f3e5f5" borderRadius="4px">\r
            Block Box 2\r
          </Box>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Inline Display</Typography>\r
        <div style={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '6px'
      }}>\r
          <Box display="inline" padding="sm" backgroundColor="#e3f2fd" borderRadius="4px">\r
            Inline Box 1\r
          </Box>\r
          <Box display="inline" padding="sm" backgroundColor="#f3e5f5" borderRadius="4px">\r
            Inline Box 2\r
          </Box>\r
          <Typography variant="body2" style={{
          marginTop: '8px'
        }}>\r
            Notice how inline boxes flow with text and don't create line breaks.\r
          </Typography>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Flex Display</Typography>\r
        <Box display="flex" padding="md" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px" style={{
        gap: '12px'
      }}>\r
          <Box padding="sm" backgroundColor="#c8e6c9" borderRadius="4px">Flex Item 1</Box>\r
          <Box padding="sm" backgroundColor="#a5d6a7" borderRadius="4px">Flex Item 2</Box>\r
          <Box padding="sm" backgroundColor="#81c784" borderRadius="4px">Flex Item 3</Box>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Grid Display</Typography>\r
        <Box display="grid" padding="md" backgroundColor="#fff3e0" border="1px solid #ffcc80" borderRadius="6px" style={{
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px'
      }}>\r
          <Box padding="sm" backgroundColor="#ffcc80" borderRadius="4px">Grid Item 1</Box>\r
          <Box padding="sm" backgroundColor="#ffb74d" borderRadius="4px">Grid Item 2</Box>\r
          <Box padding="sm" backgroundColor="#ffa726" borderRadius="4px">Grid Item 3</Box>\r
        </Box>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different display properties and their effects on box layout.'
      }
    }
  }
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var P,A,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Fixed Dimensions</Typography>\r
        <Box width={300} height={150} padding="md" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px">\r
          <SampleContent title="Fixed Dimensions" description="This box has a fixed width of 300px and height of 150px." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Percentage Dimensions</Typography>\r
        <Box width="80%" height="120px" padding="md" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px">\r
          <SampleContent title="Percentage Dimensions" description="This box has 80% width and 120px height." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Min/Max Dimensions</Typography>\r
        <Box minWidth={200} maxWidth="600px" minHeight={100} maxHeight={200} padding="md" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px">\r
          <SampleContent title="Min/Max Dimensions" description="This box has minimum and maximum constraints on both width and height." />\r
        </Box>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different dimension and sizing options for the box component.'
      }
    }
  }
}`,...(M=(A=p.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,L,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Background and Border</Typography>\r
        <Box padding="lg" backgroundColor="#fce4ec" border="2px solid #f48fb1" borderRadius="12px">\r
          <SampleContent title="Styled Box" description="This box has a custom background color, border, and border radius." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Box Shadow</Typography>\r
        <Box padding="lg" backgroundColor="#fff" border="1px solid #e0e0e0" borderRadius="8px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)">\r
          <SampleContent title="Box with Shadow" description="This box has a subtle box shadow for depth and elevation." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Styling</Typography>\r
        <Box padding="xl" backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" border="3px solid #5a67d8" borderRadius="16px" boxShadow="0 10px 25px rgba(102, 126, 234, 0.3)" style={{
        color: 'white'
      }}>\r
          <SampleContent title="Gradient Box" description="This box uses a gradient background and enhanced shadows for a premium look." />\r
        </Box>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different styling and appearance options for the box component.'
      }
    }
  }
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var H,z,F;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    height: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px'
  }}>\r
      <Typography variant="h6" style={{
      marginBottom: '16px'
    }}>Positioning Examples</Typography>\r
      \r
      <Box position="absolute" top={20} left={20} padding="md" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px" width={150}>\r
        <Typography variant="body2">Absolute Top-Left</Typography>\r
      </Box>\r
      \r
      <Box position="absolute" top={20} right={20} padding="md" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px" width={150}>\r
        <Typography variant="body2">Absolute Top-Right</Typography>\r
      </Box>\r
      \r
      <Box position="absolute" bottom={20} left={20} padding="md" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px" width={150}>\r
        <Typography variant="body2">Absolute Bottom-Left</Typography>\r
      </Box>\r
      \r
      <Box position="absolute" bottom={20} right={20} padding="md" backgroundColor="#fff3e0" border="1px solid #ffcc80" borderRadius="6px" width={150}>\r
        <Typography variant="body2">Absolute Bottom-Right</Typography>\r
      </Box>\r
      \r
      <Box position="absolute" top="50%" left="50%" padding="md" backgroundColor="#fce4ec" border="1px solid #f48fb1" borderRadius="6px" width={150} style={{
      transform: 'translate(-50%, -50%)'
    }}>\r
        <Typography variant="body2">Absolute Center</Typography>\r
      </Box>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different positioning options for the box component.'
      }
    }
  }
}`,...(F=(z=x.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,W,O;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Visible Overflow (Default)</Typography>\r
        <Box width={200} height={100} padding="md" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px" overflow="visible">\r
          <Typography variant="body2">\r
            This box has visible overflow, so content extends beyond the box boundaries.\r
          </Typography>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Hidden Overflow</Typography>\r
        <Box width={200} height={100} padding="md" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px" overflow="hidden">\r
          <Typography variant="body2">\r
            This box has hidden overflow, so content is clipped at the box boundaries.\r
          </Typography>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Scroll Overflow</Typography>\r
        <Box width={200} height={100} padding="md" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px" overflow="scroll">\r
          <Typography variant="body2">\r
            This box has scroll overflow, so scrollbars appear when content exceeds the box size.\r
          </Typography>\r
        </Box>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different overflow handling options for the box component.'
      }
    }
  }
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var V,X,Y;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>As Main Element</Typography>\r
        <Box as="main" padding="lg" backgroundColor="#e3f2fd" border="1px solid #bbdefb" borderRadius="6px">\r
          <SampleContent title="Main Box" description="This box is rendered as a main HTML element for semantic meaning." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>As Section Element</Typography>\r
        <Box as="section" padding="lg" backgroundColor="#f3e5f5" border="1px solid #e1bee7" borderRadius="6px">\r
          <SampleContent title="Section Box" description="This box is rendered as a section HTML element for content organization." />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>As Article Element</Typography>\r
        <Box as="article" padding="lg" backgroundColor="#e8f5e8" border="1px solid #c8e6c9" borderRadius="6px">\r
          <SampleContent title="Article Box" description="This box is rendered as an article HTML element for self-contained content." />\r
        </Box>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Using the Box component with different semantic HTML elements for better accessibility.'
      }
    }
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var N,U,_;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '24px'
  }}>\r
      <Box as="main" maxWidth="1200px" margin="0 auto">\r
        {/* Header */}\r
        <Box as="header" padding="lg" marginBottom="xl" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)">\r
          <Typography variant="h1" style={{
          textAlign: 'center',
          marginBottom: '16px'
        }}>\r
            Layout Example\r
          </Typography>\r
          <Typography variant="body1" style={{
          textAlign: 'center'
        }}>\r
            This demonstrates how the Box component can be used to create complex layouts.\r
          </Typography>\r
        </Box>\r
        \r
        {/* Content Grid */}\r
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="24px" marginBottom="xl">\r
          <Box padding="lg" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)">\r
            <Typography variant="h3" style={{
            marginBottom: '16px'
          }}>Feature 1</Typography>\r
            <Typography variant="body1">\r
              The Box component provides flexible layout capabilities with comprehensive spacing control.\r
            </Typography>\r
          </Box>\r
          \r
          <Box padding="lg" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)">\r
            <Typography variant="h3" style={{
            marginBottom: '16px'
          }}>Feature 2</Typography>\r
            <Typography variant="body1">\r
              Easy to use with theme-based spacing values and responsive design patterns.\r
            </Typography>\r
          </Box>\r
          \r
          <Box padding="lg" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)">\r
            <Typography variant="h3" style={{
            marginBottom: '16px'
          }}>Feature 3</Typography>\r
            <Typography variant="body1">\r
              Perfect for creating consistent layouts and spacing throughout your application.\r
            </Typography>\r
          </Box>\r
        </Box>\r
        \r
        {/* Footer */}\r
        <Box as="footer" padding="lg" backgroundColor="#fff" borderRadius="8px" boxShadow="0 2px 4px rgba(0,0,0,0.1)" textAlign="center">\r
          <Typography variant="body2" color="secondary">\r
            Built with the Box component for consistent spacing and layout.\r
          </Typography>\r
        </Box>\r
      </Box>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'A real-world example showing how the Box component can be used to create complete page layouts.'
      }
    }
  }
}`,...(_=(U=h.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const nr=["Basic","DifferentPadding","CustomPaddingAxes","MarginExamples","DisplayProperties","DimensionsAndSizing","StylingAndAppearance","PositioningExamples","OverflowExamples","SemanticElements","RealWorldExample"];export{i as Basic,a as CustomPaddingAxes,d as DifferentPadding,p as DimensionsAndSizing,s as DisplayProperties,t as MarginExamples,c as OverflowExamples,x as PositioningExamples,h as RealWorldExample,g as SemanticElements,l as StylingAndAppearance,nr as __namedExportsOrder,or as default};
