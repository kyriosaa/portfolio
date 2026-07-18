import{d as v,r as t,u as y,s as l,a as d,j as e,L as w,p as f,I as g,c as N}from"./contact-CVbIY4aS.js";const k=v.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            ${({theme:a})=>a.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`,z=()=>{const a=t.useRef(null),o=t.useRef(null),h=t.useRef([]),u=y();return t.useEffect(()=>{u||(l.reveal(a.current,d()),l.reveal(o.current,d(200,0)),h.current.forEach((s,i)=>l.reveal(s,d(i*10))))},[]),e.jsx(w,{children:e.jsxs("main",{children:[e.jsxs("header",{ref:a,children:[e.jsx("h1",{className:"big-heading",children:"Archive"}),e.jsx("p",{className:"subtitle",children:"A list of my projects"})]}),e.jsx(k,{ref:o,children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),e.jsx("th",{children:"Title"}),e.jsx("th",{className:"hide-on-mobile",children:"Made for"}),e.jsx("th",{className:"hide-on-mobile",children:"Using"}),e.jsx("th",{children:"Link"})]})}),e.jsx("tbody",{children:f.length>0&&f.map((s,i)=>{const{date:j,github:c,external:x,title:b,tech:r,company:p}=s.frontmatter;return e.jsxs("tr",{ref:n=>h.current[i]=n,children:[e.jsx("td",{className:"overline year",children:`${new Date(j).getFullYear()}`}),e.jsx("td",{className:"title",children:b}),e.jsx("td",{className:"company hide-on-mobile",children:p?e.jsx("span",{children:p}):e.jsx("span",{children:"Personal"})}),e.jsx("td",{className:"tech hide-on-mobile",children:(r==null?void 0:r.length)>0&&r.map((n,m)=>e.jsxs("span",{children:[n,"",m!==r.length-1&&e.jsx("span",{className:"separator",children:"·"})]},m))}),e.jsx("td",{className:"links",children:e.jsxs("div",{children:[c&&e.jsx("a",{href:c,"aria-label":"GitHub Link",children:e.jsx(g,{name:"GitHub"})}),x&&e.jsx("a",{href:x,"aria-label":"External Link",children:e.jsx(g,{name:"External"})})]})})]},i)})})]})})]})})};N.createRoot(document.getElementById("app")).render(e.jsx(z,{}));
