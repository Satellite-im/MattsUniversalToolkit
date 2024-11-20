import{s as W,e as E,c as z,b as H,f as h,l as d,i as v,H as X,q as Y,K as Z,u as y,a as M,g as P,h as x,n as ee,x as te,w as B,t as ne,d as ae,j as se}from"./scheduler.BSglW4Eu.js";import{S as oe,i as ie,t as u,g as j,d as K,b as _,c as C,a as R,m as S,e as w}from"./index.B6nwG8t1.js";import{e as N,T as le}from"./UnderConstruction.svelte_svelte_type_style_lang.g0v0QcCt.js";import{B as re,I as ce}from"./Icon.D07Vr-nn.js";import{R as k,b as p,U as $,f as fe,A as m}from"./Store.RfHT5Hq0.js";import{V as ue}from"./Role.svelte_svelte_type_style_lang.2JrFtOp6.js";function me(){return window.matchMedia("screen and (max-width: 800px)").matches}function T(a,t,o){const s=a.slice();return s[17]=t[o],s}function U(a){let t,o;return t=new le({props:{appearance:a[1]!==a[17].to?m.Default:m.Alt,$$slots:{default:[_e]},$$scope:{ctx:a}}}),{c(){C(t.$$.fragment)},l(s){R(t.$$.fragment,s)},m(s,r){S(t,s,r),o=!0},p(s,r){const e={};r&3&&(e.appearance=s[1]!==s[17].to?m.Default:m.Alt),r&1048577&&(e.$$scope={dirty:r,ctx:s}),t.$set(e)},i(s){o||(u(t.$$.fragment,s),o=!0)},o(s){_(t.$$.fragment,s),o=!1},d(s){w(t,s)}}}function _e(a){let t=a[17].name+"",o;return{c(){o=ne(t)},l(s){o=ae(s,t)},m(s,r){v(s,o,r)},p(s,r){r&1&&t!==(t=s[17].name+"")&&se(o,t)},d(s){s&&h(o)}}}function he(a){let t,o,s,r;t=new ce({props:{alt:a[1]===a[17].to,icon:a[17].icon}});let e=!a[2]&&U(a);return{c(){C(t.$$.fragment),o=M(),e&&e.c(),s=B()},l(c){R(t.$$.fragment,c),o=P(c),e&&e.l(c),s=B()},m(c,n){S(t,c,n),v(c,o,n),e&&e.m(c,n),v(c,s,n),r=!0},p(c,n){const i={};n&3&&(i.alt=c[1]===c[17].to),n&1&&(i.icon=c[17].icon),t.$set(i),c[2]?e&&(j(),_(e,1,1,()=>{e=null}),K()):e?(e.p(c,n),n&4&&u(e,1)):(e=U(c),e.c(),u(e,1),e.m(s.parentNode,s))},i(c){r||(u(t.$$.fragment,c),u(e),r=!0)},o(c){_(t.$$.fragment,c),_(e),r=!1},d(c){c&&(h(o),h(s)),w(t,c),e&&e.d(c)}}}function V(a){let t,o,s,r,e;function c(){return a[7](a[17])}return o=new re({props:{badge:a[4][a[17].to],fill:!a[2],tooltip:a[17].name,icon:a[2],outline:a[1]!==a[17].to&&!a[2],appearance:a[1]===a[17].to?m.Primary:m.Alt,$$slots:{default:[he]},$$scope:{ctx:a}}}),o.$on("click",c),{c(){t=E("div"),C(o.$$.fragment),s=M(),this.h()},l(n){t=z(n,"DIV",{class:!0});var i=H(t);R(o.$$.fragment,i),s=P(i),i.forEach(h),this.h()},h(){d(t,"class",r="navigation-control "+(a[2]?"":"fill")+" svelte-s28kn")},m(n,i){v(n,t,i),S(o,t,null),x(t,s),e=!0},p(n,i){a=n;const l={};i&17&&(l.badge=a[4][a[17].to]),i&4&&(l.fill=!a[2]),i&1&&(l.tooltip=a[17].name),i&4&&(l.icon=a[2]),i&7&&(l.outline=a[1]!==a[17].to&&!a[2]),i&3&&(l.appearance=a[1]===a[17].to?m.Primary:m.Alt),i&1048583&&(l.$$scope={dirty:i,ctx:a}),o.$set(l),(!e||i&4&&r!==(r="navigation-control "+(a[2]?"":"fill")+" svelte-s28kn"))&&d(t,"class",r)},i(n){e||(u(o.$$.fragment,n),e=!0)},o(n){_(o.$$.fragment,n),e=!1},d(n){n&&h(t),w(o)}}}function ge(a){let t,o,s,r=N(a[0]),e=[];for(let n=0;n<r.length;n+=1)e[n]=V(T(a,r,n));const c=n=>_(e[n],1,1,()=>{e[n]=null});return{c(){t=E("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=z(n,"DIV",{class:!0});var i=H(t);for(let l=0;l<e.length;l+=1)e[l].l(i);i.forEach(h),this.h()},h(){d(t,"class",o="navigation "+(a[3]?"vertical":"horizontal")+" "+(a[2]?"icons":"")+" svelte-s28kn")},m(n,i){v(n,t,i);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null);s=!0},p(n,[i]){if(i&87){r=N(n[0]);let l;for(l=0;l<r.length;l+=1){const g=T(n,r,l);e[l]?(e[l].p(g,i),u(e[l],1)):(e[l]=V(g),e[l].c(),u(e[l],1),e[l].m(t,null))}for(j(),l=r.length;l<e.length;l+=1)c(l);K()}(!s||i&12&&o!==(o="navigation "+(n[3]?"vertical":"horizontal")+" "+(n[2]?"icons":"")+" svelte-s28kn"))&&d(t,"class",o)},i(n){if(!s){for(let i=0;i<r.length;i+=1)u(e[i]);s=!0}},o(n){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)_(e[i]);s=!1},d(n){n&&h(t),X(e,n)}}}function pe(a,t,o){let s,r,e=ee,c=()=>(e(),e=te(s,f=>o(10,r=f)),s);a.$$.on_destroy.push(()=>e());let{routes:n=[]}=t,{activeRoute:i=k.Home}=t,{icons:l=!1}=t,{vertical:g=!1}=t,A=[],I=0,b={};const O=Y(),F=p.state.activeRequests.subscribe(f=>{A=p.inboundRequests(f),q()}),G=$.state.chats.subscribe(()=>{I=$.getTotalNotifications(),q()});function q(){o(4,b={});for(const f of n)o(4,b[f.to]=J(f.to),b)}function J(f){return f==="/friends"?A.length:f==="/chat"?I:0}function D(f){me()&&!L(f)&&$.state.sidebarOpen.set(!1),O("navigate",f.to.toString())}function L(f){if(f.to===k.Chat&&r.messaging.quick||f.to===k.Settings)return!0}Z(()=>{setTimeout(()=>{y(p.state.activeCall)&&p.setActiveCall(p.getCallingChat(ue.channel))},100),F(),G()});const Q=f=>D(f);return a.$$set=f=>{"routes"in f&&o(0,n=f.routes),"activeRoute"in f&&o(1,i=f.activeRoute),"icons"in f&&o(2,l=f.icons),"vertical"in f&&o(3,g=f.vertical)},c(o(5,s=fe.state)),[n,i,l,g,b,s,D,Q]}class Re extends oe{constructor(t){super(),ie(this,t,pe,ge,W,{routes:0,activeRoute:1,icons:2,vertical:3})}}export{Re as N,me as c};
