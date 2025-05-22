import{a3 as _,a4 as F,g as M,a as k,r as h,u as $,_ as R,b as d,j as n,s as x,c as A,e as I,a5 as P,a6 as L,a7 as O,S as D,a8 as W,C as X,T as y,Y as G,G as w,B,w as K,a9 as Y,I as H,aa as Q,ab as V,W as q,ac as J}from"./index-D_jwRsN3.js";import{C as Z}from"./CardContent-CM8yl2Xm.js";import{C as tt}from"./Card-Bsx9elHH.js";function et(t,e=0,a=1){return F(t,e,a)}function st(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let a=t.match(e);return a&&a[0].length===1&&(a=a.map(s=>s+s)),a?`rgb${a.length===4?"a":""}(${a.map((s,o)=>o<3?parseInt(s,16):Math.round(parseInt(s,16)/255*1e3)/1e3).join(", ")})`:""}function z(t){if(t.type)return t;if(t.charAt(0)==="#")return z(st(t));const e=t.indexOf("("),a=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(a)===-1)throw new Error(_(9,t));let s=t.substring(e+1,t.length-1),o;if(a==="color"){if(s=s.split(" "),o=s.shift(),s.length===4&&s[3].charAt(0)==="/"&&(s[3]=s[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(_(10,o))}else s=s.split(",");return s=s.map(r=>parseFloat(r)),{type:a,values:s,colorSpace:o}}function at(t){const{type:e,colorSpace:a}=t;let{values:s}=t;return e.indexOf("rgb")!==-1?s=s.map((o,r)=>r<3?parseInt(o,10):o):e.indexOf("hsl")!==-1&&(s[1]=`${s[1]}%`,s[2]=`${s[2]}%`),e.indexOf("color")!==-1?s=`${a} ${s.join(" ")}`:s=`${s.join(", ")}`,`${e}(${s})`}function nt(t,e){return t=z(t),e=et(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,at(t)}function ot(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function it(t){return parseFloat(t)}function rt(t){return M("MuiCardActions",t)}k("MuiCardActions",["root","spacing"]);const lt=["disableSpacing","className"],ct=t=>{const{classes:e,disableSpacing:a}=t;return I({root:["root",!a&&"spacing"]},rt,e)},dt=x("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,!a.disableSpacing&&e.spacing]}})(({ownerState:t})=>d({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),pt=h.forwardRef(function(e,a){const s=$({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:r}=s,l=R(s,lt),c=d({},s,{disableSpacing:o}),m=ct(c);return n.jsx(dt,d({className:A(m.root,r),ownerState:c,ref:a},l))});function ht(t){return M("MuiCardMedia",t)}k("MuiCardMedia",["root","media","img"]);const ut=["children","className","component","image","src","style"],mt=t=>{const{classes:e,isMediaComponent:a,isImageComponent:s}=t;return I({root:["root",a&&"media",s&&"img"]},ht,e)},gt=x("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t,{isMediaComponent:s,isImageComponent:o}=a;return[e.root,s&&e.media,o&&e.img]}})(({ownerState:t})=>d({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),ft=["video","audio","picture","iframe","img"],xt=["picture","img"],Ct=h.forwardRef(function(e,a){const s=$({props:e,name:"MuiCardMedia"}),{children:o,className:r,component:l="div",image:c,src:m,style:g}=s,b=R(s,ut),p=ft.indexOf(l)!==-1,C=!p&&c?d({backgroundImage:`url("${c}")`},g):g,f=d({},s,{component:l,isMediaComponent:p,isImageComponent:xt.indexOf(l)!==-1}),i=mt(f);return n.jsx(gt,d({className:A(i.root,r),as:l,role:!p&&c?"img":void 0,ref:a,style:C,ownerState:f,src:p?c||m:void 0},b,{children:o}))});function bt(t){return M("MuiSkeleton",t)}k("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const vt=["animation","className","component","height","style","variant","width"];let j=t=>t,U,T,E,N;const yt=t=>{const{classes:e,variant:a,animation:s,hasChildren:o,width:r,height:l}=t;return I({root:["root",a,s,o&&"withChildren",o&&!r&&"fitContent",o&&!l&&"heightAuto"]},bt,e)},wt=L(U||(U=j`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),jt=L(T||(T=j`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),St=x("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=ot(t.shape.borderRadius)||"px",s=it(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:nt(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&P(E||(E=j`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),wt),({ownerState:t,theme:e})=>t.animation==="wave"&&P(N||(N=j`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),jt,(e.vars||e).palette.action.hover)),S=h.forwardRef(function(e,a){const s=$({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:l="span",height:c,style:m,variant:g="text",width:b}=s,p=R(s,vt),C=d({},s,{animation:o,component:l,variant:g,hasChildren:!!p.children}),f=yt(C);return n.jsx(St,d({as:l,ref:a,className:A(f.root,r),ownerState:C},p,{style:d({width:b,height:c},m)}))}),Mt=O(n.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward"),kt=O(n.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),$t=O(n.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),Rt=x(q)(({theme:t})=>({marginBottom:t.spacing(2),"& .MuiOutlinedInput-root":{borderRadius:20,height:"50px"}})),At=x(tt)(({theme:t})=>({display:"flex",flexDirection:"column",height:"100%",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{transform:"translateY(-5px)",boxShadow:t.shadows[8]}}));x(Ct)({paddingTop:"56.25%",backgroundSize:"cover",backgroundPosition:"center"});const It=x(J)(({theme:t})=>({margin:t.spacing(.5)})),Bt=()=>{const[t,e]=h.useState(""),[a,s]=h.useState([]),[o,r]=h.useState(!0),[l,c]=h.useState(!1),[m,g]=h.useState(""),b=D(),p=W(b.breakpoints.down("sm"));h.useEffect(()=>{(async()=>{try{const u=encodeURIComponent("https://cryptopanic.com/api/v1/posts/?auth_token=1243ae69f3bd4c7e66cb7355d9cf47e648fe6d5f&public=true"),{data:v}=await V.get(`https://api.allorigins.win/raw?url=${u}`);console.log(v.results),s(v.results)}catch(u){console.error("Error fetching blog posts:",u)}finally{r(!1)}})()},[]);const C=i=>{console.log(i),g(i),c(!0)},f=()=>{c(!1),g("")};return n.jsxs(X,{maxWidth:"lg",sx:{mt:4,mb:10},children:[n.jsx(y,{variant:"h2",gutterBottom:!0,fontFamily:"'Poppins', sans-serif",children:"Explore"}),n.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:n.jsx(Rt,{fullWidth:!0,variant:"outlined",placeholder:"Search blog posts...",value:t,onChange:i=>e(i.target.value),sx:{mb:5},InputProps:{startAdornment:n.jsx(G,{position:"start",children:n.jsx($t,{})})}})}),o||!a.length?n.jsx(w,{container:!0,spacing:4,children:Array.from(new Array(6)).map((i,u)=>n.jsxs(w,{item:!0,xs:12,sm:6,md:4,children:[n.jsx(S,{variant:"rectangular",width:"100%",height:80}),n.jsx(S,{width:"60%"}),n.jsx(S,{width:"80%"})]},u))}):n.jsx(w,{container:!0,spacing:4,children:a.filter(i=>i.title.toLowerCase().includes(t.toLowerCase())).map(i=>{var u;return n.jsx(w,{item:!0,xs:12,sm:6,md:4,children:n.jsxs(At,{children:[n.jsxs(Z,{children:[n.jsx(y,{gutterBottom:!0,variant:"h6",component:"div",children:i.title}),n.jsx(y,{variant:"body2",color:"text.secondary",children:i.domain}),n.jsxs(y,{variant:"caption",display:"block",sx:{mt:1},children:["Published on ",new Date(i.published_at).toLocaleDateString()]}),n.jsx(B,{sx:{mt:2},children:(u=i.currencies)==null?void 0:u.map(v=>n.jsx(It,{label:v.code,variant:"outlined",size:"small"},v.code))})]}),n.jsx(pt,{sx:{marginTop:"auto"},children:n.jsxs(K,{size:"small",onClick:()=>C(`https://${i.domain}/${i.slug}`),children:["Read More ",n.jsx(Mt,{sx:{fontSize:24}})]})})]})},i.id)})}),n.jsx(Y,{anchor:"bottom",open:l,onClose:f,onOpen:()=>{},disableSwipeToOpen:!0,children:n.jsxs(B,{sx:{position:"relative",height:p?"100vh":"80vh"},children:[n.jsx(H,{onClick:f,sx:{position:"absolute",right:8,top:8,color:i=>i.palette.grey[500]},children:n.jsx(kt,{})}),n.jsx("iframe",{src:m,title:"Blog Post",width:"100%",height:"100%",style:{border:"none"}})]})}),o&&n.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px"},children:n.jsx(Q,{})})]})};export{Bt as default};
//# sourceMappingURL=index-BA5Iz1NT.js.map
