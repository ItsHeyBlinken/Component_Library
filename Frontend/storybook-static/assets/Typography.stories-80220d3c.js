import{j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{T as r}from"./Typography-984ac10a.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const ie={title:"Components/Common/Typography",component:r,parameters:{layout:"centered",docs:{description:{component:"A comprehensive typography system with consistent styling, semantic HTML elements, and flexible customization options. Provides heading hierarchy, body text variants, and specialized text styles."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","body1","body2","body3","caption","overline","button","display1","display2","display3","display4","code","link"],description:"Typography variant that determines size, weight, and styling"},as:{control:{type:"text"},description:"HTML element to render (overrides default for variant)"},color:{control:{type:"select"},options:["primary","secondary","disabled","inherit"],description:"Text color variant"},weight:{control:{type:"select"},options:["light","normal","medium","semibold","bold","extrabold"],description:"Font weight override"},align:{control:{type:"select"},options:["left","center","right","justify"],description:"Text alignment"},transform:{control:{type:"select"},options:["none","uppercase","lowercase","capitalize"],description:"Text transformation"},decoration:{control:{type:"select"},options:["none","underline","line-through","overline"],description:"Text decoration"},truncate:{control:{type:"boolean"},description:"Whether to truncate text with ellipsis"},noWrap:{control:{type:"boolean"},description:"Whether to prevent text wrapping"}}},n={args:{children:"This is basic typography text.",variant:"body1"}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"h1",children:"Heading 1 - Main Title"}),e.jsx(r,{variant:"h2",children:"Heading 2 - Section Title"}),e.jsx(r,{variant:"h3",children:"Heading 3 - Subsection Title"}),e.jsx(r,{variant:"h4",children:"Heading 4 - Minor Section"}),e.jsx(r,{variant:"h5",children:"Heading 5 - Small Section"}),e.jsx(r,{variant:"h6",children:"Heading 6 - Minor Subsection"})]}),parameters:{docs:{description:{story:"Complete heading hierarchy from h1 to h6 with appropriate sizing and weights."}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsx(r,{variant:"display1",children:"Display 1 - Hero Text"}),e.jsx(r,{variant:"display2",children:"Display 2 - Large Title"}),e.jsx(r,{variant:"display3",children:"Display 3 - Medium Title"}),e.jsx(r,{variant:"display4",children:"Display 4 - Small Title"})]}),parameters:{docs:{description:{story:"Display typography variants for large, impactful text like hero sections and main titles."}}}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"body1",children:"Body 1 - This is the standard body text size used for most content. It provides good readability and is suitable for paragraphs, descriptions, and general content."}),e.jsx(r,{variant:"body2",children:"Body 2 - This is smaller body text, often used for secondary content, captions, or when you need to fit more text in a smaller space while maintaining readability."}),e.jsx(r,{variant:"body3",children:"Body 3 - This is the smallest body text variant, useful for very compact layouts or when you need to display a lot of information in a limited space."})]}),parameters:{docs:{description:{story:"Body text variants for different content hierarchy and space constraints."}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"caption",children:"Caption - This is caption text used for labels, metadata, or supplementary information."}),e.jsx(r,{variant:"overline",children:"Overline - This is overline text typically used for labels above content sections."}),e.jsx(r,{variant:"button",children:"Button - This is button text styling, often used for call-to-action elements."}),e.jsx(r,{variant:"code",children:"Code - This is inline code text with monospace font and background styling."}),e.jsx(r,{variant:"link",href:"https://example.com",children:"Link - This is a clickable link with hover effects and proper accessibility."})]}),parameters:{docs:{description:{story:"Specialized typography variants for specific use cases like captions, buttons, and code."}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"body1",color:"primary",children:"Primary Color - This text uses the primary color from the theme."}),e.jsx(r,{variant:"body1",color:"secondary",children:"Secondary Color - This text uses the secondary color from the theme."}),e.jsx(r,{variant:"body1",color:"disabled",children:"Disabled Color - This text uses the disabled color from the theme."}),e.jsx(r,{variant:"body1",color:"inherit",children:"Inherit Color - This text inherits its color from the parent element."})]}),parameters:{docs:{description:{story:"Different color variants available for typography components."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"body1",weight:"light",children:"Light Weight - This text uses a light font weight for subtle emphasis."}),e.jsx(r,{variant:"body1",weight:"normal",children:"Normal Weight - This is the standard font weight for body text."}),e.jsx(r,{variant:"body1",weight:"medium",children:"Medium Weight - This text uses a medium weight for moderate emphasis."}),e.jsx(r,{variant:"body1",weight:"semibold",children:"Semibold Weight - This text uses a semibold weight for stronger emphasis."}),e.jsx(r,{variant:"body1",weight:"bold",children:"Bold Weight - This text uses a bold weight for strong emphasis."}),e.jsx(r,{variant:"body1",weight:"extrabold",children:"Extrabold Weight - This text uses an extrabold weight for maximum emphasis."})]}),parameters:{docs:{description:{story:"Different font weight options available for typography components."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"body1",align:"left",children:"Left Aligned - This text is aligned to the left side of its container."}),e.jsx(r,{variant:"body1",align:"center",children:"Center Aligned - This text is centered within its container."}),e.jsx(r,{variant:"body1",align:"right",children:"Right Aligned - This text is aligned to the right side of its container."}),e.jsx(r,{variant:"body1",align:"justify",children:"Justified - This text is justified to fill the full width of its container, creating even margins on both sides."})]}),parameters:{docs:{description:{story:"Different text alignment options for typography components."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"body1",transform:"none",children:"No Transform - This text has no transformation applied."}),e.jsx(r,{variant:"body1",transform:"uppercase",children:"Uppercase - This text is transformed to uppercase letters."}),e.jsx(r,{variant:"body1",transform:"lowercase",children:"Lowercase - This text is transformed to lowercase letters."}),e.jsx(r,{variant:"body1",transform:"capitalize",children:"Capitalize - This text has the first letter of each word capitalized."})]}),parameters:{docs:{description:{story:"Different text transformation options for typography components."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"body1",decoration:"none",children:"No Decoration - This text has no decoration applied."}),e.jsx(r,{variant:"body1",decoration:"underline",children:"Underlined - This text has an underline decoration."}),e.jsx(r,{variant:"body1",decoration:"line-through",children:"Line Through - This text has a line-through decoration."}),e.jsx(r,{variant:"body1",decoration:"overline",children:"Overline - This text has an overline decoration."})]}),parameters:{docs:{description:{story:"Different text decoration options for typography components."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"body1",truncate:!0,children:"Truncated Text - This is a very long text that will be truncated with an ellipsis when it exceeds the container width. This demonstrates the truncate functionality."}),e.jsx(r,{variant:"body1",noWrap:!0,children:"No Wrap - This text will not wrap to the next line even if it exceeds the container width."}),e.jsx(r,{variant:"body1",as:"span",children:"Custom Element - This text is rendered as a span element instead of the default div."})]}),parameters:{docs:{description:{story:"Utility features like truncation, no-wrap, and custom HTML elements."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"link",href:"https://example.com",children:"External Link - This link opens in the same tab"}),e.jsx(r,{variant:"link",href:"https://example.com",target:"_blank",children:"External Link - This link opens in a new tab"}),e.jsx(r,{variant:"link",href:"#section",children:"Internal Link - This is a link to a section on the same page"})]}),parameters:{docs:{description:{story:"Interactive link variants with proper accessibility and hover effects."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsxs(r,{variant:"body1",children:["Here is some regular text with an inline ",e.jsx(r,{variant:"code",children:"code snippet"})," embedded within it."]}),e.jsxs(r,{variant:"body1",children:["You can also use it for ",e.jsx(r,{variant:"code",children:"variable names"})," or ",e.jsx(r,{variant:"code",children:"function calls"}),"."]}),e.jsx(r,{variant:"code",as:"pre",style:{padding:"16px",borderRadius:"6px"},children:"function greetUser(name) {\n  return `Hello, ${name}!`;\n}"})]}),parameters:{docs:{description:{story:"Code typography variant for displaying code snippets and technical content."}}}};var m,x,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is basic typography text.',
    variant: 'body1'
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var T,v,u;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="h1">Heading 1 - Main Title</Typography>\r
      <Typography variant="h2">Heading 2 - Section Title</Typography>\r
      <Typography variant="h3">Heading 3 - Subsection Title</Typography>\r
      <Typography variant="h4">Heading 4 - Minor Section</Typography>\r
      <Typography variant="h5">Heading 5 - Small Section</Typography>\r
      <Typography variant="h6">Heading 6 - Minor Subsection</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete heading hierarchy from h1 to h6 with appropriate sizing and weights.'
      }
    }
  }
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var b,w,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <Typography variant="display1">Display 1 - Hero Text</Typography>\r
      <Typography variant="display2">Display 2 - Large Title</Typography>\r
      <Typography variant="display3">Display 3 - Medium Title</Typography>\r
      <Typography variant="display4">Display 4 - Small Title</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Display typography variants for large, impactful text like hero sections and main titles.'
      }
    }
  }
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var D,k,S;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="body1">\r
        Body 1 - This is the standard body text size used for most content. It provides good readability \r
        and is suitable for paragraphs, descriptions, and general content.\r
      </Typography>\r
      <Typography variant="body2">\r
        Body 2 - This is smaller body text, often used for secondary content, captions, or when you need \r
        to fit more text in a smaller space while maintaining readability.\r
      </Typography>\r
      <Typography variant="body3">\r
        Body 3 - This is the smallest body text variant, useful for very compact layouts or when you need \r
        to display a lot of information in a limited space.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Body text variants for different content hierarchy and space constraints.'
      }
    }
  }
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,H,L;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="caption">\r
        Caption - This is caption text used for labels, metadata, or supplementary information.\r
      </Typography>\r
      <Typography variant="overline">\r
        Overline - This is overline text typically used for labels above content sections.\r
      </Typography>\r
      <Typography variant="button">\r
        Button - This is button text styling, often used for call-to-action elements.\r
      </Typography>\r
      <Typography variant="code">\r
        Code - This is inline code text with monospace font and background styling.\r
      </Typography>\r
      <Typography variant="link" href="https://example.com">\r
        Link - This is a clickable link with hover effects and proper accessibility.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Specialized typography variants for specific use cases like captions, buttons, and code.'
      }
    }
  }
}`,...(L=(H=o.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,z,B;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="body1" color="primary">\r
        Primary Color - This text uses the primary color from the theme.\r
      </Typography>\r
      <Typography variant="body1" color="secondary">\r
        Secondary Color - This text uses the secondary color from the theme.\r
      </Typography>\r
      <Typography variant="body1" color="disabled">\r
        Disabled Color - This text uses the disabled color from the theme.\r
      </Typography>\r
      <Typography variant="body1" color="inherit">\r
        Inherit Color - This text inherits its color from the parent element.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different color variants available for typography components.'
      }
    }
  }
}`,...(B=(z=s.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var M,E,I;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="body1" weight="light">\r
        Light Weight - This text uses a light font weight for subtle emphasis.\r
      </Typography>\r
      <Typography variant="body1" weight="normal">\r
        Normal Weight - This is the standard font weight for body text.\r
      </Typography>\r
      <Typography variant="body1" weight="medium">\r
        Medium Weight - This text uses a medium weight for moderate emphasis.\r
      </Typography>\r
      <Typography variant="body1" weight="semibold">\r
        Semibold Weight - This text uses a semibold weight for stronger emphasis.\r
      </Typography>\r
      <Typography variant="body1" weight="bold">\r
        Bold Weight - This text uses a bold weight for strong emphasis.\r
      </Typography>\r
      <Typography variant="body1" weight="extrabold">\r
        Extrabold Weight - This text uses an extrabold weight for maximum emphasis.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different font weight options available for typography components.'
      }
    }
  }
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var U,A,N;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="body1" align="left">\r
        Left Aligned - This text is aligned to the left side of its container.\r
      </Typography>\r
      <Typography variant="body1" align="center">\r
        Center Aligned - This text is centered within its container.\r
      </Typography>\r
      <Typography variant="body1" align="right">\r
        Right Aligned - This text is aligned to the right side of its container.\r
      </Typography>\r
      <Typography variant="body1" align="justify">\r
        Justified - This text is justified to fill the full width of its container, creating even margins on both sides.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different text alignment options for typography components.'
      }
    }
  }
}`,...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var F,O,R;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="body1" transform="none">\r
        No Transform - This text has no transformation applied.\r
      </Typography>\r
      <Typography variant="body1" transform="uppercase">\r
        Uppercase - This text is transformed to uppercase letters.\r
      </Typography>\r
      <Typography variant="body1" transform="lowercase">\r
        Lowercase - This text is transformed to lowercase letters.\r
      </Typography>\r
      <Typography variant="body1" transform="capitalize">\r
        Capitalize - This text has the first letter of each word capitalized.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different text transformation options for typography components.'
      }
    }
  }
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,P,J;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="body1" decoration="none">\r
        No Decoration - This text has no decoration applied.\r
      </Typography>\r
      <Typography variant="body1" decoration="underline">\r
        Underlined - This text has an underline decoration.\r
      </Typography>\r
      <Typography variant="body1" decoration="line-through">\r
        Line Through - This text has a line-through decoration.\r
      </Typography>\r
      <Typography variant="body1" decoration="overline">\r
        Overline - This text has an overline decoration.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different text decoration options for typography components.'
      }
    }
  }
}`,...(J=(P=c.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var Y,$,q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="body1" truncate>\r
        Truncated Text - This is a very long text that will be truncated with an ellipsis when it exceeds the container width. This demonstrates the truncate functionality.\r
      </Typography>\r
      <Typography variant="body1" noWrap>\r
        No Wrap - This text will not wrap to the next line even if it exceeds the container width.\r
      </Typography>\r
      <Typography variant="body1" as="span">\r
        Custom Element - This text is rendered as a span element instead of the default div.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Utility features like truncation, no-wrap, and custom HTML elements.'
      }
    }
  }
}`,...(q=($=h.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,K,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="link" href="https://example.com">\r
        External Link - This link opens in the same tab\r
      </Typography>\r
      <Typography variant="link" href="https://example.com" target="_blank">\r
        External Link - This link opens in a new tab\r
      </Typography>\r
      <Typography variant="link" href="#section">\r
        Internal Link - This is a link to a section on the same page\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive link variants with proper accessibility and hover effects.'
      }
    }
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Z;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Typography variant="body1">\r
        Here is some regular text with an inline <Typography variant="code">code snippet</Typography> embedded within it.\r
      </Typography>\r
      <Typography variant="body1">\r
        You can also use it for <Typography variant="code">variable names</Typography> or <Typography variant="code">function calls</Typography>.\r
      </Typography>\r
      <Typography variant="code" as="pre" style={{
      padding: '16px',
      borderRadius: '6px'
    }}>\r
      {\`function greetUser(name) {
  return \\\`Hello, \\\${name}!\\\`;
}\`}\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Code typography variant for displaying code snippets and technical content.'
      }
    }
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ae=["Basic","Headings","Display","BodyText","Specialized","Colors","FontWeights","TextAlignment","TextTransformations","TextDecorations","UtilityFeatures","InteractiveLink","CodeExample"];export{n as Basic,a as BodyText,g as CodeExample,s as Colors,i as Display,p as FontWeights,t as Headings,y as InteractiveLink,o as Specialized,d as TextAlignment,c as TextDecorations,l as TextTransformations,h as UtilityFeatures,ae as __namedExportsOrder,ie as default};
