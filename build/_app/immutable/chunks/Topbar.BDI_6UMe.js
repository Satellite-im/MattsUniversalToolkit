import{s as x,z as I,e as A,a as v,c as B,b as L,g as w,f as $,l as k,i as h,h as E,A as D,B as O,C as V,D as ee,u as te,n as R,w as M,E as se,p as U,r as le}from"./scheduler.BSglW4Eu.js";import{S as oe,i as ne,t as p,g as N,b as d,d as j,c as S,a as T,m as y,e as C}from"./index.B6nwG8t1.js";import{B as W,I as X}from"./Icon.B9q4q62V.js";import"./UnderConstruction.svelte_svelte_type_style_lang.C_3ZjMzY.js";import{U as H,A as Y,a as Z}from"./Store.DbGLP55A.js";import{C as re}from"./Controls.DZQCSvRX.js";import{c as ie}from"./Navigation.BaAKPbEC.js";import"./Role.svelte_svelte_type_style_lang.CKLlw0pb.js";const fe=o=>({}),z=o=>({}),ae=o=>({}),F=o=>({}),ce=o=>({}),G=o=>({}),_e=o=>({}),J=o=>({});function K(o){let e,l;return e=new W({props:{class:"sidebar-toggle-ext",icon:!0,appearance:Y.Alt,$$slots:{default:[ue]},$$scope:{ctx:o}}}),e.$on("click",o[6]),{c(){S(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){y(e,t,s),l=!0},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function ue(o){let e,l;return e=new X({props:{icon:Z.Sidebar}}),{c(){S(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){y(e,t,s),l=!0},p:R,i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function P(o){let e,l,t,s;const r=[pe,me],i=[];function _(n,u){return ie()?0:1}return e=_(),l=i[e]=r[e](o),{c(){l.c(),t=M()},l(n){l.l(n),t=M()},m(n,u){i[e].m(n,u),h(n,t,u),s=!0},p(n,u){l.p(n,u)},i(n){s||(p(l),s=!0)},o(n){d(l),s=!1},d(n){n&&$(t),i[e].d(n)}}}function me(o){let e,l;return e=new re({props:{$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){y(e,t,s),l=!0},p(t,s){const r={};s&2048&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function pe(o){let e,l,t,s;e=new W({props:{appearance:Y.Alt,icon:!0,$$slots:{default:[ge]},$$scope:{ctx:o}}}),e.$on("click",o[7]);let r=o[2]&&Q(o);return{c(){S(e.$$.fragment),l=v(),r&&r.c(),t=M()},l(i){T(e.$$.fragment,i),l=w(i),r&&r.l(i),t=M()},m(i,_){y(e,i,_),h(i,l,_),r&&r.m(i,_),h(i,t,_),s=!0},p(i,_){const n={};_&2048&&(n.$$scope={dirty:_,ctx:i}),e.$set(n),i[2]?r?(r.p(i,_),_&4&&p(r,1)):(r=Q(i),r.c(),p(r,1),r.m(t.parentNode,t)):r&&(N(),d(r,1,1,()=>{r=null}),j())},i(i){s||(p(e.$$.fragment,i),p(r),s=!0)},o(i){d(e.$$.fragment,i),d(r),s=!1},d(i){i&&($(l),$(t)),C(e,i),r&&r.d(i)}}}function de(o){let e;const l=o[5].controls,t=I(l,o,o[11],z);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&2048)&&D(t,l,s,s[11],e?V(l,s[11],r,fe):O(s[11]),z)},i(s){e||(p(t,s),e=!0)},o(s){d(t,s),e=!1},d(s){t&&t.d(s)}}}function ge(o){let e,l;return e=new X({props:{icon:Z.VerticalEllipsis}}),{c(){S(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){y(e,t,s),l=!0},p:R,i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function Q(o){let e,l="",t,s,r,i,_;const n=o[5].controls,u=I(n,o,o[11],F);return{c(){e=A("button"),e.innerHTML=l,t=v(),s=A("div"),u&&u.c(),this.h()},l(f){e=B(f,"BUTTON",{class:!0,"data-svelte-h":!0}),se(e)!=="svelte-igsj6"&&(e.innerHTML=l),t=w(f),s=B(f,"DIV",{class:!0,role:!0,tabindex:!0});var g=L(s);u&&u.l(g),g.forEach($),this.h()},h(){k(e,"class","dropdown-mask svelte-12ykfg6"),k(s,"class","controls-dropdown svelte-12ykfg6"),k(s,"role","button"),k(s,"tabindex","0")},m(f,g){h(f,e,g),h(f,t,g),h(f,s,g),u&&u.m(s,null),r=!0,i||(_=[U(e,"click",o[8]),U(s,"click",o[9]),U(s,"keydown",o[10])],i=!0)},p(f,g){u&&u.p&&(!r||g&2048)&&D(u,n,f,f[11],r?V(n,f[11],g,ae):O(f[11]),F)},i(f){r||(p(u,f),r=!0)},o(f){d(u,f),r=!1},d(f){f&&($(e),$(t),$(s)),u&&u.d(f),i=!1,le(_)}}}function be(o){let e,l,t,s,r,i,_,n=!o[3]&&!o[1]&&K(o);const u=o[5].before,f=I(u,o,o[11],J),g=o[5].content,b=I(g,o,o[11],G);let m=o[4].controls&&P(o);return{c(){e=A("div"),n&&n.c(),l=v(),f&&f.c(),t=v(),s=A("div"),b&&b.c(),r=v(),m&&m.c(),this.h()},l(c){e=B(c,"DIV",{class:!0});var a=L(e);n&&n.l(a),l=w(a),f&&f.l(a),t=w(a),s=B(a,"DIV",{class:!0});var q=L(s);b&&b.l(q),q.forEach($),r=w(a),m&&m.l(a),a.forEach($),this.h()},h(){k(s,"class","content svelte-12ykfg6"),k(e,"class",i="topbar "+(o[0]?"simple":"")+" svelte-12ykfg6")},m(c,a){h(c,e,a),n&&n.m(e,null),E(e,l),f&&f.m(e,null),E(e,t),E(e,s),b&&b.m(s,null),E(e,r),m&&m.m(e,null),_=!0},p(c,[a]){!c[3]&&!c[1]?n?a&10&&p(n,1):(n=K(c),n.c(),p(n,1),n.m(e,l)):n&&(N(),d(n,1,1,()=>{n=null}),j()),f&&f.p&&(!_||a&2048)&&D(f,u,c,c[11],_?V(u,c[11],a,_e):O(c[11]),J),b&&b.p&&(!_||a&2048)&&D(b,g,c,c[11],_?V(g,c[11],a,ce):O(c[11]),G),c[4].controls?m?(m.p(c,a),a&16&&p(m,1)):(m=P(c),m.c(),p(m,1),m.m(e,null)):m&&(N(),d(m,1,1,()=>{m=null}),j()),(!_||a&1&&i!==(i="topbar "+(c[0]?"simple":"")+" svelte-12ykfg6"))&&k(e,"class",i)},i(c){_||(p(n),p(f,c),p(b,c),p(m),_=!0)},o(c){d(n),d(f,c),d(b,c),d(m),_=!1},d(c){c&&$(e),n&&n.d(),f&&f.d(c),b&&b.d(c),m&&m.d()}}}function $e(o,e,l){let{$$slots:t={},$$scope:s}=e;const r=ee(t);let{simple:i=!1}=e,{hideSidebarToggle:_=!1}=e,n=!1,u=te(H.state.sidebarOpen);H.state.sidebarOpen.subscribe(a=>l(3,u=a));const f=()=>H.toggleSidebar(),g=a=>{l(2,n=!n)},b=a=>{l(2,n=!1)},m=a=>{l(2,n=!1)},c=a=>{(a.key==="Enter"||a.key===" ")&&l(2,n=!1)};return o.$$set=a=>{"simple"in a&&l(0,i=a.simple),"hideSidebarToggle"in a&&l(1,_=a.hideSidebarToggle),"$$scope"in a&&l(11,s=a.$$scope)},[i,_,n,u,r,t,f,g,b,m,c,s]}class Ee extends oe{constructor(e){super(),ne(this,e,$e,be,x,{simple:0,hideSidebarToggle:1})}}export{Ee as T};
