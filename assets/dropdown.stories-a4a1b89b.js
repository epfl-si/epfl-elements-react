import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function d({label:e,options:u,onChangeFn:_,placeholder:S}){var f;const[l,p]=c.useState(!1),[m,N]=c.useState(((f=u.filter(o=>o.active)[0])==null?void 0:f.option)||""),i=c.useRef(null);function O(o){const r=o.target.innerText;N(r),p(!1),_(r),o.preventDefault()}const h=o=>{i.current&&!i.current.contains(o.target)&&p(!1)};return c.useEffect(()=>(document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)),[l]),s.jsxs("div",{className:"dropdown",ref:i,children:[s.jsxs("button",{className:"btn btn-sm btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown",onClick:()=>p(!l),"aria-haspopup":"true","aria-expanded":"false",children:[e," ",m||S||"Select an option"]}),s.jsx("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",style:{display:l?"block":"none"},children:(u||[]).map((o,r)=>s.jsx("a",{className:"dropdown-item",style:{fontSize:"0.92em"},onClick:O,href:"#",children:o.option},`option-${r}`))})]})}try{d.displayName="Dropdown",d.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"DropdownInnerProps[]"}},onChangeFn:{defaultValue:null,description:"",name:"onChangeFn",required:!1,type:{name:"any"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Atoms/Dropdown",component:d,tags:["docsPage"]},n={};n.args={label:">",options:[{option:"Checkbox 1",active:!0},{option:"Checkbox 2"},{option:"Checkbox 3"}],onChangeFn:e=>{console.log(e)}};const t={};t.args={label:">",options:[{option:"Checkbox 1"},{option:"Checkbox 2"},{option:"Checkbox 3"}],onChangeFn:e=>{console.log(e)}};const a={};a.args={label:">",options:[{option:"Checkbox 1"},{option:"Checkbox 2"},{option:"Checkbox 3"}],placeholder:"Select a checkbox label",onChangeFn:e=>{console.log(e)}};var g,b,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var C,w,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var k,v,D;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(D=(v=a.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const A=["Default","NoActiveOption","CustomPlacerholder"];export{a as CustomPlacerholder,n as Default,t as NoActiveOption,A as __namedExportsOrder,q as default};