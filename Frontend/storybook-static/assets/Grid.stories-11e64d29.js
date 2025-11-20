import{s as Z,j as e}from"./styled-components.browser.esm-6cdfd3cd.js";import{C as m}from"./Card-956b6d64.js";import{T as a}from"./Typography-984ac10a.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const v=(r,t)=>typeof r=="number"?`${r}px`:r==="xs"?t.spacing.xs:r==="sm"?t.spacing.sm:r==="lg"?t.spacing.lg:r==="xl"?t.spacing.xl:t.spacing.md,p=r=>typeof r=="number"?`repeat(${r}, 1fr)`:typeof r=="object"?{xs:r.xs?`repeat(${r.xs}, 1fr)`:"repeat(1, 1fr)",sm:r.sm?`repeat(${r.sm}, 1fr)`:r.xs?`repeat(${r.xs}, 1fr)`:"repeat(1, 1fr)",md:r.md?`repeat(${r.md}, 1fr)`:r.sm?`repeat(${r.sm}, 1fr)`:r.xs?`repeat(${r.xs}, 1fr)`:"repeat(1, 1fr)",lg:r.lg?`repeat(${r.lg}, 1fr)`:r.md?`repeat(${r.md}, 1fr)`:r.sm?`repeat(${r.sm}, 1fr)`:r.xs?`repeat(${r.xs}, 1fr)`:"repeat(1, 1fr)",xl:r.xl?`repeat(${r.xl}, 1fr)`:r.lg?`repeat(${r.lg}, 1fr)`:r.md?`repeat(${r.md}, 1fr)`:r.sm?`repeat(${r.sm}, 1fr)`:r.xs?`repeat(${r.xs}, 1fr)`:"repeat(1, 1fr)"}:"repeat(1, 1fr)",ee=Z.div`
  display: grid;
  font-family: ${({theme:r})=>r.typography.fontFamily};
  
  /* Grid template columns */
  grid-template-columns: ${({columns:r,autoFit:t,autoFill:s,minColumnWidth:l,maxColumnWidth:d})=>{if(t)return`repeat(auto-fit, minmax(${l||"250px"}, ${d||"1fr"}))`;if(s)return`repeat(auto-fill, minmax(${l||"250px"}, ${d||"1fr"}))`;const i=p(r);return typeof i=="string"?i:i.xs}};
  
  /* Gap handling */
  gap: ${({gap:r,theme:t})=>v(r,t)};
  row-gap: ${({rowGap:r,gap:t,theme:s})=>v(r||t,s)};
  column-gap: ${({columnGap:r,gap:t,theme:s})=>v(r||t,s)};
  
  /* Alignment */
  align-items: ${({alignItems:r})=>r||"stretch"};
  justify-content: ${({justifyContent:r})=>r||"start"};
  
  /* Responsive breakpoints */
  @media (min-width: ${({theme:r})=>r.breakpoints.sm}) {
    grid-template-columns: ${({columns:r,autoFit:t,autoFill:s,minColumnWidth:l,maxColumnWidth:d})=>{if(t||s)return`repeat(auto-${t?"fit":"fill"}, minmax(${l||"250px"}, ${d||"1fr"}))`;const i=p(r);return typeof i=="string"?i:i.sm}};
  }
  
  @media (min-width: ${({theme:r})=>r.breakpoints.md}) {
    grid-template-columns: ${({columns:r,autoFit:t,autoFill:s,minColumnWidth:l,maxColumnWidth:d})=>{if(t||s)return`repeat(auto-${t?"fit":"fill"}, minmax(${l||"250px"}, ${d||"1fr"}))`;const i=p(r);return typeof i=="string"?i:i.md}};
  }
  
  @media (min-width: ${({theme:r})=>r.breakpoints.lg}) {
    grid-template-columns: ${({columns:r,autoFit:t,autoFill:s,minColumnWidth:l,maxColumnWidth:d})=>{if(t||s)return`repeat(auto-${t?"fit":"fill"}, minmax(${l||"250px"}, ${d||"1fr"}))`;const i=p(r);return typeof i=="string"?i:i.lg}};
  }
  
  @media (min-width: ${({theme:r})=>r.breakpoints.xl}) {
    grid-template-columns: ${({columns:r,autoFit:t,autoFill:s,minColumnWidth:l,maxColumnWidth:d})=>{if(t||s)return`repeat(auto-${t?"fit":"fill"}, minmax(${l||"250px"}, ${d||"1fr"}))`;const i=p(r);return typeof i=="string"?i:i.xl}};
  }
`,o=({children:r,columns:t,gap:s,rowGap:l,columnGap:d,alignItems:i,justifyContent:O,autoFit:H=!1,autoFill:Y=!1,minColumnWidth:P,maxColumnWidth:K,className:Q,style:U,...X})=>e.jsx(ee,{columns:t,gap:s,rowGap:l,columnGap:d,alignItems:i,justifyContent:O,autoFit:H,autoFill:Y,minColumnWidth:P,maxColumnWidth:K,className:Q,style:U,...X,children:r});try{o.displayName="Grid",o.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"number | { xs?: number; sm?: number; md?: number | undefined; lg?: number | undefined; xl?: number | undefined; } | undefined"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'number | "xs" | "sm" | "md" | "lg" | "xl"'}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:'number | "xs" | "sm" | "md" | "lg" | "xl"'}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:'number | "xs" | "sm" | "md" | "lg" | "xl"'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},autoFit:{defaultValue:{value:"false"},description:"",name:"autoFit",required:!1,type:{name:"boolean"}},autoFill:{defaultValue:{value:"false"},description:"",name:"autoFill",required:!1,type:{name:"boolean"}},minColumnWidth:{defaultValue:null,description:"",name:"minColumnWidth",required:!1,type:{name:"string"}},maxColumnWidth:{defaultValue:null,description:"",name:"maxColumnWidth",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const se={title:"Components/Layout/Grid",component:o,parameters:{layout:"centered",docs:{description:{component:"A responsive grid system component that provides flexible layout capabilities with CSS Grid. Supports responsive breakpoints, auto-fit/auto-fill, and customizable gaps."}}},tags:["autodocs"],argTypes:{columns:{control:{type:"object"},description:"Number of columns or responsive column configuration"},gap:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Grid gap size"},rowGap:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Row gap size (overrides gap)"},columnGap:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Column gap size (overrides gap)"},alignItems:{control:{type:"select"},options:["start","center","end","stretch","baseline"],description:"Vertical alignment of grid items"},justifyContent:{control:{type:"select"},options:["start","center","end","space-between","space-around","space-evenly"],description:"Horizontal alignment of grid items"},autoFit:{control:{type:"boolean"},description:"Auto-fit columns to available space"},autoFill:{control:{type:"boolean"},description:"Auto-fill columns to available space"},minColumnWidth:{control:{type:"text"},description:"Minimum column width for auto-fit/auto-fill"},maxColumnWidth:{control:{type:"text"},description:"Maximum column width for auto-fit/auto-fill"}}},n=({children:r,color:t="#f0f0f0",style:s})=>e.jsx("div",{style:{backgroundColor:t,padding:"20px",borderRadius:"8px",textAlign:"center",minHeight:"100px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:r}),c={args:{columns:3,gap:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"#e3f2fd",children:"Grid Item 1"}),e.jsx(n,{color:"#f3e5f5",children:"Grid Item 2"}),e.jsx(n,{color:"#e8f5e8",children:"Grid Item 3"}),e.jsx(n,{color:"#fff3e0",children:"Grid Item 4"}),e.jsx(n,{color:"#fce4ec",children:"Grid Item 5"}),e.jsx(n,{color:"#f1f8e9",children:"Grid Item 6"})]})}},h={args:{columns:{xs:1,sm:2,md:3,lg:4,xl:6},gap:"lg",children:e.jsx(e.Fragment,{children:Array.from({length:12},(r,t)=>e.jsxs(n,{color:`hsl(${t*30}, 70%, 80%)`,children:["Item ",t+1]},t))})},parameters:{docs:{description:{story:"Responsive grid that adapts column count based on screen size. Resize your browser to see the responsive behavior."}}}},u={args:{autoFit:!0,minColumnWidth:"200px",gap:"md",children:e.jsx(e.Fragment,{children:Array.from({length:8},(r,t)=>e.jsxs(n,{color:`hsl(${t*45}, 60%, 75%)`,children:["Auto-fit Item ",t+1]},t))})},parameters:{docs:{description:{story:"Auto-fit grid that automatically adjusts the number of columns to fit available space while maintaining minimum column width."}}}},f={args:{autoFill:!0,minColumnWidth:"180px",gap:"sm",children:e.jsx(e.Fragment,{children:Array.from({length:6},(r,t)=>e.jsxs(n,{color:`hsl(${t*60}, 65%, 70%)`,children:["Auto-fill Item ",t+1]},t))})},parameters:{docs:{description:{story:"Auto-fill grid that fills the available space with columns, potentially creating empty columns if there are not enough items."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Small Gap"}),e.jsx(o,{columns:4,gap:"xs",children:Array.from({length:4},(r,t)=>e.jsxs(n,{color:`hsl(${t*90}, 70%, 80%)`,children:["Item ",t+1]},t))})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Small Gap"}),e.jsx(o,{columns:4,gap:"sm",children:Array.from({length:4},(r,t)=>e.jsxs(n,{color:`hsl(${t*90}, 70%, 80%)`,children:["Item ",t+1]},t))})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Medium Gap"}),e.jsx(o,{columns:4,gap:"md",children:Array.from({length:4},(r,t)=>e.jsxs(n,{color:`hsl(${t*90}, 70%, 80%)`,children:["Item ",t+1]},t))})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Large Gap"}),e.jsx(o,{columns:4,gap:"lg",children:Array.from({length:4},(r,t)=>e.jsxs(n,{color:`hsl(${t*90}, 70%, 80%)`,children:["Item ",t+1]},t))})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Extra Large Gap"}),e.jsx(o,{columns:4,gap:"xl",children:Array.from({length:4},(r,t)=>e.jsxs(n,{color:`hsl(${t*90}, 70%, 80%)`,children:["Item ",t+1]},t))})]})]}),parameters:{docs:{description:{story:"Different gap sizes available for the grid component."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Align Items: Start"}),e.jsxs(o,{columns:3,gap:"md",alignItems:"start",style:{height:"200px"},children:[e.jsx(n,{color:"#e3f2fd",style:{height:"60px"},children:"Short Item"}),e.jsx(n,{color:"#f3e5f5",style:{height:"120px"},children:"Tall Item"}),e.jsx(n,{color:"#e8f5e8",style:{height:"80px"},children:"Medium Item"})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Align Items: Center"}),e.jsxs(o,{columns:3,gap:"md",alignItems:"center",style:{height:"200px"},children:[e.jsx(n,{color:"#e3f2fd",style:{height:"60px"},children:"Short Item"}),e.jsx(n,{color:"#f3e5f5",style:{height:"120px"},children:"Tall Item"}),e.jsx(n,{color:"#e8f5e8",style:{height:"80px"},children:"Medium Item"})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Align Items: End"}),e.jsxs(o,{columns:3,gap:"md",alignItems:"end",style:{height:"200px"},children:[e.jsx(n,{color:"#e3f2fd",style:{height:"60px"},children:"Short Item"}),e.jsx(n,{color:"#f3e5f5",style:{height:"120px"},children:"Tall Item"}),e.jsx(n,{color:"#e8f5e8",style:{height:"80px"},children:"Medium Item"})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Justify Content: Space Between"}),e.jsxs(o,{columns:3,gap:"md",justifyContent:"space-between",children:[e.jsx(n,{color:"#e3f2fd",children:"Item 1"}),e.jsx(n,{color:"#f3e5f5",children:"Item 2"}),e.jsx(n,{color:"#e8f5e8",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Justify Content: Center"}),e.jsxs(o,{columns:3,gap:"md",justifyContent:"center",children:[e.jsx(n,{color:"#e3f2fd",children:"Item 1"}),e.jsx(n,{color:"#f3e5f5",children:"Item 2"}),e.jsx(n,{color:"#e8f5e8",children:"Item 3"})]})]})]}),parameters:{docs:{description:{story:"Different alignment options for grid items."}}}},x={render:()=>e.jsxs(o,{columns:{xs:1,sm:2,md:3,lg:4},gap:"lg",children:[e.jsx(m,{title:"Card 1",subtitle:"Subtitle 1",children:e.jsx(a,{variant:"body2",children:"This is the first card in the grid layout. It demonstrates how cards work within the grid system."})}),e.jsx(m,{title:"Card 2",subtitle:"Subtitle 2",variant:"secondary",children:e.jsx(a,{variant:"body2",children:"The second card shows how different card variants can be used together in a grid."})}),e.jsx(m,{title:"Card 3",subtitle:"Subtitle 3",variant:"success",children:e.jsx(a,{variant:"body2",children:"Grid layouts are perfect for organizing card-based content like dashboards and product displays."})}),e.jsx(m,{title:"Card 4",subtitle:"Subtitle 4",variant:"info",children:e.jsx(a,{variant:"body2",children:"The grid automatically adjusts the layout based on screen size and available space."})}),e.jsx(m,{title:"Card 5",subtitle:"Subtitle 5",variant:"warning",children:e.jsx(a,{variant:"body2",children:"You can easily add more cards and the grid will handle the layout automatically."})}),e.jsx(m,{title:"Card 6",subtitle:"Subtitle 6",variant:"error",children:e.jsx(a,{variant:"body2",children:"This responsive behavior makes the grid perfect for mobile-first design approaches."})})]}),parameters:{docs:{description:{story:"Example of using the Grid component with Card components to create a responsive card layout."}}}},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Auto-fit with Custom Widths"}),e.jsx(o,{autoFit:!0,minColumnWidth:"300px",maxColumnWidth:"400px",gap:"md",justifyContent:"center",children:Array.from({length:5},(r,t)=>e.jsxs(n,{color:`hsl(${t*72}, 65%, 75%)`,children:["Custom Width Item ",t+1,e.jsx("br",{}),e.jsx("small",{children:"Min: 300px, Max: 400px"})]},t))})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",style:{marginBottom:"16px"},children:"Mixed Column Sizes"}),e.jsxs(o,{columns:3,gap:"md",style:{height:"200px"},children:[e.jsx(n,{color:"#e3f2fd",style:{height:"100%"},children:"Wide Column (2fr)"}),e.jsx(n,{color:"#f3e5f5",style:{height:"100%"},children:"Narrow Column (1fr)"}),e.jsx(n,{color:"#e8f5e8",style:{height:"100%"},children:"Narrow Column (1fr)"})]})]})]}),parameters:{docs:{description:{story:"Custom column width configurations and auto-fit with specific width constraints."}}}};var G,j,b;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md',
    children: <>\r
        <GridItem color="#e3f2fd">Grid Item 1</GridItem>\r
        <GridItem color="#f3e5f5">Grid Item 2</GridItem>\r
        <GridItem color="#e8f5e8">Grid Item 3</GridItem>\r
        <GridItem color="#fff3e0">Grid Item 4</GridItem>\r
        <GridItem color="#fce4ec">Grid Item 5</GridItem>\r
        <GridItem color="#f1f8e9">Grid Item 6</GridItem>\r
      </>
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var C,$,w;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 6
    },
    gap: 'lg',
    children: <>\r
        {Array.from({
        length: 12
      }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 30}, 70%, 80%)\`}>\r
            Item {i + 1}\r
          </GridItem>)}\r
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that adapts column count based on screen size. Resize your browser to see the responsive behavior.'
      }
    }
  }
}`,...(w=($=h.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var T,A,S;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    autoFit: true,
    minColumnWidth: '200px',
    gap: 'md',
    children: <>\r
        {Array.from({
        length: 8
      }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 45}, 60%, 75%)\`}>\r
            Auto-fit Item {i + 1}\r
          </GridItem>)}\r
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Auto-fit grid that automatically adjusts the number of columns to fit available space while maintaining minimum column width.'
      }
    }
  }
}`,...(S=(A=u.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var B,_,k;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    autoFill: true,
    minColumnWidth: '180px',
    gap: 'sm',
    children: <>\r
        {Array.from({
        length: 6
      }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 60}, 65%, 70%)\`}>\r
            Auto-fill Item {i + 1}\r
          </GridItem>)}\r
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Auto-fill grid that fills the available space with columns, potentially creating empty columns if there are not enough items.'
      }
    }
  }
}`,...(k=(_=f.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var W,V,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Small Gap</Typography>\r
        <Grid columns={4} gap="xs">\r
          {Array.from({
          length: 4
        }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 90}, 70%, 80%)\`}>\r
              Item {i + 1}\r
            </GridItem>)}\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Small Gap</Typography>\r
        <Grid columns={4} gap="sm">\r
          {Array.from({
          length: 4
        }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 90}, 70%, 80%)\`}>\r
              Item {i + 1}\r
            </GridItem>)}\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Medium Gap</Typography>\r
        <Grid columns={4} gap="md">\r
          {Array.from({
          length: 4
        }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 90}, 70%, 80%)\`}>\r
              Item {i + 1}\r
            </GridItem>)}\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Large Gap</Typography>\r
        <Grid columns={4} gap="lg">\r
          {Array.from({
          length: 4
        }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 90}, 70%, 80%)\`}>\r
              Item {i + 1}\r
            </GridItem>)}\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Extra Large Gap</Typography>\r
        <Grid columns={4} gap="xl">\r
          {Array.from({
          length: 4
        }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 90}, 70%, 80%)\`}>\r
              Item {i + 1}\r
            </GridItem>)}\r
        </Grid>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different gap sizes available for the grid component.'
      }
    }
  }
}`,...(z=(V=g.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var F,M,q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Align Items: Start</Typography>\r
        <Grid columns={3} gap="md" alignItems="start" style={{
        height: '200px'
      }}>\r
          <GridItem color="#e3f2fd" style={{
          height: '60px'
        }}>Short Item</GridItem>\r
          <GridItem color="#f3e5f5" style={{
          height: '120px'
        }}>Tall Item</GridItem>\r
          <GridItem color="#e8f5e8" style={{
          height: '80px'
        }}>Medium Item</GridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Align Items: Center</Typography>\r
        <Grid columns={3} gap="md" alignItems="center" style={{
        height: '200px'
      }}>\r
          <GridItem color="#e3f2fd" style={{
          height: '60px'
        }}>Short Item</GridItem>\r
          <GridItem color="#f3e5f5" style={{
          height: '120px'
        }}>Tall Item</GridItem>\r
          <GridItem color="#e8f5e8" style={{
          height: '80px'
        }}>Medium Item</GridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Align Items: End</Typography>\r
        <Grid columns={3} gap="md" alignItems="end" style={{
        height: '200px'
      }}>\r
          <GridItem color="#e3f2fd" style={{
          height: '60px'
        }}>Short Item</GridItem>\r
          <GridItem color="#f3e5f5" style={{
          height: '120px'
        }}>Tall Item</GridItem>\r
          <GridItem color="#e8f5e8" style={{
          height: '80px'
        }}>Medium Item</GridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Justify Content: Space Between</Typography>\r
        <Grid columns={3} gap="md" justifyContent="space-between">\r
          <GridItem color="#e3f2fd">Item 1</GridItem>\r
          <GridItem color="#f3e5f5">Item 2</GridItem>\r
          <GridItem color="#e8f5e8">Item 3</GridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Justify Content: Center</Typography>\r
        <Grid columns={3} gap="md" justifyContent="center">\r
          <GridItem color="#e3f2fd">Item 1</GridItem>\r
          <GridItem color="#f3e5f5">Item 2</GridItem>\r
          <GridItem color="#e8f5e8">Item 3</GridItem>\r
        </Grid>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different alignment options for grid items.'
      }
    }
  }
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var D,E,R;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Grid columns={{
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
  }} gap="lg">\r
      <Card title="Card 1" subtitle="Subtitle 1">\r
        <Typography variant="body2">\r
          This is the first card in the grid layout. It demonstrates how cards work within the grid system.\r
        </Typography>\r
      </Card>\r
      \r
      <Card title="Card 2" subtitle="Subtitle 2" variant="secondary">\r
        <Typography variant="body2">\r
          The second card shows how different card variants can be used together in a grid.\r
        </Typography>\r
      </Card>\r
      \r
      <Card title="Card 3" subtitle="Subtitle 3" variant="success">\r
        <Typography variant="body2">\r
          Grid layouts are perfect for organizing card-based content like dashboards and product displays.\r
        </Typography>\r
      </Card>\r
      \r
      <Card title="Card 4" subtitle="Subtitle 4" variant="info">\r
        <Typography variant="body2">\r
          The grid automatically adjusts the layout based on screen size and available space.\r
        </Typography>\r
      </Card>\r
      \r
      <Card title="Card 5" subtitle="Subtitle 5" variant="warning">\r
        <Typography variant="body2">\r
          You can easily add more cards and the grid will handle the layout automatically.\r
        </Typography>\r
      </Card>\r
      \r
      <Card title="Card 6" subtitle="Subtitle 6" variant="error">\r
        <Typography variant="body2">\r
          This responsive behavior makes the grid perfect for mobile-first design approaches.\r
        </Typography>\r
      </Card>\r
    </Grid>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using the Grid component with Card components to create a responsive card layout.'
      }
    }
  }
}`,...(R=(E=x.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var N,L,J;I.parameters={...I.parameters,docs:{...(N=I.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%'
  }}>\r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Auto-fit with Custom Widths</Typography>\r
        <Grid autoFit minColumnWidth="300px" maxColumnWidth="400px" gap="md" justifyContent="center">\r
          {Array.from({
          length: 5
        }, (_, i) => <GridItem key={i} color={\`hsl(\${i * 72}, 65%, 75%)\`}>\r
              Custom Width Item {i + 1}\r
              <br />\r
              <small>Min: 300px, Max: 400px</small>\r
            </GridItem>)}\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" style={{
        marginBottom: '16px'
      }}>Mixed Column Sizes</Typography>\r
        <Grid columns={3} gap="md" style={{
        height: '200px'
      }}>\r
          <GridItem color="#e3f2fd" style={{
          height: '100%'
        }}>\r
            Wide Column (2fr)\r
          </GridItem>\r
          <GridItem color="#f3e5f5" style={{
          height: '100%'
        }}>\r
            Narrow Column (1fr)\r
          </GridItem>\r
          <GridItem color="#e8f5e8" style={{
          height: '100%'
        }}>\r
            Narrow Column (1fr)\r
          </GridItem>\r
        </Grid>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom column width configurations and auto-fit with specific width constraints.'
      }
    }
  }
}`,...(J=(L=I.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};const oe=["Basic","Responsive","AutoFit","AutoFill","DifferentGaps","AlignmentOptions","CardGrid","CustomColumnWidths"];export{y as AlignmentOptions,f as AutoFill,u as AutoFit,c as Basic,x as CardGrid,I as CustomColumnWidths,g as DifferentGaps,h as Responsive,oe as __namedExportsOrder,se as default};
