import{j as e}from"./jsx-runtime-ffb262ed.js";/* empty css                     */const n=(r,a)=>e.jsx("li",{style:{marginRight:"0.4em"},className:r.active?"breadcrumb-item active":"breadcrumb-item",children:r.active?r.anchor:e.jsx("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",children:r.anchor},`a-${a}`)},`li-${a}`);function c({items:r}){return e.jsx("div",{className:"breadcrumb-container",children:e.jsx("nav",{"aria-label":"breadcrumb",className:"breadcrumb-wrapper",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",style:{marginRight:"0.4em"},children:e.jsx("a",{href:"https://www.epfl.ch",target:"_blank",rel:"noopener noreferrer",children:e.jsx("svg",{className:"icon","aria-hidden":"true",children:e.jsx("use",{xlinkHref:"#icon-home",children:e.jsx("svg",{id:"icon-home",viewBox:"0 0 11 12",children:e.jsx("path",{d:"M0 5l5.25-5 5.25 5v7H0z",fillRule:"evenodd"})})})})})}),r&&r.map((a,s)=>n(a,s))]})})})}try{c.displayName="Breadcrumbs",c.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbsItemProps[]"}}}}}catch{}export{c as B};
