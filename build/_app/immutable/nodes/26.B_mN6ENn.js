import{s as C,e as D,a as x,c as E,b as I,g as w,f as l,l as L,i as d,h as S,k as P,t as j,d as k,j as q}from"../chunks/scheduler.BSglW4Eu.js";import{S as V,i as z,c,a as f,m as p,t as u,b as _,e as g}from"../chunks/index.B6nwG8t1.js";import{$ as A}from"../chunks/Store.DyawPODi.js";import{T}from"../chunks/UnderConstruction.svelte_svelte_type_style_lang.I-gRjEpJ.js";import{L as B}from"../chunks/Label.DSFxF6Wa.js";function F(o){let t=o[0]("settings.realms.description1")+"",e;return{c(){e=j(t)},l(s){e=k(s,t)},m(s,a){d(s,e,a)},p(s,a){a&1&&t!==(t=s[0]("settings.realms.description1")+"")&&q(e,t)},d(s){s&&l(e)}}}function G(o){let t=o[0]("settings.realms.description2")+"",e;return{c(){e=j(t)},l(s){e=k(s,t)},m(s,a){d(s,e,a)},p(s,a){a&1&&t!==(t=s[0]("settings.realms.description2")+"")&&q(e,t)},d(s){s&&l(e)}}}function H(o){let t,e,s,a,$,i,m;return e=new B({props:{text:o[0]("settings.realms.name")}}),a=new T({props:{$$slots:{default:[F]},$$scope:{ctx:o}}}),i=new T({props:{$$slots:{default:[G]},$$scope:{ctx:o}}}),{c(){t=D("div"),c(e.$$.fragment),s=x(),c(a.$$.fragment),$=x(),c(i.$$.fragment),this.h()},l(n){t=E(n,"DIV",{id:!0,class:!0});var r=I(t);f(e.$$.fragment,r),s=w(r),f(a.$$.fragment,r),$=w(r),f(i.$$.fragment,r),r.forEach(l),this.h()},h(){L(t,"id","page"),L(t,"class","svelte-1m6g4am")},m(n,r){d(n,t,r),p(e,t,null),S(t,s),p(a,t,null),S(t,$),p(i,t,null),m=!0},p(n,[r]){const h={};r&1&&(h.text=n[0]("settings.realms.name")),e.$set(h);const v={};r&3&&(v.$$scope={dirty:r,ctx:n}),a.$set(v);const b={};r&3&&(b.$$scope={dirty:r,ctx:n}),i.$set(b)},i(n){m||(u(e.$$.fragment,n),u(a.$$.fragment,n),u(i.$$.fragment,n),m=!0)},o(n){_(e.$$.fragment,n),_(a.$$.fragment,n),_(i.$$.fragment,n),m=!1},d(n){n&&l(t),g(e),g(a),g(i)}}}function J(o,t,e){let s;return P(o,A,a=>e(0,s=a)),[s]}class R extends V{constructor(t){super(),z(this,t,J,H,C,{})}}export{R as component};
