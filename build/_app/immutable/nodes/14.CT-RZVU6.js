import{s as re,e as L,a as C,c as z,b as J,f as V,g as k,l as O,V as ge,i as ce,h as S,n as ae,E as we,k as pe,K as me,u as ve,M as Se,v as Ie}from"../chunks/scheduler.BSglW4Eu.js";import{S as ue,i as le,c as $,a as p,m,t as v,b as h,e as _}from"../chunks/index.B6nwG8t1.js";import{A as he,$ as _e,b as W,a as be,f as R}from"../chunks/Store.CAnDWkbN.js";import{B as De,I as Me}from"../chunks/Icon.CJ8nfAHn.js";import"../chunks/UnderConstruction.svelte_svelte_type_style_lang.Bkqzs6yL.js";import{S as de}from"../chunks/Select.B8HmuENl.js";import{S as ee}from"../chunks/Switch.BjuaYvPF.js";/* empty css                                                       */import"../chunks/Role.svelte_svelte_type_style_lang.BMBp0CtF.js";import"../chunks/entry.DTrFiGNQ.js";/* empty css                                                    */import{S as G}from"../chunks/SettingSection.B32kO1DS.js";function Ee(s){let e,n,t,a;return{c(){e=L("div"),n=L("div"),t=C(),a=L("div"),this.h()},l(r){e=z(r,"DIV",{class:!0});var d=J(e);n=z(d,"DIV",{class:!0}),J(n).forEach(V),t=k(d),a=z(d,"DIV",{class:!0,style:!0}),J(a).forEach(V),d.forEach(V),this.h()},h(){O(n,"class","meter svelte-1vg91qr"),O(a,"class","meter-mask svelte-1vg91qr"),ge(a,"width",100-s[0]+"%"),O(e,"class","meter-container svelte-1vg91qr")},m(r,d){ce(r,e,d),S(e,n),S(e,t),S(e,a)},p(r,[d]){d&1&&ge(a,"width",100-r[0]+"%")},i:ae,o:ae,d(r){r&&V(e)}}}function Ce(s,e,n){let{percent:t=0}=e;return s.$$set=a=>{"percent"in a&&n(0,t=a.percent)},[t]}class $e extends ue{constructor(e){super(),le(this,e,Ce,Ee,re,{percent:0})}}function ke(s){let e,n;return e=new Me({props:{icon:be.Beaker,alt:!0}}),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p:ae,i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function Te(s){let e,n,t="",a,r,d;return r=new De({props:{text:s[1]("settings.audio.testVideo"),appearance:he.Primary,$$slots:{default:[ke]},$$scope:{ctx:s}}}),r.$on("click",s[6]),{c(){e=L("div"),n=L("video"),n.innerHTML=t,a=C(),$(r.$$.fragment),this.h()},l(u){e=z(u,"DIV",{class:!0});var D=J(e);n=z(D,"VIDEO",{id:!0,class:!0,"data-svelte-h":!0}),we(n)!=="svelte-13vbdd"&&(n.innerHTML=t),a=k(D),p(r.$$.fragment,D),D.forEach(V),this.h()},h(){n.autoplay=!0,O(n,"id","test"),n.muted=!0,O(n,"class","svelte-xkmucc"),O(e,"class","video-preview svelte-xkmucc")},m(u,D){ce(u,e,D),S(e,n),s[5](n),S(e,a),m(r,e,null),d=!0},p(u,[D]){const w={};D&2&&(w.text=u[1]("settings.audio.testVideo")),D&512&&(w.$$scope={dirty:D,ctx:u}),r.$set(w)},i(u){d||(v(r.$$.fragment,u),d=!0)},o(u){h(r.$$.fragment,u),d=!1},d(u){u&&V(e),s[5](null),_(r)}}}function Ae(s,e,n){let t;pe(s,_e,l=>n(1,t=l));let{audioInput:a}=e,{videoInput:r}=e,d,u;W.state.devices.video.subscribe(l=>{n(3,r=l),D(r)});async function D(l){try{if(u){u.getTracks().forEach(I=>I.stop());const f={deviceId:l?{exact:l}:void 0};u=await navigator.mediaDevices.getUserMedia({video:f}),n(0,d.srcObject=u,d)}}catch(f){console.error(`Error: ${f}`)}}async function w(){n(3,r=ve(W.state.devices.video));const l={audio:{deviceId:a?{exact:a}:void 0},video:{deviceId:r?{exact:r}:void 0}};if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){console.error("MediaDevices API or getUserMedia is not supported in your browser.");return}try{u&&u.getTracks().forEach(f=>f.stop()),u=await navigator.mediaDevices.getUserMedia(l),navigator.mediaDevices.enumerateDevices().then(f=>{f.forEach(I=>{console.log(`${I.kind}: ${I.label} id = ${I.deviceId}`)})}),n(0,d.srcObject=u,d),d.play()}catch(f){console.error("Accessing the microphone failed:",f)}}me(()=>{u==null||u.getTracks().forEach(l=>l.stop())});function M(l){Se[l?"unshift":"push"](()=>{d=l,n(0,d)})}const F=l=>w();return s.$$set=l=>{"audioInput"in l&&n(4,a=l.audioInput),"videoInput"in l&&n(3,r=l.videoInput)},[d,t,w,r,a,M,F]}class Ve extends ue{constructor(e){super(),le(this,e,Ae,Te,re,{audioInput:4,videoInput:3})}}function Oe(s){let e,n;return e=new de({props:{selected:s[0],options:s[7],alt:!0}}),e.$on("change",s[13]),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&1&&(r.selected=t[0]),a&128&&(r.options=t[7]),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function Ue(s){let e,n;return e=new de({props:{selected:He,options:s[5],alt:!0}}),e.$on("change",s[14]),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&32&&(r.options=t[5]),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function qe(s){let e,n;return e=new de({props:{selected:s[1],options:s[6],alt:!0}}),e.$on("change",s[15]),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&2&&(r.selected=t[1]),a&64&&(r.options=t[6]),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function Be(s){let e,n;return e=new ee({props:{on:s[2]?s[2].calling.echoCancellation:!0}}),e.$on("toggle",s[16]),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&4&&(r.on=t[2]?t[2].calling.echoCancellation:!0),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function Pe(s){let e,n;return e=new ee({props:{on:s[2]?s[2].audio.interfaceSounds:!0}}),e.$on("toggle",s[17]),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&4&&(r.on=t[2]?t[2].audio.interfaceSounds:!0),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function je(s){let e,n;return e=new ee({props:{on:s[2]?s[2].audio.controlSounds:!0}}),e.$on("toggle",s[18]),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&4&&(r.on=t[2]?t[2].audio.controlSounds:!0),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function Le(s){let e,n;return e=new ee({props:{on:s[2]?s[2].audio.messageSounds:!0}}),e.$on("toggle",s[19]),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&4&&(r.on=t[2]?t[2].audio.messageSounds:!0),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function ze(s){let e,n;return e=new ee({props:{on:s[2]?s[2].audio.callTimer:!0}}),e.$on("toggle",s[20]),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&4&&(r.on=t[2]?t[2].audio.callTimer:!0),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function Fe(s){let e,n,t,a,r,d,u,D,w,M,F,l,f,I,j,H,A,X,U,Y,q,Z,B,y,P,x,c,g;return n=new G({props:{name:s[8]("settings.audio.inputDevice"),description:s[8]("settings.audio.inputDeviceDescription"),$$slots:{default:[Oe]},$$scope:{ctx:s}}}),r=new $e({props:{percent:s[3]}}),u=new G({props:{name:s[8]("settings.audio.outputDevice"),description:s[8]("settings.audio.outputDeviceDescription"),$$slots:{default:[Ue]},$$scope:{ctx:s}}}),M=new De({props:{small:!0,text:s[8]("settings.audio.test"),appearance:he.Alt}}),M.$on("click",s[9]),l=new $e({props:{percent:s[4]}}),I=new G({props:{name:s[8]("settings.audio.videoDevice"),description:s[8]("settings.audio.videoDeviceDescription"),$$slots:{default:[qe]},$$scope:{ctx:s}}}),A=new Ve({props:{audioInput:s[0],videoInput:void 0}}),U=new G({props:{name:s[8]("settings.audio.echoCancellation"),description:s[8]("settings.audio.echoCancellationDescription"),$$slots:{default:[Be]},$$scope:{ctx:s}}}),q=new G({props:{name:s[8]("settings.audio.interfaceSounds"),description:s[8]("settings.audio.interfaceSoundsDescription"),$$slots:{default:[Pe]},$$scope:{ctx:s}}}),B=new G({props:{name:s[8]("settings.audio.controlSounds"),description:s[8]("settings.audio.controlSoundsDescription"),$$slots:{default:[je]},$$scope:{ctx:s}}}),P=new G({props:{name:s[8]("settings.audio.messageSounds"),description:s[8]("settings.audio.messageSoundsDescription"),$$slots:{default:[Le]},$$scope:{ctx:s}}}),c=new G({props:{name:s[8]("settings.audio.callTimer"),description:s[8]("settings.audio.callTimerDescription"),$$slots:{default:[ze]},$$scope:{ctx:s}}}),{c(){e=L("div"),$(n.$$.fragment),t=C(),a=L("div"),$(r.$$.fragment),d=C(),$(u.$$.fragment),D=C(),w=L("div"),$(M.$$.fragment),F=C(),$(l.$$.fragment),f=C(),$(I.$$.fragment),j=C(),H=L("div"),$(A.$$.fragment),X=C(),$(U.$$.fragment),Y=C(),$(q.$$.fragment),Z=C(),$(B.$$.fragment),y=C(),$(P.$$.fragment),x=C(),$(c.$$.fragment),this.h()},l(o){e=z(o,"DIV",{id:!0,class:!0});var i=J(e);p(n.$$.fragment,i),t=k(i),a=z(i,"DIV",{class:!0});var T=J(a);p(r.$$.fragment,T),T.forEach(V),d=k(i),p(u.$$.fragment,i),D=k(i),w=z(i,"DIV",{class:!0});var b=J(w);p(M.$$.fragment,b),F=k(b),p(l.$$.fragment,b),b.forEach(V),f=k(i),p(I.$$.fragment,i),j=k(i),H=z(i,"DIV",{class:!0});var E=J(H);p(A.$$.fragment,E),E.forEach(V),X=k(i),p(U.$$.fragment,i),Y=k(i),p(q.$$.fragment,i),Z=k(i),p(B.$$.fragment,i),y=k(i),p(P.$$.fragment,i),x=k(i),p(c.$$.fragment,i),i.forEach(V),this.h()},h(){O(a,"class","flex-row"),O(w,"class","flex-row"),O(H,"class","flex-row"),O(e,"id","page"),O(e,"class","svelte-1m6g4am")},m(o,i){ce(o,e,i),m(n,e,null),S(e,t),S(e,a),m(r,a,null),S(e,d),m(u,e,null),S(e,D),S(e,w),m(M,w,null),S(w,F),m(l,w,null),S(e,f),m(I,e,null),S(e,j),S(e,H),m(A,H,null),S(e,X),m(U,e,null),S(e,Y),m(q,e,null),S(e,Z),m(B,e,null),S(e,y),m(P,e,null),S(e,x),m(c,e,null),g=!0},p(o,[i]){const T={};i&256&&(T.name=o[8]("settings.audio.inputDevice")),i&256&&(T.description=o[8]("settings.audio.inputDeviceDescription")),i&16777345&&(T.$$scope={dirty:i,ctx:o}),n.$set(T);const b={};i&8&&(b.percent=o[3]),r.$set(b);const E={};i&256&&(E.name=o[8]("settings.audio.outputDevice")),i&256&&(E.description=o[8]("settings.audio.outputDeviceDescription")),i&16777248&&(E.$$scope={dirty:i,ctx:o}),u.$set(E);const Q={};i&256&&(Q.text=o[8]("settings.audio.test")),M.$set(Q);const N={};i&16&&(N.percent=o[4]),l.$set(N);const K={};i&256&&(K.name=o[8]("settings.audio.videoDevice")),i&256&&(K.description=o[8]("settings.audio.videoDeviceDescription")),i&16777282&&(K.$$scope={dirty:i,ctx:o}),I.$set(K);const fe={};i&1&&(fe.audioInput=o[0]),A.$set(fe);const te={};i&256&&(te.name=o[8]("settings.audio.echoCancellation")),i&256&&(te.description=o[8]("settings.audio.echoCancellationDescription")),i&16777220&&(te.$$scope={dirty:i,ctx:o}),U.$set(te);const ne={};i&256&&(ne.name=o[8]("settings.audio.interfaceSounds")),i&256&&(ne.description=o[8]("settings.audio.interfaceSoundsDescription")),i&16777220&&(ne.$$scope={dirty:i,ctx:o}),q.$set(ne);const se={};i&256&&(se.name=o[8]("settings.audio.controlSounds")),i&256&&(se.description=o[8]("settings.audio.controlSoundsDescription")),i&16777220&&(se.$$scope={dirty:i,ctx:o}),B.$set(se);const oe={};i&256&&(oe.name=o[8]("settings.audio.messageSounds")),i&256&&(oe.description=o[8]("settings.audio.messageSoundsDescription")),i&16777220&&(oe.$$scope={dirty:i,ctx:o}),P.$set(oe);const ie={};i&256&&(ie.name=o[8]("settings.audio.callTimer")),i&256&&(ie.description=o[8]("settings.audio.callTimerDescription")),i&16777220&&(ie.$$scope={dirty:i,ctx:o}),c.$set(ie)},i(o){g||(v(n.$$.fragment,o),v(r.$$.fragment,o),v(u.$$.fragment,o),v(M.$$.fragment,o),v(l.$$.fragment,o),v(I.$$.fragment,o),v(A.$$.fragment,o),v(U.$$.fragment,o),v(q.$$.fragment,o),v(B.$$.fragment,o),v(P.$$.fragment,o),v(c.$$.fragment,o),g=!0)},o(o){h(n.$$.fragment,o),h(r.$$.fragment,o),h(u.$$.fragment,o),h(M.$$.fragment,o),h(l.$$.fragment,o),h(I.$$.fragment,o),h(A.$$.fragment,o),h(U.$$.fragment,o),h(q.$$.fragment,o),h(B.$$.fragment,o),h(P.$$.fragment,o),h(c.$$.fragment,o),g=!1},d(o){o&&V(e),_(n),_(r),_(u),_(M),_(l),_(I),_(A),_(U),_(q),_(B),_(P),_(c)}}}let He="default";function Ne(s,e,n){let t,a,r,d;pe(s,_e,c=>n(8,d=c));let u=[],D=[],w=[],M=async()=>{try{let c=await navigator.mediaDevices.getUserMedia({audio:!0}),g=await navigator.mediaDevices.enumerateDevices();n(10,u=g.filter(o=>o.kind==="audioinput")),n(11,D=g.filter(o=>o.kind==="videoinput")),n(12,w=g.filter(o=>o.kind==="audiooutput")),c==null||c.getTracks().forEach(o=>o.stop())}catch(c){console.error("Error accessing media devices:",c)}},F="default",l="default";W.state.devices.input.subscribe(c=>{n(0,F=c)}),W.state.devices.video.subscribe(c=>{n(1,l=c)});let f=ve(R.state);R.state.subscribe(c=>{n(2,f=c)}),M();let I=0,j;async function H(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){console.error("MediaDevices API or getUserMedia is not supported in your browser.");return}try{j=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});const c=new AudioContext,g=c.createAnalyser(),o=c.createMediaStreamSource(j),i=c.createScriptProcessor(2048,1,1);o.connect(g),g.connect(i),i.connect(c.destination),g.smoothingTimeConstant=.8,g.fftSize=1024,i.onaudioprocess=()=>{const T=new Uint8Array(g.frequencyBinCount);g.getByteFrequencyData(T);let b=0;const E=T.length;for(let N=0;N<E;N++)b+=T[N];const Q=b/E;n(3,I=Math.round(Q/220*100))}}catch(c){console.error("Accessing the microphone failed:",c)}}let A=0;function X(){const c=new AudioContext,g=c.createAnalyser(),o=c.createScriptProcessor(2048,1,1),i=new Audio("/assets/mp3/sample.mp3");c.createMediaElementSource(i).connect(g),g.connect(o),o.connect(c.destination),g.connect(c.destination),g.smoothingTimeConstant=.8,g.fftSize=1024,o.onaudioprocess=()=>{const b=new Uint8Array(g.frequencyBinCount);g.getByteFrequencyData(b);let E=0;const Q=b.length;for(let K=0;K<Q;K++)E+=b[K];const N=E/Q;n(4,A=Math.round(N/255*100))},i.play().catch(b=>console.error("Error playing audio:",b))}Ie(()=>{H()}),me(()=>{j==null||j.getTracks().forEach(c=>c.stop())});const U=c=>{W.setInputDevice(c.detail)},Y=c=>{W.setOutputDevice(c.detail)},q=c=>{console.log("Video input device:",c.detail),W.setVideoInputDevice(c.detail)},Z=c=>{R.update({...f,calling:{...f.calling,echoCancellation:c.detail}})},B=c=>{R.update({...f,audio:{...f.audio,interfaceSounds:c.detail}})},y=c=>{R.update({...f,audio:{...f.audio,controlSounds:c.detail}})},P=c=>{R.update({...f,audio:{...f.audio,messageSounds:c.detail}})},x=c=>{R.update({...f,audio:{...f.audio,callTimer:c.detail}})};return s.$$.update=()=>{s.$$.dirty&1024&&n(7,t=u.length>0?u.map(c=>({text:c.label,value:c.deviceId})):[{text:"Default",value:"Default"}]),s.$$.dirty&3072&&n(6,a=u.length>0?D.map(c=>({text:c.label,value:c.deviceId})):[{text:"Default",value:"Default"}]),s.$$.dirty&4096&&n(5,r=w.length>0?w.map(c=>({text:c.label,value:c.deviceId})):[{text:"Default",value:"default"}])},[F,l,f,I,A,r,a,t,d,X,u,D,w,U,Y,q,Z,B,y,P,x]}class tt extends ue{constructor(e){super(),le(this,e,Ne,Fe,re,{})}}export{tt as component};
