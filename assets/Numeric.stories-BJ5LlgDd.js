import{j as e}from"./jsx-runtime-Nms4Y4qS.js";/* empty css                     */import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const m=({size:o="medium",isReadonly:k=!1,value:F,placeholder:M,min:z,max:D,label:d,isRequired:u=!1,id:c,name:H,help:p,validationErrorMessage:I,onChange:O})=>{let a="form-control";switch(o){case"small":a=a.concat(" form-control-sm");break;case"large":a=a.concat(" form-control-lg");break}const L=u?"form-group required":"form-group";return e.jsxs("div",{className:L,children:[d?e.jsx("label",{className:"control-label",htmlFor:c,children:d}):e.jsx(e.Fragment,{}),e.jsxs("div",{className:"input-group has-validation",children:[e.jsx("input",{className:a,type:"number",id:c,name:H,min:z,max:D,placeholder:M,value:F,readOnly:k,required:u}),e.jsx("div",{className:"invalid-feedback",children:I})]}),p?e.jsx("small",{className:"form-text text-muted",children:p}):e.jsx(e.Fragment,{})]})};try{m.displayName="Numeric",m.__docgenInfo={description:"",displayName:"Numeric",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isReadonly:{defaultValue:{value:"false"},description:"",name:"isReadonly",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"string"}},validationErrorMessage:{defaultValue:null,description:"",name:"validationErrorMessage",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(() => void)"}}}}}catch{}const G={title:"Molecules/Inputs/Numeric",component:m,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{name:"test_Name",id:"test_primary"}},s={args:{isRequired:!0,name:"test_Name",id:"test_primary"}},t={args:{isReadonly:!0,name:"test_Name",id:"test_primary"}},n={args:{name:"test_Name",id:"test_primary",label:"Test label"}},l={args:{name:"test_Name",id:"test_primary",help:"Test label"}},i={args:{name:"test_Name",id:"test_primary",placeholder:"Test label"}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'test_Name',
    id: 'test_primary'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var _,h,N;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    name: 'test_Name',
    id: 'test_primary'
  }
}`,...(N=(h=s.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var b,q,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isReadonly: true,
    name: 'test_Name',
    id: 'test_primary'
  }
}`,...(v=(q=t.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var x,V,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'test_Name',
    id: 'test_primary',
    label: 'Test label'
  }
}`,...(R=(V=n.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var j,S,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'test_Name',
    id: 'test_primary',
    help: 'Test label'
  }
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var W,C,E;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: 'test_Name',
    id: 'test_primary',
    placeholder: 'Test label'
  }
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const J=["Default","Required","Readonly","WithLabel","WithHelp","WithPlaceholder"];export{r as Default,t as Readonly,s as Required,l as WithHelp,n as WithLabel,i as WithPlaceholder,J as __namedExportsOrder,G as default};
