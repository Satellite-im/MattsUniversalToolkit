import{s as E,e as r,a as v,c as f,b as S,g as w,f as m,l as u,i as A,h as b,p as k,n as _,r as L,q as N,x as O}from"./scheduler.BSglW4Eu.js";import{S as P,i as T}from"./index.B6nwG8t1.js";import{f as B,h as C,j as p}from"./Store.DyawPODi.js";import{d as D}from"./entry.BC8qPVFY.js";import"./UnderConstruction.svelte_svelte_type_style_lang.I-gRjEpJ.js";function I(n){let s,e,o,c,d,h,i;return{c(){s=r("label"),e=r("input"),o=v(),c=r("span"),this.h()},l(l){s=f(l,"LABEL",{class:!0});var a=S(s);e=f(a,"INPUT",{"data-cy":!0,type:!0,class:!0}),o=w(a),c=f(a,"SPAN",{class:!0}),S(c).forEach(m),a.forEach(m),this.h()},h(){u(e,"data-cy",n[2]),e.disabled=n[3],u(e,"type","checkbox"),u(e,"class","svelte-10elmjq"),u(c,"class","slider svelte-10elmjq"),u(s,"class",d="switch "+(n[1]?"small":"")+" svelte-10elmjq")},m(l,a){A(l,s,a),b(s,e),e.checked=n[0],b(s,o),b(s,c),h||(i=[k(e,"change",n[6]),k(e,"change",n[5])],h=!0)},p(l,[a]){a&4&&u(e,"data-cy",l[2]),a&8&&(e.disabled=l[3]),a&1&&(e.checked=l[0]),a&2&&d!==(d="switch "+(l[1]?"small":"")+" svelte-10elmjq")&&u(s,"class",d)},i:_,o:_,d(l){l&&m(s),h=!1,L(i)}}}function U(n,s,e){let o,c,d=_,h=()=>(d(),d=O(o,t=>e(7,c=t)),o);n.$$.on_destroy.push(()=>d());let{on:i=!1}=s,{small:l=!1}=s,{hook:a=""}=s,{disabled:g=!1}=s;const q=N();function y(t){c&&C(i?p.On:p.Off),q("toggle",i)}function j(){i=this.checked,e(0,i)}return n.$$set=t=>{"on"in t&&e(0,i=t.on),"small"in t&&e(1,l=t.small),"hook"in t&&e(2,a=t.hook),"disabled"in t&&e(3,g=t.disabled)},h(e(4,o=D(B.state,t=>t.audio.interfaceSounds))),[i,l,a,g,o,y,j]}class K extends P{constructor(s){super(),T(this,s,U,I,E,{on:0,small:1,hook:2,disabled:3})}}export{K as S};
