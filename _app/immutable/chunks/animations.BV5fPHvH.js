import{Z as h}from"./scheduler.BSglW4Eu.js";function b(n){const o=n-1;return o*o*o+1}function v(n,{delay:o=0,duration:p=400,easing:s=h}={}){const i=+getComputedStyle(n).opacity;return{delay:o,duration:p,easing:s,css:a=>`opacity: ${a*i}`}}function x(n,{delay:o=0,duration:p=400,easing:s=b,axis:i="y"}={}){const a=getComputedStyle(n),c=+a.opacity,d=i==="y"?"height":"width",l=parseFloat(a[d]),e=i==="y"?["top","bottom"]:["left","right"],r=e.map(t=>`${t[0].toUpperCase()}${t.slice(1)}`),$=parseFloat(a[`padding${r[0]}`]),_=parseFloat(a[`padding${r[1]}`]),y=parseFloat(a[`margin${r[0]}`]),u=parseFloat(a[`margin${r[1]}`]),m=parseFloat(a[`border${r[0]}Width`]),g=parseFloat(a[`border${r[1]}Width`]);return{delay:o,duration:p,easing:s,css:t=>`overflow: hidden;opacity: ${Math.min(t*20,1)*c};${d}: ${t*l}px;padding-${e[0]}: ${t*$}px;padding-${e[1]}: ${t*_}px;margin-${e[0]}: ${t*y}px;margin-${e[1]}: ${t*u}px;border-${e[0]}-width: ${t*m}px;border-${e[1]}-width: ${t*g}px;`}}let F=100,w=75;export{F as a,w as b,v as f,x as s};