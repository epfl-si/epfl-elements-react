import{j as c}from"./jsx-runtime-ffb262ed.js";/* empty css              */import{r as M}from"./index-76fb7be0.js";import{B as v}from"./index-e9a24687.js";import"./_commonjsHelpers-de833af9.js";import"./index-5502a31e.js";/* empty css                     */import"./index-b680aec1.js";import"./avatar-a4c00322.js";import"./index-47411d98.js";import"./index-da91ca9c.js";import"./topmenu-0b752ca2.js";import"./asidemenu-2778d00b.js";import"./index-b5a74fdf.js";import"./index-5d632df7.js";import"./index-d3ea75b5.js";import"./index-1c685bd7.js";import"./index-6b81d9e8.js";import"./index-a0dd7cf6.js";import"./Footer-bea97677.js";import"./footersocialcontents-f0d63a1b.js";import"./FooterLight-49bc1c6f.js";function n({id:e,label:V,isChecked:W,marginLeft:i,onChangeCallback:m}){const[d,q]=M.useState(!!W),N=e||Date.now().toString(30);function D(E){m&&m(E.target.checked),q(!d)}return c.jsxs("div",{className:"custom-control custom-switch",style:{marginLeft:i||"1em"},children:[c.jsx("input",{type:"checkbox",className:"custom-control-input",id:N,checked:d,onChange:D}),c.jsx("label",{className:"custom-control-label",htmlFor:e,children:V})]})}try{n.displayName="Switch",n.__docgenInfo={description:"",displayName:"Switch",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"string"}},onChangeCallback:{defaultValue:null,description:"",name:"onChangeCallback",required:!1,type:{name:"Callback"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}}}}}catch{}const le={title:"Atoms/Switch",component:n,tags:["docsPage"]},A={render:e=>c.jsx(v,{asideMenuItems:[],children:c.jsx(n,{...e})})},a={};a.args={id:"testId1",label:"",onChangeCallback:()=>{console.log("State should Change.")}};const t={};t.args={id:"testId2",label:"Test Checkbox",onChangeCallback:()=>{console.log("State should Change.")}};const o={};o.args={id:"testId3",label:"Test Checkbox",isChecked:!0,onChangeCallback:()=>{console.log("State should Change.")}};const r={};r.args={id:"testId4",label:"Test Checkbox",onChangeCallback:e=>{console.log(`Value returned: ${e}`)}};const s={};s.args={id:"testId4",label:"Test Checkbox",marginLeft:"10em"};const l={...A,args:{id:"testId7",label:"Test Checkbox",onChangeCallback:()=>{console.log("State should Change.")}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,C,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var k,f,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,y,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var I,_,L;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(L=(_=s.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var T,j,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...withBaseTemplate,
  args: {
    id: 'testId7',
    label: 'Test Checkbox',
    onChangeCallback: () => {
      console.log('State should Change.');
    }
  }
}`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const ne=["Default","WithLabel","isChecked","WithCallback","WithLeftMargin","withBaseComponent"];export{a as Default,r as WithCallback,t as WithLabel,s as WithLeftMargin,ne as __namedExportsOrder,le as default,o as isChecked,l as withBaseComponent};