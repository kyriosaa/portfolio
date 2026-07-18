import{d as n,r as i,u as c,n as l,j as e,w as u,L as d,T as m,C as x,c as f}from"./contact-CVbIY4aS.js";const p=n.main`
  ${({theme:t})=>t.mixins.flexCenter};
  flex-direction: column;
`,h=n.h1`
  color: var(--yellow);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`,j=n.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`,g=n.a`
  ${({theme:t})=>t.mixins.bigButton};
  margin-top: 40px;
`,y=()=>{const[t,r]=i.useState(!1),o=c();i.useEffect(()=>{if(o)return;const a=setTimeout(()=>r(!0),l);return()=>clearTimeout(a)},[]);const s=e.jsxs(p,{className:"fillHeight",children:[e.jsx(h,{children:"404"}),e.jsx(j,{children:"Page Not Found"}),e.jsx(g,{href:u("/"),children:"Go Home"})]});return e.jsx(d,{children:o?e.jsx(e.Fragment,{children:s}):e.jsx(m,{component:null,children:t&&e.jsx(x,{timeout:500,classNames:"fadeup",children:s})})})};f.createRoot(document.getElementById("app")).render(e.jsx(y,{}));
