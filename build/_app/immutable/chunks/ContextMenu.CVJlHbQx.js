import{s as ne,z as W,a as X,w as P,g as B,i as $,A as N,B as O,C as R,f as C,q as oe,e as se,c as le,b as ie,l as k,h as ae,O as re,p as ce,H as fe,r as ue,P as pe,M as _e}from"./scheduler.BSglW4Eu.js";import{S as me,i as de,t as d,g as V,b as h,d as G,c as J,a as K,m as Q,e as U}from"./index.B6nwG8t1.js";import{e as T}from"./UnderConstruction.svelte_svelte_type_style_lang.Bkqzs6yL.js";import{B as he,I as ge}from"./Icon.CJ8nfAHn.js";import{A as y,l as be}from"./Store.CAnDWkbN.js";import"./Role.svelte_svelte_type_style_lang.BMBp0CtF.js";function ke(e,t={enabled:!0}){let{enabled:i,eventType:c,nodeForEvent:n,options:o,capture:s}=A(t);function l(r){r.target&&e&&!e.contains(r.target)&&!r.defaultPrevented&&e.dispatchEvent(new CustomEvent("clickoutside",{detail:r}))}return t.enabled!==!1&&n.addEventListener(c,l,o),{update(r){n.removeEventListener(c,l,s),{enabled:i,eventType:c,nodeForEvent:n,options:o,capture:s}=A(r),i&&n.addEventListener(c,l,o)},destroy(){n.removeEventListener(c,l,s)}}}function A(e={}){var t,i,c,n,o;return{enabled:(t=e.enabled)!=null?t:!0,nodeForEvent:(c=(i=e.limit)==null?void 0:i.parent)!=null?c:document,eventType:(n=e.event)!=null?n:"click",options:e.options,capture:typeof e.options=="object"?(o=e.options)==null?void 0:o.capture:e.options}}function H(e,t,i){const c=e.slice();return c[14]=t[i],c}const ve=e=>({}),j=e=>({close:e[5]}),Ce=e=>({}),q=e=>({open:e[6]});function z(e){let t,i,c,n,o,s;const l=e[8].items,r=W(l,e,e[11],j);let m=T(e[0]),p=[];for(let a=0;a<m.length;a+=1)p[a]=S(H(e,m,a));const E=a=>h(p[a],1,1,()=>{p[a]=null});return{c(){t=se("div"),r&&r.c(),i=X();for(let a=0;a<p.length;a+=1)p[a].c();this.h()},l(a){t=le(a,"DIV",{id:!0,"data-cy":!0,style:!0,class:!0});var _=ie(t);r&&r.l(_),i=B(_);for(let u=0;u<p.length;u+=1)p[u].l(_);_.forEach(C),this.h()},h(){k(t,"id","context-menu"),k(t,"data-cy",e[1]),k(t,"style",c=`left: ${e[3][0]}px; top: ${e[3][1]}px;`),k(t,"class","svelte-mszlse")},m(a,_){$(a,t,_),r&&r.m(t,null),ae(t,i);for(let u=0;u<p.length;u+=1)p[u]&&p[u].m(t,null);e[10](t),n=!0,o||(s=[re(ke.call(null,t)),ce(t,"clickoutside",e[5])],o=!0)},p(a,_){if(r&&r.p&&(!n||_&2048)&&N(r,l,a,a[11],n?R(l,a[11],_,ve):O(a[11]),j),_&129){m=T(a[0]);let u;for(u=0;u<m.length;u+=1){const w=H(a,m,u);p[u]?(p[u].p(w,_),d(p[u],1)):(p[u]=S(w),p[u].c(),d(p[u],1),p[u].m(t,null))}for(V(),u=m.length;u<p.length;u+=1)E(u);G()}(!n||_&2)&&k(t,"data-cy",a[1]),(!n||_&8&&c!==(c=`left: ${a[3][0]}px; top: ${a[3][1]}px;`))&&k(t,"style",c)},i(a){if(!n){d(r,a);for(let _=0;_<m.length;_+=1)d(p[_]);n=!0}},o(a){h(r,a),p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)h(p[_]);n=!1},d(a){a&&C(t),r&&r.d(a),fe(p,a),e[10](null),o=!1,ue(s)}}}function Ee(e){let t,i,c;return t=new ge({props:{icon:e[14].icon}}),{c(){J(t.$$.fragment),i=X()},l(n){K(t.$$.fragment,n),i=B(n)},m(n,o){Q(t,n,o),$(n,i,o),c=!0},p(n,o){const s={};o&1&&(s.icon=n[14].icon),t.$set(s)},i(n){c||(d(t.$$.fragment,n),c=!0)},o(n){h(t.$$.fragment,n),c=!1},d(n){n&&C(i),U(t,n)}}}function S(e){let t,i;function c(...n){return e[9](e[14],...n)}return t=new he({props:{class:"item",appearance:e[14].appearance===y.Default?y.Transparent:e[14].appearance,disabled:e[14].disabled,text:e[14].text,$$slots:{default:[Ee]},$$scope:{ctx:e}}}),t.$on("click",c),{c(){J(t.$$.fragment)},l(n){K(t.$$.fragment,n)},m(n,o){Q(t,n,o),i=!0},p(n,o){e=n;const s={};o&1&&(s.appearance=e[14].appearance===y.Default?y.Transparent:e[14].appearance),o&1&&(s.disabled=e[14].disabled),o&1&&(s.text=e[14].text),o&2049&&(s.$$scope={dirty:o,ctx:e}),t.$set(s)},i(n){i||(d(t.$$.fragment,n),i=!0)},o(n){h(t.$$.fragment,n),i=!1},d(n){U(t,n)}}}function we(e){let t,i,c;const n=e[8].content,o=W(n,e,e[11],q);let s=e[2]&&z(e);return{c(){o&&o.c(),t=X(),s&&s.c(),i=P()},l(l){o&&o.l(l),t=B(l),s&&s.l(l),i=P()},m(l,r){o&&o.m(l,r),$(l,t,r),s&&s.m(l,r),$(l,i,r),c=!0},p(l,[r]){o&&o.p&&(!c||r&2048)&&N(o,n,l,l[11],c?R(n,l[11],r,Ce):O(l[11]),q),l[2]?s?(s.p(l,r),r&4&&d(s,1)):(s=z(l),s.c(),d(s,1),s.m(i.parentNode,i)):s&&(V(),h(s,1,1,()=>{s=null}),G())},i(l){c||(d(o,l),d(s),c=!0)},o(l){h(o,l),h(s),c=!1},d(l){l&&(C(t),C(i)),o&&o.d(l),s&&s.d(l)}}}let Y;function ye(e,t,i){let{$$slots:c={},$$scope:n}=t,o=!1,s=[0,0],l,{items:r=[]}=t,{hook:m=""}=t;const p=oe();function E(f){i(2,o=!1),p("close",f),Y=void 0}function a(f){if(l===void 0)return[f.clientX,f.clientY];const{width:g,height:b}=l.getBoundingClientRect();let D=f.pageX,v=f.pageY,F=f.view.innerWidth,I=f.view.innerHeight,x=F<g+D,ee=I<b+v,L=x?Math.max(5,F-g-5):Math.max(5,D);if(I-v<b+30){let M=v-b,te=Math.max(5,M);return[L,te]}else{let M=Math.max(5,ee?v-b:v);return[L,M]}}async function _(f){Y!==void 0&&Y(),Y=()=>i(2,o=!1),f.preventDefault(),i(2,o=!0),i(3,s=[f.clientX,f.clientY]),await pe(),i(3,s=a(f))}function u(f,g){f.stopPropagation(),be.info(`Clicked ${g.text}`),g.onClick();const b=new CustomEvent("customMouseEvent",{detail:f});E(b)}const w=(f,g)=>u(g,f);function Z(f){_e[f?"unshift":"push"](()=>{l=f,i(4,l)})}return e.$$set=f=>{"items"in f&&i(0,r=f.items),"hook"in f&&i(1,m=f.hook),"$$scope"in f&&i(11,n=f.$$scope)},[r,m,o,s,l,E,_,u,c,w,Z,n]}class Fe extends me{constructor(t){super(),de(this,t,ye,we,ne,{items:0,hook:1})}}export{Fe as C};
