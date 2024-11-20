import{s as C,e as P,a as q,c as v,b as D,g as E,f as $,l as d,i as V,h as X,z as A,A as w,B,C as z,n as j}from"./scheduler.BSglW4Eu.js";import{S as F,i as G,c as m,a as _,m as p,t as f,g as H,b as i,d as J,e as g}from"./index.B6nwG8t1.js";import{B as I,I as K}from"./Icon.D07Vr-nn.js";import"./UnderConstruction.svelte_svelte_type_style_lang.g0v0QcCt.js";import{A as M,a as L}from"./Store.RfHT5Hq0.js";import{M as N}from"./Modal.Bc3tS4iV.js";import"./Role.svelte_svelte_type_style_lang.2JrFtOp6.js";const O=s=>({}),k=s=>({});function b(s){let t,a;return t=new N({props:{padded:!0,class:s[4],$$slots:{controls:[T],default:[Q]},$$scope:{ctx:s}}}),t.$on("close",s[5]),{c(){m(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,o){p(t,e,o),a=!0},p(e,o){const n={};o&16&&(n.class=e[4]),o&136&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){i(t.$$.fragment,e),a=!1},d(e){g(t,e)}}}function Q(s){let t;const a=s[6].default,e=A(a,s,s[7],null);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,n){e&&e.m(o,n),t=!0},p(o,n){e&&e.p&&(!t||n&128)&&w(e,a,o,o[7],t?z(a,o[7],n,null):B(o[7]),null)},i(o){t||(f(e,o),t=!0)},o(o){i(e,o),t=!1},d(o){e&&e.d(o)}}}function R(s){let t,a;return t=new K({props:{icon:L.XMark}}),{c(){m(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,o){p(t,e,o),a=!0},p:j,i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){i(t.$$.fragment,e),a=!1},d(e){g(t,e)}}}function T(s){let t,a;return t=new I({props:{icon:!0,small:!0,appearance:M.Alt,color:s[3],$$slots:{default:[R]},$$scope:{ctx:s}}}),t.$on("click",s[5]),{c(){m(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,o){p(t,e,o),a=!0},p(e,o){const n={};o&8&&(n.color=e[3]),o&128&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){i(t.$$.fragment,e),a=!1},d(e){g(t,e)}}}function U(s){let t;const a=s[6].icon,e=A(a,s,s[7],k);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,n){e&&e.m(o,n),t=!0},p(o,n){e&&e.p&&(!t||n&128)&&w(e,a,o,o[7],t?z(a,o[7],n,O):B(o[7]),k)},i(o){t||(f(e,o),t=!0)},o(o){i(e,o),t=!1},d(o){e&&e.d(o)}}}function W(s){let t,a,e,o,n=s[0]&&b(s);return e=new I({props:{icon:!0,outline:!0,appearance:M.Alt,class:"control",tooltip:s[1],color:s[3],$$slots:{default:[U]},$$scope:{ctx:s}}}),e.$on("click",s[5]),{c(){t=P("div"),n&&n.c(),a=q(),m(e.$$.fragment),this.h()},l(l){t=v(l,"DIV",{class:!0,"data-cy":!0});var r=D(t);n&&n.l(r),a=E(r),_(e.$$.fragment,r),r.forEach($),this.h()},h(){d(t,"class","popup svelte-1gvpbkx"),d(t,"data-cy",s[2])},m(l,r){V(l,t,r),n&&n.m(t,null),X(t,a),p(e,t,null),o=!0},p(l,[r]){l[0]?n?(n.p(l,r),r&1&&f(n,1)):(n=b(l),n.c(),f(n,1),n.m(t,a)):n&&(H(),i(n,1,1,()=>{n=null}),J());const u={};r&2&&(u.tooltip=l[1]),r&8&&(u.color=l[3]),r&128&&(u.$$scope={dirty:r,ctx:l}),e.$set(u),(!o||r&4)&&d(t,"data-cy",l[2])},i(l){o||(f(n),f(e.$$.fragment,l),o=!0)},o(l){i(n),i(e.$$.fragment,l),o=!1},d(l){l&&$(t),n&&n.d(),g(e)}}}function Y(s,t,a){let{$$slots:e={},$$scope:o}=t,{open:n=!1}=t,{name:l="name"}=t,{hook:r=""}=t,{color:u=""}=t;function S(){a(0,n=!n)}let{class:h=""}=t;return s.$$set=c=>{"open"in c&&a(0,n=c.open),"name"in c&&a(1,l=c.name),"hook"in c&&a(2,r=c.hook),"color"in c&&a(3,u=c.color),"class"in c&&a(4,h=c.class),"$$scope"in c&&a(7,o=c.$$scope)},s.$$.update=()=>{s.$$.dirty&8},[n,l,r,u,h,S,e,o]}class ae extends F{constructor(t){super(),G(this,t,Y,W,C,{open:0,name:1,hook:2,color:3,class:4})}}export{ae as P};