import{s as c,j as n}from"./styled-components.browser.esm-6cdfd3cd.js";import{r as y}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const Y=c.div`
  width: 100%;
  overflow-x: auto;
  font-family: ${({theme:e})=>e.typography.fontFamily};
`,Ge=c.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({theme:e})=>e.colors.background.paper};
  
  /* Size-based font and spacing */
  font-size: ${({theme:e,size:a})=>a==="xs"?e.typography.fontSize.xs:a==="sm"?e.typography.fontSize.sm:a==="lg"?e.typography.fontSize.lg:e.typography.fontSize.md};
  
  /* Border styling */
  border: ${({bordered:e,theme:a})=>e?`1px solid ${a.colors.border}`:"none"};
  
  th, td {
    padding: ${({theme:e,size:a})=>a==="xs"?`${e.spacing.xs} ${e.spacing.sm}`:a==="sm"?`${e.spacing.sm} ${e.spacing.md}`:a==="lg"?`${e.spacing.md} ${e.spacing.lg}`:`${e.spacing.sm} ${e.spacing.md}`};
    text-align: left;
    border-bottom: ${({bordered:e,theme:a})=>e?`1px solid ${a.colors.border}`:`1px solid ${a.colors.background.secondary}`};
  }
  
  th {
    background-color: ${({theme:e})=>e.colors.background.secondary};
    font-weight: ${({theme:e})=>e.typography.weights.semibold};
    color: ${({theme:e})=>e.colors.text.primary};
    position: sticky;
    top: 0;
    z-index: 1;
  }
  
  tbody tr {
    background-color: ${({theme:e})=>e.colors.background.paper};
    transition: background-color 0.2s ease;
    
    ${({striped:e,theme:a})=>e&&`
      &:nth-child(even) {
        background-color: ${a.colors.background.secondary};
      }
    `}
    
    ${({hoverable:e,theme:a})=>e&&`
      &:hover {
        background-color: ${a.colors.background.hover};
        cursor: pointer;
      }
    `}
  }
  
  td {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,Qe=c.thead``,Xe=c.tbody``,Ye=c.tr`
  ${({selected:e,theme:a})=>e&&`
    background-color: ${a.colors.primary.veryLight} !important;
  `}
`,Ze=c.td`
  text-align: ${({align:e})=>e||"left"};
`,ea=c.th`
  text-align: ${({align:e})=>e||"left"};
  user-select: none;
  cursor: ${({sortable:e})=>e?"pointer":"default"};
  
  &:hover {
    background-color: ${({theme:e,sortable:a})=>a?e.colors.background.hover:"transparent"};
  }
  
  &::after {
    content: '';
    display: ${({sortable:e,sortDirection:a})=>e&&a?"inline-block":"none"};
    margin-left: ${({theme:e})=>e.spacing.xs};
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: ${({sortDirection:e,theme:a})=>e==="asc"?`4px solid ${a.colors.primary.main}`:"none"};
    border-top: ${({sortDirection:e,theme:a})=>e==="desc"?`4px solid ${a.colors.primary.main}`:"none"};
  }
`,aa=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.sm};
`,ta=c.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,ra=c.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xs};
`,C=c.button`
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
  border: 1px solid ${({theme:e})=>e.colors.border};
  background-color: ${({theme:e,active:a})=>a?e.colors.primary.main:e.colors.background.paper};
  color: ${({theme:e,active:a})=>a?e.colors.white:e.colors.text.primary};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${({theme:e,active:a})=>a?e.colors.primary.dark:e.colors.background.hover};
  }
  
  &:disabled {
    opacity: 0.5;
  }
`,na=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xl};
  color: ${({theme:e})=>e.colors.text.secondary};
`,sa=c.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xl};
  color: ${({theme:e})=>e.colors.text.secondary};
`,Z=c.input`
  cursor: pointer;
`;function F({columns:e,data:a,sortable:H=!0,filterable:B=!1,pagination:D=!1,pageSize:b=10,rowSelection:i,onRowClick:O,size:L="md",bordered:K=!1,striped:Ee=!1,hoverable:Be=!0,loading:De=!1,emptyText:Le="No data available",showHeader:Ke=!0,className:J,style:G}){const[S,Q]=y.useState(null),[f,j]=y.useState(null),[d,k]=y.useState(1),[w,Me]=y.useState(""),[m,X]=y.useState((i==null?void 0:i.selectedRowKeys)||[]),v=(t,s)=>t.id||t.key||`row-${s}`,M=y.useMemo(()=>!B||!w?a:a.filter(t=>e.some(s=>{const r=s.dataIndex?t[s.dataIndex]:t[s.key];return String(r||"").toLowerCase().includes(w.toLowerCase())})),[a,w,B,e]),x=y.useMemo(()=>!S||!f?M:[...M].sort((t,s)=>{const r=e.find(Je=>Je.key===S);if(!r)return 0;const l=r.dataIndex?t[r.dataIndex]:t[r.key],o=r.dataIndex?s[r.dataIndex]:s[r.key];if(l===o)return 0;const h=l>o?1:-1;return f==="asc"?h:-h}),[M,S,f,e]),$=y.useMemo(()=>{if(!D)return x;const t=(d-1)*b,s=t+b;return x.slice(t,s)},[x,D,d,b]),g=Math.ceil(x.length/b),Fe=t=>{if(!H)return;const s=e.find(r=>r.key===t);!s||!s.sortable||(S===t?f==="asc"?j("desc"):f==="desc"?(Q(null),j(null)):j("asc"):(Q(t),j("asc")))},He=(t,s)=>{if(!i)return;let r;if(i.type==="radio"?r=[t]:m.includes(t)?r=m.filter(l=>l!==t):r=[...m,t],X(r),i.onChange){const l=a.filter(o=>r.includes(v(o,a.indexOf(o))));i.onChange(r,l)}},Oe=()=>{if(!i||i.type==="radio")return;const t=$.map((l,o)=>v(l,o)),s=t.every(l=>m.includes(l));let r;if(s?r=m.filter(l=>!t.includes(l)):r=[...new Set([...m,...t])],X(r),i.onChange){const l=a.filter(o=>r.includes(v(o,a.indexOf(o))));i.onChange(r,l)}};return De?n.jsx(Y,{size:L,bordered:K,className:J,style:G,children:n.jsx(na,{children:"Loading..."})}):n.jsxs(Y,{size:L,bordered:K,className:J,style:G,children:[B&&n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx("input",{type:"text",placeholder:"Search...",value:w,onChange:t=>Me(t.target.value),style:{padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px",width:"100%",maxWidth:"300px"}})}),n.jsxs(Ge,{size:L,bordered:K,striped:Ee,hoverable:Be,children:[Ke&&n.jsx(Qe,{children:n.jsxs("tr",{children:[i&&i.type!=="radio"&&n.jsx("th",{style:{width:"40px"},children:n.jsx(Z,{type:"checkbox",checked:$.length>0&&$.every((t,s)=>m.includes(v(t,s))),onChange:Oe})}),e.map(t=>n.jsx(ea,{sortable:H&&t.sortable,sortDirection:S===t.key?f:null,align:t.align,onClick:()=>Fe(t.key),style:t.width?{width:t.width}:void 0,children:t.title},t.key))]})}),n.jsx(Xe,{children:$.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:e.length+(i?1:0),children:n.jsx(sa,{children:Le})})}):$.map((t,s)=>{const r=v(t,s),l=m.includes(r);return n.jsxs(Ye,{selected:l,onClick:()=>{O&&O(t,s)},children:[i&&n.jsx("td",{children:n.jsx(Z,{type:i.type||"checkbox",checked:l,onChange:()=>He(r),onClick:o=>o.stopPropagation()})}),e.map(o=>{const h=o.dataIndex?t[o.dataIndex]:t[o.key];return n.jsx(Ze,{align:o.align,children:o.render?o.render(h,t,s):h!=null?String(h):"-"},o.key)})]},r)})})]}),D&&g>1&&n.jsxs(aa,{children:[n.jsxs(ta,{children:["Showing ",(d-1)*b+1," to ",Math.min(d*b,x.length)," of ",x.length," entries"]}),n.jsxs(ra,{children:[n.jsx(C,{disabled:d===1,onClick:()=>k(1),children:"First"}),n.jsx(C,{disabled:d===1,onClick:()=>k(d-1),children:"Previous"}),Array.from({length:Math.min(5,g)},(t,s)=>{let r;return g<=5||d<=3?r=s+1:d>=g-2?r=g-4+s:r=d-2+s,n.jsx(C,{active:d===r,onClick:()=>k(r),children:r},r)}),n.jsx(C,{disabled:d===g,onClick:()=>k(d+1),children:"Next"}),n.jsx(C,{disabled:d===g,onClick:()=>k(g),children:"Last"})]})]})]})}try{F.displayName="Table",F.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},sortable:{defaultValue:{value:"true"},description:"",name:"sortable",required:!1,type:{name:"boolean"}},filterable:{defaultValue:{value:"false"},description:"",name:"filterable",required:!1,type:{name:"boolean"}},pagination:{defaultValue:{value:"false"},description:"",name:"pagination",required:!1,type:{name:"boolean"}},pageSize:{defaultValue:{value:"10"},description:"",name:"pageSize",required:!1,type:{name:"number"}},rowSelection:{defaultValue:null,description:"",name:"rowSelection",required:!1,type:{name:'{ type?: "checkbox" | "radio"; selectedRowKeys?: string[]; onChange?: ((selectedRowKeys: string[], selectedRows: T[]) => void) | undefined; } | undefined'}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"((record: T, index: number) => void)"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},striped:{defaultValue:{value:"false"},description:"",name:"striped",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"true"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:{value:"No data available"},description:"",name:"emptyText",required:!1,type:{name:"string"}},showHeader:{defaultValue:{value:"true"},description:"",name:"showHeader",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const da={title:"Components/Common/Table",component:F,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},sortable:{control:{type:"boolean"}},filterable:{control:{type:"boolean"}},pagination:{control:{type:"boolean"}},bordered:{control:{type:"boolean"}},striped:{control:{type:"boolean"}},hoverable:{control:{type:"boolean"}}}},u=[{id:"1",name:"John Doe",email:"john@example.com",role:"Admin",status:"Active",createdAt:"2024-01-15"},{id:"2",name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active",createdAt:"2024-02-20"},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive",createdAt:"2024-03-10"},{id:"4",name:"Alice Williams",email:"alice@example.com",role:"Moderator",status:"Active",createdAt:"2024-01-05"},{id:"5",name:"Charlie Brown",email:"charlie@example.com",role:"User",status:"Active",createdAt:"2024-04-12"},{id:"6",name:"Diana Prince",email:"diana@example.com",role:"Admin",status:"Active",createdAt:"2024-02-28"},{id:"7",name:"Edward Norton",email:"edward@example.com",role:"User",status:"Inactive",createdAt:"2024-03-22"},{id:"8",name:"Fiona Apple",email:"fiona@example.com",role:"User",status:"Active",createdAt:"2024-01-18"}],p=[{key:"name",title:"Name",dataIndex:"name",sortable:!0,filterable:!0},{key:"email",title:"Email",dataIndex:"email",sortable:!0,filterable:!0},{key:"role",title:"Role",dataIndex:"role",sortable:!0,filterable:!0},{key:"status",title:"Status",dataIndex:"status",sortable:!0,render:e=>n.jsx("span",{style:{color:e==="Active"?"#28a745":"#dc3545",fontWeight:"bold"},children:e})},{key:"createdAt",title:"Created",dataIndex:"createdAt",sortable:!0}],R={args:{columns:p,data:u.slice(0,5),sortable:!0,pagination:!1}},A={args:{columns:p,data:u,sortable:!0,pagination:!0,pageSize:5}},I={args:{columns:p,data:u,sortable:!0,filterable:!0,pagination:!0,pageSize:5}},T={args:{columns:p,data:u,sortable:!0,pagination:!0,pageSize:5,rowSelection:{type:"checkbox",onChange:(e,a)=>{console.log("Selected:",e,a)}}}},z={args:{columns:p,data:u,sortable:!0,pagination:!0,pageSize:5,rowSelection:{type:"radio",onChange:(e,a)=>{console.log("Selected:",e,a)}}}},V={args:{columns:p,data:u.slice(0,5),sortable:!0,bordered:!0}},U={args:{columns:p,data:u.slice(0,5),sortable:!0,striped:!0}},q={args:{columns:p,data:u.slice(0,5),sortable:!0,size:"sm"}},W={args:{columns:p,data:u.slice(0,5),sortable:!0,size:"lg"}},N={args:{columns:p,data:u.slice(0,5),sortable:!0,hoverable:!0,onRowClick:(e,a)=>{alert(`Clicked row ${a+1}: ${e.name}`)}}},P={args:{columns:p,data:[],sortable:!0,emptyText:"No users found"}},_={args:{columns:p,data:[],loading:!0}},E={args:{columns:[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"email",title:"Email",dataIndex:"email",sortable:!0,render:e=>n.jsx("a",{href:`mailto:${e}`,style:{color:"#007bff"},children:e})},{key:"role",title:"Role",dataIndex:"role",sortable:!0,render:e=>n.jsx("span",{style:{padding:"4px 8px",borderRadius:"4px",backgroundColor:e==="Admin"?"#e3f2fd":"#f5f5f5",color:e==="Admin"?"#1976d2":"#666"},children:e})},{key:"actions",title:"Actions",align:"right",render:(e,a)=>n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[n.jsx("button",{style:{padding:"4px 8px",cursor:"pointer"},children:"Edit"}),n.jsx("button",{style:{padding:"4px 8px",cursor:"pointer"},children:"Delete"})]})}],data:u.slice(0,5),sortable:!0}};var ee,ae,te;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    pagination: false
  }
}`,...(te=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,se;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    sortable: true,
    pagination: true,
    pageSize: 5
  }
}`,...(se=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ie;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    sortable: true,
    filterable: true,
    pagination: true,
    pageSize: 5
  }
}`,...(ie=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,pe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    sortable: true,
    pagination: true,
    pageSize: 5,
    rowSelection: {
      type: 'checkbox',
      onChange: (selectedRowKeys, selectedRows) => {
        console.log('Selected:', selectedRowKeys, selectedRows);
      }
    }
  }
}`,...(pe=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,ge;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    sortable: true,
    pagination: true,
    pageSize: 5,
    rowSelection: {
      type: 'radio',
      onChange: (selectedRowKeys, selectedRows) => {
        console.log('Selected:', selectedRowKeys, selectedRows);
      }
    }
  }
}`,...(ge=(me=z.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,be,fe;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    bordered: true
  }
}`,...(fe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,he,Se;U.parameters={...U.parameters,docs:{...(xe=U.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    striped: true
  }
}`,...(Se=(he=U.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var ke,ve,$e;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    size: 'sm'
  }
}`,...($e=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:$e.source}}};var Ce,je,we;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    size: 'lg'
  }
}`,...(we=(je=W.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var Re,Ae,Ie;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers.slice(0, 5),
    sortable: true,
    hoverable: true,
    onRowClick: (record, index) => {
      alert(\`Clicked row \${index + 1}: \${(record as User).name}\`);
    }
  }
}`,...(Ie=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var Te,ze,Ve;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    sortable: true,
    emptyText: 'No users found'
  }
}`,...(Ve=(ze=P.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var Ue,qe,We;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    loading: true
  }
}`,...(We=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:We.source}}};var Ne,Pe,_e;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      sortable: true
    }, {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      sortable: true,
      render: (value: string) => <a href={\`mailto:\${value}\`} style={{
        color: '#007bff'
      }}>\r
            {value}\r
          </a>
    }, {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      sortable: true,
      render: (value: string) => <span style={{
        padding: '4px 8px',
        borderRadius: '4px',
        backgroundColor: value === 'Admin' ? '#e3f2fd' : '#f5f5f5',
        color: value === 'Admin' ? '#1976d2' : '#666'
      }}>\r
            {value}\r
          </span>
    }, {
      key: 'actions',
      title: 'Actions',
      align: 'right',
      render: (_, record) => <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'flex-end'
      }}>\r
            <button style={{
          padding: '4px 8px',
          cursor: 'pointer'
        }}>Edit</button>\r
            <button style={{
          padding: '4px 8px',
          cursor: 'pointer'
        }}>Delete</button>\r
          </div>
    }],
    data: sampleUsers.slice(0, 5),
    sortable: true
  }
}`,...(_e=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};const ca=["Basic","WithPagination","WithFiltering","WithRowSelection","WithRadioSelection","Bordered","Striped","SmallSize","LargeSize","WithRowClick","EmptyState","Loading","CustomRender"];export{R as Basic,V as Bordered,E as CustomRender,P as EmptyState,W as LargeSize,_ as Loading,q as SmallSize,U as Striped,I as WithFiltering,A as WithPagination,z as WithRadioSelection,N as WithRowClick,T as WithRowSelection,ca as __namedExportsOrder,da as default};
