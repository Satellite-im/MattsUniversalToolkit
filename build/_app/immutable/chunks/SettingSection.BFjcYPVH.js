import{s as A,z as B,e as S,a as I,c as p,b,g as V,f as w,l as d,i as j,h as q,A as y,B as F,C as G,t as H,d as J,j as K}from"./scheduler.BSglW4Eu.js";import{S as N,i as O,c as W,a as L,m as M,t as z,b as D,e as T}from"./index.B6nwG8t1.js";import{S as C}from"./Store.DbGLP55A.js";import{T as P}from"./UnderConstruction.svelte_svelte_type_style_lang.C_3ZjMzY.js";import{L as Q}from"./Label.BwZF9yqB.js";import"./Role.svelte_svelte_type_style_lang.CKLlw0pb.js";/* empty css                                               */import"./entry.BNO4FNMV.js";/* empty css                                            */function R(l){let e;return{c(){e=H(l[1])},l(a){e=J(a,l[1])},m(a,n){j(a,e,n)},p(a,n){n&2&&K(e,a[1])},d(a){a&&w(e)}}}function U(l){let e,a,n,f,v,r,g,m,u,_,s;f=new Q({props:{small:!0,text:l[0]}}),r=new P({props:{size:l[5]?C.Smaller:C.Medium,doubleLine:!0,$$slots:{default:[R]},$$scope:{ctx:l}}});const k=l[6].default,o=B(k,l,l[7],null);return{c(){e=S("div"),a=S("div"),n=S("div"),W(f.$$.fragment),v=I(),W(r.$$.fragment),g=I(),m=S("div"),o&&o.c(),this.h()},l(t){e=p(t,"DIV",{"data-cy":!0,class:!0});var i=b(e);a=p(i,"DIV",{class:!0});var h=b(a);n=p(h,"DIV",{class:!0});var c=b(n);L(f.$$.fragment,c),v=V(c),L(r.$$.fragment,c),c.forEach(w),g=V(h),m=p(h,"DIV",{class:!0});var E=b(m);o&&o.l(E),E.forEach(w),h.forEach(w),i.forEach(w),this.h()},h(){d(n,"class","description svelte-1iwdaqq"),d(m,"class",u="content "+(l[4]?"wrap":"")+" svelte-1iwdaqq"),d(a,"class","body svelte-1iwdaqq"),d(e,"data-cy",l[3]),d(e,"class",_="setting-section "+(l[2]?"full-width":"")+" svelte-1iwdaqq")},m(t,i){j(t,e,i),q(e,a),q(a,n),M(f,n,null),q(n,v),M(r,n,null),q(a,g),q(a,m),o&&o.m(m,null),s=!0},p(t,[i]){const h={};i&1&&(h.text=t[0]),f.$set(h);const c={};i&32&&(c.size=t[5]?C.Smaller:C.Medium),i&130&&(c.$$scope={dirty:i,ctx:t}),r.$set(c),o&&o.p&&(!s||i&128)&&y(o,k,t,t[7],s?G(k,t[7],i,null):F(t[7]),null),(!s||i&16&&u!==(u="content "+(t[4]?"wrap":"")+" svelte-1iwdaqq"))&&d(m,"class",u),(!s||i&8)&&d(e,"data-cy",t[3]),(!s||i&4&&_!==(_="setting-section "+(t[2]?"full-width":"")+" svelte-1iwdaqq"))&&d(e,"class",_)},i(t){s||(z(f.$$.fragment,t),z(r.$$.fragment,t),z(o,t),s=!0)},o(t){D(f.$$.fragment,t),D(r.$$.fragment,t),D(o,t),s=!1},d(t){t&&w(e),T(f),T(r),o&&o.d(t)}}}function X(l,e,a){let{$$slots:n={},$$scope:f}=e,{name:v="Setting"}=e,{description:r="Some setting description"}=e,{fullWidth:g=!1}=e,{hook:m=""}=e,{wrapContent:u=!1}=e,{small:_=!1}=e;return l.$$set=s=>{"name"in s&&a(0,v=s.name),"description"in s&&a(1,r=s.description),"fullWidth"in s&&a(2,g=s.fullWidth),"hook"in s&&a(3,m=s.hook),"wrapContent"in s&&a(4,u=s.wrapContent),"small"in s&&a(5,_=s.small),"$$scope"in s&&a(7,f=s.$$scope)},[v,r,g,m,u,_,n,f]}class ne extends N{constructor(e){super(),O(this,e,X,U,A,{name:0,description:1,fullWidth:2,hook:3,wrapContent:4,small:5})}}export{ne as S};
