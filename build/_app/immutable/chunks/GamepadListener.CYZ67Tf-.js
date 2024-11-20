import{s as _t,a as H,w as ke,g as P,i as M,f as h,k as K,v as gt,K as vt,u as Ae,M as Ve,e as R,t as Me,c as D,b as le,d as Ie,l as _,h as j,j as Te,N as Fe,H as Ye,E as ht,o as se,n as Se,V as Be}from"./scheduler.BSglW4Eu.js";import{S as wt,i as kt,t as v,g as oe,b as y,d as re,f as qe,c as de,a as pe,m as be,e as _e}from"./index.B6nwG8t1.js";import{s as Et,$ as $t,u as ze}from"./Store.Dtc3eKAt.js";import{e as we,T as Lt}from"./UnderConstruction.svelte_svelte_type_style_lang.CLUFqQp6.js";import{w as Z}from"./entry.DOV8oSrm.js";import{L as yt}from"./Label.DnqtWqUX.js";import{R as Oe}from"./RangeSelector.BHZiDX8w.js";import{S as De}from"./Select.CNNomCaw.js";const At=typeof window<"u"?window:typeof globalThis<"u"?globalThis:Et,{Boolean:Re}=At;function Ue(l,e,s){const n=l.slice();return n[63]=e[s],n}function Ke(l,e,s){const n=l.slice();return n[63]=e[s],n}function Je(l,e,s){const n=l.slice();return n[63]=e[s],n}function We(l){let e,s,n,o,r=l[3]("settings.gamepad.deadzone",{values:{number:l[4]}})+"",c,k,a,d,$,X,g=l[3]("settings.gamepad.pointer",{values:{number:l[5]}})+"",x,u,m,w,N,A,T,ee,z,G,C,ae,V,O,E=l[1]!==null&&Qe(l),L=l[2].length>0&&Ze(l);function Ee(i){l[25](i)}let ge={min:0,max:3};l[4]!==void 0&&(ge.value=l[4]),a=new Oe({props:ge}),Ve.push(()=>qe(a,"value",Ee));function $e(i){l[26](i)}let ue={min:1,max:50};l[5]!==void 0&&(ue.value=l[5]),m=new Oe({props:ue}),Ve.push(()=>qe(m,"value",$e));let ie=we([4,7,8,12,13,14,15,10]),S=[];for(let i=0;i<8;i+=1)S[i]=xe(Je(l,ie,i));const Ce=i=>y(S[i],1,1,()=>{S[i]=null}),Le=[Mt,St],U=[];function ye(i,f){return i[7]?0:1}G=ye(l),C=U[G]=Le[G](l);let ve=we([5,6,0,1,2,3,9,11]),I=[];for(let i=0;i<8;i+=1)I[i]=nt(Ue(l,ve,i));const Xe=i=>y(I[i],1,1,()=>{I[i]=null});return{c(){E&&E.c(),e=H(),L&&L.c(),s=H(),n=R("div"),o=R("label"),c=Me(r),k=H(),de(a.$$.fragment),$=H(),X=R("label"),x=Me(g),u=H(),de(m.$$.fragment),N=H(),A=R("div"),T=R("div");for(let i=0;i<8;i+=1)S[i].c();ee=H(),z=R("div"),C.c(),ae=H(),V=R("div");for(let i=0;i<8;i+=1)I[i].c();this.h()},l(i){E&&E.l(i),e=P(i),L&&L.l(i),s=P(i),n=D(i,"DIV",{id:!0});var f=le(n);o=D(f,"LABEL",{for:!0});var Y=le(o);c=Ie(Y,r),Y.forEach(h),k=P(f),pe(a.$$.fragment,f),$=P(f),X=D(f,"LABEL",{for:!0});var fe=le(X);x=Ie(fe,g),fe.forEach(h),u=P(f),pe(m.$$.fragment,f),f.forEach(h),N=P(i),A=D(i,"DIV",{class:!0});var F=le(A);T=D(F,"DIV",{class:!0});var p=le(T);for(let W=0;W<8;W+=1)S[W].l(p);p.forEach(h),ee=P(F),z=D(F,"DIV",{id:!0,class:!0});var J=le(z);C.l(J),J.forEach(h),ae=P(F),V=D(F,"DIV",{class:!0});var te=le(V);for(let W=0;W<8;W+=1)I[W].l(te);te.forEach(h),F.forEach(h),this.h()},h(){_(o,"for","deadzone"),_(X,"for","sensitivity"),_(n,"id","mapping"),_(T,"class","left-controls svelte-12i24ru"),_(z,"id","controller"),_(z,"class","svelte-12i24ru"),_(V,"class","right-controls svelte-12i24ru"),_(A,"class","controller-mappings svelte-12i24ru")},m(i,f){E&&E.m(i,f),M(i,e,f),L&&L.m(i,f),M(i,s,f),M(i,n,f),j(n,o),j(o,c),j(n,k),be(a,n,null),j(n,$),j(n,X),j(X,x),j(n,u),be(m,n,null),M(i,N,f),M(i,A,f),j(A,T);for(let Y=0;Y<8;Y+=1)S[Y]&&S[Y].m(T,null);j(A,ee),j(A,z),U[G].m(z,null),j(A,ae),j(A,V);for(let Y=0;Y<8;Y+=1)I[Y]&&I[Y].m(V,null);O=!0},p(i,f){i[1]!==null?E?(E.p(i,f),f[0]&2&&v(E,1)):(E=Qe(i),E.c(),v(E,1),E.m(e.parentNode,e)):E&&(oe(),y(E,1,1,()=>{E=null}),re()),i[2].length>0?L?(L.p(i,f),f[0]&4&&v(L,1)):(L=Ze(i),L.c(),v(L,1),L.m(s.parentNode,s)):L&&(oe(),y(L,1,1,()=>{L=null}),re()),(!O||f[0]&24)&&r!==(r=i[3]("settings.gamepad.deadzone",{values:{number:i[4]}})+"")&&Te(c,r);const Y={};!d&&f[0]&16&&(d=!0,Y.value=i[4],Fe(()=>d=!1)),a.$set(Y),(!O||f[0]&40)&&g!==(g=i[3]("settings.gamepad.pointer",{values:{number:i[5]}})+"")&&Te(x,g);const fe={};if(!w&&f[0]&32&&(w=!0,fe.value=i[5],Fe(()=>w=!1)),m.$set(fe),f[0]&8396872){ie=we([4,7,8,12,13,14,15,10]);let p;for(p=0;p<8;p+=1){const J=Je(i,ie,p);S[p]?(S[p].p(J,f),v(S[p],1)):(S[p]=xe(J),S[p].c(),v(S[p],1),S[p].m(T,null))}for(oe(),p=8;p<8;p+=1)Ce(p);re()}let F=G;if(G=ye(i),G===F?U[G].p(i,f):(oe(),y(U[F],1,1,()=>{U[F]=null}),re(),C=U[G],C?C.p(i,f):(C=U[G]=Le[G](i),C.c()),v(C,1),C.m(z,null)),f[0]&8396872){ve=we([5,6,0,1,2,3,9,11]);let p;for(p=0;p<8;p+=1){const J=Ue(i,ve,p);I[p]?(I[p].p(J,f),v(I[p],1)):(I[p]=nt(J),I[p].c(),v(I[p],1),I[p].m(V,null))}for(oe(),p=8;p<8;p+=1)Xe(p);re()}},i(i){if(!O){v(E),v(L),v(a.$$.fragment,i),v(m.$$.fragment,i);for(let f=0;f<8;f+=1)v(S[f]);v(C);for(let f=0;f<8;f+=1)v(I[f]);O=!0}},o(i){y(E),y(L),y(a.$$.fragment,i),y(m.$$.fragment,i),S=S.filter(Re);for(let f=0;f<8;f+=1)y(S[f]);y(C),I=I.filter(Re);for(let f=0;f<8;f+=1)y(I[f]);O=!1},d(i){i&&(h(e),h(s),h(n),h(N),h(A)),E&&E.d(i),L&&L.d(i),_e(a),_e(m),Ye(S,i),U[G].d(),Ye(I,i)}}}function Qe(l){let e,s;return e=new yt({props:{text:l[1]}}),{c(){de(e.$$.fragment)},l(n){pe(e.$$.fragment,n)},m(n,o){be(e,n,o),s=!0},p(n,o){const r={};o[0]&2&&(r.text=n[1]),e.$set(r)},i(n){s||(v(e.$$.fragment,n),s=!0)},o(n){y(e.$$.fragment,n),s=!1},d(n){_e(e,n)}}}function Ze(l){let e,s;return e=new De({props:{options:l[2].map(st)}}),e.$on("change",l[24]),{c(){de(e.$$.fragment)},l(n){pe(e.$$.fragment,n)},m(n,o){be(e,n,o),s=!0},p(n,o){const r={};o[0]&4&&(r.options=n[2].map(st)),e.$set(r)},i(n){s||(v(e.$$.fragment,n),s=!0)},o(n){y(e.$$.fragment,n),s=!1},d(n){_e(e,n)}}}function xe(l){let e,s=l[3]("settings.gamepad.button",{values:{index:l[63],name:l[6][+l[63]]}})+"",n,o,r,c;function k(...a){return l[28](l[63],...a)}return r=new De({props:{options:Object.keys(l[13]).map(l[27]),selected:l[6][+l[63]],alt:!0}}),r.$on("change",k),{c(){e=R("label"),n=Me(s),o=H(),de(r.$$.fragment),this.h()},l(a){e=D(a,"LABEL",{for:!0});var d=le(e);n=Ie(d,s),d.forEach(h),o=P(a),pe(r.$$.fragment,a),this.h()},h(){_(e,"for","button-"+l[63])},m(a,d){M(a,e,d),j(e,n),M(a,o,d),be(r,a,d),c=!0},p(a,d){l=a,(!c||d[0]&72)&&s!==(s=l[3]("settings.gamepad.button",{values:{index:l[63],name:l[6][+l[63]]}})+"")&&Te(n,s);const $={};d[0]&64&&($.selected=l[6][+l[63]]),r.$set($)},i(a){c||(v(r.$$.fragment,a),c=!0)},o(a){y(r.$$.fragment,a),c=!1},d(a){a&&(h(e),h(o)),_e(r,a)}}}function St(l){let e,s;return{c(){e=R("img"),this.h()},l(n){e=D(n,"IMG",{src:!0,id:!0,alt:!0,class:!0}),this.h()},h(){se(e.src,s="/assets/controller/xbox/controller_off.svg")||_(e,"src",s),_(e,"id","bg"),_(e,"alt","controller off"),_(e,"class","svelte-12i24ru")},m(n,o){M(n,e,o)},p:Se,i:Se,o:Se,d(n){n&&h(e)}}}function Mt(l){let e,s,n,o,r,c,k,a,d,$,X=we(Object.keys(l[9])),g=[];for(let u=0;u<X.length;u+=1)g[u]=tt(Ke(l,X,u));const x=u=>y(g[u],1,1,()=>{g[u]=null});return{c(){e=R("img"),n=H();for(let u=0;u<g.length;u+=1)g[u].c();o=H(),r=R("img"),k=H(),a=R("img"),this.h()},l(u){e=D(u,"IMG",{src:!0,id:!0,alt:!0,class:!0}),n=P(u);for(let m=0;m<g.length;m+=1)g[m].l(u);o=P(u),r=D(u,"IMG",{src:!0,class:!0,id:!0,style:!0,alt:!0}),k=P(u),a=D(u,"IMG",{src:!0,class:!0,id:!0,style:!0,alt:!0}),this.h()},h(){se(e.src,s=`/assets/controller/${l[8].toLocaleLowerCase()}/controller.svg`)||_(e,"src",s),_(e,"id","bg"),_(e,"alt","controller"),_(e,"class","svelte-12i24ru"),se(r.src,c=`/assets/controller/${l[8].toLocaleLowerCase()}/left-stick.svg`)||_(r,"src",c),_(r,"class","joystick svelte-12i24ru"),_(r,"id","left-joystick"),Be(r,"transform","translate("+l[10].x*15+"px, "+l[10].y*15+"px)"),_(r,"alt","left joystick"),se(a.src,d=`/assets/controller/${l[8].toLocaleLowerCase()}/right-stick.svg`)||_(a,"src",d),_(a,"class","joystick svelte-12i24ru"),_(a,"id","right-joystick"),Be(a,"transform","translate("+l[11].x*15+"px, "+l[11].y*15+"px)"),_(a,"alt","right joystick")},m(u,m){M(u,e,m),M(u,n,m);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m(u,m);M(u,o,m),M(u,r,m),M(u,k,m),M(u,a,m),$=!0},p(u,m){if((!$||m[0]&256&&!se(e.src,s=`/assets/controller/${u[8].toLocaleLowerCase()}/controller.svg`))&&_(e,"src",s),m[0]&8968){X=we(Object.keys(u[9]));let w;for(w=0;w<X.length;w+=1){const N=Ke(u,X,w);g[w]?(g[w].p(N,m),v(g[w],1)):(g[w]=tt(N),g[w].c(),v(g[w],1),g[w].m(o.parentNode,o))}for(oe(),w=X.length;w<g.length;w+=1)x(w);re()}(!$||m[0]&256&&!se(r.src,c=`/assets/controller/${u[8].toLocaleLowerCase()}/left-stick.svg`))&&_(r,"src",c),(!$||m[0]&1024)&&Be(r,"transform","translate("+u[10].x*15+"px, "+u[10].y*15+"px)"),(!$||m[0]&256&&!se(a.src,d=`/assets/controller/${u[8].toLocaleLowerCase()}/right-stick.svg`))&&_(a,"src",d),(!$||m[0]&2048)&&Be(a,"transform","translate("+u[11].x*15+"px, "+u[11].y*15+"px)")},i(u){if(!$){for(let m=0;m<X.length;m+=1)v(g[m]);$=!0}},o(u){g=g.filter(Re);for(let m=0;m<g.length;m+=1)y(g[m]);$=!1},d(u){u&&(h(e),h(n),h(o),h(r),h(k),h(a)),Ye(g,u)}}}function et(l){let e,s,n,o;const r=[Tt,It],c=[];function k(a,d){return a[13][+a[63]]?0:1}return e=k(l),s=c[e]=r[e](l),{c(){s.c(),n=ke()},l(a){s.l(a),n=ke()},m(a,d){c[e].m(a,d),M(a,n,d),o=!0},p(a,d){let $=e;e=k(a),e===$?c[e].p(a,d):(oe(),y(c[$],1,1,()=>{c[$]=null}),re(),s=c[e],s?s.p(a,d):(s=c[e]=r[e](a),s.c()),v(s,1),s.m(n.parentNode,n))},i(a){o||(v(s),o=!0)},o(a){y(s),o=!1},d(a){a&&h(n),c[e].d(a)}}}function It(l){let e,s;return e=new Lt({props:{$$slots:{default:[Ct]},$$scope:{ctx:l}}}),{c(){de(e.$$.fragment)},l(n){pe(e.$$.fragment,n)},m(n,o){be(e,n,o),s=!0},p(n,o){const r={};o[0]&8|o[2]&256&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){s||(v(e.$$.fragment,n),s=!0)},o(n){y(e.$$.fragment,n),s=!1},d(n){_e(e,n)}}}function Tt(l){let e,s;return{c(){e=R("img"),this.h()},l(n){e=D(n,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){se(e.src,s=`/assets/controller/${l[8].toLocaleLowerCase()}/${l[13][+l[63]].toLowerCase()}.svg`)||_(e,"src",s),_(e,"class","button svelte-12i24ru"),_(e,"alt","button")},m(n,o){M(n,e,o)},p(n,o){o[0]&768&&!se(e.src,s=`/assets/controller/${n[8].toLocaleLowerCase()}/${n[13][+n[63]].toLowerCase()}.svg`)&&_(e,"src",s)},i:Se,o:Se,d(n){n&&h(e)}}}function Ct(l){let e=l[3]("settings.gamepad.unknownButton")+"",s;return{c(){s=Me(e)},l(n){s=Ie(n,e)},m(n,o){M(n,s,o)},p(n,o){o[0]&8&&e!==(e=n[3]("settings.gamepad.unknownButton")+"")&&Te(s,e)},d(n){n&&h(s)}}}function tt(l){let e=l[9][parseInt(l[63])],s,n,o=e&&et(l);return{c(){o&&o.c(),s=ke()},l(r){o&&o.l(r),s=ke()},m(r,c){o&&o.m(r,c),M(r,s,c),n=!0},p(r,c){c[0]&512&&(e=r[9][parseInt(r[63])]),e?o?(o.p(r,c),c[0]&512&&v(o,1)):(o=et(r),o.c(),v(o,1),o.m(s.parentNode,s)):o&&(oe(),y(o,1,1,()=>{o=null}),re())},i(r){n||(v(o),n=!0)},o(r){y(o),n=!1},d(r){r&&h(s),o&&o.d(r)}}}function nt(l){let e,s=l[3]("settings.gamepad.button",{values:{index:l[63],name:l[6][+l[63]]}})+"",n,o,r,c;function k(...a){return l[30](l[63],...a)}return r=new De({props:{options:Object.keys(l[13]).map(l[29]),selected:l[6][+l[63]],alt:!0}}),r.$on("change",k),{c(){e=R("label"),n=Me(s),o=H(),de(r.$$.fragment),this.h()},l(a){e=D(a,"LABEL",{for:!0});var d=le(e);n=Ie(d,s),d.forEach(h),o=P(a),pe(r.$$.fragment,a),this.h()},h(){_(e,"for","button-"+l[63])},m(a,d){M(a,e,d),j(e,n),M(a,o,d),be(r,a,d),c=!0},p(a,d){l=a,(!c||d[0]&72)&&s!==(s=l[3]("settings.gamepad.button",{values:{index:l[63],name:l[6][+l[63]]}})+"")&&Te(n,s);const $={};d[0]&64&&($.selected=l[6][+l[63]]),r.$set($)},i(a){c||(v(r.$$.fragment,a),c=!0)},o(a){y(r.$$.fragment,a),c=!1},d(a){a&&(h(e),h(o)),_e(r,a)}}}function lt(l){let e,s='<img src="/assets/controller/virtual_cursor.png" alt="virtual mouse"/>';return{c(){e=R("div"),e.innerHTML=s,this.h()},l(n){e=D(n,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ht(e)!=="svelte-j3z4ev"&&(e.innerHTML=s),this.h()},h(){_(e,"id","virtual-mouse"),_(e,"class","svelte-12i24ru")},m(n,o){M(n,e,o)},d(n){n&&h(e)}}}function Bt(l){let e,s,n,o=l[0]&&We(l),r=l[7]&&!l[0]&&lt();return{c(){o&&o.c(),e=H(),r&&r.c(),s=ke()},l(c){o&&o.l(c),e=P(c),r&&r.l(c),s=ke()},m(c,k){o&&o.m(c,k),M(c,e,k),r&&r.m(c,k),M(c,s,k),n=!0},p(c,k){c[0]?o?(o.p(c,k),k[0]&1&&v(o,1)):(o=We(c),o.c(),v(o,1),o.m(e.parentNode,e)):o&&(oe(),y(o,1,1,()=>{o=null}),re()),c[7]&&!c[0]?r||(r=lt(),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},i(c){n||(v(o),n=!0)},o(c){y(o),n=!1},d(c){c&&(h(e),h(s)),o&&o.d(c),r&&r.d(c)}}}const st=(l,e)=>({value:e.toString(),text:l.id});function Xt(l,e,s){let n,o,r,c,k,a,d,$,X,g,x;K(l,$t,t=>s(3,r=t));let u=null;const m=Z("Generic");K(l,m,t=>s(8,$=t));let w=[],N=null,A=window.innerWidth/2,T=window.innerHeight/2,ee=null,z=0,{gui:G=!1}=e;const C={0:"A",1:"B",2:"X",3:"Y",4:"LeftBumper",5:"RightBumper",6:"LeftTrigger",7:"RightTrigger",8:"Select",9:"Start",10:"Button10",11:"Button11",12:"ArrowUp",13:"ArrowDown",14:"ArrowLeft",15:"ArrowRight"},ae=ze("gamepad.deadzone",.1);K(l,ae,t=>s(4,c=t));const V=ze("gamepad.sensitivity",5);K(l,V,t=>s(5,k=t));const O=Z(C);K(l,O,t=>s(6,a=t));const E=Z({});K(l,E,t=>s(9,X=t));const L=Z(!1);K(l,L,t=>s(7,d=t));const Ee=Z({x:0,y:0});K(l,Ee,t=>s(10,g=t));const ge=Z({x:0,y:0});K(l,ge,t=>s(11,x=t));const $e=Z(null),ue=Z(!1),ie=Z(null);K(l,ie,t=>s(1,n=t));const S=Z([]);K(l,S,t=>s(2,o=t)),gt(()=>{window.addEventListener("gamepadconnected",ye),window.addEventListener("gamepaddisconnected",ve),Le()}),vt(()=>{window.removeEventListener("gamepadconnected",ye),window.removeEventListener("gamepaddisconnected",ve),U()});const Ce=t=>t.includes("Xbox")?"Xbox":t.includes("DualSense")?"Playstation":"Xbox",Le=()=>{N===null&&(N=requestAnimationFrame(I))},U=()=>{N!==null&&(cancelAnimationFrame(N),N=null)},ye=t=>{const b=navigator.getGamepads();S.set(Array.from(b).filter(Boolean)),u===null&&(u=t.gamepad.index,m.set(Ce(t.gamepad.id)),w=new Array(t.gamepad.buttons.length).fill(!1),E.set({}),L.set(!0),He(),Le())},ve=t=>{const b=navigator.getGamepads();S.set(Array.from(b).filter(Boolean)),u===t.gamepad.index&&(u=null,w=[],E.set({}),L.set(!1),ie.set(null),U())},I=()=>{if(u!==null){const t=navigator.getGamepads()[u];t&&ot(t)}N=requestAnimationFrame(I)},Xe=t=>Math.abs(t)<Ae(ae)?0:t,i=t=>{if(!G)switch(t){case"Tab":f();break;case"Shift+Tab":Y();break;case"ArrowUp":te("ArrowUp");break;case"ArrowDown":te("ArrowDown");break;case"ArrowLeft":te("ArrowLeft");break;case"ArrowRight":te("ArrowRight");break;case"Enter":fe();break;case"LeftTrigger":F();break;case"LeftBumper":p();break;case"RightBumper":J();break;case"RightTrigger":window.history.forward();break;case"Space":te(" ");break;default:te(t)}},f=()=>{const t=Array.from(document.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter(B=>!B.hasAttribute("disabled")),b=t.indexOf(document.activeElement);t[(b+1)%t.length].focus()},Y=()=>{const t=Array.from(document.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter(B=>!B.hasAttribute("disabled")),b=t.indexOf(document.activeElement);t[(b-1+t.length)%t.length].focus()},fe=()=>{var t;return(t=document.activeElement)==null?void 0:t.click()},F=()=>window.history.back(),p=()=>{const t=document.elementFromPoint(A,T);if(t)if(t instanceof HTMLInputElement||t instanceof HTMLSelectElement)if(t.focus(),t instanceof HTMLSelectElement){const b=new KeyboardEvent("keydown",{key:" ",code:"Space",keyCode:32,which:32,bubbles:!0});t.dispatchEvent(b);const B=new KeyboardEvent("keyup",{key:" ",code:"Space",keyCode:32,which:32,bubbles:!0});t.dispatchEvent(B)}else setTimeout(()=>{const b=new MouseEvent("mousedown",{view:window,bubbles:!0,cancelable:!0,clientX:A,clientY:T});t.dispatchEvent(b);const B=new MouseEvent("mouseup",{view:window,bubbles:!0,cancelable:!0,clientX:A,clientY:T});t.dispatchEvent(B);const Q=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0,clientX:A,clientY:T});t.dispatchEvent(Q)},100);else{const b=new MouseEvent("mousedown",{view:window,bubbles:!0,cancelable:!0,clientX:A,clientY:T});t.dispatchEvent(b);const B=new MouseEvent("mouseup",{view:window,bubbles:!0,cancelable:!0,clientX:A,clientY:T});t.dispatchEvent(B);const Q=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0,clientX:A,clientY:T});t.dispatchEvent(Q)}},J=()=>{const t=document.elementFromPoint(A,T),b=new MouseEvent("contextmenu",{view:window,bubbles:!0,cancelable:!0,clientX:A,clientY:T});t==null||t.dispatchEvent(b),t instanceof HTMLInputElement&&t.focus()},te=t=>{const b=new KeyboardEvent("keydown",{key:t,code:t,keyCode:W(t),which:W(t),bubbles:!0});document.dispatchEvent(b)},W=t=>({ArrowUp:38,ArrowDown:40,ArrowLeft:37,ArrowRight:39,Enter:13,Tab:9,Circle:79,Square:81,Triangle:84,L1:76,R1:82,L2:90,R2:88,Share:83,Options:80,L3:67,R3:86,PSButton:91,Touchpad:93})[t],ot=t=>{if(t.index!==u)return;const b={};t.buttons.forEach((he,me)=>{b[me]=he.pressed,he.pressed&&!w[me]&&O.subscribe(bt=>{const Pe=bt[me];Pe&&i(Pe)}),w[me]=he.pressed}),E.set(b);const[B,Q,ne,q]=t.axes.map(Xe),ce=Ae(V);if(A=Math.max(0,Math.min(window.innerWidth,A+B*ce)),T=Math.max(0,Math.min(window.innerHeight,T+Q*ce)),G||rt(A,T,B,Q),Ee.set({x:B,y:Q}),ge.set({x:ne,y:q}),q!==0){const he=Ae($e);if(he){const me=je(he);me&&(ue.set(!0),me.scrollTop+=q*ce)}}else ue.set(!1)},rt=(t,b,B,Q)=>{const ne=document.getElementById("virtual-mouse");if(!ne)return;ne.style.left=`${t}px`,ne.style.top=`${b}px`,(B!==0||Q!==0)&&(z=Math.atan2(Q,B)*(180/Math.PI));const q=document.elementFromPoint(t,b),ce=ne.querySelector("img");q&&at(q)?(ce&&!Ae(ue)&&(ce.src="/assets/controller/virtual_cursor_hover.png"),ne.style.transform="translate(0%, 0%)"):(ce&&!Ae(ue)&&(ce.src="/assets/controller/virtual_cursor.png"),ne.style.transform=`translate(0%, 0%) rotate(${z}deg)`),ne.dispatchEvent(new MouseEvent("mousemove",{view:window,bubbles:!0,cancelable:!0,clientX:t,clientY:b})),q?(ee!==q&&(ee==null||ee.dispatchEvent(new MouseEvent("mouseout",{view:window,bubbles:!0,cancelable:!0,clientX:t,clientY:b})),q.dispatchEvent(new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0,clientX:t,clientY:b})),ee=q),q.dispatchEvent(new MouseEvent("mousemove",{view:window,bubbles:!0,cancelable:!0,clientX:t,clientY:b})),$e.set(q)):$e.set(null)},at=t=>["A","BUTTON","INPUT","TEXTAREA","SELECT"].includes(t.tagName)||t.hasAttribute("onclick")||Ne(t),Ne=t=>{const b=window.getComputedStyle(t);return(b.overflowY==="scroll"||b.overflowY==="auto")&&t.scrollHeight>t.clientHeight},je=t=>t?Ne(t)?t:je(t.parentElement):null,Ge=(t,b)=>{O.update(B=>(B[parseInt(b)]=t.detail,B))},it=t=>{u=parseInt(t.detail),He()},He=()=>{if(u!==null){const t=navigator.getGamepads()[u];t&&(ie.set(`${t.id.split("(")[0]}`),m.set(Ce(t.id)),w=new Array(t.buttons.length).fill(!1),E.set({}))}};function ct(t){c=t,ae.set(c)}function ut(t){k=t,V.set(k)}const ft=t=>({value:C[+t],text:C[+t]}),mt=(t,b)=>Ge(b,t.toString()),dt=t=>({value:C[+t],text:C[+t]}),pt=(t,b)=>Ge(b,t.toString());return l.$$set=t=>{"gui"in t&&s(0,G=t.gui)},[G,n,o,r,c,k,a,d,$,X,g,x,m,C,ae,V,O,E,L,Ee,ge,ie,S,Ge,it,ct,ut,ft,mt,dt,pt]}class Vt extends wt{constructor(e){super(),kt(this,e,Xt,Bt,_t,{gui:0},null,[-1,-1,-1])}}export{Vt as G};
