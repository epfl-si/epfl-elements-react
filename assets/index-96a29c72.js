import{j as e}from"./jsx-runtime-ffb262ed.js";import{A as V}from"./index-5502a31e.js";import{H as x}from"./index-b680aec1.js";import{A as I}from"./asidemenu-2778d00b.js";import{B as j}from"./index-6b81d9e8.js";import{C as A}from"./index-a0dd7cf6.js";import{F as B}from"./Footer-f046b923.js";import{F as L}from"./FooterLight-df8116be.js";import{r as C}from"./index-76fb7be0.js";function E(t,o){const r=a=>(a||"").replace(/\b\w/g,n=>n.toUpperCase());function s(){if(o)return`${t} - ${o}`;try{if(document.location.pathname==="/")return`${t} - About`;const a=document.location.pathname.split("/").filter(n=>n);return`${t} - ${r(a[0])} - ${r(a.slice(-1)[0])}`}catch{return console.error("Could not generate the title return default"),t}}C.useEffect(()=>{document.location&&t&&(document.title=s())})}const F=[{link:"https://www.epfl.ch/about/",anchor:"About"},{link:"https://www.epfl.ch/education",anchor:"Education"},{link:"https://www.epfl.ch/research",anchor:"Research"},{link:"https://www.epfl.ch/innovation/",anchor:"Innovation"},{link:"https://www.epfl.ch/schools/",anchor:"Schools",active:!0},{link:"https://www.epfl.ch/campus/",anchor:"Campus"}],H=[{link:"https://www.epfl.ch/schools/",anchor:"Schools"},{link:"https://sti.epfl.ch/",anchor:"School of Engineering"},{link:"",anchor:"Elements React",active:!0}],R={link:"https://www.epfl.ch",anchor:"Go to main site"},S="Home",_="/",$=!0,P=!0,T=!1;function m({children:t,user:o,feedBackEmail:r,homeAnchor:s=S,homeLink:a=_,isHome:n=$,isLoading:d=!1,isBeta:f=!1,asideMenuItems:l,topMenuItems:h=F,breadcrumbItems:w=H,drawerContents:g=R,showFooter:i=P,useLightFooter:u=T,mainContainerClass:y,baseTitle:c,title:p,avatarLogoUrl:k,avatarLogoAltText:v,useReactRouterLinks:b}){c&&p&&E(c,p);const q=()=>e.jsx(V,{title:"Beta page:",alertType:"info",message:"This is not released yet to the standard users. You are seeing it because you belong to the beta testing group."});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[f&&q(),e.jsx(x,{topMenuItems:h,drawerContents:g,user:o,avatarLogoUrl:k,avatarLogoAltText:v}),e.jsxs("div",{className:"main-container",children:[e.jsx(j,{items:w}),e.jsxs("div",{className:"nav-toggle-layout nav-aside-layout",children:[e.jsx(A,{mainContainerClass:y,children:t}),l&&e.jsx(I,{isHome:n,feedBackEmail:r,isLoading:d,menuItems:l,homeLink:a,homeAnchor:s,useReactRouterLinks:b})]})]})]}),i&&u&&e.jsx(L,{}),i&&!u&&e.jsx(B,{})]})}try{m.displayName="Base",m.__docgenInfo={description:"",displayName:"Base",props:{feedBackEmail:{defaultValue:null,description:"",name:"feedBackEmail",required:!1,type:{name:"string"}},homeAnchor:{defaultValue:{value:"Home"},description:"",name:"homeAnchor",required:!1,type:{name:"string"}},homeLink:{defaultValue:{value:"/"},description:"",name:"homeLink",required:!1,type:{name:"string"}},isHome:{defaultValue:{value:"true"},description:"",name:"isHome",required:!1,type:{name:"boolean"}},isBeta:{defaultValue:{value:"false"},description:"",name:"isBeta",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"object"}},breadcrumbItems:{defaultValue:{value:`[
  { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
  { link: 'https://sti.epfl.ch/', anchor: 'School of Engineering' },
  { link: '', anchor: 'Elements React', active: true }
]`},description:"",name:"breadcrumbItems",required:!1,type:{name:"BreadcrumbsItemProps[]"}},topMenuItems:{defaultValue:{value:`[
  { link: 'https://www.epfl.ch/about/', anchor: 'About' },
  { link: 'https://www.epfl.ch/education', anchor: 'Education' },
  { link: 'https://www.epfl.ch/research', anchor: 'Research' },
  { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
  { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', active: true },
  { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
]`},description:"",name:"topMenuItems",required:!1,type:{name:"TopmenuInnerProps[]"}},showFooter:{defaultValue:{value:"true"},description:"",name:"showFooter",required:!1,type:{name:"boolean"}},useLightFooter:{defaultValue:{value:"false"},description:"",name:"useLightFooter",required:!1,type:{name:"boolean"}},drawerContents:{defaultValue:{value:`{
  link: 'https://www.epfl.ch',
  anchor: 'Go to main site'
}`},description:"",name:"drawerContents",required:!1,type:{name:"DrawerInnerProps"}},avatarLogoAltText:{defaultValue:null,description:"",name:"avatarLogoAltText",required:!1,type:{name:"string"}},avatarLogoUrl:{defaultValue:null,description:"",name:"avatarLogoUrl",required:!1,type:{name:"string"}},mainContainerClass:{defaultValue:null,description:"",name:"mainContainerClass",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},baseTitle:{defaultValue:null,description:"",name:"baseTitle",required:!1,type:{name:"string"}},asideMenuItems:{defaultValue:null,description:"",name:"asideMenuItems",required:!1,type:{name:"AsidemenuItemsProps[]"}},useReactRouterLinks:{defaultValue:null,description:"",name:"useReactRouterLinks",required:!1,type:{name:"boolean"}}}}}catch{}export{m as B};
