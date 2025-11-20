import{s as ee,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{T as a}from"./Typography-984ac10a.js";import{C as y}from"./Card-956b6d64.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const ne=n=>{switch(n){case"xs":return"480px";case"sm":return"640px";case"md":return"768px";case"lg":return"1024px";case"xl":return"1280px";case"full":return"none";default:return"1200px"}},l=(n,r)=>n==="none"?"0":n==="xs"?r.spacing.xs:n==="sm"?r.spacing.sm:n==="lg"?r.spacing.lg:n==="xl"?r.spacing.xl:r.spacing.md,ae=ee.div`
  font-family: ${({theme:n})=>n.typography.fontFamily};
  
  /* Width and centering */
  width: 100%;
  max-width: ${({size:n="md",maxWidth:r})=>r||ne(n)};
  margin: ${({centered:n})=>n?"0 auto":"0"};
  
  /* Padding */
  padding-left: ${({paddingX:n,padding:r,theme:o})=>l(n||r,o)};
  padding-right: ${({paddingX:n,padding:r,theme:o})=>l(n||r,o)};
  padding-top: ${({paddingY:n,padding:r,theme:o})=>l(n||r,o)};
  padding-bottom: ${({paddingY:n,padding:r,theme:o})=>l(n||r,o)};
  
  /* Responsive behavior */
  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding-left: ${({paddingX:n,padding:r,theme:o})=>{const s=l(n||r,o);return s==="0"?"0":`calc(${s} * 0.75)`}};
    padding-right: ${({paddingX:n,padding:r,theme:o})=>{const s=l(n||r,o);return s==="0"?"0":`calc(${s} * 0.75)`}};
  }
  
  /* Fluid container behavior */
  ${({fluid:n,size:r})=>n&&r==="full"&&`
    max-width: none;
    padding-left: 0;
    padding-right: 0;
  `}
`,t=({children:n,size:r="md",maxWidth:o,centered:s=!0,fluid:I=!1,padding:R="md",paddingX:G,paddingY:U,as:J,className:K,style:Q,...Z})=>e.jsx(ae,{as:J,size:r,maxWidth:o,centered:s,fluid:I,padding:R,paddingX:G,paddingY:U,className:K,style:Q,...Z,children:n});try{t.displayName="Container",t.__docgenInfo={description:"",displayName:"Container",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},centered:{defaultValue:{value:"true"},description:"",name:"centered",required:!1,type:{name:"boolean"}},fluid:{defaultValue:{value:"false"},description:"",name:"fluid",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"md"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"button"'},{value:'"label"'},{value:'"text"'},{value:'"search"'},{value:'"title"'},{value:'"header"'},{value:'"footer"'},{value:'"time"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"caption"'},{value:'"code"'},{value:'"link"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"center"'},{value:'"cite"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"form"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const le={title:"Components/Layout/Container",component:t,parameters:{layout:"centered",docs:{description:{component:"A container component that provides content width constraints and centering for consistent layouts. Supports different sizes, padding options, and responsive behavior."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","full"],description:"Container size affecting max-width"},maxWidth:{control:{type:"text"},description:"Custom max-width override"},centered:{control:{type:"boolean"},description:"Whether to center the container"},fluid:{control:{type:"boolean"},description:"Whether to make the container fluid (full width)"},padding:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Padding around the container content"},paddingX:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Horizontal padding override"},paddingY:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Vertical padding override"},as:{control:{type:"text"},description:"HTML element to render"}}},i=({title:n,description:r})=>e.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"24px",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx(a,{variant:"h4",style:{marginBottom:"16px"},children:n}),e.jsx(a,{variant:"body1",children:r})]}),d={args:{children:e.jsx(i,{title:"Basic Container",description:"This is a basic container with default settings. It provides consistent width constraints and centers content on the page."})}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Small (xs) - 480px max"}),e.jsx(t,{size:"xs",children:e.jsx(i,{title:"Extra Small Container",description:"This container has a maximum width of 480px, perfect for narrow content like forms or small widgets."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Small (sm) - 640px max"}),e.jsx(t,{size:"sm",children:e.jsx(i,{title:"Small Container",description:"This container has a maximum width of 640px, suitable for compact content layouts."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Medium (md) - 768px max"}),e.jsx(t,{size:"md",children:e.jsx(i,{title:"Medium Container",description:"This container has a maximum width of 768px, the default size for most content."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Large (lg) - 1024px max"}),e.jsx(t,{size:"lg",children:e.jsx(i,{title:"Large Container",description:"This container has a maximum width of 1024px, great for wider content like dashboards."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Large (xl) - 1280px max"}),e.jsx(t,{size:"xl",children:e.jsx(i,{title:"Extra Large Container",description:"This container has a maximum width of 1280px, ideal for wide layouts and large displays."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Full Width"}),e.jsx(t,{size:"full",children:e.jsx(i,{title:"Full Width Container",description:"This container takes the full width of its parent, useful for hero sections or full-width content."})})]})]}),parameters:{docs:{description:{story:"Different container sizes available, each with appropriate max-width constraints for different use cases."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"No Padding"}),e.jsx(t,{size:"md",padding:"none",children:e.jsx(i,{title:"No Padding",description:"This container has no padding, allowing content to extend to the edges."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Small Padding"}),e.jsx(t,{size:"md",padding:"xs",children:e.jsx(i,{title:"Extra Small Padding",description:"This container has minimal padding for compact layouts."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Small Padding"}),e.jsx(t,{size:"md",padding:"sm",children:e.jsx(i,{title:"Small Padding",description:"This container has small padding for tight layouts."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Medium Padding (Default)"}),e.jsx(t,{size:"md",padding:"md",children:e.jsx(i,{title:"Medium Padding",description:"This container has standard padding, the default setting."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Large Padding"}),e.jsx(t,{size:"md",padding:"lg",children:e.jsx(i,{title:"Large Padding",description:"This container has generous padding for spacious layouts."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Large Padding"}),e.jsx(t,{size:"md",padding:"xl",children:e.jsx(i,{title:"Extra Large Padding",description:"This container has maximum padding for very spacious layouts."})})]})]}),parameters:{docs:{description:{story:"Different padding options available for the container component."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Horizontal Padding"}),e.jsx(t,{size:"md",paddingX:"lg",paddingY:"xs",children:e.jsx(i,{title:"Custom Horizontal Padding",description:"This container has large horizontal padding but small vertical padding, creating a wide but compact layout."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Vertical Padding"}),e.jsx(t,{size:"md",paddingX:"xs",paddingY:"lg",children:e.jsx(i,{title:"Custom Vertical Padding",description:"This container has small horizontal padding but large vertical padding, creating a narrow but spacious layout."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Mixed Padding"}),e.jsx(t,{size:"md",paddingX:"xl",paddingY:"none",children:e.jsx(i,{title:"Mixed Padding",description:"This container has extra large horizontal padding but no vertical padding, creating a wide layout with content touching the top and bottom edges."})})]})]}),parameters:{docs:{description:{story:"Custom padding configurations for horizontal and vertical axes independently."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Centered Container (Default)"}),e.jsx(t,{size:"md",centered:!0,children:e.jsx(i,{title:"Centered Container",description:"This container is centered on the page, which is the default behavior for most layouts."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Left-Aligned Container"}),e.jsx(t,{size:"md",centered:!1,children:e.jsx(i,{title:"Left-Aligned Container",description:"This container is left-aligned, useful for specific layout requirements or when you want content to align with the left edge."})})]})]}),parameters:{docs:{description:{story:"Comparison between centered and left-aligned container positioning."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Standard Container"}),e.jsx(t,{size:"md",children:e.jsx(i,{title:"Standard Container",description:"This is a standard container with width constraints and padding."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Fluid Container"}),e.jsx(t,{size:"full",fluid:!0,children:e.jsx(i,{title:"Fluid Container",description:"This is a fluid container that takes the full width and has no horizontal padding, perfect for hero sections or full-width content."})})]})]}),parameters:{docs:{description:{story:"Comparison between standard and fluid containers."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Max Width: 900px"}),e.jsx(t,{maxWidth:"900px",children:e.jsx(i,{title:"Custom Max Width",description:"This container has a custom max-width of 900px, which falls between the medium and large preset sizes."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Max Width: 1400px"}),e.jsx(t,{maxWidth:"1400px",children:e.jsx(i,{title:"Custom Max Width",description:"This container has a custom max-width of 1400px, which is larger than the extra large preset size."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Custom Max Width: 600px"}),e.jsx(t,{maxWidth:"600px",children:e.jsx(i,{title:"Custom Max Width",description:"This container has a custom max-width of 600px, which is between the small and medium preset sizes."})})]})]}),parameters:{docs:{description:{story:"Containers with custom max-width values that override the preset size constraints."}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"As Main Element"}),e.jsx(t,{as:"main",size:"md",children:e.jsx(i,{title:"Main Container",description:"This container is rendered as a main HTML element, providing semantic meaning for screen readers and accessibility tools."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"As Section Element"}),e.jsx(t,{as:"section",size:"md",children:e.jsx(i,{title:"Section Container",description:"This container is rendered as a section HTML element, useful for organizing content into logical sections."})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"As Article Element"}),e.jsx(t,{as:"article",size:"md",children:e.jsx(i,{title:"Article Container",description:"This container is rendered as an article HTML element, perfect for blog posts, news articles, or other self-contained content."})})]})]}),parameters:{docs:{description:{story:"Using the container with different semantic HTML elements for better accessibility and semantic meaning."}}}},x={render:()=>e.jsx("div",{style:{backgroundColor:"#f8f9fa",minHeight:"100vh",padding:"24px"},children:e.jsxs(t,{size:"lg",children:[e.jsx(a,{variant:"h1",style:{textAlign:"center",marginBottom:"32px"},children:"Welcome to Our Platform"}),e.jsx(a,{variant:"body1",style:{textAlign:"center",marginBottom:"48px"},children:"This is an example of how the Container component can be used in a real-world application layout."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"},children:[e.jsx(y,{title:"Feature 1",subtitle:"Amazing functionality",children:e.jsx(a,{variant:"body2",children:"This card demonstrates how containers work with other components like cards and grids."})}),e.jsx(y,{title:"Feature 2",subtitle:"Incredible performance",variant:"secondary",children:e.jsx(a,{variant:"body2",children:"The container provides consistent width constraints while maintaining responsive behavior."})}),e.jsx(y,{title:"Feature 3",subtitle:"Outstanding quality",variant:"success",children:e.jsx(a,{variant:"body2",children:"Perfect for creating professional layouts with consistent spacing and alignment."})})]})]})}),parameters:{docs:{description:{story:"A real-world example showing how the Container component integrates with other components to create a complete page layout."}}}};var f,C,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <SampleContent title="Basic Container" description="This is a basic container with default settings. It provides consistent width constraints and centers content on the page." />
  }
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,j,b;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Small (xs) - 480px max</Typography>\r
        <Container size="xs">\r
          <SampleContent title="Extra Small Container" description="This container has a maximum width of 480px, perfect for narrow content like forms or small widgets." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Small (sm) - 640px max</Typography>\r
        <Container size="sm">\r
          <SampleContent title="Small Container" description="This container has a maximum width of 640px, suitable for compact content layouts." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Medium (md) - 768px max</Typography>\r
        <Container size="md">\r
          <SampleContent title="Medium Container" description="This container has a maximum width of 768px, the default size for most content." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Large (lg) - 1024px max</Typography>\r
        <Container size="lg">\r
          <SampleContent title="Large Container" description="This container has a maximum width of 1024px, great for wider content like dashboards." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Large (xl) - 1280px max</Typography>\r
        <Container size="xl">\r
          <SampleContent title="Extra Large Container" description="This container has a maximum width of 1280px, ideal for wide layouts and large displays." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Full Width</Typography>\r
        <Container size="full">\r
          <SampleContent title="Full Width Container" description="This container takes the full width of its parent, useful for hero sections or full-width content." />\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different container sizes available, each with appropriate max-width constraints for different use cases.'
      }
    }
  }
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var z,S,B;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>No Padding</Typography>\r
        <Container size="md" padding="none">\r
          <SampleContent title="No Padding" description="This container has no padding, allowing content to extend to the edges." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Small Padding</Typography>\r
        <Container size="md" padding="xs">\r
          <SampleContent title="Extra Small Padding" description="This container has minimal padding for compact layouts." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Small Padding</Typography>\r
        <Container size="md" padding="sm">\r
          <SampleContent title="Small Padding" description="This container has small padding for tight layouts." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Medium Padding (Default)</Typography>\r
        <Container size="md" padding="md">\r
          <SampleContent title="Medium Padding" description="This container has standard padding, the default setting." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Large Padding</Typography>\r
        <Container size="md" padding="lg">\r
          <SampleContent title="Large Padding" description="This container has generous padding for spacious layouts." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Large Padding</Typography>\r
        <Container size="md" padding="xl">\r
          <SampleContent title="Extra Large Padding" description="This container has maximum padding for very spacious layouts." />\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different padding options available for the container component.'
      }
    }
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var P,M,L;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        <Container size="md" paddingX="lg" paddingY="xs">\r
          <SampleContent title="Custom Horizontal Padding" description="This container has large horizontal padding but small vertical padding, creating a wide but compact layout." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Vertical Padding</Typography>\r
        <Container size="md" paddingX="xs" paddingY="lg">\r
          <SampleContent title="Custom Vertical Padding" description="This container has small horizontal padding but large vertical padding, creating a narrow but spacious layout." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Mixed Padding</Typography>\r
        <Container size="md" paddingX="xl" paddingY="none">\r
          <SampleContent title="Mixed Padding" description="This container has extra large horizontal padding but no vertical padding, creating a wide layout with content touching the top and bottom edges." />\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom padding configurations for horizontal and vertical axes independently.'
      }
    }
  }
}`,...(L=(M=m.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var W,D,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Centered Container (Default)</Typography>\r
        <Container size="md" centered={true}>\r
          <SampleContent title="Centered Container" description="This container is centered on the page, which is the default behavior for most layouts." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Left-Aligned Container</Typography>\r
        <Container size="md" centered={false}>\r
          <SampleContent title="Left-Aligned Container" description="This container is left-aligned, useful for specific layout requirements or when you want content to align with the left edge." />\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison between centered and left-aligned container positioning.'
      }
    }
  }
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var E,k,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Standard Container</Typography>\r
        <Container size="md">\r
          <SampleContent title="Standard Container" description="This is a standard container with width constraints and padding." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Fluid Container</Typography>\r
        <Container size="full" fluid={true}>\r
          <SampleContent title="Fluid Container" description="This is a fluid container that takes the full width and has no horizontal padding, perfect for hero sections or full-width content." />\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison between standard and fluid containers.'
      }
    }
  }
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var V,q,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Max Width: 900px</Typography>\r
        <Container maxWidth="900px">\r
          <SampleContent title="Custom Max Width" description="This container has a custom max-width of 900px, which falls between the medium and large preset sizes." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Max Width: 1400px</Typography>\r
        <Container maxWidth="1400px">\r
          <SampleContent title="Custom Max Width" description="This container has a custom max-width of 1400px, which is larger than the extra large preset size." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Custom Max Width: 600px</Typography>\r
        <Container maxWidth="600px">\r
          <SampleContent title="Custom Max Width" description="This container has a custom max-width of 600px, which is between the small and medium preset sizes." />\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Containers with custom max-width values that override the preset size constraints.'
      }
    }
  }
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var $,_,N;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        <Container as="main" size="md">\r
          <SampleContent title="Main Container" description="This container is rendered as a main HTML element, providing semantic meaning for screen readers and accessibility tools." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>As Section Element</Typography>\r
        <Container as="section" size="md">\r
          <SampleContent title="Section Container" description="This container is rendered as a section HTML element, useful for organizing content into logical sections." />\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>As Article Element</Typography>\r
        <Container as="article" size="md">\r
          <SampleContent title="Article Container" description="This container is rendered as an article HTML element, perfect for blog posts, news articles, or other self-contained content." />\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Using the container with different semantic HTML elements for better accessibility and semantic meaning.'
      }
    }
  }
}`,...(N=(_=v.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var X,Y,O;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '24px'
  }}>\r
      <Container size="lg">\r
        <Typography variant="h1" style={{
        textAlign: 'center',
        marginBottom: '32px'
      }}>\r
          Welcome to Our Platform\r
        </Typography>\r
        \r
        <Typography variant="body1" style={{
        textAlign: 'center',
        marginBottom: '48px'
      }}>\r
          This is an example of how the Container component can be used in a real-world application layout.\r
        </Typography>\r
        \r
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>\r
          <Card title="Feature 1" subtitle="Amazing functionality">\r
            <Typography variant="body2">\r
              This card demonstrates how containers work with other components like cards and grids.\r
            </Typography>\r
          </Card>\r
          \r
          <Card title="Feature 2" subtitle="Incredible performance" variant="secondary">\r
            <Typography variant="body2">\r
              The container provides consistent width constraints while maintaining responsive behavior.\r
            </Typography>\r
          </Card>\r
          \r
          <Card title="Feature 3" subtitle="Outstanding quality" variant="success">\r
            <Typography variant="body2">\r
              Perfect for creating professional layouts with consistent spacing and alignment.\r
            </Typography>\r
          </Card>\r
        </div>\r
      </Container>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'A real-world example showing how the Container component integrates with other components to create a complete page layout.'
      }
    }
  }
}`,...(O=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const de=["Basic","DifferentSizes","DifferentPadding","CustomPaddingAxes","CenteredVsLeftAligned","FluidContainer","CustomMaxWidth","SemanticElements","RealWorldExample"];export{d as Basic,u as CenteredVsLeftAligned,g as CustomMaxWidth,m as CustomPaddingAxes,c as DifferentPadding,p as DifferentSizes,h as FluidContainer,x as RealWorldExample,v as SemanticElements,de as __namedExportsOrder,le as default};
