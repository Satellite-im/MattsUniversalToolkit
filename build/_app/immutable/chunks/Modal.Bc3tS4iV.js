import{s as j,e as b,c as p,b as C,f as v,l as k,i as E,p as q,q as F,v as G,K as H,y as J,z as w,a as N,g as O,h as V,L as P,A as D,B,C as I}from"./scheduler.BSglW4Eu.js";import{S as Q,i as R,g as S,b as g,d as A,t as m,c as T,a as U,m as W,e as X}from"./index.B6nwG8t1.js";import{C as Y}from"./Controls.DIHWDjS9.js";/* empty css                                            */const Z=a=>({}),z=a=>({});function x(a){let e,s,l,t,n,u,h,c=a[3]&&M(a);const d=a[9].default,f=w(d,a,a[11],null);return{c(){e=b("div"),c&&c.c(),s=N(),l=b("div"),f&&f.c(),this.h()},l(o){e=p(o,"DIV",{class:!0});var i=C(e);c&&c.l(i),s=O(i),l=p(i,"DIV",{class:!0});var _=C(l);f&&f.l(_),_.forEach(v),i.forEach(v),this.h()},h(){k(l,"class","content svelte-3ngkk9"),k(e,"class",t="body "+(a[2]?"padded":"")+" "+(a[5]?"large":"")+" "+a[6]+" svelte-3ngkk9")},m(o,i){E(o,e,i),c&&c.m(e,null),V(e,s),V(e,l),f&&f.m(l,null),n=!0,u||(h=q(e,"click",P(a[10])),u=!0)},p(o,i){o[3]?c?(c.p(o,i),i&8&&m(c,1)):(c=M(o),c.c(),m(c,1),c.m(e,s)):c&&(S(),g(c,1,1,()=>{c=null}),A()),f&&f.p&&(!n||i&2048)&&D(f,d,o,o[11],n?I(d,o[11],i,null):B(o[11]),null),(!n||i&100&&t!==(t="body "+(o[2]?"padded":"")+" "+(o[5]?"large":"")+" "+o[6]+" svelte-3ngkk9"))&&k(e,"class",t)},i(o){n||(m(c),m(f,o),n=!0)},o(o){g(c),g(f,o),n=!1},d(o){o&&v(e),c&&c.d(),f&&f.d(o),u=!1,h()}}}function $(a){let e,s;const l=a[9].default,t=w(l,a,a[11],null);return{c(){e=b("div"),t&&t.c(),this.h()},l(n){e=p(n,"DIV",{class:!0});var u=C(e);t&&t.l(u),u.forEach(v),this.h()},h(){k(e,"class","content svelte-3ngkk9")},m(n,u){E(n,e,u),t&&t.m(e,null),s=!0},p(n,u){t&&t.p&&(!s||u&2048)&&D(t,l,n,n[11],s?I(l,n[11],u,null):B(n[11]),null)},i(n){s||(m(t,n),s=!0)},o(n){g(t,n),s=!1},d(n){n&&v(e),t&&t.d(n)}}}function M(a){let e,s;return e=new Y({props:{$$slots:{default:[ee]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,t){W(e,l,t),s=!0},p(l,t){const n={};t&2048&&(n.$$scope={dirty:t,ctx:l}),e.$set(n)},i(l){s||(m(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){X(e,l)}}}function ee(a){let e;const s=a[9].controls,l=w(s,a,a[11],z);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&2048)&&D(l,s,t,t[11],e?I(s,t[11],n,Z):B(t[11]),z)},i(t){e||(m(l,t),e=!0)},o(t){g(l,t),e=!1},d(t){l&&l.d(t)}}}function le(a){let e,s,l,t,n,u,h;const c=[$,x],d=[];function f(o,i){return o[0]?0:1}return s=f(a),l=d[s]=c[s](a),{c(){e=b("div"),l.c(),this.h()},l(o){e=p(o,"DIV",{class:!0,"data-cy":!0});var i=C(e);l.l(i),i.forEach(v),this.h()},h(){k(e,"class",t="modal "+(a[1]?"":"blurred")+" svelte-3ngkk9"),k(e,"data-cy",a[4])},m(o,i){E(o,e,i),d[s].m(e,null),n=!0,u||(h=q(e,"click",a[7]),u=!0)},p(o,[i]){let _=s;s=f(o),s===_?d[s].p(o,i):(S(),g(d[_],1,1,()=>{d[_]=null}),A(),l=d[s],l?l.p(o,i):(l=d[s]=c[s](o),l.c()),m(l,1),l.m(e,null)),(!n||i&2&&t!==(t="modal "+(o[1]?"":"blurred")+" svelte-3ngkk9"))&&k(e,"class",t),(!n||i&16)&&k(e,"data-cy",o[4])},i(o){n||(m(l),n=!0)},o(o){g(l),n=!1},d(o){o&&v(e),d[s].d(),u=!1,h()}}}function te(a,e,s){let{$$slots:l={},$$scope:t}=e;const n=F();function u(r){n("close",r)}let{direct:h=!1}=e,{noBackground:c=!1}=e,{padded:d=!1}=e,{withControls:f=!1}=e,{hook:o=""}=e,{escape:i=!1}=e,{large:_=!1}=e,{class:L=""}=e,y;G(()=>{y=r=>{i&&r.code==="Escape"&&n("close")},document.addEventListener("keydown",y)}),H(()=>{document.removeEventListener("keydown",y)});function K(r){J.call(this,a,r)}return a.$$set=r=>{"direct"in r&&s(0,h=r.direct),"noBackground"in r&&s(1,c=r.noBackground),"padded"in r&&s(2,d=r.padded),"withControls"in r&&s(3,f=r.withControls),"hook"in r&&s(4,o=r.hook),"escape"in r&&s(8,i=r.escape),"large"in r&&s(5,_=r.large),"class"in r&&s(6,L=r.class),"$$scope"in r&&s(11,t=r.$$scope)},[h,c,d,f,o,_,L,u,i,l,K,t]}class ie extends Q{constructor(e){super(),R(this,e,te,le,j,{direct:0,noBackground:1,padded:2,withControls:3,hook:4,escape:8,large:5,class:6})}}export{ie as M};