import{s as ne,e as z,a as d,c as B,b as M,f as E,g as h,m as T,J as Y,i as re,h as p,n as b}from"../chunks/scheduler.DMQQ9JCZ.js";import{S as se,i as ae,d as o,e as i,m as f,t as l,a as c,f as m}from"../chunks/index.BldGkFwo.js";import{A as Z,x as oe}from"../chunks/index.giW2DIm4.js";import{B as ee}from"../chunks/Icon.B0NuvYgj.js";import{S as $e}from"../chunks/Select.CrfTLC9t.js";import{S as U}from"../chunks/Switch.D3EOqQt-.js";/* empty css                                                       */import"../chunks/Transaction.svelte_svelte_type_style_lang.DvMjYLYX.js";import{S as P}from"../chunks/SettingSection.dEco0Zkd.js";import"../chunks/entry.DirsPGBA.js";function ie($){let e,n,t,a;return{c(){e=z("div"),n=z("div"),t=d(),a=z("div"),this.h()},l(u){e=B(u,"DIV",{class:!0});var g=M(e);n=B(g,"DIV",{class:!0}),M(n).forEach(E),t=h(g),a=B(g,"DIV",{class:!0,style:!0}),M(a).forEach(E),g.forEach(E),this.h()},h(){T(n,"class","meter svelte-1x8f20l"),T(a,"class","meter-mask svelte-1x8f20l"),Y(a,"width",100-$[0]+"%"),T(e,"class","meter-container svelte-1x8f20l")},m(u,g){re(u,e,g),p(e,n),p(e,t),p(e,a)},p(u,[g]){g&1&&Y(a,"width",100-u[0]+"%")},i:b,o:b,d(u){u&&E(e)}}}function fe($,e,n){let{percent:t=0}=e;return $.$$set=a=>{"percent"in a&&n(0,t=a.percent)},[t]}class te extends se{constructor(e){super(),ae(this,e,fe,ie,ne,{percent:0})}}function le($){let e,n;return e=new $e({props:{options:[{text:"Default",value:"default"}]}}),{c(){o(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p:b,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function ce($){let e,n;return e=new $e({props:{options:[{text:"Default",value:"default"}]}}),{c(){o(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p:b,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function me($){let e,n;return e=new U({props:{on:!0}}),{c(){o(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p:b,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function ue($){let e,n;return e=new U({}),{c(){o(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function pe($){let e,n;return e=new U({props:{on:!0}}),{c(){o(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p:b,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function ge($){let e,n;return e=new U({props:{on:!0}}),{c(){o(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p:b,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function de($){let e,n;return e=new U({props:{on:!0}}),{c(){o(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p:b,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function he($){let e,n,t,a,u,g,V,H,_,J,w,k,L,A,O,v,W,S,j,D,F,I,G,x,q;return n=new P({props:{name:"Input Device",description:"Select your input device, this is usually your microphone.",$$slots:{default:[le]},$$scope:{ctx:$}}}),u=new ee({props:{text:"Test",small:!0,appearance:Z.Alt}}),V=new te({props:{percent:78}}),_=new P({props:{name:"Output Device",description:"Select your output device, this is usually your headphones or speakers.",$$slots:{default:[ce]},$$scope:{ctx:$}}}),k=new ee({props:{text:"Test",small:!0,appearance:Z.Alt}}),A=new te({props:{percent:25}}),v=new P({props:{name:"Echo Cancellation",description:"Helps minimize feedback from your headphones/speakers into your microphone.",$$slots:{default:[me]},$$scope:{ctx:$}}}),S=new P({props:{name:"Interface Sounds",description:"Play sounds when interacting with UI elements.",$$slots:{default:[ue]},$$scope:{ctx:$}}}),D=new P({props:{name:"Control Sounds",description:"When enabled you will hear a sound when turning controls on or off, such as muting and unmuting.",$$slots:{default:[pe]},$$scope:{ctx:$}}}),I=new P({props:{name:"Message Sounds",description:"Play a notification sound when a new message is recieved.",$$slots:{default:[ge]},$$scope:{ctx:$}}}),x=new P({props:{name:"Call Timer",description:"Show the duration of an active call in the UI.",$$slots:{default:[de]},$$scope:{ctx:$}}}),{c(){e=z("div"),o(n.$$.fragment),t=d(),a=z("div"),o(u.$$.fragment),g=d(),o(V.$$.fragment),H=d(),o(_.$$.fragment),J=d(),w=z("div"),o(k.$$.fragment),L=d(),o(A.$$.fragment),O=d(),o(v.$$.fragment),W=d(),o(S.$$.fragment),j=d(),o(D.$$.fragment),F=d(),o(I.$$.fragment),G=d(),o(x.$$.fragment),this.h()},l(r){e=B(r,"DIV",{id:!0,class:!0});var s=M(e);i(n.$$.fragment,s),t=h(s),a=B(s,"DIV",{class:!0});var C=M(a);i(u.$$.fragment,C),g=h(C),i(V.$$.fragment,C),C.forEach(E),H=h(s),i(_.$$.fragment,s),J=h(s),w=B(s,"DIV",{class:!0});var y=M(w);i(k.$$.fragment,y),L=h(y),i(A.$$.fragment,y),y.forEach(E),O=h(s),i(v.$$.fragment,s),W=h(s),i(S.$$.fragment,s),j=h(s),i(D.$$.fragment,s),F=h(s),i(I.$$.fragment,s),G=h(s),i(x.$$.fragment,s),s.forEach(E),this.h()},h(){T(a,"class","flex-row"),T(w,"class","flex-row"),T(e,"id","page"),T(e,"class","svelte-hloztb")},m(r,s){re(r,e,s),f(n,e,null),p(e,t),p(e,a),f(u,a,null),p(a,g),f(V,a,null),p(e,H),f(_,e,null),p(e,J),p(e,w),f(k,w,null),p(w,L),f(A,w,null),p(e,O),f(v,e,null),p(e,W),f(S,e,null),p(e,j),f(D,e,null),p(e,F),f(I,e,null),p(e,G),f(x,e,null),q=!0},p(r,[s]){const C={};s&1&&(C.$$scope={dirty:s,ctx:r}),n.$set(C);const y={};s&1&&(y.$$scope={dirty:s,ctx:r}),_.$set(y);const K={};s&1&&(K.$$scope={dirty:s,ctx:r}),v.$set(K);const N={};s&1&&(N.$$scope={dirty:s,ctx:r}),S.$set(N);const Q={};s&1&&(Q.$$scope={dirty:s,ctx:r}),D.$set(Q);const R={};s&1&&(R.$$scope={dirty:s,ctx:r}),I.$set(R);const X={};s&1&&(X.$$scope={dirty:s,ctx:r}),x.$set(X)},i(r){q||(l(n.$$.fragment,r),l(u.$$.fragment,r),l(V.$$.fragment,r),l(_.$$.fragment,r),l(k.$$.fragment,r),l(A.$$.fragment,r),l(v.$$.fragment,r),l(S.$$.fragment,r),l(D.$$.fragment,r),l(I.$$.fragment,r),l(x.$$.fragment,r),q=!0)},o(r){c(n.$$.fragment,r),c(u.$$.fragment,r),c(V.$$.fragment,r),c(_.$$.fragment,r),c(k.$$.fragment,r),c(A.$$.fragment,r),c(v.$$.fragment,r),c(S.$$.fragment,r),c(D.$$.fragment,r),c(I.$$.fragment,r),c(x.$$.fragment,r),q=!1},d(r){r&&E(e),m(n),m(u),m(V),m(_),m(k),m(A),m(v),m(S),m(D),m(I),m(x)}}}function _e($){return oe(),[]}class Ae extends se{constructor(e){super(),ae(this,e,_e,he,ne,{})}}export{Ae as component};
