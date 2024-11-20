import{s as G,M,e as N,a as w,c as U,b as q,g as k,f as C,l as D,i as H,h as b,N as F,k as Z,n as R}from"../chunks/scheduler.BSglW4Eu.js";import{S as K,i as O,f as J,c as $,a as d,m as p,t as g,b as _,e as h}from"../chunks/index.B6nwG8t1.js";import{A as T,$ as y,a as Q,J as j}from"../chunks/Store.RfHT5Hq0.js";import{B as x,I as W}from"../chunks/Icon.D07Vr-nn.js";import"../chunks/UnderConstruction.svelte_svelte_type_style_lang.g0v0QcCt.js";import{a as z}from"../chunks/Input.BYPKJkNZ.js";import{L as ee}from"../chunks/Label.D6N4D-eB.js";import{U as te}from"../chunks/UnderConstruction.CCfBPiHj.js";import{R as ne}from"../chunks/RelaySelector.BaqIBIDG.js";function ae(i){let e,t;return e=new W({props:{icon:Q.Lock}}),{c(){$(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){p(e,n,r),t=!0},p:R,i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){h(e,n)}}}function re(i){let e,t;return e=new W({props:{icon:Q.CheckMark}}),{c(){$(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){p(e,n,r),t=!0},p:R,i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){h(e,n)}}}function se(i){let e,t,n,r,f,s,o,u,P,c,S,A,v,I;t=new te({}),r=new ee({props:{text:"CDN URL"}});function X(a){i[3](a)}let V={placeholder:i[2]("settings.network.cdn.namePlaceholder"),disabled:!0};i[1]!==void 0&&(V.value=i[1]),o=new z({props:V}),M.push(()=>J(o,"value",X));function Y(a){i[4](a)}let B={highlight:T.Success,placeholder:i[2]("settings.network.cdn.addressPlaceholder"),disabled:!0,$$slots:{default:[ae]},$$scope:{ctx:i}};return i[0]!==void 0&&(B.value=i[0]),c=new z({props:B}),M.push(()=>J(c,"value",Y)),v=new x({props:{appearance:T.Alt,text:i[2]("generic.save"),$$slots:{default:[re]},$$scope:{ctx:i}}}),{c(){e=N("div"),$(t.$$.fragment),n=w(),$(r.$$.fragment),f=w(),s=N("div"),$(o.$$.fragment),P=w(),$(c.$$.fragment),A=w(),$(v.$$.fragment),this.h()},l(a){e=U(a,"DIV",{id:!0,class:!0});var l=q(e);d(t.$$.fragment,l),n=k(l),d(r.$$.fragment,l),f=k(l),s=U(l,"DIV",{class:!0});var m=q(s);d(o.$$.fragment,m),P=k(m),d(c.$$.fragment,m),A=k(m),d(v.$$.fragment,m),m.forEach(C),l.forEach(C),this.h()},h(){D(s,"class","cdn-content svelte-q92vt"),D(e,"id","cdn-entry"),D(e,"class","svelte-q92vt")},m(a,l){H(a,e,l),p(t,e,null),b(e,n),p(r,e,null),b(e,f),b(e,s),p(o,s,null),b(s,P),p(c,s,null),b(s,A),p(v,s,null),I=!0},p(a,[l]){const m={};l&4&&(m.placeholder=a[2]("settings.network.cdn.namePlaceholder")),!u&&l&2&&(u=!0,m.value=a[1],F(()=>u=!1)),o.$set(m);const L={};l&4&&(L.placeholder=a[2]("settings.network.cdn.addressPlaceholder")),l&32&&(L.$$scope={dirty:l,ctx:a}),!S&&l&1&&(S=!0,L.value=a[0],F(()=>S=!1)),c.$set(L);const E={};l&4&&(E.text=a[2]("generic.save")),l&32&&(E.$$scope={dirty:l,ctx:a}),v.$set(E)},i(a){I||(g(t.$$.fragment,a),g(r.$$.fragment,a),g(o.$$.fragment,a),g(c.$$.fragment,a),g(v.$$.fragment,a),I=!0)},o(a){_(t.$$.fragment,a),_(r.$$.fragment,a),_(o.$$.fragment,a),_(c.$$.fragment,a),_(v.$$.fragment,a),I=!1},d(a){a&&C(e),h(t),h(r),h(o),h(c),h(v)}}}function ie(i,e,t){let n;Z(i,y,u=>t(2,n=u));let{address:r=j.address}=e,{name:f=j.name}=e;function s(u){f=u,t(1,f)}function o(u){r=u,t(0,r)}return i.$$set=u=>{"address"in u&&t(0,r=u.address),"name"in u&&t(1,f=u.name)},[r,f,n,s,o]}class oe extends K{constructor(e){super(),O(this,e,ie,se,G,{address:0,name:1})}}function le(i){let e,t,n,r,f;return t=new ne({}),r=new oe({}),{c(){e=N("div"),$(t.$$.fragment),n=w(),$(r.$$.fragment),this.h()},l(s){e=U(s,"DIV",{id:!0,class:!0});var o=q(e);d(t.$$.fragment,o),n=k(o),d(r.$$.fragment,o),o.forEach(C),this.h()},h(){D(e,"id","page"),D(e,"class","svelte-1m6g4am")},m(s,o){H(s,e,o),p(t,e,null),b(e,n),p(r,e,null),f=!0},p:R,i(s){f||(g(t.$$.fragment,s),g(r.$$.fragment,s),f=!0)},o(s){_(t.$$.fragment,s),_(r.$$.fragment,s),f=!1},d(s){s&&C(e),h(t),h(r)}}}class he extends K{constructor(e){super(),O(this,e,null,le,G,{})}}export{he as component};
