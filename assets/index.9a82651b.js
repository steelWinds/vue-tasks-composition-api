import{u as C,a as B,o as l,c as i,r as y,m as M,b as c,d as u,w as f,e as k,f as v,g as _,h as w,t as R,i as S,j as L,v as I,F as N,k as O,l as A,n as E,p as P,q as V,s as j}from"./vendor.bef6868b.js";const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};q();let x=()=>{const o=C(),t=B();return{goRoute:(e,s={})=>{o.push({name:e,params:s})},router:o,route:t}};var d=(o,t)=>{const n=o.__vccOpts||o;for(const[e,s]of t)n[e]=s;return n};const D={setup(o,{attrs:t}){return{attrs:t}}};function F(o,t,n,e,s,a){return l(),i("button",M(e.attrs,{class:"material-button"}),[y(o.$slots,"default")],16)}var h=d(D,[["render",F]]);const H={components:{MaterialButton:h},setup(){const{goRoute:o,router:t,route:n}=x();return{goRoute:o,router:t,route:n}}},G={class:"home"},J=v("h1",{class:"twl-font-bold twl-text-4xl"}," This home view ",-1),U=_(" Go to tasks list ");function K(o,t,n,e,s,a){const r=c("MaterialButton");return l(),i("article",G,[J,u(r,{class:"twl-mt-10",onClick:t[0]||(t[0]=k(p=>e.goRoute("list"),["prevent"]))},{default:f(()=>[U]),_:1})])}var W=d(H,[["render",K]]);class g{static set(t,n){this.has(t)&&localStorage.removeItem(t),n=JSON.stringify(n),localStorage.setItem(t,n)}static get(t){if(!this.has(t))return[];let n=localStorage.getItem(t);return JSON.parse(n)}static has(t){return!!localStorage.getItem(t)}}let z=o=>{if(!(o instanceof Array))throw new Error("startValue is not Array type!");const t=w(o),n=w("");return{tasks:t,addTask:a=>{if(a.length===0)return;let r={content:a};t.value.push(r),g.set("tasks-list",t.value),n.value=""},removeTask:a=>{t.value.splice(a,1),g.set("tasks-list",t.value)},taskContent:n}};const Q={props:{valueModel:{type:String,required:!0,default:""}},emits:["update:valueModel"],setup(o,{emit:t,attrs:n}){const{valueModel:e}=R(o);return{model:S({get(){return e.value},set(a){t("update:valueModel",a)}}),attrs:n}}};function X(o,t,n,e,s,a){return L((l(),i("input",M({"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r)},e.attrs,{class:"material-input"}),null,16)),[[I,e.model]])}var Y=d(Q,[["render",X]]);const Z={components:{MaterialButton:h},emits:["callbackEvent"],setup(o,{emit:t}){return{emit:t}}},tt={class:"task"},et={class:"task__content"},st=_(" empty task "),ot=_(" Remove task ");function nt(o,t,n,e,s,a){const r=c("MaterialButton");return l(),i("article",tt,[v("p",et,[y(o.$slots,"default",{},()=>[st])]),u(r,{class:"twl-flex-shrink-0",onClick:t[0]||(t[0]=p=>e.emit("callbackEvent"))},{default:f(()=>[ot]),_:1})])}var at=d(Z,[["render",nt]]);const rt={components:{MaterialButton:h,MaterialInput:Y,Task:at},setup(){const o=g.get("tasks-list"),{goRoute:t,router:n,route:e}=x(),{tasks:s,addTask:a,removeTask:r,taskContent:p}=z(o);return{goRoute:t,router:n,route:e,tasks:s,addTask:a,removeTask:r,taskContent:p}}},lt={class:"tasks-list"},it=v("h1",{class:"tasks-list__title twl-font-bold twl-text-4xl"}," This is tasks ",-1),ct=_(" Go to home page "),ut=_(" Add task "),_t={class:"tasks-list__list twl-mt-14"};function dt(o,t,n,e,s,a){const r=c("MaterialButton"),p=c("MaterialInput"),b=c("Task");return l(),i("article",lt,[it,u(r,{class:"twl-mt-10",onClick:t[0]||(t[0]=k(m=>e.goRoute("home"),["prevent"]))},{default:f(()=>[ct]),_:1}),v("form",{class:"tasks-list__form twl-mt-10",onClick:t[3]||(t[3]=k(()=>{},["prevent"]))},[u(p,{valueModel:e.taskContent,"onUpdate:valueModel":t[1]||(t[1]=m=>e.taskContent=m),type:"text",name:"task-content",inputmode:"text"},null,8,["valueModel"]),u(r,{onClick:t[2]||(t[2]=m=>e.addTask(e.taskContent))},{default:f(()=>[ut]),_:1})]),v("section",_t,[(l(!0),i(N,null,O(e.tasks,(m,$)=>(l(),A(b,{key:$,onCallbackEvent:$t=>e.removeTask($)},{default:f(()=>[_(E(m.content),1)]),_:2},1032,["onCallbackEvent"]))),128))])])}var pt=d(rt,[["render",dt]]);let mt=[{path:"/",alias:"/home",name:"home",component:W},{path:"/list",alias:"/tasks",name:"list",component:pt}];const ft="/vue-tasks-composition-api/",vt=P({routes:mt,history:V(ft),scrollBehavior(){return new Promise(o=>{setTimeout(()=>{o({top:1,behavior:"smooth"})},500)})}});const kt={};function ht(o,t,n,e,s,a){const r=c("router-view");return l(),i("main",null,[u(r)])}var gt=d(kt,[["render",ht]]);const T=j(gt);T.use(vt);T.mount("#app");
