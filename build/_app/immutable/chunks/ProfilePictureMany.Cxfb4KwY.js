import{s as H,e as I,a as j,c as A,b as D,g as E,f as $,l as q,i as w,h as v,p as U,H as F,q as G,w as M,t as J,d as K,j as L}from"./scheduler.BSglW4Eu.js";import{S as N,i as O,c as z,a as k,m as b,t as p,g as Q,d as R,b as d,e as P}from"./index.B6nwG8t1.js";import{e as T,T as W}from"./UnderConstruction.svelte_svelte_type_style_lang.I-gRjEpJ.js";import{I as X}from"./Icon.EcdZYkvz.js";import{a as Y,S as h,A as Z}from"./Store.DyawPODi.js";import{P as x}from"./ProfilePicture.DrJHYzgi.js";import"./Role.svelte_svelte_type_style_lang.DzgCKyOi.js";function V(i,t,s){const e=i.slice();return e[6]=t[s],e[8]=s,e}function ee(i){let t,s;return t=new x({props:{id:i[6].key,size:i[2](i[8]),image:i[6].profile.photo.image,status:i[6].profile.status,noIndicator:!0}}),{c(){z(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){b(t,e,r),s=!0},p(e,r){const c={};r&1&&(c.id=e[6].key),r&1&&(c.image=e[6].profile.photo.image),r&1&&(c.status=e[6].profile.status),t.$set(c)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){d(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function B(i){let t,s,e=i[8]<3&&ee(i);return{c(){e&&e.c(),t=M()},l(r){e&&e.l(r),t=M()},m(r,c){e&&e.m(r,c),w(r,t,c),s=!0},p(r,c){r[8]<3&&e.p(r,c)},i(r){s||(p(e),s=!0)},o(r){d(e),s=!1},d(r){r&&$(t),e&&e.d(r)}}}function te(i){let t=i[0].length+"",s;return{c(){s=J(t)},l(e){s=K(e,t)},m(e,r){w(e,s,r)},p(e,r){r&1&&t!==(t=e[0].length+"")&&L(s,t)},d(e){e&&$(s)}}}function re(i){let t,s,e,r,c,m,g,S,f,_=T(i[0]),l=[];for(let a=0;a<_.length;a+=1)l[a]=B(V(i,_,a));const C=a=>d(l[a],1,1,()=>{l[a]=null});return r=new X({props:{icon:Y.Users,size:h.Smaller,alt:!0}}),m=new W({props:{size:h.Smaller,appearance:Z.Alt,$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){t=I("div");for(let a=0;a<l.length;a+=1)l[a].c();s=j(),e=I("div"),z(r.$$.fragment),c=j(),z(m.$$.fragment),this.h()},l(a){t=A(a,"DIV",{class:!0});var n=D(t);for(let o=0;o<l.length;o+=1)l[o].l(n);s=E(n),e=A(n,"DIV",{class:!0});var u=D(e);k(r.$$.fragment,u),c=E(u),k(m.$$.fragment,u),u.forEach($),n.forEach($),this.h()},h(){q(e,"class","count svelte-jrc41v"),q(t,"class","profile-picture-many svelte-jrc41v")},m(a,n){w(a,t,n);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(t,null);v(t,s),v(t,e),b(r,e,null),v(e,c),b(m,e,null),g=!0,S||(f=U(t,"click",i[5]),S=!0)},p(a,[n]){if(n&5){_=T(a[0]);let o;for(o=0;o<_.length;o+=1){const y=V(a,_,o);l[o]?(l[o].p(y,n),p(l[o],1)):(l[o]=B(y),l[o].c(),p(l[o],1),l[o].m(t,s))}for(Q(),o=_.length;o<l.length;o+=1)C(o);R()}const u={};n&513&&(u.$$scope={dirty:n,ctx:a}),m.$set(u)},i(a){if(!g){for(let n=0;n<_.length;n+=1)p(l[n]);p(r.$$.fragment,a),p(m.$$.fragment,a),g=!0}},o(a){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)d(l[n]);d(r.$$.fragment,a),d(m.$$.fragment,a),g=!1},d(a){a&&$(t),F(l,a),P(r),P(m),S=!1,f()}}}function ae(i,t,s){let{users:e}=t,{size:r=h.Medium}=t,{forceSize:c=!1}=t;const m=G();function g(f){if(c)return r;switch(f){case 0:return h.Small;case 1:return h.Smaller;case 2:return h.Smallest;default:return h.Smallest}}const S=f=>m("click");return i.$$set=f=>{"users"in f&&s(0,e=f.users),"size"in f&&s(3,r=f.size),"forceSize"in f&&s(4,c=f.forceSize)},[e,m,g,r,c,S]}class ue extends N{constructor(t){super(),O(this,t,ae,re,H,{users:0,size:3,forceSize:4})}}export{ue as P};
