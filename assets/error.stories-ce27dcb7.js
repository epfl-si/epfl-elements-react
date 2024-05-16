import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function n({error:r}){return e.jsx("div",{id:"primary",className:"content-area",children:e.jsx("main",{id:"main",className:"site-main",children:e.jsx("section",{className:"error-404 not-found",children:e.jsxs("div",{className:"page-content container",children:[r.status&&e.jsx("p",{className:"h1 mt-4 error-title",children:r.status}),r.message&&e.jsx("h1",{className:"h3 text-center",children:r.message}),!r.message&&e.jsx("h1",{className:"h3 text-center",children:"Server error please try again"})]})})})})}try{n.displayName="Error",n.__docgenInfo={description:"",displayName:"Error",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"ErrorInnerProps"}}}}}catch{}const _={title:"Molecules/Error",component:n,tags:["docsPage"]},s={args:{error:{status:404,message:"Oops the page can not be found"}}},a={args:{error:{status:403,message:"Forbidden. Please contact the admin"}}},t={args:{error:{status:503,message:"Server error. Please try again or contact the admin."}}};var o,c,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    error: {
      status: 404,
      message: 'Oops the page can not be found'
    }
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    error: {
      status: 403,
      message: 'Forbidden. Please contact the admin'
    }
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,l,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    error: {
      status: 503,
      message: 'Server error. Please try again or contact the admin.'
    }
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const j=["Status404","Status403","Status503"];export{a as Status403,s as Status404,t as Status503,j as __namedExportsOrder,_ as default};
