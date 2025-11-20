import{j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as r}from"./Card-956b6d64.js";import{B as t}from"./Button-e75f0250.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const R={title:"Components/Common/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible content container component with multiple variants, sizes, and interactive states. Perfect for organizing information, creating dashboard widgets, and building product displays."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","warning","error","info"],description:"Visual variant of the card"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Size of the card affecting padding and typography"},padding:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Custom padding override (independent of size)"},elevation:{control:{type:"select"},options:["none","sm","md","lg","xl"],description:"Shadow depth and elevation effect"},bordered:{control:{type:"boolean"},description:"Whether to show a border around the card"},hoverable:{control:{type:"boolean"},description:"Whether the card should have hover effects"},interactive:{control:{type:"boolean"},description:"Whether the card should appear interactive (cursor pointer)"},onClick:{action:"clicked",description:"Click handler for interactive cards"}}},a={args:{children:"This is a basic card with simple content.",title:"Basic Card",subtitle:"A simple example of the card component"}},i={args:{title:"Card with Header and Footer",subtitle:"This card includes a header and footer section",children:e.jsxs("div",{children:[e.jsx("p",{children:"This is the main content area of the card. You can put any content here including:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Text content"}),e.jsx("li",{children:"Images"}),e.jsx("li",{children:"Forms"}),e.jsx("li",{children:"Other components"})]})]}),footer:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(t,{size:"sm",variant:"secondary",children:"Cancel"}),e.jsx(t,{size:"sm",variant:"primary",children:"Save"})]})}},n={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px",width:"100%"},children:[e.jsx(r,{variant:"primary",title:"Primary Card",subtitle:"Primary variant",children:"This card uses the primary variant styling."}),e.jsx(r,{variant:"secondary",title:"Secondary Card",subtitle:"Secondary variant",children:"This card uses the secondary variant styling."}),e.jsx(r,{variant:"success",title:"Success Card",subtitle:"Success variant",children:"This card uses the success variant styling."}),e.jsx(r,{variant:"warning",title:"Warning Card",subtitle:"Warning variant",children:"This card uses the warning variant styling."}),e.jsx(r,{variant:"error",title:"Error Card",subtitle:"Error variant",children:"This card uses the error variant styling."}),e.jsx(r,{variant:"info",title:"Info Card",subtitle:"Info variant",children:"This card uses the info variant styling."})]}),parameters:{docs:{description:{story:"Cards come in different variants that affect the border color and overall styling."}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{size:"xs",title:"Extra Small",subtitle:"xs size",children:"This is an extra small card with minimal padding."}),e.jsx(r,{size:"sm",title:"Small",subtitle:"sm size",children:"This is a small card with compact padding."}),e.jsx(r,{size:"md",title:"Medium",subtitle:"md size (default)",children:"This is a medium card with standard padding."}),e.jsx(r,{size:"lg",title:"Large",subtitle:"lg size",children:"This is a large card with generous padding."}),e.jsx(r,{size:"xl",title:"Extra Large",subtitle:"xl size",children:"This is an extra large card with maximum padding."})]}),parameters:{docs:{description:{story:"Cards come in different sizes that affect padding and typography."}}}},d={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px",width:"100%"},children:[e.jsx(r,{elevation:"none",title:"No Elevation",subtitle:'elevation="none"',children:"This card has no shadow or elevation."}),e.jsx(r,{elevation:"sm",title:"Small Elevation",subtitle:'elevation="sm"',children:"This card has a subtle shadow."}),e.jsx(r,{elevation:"md",title:"Medium Elevation",subtitle:'elevation="md" (default)',children:"This card has a standard shadow."}),e.jsx(r,{elevation:"lg",title:"Large Elevation",subtitle:'elevation="lg"',children:"This card has a prominent shadow."}),e.jsx(r,{elevation:"xl",title:"Extra Large Elevation",subtitle:'elevation="xl"',children:"This card has a dramatic shadow."})]}),parameters:{docs:{description:{story:"Cards can have different elevation levels that affect the shadow depth."}}}},o={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px",width:"100%"},children:[e.jsx(r,{hoverable:!0,interactive:!0,title:"Hoverable Card",subtitle:"Hover over me!",onClick:()=>alert("Card clicked!"),children:"This card has hover effects and is clickable. Try hovering over it!"}),e.jsx(r,{bordered:!0,hoverable:!0,title:"Bordered & Hoverable",subtitle:"With border and hover effects",onClick:()=>alert("Bordered card clicked!"),children:"This card has a border and hover effects. The border color changes based on the variant."})]}),parameters:{docs:{description:{story:"Cards can be made interactive with hover effects and click handlers."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(r,{padding:"none",title:"No Padding",subtitle:'padding="none"',children:"This card has no padding around the content."}),e.jsx(r,{padding:"xs",title:"Extra Small Padding",subtitle:'padding="xs"',children:"This card has minimal padding."}),e.jsx(r,{padding:"sm",title:"Small Padding",subtitle:'padding="sm"',children:"This card has small padding."}),e.jsx(r,{padding:"md",title:"Medium Padding",subtitle:'padding="md" (default)',children:"This card has standard padding."}),e.jsx(r,{padding:"lg",title:"Large Padding",subtitle:'padding="lg"',children:"This card has large padding."}),e.jsx(r,{padding:"xl",title:"Extra Large Padding",subtitle:'padding="xl"',children:"This card has maximum padding."})]}),parameters:{docs:{description:{story:"Custom padding can be applied independently of the card size."}}}},c={render:()=>e.jsx(r,{hoverable:!0,size:"lg",elevation:"lg",title:"Premium Widget",subtitle:"$29.99",footer:e.jsxs("div",{style:{display:"flex",gap:"8px",width:"100%"},children:[e.jsx(t,{size:"sm",variant:"secondary",fullWidth:!0,children:"Add to Wishlist"}),e.jsx(t,{size:"sm",variant:"primary",fullWidth:!0,children:"Add to Cart"})]}),children:e.jsxs("div",{style:{textAlign:"center",marginBottom:"16px"},children:[e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"#f0f0f0",borderRadius:"8px",margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",color:"#666"},children:"🎯"}),e.jsx("p",{children:"A high-quality widget that will solve all your problems. Features include durability, efficiency, and style."})]})}),parameters:{docs:{description:{story:"Example of how to use the Card component to create a product display card."}}}},p={render:()=>e.jsx(r,{variant:"info",size:"md",elevation:"sm",title:"System Status",subtitle:"Last updated: 2 minutes ago",footer:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[e.jsx("span",{style:{color:"#4caf50",fontWeight:"bold"},children:"● All Systems Operational"}),e.jsx(t,{size:"xs",variant:"secondary",children:"View Details"})]}),children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"CPU Usage:"})," 23%"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Memory:"})," 67%"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Disk:"})," 45%"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Network:"})," 12%"]})]})}),parameters:{docs:{description:{story:"Example of how to use the Card component to create a dashboard widget."}}}};var h,m,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'This is a basic card with simple content.',
    title: 'Basic Card',
    subtitle: 'A simple example of the card component'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Card with Header and Footer',
    subtitle: 'This card includes a header and footer section',
    children: <div>\r
        <p>This is the main content area of the card. You can put any content here including:</p>\r
        <ul>\r
          <li>Text content</li>\r
          <li>Images</li>\r
          <li>Forms</li>\r
          <li>Other components</li>\r
        </ul>\r
      </div>,
    footer: <div style={{
      display: 'flex',
      gap: '8px'
    }}>\r
        <Button size="sm" variant="secondary">Cancel</Button>\r
        <Button size="sm" variant="primary">Save</Button>\r
      </div>
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,y,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    width: '100%'
  }}>\r
      <Card variant="primary" title="Primary Card" subtitle="Primary variant">\r
        This card uses the primary variant styling.\r
      </Card>\r
      <Card variant="secondary" title="Secondary Card" subtitle="Secondary variant">\r
        This card uses the secondary variant styling.\r
      </Card>\r
      <Card variant="success" title="Success Card" subtitle="Success variant">\r
        This card uses the success variant styling.\r
      </Card>\r
      <Card variant="warning" title="Warning Card" subtitle="Warning variant">\r
        This card uses the warning variant styling.\r
      </Card>\r
      <Card variant="error" title="Error Card" subtitle="Error variant">\r
        This card uses the error variant styling.\r
      </Card>\r
      <Card variant="info" title="Info Card" subtitle="Info variant">\r
        This card uses the info variant styling.\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Cards come in different variants that affect the border color and overall styling.'
      }
    }
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,w,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Card size="xs" title="Extra Small" subtitle="xs size">\r
        This is an extra small card with minimal padding.\r
      </Card>\r
      <Card size="sm" title="Small" subtitle="sm size">\r
        This is a small card with compact padding.\r
      </Card>\r
      <Card size="md" title="Medium" subtitle="md size (default)">\r
        This is a medium card with standard padding.\r
      </Card>\r
      <Card size="lg" title="Large" subtitle="lg size">\r
        This is a large card with generous padding.\r
      </Card>\r
      <Card size="xl" title="Extra Large" subtitle="xl size">\r
        This is an extra large card with maximum padding.\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Cards come in different sizes that affect padding and typography.'
      }
    }
  }
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var j,z,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    width: '100%'
  }}>\r
      <Card elevation="none" title="No Elevation" subtitle="elevation=&quot;none&quot;">\r
        This card has no shadow or elevation.\r
      </Card>\r
      <Card elevation="sm" title="Small Elevation" subtitle="elevation=&quot;sm&quot;">\r
        This card has a subtle shadow.\r
      </Card>\r
      <Card elevation="md" title="Medium Elevation" subtitle="elevation=&quot;md&quot; (default)">\r
        This card has a standard shadow.\r
      </Card>\r
      <Card elevation="lg" title="Large Elevation" subtitle="elevation=&quot;lg&quot;">\r
        This card has a prominent shadow.\r
      </Card>\r
      <Card elevation="xl" title="Extra Large Elevation" subtitle="elevation=&quot;xl&quot;">\r
        This card has a dramatic shadow.\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Cards can have different elevation levels that affect the shadow depth.'
      }
    }
  }
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var E,P,q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    width: '100%'
  }}>\r
      <Card hoverable interactive title="Hoverable Card" subtitle="Hover over me!" onClick={() => alert('Card clicked!')}>\r
        This card has hover effects and is clickable. Try hovering over it!\r
      </Card>\r
      <Card bordered hoverable title="Bordered & Hoverable" subtitle="With border and hover effects" onClick={() => alert('Bordered card clicked!')}>\r
        This card has a border and hover effects. The border color changes based on the variant.\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Cards can be made interactive with hover effects and click handlers.'
      }
    }
  }
}`,...(q=(P=o.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var W,B,k;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  }}>\r
      <Card padding="none" title="No Padding" subtitle="padding=&quot;none&quot;">\r
        This card has no padding around the content.\r
      </Card>\r
      <Card padding="xs" title="Extra Small Padding" subtitle="padding=&quot;xs&quot;">\r
        This card has minimal padding.\r
      </Card>\r
      <Card padding="sm" title="Small Padding" subtitle="padding=&quot;sm&quot;">\r
        This card has small padding.\r
      </Card>\r
      <Card padding="md" title="Medium Padding" subtitle="padding=&quot;md&quot; (default)">\r
        This card has standard padding.\r
      </Card>\r
      <Card padding="lg" title="Large Padding" subtitle="padding=&quot;lg&quot;">\r
        This card has large padding.\r
      </Card>\r
      <Card padding="xl" title="Extra Large Padding" subtitle="padding=&quot;xl&quot;">\r
        This card has maximum padding.\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom padding can be applied independently of the card size.'
      }
    }
  }
}`,...(k=(B=l.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var A,L,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Card hoverable size="lg" elevation="lg" title="Premium Widget" subtitle="$29.99" footer={<div style={{
    display: 'flex',
    gap: '8px',
    width: '100%'
  }}>\r
          <Button size="sm" variant="secondary" fullWidth>Add to Wishlist</Button>\r
          <Button size="sm" variant="primary" fullWidth>Add to Cart</Button>\r
        </div>}>\r
      <div style={{
      textAlign: 'center',
      marginBottom: '16px'
    }}>\r
        <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        margin: '0 auto 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        color: '#666'
      }}>\r
          🎯\r
        </div>\r
        <p>A high-quality widget that will solve all your problems. Features include durability, efficiency, and style.</p>\r
      </div>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Example of how to use the Card component to create a product display card.'
      }
    }
  }
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var I,F,H;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Card variant="info" size="md" elevation="sm" title="System Status" subtitle="Last updated: 2 minutes ago" footer={<div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }}>\r
          <span style={{
      color: '#4caf50',
      fontWeight: 'bold'
    }}>● All Systems Operational</span>\r
          <Button size="xs" variant="secondary">View Details</Button>\r
        </div>}>\r
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px'
    }}>\r
        <div>\r
          <strong>CPU Usage:</strong> 23%\r
        </div>\r
        <div>\r
          <strong>Memory:</strong> 67%\r
        </div>\r
        <div>\r
          <strong>Disk:</strong> 45%\r
        </div>\r
        <div>\r
          <strong>Network:</strong> 12%\r
        </div>\r
      </div>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Example of how to use the Card component to create a dashboard widget.'
      }
    }
  }
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const Y=["Basic","WithHeaderAndFooter","Variants","Sizes","Elevations","Interactive","CustomPadding","ProductCard","DashboardWidget"];export{a as Basic,l as CustomPadding,p as DashboardWidget,d as Elevations,o as Interactive,c as ProductCard,s as Sizes,n as Variants,i as WithHeaderAndFooter,Y as __namedExportsOrder,R as default};
