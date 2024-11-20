import{s as Ae,w as Ce,i as A,f as S,k as At,u as Ft,q as ct,z as Nt,e as B,a as w,c as V,b as G,g as k,l as v,h as m,A as qt,B as Rt,C as Wt,F as jt,n as N,o as x,t as ge,d as pe,j as Gt,V as St,p as Kt,x as Tt,W as It}from"./scheduler.BSglW4Eu.js";import{S as Ge,i as Le,t as i,g as Fe,b as o,d as Ne,c as g,a as h,m as p,j as Mt,e as _}from"./index.B6nwG8t1.js";import{M as Ut}from"./Modal.Dh40hkGI.js";import{$ as Lt,b as Dt,a as y,A as F,E as qe,U as Ot}from"./Store.DyawPODi.js";import{T as me,L as Yt}from"./UnderConstruction.svelte_svelte_type_style_lang.I-gRjEpJ.js";import{I as ee,B as te}from"./Icon.EcdZYkvz.js";import{a as Ht}from"./Input.Do4MtEcs.js";import{a as Et,s as Bt}from"./animations.BV5fPHvH.js";import{L as q}from"./Label.DSFxF6Wa.js";import{C as ze}from"./Controls.DoUXP_k0.js";import{d as ce}from"./cdn.GG39r2F5.js";function Vt(s){let e,r,t,n,l,u,f;t=new Ht({props:{alt:!0,placeholder:s[1]("generic.search_placeholder"),$$slots:{default:[Jt]},$$scope:{ctx:s}}});const a=s[3].default,$=Nt(a,s,s[4],null);return{c(){e=B("div"),r=B("div"),g(t.$$.fragment),n=w(),l=B("div"),$&&$.c(),this.h()},l(d){e=V(d,"DIV",{class:!0});var b=G(e);r=V(b,"DIV",{class:!0});var M=G(r);h(t.$$.fragment,M),M.forEach(S),n=k(b),l=V(b,"DIV",{class:!0});var z=G(l);$&&$.l(z),z.forEach(S),b.forEach(S),this.h()},h(){v(r,"class","sidebar-pre svelte-168un6b"),v(l,"class","sidebar-content svelte-168un6b"),v(e,"class","sidebar svelte-168un6b")},m(d,b){A(d,e,b),m(e,r),p(t,r,null),m(e,n),m(e,l),$&&$.m(l,null),f=!0},p(d,b){const M={};b&2&&(M.placeholder=d[1]("generic.search_placeholder")),b&16&&(M.$$scope={dirty:b,ctx:d}),t.$set(M),$&&$.p&&(!f||b&16)&&qt($,a,d,d[4],f?Wt(a,d[4],b,null):Rt(d[4]),null)},i(d){f||(i(t.$$.fragment,d),i($,d),d&&jt(()=>{f&&(u||(u=Mt(e,Bt,{duration:Et,axis:"x"},!0)),u.run(1))}),f=!0)},o(d){o(t.$$.fragment,d),o($,d),d&&(u||(u=Mt(e,Bt,{duration:Et,axis:"x"},!1)),u.run(0)),f=!1},d(d){d&&S(e),_(t),$&&$.d(d),d&&u&&u.end()}}}function Jt(s){let e,r;return e=new ee({props:{icon:y.Search}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Qt(s){let e,r,t=s[0]&&Vt(s);return{c(){t&&t.c(),e=Ce()},l(n){t&&t.l(n),e=Ce()},m(n,l){t&&t.m(n,l),A(n,e,l),r=!0},p(n,[l]){n[0]?t?(t.p(n,l),l&1&&i(t,1)):(t=Vt(n),t.c(),i(t,1),t.m(e.parentNode,e)):t&&(Fe(),o(t,1,1,()=>{t=null}),Ne())},i(n){r||(i(t),r=!0)},o(n){o(t),r=!1},d(n){n&&S(e),t&&t.d(n)}}}function Xt(s,e,r){let t;At(s,Lt,a=>r(1,t=a));let{$$slots:n={},$$scope:l}=e,{open:u=!0}=e,{activeCall:f=Ft(Dt.state.activeCall)}=e;return ct(),Dt.state.activeCall.subscribe(a=>r(2,f=a)),s.$$set=a=>{"open"in a&&r(0,u=a.open),"activeCall"in a&&r(2,f=a.activeCall),"$$scope"in a&&r(4,l=a.$$scope)},[u,t,f,n,l]}class Zt extends Ge{constructor(e){super(),Le(this,e,Xt,Qt,Ae,{open:0,activeCall:2})}}function xt(s){let e,r;return e=new ee({props:{icon:y.Plus}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function yt(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function er(s){let e,r,t,n;return e=new te({props:{appearance:F.Alt,text:"Wishlist",$$slots:{default:[xt]},$$scope:{ctx:s}}}),t=new te({props:{appearance:F.Primary,text:"Purchase Bundle",$$slots:{default:[yt]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment),r=w(),g(t.$$.fragment)},l(l){h(e.$$.fragment,l),r=k(l),h(t.$$.fragment,l)},m(l,u){p(e,l,u),A(l,r,u),p(t,l,u),n=!0},p(l,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:l}),e.$set(f);const a={};u&2&&(a.$$scope={dirty:u,ctx:l}),t.$set(a)},i(l){n||(i(e.$$.fragment,l),i(t.$$.fragment,l),n=!0)},o(l){o(e.$$.fragment,l),o(t.$$.fragment,l),n=!1},d(l){l&&S(r),_(e,l),_(t,l)}}}function tr(s){let e,r,t,n,l,u,f;return u=new ze({props:{$$slots:{default:[er]},$$scope:{ctx:s}}}),{c(){e=B("div"),r=B("img"),l=w(),g(u.$$.fragment),this.h()},l(a){e=V(a,"DIV",{class:!0});var $=G(e);r=V($,"IMG",{src:!0,alt:!0}),l=k($),h(u.$$.fragment,$),$.forEach(S),this.h()},h(){x(r.src,t=s[0].image)||v(r,"src",t),v(r,"alt",n=s[0].name),v(e,"class","bundle svelte-1gsf1ll")},m(a,$){A(a,e,$),m(e,r),m(e,l),p(u,e,null),f=!0},p(a,[$]){(!f||$&1&&!x(r.src,t=a[0].image))&&v(r,"src",t),(!f||$&1&&n!==(n=a[0].name))&&v(r,"alt",n);const d={};$&2&&(d.$$scope={dirty:$,ctx:a}),u.$set(d)},i(a){f||(i(u.$$.fragment,a),f=!0)},o(a){o(u.$$.fragment,a),f=!1},d(a){a&&S(e),_(u)}}}function rr(s,e,r){let{bundle:t={name:"Kitsune",image:"/assets/market/kitsune/kitsune-bundle.png",description:"",price:0,frames:[],overlays:[],themes:[],fonts:[],titles:[],trinkets:[]}}=e;return s.$$set=n=>{"bundle"in n&&r(0,t=n.bundle)},[t]}class nr extends Ge{constructor(e){super(),Le(this,e,rr,tr,Ae,{bundle:0})}}function ar(s){let e,r,t,n,l,u,f=!s[5]&&Pt();return{c(){f&&f.c(),e=w(),r=B("img"),this.h()},l(a){f&&f.l(a),e=k(a),r=V(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){x(r.src,t=s[1])||v(r,"src",t),v(r,"alt",""),v(r,"class","preview svelte-ebb8ml"),St(r,"display",s[5]?"block":"none")},m(a,$){f&&f.m(a,$),A(a,e,$),A(a,r,$),n=!0,l||(u=Kt(r,"load",s[7]),l=!0)},p(a,$){a[5]?f&&(Fe(),o(f,1,1,()=>{f=null}),Ne()):f?$&32&&i(f,1):(f=Pt(),f.c(),i(f,1),f.m(e.parentNode,e)),(!n||$&2&&!x(r.src,t=a[1]))&&v(r,"src",t),$&32&&St(r,"display",a[5]?"block":"none")},i(a){n||(i(f),n=!0)},o(a){o(f),n=!1},d(a){a&&(S(e),S(r)),f&&f.d(a),l=!1,u()}}}function sr(s){let e,r;return{c(){e=B("img"),this.h()},l(t){e=V(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){x(e.src,r="/assets/frames/empty.png")||v(e,"src",r),v(e,"alt",""),v(e,"class","preview svelte-ebb8ml")},m(t,n){A(t,e,n)},p:N,i:N,o:N,d(t){t&&S(e)}}}function Pt(s){let e,r;return e=new Yt({}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function lr(s){let e;return{c(){e=ge(s[0])},l(r){e=pe(r,s[0])},m(r,t){A(r,e,t)},p(r,t){t&1&&Gt(e,r[0])},d(r){r&&S(e)}}}function $r(s){let e;return{c(){e=ge(s[2])},l(r){e=pe(r,s[2])},m(r,t){A(r,e,t)},p(r,t){t&4&&Gt(e,r[2])},d(r){r&&S(e)}}}function fr(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function ur(s){let e,r,t,n,l,u,f,a,$,d;const b=[sr,ar],M=[];function z(D,I){return D[3]?0:1}return r=z(s),t=M[r]=b[r](s),l=new me({props:{$$slots:{default:[lr]},$$scope:{ctx:s}}}),f=new me({props:{muted:!0,$$slots:{default:[$r]},$$scope:{ctx:s}}}),$=new te({props:{text:"Purchase",fill:!0,appearance:F.Primary,$$slots:{default:[fr]},$$scope:{ctx:s}}}),$.$on("click",s[8]),{c(){e=B("div"),t.c(),n=w(),g(l.$$.fragment),u=w(),g(f.$$.fragment),a=w(),g($.$$.fragment),this.h()},l(D){e=V(D,"DIV",{"data-cy":!0,class:!0});var I=G(e);t.l(I),n=k(I),h(l.$$.fragment,I),u=k(I),h(f.$$.fragment,I),a=k(I),h($.$$.fragment,I),I.forEach(S),this.h()},h(){v(e,"data-cy",s[4]),v(e,"class","market-item svelte-ebb8ml")},m(D,I){A(D,e,I),M[r].m(e,null),m(e,n),p(l,e,null),m(e,u),p(f,e,null),m(e,a),p($,e,null),d=!0},p(D,[I]){let L=r;r=z(D),r===L?M[r].p(D,I):(Fe(),o(M[L],1,1,()=>{M[L]=null}),Ne(),t=M[r],t?t.p(D,I):(t=M[r]=b[r](D),t.c()),i(t,1),t.m(e,n));const P={};I&513&&(P.$$scope={dirty:I,ctx:D}),l.$set(P);const C={};I&516&&(C.$$scope={dirty:I,ctx:D}),f.$set(C);const R={};I&512&&(R.$$scope={dirty:I,ctx:D}),$.$set(R),(!d||I&16)&&v(e,"data-cy",D[4])},i(D){d||(i(t),i(l.$$.fragment,D),i(f.$$.fragment,D),i($.$$.fragment,D),d=!0)},o(D){o(t),o(l.$$.fragment,D),o(f.$$.fragment,D),o($.$$.fragment,D),d=!1},d(D){D&&S(e),M[r].d(),_(l),_(f),_($)}}}function ir(s,e,r){let{name:t=""}=e,{preview:n=""}=e,{kind:l=qe.Item}=e,{empty:u=!1}=e,{hook:f=""}=e;const a=ct();let $=!1;function d(){r(5,$=!0)}const b=()=>{a("apply")};return s.$$set=M=>{"name"in M&&r(0,t=M.name),"preview"in M&&r(1,n=M.preview),"kind"in M&&r(2,l=M.kind),"empty"in M&&r(3,u=M.empty),"hook"in M&&r(4,f=M.hook)},[t,n,l,u,f,$,a,d,b]}class We extends Ge{constructor(e){super(),Le(this,e,ir,ur,Ae,{name:0,preview:1,kind:2,empty:3,hook:4})}}function or(s){let e,r,t,n,l,u,f,a,$,d,b,M,z,D,I,L;return r=new q({props:{text:"Active Bundle"}}),n=new nr({}),u=new q({props:{text:"Your Weekly Items"}}),$=new We({props:{name:ce.frames.Moonlight[1].name,kind:qe.Frame,preview:`${je}${ce.frames.Moonlight[1].image}`}}),b=new We({props:{name:ce.frames.Moonlight[2].name,kind:qe.Frame,preview:`${je}${ce.frames.Moonlight[2].image}`}}),z=new We({props:{name:ce.frames.Moonlight[3].name,kind:qe.Frame,preview:`${je}${ce.frames.Moonlight[3].image}`}}),I=new We({props:{name:ce.frames.Moonlight[4].name,kind:qe.Frame,preview:`${je}${ce.frames.Moonlight[4].image}`}}),{c(){e=B("div"),g(r.$$.fragment),t=w(),g(n.$$.fragment),l=w(),g(u.$$.fragment),f=w(),a=B("div"),g($.$$.fragment),d=w(),g(b.$$.fragment),M=w(),g(z.$$.fragment),D=w(),g(I.$$.fragment),this.h()},l(P){e=V(P,"DIV",{class:!0});var C=G(e);h(r.$$.fragment,C),t=k(C),h(n.$$.fragment,C),l=k(C),h(u.$$.fragment,C),f=k(C),a=V(C,"DIV",{class:!0});var R=G(a);h($.$$.fragment,R),d=k(R),h(b.$$.fragment,R),M=k(R),h(z.$$.fragment,R),D=k(R),h(I.$$.fragment,R),R.forEach(S),C.forEach(S),this.h()},h(){v(a,"class","weekly-items svelte-10rb333"),v(e,"class","landing svelte-10rb333")},m(P,C){A(P,e,C),p(r,e,null),m(e,t),p(n,e,null),m(e,l),p(u,e,null),m(e,f),m(e,a),p($,a,null),m(a,d),p(b,a,null),m(a,M),p(z,a,null),m(a,D),p(I,a,null),L=!0},p:N,i(P){L||(i(r.$$.fragment,P),i(n.$$.fragment,P),i(u.$$.fragment,P),i($.$$.fragment,P),i(b.$$.fragment,P),i(z.$$.fragment,P),i(I.$$.fragment,P),L=!0)},o(P){o(r.$$.fragment,P),o(n.$$.fragment,P),o(u.$$.fragment,P),o($.$$.fragment,P),o(b.$$.fragment,P),o(z.$$.fragment,P),o(I.$$.fragment,P),L=!1},d(P){P&&S(e),_(r),_(n),_(u),_($),_(b),_(z),_(I)}}}const je="https://cdn.deepspaceshipping.co";class cr extends Ge{constructor(e){super(),Le(this,e,null,or,Ae,{})}}function mr(s){let e;return{c(){e=ge("+0 Bonus Starlight")},l(r){e=pe(r,"+0 Bonus Starlight")},m(r,t){A(r,e,t)},d(r){r&&S(e)}}}function gr(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function pr(s){let e,r;return e=new te({props:{appearance:F.Primary,text:"5,000",fill:!0,$$slots:{default:[gr]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const l={};n&1&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function _r(s){let e;return{c(){e=ge("+500 Bonus Starlight")},l(r){e=pe(r,"+500 Bonus Starlight")},m(r,t){A(r,e,t)},d(r){r&&S(e)}}}function hr(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function dr(s){let e,r;return e=new te({props:{appearance:F.Primary,text:"10,500",fill:!0,$$slots:{default:[hr]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const l={};n&1&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function vr(s){let e;return{c(){e=ge("+2,500 Bonus Starlight")},l(r){e=pe(r,"+2,500 Bonus Starlight")},m(r,t){A(r,e,t)},d(r){r&&S(e)}}}function br(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function wr(s){let e,r;return e=new te({props:{appearance:F.Primary,text:"27,500",fill:!0,$$slots:{default:[br]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const l={};n&1&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function kr(s){let e;return{c(){e=ge("+7,500 Bonus Starlight")},l(r){e=pe(r,"+7,500 Bonus Starlight")},m(r,t){A(r,e,t)},d(r){r&&S(e)}}}function Sr(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Ir(s){let e,r;return e=new te({props:{appearance:F.Primary,text:"57,500",fill:!0,$$slots:{default:[Sr]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const l={};n&1&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Mr(s){let e;return{c(){e=ge("+15,000 Bonus Starlight")},l(r){e=pe(r,"+15,000 Bonus Starlight")},m(r,t){A(r,e,t)},d(r){r&&S(e)}}}function Dr(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Er(s){let e,r;return e=new te({props:{appearance:F.Primary,text:"90,000",fill:!0,$$slots:{default:[Dr]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const l={};n&1&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Br(s){let e;return{c(){e=ge("+20,000 Bonus Starlight")},l(r){e=pe(r,"+20,000 Bonus Starlight")},m(r,t){A(r,e,t)},d(r){r&&S(e)}}}function Vr(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Pr(s){let e,r;return e=new te({props:{appearance:F.Primary,text:"120,000",fill:!0,$$slots:{default:[Vr]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const l={};n&1&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function zr(s){let e,r,t,n,l,u,f,a,$,d,b,M,z,D,I,L,P,C,R,j,_e,Ke,he,mt,Te,de,Ue,re,Oe,ne,Ye,K,ve,He,be,gt,Je,we,Qe,ae,Xe,se,Ze,T,ke,xe,Se,pt,ye,Ie,et,le,tt,$e,rt,U,Me,nt,De,_t,at,Ee,st,fe,lt,ue,$t,O,Be,ft,Ve,ht,ut,Pe,it,ie,ot,oe,Re;return l=new q({props:{text:"Active Bundle"}}),$=new q({props:{text:"$4.99"}}),D=new q({props:{text:"5,000 Starlight"}}),L=new me({props:{$$slots:{default:[mr]},$$scope:{ctx:s}}}),C=new ze({props:{$$slots:{default:[pr]},$$scope:{ctx:s}}}),_e=new q({props:{text:"$9.99"}}),de=new q({props:{text:"10,500 Starlight"}}),re=new me({props:{$$slots:{default:[_r]},$$scope:{ctx:s}}}),ne=new ze({props:{$$slots:{default:[dr]},$$scope:{ctx:s}}}),ve=new q({props:{text:"$24.99"}}),we=new q({props:{text:"27,500 Starlight"}}),ae=new me({props:{$$slots:{default:[vr]},$$scope:{ctx:s}}}),se=new ze({props:{$$slots:{default:[wr]},$$scope:{ctx:s}}}),ke=new q({props:{text:"$49.99"}}),Ie=new q({props:{text:"57,500 Starlight"}}),le=new me({props:{$$slots:{default:[kr]},$$scope:{ctx:s}}}),$e=new ze({props:{$$slots:{default:[Ir]},$$scope:{ctx:s}}}),Me=new q({props:{text:"$74.99"}}),Ee=new q({props:{text:"90,000 Starlight"}}),fe=new me({props:{$$slots:{default:[Mr]},$$scope:{ctx:s}}}),ue=new ze({props:{$$slots:{default:[Er]},$$scope:{ctx:s}}}),Be=new q({props:{text:"$99.99"}}),Pe=new q({props:{text:"120,000 Starlight"}}),ie=new me({props:{$$slots:{default:[Br]},$$scope:{ctx:s}}}),oe=new ze({props:{$$slots:{default:[Pr]},$$scope:{ctx:s}}}),{c(){e=B("div"),r=B("img"),n=w(),g(l.$$.fragment),u=w(),f=B("div"),a=B("div"),g($.$$.fragment),d=w(),b=B("img"),z=w(),g(D.$$.fragment),I=w(),g(L.$$.fragment),P=w(),g(C.$$.fragment),R=w(),j=B("div"),g(_e.$$.fragment),Ke=w(),he=B("img"),Te=w(),g(de.$$.fragment),Ue=w(),g(re.$$.fragment),Oe=w(),g(ne.$$.fragment),Ye=w(),K=B("div"),g(ve.$$.fragment),He=w(),be=B("img"),Je=w(),g(we.$$.fragment),Qe=w(),g(ae.$$.fragment),Xe=w(),g(se.$$.fragment),Ze=w(),T=B("div"),g(ke.$$.fragment),xe=w(),Se=B("img"),ye=w(),g(Ie.$$.fragment),et=w(),g(le.$$.fragment),tt=w(),g($e.$$.fragment),rt=w(),U=B("div"),g(Me.$$.fragment),nt=w(),De=B("img"),at=w(),g(Ee.$$.fragment),st=w(),g(fe.$$.fragment),lt=w(),g(ue.$$.fragment),$t=w(),O=B("div"),g(Be.$$.fragment),ft=w(),Ve=B("img"),ut=w(),g(Pe.$$.fragment),it=w(),g(ie.$$.fragment),ot=w(),g(oe.$$.fragment),this.h()},l(c){e=V(c,"DIV",{class:!0});var E=G(e);r=V(E,"IMG",{class:!0,src:!0,alt:!0}),n=k(E),h(l.$$.fragment,E),u=k(E),f=V(E,"DIV",{class:!0});var W=G(f);a=V(W,"DIV",{class:!0});var Y=G(a);h($.$$.fragment,Y),d=k(Y),b=V(Y,"IMG",{src:!0,alt:!0,class:!0}),z=k(Y),h(D.$$.fragment,Y),I=k(Y),h(L.$$.fragment,Y),P=k(Y),h(C.$$.fragment,Y),Y.forEach(S),R=k(W),j=V(W,"DIV",{class:!0});var H=G(j);h(_e.$$.fragment,H),Ke=k(H),he=V(H,"IMG",{src:!0,alt:!0,class:!0}),Te=k(H),h(de.$$.fragment,H),Ue=k(H),h(re.$$.fragment,H),Oe=k(H),h(ne.$$.fragment,H),H.forEach(S),Ye=k(W),K=V(W,"DIV",{class:!0});var J=G(K);h(ve.$$.fragment,J),He=k(J),be=V(J,"IMG",{src:!0,alt:!0,class:!0}),Je=k(J),h(we.$$.fragment,J),Qe=k(J),h(ae.$$.fragment,J),Xe=k(J),h(se.$$.fragment,J),J.forEach(S),Ze=k(W),T=V(W,"DIV",{class:!0});var Q=G(T);h(ke.$$.fragment,Q),xe=k(Q),Se=V(Q,"IMG",{src:!0,alt:!0,class:!0}),ye=k(Q),h(Ie.$$.fragment,Q),et=k(Q),h(le.$$.fragment,Q),tt=k(Q),h($e.$$.fragment,Q),Q.forEach(S),rt=k(W),U=V(W,"DIV",{class:!0});var X=G(U);h(Me.$$.fragment,X),nt=k(X),De=V(X,"IMG",{src:!0,alt:!0,class:!0}),at=k(X),h(Ee.$$.fragment,X),st=k(X),h(fe.$$.fragment,X),lt=k(X),h(ue.$$.fragment,X),X.forEach(S),$t=k(W),O=V(W,"DIV",{class:!0});var Z=G(O);h(Be.$$.fragment,Z),ft=k(Z),Ve=V(Z,"IMG",{src:!0,alt:!0,class:!0}),ut=k(Z),h(Pe.$$.fragment,Z),it=k(Z),h(ie.$$.fragment,Z),ot=k(Z),h(oe.$$.fragment,Z),Z.forEach(S),W.forEach(S),E.forEach(S),this.h()},h(){v(r,"class","banner svelte-1uzutv9"),x(r.src,t="/assets/market/starlight/starlight_banner.png")||v(r,"src",t),v(r,"alt","Starlight Banner"),x(b.src,M="/assets/market/starlight/starlight.png")||v(b,"src",M),v(b,"alt","Starlight"),v(b,"class","starlight-logo svelte-1uzutv9"),v(a,"class","purchase-bulk svelte-1uzutv9"),x(he.src,mt="/assets/market/starlight/starlight.png")||v(he,"src",mt),v(he,"alt","Starlight"),v(he,"class","starlight-logo svelte-1uzutv9"),v(j,"class","purchase-bulk svelte-1uzutv9"),x(be.src,gt="/assets/market/starlight/starlight.png")||v(be,"src",gt),v(be,"alt","Starlight"),v(be,"class","starlight-logo svelte-1uzutv9"),v(K,"class","purchase-bulk svelte-1uzutv9"),x(Se.src,pt="/assets/market/starlight/starlight.png")||v(Se,"src",pt),v(Se,"alt","Starlight"),v(Se,"class","starlight-logo svelte-1uzutv9"),v(T,"class","purchase-bulk svelte-1uzutv9"),x(De.src,_t="/assets/market/starlight/starlight.png")||v(De,"src",_t),v(De,"alt","Starlight"),v(De,"class","starlight-logo svelte-1uzutv9"),v(U,"class","purchase-bulk svelte-1uzutv9"),x(Ve.src,ht="/assets/market/starlight/starlight.png")||v(Ve,"src",ht),v(Ve,"alt","Starlight"),v(Ve,"class","starlight-logo svelte-1uzutv9"),v(O,"class","purchase-bulk svelte-1uzutv9"),v(f,"class","purchase svelte-1uzutv9"),v(e,"class","purchase-starlight svelte-1uzutv9")},m(c,E){A(c,e,E),m(e,r),m(e,n),p(l,e,null),m(e,u),m(e,f),m(f,a),p($,a,null),m(a,d),m(a,b),m(a,z),p(D,a,null),m(a,I),p(L,a,null),m(a,P),p(C,a,null),m(f,R),m(f,j),p(_e,j,null),m(j,Ke),m(j,he),m(j,Te),p(de,j,null),m(j,Ue),p(re,j,null),m(j,Oe),p(ne,j,null),m(f,Ye),m(f,K),p(ve,K,null),m(K,He),m(K,be),m(K,Je),p(we,K,null),m(K,Qe),p(ae,K,null),m(K,Xe),p(se,K,null),m(f,Ze),m(f,T),p(ke,T,null),m(T,xe),m(T,Se),m(T,ye),p(Ie,T,null),m(T,et),p(le,T,null),m(T,tt),p($e,T,null),m(f,rt),m(f,U),p(Me,U,null),m(U,nt),m(U,De),m(U,at),p(Ee,U,null),m(U,st),p(fe,U,null),m(U,lt),p(ue,U,null),m(f,$t),m(f,O),p(Be,O,null),m(O,ft),m(O,Ve),m(O,ut),p(Pe,O,null),m(O,it),p(ie,O,null),m(O,ot),p(oe,O,null),Re=!0},p(c,[E]){const W={};E&1&&(W.$$scope={dirty:E,ctx:c}),L.$set(W);const Y={};E&1&&(Y.$$scope={dirty:E,ctx:c}),C.$set(Y);const H={};E&1&&(H.$$scope={dirty:E,ctx:c}),re.$set(H);const J={};E&1&&(J.$$scope={dirty:E,ctx:c}),ne.$set(J);const Q={};E&1&&(Q.$$scope={dirty:E,ctx:c}),ae.$set(Q);const X={};E&1&&(X.$$scope={dirty:E,ctx:c}),se.$set(X);const Z={};E&1&&(Z.$$scope={dirty:E,ctx:c}),le.$set(Z);const dt={};E&1&&(dt.$$scope={dirty:E,ctx:c}),$e.$set(dt);const vt={};E&1&&(vt.$$scope={dirty:E,ctx:c}),fe.$set(vt);const bt={};E&1&&(bt.$$scope={dirty:E,ctx:c}),ue.$set(bt);const wt={};E&1&&(wt.$$scope={dirty:E,ctx:c}),ie.$set(wt);const kt={};E&1&&(kt.$$scope={dirty:E,ctx:c}),oe.$set(kt)},i(c){Re||(i(l.$$.fragment,c),i($.$$.fragment,c),i(D.$$.fragment,c),i(L.$$.fragment,c),i(C.$$.fragment,c),i(_e.$$.fragment,c),i(de.$$.fragment,c),i(re.$$.fragment,c),i(ne.$$.fragment,c),i(ve.$$.fragment,c),i(we.$$.fragment,c),i(ae.$$.fragment,c),i(se.$$.fragment,c),i(ke.$$.fragment,c),i(Ie.$$.fragment,c),i(le.$$.fragment,c),i($e.$$.fragment,c),i(Me.$$.fragment,c),i(Ee.$$.fragment,c),i(fe.$$.fragment,c),i(ue.$$.fragment,c),i(Be.$$.fragment,c),i(Pe.$$.fragment,c),i(ie.$$.fragment,c),i(oe.$$.fragment,c),Re=!0)},o(c){o(l.$$.fragment,c),o($.$$.fragment,c),o(D.$$.fragment,c),o(L.$$.fragment,c),o(C.$$.fragment,c),o(_e.$$.fragment,c),o(de.$$.fragment,c),o(re.$$.fragment,c),o(ne.$$.fragment,c),o(ve.$$.fragment,c),o(we.$$.fragment,c),o(ae.$$.fragment,c),o(se.$$.fragment,c),o(ke.$$.fragment,c),o(Ie.$$.fragment,c),o(le.$$.fragment,c),o($e.$$.fragment,c),o(Me.$$.fragment,c),o(Ee.$$.fragment,c),o(fe.$$.fragment,c),o(ue.$$.fragment,c),o(Be.$$.fragment,c),o(Pe.$$.fragment,c),o(ie.$$.fragment,c),o(oe.$$.fragment,c),Re=!1},d(c){c&&S(e),_(l),_($),_(D),_(L),_(C),_(_e),_(de),_(re),_(ne),_(ve),_(we),_(ae),_(se),_(ke),_(Ie),_(le),_($e),_(Me),_(Ee),_(fe),_(ue),_(Be),_(Pe),_(ie),_(oe)}}}class Cr extends Ge{constructor(e){super(),Le(this,e,null,zr,Ae,{})}}function zt(s){let e,r;return e=new Ut({props:{$$slots:{default:[Fr]},$$scope:{ctx:s}}}),e.$on("close",s[4]),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const l={};n&1029&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Ar(s){let e,r;return e=new ee({props:{icon:y.Starlight}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Gr(s){let e,r;return e=new ee({props:{icon:y.Beaker}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:N,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){o(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function Lr(s){let e,r,t,n,l,u,f;return r=new q({props:{text:"Pre-Release Perks"}}),n=new te({props:{text:s[2]("market.purchase_starlight"),fill:!0,appearance:s[0]===s[5][0].component?F.Primary:F.Alt,$$slots:{default:[Ar]},$$scope:{ctx:s}}}),n.$on("click",s[7]),u=new te({props:{text:s[2]("market.bundles"),fill:!0,appearance:s[0]===s[5][1].component?F.Primary:F.Alt,$$slots:{default:[Gr]},$$scope:{ctx:s}}}),u.$on("click",s[8]),{c(){e=B("div"),g(r.$$.fragment),t=w(),g(n.$$.fragment),l=w(),g(u.$$.fragment),this.h()},l(a){e=V(a,"DIV",{class:!0});var $=G(e);h(r.$$.fragment,$),t=k($),h(n.$$.fragment,$),l=k($),h(u.$$.fragment,$),$.forEach(S),this.h()},h(){v(e,"class","market-nav svelte-12i6cra")},m(a,$){A(a,e,$),p(r,e,null),m(e,t),p(n,e,null),m(e,l),p(u,e,null),f=!0},p(a,$){const d={};$&4&&(d.text=a[2]("market.purchase_starlight")),$&1&&(d.appearance=a[0]===a[5][0].component?F.Primary:F.Alt),$&1024&&(d.$$scope={dirty:$,ctx:a}),n.$set(d);const b={};$&4&&(b.text=a[2]("market.bundles")),$&1&&(b.appearance=a[0]===a[5][1].component?F.Primary:F.Alt),$&1024&&(b.$$scope={dirty:$,ctx:a}),u.$set(b)},i(a){f||(i(r.$$.fragment,a),i(n.$$.fragment,a),i(u.$$.fragment,a),f=!0)},o(a){o(r.$$.fragment,a),o(n.$$.fragment,a),o(u.$$.fragment,a),f=!1},d(a){a&&S(e),_(r),_(n),_(u)}}}function Ct(s){let e,r,t;var n=s[0];function l(u,f){return{}}return n&&(e=It(n,l())),{c(){e&&g(e.$$.fragment),r=Ce()},l(u){e&&h(e.$$.fragment,u),r=Ce()},m(u,f){e&&p(e,u,f),A(u,r,f),t=!0},p(u,f){if(f&1&&n!==(n=u[0])){if(e){Fe();const a=e;o(a.$$.fragment,1,0,()=>{_(a,1)}),Ne()}n?(e=It(n,l()),g(e.$$.fragment),i(e.$$.fragment,1),p(e,r.parentNode,r)):e=null}},i(u){t||(e&&i(e.$$.fragment,u),t=!0)},o(u){e&&o(e.$$.fragment,u),t=!1},d(u){u&&S(r),e&&_(e,u)}}}function Fr(s){let e,r,t,n,l,u,f;n=new Zt({props:{$$slots:{default:[Lr]},$$scope:{ctx:s}}});let a=s[0]&&Ct(s);return{c(){e=B("div"),r=B("div"),t=B("div"),g(n.$$.fragment),l=w(),u=B("div"),a&&a.c(),this.h()},l($){e=V($,"DIV",{id:!0,class:!0});var d=G(e);r=V(d,"DIV",{class:!0});var b=G(r);t=V(b,"DIV",{class:!0});var M=G(t);h(n.$$.fragment,M),M.forEach(S),l=k(b),u=V(b,"DIV",{class:!0});var z=G(u);a&&a.l(z),z.forEach(S),b.forEach(S),d.forEach(S),this.h()},h(){v(t,"class","aside svelte-12i6cra"),v(u,"class","body svelte-12i6cra"),v(r,"class","content svelte-12i6cra"),v(e,"id","market"),v(e,"class","svelte-12i6cra")},m($,d){A($,e,d),m(e,r),m(r,t),p(n,t,null),m(r,l),m(r,u),a&&a.m(u,null),f=!0},p($,d){const b={};d&1029&&(b.$$scope={dirty:d,ctx:$}),n.$set(b),$[0]?a?(a.p($,d),d&1&&i(a,1)):(a=Ct($),a.c(),i(a,1),a.m(u,null)):a&&(Fe(),o(a,1,1,()=>{a=null}),Ne())},i($){f||(i(n.$$.fragment,$),i(a),f=!0)},o($){o(n.$$.fragment,$),o(a),f=!1},d($){$&&S(e),_(n),a&&a.d()}}}function Nr(s){let e,r,t=s[3]&&zt(s);return{c(){t&&t.c(),e=Ce()},l(n){t&&t.l(n),e=Ce()},m(n,l){t&&t.m(n,l),A(n,e,l),r=!0},p(n,[l]){n[3]?t?(t.p(n,l),l&8&&i(t,1)):(t=zt(n),t.c(),i(t,1),t.m(e.parentNode,e)):t&&(Fe(),o(t,1,1,()=>{t=null}),Ne())},i(n){r||(i(t),r=!0)},o(n){o(t),r=!1},d(n){n&&S(e),t&&t.d(n)}}}function qr(s,e,r){let t,n,l,u=N,f=()=>(u(),u=Tt(t,I=>r(3,l=I)),t);At(s,Lt,I=>r(2,n=I)),s.$$.on_destroy.push(()=>u());const a=ct();function $(){a("close")}let d=[{name:n("market.purchase_starlight"),component:Cr},{name:n("market.home"),component:cr}],b=d[0].component;function M(I){r(0,b=I.component)}const z=I=>{M(d[0])},D=I=>{M(d[1])};return f(r(1,t=Ot.state.marketOpen)),[b,t,n,l,$,d,M,z,D]}class Xr extends Ge{constructor(e){super(),Le(this,e,qr,Nr,Ae,{})}}export{Xr as M};
