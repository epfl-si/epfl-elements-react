import{j as e}from"./jsx-runtime-ffb262ed.js";import{L as p}from"./index-b5a74fdf.js";import{L as c}from"./index-5d632df7.js";/* empty css                     */function m({isHome:s,isLoading:i,menuItems:u,homeAnchor:l,homeLink:r,feedBackEmail:d,useReactRouterLinks:t}){const o=n=>n.map(a=>e.jsx("li",{className:a.link===document.location.pathname?"active":void 0,children:t?e.jsx(c,{to:a.link,children:a.anchor}):e.jsx("a",{href:a.link,children:a.anchor})},a.link));function h(){return(u||[]).map(n=>e.jsxs("li",{children:[e.jsx("a",{children:n.heading})," ",e.jsxs("ul",{children:[n.menus&&o(n.menus),n.submenus&&n.submenus.map(a=>e.jsxs("li",{children:[e.jsx("a",{children:a.heading})," ",e.jsx("ul",{children:o(a.menus)})]},a.heading))]})]},n.heading))}return e.jsxs("aside",{className:"nav-aside-wrapper",children:[e.jsxs("nav",{id:"nav-aside",className:"nav-aside",role:"navigation","aria-describedby":"nav-aside-title",children:[e.jsx("h2",{className:"h5 sr-only-xl",children:"On the same topic"}),e.jsxs("ul",{children:[!i&&e.jsx("li",{className:s?"active":"",children:t?e.jsx(c,{to:r,children:l}):e.jsx("a",{href:r,children:l})}),i?e.jsx(p,{}):h()]})]}),d&&e.jsx("div",{className:"",children:e.jsxs("a",{className:"btn btn-primary btn-block",href:`mailto:${d}`,children:[e.jsx("i",{className:"fas fa-bullhorn"})," Provide feedback"]})})]})}try{m.displayName="Asidemenu",m.__docgenInfo={description:"",displayName:"Asidemenu",props:{isHome:{defaultValue:null,description:"",name:"isHome",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},menuItems:{defaultValue:null,description:"",name:"menuItems",required:!1,type:{name:"AsidemenuItemsProps[]"}},homeLink:{defaultValue:null,description:"",name:"homeLink",required:!1,type:{name:"string"}},homeAnchor:{defaultValue:null,description:"",name:"homeAnchor",required:!1,type:{name:"string"}},feedBackEmail:{defaultValue:null,description:"",name:"feedBackEmail",required:!1,type:{name:"string"}},useReactRouterLinks:{defaultValue:null,description:"",name:"useReactRouterLinks",required:!1,type:{name:"boolean"}}}}}catch{}export{m as A};
