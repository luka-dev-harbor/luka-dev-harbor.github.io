import{a6 as d,ah as v,ai as h,aj as p,a4 as u,h as f,l as o,c as E,af as i,f as T}from"./DuwZwfYy.js";function g(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=u;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&h)!==0,_=(t&p)!==0,n,c=!r.startsWith("<!>");return()=>{if(f)return a(o,null),o;n===void 0&&(n=g(c?r:"<!>"+r),e||(n=d(n)));var s=_||v?document.importNode(n,!0):n.cloneNode(!0);if(e){var m=d(s),l=s.lastChild;a(m,l)}else a(s,s);return s}}function M(r=""){if(!f){var t=i(r+"");return a(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),T(e)),a(e,e),e}function N(){if(f)return a(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=i();return r.append(t,e),a(t,e),r}function b(r,t){if(f){u.nodes_end=o,E();return}r!==null&&r.before(t)}export{b as a,M as b,N as c,a as d,y as t};
