import{s as O,z,e as R,a as M,c as D,b as I,g as V,f as v,l as y,i as G,h as w,A as T,B as U,C as q,k as C,u as $,v as K}from"../chunks/scheduler.BSglW4Eu.js";import{S as j,i as F,c as B,a as E,m as N,t as k,b as h,e as P}from"../chunks/index.B6nwG8t1.js";import{w as H,g as J}from"../chunks/entry.BC8qPVFY.js";import{p as Q}from"../chunks/stores.B2rPIsKD.js";import{R as W,k as o,a as m,U as A,f as X,$ as Y}from"../chunks/Store.DyawPODi.js";import{c as L,N as Z}from"../chunks/Navigation.BRAD-kYx.js";import{S as x}from"../chunks/Slimbar.DvArlkl4.js";import{T as ee}from"../chunks/Topbar.Dckm7hYC.js";function te(c){let t,e;return t=new Z({props:{routes:c[2],vertical:!0,activeRoute:c[1]}}),t.$on("navigate",c[5]),{c(){B(t.$$.fragment)},l(n){E(t.$$.fragment,n)},m(n,s){N(t,n,s),e=!0},p(n,s){const d={};s&4&&(d.routes=n[2]),s&2&&(d.activeRoute=n[1]),t.$set(d)},i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){h(t.$$.fragment,n),e=!1},d(n){P(t,n)}}}function se(c){let t,e;return t=new ee({}),{c(){B(t.$$.fragment)},l(n){E(t.$$.fragment,n)},m(n,s){N(t,n,s),e=!0},i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){h(t.$$.fragment,n),e=!1},d(n){P(t,n)}}}function ne(c){let t,e,n,s,d=L(),_,b,f;e=new x({props:{loading:oe,open:c[0],activeRoute:W.Settings,$$slots:{default:[te]},$$scope:{ctx:c}}}),e.$on("toggle",c[3]);let u=d&&se();const r=c[4].default,l=z(r,c,c[6],null);return{c(){t=R("div"),B(e.$$.fragment),n=M(),s=R("div"),u&&u.c(),_=M(),b=R("div"),l&&l.c(),this.h()},l(i){t=D(i,"DIV",{id:!0,class:!0});var a=I(t);E(e.$$.fragment,a),n=V(a),s=D(a,"DIV",{class:!0});var g=I(s);u&&u.l(g),_=V(g),b=D(g,"DIV",{class:!0});var p=I(b);l&&l.l(p),p.forEach(v),g.forEach(v),a.forEach(v),this.h()},h(){y(b,"class","slot svelte-rg2owo"),y(s,"class","content svelte-rg2owo"),y(t,"id","settings"),y(t,"class","svelte-rg2owo")},m(i,a){G(i,t,a),N(e,t,null),w(t,n),w(t,s),u&&u.m(s,null),w(s,_),w(s,b),l&&l.m(b,null),f=!0},p(i,[a]){const g={};a&1&&(g.open=i[0]),a&70&&(g.$$scope={dirty:a,ctx:i}),e.$set(g),l&&l.p&&(!f||a&64)&&T(l,r,i,i[6],f?q(r,i[6],a,null):U(i[6]),null)},i(i){f||(k(e.$$.fragment,i),k(u),k(l,i),f=!0)},o(i){h(e.$$.fragment,i),h(u),h(l,i),f=!1},d(i){i&&v(t),P(e),u&&u.d(),l&&l.d(i)}}}let oe=!1;function ae(c,t,e){let n,s,d;C(c,Y,a=>e(7,s=a)),C(c,Q,a=>e(8,d=a));let{$$slots:_={},$$scope:b}=t,f=H([{to:o.Profile,icon:m.Profile,name:s("settings.profile.name")},{to:o.Preferences,icon:m.Brush,name:s("settings.customization.name")},{to:o.Messages,icon:m.ChatBubble,name:s("settings.messages.name")},{to:o.AudioVideo,icon:m.Speaker,name:s("settings.audio.name")},{to:o.Extensions,icon:m.Beaker,name:s("settings.extensions.name")},{to:o.Keybinds,icon:m.Keybind,name:s("settings.keybinds.name")},{to:o.Gamepad,icon:m.Gamepad,name:s("settings.gamepad.name")},{to:o.Accessibility,icon:m.Eye,name:s("settings.accessibility.name")},{to:o.Notifications,icon:m.BellAlert,name:s("settings.notifications.name")},{to:o.Network,icon:m.Relay,name:s("settings.network.name")},{to:o.About,icon:m.Info,name:s("settings.about.name")},{to:o.Licenses,icon:m.Document,name:s("settings.licenses.name")}]),u=$(A.state.sidebarOpen),r=o.Profile;function l(){A.toggleSidebar()}K(()=>{switch(d.url.pathname){case"/settings/preferences":{e(1,r=o.Preferences);break}case"/settings/inventory":{e(1,r=o.Inventory);break}case"/settings/message":{e(1,r=o.Messages);break}case"/settings/licenses":{e(1,r=o.Licenses);break}case"/settings/keybinds":{e(1,r=o.Keybinds);break}case"/settings/network":{e(1,r=o.Network);break}case"/settings/extensions":{e(1,r=o.Extensions);break}case"/settings/audio_video":{e(1,r=o.AudioVideo);break}case"/settings/notifications":{e(1,r=o.Notifications);break}case"/settings/profile":{e(1,r=o.Profile);break}case"/settings/developer":{e(1,r=o.Developer);break}}}),A.state.sidebarOpen.subscribe(a=>e(0,u=a)),X.state.subscribe(a=>{let g=L();a.devmode?$(f).find(p=>p.to===o.Developer)||f.update(p=>[{to:o.Inventory,icon:m.Inventory,name:s("settings.inventory.name")},...p,{to:o.Developer,icon:m.Code,name:s("settings.developer.name")},{to:o.Realms,icon:m.Beaker,name:s("settings.realms.name")}]):f.update(p=>p.filter(S=>S.to!==o.Developer)),g&&f.update(p=>p.filter(S=>S.to!==o.Keybinds))}),K(()=>{const a=f.subscribe(g=>{e(2,n=g)});return()=>a()});const i=a=>{J(a.detail),e(1,r=a.detail)};return c.$$set=a=>{"$$scope"in a&&e(6,b=a.$$scope)},e(2,n=$(f)),[u,r,n,l,_,i,b]}class pe extends j{constructor(t){super(),F(this,t,ae,ne,O,{})}}export{pe as component};
