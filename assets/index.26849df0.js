import{S as x,P as b,W as L,T as S,a as l,M as m,b as p,A as v,c as M,O as P,d as w,e as T}from"./vendor.a972f0db.js";const z=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};z();const o=new x,n=new b(75,window.innerWidth/window.innerHeight,.1,1e3),a=new L({canvas:document.querySelector("#bg")});a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);n.position.setZ(30);a.render(o,n);const A=new S(10,3,16,100),O=new l().load("https://raw.githubusercontent.com/Kermit1321/Portfolio/main/space.jpg"),j=new m({map:O}),f=new p(A,j);o.add(f);const g=new v(16777215);g.position.set(20,20,20);const y=new M(16777215);y.position.set(20,20,20);o.add(g,y);const C=new P(n,a.domElement);function R(){const r=new w(.25,24,24),s=new m({color:16777215}),c=new p(r,s),[d,e,t]=Array(3).fill().map(()=>T.randFloatSpread(100));c.position.set(d,e,t),o.add(c)}Array(200).fill().forEach(R);const W=new l().load("https://raw.githubusercontent.com/Kermit1321/Portfolio/main/space.jpg");o.background=W;const q=new l().load("https://raw.githubusercontent.com/Kermit1321/Portfolio/main/moon.jpg"),E=new l().load("https://raw.githubusercontent.com/Kermit1321/Portfolio/main/normal.jpg"),i=new p(new w(3,32,32),new m({map:q,normalMap:E}));o.add(i);i.position.z=30;i.position.setX(-10);function F(){const r=document.body.getBoundingClientRect().top;i.rotation.x+=.05,i.rotation.y+=.0075,i.rotation.z+=.05,n.position.z=r*-.01,n.position.x=r*-2e-4,n.position.y=r*-2e-4}document.body.onscroll=F;function h(){requestAnimationFrame(h),f.rotation.x+=.01,f.rotation.y+=.005,f.rotation.z+=.01,C.update(),a.render(o,n)}h();