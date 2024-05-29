import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";/* empty css                     */import"./_commonjsHelpers-de833af9.js";function r({carouselItems:t}){const[c,l]=j.useState(t.filter(s=>s.active)[0].id),a=t.reduce((s,n,o)=>(s[n.id]=o,s),{});function h(){const n=a[c]+1,o=(t[n]||t[0]).id;l(o)}function u(){const n=a[c]-1,o=(t[n]||t[t.length-1]).id;l(o)}const x=s=>e.jsx("div",{className:s.id===c?"carousel-item active":"carousel-item",children:e.jsxs("div",{className:"fullwidth-teaser fullwidth-teaser-horizontal",children:[e.jsx("picture",{children:e.jsx("img",{width:s.width,height:s.height,src:s.src,className:"attachment-thumbnail_16_9_large_80p size-thumbnail_16_9_large_80p",alt:"",loading:"lazy",title:"",srcSet:s.srcset,sizes:`(max-width: ${s.width}) 100vw, ${s.width}px`})}),e.jsxs("div",{className:"fullwidth-teaser-text",children:[e.jsxs("div",{className:"fullwidth-teaser-header",children:[e.jsx("div",{className:"fullwidth-teaser-title",children:e.jsx("h3",{children:s.title})}),e.jsxs("a",{href:s.link,target:"_blank","aria-label":"Link to read more of that page",className:"btn btn-primary triangle-outer-top-right d-none d-xl-block",children:["Read more ",e.jsx("svg",{className:"icon","aria-hidden":"true",children:e.jsx("use",{xlinkHref:"#icon-chevron-right"})})]})]}),e.jsx("div",{className:"fullwidth-teaser-content",children:e.jsx("p",{children:s.content})}),e.jsx("div",{className:"fullwidth-teaser-footer",children:e.jsx("a",{href:s.link,"aria-label":"Link to read more of that page",className:"btn btn-primary btn-block d-xl-none",children:"Read more"})})]})]})}),m=()=>e.jsx("div",{style:{display:"none"},children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("symbol",{id:"icon-chevron-left",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"m16.9 6.1-1.9-2L7.1 12l7.9 7.9 1.9-2L11 12z"})}),e.jsx("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"m7.1 17.9 1.9 2 7.9-7.9L9 4.1l-1.9 2L13 12z"})})]})}),g=()=>e.jsx("ol",{className:"carousel-indicators",children:t&&t.map((s,n)=>e.jsx("li",{"data-target":"#carouselNews","data-slide-to":n,onClick:()=>l(s.id),className:s.id===c?"active":""},`carInd${n}`))}),v=()=>e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"carousel-control carousel-control-prev",type:"button","data-slide":"prev","data-target":"#carouselNews",onClick:()=>u(),children:[e.jsx("svg",{className:"icon","aria-hidden":"true",children:e.jsx("use",{xlinkHref:"#icon-chevron-left"})}),e.jsx("span",{className:"sr-only",children:"Previous"})]}),e.jsxs("button",{className:"carousel-control carousel-control-next",type:"button","data-slide":"next","data-target":"#carouselNews",onClick:()=>h(),children:[e.jsx("svg",{className:"icon","aria-hidden":"true",children:e.jsx("use",{xlinkHref:"#icon-chevron-right"})}),e.jsx("span",{className:"sr-only",children:"Next"})]})]});function f(){return e.jsxs(e.Fragment,{children:[m(),e.jsx("div",{className:"container-full",children:e.jsxs("div",{id:"carouselNews",className:"carousel slide carousel-highlighted-news","data-ride":"carousel","data-interval":"6000",children:[e.jsx("div",{className:"carousel-inner",children:t&&t.map(s=>x(s))}),g(),v()]})})]})}return e.jsx(e.Fragment,{children:t&&c&&f()})}try{r.displayName="Carousel",r.__docgenInfo={description:"",displayName:"Carousel",props:{carouselItems:{defaultValue:null,description:"",name:"carouselItems",required:!0,type:{name:"CarouselItemProps[]"}}}}}catch{}const S={title:"Molecules/Carousel",component:r,tags:["docsPage"]},i={args:{carouselItems:[]}};i.args={carouselItems:[{id:1,width:1536,height:864,src:"https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-1536x864.jpg",srcset:"https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-1536x864.jpg 1536w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-300x169.jpg 300w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-1024x576.jpg 1024w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-768x432.jpg 768w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-384x216.jpg 384w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-1152x648.jpg 1152w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374.jpg 1920w",title:"ENAC School",link:"https://www.epfl.ch/schools/enac/",content:"School of Architecture, Civil and Environmental Engineering."},{id:2,width:1536,height:864,src:"https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-1536x864.jpg",srcset:"https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-1536x864.jpg 1536w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-300x169.jpg 300w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-1024x576.jpg 1024w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-768x432.jpg 768w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-384x216.jpg 384w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-1152x648.jpg 1152w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209.jpg 1920w",title:"SV School",link:"https://www.epfl.ch/schools/sv/",content:"School of Life Sciences"},{id:3,width:1536,height:864,src:"https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1536x864.jpg",srcset:"https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1536x864.jpg 1536w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-300x169.jpg 300w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1024x576.jpg 1024w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-768x432.jpg 768w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-384x216.jpg 384w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1152x648.jpg 1152w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209.jpg 1920w",title:"SB School",link:"https://www.epfl.ch/schools/sb/",content:"School of Basic Sciences"},{id:4,active:!0,width:1536,height:864,src:"https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1536x864.jpg",srcset:"https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1536x864.jpg 1536w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-300x169.jpg 300w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1024x576.jpg 1024w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-768x432.jpg 768w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-384x216.jpg 384w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1152x648.jpg 1152w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209.jpg 1920w",title:"STI School",link:"https://sti.epfl.ch",content:"School of Engineering"}]};var p,w,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    carouselItems: []
  }
}`,...(d=(w=i.parameters)==null?void 0:w.docs)==null?void 0:d.source}}};const N=["Default"];export{i as Default,N as __namedExportsOrder,S as default};