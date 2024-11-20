import{s as T,w as M,i as y,f as u,k as x,v as X,K as Y,e as $,t as J,c as g,b as _,d as B,h as m,j as F,n as C,a as D,g as V,l as b,V as R,X as A}from"./scheduler.BSglW4Eu.js";import{S as W,i as j,t as h,b as S,g as ae,d as se,c as I,a as E,m as k,e as z}from"./index.B6nwG8t1.js";import{L as K}from"./Label.BwZF9yqB.js";import{I as Z}from"./Icon.B9q4q62V.js";import{$ as ee,a as te}from"./Store.DbGLP55A.js";import{w as G}from"./entry.BNO4FNMV.js";import"./Role.svelte_svelte_type_style_lang.CKLlw0pb.js";import{T as ne}from"./UnderConstruction.svelte_svelte_type_style_lang.C_3ZjMzY.js";function re(){const i=navigator.userAgent.toLowerCase(),e=i.indexOf("safari")!==-1&&i.indexOf("chrome")===-1,r=i.indexOf("firefox")!==-1;return!e&&!r}function le(i){let e,r=i[1]("settings.developer.browserNotSupportedError")+"",s;return{c(){e=$("div"),s=J(r)},l(t){e=g(t,"DIV",{});var a=_(e);s=B(a,r),a.forEach(u)},m(t,a){y(t,e,a),m(e,s)},p(t,a){a&2&&r!==(r=t[1]("settings.developer.browserNotSupportedError")+"")&&F(s,r)},i:C,o:C,d(t){t&&u(e)}}}function ie(i){let e,r,s,t,a,l=(i[0].level*100).toFixed()+"",c,n,o,f=i[0].charging&&Q();return{c(){e=$("div"),r=$("div"),s=$("div"),t=D(),f&&f.c(),a=D(),c=J(l),n=J("%"),this.h()},l(p){e=g(p,"DIV",{class:!0});var d=_(e);r=g(d,"DIV",{class:!0});var w=_(r);s=g(w,"DIV",{class:!0,style:!0}),_(s).forEach(u),w.forEach(u),t=V(d),f&&f.l(d),a=V(d),c=B(d,l),n=B(d,"%"),d.forEach(u),this.h()},h(){b(s,"class","battery-level svelte-zcib3n"),R(s,"width",i[0].level*100+"%"),A(s,"medium",i[0].level<=.5&&i[0].level>.2),A(s,"low",i[0].level<=.2),b(r,"class","battery-icon svelte-zcib3n"),b(e,"class","battery-indicator svelte-zcib3n")},m(p,d){y(p,e,d),m(e,r),m(r,s),m(e,t),f&&f.m(e,null),m(e,a),m(e,c),m(e,n),o=!0},p(p,d){(!o||d&1)&&R(s,"width",p[0].level*100+"%"),(!o||d&1)&&A(s,"medium",p[0].level<=.5&&p[0].level>.2),(!o||d&1)&&A(s,"low",p[0].level<=.2),p[0].charging?f?d&1&&h(f,1):(f=Q(),f.c(),h(f,1),f.m(e,a)):f&&(ae(),S(f,1,1,()=>{f=null}),se()),(!o||d&1)&&l!==(l=(p[0].level*100).toFixed()+"")&&F(c,l)},i(p){o||(h(f),o=!0)},o(p){S(f),o=!1},d(p){p&&u(e),f&&f.d()}}}function Q(i){let e,r,s;return r=new Z({props:{icon:te.LightningBolt}}),{c(){e=$("div"),I(r.$$.fragment),this.h()},l(t){e=g(t,"DIV",{class:!0});var a=_(e);E(r.$$.fragment,a),a.forEach(u),this.h()},h(){b(e,"class","charge-indicator svelte-zcib3n")},m(t,a){y(t,e,a),k(r,e,null),s=!0},i(t){s||(h(r.$$.fragment,t),s=!0)},o(t){S(r.$$.fragment,t),s=!1},d(t){t&&u(e),z(r)}}}function oe(i){let e,r,s,t;const a=[ie,le],l=[];function c(n,o){return n[3]?0:1}return e=c(i),r=l[e]=a[e](i),{c(){r.c(),s=M()},l(n){r.l(n),s=M()},m(n,o){l[e].m(n,o),y(n,s,o),t=!0},p(n,[o]){r.p(n,o)},i(n){t||(h(r),t=!0)},o(n){S(r),t=!1},d(n){n&&u(s),l[e].d(n)}}}function ce(i,e,r){let s,t;x(i,ee,n=>r(1,t=n));const a=G({charging:!1,level:0});x(i,a,n=>r(0,s=n));let l=re(),c;return X(()=>{async function n(){const o=await navigator.getBattery();a.set({charging:o.charging,level:o.level}),c=()=>{a.set({charging:o.charging,level:o.level})},o.addEventListener("chargingchange",c),o.addEventListener("levelchange",c)}n()}),Y(()=>{c&&navigator.getBattery().then(n=>{n.removeEventListener("chargingchange",c),n.removeEventListener("levelchange",c)})}),[s,t,a,l]}class fe extends W{constructor(e){super(),j(this,e,ce,oe,T,{})}}function ue(i){let e=i[0].cores+"",r,s;return{c(){r=J(e),s=J(" core")},l(t){r=B(t,e),s=B(t," core")},m(t,a){y(t,r,a),y(t,s,a)},p(t,a){a&1&&e!==(e=t[0].cores+"")&&F(r,e)},d(t){t&&(u(r),u(s))}}}function de(i){let e,r,s,t,a;return r=new Z({props:{icon:te.CPU}}),t=new ne({props:{$$slots:{default:[ue]},$$scope:{ctx:i}}}),{c(){e=$("div"),I(r.$$.fragment),s=D(),I(t.$$.fragment),this.h()},l(l){e=g(l,"DIV",{class:!0});var c=_(e);E(r.$$.fragment,c),s=V(c),E(t.$$.fragment,c),c.forEach(u),this.h()},h(){b(e,"class","cpu-indicator svelte-cbri4w")},m(l,c){y(l,e,c),k(r,e,null),m(e,s),k(t,e,null),a=!0},p(l,[c]){const n={};c&5&&(n.$$scope={dirty:c,ctx:l}),t.$set(n)},i(l){a||(h(r.$$.fragment,l),h(t.$$.fragment,l),a=!0)},o(l){S(r.$$.fragment,l),S(t.$$.fragment,l),a=!1},d(l){l&&u(e),z(r),z(t)}}}function me(i,e,r){let s;const t=G({cores:0});return x(i,t,a=>r(0,s=a)),X(()=>{function a(){const l=navigator.hardwareConcurrency;t.set({cores:l})}a()}),[s,t]}class ve extends W{constructor(e){super(),j(this,e,me,de,T,{})}}function pe(i){let e,r=i[1]("settings.developer.browserNotSupportedError")+"",s;return{c(){e=$("div"),s=J(r)},l(t){e=g(t,"DIV",{});var a=_(e);s=B(a,r),a.forEach(u)},m(t,a){y(t,e,a),m(e,s)},p(t,a){a&2&&r!==(r=t[1]("settings.developer.browserNotSupportedError")+"")&&F(s,r)},d(t){t&&u(e)}}}function $e(i){let e,r,s,t,a=(i[0].usedJSHeapSize/i[0].totalJSHeapSize*100).toFixed(0)+"",l,c;return{c(){e=$("div"),r=$("div"),s=$("div"),t=D(),l=J(a),c=J("%"),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=_(e);r=g(o,"DIV",{class:!0});var f=_(r);s=g(f,"DIV",{class:!0,style:!0}),_(s).forEach(u),f.forEach(u),t=V(o),l=B(o,a),c=B(o,"%"),o.forEach(u),this.h()},h(){b(s,"class","memory-level svelte-1a62bdy"),R(s,"width",i[0].usedJSHeapSize/i[0].totalJSHeapSize*100+"%"),b(r,"class","memory-bar svelte-1a62bdy"),b(e,"class","memory-indicator svelte-1a62bdy")},m(n,o){y(n,e,o),m(e,r),m(r,s),m(e,t),m(e,l),m(e,c)},p(n,o){o&1&&R(s,"width",n[0].usedJSHeapSize/n[0].totalJSHeapSize*100+"%"),o&1&&a!==(a=(n[0].usedJSHeapSize/n[0].totalJSHeapSize*100).toFixed(0)+"")&&F(l,a)},d(n){n&&u(e)}}}function ge(i){let e;function r(a,l){return a[3]?$e:pe}let t=r(i)(i);return{c(){t.c(),e=M()},l(a){t.l(a),e=M()},m(a,l){t.m(a,l),y(a,e,l)},p(a,[l]){t.p(a,l)},i:C,o:C,d(a){a&&u(e),t.d(a)}}}function _e(i,e,r){let s,t;x(i,ee,n=>r(1,t=n));const a=G({usedJSHeapSize:0,totalJSHeapSize:0});x(i,a,n=>r(0,s=n));let l=re(),c;return X(()=>{function n(){const o=performance.memory;o&&a.set({usedJSHeapSize:o.usedJSHeapSize,totalJSHeapSize:o.totalJSHeapSize})}n(),c=setInterval(n,1e4)}),Y(()=>{clearInterval(c)}),[s,t,a,l]}class he extends W{constructor(e){super(),j(this,e,_e,ge,T,{})}}function be(i){let e,r,s,t,a,l,c,n,o,f,p,d,w,q,L,U;return s=new K({props:{text:"Battery"}}),a=new fe({}),n=new K({props:{text:"Ram"}}),f=new he({}),w=new K({props:{text:"CPU"}}),L=new ve({}),{c(){e=$("div"),r=$("div"),I(s.$$.fragment),t=D(),I(a.$$.fragment),l=D(),c=$("div"),I(n.$$.fragment),o=D(),I(f.$$.fragment),p=D(),d=$("div"),I(w.$$.fragment),q=D(),I(L.$$.fragment),this.h()},l(v){e=g(v,"DIV",{id:!0,class:!0});var H=_(e);r=g(H,"DIV",{class:!0});var N=_(r);E(s.$$.fragment,N),t=V(N),E(a.$$.fragment,N),N.forEach(u),l=V(H),c=g(H,"DIV",{class:!0});var P=_(c);E(n.$$.fragment,P),o=V(P),E(f.$$.fragment,P),P.forEach(u),p=V(H),d=g(H,"DIV",{class:!0});var O=_(d);E(w.$$.fragment,O),q=V(O),E(L.$$.fragment,O),O.forEach(u),H.forEach(u),this.h()},h(){b(r,"class","item svelte-1crf59b"),b(c,"class","item svelte-1crf59b"),b(d,"class","item svelte-1crf59b"),b(e,"id","widget-bar"),b(e,"class","svelte-1crf59b")},m(v,H){y(v,e,H),m(e,r),k(s,r,null),m(r,t),k(a,r,null),m(e,l),m(e,c),k(n,c,null),m(c,o),k(f,c,null),m(e,p),m(e,d),k(w,d,null),m(d,q),k(L,d,null),U=!0},p:C,i(v){U||(h(s.$$.fragment,v),h(a.$$.fragment,v),h(n.$$.fragment,v),h(f.$$.fragment,v),h(w.$$.fragment,v),h(L.$$.fragment,v),U=!0)},o(v){S(s.$$.fragment,v),S(a.$$.fragment,v),S(n.$$.fragment,v),S(f.$$.fragment,v),S(w.$$.fragment,v),S(L.$$.fragment,v),U=!1},d(v){v&&u(e),z(s),z(a),z(n),z(f),z(w),z(L)}}}class Ve extends W{constructor(e){super(),j(this,e,null,be,T,{})}}export{Ve as W};
