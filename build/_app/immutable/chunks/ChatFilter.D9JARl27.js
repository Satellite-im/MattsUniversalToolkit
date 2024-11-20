import{s as fe,e as D,a as F,w as ee,c as L,b as A,g as T,f as b,l as k,i as V,h as I,p as Y,r as Me,q as De,v as Re,t as O,d as U,j as B,o as le,y as Fe,M as Te,n as x,I as ge,k as Le,H as ue,x as ie,u as qe}from"./scheduler.BSglW4Eu.js";import{S as ce,i as me,c as G,a as W,m as K,g as J,b as P,d as Q,t as y,e as H}from"./index.B6nwG8t1.js";import{S as re,o as te,O as $,p as ne,a as ae,$ as ze,b as Z,U as Oe,C as oe,R as de,q as Ue}from"./Store.RfHT5Hq0.js";import{T as he,e as se}from"./UnderConstruction.svelte_svelte_type_style_lang.g0v0QcCt.js";import{I as Be}from"./Icon.D07Vr-nn.js";import{S as Ve}from"./Spacer.CpkZhbFZ.js";import{M as $e}from"./Modal.Bc3tS4iV.js";import"./Role.svelte_svelte_type_style_lang.2JrFtOp6.js";/* empty css                                               */import{g as ve}from"./entry.BOMIUFY9.js";import{P as Ge}from"./ProfilePictureMany.DtoeGOfs.js";/* empty css                                            */import{P as _e}from"./ProfilePicture.B04odUVO.js";function We(s){let e,l;return e=new Be({props:{icon:s[9]()}}),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p:x,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function Ke(s){let e,l;return{c(){e=D("img"),this.h()},l(t){e=L(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){k(e,"class","img-preview-on-storage svelte-rchqc"),le(e.src,l=s[4].imageThumbnail)||k(e,"src",l),k(e,"alt",s[0])},m(t,r){V(t,e,r)},p(t,r){r&16&&!le(e.src,l=t[4].imageThumbnail)&&k(e,"src",l),r&1&&k(e,"alt",t[0])},i:x,o:x,d(t){t&&b(e)}}}function He(s){let e,l;return e=new he({props:{class:"name",$$slots:{default:[Qe]},$$scope:{ctx:s}}}),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const n={};r&8388625&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function Je(s){let e,l,t,r;return{c(){e=D("input"),this.h()},l(n){e=L(n,"INPUT",{id:!0,type:!0,class:!0}),this.h()},h(){k(e,"id",l="input-"+s[2]),k(e,"type","text"),k(e,"class","svelte-rchqc")},m(n,i){V(n,e,i),ge(e,s[0]),s[19](e),t||(r=[Y(e,"input",s[18]),Y(e,"input",s[10]),Y(e,"blur",s[12]),Y(e,"keydown",s[11])],t=!0)},p(n,i){i&4&&l!==(l="input-"+n[2])&&k(e,"id",l),i&1&&e.value!==n[0]&&ge(e,n[0])},i:x,o:x,d(n){n&&b(e),s[19](null),t=!1,Me(r)}}}function Qe(s){var r;let e,l=(((r=s[4])==null?void 0:r.extension)&&`.${s[4].extension}`)+"",t;return{c(){e=O(s[0]),t=O(l)},l(n){e=U(n,s[0]),t=U(n,l)},m(n,i){V(n,e,i),V(n,t,i)},p(n,i){var f;i&1&&B(e,n[0]),i&16&&l!==(l=(((f=n[4])==null?void 0:f.extension)&&`.${n[4].extension}`)+"")&&B(t,l)},d(n){n&&(b(e),b(t))}}}function Xe(s){var t;let e=ne((t=s[4])==null?void 0:t.size)+"",l;return{c(){l=O(e)},l(r){l=U(r,e)},m(r,n){V(r,l,n)},p(r,n){var i;n&16&&e!==(e=ne((i=r[4])==null?void 0:i.size)+"")&&B(l,e)},d(r){r&&b(l)}}}function be(s){let e,l;return e=new $e({props:{$$slots:{default:[Ye]},$$scope:{ctx:s}}}),e.$on("close",s[13]),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const n={};r&8388625&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function Ye(s){let e,l;return{c(){e=D("img"),this.h()},l(t){e=L(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){k(e,"class","img-preview-on-storage-on-modal svelte-rchqc"),le(e.src,l=s[4].imageThumbnail)||k(e,"src",l),k(e,"alt",s[0])},m(t,r){V(t,e,r)},p(t,r){r&16&&!le(e.src,l=t[4].imageThumbnail)&&k(e,"src",l),r&1&&k(e,"alt",t[0])},d(t){t&&b(e)}}}function Ze(s){let e,l,t,r,n,i,f,h,o,u,c,a,p,_,v,j;const E=[Ke,We],w=[];function N(g,m){var C;return g[3]===te.Image&&((C=g[4])!=null&&C.imageThumbnail)?0:1}t=N(s),r=w[t]=E[t](s),i=new Ve({props:{less:!0}});const q=[Je,He],R=[];function S(g,m){return g[1]===$.Loading?0:1}h=S(s),o=R[h]=q[h](s),c=new he({props:{size:re.Smallest,muted:!0,$$slots:{default:[Xe]},$$scope:{ctx:s}}});let M=s[8]&&!s[6]&&be(s);return{c(){e=D("section"),l=D("div"),r.c(),n=F(),G(i.$$.fragment),f=F(),o.c(),u=F(),G(c.$$.fragment),a=F(),M&&M.c(),p=ee(),this.h()},l(g){e=L(g,"SECTION",{});var m=A(e);l=L(m,"DIV",{"data-cy":!0,class:!0});var C=A(l);r.l(C),n=T(C),W(i.$$.fragment,C),f=T(C),o.l(C),u=T(C),W(c.$$.fragment,C),C.forEach(b),m.forEach(b),a=T(g),M&&M.l(g),p=ee(),this.h()},h(){k(l,"data-cy",s[5]),k(l,"class","filesitem svelte-rchqc")},m(g,m){V(g,e,m),I(e,l),w[t].m(l,null),I(l,n),K(i,l,null),I(l,f),R[h].m(l,null),I(l,u),K(c,l,null),V(g,a,m),M&&M.m(g,m),V(g,p,m),_=!0,v||(j=[Y(l,"contextmenu",s[17]),Y(l,"click",s[20])],v=!0)},p(g,[m]){let C=t;t=N(g),t===C?w[t].p(g,m):(J(),P(w[C],1,1,()=>{w[C]=null}),Q(),r=w[t],r?r.p(g,m):(r=w[t]=E[t](g),r.c()),y(r,1),r.m(l,n));let d=h;h=S(g),h===d?R[h].p(g,m):(J(),P(R[d],1,1,()=>{R[d]=null}),Q(),o=R[h],o?o.p(g,m):(o=R[h]=q[h](g),o.c()),y(o,1),o.m(l,u));const z={};m&8388624&&(z.$$scope={dirty:m,ctx:g}),c.$set(z),(!_||m&32)&&k(l,"data-cy",g[5]),g[8]&&!g[6]?M?(M.p(g,m),m&320&&y(M,1)):(M=be(g),M.c(),y(M,1),M.m(p.parentNode,p)):M&&(J(),P(M,1,1,()=>{M=null}),Q())},i(g){_||(y(r),y(i.$$.fragment,g),y(o),y(c.$$.fragment,g),y(M),_=!0)},o(g){P(r),P(i.$$.fragment,g),P(o),P(c.$$.fragment,g),P(M),_=!1},d(g){g&&(b(e),b(a),b(p)),w[t].d(),H(i),R[h].d(),H(c),M&&M.d(g),v=!1,Me(j)}}}function xe(s,e,l){let{itemId:t}=e,{kind:r=te.File}=e,{info:n}=e,{name:i=n.displayName}=e,{isRenaming:f=$.Initial}=e,{hook:h=""}=e,{avoidOpenImageModal:o=!1}=e,{onRename:u=m=>Promise.resolve(!0)}=e,c=!1,a=i,p=!1,_;De();let v=!1;function j(){switch(r){case te.File:return ae.Document;case te.Folder:return ae.Folder;case te.Image:return ae.Beaker}}function E(m){const C=m.target;l(0,i=C.value)}Re(()=>{_&&_.focus()});async function w(m){if(m.key==="Escape"){v=!0,await u(i,!0),l(1,f=$.Initial);return}if(m.key==="Enter"){if(v=!0,!await u(i,!1)){l(0,i=a),l(1,f=$.Initial);return}l(1,f=$.Initial)}}async function N(){v||await u(i,v)||l(0,i=a),l(1,f=$.Initial),v=!1}function q(){l(8,p=!1)}function R(m){Fe.call(this,s,m)}function S(){i=this.value,l(0,i),l(1,f),l(16,a),l(15,c),l(7,_)}function M(m){Te[m?"unshift":"push"](()=>{_=m,l(7,_)})}const g=m=>{r===te.Image&&(n!=null&&n.imageThumbnail)&&l(8,p=!0)};return s.$$set=m=>{"itemId"in m&&l(2,t=m.itemId),"kind"in m&&l(3,r=m.kind),"info"in m&&l(4,n=m.info),"name"in m&&l(0,i=m.name),"isRenaming"in m&&l(1,f=m.isRenaming),"hook"in m&&l(5,h=m.hook),"avoidOpenImageModal"in m&&l(6,o=m.avoidOpenImageModal),"onRename"in m&&l(14,u=m.onRename)},s.$$.update=()=>{s.$$.dirty&98435&&(f===$.Success?(l(15,c=!1),l(16,a=i),l(1,f=$.Initial)):f===$.Error?(l(15,c=!1),l(0,i=a),l(1,f=$.Initial)):f===$.Loading&&!c&&_&&(_.focus(),l(15,c=!0),_.setSelectionRange(0,_.value.length))),s.$$.dirty&2&&f!==$.Loading&&l(15,c=!1)},[i,f,t,r,n,h,o,_,p,j,E,w,N,q,u,c,a,R,S,M,g]}class yt extends ce{constructor(e){super(),me(this,e,xe,Ze,fe,{itemId:2,kind:3,info:4,name:0,isRenaming:1,hook:5,avoidOpenImageModal:6,onRename:14})}}function et(s){let e=ne(s[2])+"",l;return{c(){l=O(e)},l(t){l=U(t,e)},m(t,r){V(t,l,r)},p(t,r){r&4&&e!==(e=ne(t[2])+"")&&B(l,e)},d(t){t&&b(l)}}}function tt(s){let e,l,t,r,n,i,f,h,o,u,c,a;return n=new Ve({props:{less:!0}}),o=new he({props:{size:re.Smallest,muted:!0,class:"name",$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){e=D("div"),l=D("img"),r=F(),G(n.$$.fragment),i=F(),f=D("input"),h=F(),G(o.$$.fragment),this.h()},l(p){e=L(p,"DIV",{class:!0});var _=A(e);l=L(_,"IMG",{class:!0,src:!0,alt:!0}),r=T(_),W(n.$$.fragment,_),i=T(_),f=L(_,"INPUT",{class:!0}),h=T(_),W(o.$$.fragment,_),_.forEach(b),this.h()},h(){k(l,"class","preview svelte-12ebybk"),le(l.src,t=s[0])||k(l,"src",t),k(l,"alt","preview"),k(f,"class","img_text svelte-12ebybk"),f.value=s[1],k(e,"class","image-file svelte-12ebybk")},m(p,_){V(p,e,_),I(e,l),I(e,r),K(n,e,null),I(e,i),I(e,f),I(e,h),K(o,e,null),u=!0,c||(a=Y(e,"click",s[3]),c=!0)},p(p,[_]){(!u||_&1&&!le(l.src,t=p[0]))&&k(l,"src",t),(!u||_&2&&f.value!==p[1])&&(f.value=p[1]);const v={};_&68&&(v.$$scope={dirty:_,ctx:p}),o.$set(v)},i(p){u||(y(n.$$.fragment,p),y(o.$$.fragment,p),u=!0)},o(p){P(n.$$.fragment,p),P(o.$$.fragment,p),u=!1},d(p){p&&b(e),H(n),H(o),c=!1,a()}}}function lt(s,e,l){let t;Le(s,ze,o=>l(4,t=o));const r=De();function n(o){r("click",o)}let{ImgSource:i=""}=e,{name:f=t("files.unknown")}=e,{filesize:h=9821239}=e;return s.$$set=o=>{"ImgSource"in o&&l(0,i=o.ImgSource),"name"in o&&l(1,f=o.name),"filesize"in o&&l(2,h=o.filesize)},[i,f,h,n]}class Et extends ce{constructor(e){super(),me(this,e,lt,tt,fe,{ImgSource:0,name:1,filesize:2})}}function ke(s,e,l){const t=s.slice();return t[18]=e[l][0],t[19]=e[l][1],t[20]=e[l][2],t}function we(s,e,l){const t=s.slice();return t[23]=e[l],t}function Ie(s,e,l){const t=s.slice();return t[26]=e[l][0],t[18]=e[l][1],t}function ye(s){let e,l,t,r=s[2].length>0&&Ee(s),n=s[1].length>0&&je(s);return{c(){e=D("div"),r&&r.c(),l=F(),n&&n.c(),this.h()},l(i){e=L(i,"DIV",{class:!0});var f=A(e);r&&r.l(f),l=T(f),n&&n.l(f),f.forEach(b),this.h()},h(){k(e,"class","searchbar-dropdown svelte-14vaj2w")},m(i,f){V(i,e,f),r&&r.m(e,null),I(e,l),n&&n.m(e,null),t=!0},p(i,f){i[2].length>0?r?(r.p(i,f),f&4&&y(r,1)):(r=Ee(i),r.c(),y(r,1),r.m(e,l)):r&&(J(),P(r,1,1,()=>{r=null}),Q()),i[1].length>0?n?(n.p(i,f),f&2&&y(n,1)):(n=je(i),n.c(),y(n,1),n.m(e,null)):n&&(J(),P(n,1,1,()=>{n=null}),Q())},i(i){t||(y(r),y(n),t=!0)},o(i){P(r),P(n),t=!1},d(i){i&&b(e),r&&r.d(),n&&n.d()}}}function Ee(s){let e,l=s[7]("generic.users")+"",t,r,n,i,f,h=se(s[2]),o=[];for(let a=0;a<h.length;a+=1)o[a]=Se(Ie(s,h,a));const u=a=>P(o[a],1,1,()=>{o[a]=null});let c=s[1].length>0&&Ce();return{c(){e=D("div"),t=O(l),r=F();for(let a=0;a<o.length;a+=1)o[a].c();n=F(),c&&c.c(),i=ee(),this.h()},l(a){e=L(a,"DIV",{class:!0});var p=A(e);t=U(p,l),p.forEach(b),r=T(a);for(let _=0;_<o.length;_+=1)o[_].l(a);n=T(a),c&&c.l(a),i=ee(),this.h()},h(){k(e,"class","searchbar-entry-label svelte-14vaj2w")},m(a,p){V(a,e,p),I(e,t),V(a,r,p);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(a,p);V(a,n,p),c&&c.m(a,p),V(a,i,p),f=!0},p(a,p){if((!f||p&128)&&l!==(l=a[7]("generic.users")+"")&&B(t,l),p&773){h=se(a[2]);let _;for(_=0;_<h.length;_+=1){const v=Ie(a,h,_);o[_]?(o[_].p(v,p),y(o[_],1)):(o[_]=Se(v),o[_].c(),y(o[_],1),o[_].m(n.parentNode,n))}for(J(),_=h.length;_<o.length;_+=1)u(_);Q()}a[1].length>0?c||(c=Ce(),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},i(a){if(!f){for(let p=0;p<h.length;p+=1)y(o[p]);f=!0}},o(a){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)P(o[p]);f=!1},d(a){a&&(b(e),b(r),b(n),b(i)),ue(o,a),c&&c.d(a)}}}function Se(s){let e,l,t,r,n,i,f=s[26].name.substring(0,s[0].length)+"",h,o,u,c=s[26].name.substring(s[0].length)+"",a,p,_,v;t=new _e({props:{id:s[26].key,typing:s[8](s[26]),image:s[26].profile.photo.image,status:s[26].profile.status,size:re.Medium,loading:pe,frame:s[26].profile.photo.frame}});function j(){return s[13](s[18],s[26])}return{c(){e=D("div"),l=D("div"),G(t.$$.fragment),r=F(),n=D("span"),i=D("span"),h=O(f),o=F(),u=D("span"),a=O(c),this.h()},l(E){e=L(E,"DIV",{class:!0,role:!0});var w=A(e);l=L(w,"DIV",{class:!0});var N=A(l);W(t.$$.fragment,N),N.forEach(b),r=T(w),n=L(w,"SPAN",{class:!0});var q=A(n);i=L(q,"SPAN",{class:!0});var R=A(i);h=U(R,f),R.forEach(b),o=T(q),u=L(q,"SPAN",{class:!0});var S=A(u);a=U(S,c),S.forEach(b),q.forEach(b),w.forEach(b),this.h()},h(){k(l,"class","profile-picture-wrap svelte-14vaj2w"),k(i,"class","highlight-search-typed-chars svelte-14vaj2w"),k(u,"class","remaining-match-searc"),k(n,"class","entry-title svelte-14vaj2w"),k(e,"class","searchbar-entry svelte-14vaj2w"),k(e,"role","none")},m(E,w){V(E,e,w),I(e,l),K(t,l,null),I(e,r),I(e,n),I(n,i),I(i,h),I(n,o),I(n,u),I(u,a),p=!0,_||(v=Y(e,"click",j),_=!0)},p(E,w){s=E;const N={};w&4&&(N.id=s[26].key),w&4&&(N.typing=s[8](s[26])),w&4&&(N.image=s[26].profile.photo.image),w&4&&(N.status=s[26].profile.status),w&4&&(N.frame=s[26].profile.photo.frame),t.$set(N),(!p||w&5)&&f!==(f=s[26].name.substring(0,s[0].length)+"")&&B(h,f),(!p||w&5)&&c!==(c=s[26].name.substring(s[0].length)+"")&&B(a,c)},i(E){p||(y(t.$$.fragment,E),p=!0)},o(E){P(t.$$.fragment,E),p=!1},d(E){E&&b(e),H(t),_=!1,v()}}}function Ce(s){let e;return{c(){e=D("div"),this.h()},l(l){e=L(l,"DIV",{class:!0}),A(e).forEach(b),this.h()},h(){k(e,"class","border svelte-14vaj2w")},m(l,t){V(l,e,t)},d(l){l&&b(e)}}}function je(s){let e,l=s[7]("generic.groups")+"",t,r,n,i,f=se(s[1]),h=[];for(let u=0;u<f.length;u+=1)h[u]=Pe(ke(s,f,u));const o=u=>P(h[u],1,1,()=>{h[u]=null});return{c(){e=D("div"),t=O(l),r=F();for(let u=0;u<h.length;u+=1)h[u].c();n=ee(),this.h()},l(u){e=L(u,"DIV",{class:!0});var c=A(e);t=U(c,l),c.forEach(b),r=T(u);for(let a=0;a<h.length;a+=1)h[a].l(u);n=ee(),this.h()},h(){k(e,"class","searchbar-entry-label svelte-14vaj2w")},m(u,c){V(u,e,c),I(e,t),V(u,r,c);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(u,c);V(u,n,c),i=!0},p(u,c){if((!i||c&128)&&l!==(l=u[7]("generic.groups")+"")&&B(t,l),c&835){f=se(u[1]);let a;for(a=0;a<f.length;a+=1){const p=ke(u,f,a);h[a]?(h[a].p(p,c),y(h[a],1)):(h[a]=Pe(p),h[a].c(),y(h[a],1),h[a].m(n.parentNode,n))}for(J(),a=f.length;a<h.length;a+=1)o(a);Q()}},i(u){if(!i){for(let c=0;c<f.length;c+=1)y(h[c]);i=!0}},o(u){h=h.filter(Boolean);for(let c=0;c<h.length;c+=1)P(h[c]);i=!1},d(u){u&&(b(e),b(r),b(n)),ue(h,u)}}}function st(s){let e,l;return e=new Ge({props:{users:s[18].users.map(s[14])}}),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const n={};r&66&&(n.users=t[18].users.map(t[14])),e.$set(n)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function rt(s){let e,l;return e=new _e({props:{typing:s[18].typing_indicator.size>0,image:s[6][s[18].users[0]].profile.photo.image,status:s[6][s[18].users[0]].profile.status,size:re.Medium,loading:pe,id:s[6][s[18].users[0]].key,frame:s[6][s[18].users[0]].profile.photo.frame}}),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const n={};r&2&&(n.typing=t[18].typing_indicator.size>0),r&66&&(n.image=t[6][t[18].users[0]].profile.photo.image),r&66&&(n.status=t[6][t[18].users[0]].profile.status),r&66&&(n.id=t[6][t[18].users[0]].key),r&66&&(n.frame=t[6][t[18].users[0]].profile.photo.frame),e.$set(n)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function nt(s){let e,l=s[19]+"",t;return{c(){e=D("span"),t=O(l),this.h()},l(r){e=L(r,"SPAN",{class:!0});var n=A(e);t=U(n,l),n.forEach(b),this.h()},h(){k(e,"class","entry-title svelte-14vaj2w")},m(r,n){V(r,e,n),I(e,t)},p(r,n){n&2&&l!==(l=r[19]+"")&&B(t,l)},d(r){r&&b(e)}}}function it(s){let e,l,t=s[19].substring(0,s[0].length)+"",r,n,i,f=s[19].substring(s[0].length)+"",h;return{c(){e=D("span"),l=D("span"),r=O(t),n=F(),i=D("span"),h=O(f),this.h()},l(o){e=L(o,"SPAN",{class:!0});var u=A(e);l=L(u,"SPAN",{class:!0});var c=A(l);r=U(c,t),c.forEach(b),n=T(u),i=L(u,"SPAN",{class:!0});var a=A(i);h=U(a,f),a.forEach(b),u.forEach(b),this.h()},h(){k(l,"class","highlight-search-typed-chars svelte-14vaj2w"),k(i,"class","remaining-match-search"),k(e,"class","entry-title svelte-14vaj2w")},m(o,u){V(o,e,u),I(e,l),I(l,r),I(e,n),I(e,i),I(i,h)},p(o,u){u&3&&t!==(t=o[19].substring(0,o[0].length)+"")&&B(r,t),u&3&&f!==(f=o[19].substring(o[0].length)+"")&&B(h,f)},d(o){o&&b(e)}}}function Ne(s){let e,l,t,r,n,i,f=s[23].name.substring(0,s[0].length)+"",h,o,u,c=s[23].name.substring(s[0].length)+"",a,p,_;return t=new _e({props:{id:s[23].key,typing:s[8](s[23]),image:s[23].profile.photo.image,status:s[23].profile.status,size:re.Medium,loading:pe,frame:s[23].profile.photo.frame}}),{c(){e=D("div"),l=D("div"),G(t.$$.fragment),r=F(),n=D("span"),i=D("span"),h=O(f),o=F(),u=D("span"),a=O(c),p=F(),this.h()},l(v){e=L(v,"DIV",{class:!0});var j=A(e);l=L(j,"DIV",{class:!0});var E=A(l);W(t.$$.fragment,E),E.forEach(b),r=T(j),n=L(j,"SPAN",{class:!0});var w=A(n);i=L(w,"SPAN",{class:!0});var N=A(i);h=U(N,f),N.forEach(b),o=T(w),u=L(w,"SPAN",{class:!0});var q=A(u);a=U(q,c),q.forEach(b),w.forEach(b),p=T(j),j.forEach(b),this.h()},h(){k(l,"class","profile-picture-wrap svelte-14vaj2w"),k(i,"class","highlight-search-typed-chars svelte-14vaj2w"),k(u,"class","remaining-match-searc"),k(n,"class","entry-title svelte-14vaj2w"),k(e,"class","searchbar-entry-group-user svelte-14vaj2w")},m(v,j){V(v,e,j),I(e,l),K(t,l,null),I(e,r),I(e,n),I(n,i),I(i,h),I(n,o),I(n,u),I(u,a),I(e,p),_=!0},p(v,j){const E={};j&2&&(E.id=v[23].key),j&2&&(E.typing=v[8](v[23])),j&2&&(E.image=v[23].profile.photo.image),j&2&&(E.status=v[23].profile.status),j&2&&(E.frame=v[23].profile.photo.frame),t.$set(E),(!_||j&3)&&f!==(f=v[23].name.substring(0,v[0].length)+"")&&B(h,f),(!_||j&3)&&c!==(c=v[23].name.substring(v[0].length)+"")&&B(a,c)},i(v){_||(y(t.$$.fragment,v),_=!0)},o(v){P(t.$$.fragment,v),_=!1},d(v){v&&b(e),H(t)}}}function Pe(s){let e,l,t,r,n,i,f,h,o,u,c,a,p;const _=[rt,st],v=[];function j(g,m){return g[18].users.length===2?0:1}r=j(s),n=v[r]=_[r](s);function E(g,m){return m&3&&(f=null),f==null&&(f=!!g[19].startsWith(g[0].toLocaleLowerCase())),f?it:nt}let w=E(s,-1),N=w(s);function q(){return s[15](s[18])}let R=se(s[20]),S=[];for(let g=0;g<R.length;g+=1)S[g]=Ne(we(s,R,g));const M=g=>P(S[g],1,1,()=>{S[g]=null});return{c(){e=D("div"),l=D("div"),t=D("div"),n.c(),i=F(),N.c(),h=F(),o=D("div");for(let g=0;g<S.length;g+=1)S[g].c();u=F(),this.h()},l(g){e=L(g,"DIV",{class:!0});var m=A(e);l=L(m,"DIV",{class:!0,role:!0});var C=A(l);t=L(C,"DIV",{class:!0});var d=A(t);n.l(d),d.forEach(b),i=T(C),N.l(C),C.forEach(b),h=T(m),o=L(m,"DIV",{class:!0});var z=A(o);for(let X=0;X<S.length;X+=1)S[X].l(z);z.forEach(b),u=T(m),m.forEach(b),this.h()},h(){k(t,"class","profile-picture-wrap svelte-14vaj2w"),k(l,"class","group svelte-14vaj2w"),k(l,"role","none"),k(o,"class","group-users svelte-14vaj2w"),k(e,"class","searchbar-entry searchbar-entry-group svelte-14vaj2w")},m(g,m){V(g,e,m),I(e,l),I(l,t),v[r].m(t,null),I(l,i),N.m(l,null),I(e,h),I(e,o);for(let C=0;C<S.length;C+=1)S[C]&&S[C].m(o,null);I(e,u),c=!0,a||(p=Y(l,"click",q),a=!0)},p(g,m){s=g;let C=r;if(r=j(s),r===C?v[r].p(s,m):(J(),P(v[C],1,1,()=>{v[C]=null}),Q(),n=v[r],n?n.p(s,m):(n=v[r]=_[r](s),n.c()),y(n,1),n.m(t,null)),w===(w=E(s,m))&&N?N.p(s,m):(N.d(1),N=w(s),N&&(N.c(),N.m(l,null))),m&259){R=se(s[20]);let d;for(d=0;d<R.length;d+=1){const z=we(s,R,d);S[d]?(S[d].p(z,m),y(S[d],1)):(S[d]=Ne(z),S[d].c(),y(S[d],1),S[d].m(o,null))}for(J(),d=R.length;d<S.length;d+=1)M(d);Q()}},i(g){if(!c){y(n);for(let m=0;m<R.length;m+=1)y(S[m]);c=!0}},o(g){P(n),S=S.filter(Boolean);for(let m=0;m<S.length;m+=1)P(S[m]);c=!1},d(g){g&&b(e),v[r].d(),N.d(),ue(S,g),a=!1,p()}}}function at(s){let e,l,t=(s[2].length>0||s[1].length>0)&&ye(s);return{c(){t&&t.c(),e=ee()},l(r){t&&t.l(r),e=ee()},m(r,n){t&&t.m(r,n),V(r,e,n),l=!0},p(r,[n]){r[2].length>0||r[1].length>0?t?(t.p(r,n),n&6&&y(t,1)):(t=ye(r),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(J(),P(t,1,1,()=>{t=null}),Q())},i(r){l||(y(t),l=!0)},o(r){P(t),l=!1},d(r){r&&b(e),t&&t.d(r)}}}let pe=!1;function ot(s,e,l){let t,r,n,i,f=x,h=()=>(f(),f=ie(t,d=>l(12,i=d)),t),o,u=x,c=()=>(u(),u=ie(n,d=>l(16,o=d)),n),a,p=x,_=()=>(p(),p=ie(r,d=>l(6,a=d)),r),v;Le(s,ze,d=>l(7,v=d)),s.$$.on_destroy.push(()=>f()),s.$$.on_destroy.push(()=>u()),s.$$.on_destroy.push(()=>p());let{filter:j}=e,E=[],w=[];function N(){j?(l(1,E=i.filter(d=>d.kind==oe.Group).map(d=>[d,S(d),d.users.map(z=>a[z]).filter(z=>z.name.toLocaleLowerCase().startsWith(j.toLocaleLowerCase()))]).filter(d=>d[1].toLocaleLowerCase().startsWith(j.toLocaleLowerCase())||d[2].length>0)),l(2,w=o.filter(d=>d.name.toLocaleLowerCase().startsWith(j.toLocaleLowerCase())).map(d=>[d,i.find(z=>z.kind==oe.DirectMessage&&z.users[0]===d.key)]))):(l(1,E=[]),l(2,w=[]))}function q(){w.length>0?M(w[0][1],w[0][0]):E.length>0&&M(E[0][0],void 0)}function R(d){let z=i.find(X=>X.kind===oe.DirectMessage&&X.users[0]===d.key);return z&&z.typing_indicator.has(d.key)}function S(d){return d.name?d.name:d.users.map(z=>Z.getUser(z)).map(z=>qe(z).name).join(", ")}async function M(d,z){if(l(0,j=""),N(),d!==void 0)Z.setActiveChat(d);else if(z!==void 0){let X=Z.getChatForUser(z.key);X?(Z.setActiveChat(X),ve(de.Chat)):(await Ue.createConversation(z)).onSuccess(Ae=>{Z.setActiveChat(Ae),ve(de.Chat)})}}const g=(d,z)=>M(d,z),m=d=>a[d],C=d=>M(d,void 0);return s.$$set=d=>{"filter"in d&&l(0,j=d.filter)},s.$$.update=()=>{s.$$.dirty&4096&&_(l(4,r=Z.getUsersLookup(i.map(d=>d.users).flat())))},h(l(5,t=Oe.state.chats)),c(l(3,n=Z.getUsers(Z.state.friends))),[j,E,w,n,r,t,a,v,R,M,N,q,i,g,m,C]}class St extends ce{constructor(e){super(),me(this,e,ot,at,fe,{filter:0,filter_chat:10,select_first:11})}get filter_chat(){return this.$$.ctx[10]}get select_first(){return this.$$.ctx[11]}}export{St as C,yt as F,Et as I};
