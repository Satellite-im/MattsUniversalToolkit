import{s as H,e as V,a as A,c as B,b as z,g as L,f as I,l as D,i as O,h as S,k as ee,t as te,d as ne,j as ae,H as X,n as R,z as re,A as se,B as le,C as oe,u as ce,w as N}from"../chunks/scheduler.BSglW4Eu.js";import{S as M,i as U,c as b,a as v,m as w,t as p,b as g,e as k,g as Y,d as Z}from"../chunks/index.B6nwG8t1.js";import{T as fe,e as G}from"../chunks/UnderConstruction.svelte_svelte_type_style_lang.C_3ZjMzY.js";import{$ as ie,a as j,N as ue,A as P,S as y,R as $e,U as T}from"../chunks/Store.DbGLP55A.js";/* empty css                                                       */import{a as me}from"../chunks/Role.svelte_svelte_type_style_lang.CKLlw0pb.js";import"../chunks/entry.BNO4FNMV.js";import{M as pe}from"../chunks/Modal.DKp-qNmz.js";import{I as ge}from"../chunks/ImageEmbed.9YUId69W.js";import{S as _e}from"../chunks/Slimbar.DcfPRuHo.js";import{I as q,B as F}from"../chunks/Icon.B9q4q62V.js";import{L as he}from"../chunks/Label.BwZF9yqB.js";/* empty css                                                    */function de(l){let t=l[0].name+"",n;return{c(){n=te(t)},l(e){n=ne(e,t)},m(e,a){O(e,n,a)},p(e,a){a&1&&t!==(t=e[0].name+"")&&ae(n,t)},d(e){e&&I(n)}}}function be(l){let t,n,e,a,r;return n=new q({props:{icon:l[0].icon}}),a=new fe({props:{$$slots:{default:[de]},$$scope:{ctx:l}}}),{c(){t=V("div"),b(n.$$.fragment),e=A(),b(a.$$.fragment),this.h()},l(s){t=B(s,"DIV",{class:!0});var o=z(t);v(n.$$.fragment,o),e=L(o),v(a.$$.fragment,o),o.forEach(I),this.h()},h(){D(t,"class","community-channel svelte-sbbvbt")},m(s,o){O(s,t,o),w(n,t,null),S(t,e),w(a,t,null),r=!0},p(s,[o]){const _={};o&1&&(_.icon=s[0].icon),n.$set(_);const u={};o&5&&(u.$$scope={dirty:o,ctx:s}),a.$set(u)},i(s){r||(p(n.$$.fragment,s),p(a.$$.fragment,s),r=!0)},o(s){g(n.$$.fragment,s),g(a.$$.fragment,s),r=!1},d(s){s&&I(t),k(n),k(a)}}}function ve(l,t,n){let e;ee(l,ie,r=>n(1,e=r));let{channel:a={icon:j.Hashtag,name:e("community.channel.default"),kind:ue.Text}}=t;return l.$$set=r=>{"channel"in r&&n(0,a=r.channel)},[a]}class we extends M{constructor(t){super(),U(this,t,ve,be,H,{channel:0})}}function J(l,t,n){const e=l.slice();return e[1]=t[n],e}function ke(l){let t,n;return t=new q({props:{icon:j.ChevronDown,size:y.Small}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),n=!0},p:R,i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Ie(l){let t,n;return t=new q({props:{icon:j.Plus,size:y.Small}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),n=!0},p:R,i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Q(l){let t,n;return t=new we({props:{channel:l[1]}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),n=!0},p(e,a){const r={};a&1&&(r.channel=e[1]),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Se(l){let t,n,e,a,r,s,o,_,u,i;e=new he({props:{text:l[0].name}}),s=new F({props:{icon:!0,small:!0,appearance:P.Alt,$$slots:{default:[ke]},$$scope:{ctx:l}}}),_=new F({props:{icon:!0,small:!0,appearance:P.Alt,$$slots:{default:[Ie]},$$scope:{ctx:l}}});let $=G(l[0].channels),f=[];for(let c=0;c<$.length;c+=1)f[c]=Q(J(l,$,c));const x=c=>g(f[c],1,1,()=>{f[c]=null});return{c(){t=V("div"),n=V("div"),b(e.$$.fragment),a=A(),r=V("div"),b(s.$$.fragment),o=A(),b(_.$$.fragment),u=A();for(let c=0;c<f.length;c+=1)f[c].c();this.h()},l(c){t=B(c,"DIV",{class:!0});var m=z(t);n=B(m,"DIV",{class:!0});var d=z(n);v(e.$$.fragment,d),a=L(d),r=B(d,"DIV",{class:!0});var C=z(r);v(s.$$.fragment,C),o=L(C),v(_.$$.fragment,C),C.forEach(I),d.forEach(I),u=L(m);for(let E=0;E<f.length;E+=1)f[E].l(m);m.forEach(I),this.h()},h(){D(r,"class","controls"),D(n,"class","channel-header svelte-amc1w0"),D(t,"class","channel-group svelte-amc1w0")},m(c,m){O(c,t,m),S(t,n),w(e,n,null),S(n,a),S(n,r),w(s,r,null),S(r,o),w(_,r,null),S(t,u);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(t,null);i=!0},p(c,[m]){const d={};m&1&&(d.text=c[0].name),e.$set(d);const C={};m&16&&(C.$$scope={dirty:m,ctx:c}),s.$set(C);const E={};if(m&16&&(E.$$scope={dirty:m,ctx:c}),_.$set(E),m&1){$=G(c[0].channels);let h;for(h=0;h<$.length;h+=1){const K=J(c,$,h);f[h]?(f[h].p(K,m),p(f[h],1)):(f[h]=Q(K),f[h].c(),p(f[h],1),f[h].m(t,null))}for(Y(),h=$.length;h<f.length;h+=1)x(h);Z()}},i(c){if(!i){p(e.$$.fragment,c),p(s.$$.fragment,c),p(_.$$.fragment,c);for(let m=0;m<$.length;m+=1)p(f[m]);i=!0}},o(c){g(e.$$.fragment,c),g(s.$$.fragment,c),g(_.$$.fragment,c),f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)g(f[m]);i=!1},d(c){c&&I(t),k(e),k(s),k(_),X(f,c)}}}function Ce(l,t,n){let{group:e={name:"",channels:[]}}=t;return l.$$set=a=>{"group"in a&&n(0,e=a.group)},[e]}class De extends M{constructor(t){super(),U(this,t,Ce,Se,H,{group:0})}}function Ee(l,t,n){const e=l.slice();return e[6]=t[n],e}function W(l){let t,n;return t=new pe({props:{$$slots:{default:[Ve]},$$scope:{ctx:l}}}),t.$on("close",l[4]),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),n=!0},p(e,a){const r={};a&34&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Ve(l){let t,n;return t=new ge({props:{big:!0,source:l[1]}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),n=!0},p(e,a){const r={};a&2&&(r.source=e[1]),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Ae(l){let t,n;return t=new De({props:{group:l[6]}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),n=!0},p:R,i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Be(l){let t,n,e=G(me),a=[];for(let r=0;r<e.length;r+=1)a[r]=Ae(Ee(l,e,r));return{c(){for(let r=0;r<a.length;r+=1)a[r].c();t=N()},l(r){for(let s=0;s<a.length;s+=1)a[s].l(r);t=N()},m(r,s){for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(r,s);O(r,t,s),n=!0},p:R,i(r){if(!n){for(let s=0;s<e.length;s+=1)p(a[s]);n=!0}},o(r){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)g(a[s]);n=!1},d(r){r&&I(t),X(a,r)}}}function ze(l){let t,n,e,a,r,s,o=l[1]&&W(l);e=new _e({props:{loading:Le,open:l[0],activeRoute:$e.Chat,$$slots:{default:[Be]},$$scope:{ctx:l}}}),e.$on("toggle",l[2]);const _=l[3].default,u=re(_,l,l[5],null);return{c(){t=V("div"),o&&o.c(),n=A(),b(e.$$.fragment),a=A(),r=V("div"),u&&u.c(),this.h()},l(i){t=B(i,"DIV",{id:!0,class:!0});var $=z(t);o&&o.l($),n=L($),v(e.$$.fragment,$),a=L($),r=B($,"DIV",{class:!0});var f=z(r);u&&u.l(f),f.forEach(I),$.forEach(I),this.h()},h(){D(r,"class","content svelte-16pvbkp"),D(t,"id","page"),D(t,"class","svelte-16pvbkp")},m(i,$){O(i,t,$),o&&o.m(t,null),S(t,n),w(e,t,null),S(t,a),S(t,r),u&&u.m(r,null),s=!0},p(i,[$]){i[1]?o?(o.p(i,$),$&2&&p(o,1)):(o=W(i),o.c(),p(o,1),o.m(t,n)):o&&(Y(),g(o,1,1,()=>{o=null}),Z());const f={};$&1&&(f.open=i[0]),$&32&&(f.$$scope={dirty:$,ctx:i}),e.$set(f),u&&u.p&&(!s||$&32)&&se(u,_,i,i[5],s?oe(_,i[5],$,null):le(i[5]),null)},i(i){s||(p(o),p(e.$$.fragment,i),p(u,i),s=!0)},o(i){g(o),g(e.$$.fragment,i),g(u,i),s=!1},d(i){i&&I(t),o&&o.d(),k(e),u&&u.d(i)}}}let Le=!1;function Oe(l,t,n){let{$$slots:e={},$$scope:a}=t,r=ce(T.state.sidebarOpen);function s(){T.toggleSidebar()}let o;T.state.sidebarOpen.subscribe(u=>n(0,r=u));const _=u=>{n(1,o=null)};return l.$$set=u=>{"$$scope"in u&&n(5,a=u.$$scope)},[r,o,s,e,_,a]}class Qe extends M{constructor(t){super(),U(this,t,Oe,ze,H,{})}}export{Qe as component};
