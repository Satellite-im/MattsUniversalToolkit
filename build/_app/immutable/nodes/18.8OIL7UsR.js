import{s as pe,e as A,a as M,c as L,b as N,g as P,f as q,l as y,i as j,h as w,k as _e,q as we,t as ge,d as $e,j as he,w as re,o as Z,V as le,p as Ie,n as X,H as de,u as Y}from"../chunks/scheduler.BSglW4Eu.js";import{S as ve,i as be,c as D,a as E,m as B,g as G,b as v,d as O,t as g,e as V}from"../chunks/index.B6nwG8t1.js";import{T as ae,L as De,e as W}from"../chunks/UnderConstruction.svelte_svelte_type_style_lang.g0v0QcCt.js";import{B as ke,I as ee}from"../chunks/Icon.D07Vr-nn.js";import{$ as ye,E as te,A as R,a as H,b as Q}from"../chunks/Store.RfHT5Hq0.js";import{L as U}from"../chunks/Label.D6N4D-eB.js";import{d as Ee}from"../chunks/cdn.GG39r2F5.js";function Be(r){let e,n,t,l,f,p,i=!r[8]&&se();return{c(){i&&i.c(),e=M(),n=A("img"),this.h()},l(a){i&&i.l(a),e=P(a),n=L(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Z(n.src,t=r[1])||y(n,"src",t),y(n,"alt",""),y(n,"class","preview svelte-1rt90s"),le(n,"display",r[8]?"block":"none")},m(a,$){i&&i.m(a,$),j(a,e,$),j(a,n,$),l=!0,f||(p=Ie(n,"load",r[11]),f=!0)},p(a,$){a[8]?i&&(G(),v(i,1,1,()=>{i=null}),O()):i?$&256&&g(i,1):(i=se(),i.c(),g(i,1),i.m(e.parentNode,e)),(!l||$&2&&!Z(n.src,t=a[1]))&&y(n,"src",t),$&256&&le(n,"display",a[8]?"block":"none")},i(a){l||(g(i),l=!0)},o(a){v(i),l=!1},d(a){a&&(q(e),q(n)),i&&i.d(a),f=!1,p()}}}function Ve(r){let e,n;return{c(){e=A("img"),this.h()},l(t){e=L(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Z(e.src,n="/assets/frames/empty.png")||y(e,"src",n),y(e,"alt",""),y(e,"class","preview svelte-1rt90s")},m(t,l){j(t,e,l)},p:X,i:X,o:X,d(t){t&&q(e)}}}function se(r){let e,n;return e=new De({}),{c(){D(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){B(e,t,l),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Fe(r){let e;return{c(){e=ge(r[0])},l(n){e=$e(n,r[0])},m(n,t){j(n,e,t)},p(n,t){t&1&&he(e,n[0])},d(n){n&&q(e)}}}function Me(r){let e;return{c(){e=ge(r[2])},l(n){e=$e(n,r[2])},m(n,t){j(n,e,t)},p(n,t){t&4&&he(e,n[2])},d(n){n&&q(e)}}}function ie(r){let e,n;return e=new ke({props:{text:r[3]?r[9]("inventory.equipped"):r[9]("inventory.equip"),fill:!0,appearance:r[3]?R.Primary:R.Alt,$$slots:{default:[Le]},$$scope:{ctx:r}}}),e.$on("click",r[12]),{c(){D(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){B(e,t,l),n=!0},p(t,l){const f={};l&520&&(f.text=t[3]?t[9]("inventory.equipped"):t[9]("inventory.equip")),l&8&&(f.appearance=t[3]?R.Primary:R.Alt),l&16392&&(f.$$scope={dirty:l,ctx:t}),e.$set(f)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Pe(r){let e,n;return e=new ee({props:{icon:H.Plus}}),{c(){D(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){B(e,t,l),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Ae(r){let e,n;return e=new ee({props:{icon:H.CheckMark}}),{c(){D(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){B(e,t,l),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Le(r){let e,n,t,l;const f=[Ae,Pe],p=[];function i(a,$){return a[3]?0:1}return e=i(r),n=p[e]=f[e](r),{c(){n.c(),t=re()},l(a){n.l(a),t=re()},m(a,$){p[e].m(a,$),j(a,t,$),l=!0},p(a,$){let c=e;e=i(a),e!==c&&(G(),v(p[c],1,1,()=>{p[c]=null}),O(),n=p[e],n||(n=p[e]=f[e](a),n.c()),g(n,1),n.m(t.parentNode,t))},i(a){l||(g(n),l=!0)},o(a){v(n),l=!1},d(a){a&&q(t),p[e].d(a)}}}function oe(r){let e,n;return e=new ke({props:{text:r[6]?r[9]("inventory.noFrame"):r[9]("inventory.unequip"),fill:!0,appearance:R.Alt,disabled:r[6],$$slots:{default:[Se]},$$scope:{ctx:r}}}),e.$on("click",r[13]),{c(){D(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){B(e,t,l),n=!0},p(t,l){const f={};l&576&&(f.text=t[6]?t[9]("inventory.noFrame"):t[9]("inventory.unequip")),l&64&&(f.disabled=t[6]),l&16448&&(f.$$scope={dirty:l,ctx:t}),e.$set(f)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Se(r){let e,n;return e=new ee({props:{icon:r[6]?H.Plus:H.Minus}}),{c(){D(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){B(e,t,l),n=!0},p(t,l){const f={};l&64&&(f.icon=t[6]?H.Plus:H.Minus),e.$set(f)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function je(r){let e,n,t,l,f,p,i,a,$,c,m;const _=[Ve,Be],k=[];function C(s,o){return s[6]?0:1}n=C(r),t=k[n]=_[n](r),f=new ae({props:{$$slots:{default:[Fe]},$$scope:{ctx:r}}}),i=new ae({props:{muted:!0,$$slots:{default:[Me]},$$scope:{ctx:r}}});let h=!r[4]&&ie(r),b=r[5]&&oe(r);return{c(){e=A("div"),t.c(),l=M(),D(f.$$.fragment),p=M(),D(i.$$.fragment),a=M(),h&&h.c(),$=M(),b&&b.c(),this.h()},l(s){e=L(s,"DIV",{"data-cy":!0,class:!0});var o=N(e);t.l(o),l=P(o),E(f.$$.fragment,o),p=P(o),E(i.$$.fragment,o),a=P(o),h&&h.l(o),$=P(o),b&&b.l(o),o.forEach(q),this.h()},h(){y(e,"data-cy",r[7]),y(e,"class",c="inventory-item "+(r[3]?"equipped":"")+" svelte-1rt90s")},m(s,o){j(s,e,o),k[n].m(e,null),w(e,l),B(f,e,null),w(e,p),B(i,e,null),w(e,a),h&&h.m(e,null),w(e,$),b&&b.m(e,null),m=!0},p(s,[o]){let K=n;n=C(s),n===K?k[n].p(s,o):(G(),v(k[K],1,1,()=>{k[K]=null}),O(),t=k[n],t?t.p(s,o):(t=k[n]=_[n](s),t.c()),g(t,1),t.m(e,l));const u={};o&16385&&(u.$$scope={dirty:o,ctx:s}),f.$set(u);const d={};o&16388&&(d.$$scope={dirty:o,ctx:s}),i.$set(d),s[4]?h&&(G(),v(h,1,1,()=>{h=null}),O()):h?(h.p(s,o),o&16&&g(h,1)):(h=ie(s),h.c(),g(h,1),h.m(e,$)),s[5]?b?(b.p(s,o),o&32&&g(b,1)):(b=oe(s),b.c(),g(b,1),b.m(e,null)):b&&(G(),v(b,1,1,()=>{b=null}),O()),(!m||o&128)&&y(e,"data-cy",s[7]),(!m||o&8&&c!==(c="inventory-item "+(s[3]?"equipped":"")+" svelte-1rt90s"))&&y(e,"class",c)},i(s){m||(g(t),g(f.$$.fragment,s),g(i.$$.fragment,s),g(h),g(b),m=!0)},o(s){v(t),v(f.$$.fragment,s),v(i.$$.fragment,s),v(h),v(b),m=!1},d(s){s&&q(e),k[n].d(),V(f),V(i),h&&h.d(),b&&b.d()}}}function Ce(r,e,n){let t;_e(r,ye,s=>n(9,t=s));let{name:l=""}=e,{preview:f=""}=e,{kind:p=te.Item}=e,{equipped:i=!1}=e,{noButton:a=!1}=e,{unequip:$=!1}=e,{empty:c=!1}=e,{hook:m=""}=e;const _=we();let k=!1;function C(){n(8,k=!0)}const h=()=>{_("apply")},b=()=>{_("apply")};return r.$$set=s=>{"name"in s&&n(0,l=s.name),"preview"in s&&n(1,f=s.preview),"kind"in s&&n(2,p=s.kind),"equipped"in s&&n(3,i=s.equipped),"noButton"in s&&n(4,a=s.noButton),"unequip"in s&&n(5,$=s.unequip),"empty"in s&&n(6,c=s.empty),"hook"in s&&n(7,m=s.hook)},[l,f,p,i,a,$,c,m,k,t,_,C,h,b]}class qe extends ve{constructor(e){super(),be(this,e,Ce,je,pe,{name:0,preview:1,kind:2,equipped:3,noButton:4,unequip:5,empty:6,hook:7})}}function fe(r,e,n){const t=r.slice();return t[5]=e[n][0],t[6]=e[n][1],t}function ue(r,e,n){const t=r.slice();return t[9]=e[n],t}function ce(r){let e,n;function t(){return r[4](r[9])}return e=new qe({props:{equipped:r[0].profile.photo.frame.image===r[9].image,kind:te.Frame,name:r[9].name,preview:`${x}${r[9].image}`}}),e.$on("apply",t),{c(){D(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,f){B(e,l,f),n=!0},p(l,f){r=l;const p={};f&1&&(p.equipped=r[0].profile.photo.frame.image===r[9].image),e.$set(p)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){v(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function me(r){let e,n,t,l,f,p;n=new U({props:{text:r[5]}});let i=W(r[6]),a=[];for(let c=0;c<i.length;c+=1)a[c]=ce(ue(r,i,c));const $=c=>v(a[c],1,1,()=>{a[c]=null});return{c(){e=A("div"),D(n.$$.fragment),t=M(),l=A("div");for(let c=0;c<a.length;c+=1)a[c].c();f=M(),this.h()},l(c){e=L(c,"DIV",{class:!0});var m=N(e);E(n.$$.fragment,m),t=P(m),l=L(m,"DIV",{class:!0});var _=N(l);for(let k=0;k<a.length;k+=1)a[k].l(_);_.forEach(q),f=P(m),m.forEach(q),this.h()},h(){y(l,"class","frame-items svelte-u7olgy"),y(e,"class","frame-section svelte-u7olgy")},m(c,m){j(c,e,m),B(n,e,null),w(e,t),w(e,l);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(l,null);w(e,f),p=!0},p(c,m){if(m&5){i=W(c[6]);let _;for(_=0;_<i.length;_+=1){const k=ue(c,i,_);a[_]?(a[_].p(k,m),g(a[_],1)):(a[_]=ce(k),a[_].c(),g(a[_],1),a[_].m(l,null))}for(G(),_=i.length;_<a.length;_+=1)$(_);O()}},i(c){if(!p){g(n.$$.fragment,c);for(let m=0;m<i.length;m+=1)g(a[m]);p=!0}},o(c){v(n.$$.fragment,c),a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)v(a[m]);p=!1},d(c){c&&q(e),V(n),de(a,c)}}}function Ne(r){let e,n,t,l,f,p,i,a,$,c,m,_,k,C,h,b;t=new U({props:{text:r[1]("settings.inventory.equippedItems")}}),i=new U({props:{text:r[1]("settings.inventory.frame")}}),$=new qe({props:{equipped:!0,kind:te.Frame,name:r[0].profile.photo.frame.name,preview:`${x}${r[0].profile.photo.frame.image}`,noButton:!0,unequip:!0,empty:r[0].profile.photo.frame.image===""}}),$.$on("apply",r[3]),m=new U({props:{text:r[1]("settings.inventory.frames")}});let s=W(Object.entries(r[2])),o=[];for(let u=0;u<s.length;u+=1)o[u]=me(fe(r,s,u));const K=u=>v(o[u],1,1,()=>{o[u]=null});return h=new U({props:{text:r[1]("settings.inventory.overlays")}}),{c(){e=A("div"),n=A("div"),D(t.$$.fragment),l=M(),f=A("div"),p=A("div"),D(i.$$.fragment),a=M(),D($.$$.fragment),c=M(),D(m.$$.fragment),_=M(),k=A("div");for(let u=0;u<o.length;u+=1)o[u].c();C=M(),D(h.$$.fragment),this.h()},l(u){e=L(u,"DIV",{id:!0,class:!0});var d=N(e);n=L(d,"DIV",{class:!0});var F=N(n);E(t.$$.fragment,F),l=P(F),f=L(F,"DIV",{class:!0});var z=N(f);p=L(z,"DIV",{class:!0});var S=N(p);E(i.$$.fragment,S),a=P(S),E($.$$.fragment,S),S.forEach(q),z.forEach(q),F.forEach(q),c=P(d),E(m.$$.fragment,d),_=P(d),k=L(d,"DIV",{class:!0});var J=N(k);for(let T=0;T<o.length;T+=1)o[T].l(J);J.forEach(q),C=P(d),E(h.$$.fragment,d),d.forEach(q),this.h()},h(){y(p,"class","item svelte-u7olgy"),y(f,"class","items svelte-u7olgy"),y(n,"class","equipped svelte-u7olgy"),y(k,"class","frames svelte-u7olgy"),y(e,"id","page"),y(e,"class","svelte-u7olgy")},m(u,d){j(u,e,d),w(e,n),B(t,n,null),w(n,l),w(n,f),w(f,p),B(i,p,null),w(p,a),B($,p,null),w(e,c),B(m,e,null),w(e,_),w(e,k);for(let F=0;F<o.length;F+=1)o[F]&&o[F].m(k,null);w(e,C),B(h,e,null),b=!0},p(u,[d]){const F={};d&2&&(F.text=u[1]("settings.inventory.equippedItems")),t.$set(F);const z={};d&2&&(z.text=u[1]("settings.inventory.frame")),i.$set(z);const S={};d&1&&(S.name=u[0].profile.photo.frame.name),d&1&&(S.preview=`${x}${u[0].profile.photo.frame.image}`),d&1&&(S.empty=u[0].profile.photo.frame.image===""),$.$set(S);const J={};if(d&2&&(J.text=u[1]("settings.inventory.frames")),m.$set(J),d&5){s=W(Object.entries(u[2]));let I;for(I=0;I<s.length;I+=1){const ne=fe(u,s,I);o[I]?(o[I].p(ne,d),g(o[I],1)):(o[I]=me(ne),o[I].c(),g(o[I],1),o[I].m(k,null))}for(G(),I=s.length;I<o.length;I+=1)K(I);O()}const T={};d&2&&(T.text=u[1]("settings.inventory.overlays")),h.$set(T)},i(u){if(!b){g(t.$$.fragment,u),g(i.$$.fragment,u),g($.$$.fragment,u),g(m.$$.fragment,u);for(let d=0;d<s.length;d+=1)g(o[d]);g(h.$$.fragment,u),b=!0}},o(u){v(t.$$.fragment,u),v(i.$$.fragment,u),v($.$$.fragment,u),v(m.$$.fragment,u),o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)v(o[d]);v(h.$$.fragment,u),b=!1},d(u){u&&q(e),V(t),V(i),V($),V(m),de(o,u),V(h)}}}const x="https://cdn.deepspaceshipping.co";function Ge(r,e,n){let t;_e(r,ye,a=>n(1,t=a));let l=Y(Q.state.user);const f=Ee.frames;return[l,t,f,()=>{Q.unequipFrame(),n(0,l=Y(Q.state.user))},a=>{Q.setFrame(a),n(0,l=Y(Q.state.user))}]}class Re extends ve{constructor(e){super(),be(this,e,Ge,Ne,pe,{})}}export{Re as component};
