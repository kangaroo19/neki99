"use strict";(self.webpackChunkneki99=self.webpackChunkneki99||[]).push([[762],{5541:(n,t,e)=>{e.r(t),e.d(t,{default:()=>I});var r=e(7528),a=e(4574),o=e(2444),c=e(5475);const i=e.p+"static/media/noImg.ace953f197ee3d95e545.jpg";function d(n){const t=(new DOMParser).parseFromString(n,"text/html").querySelector("img");return t?t.src:i}var s,l,h,g,p,u=e(579);function m(n){let{dataObj:t}=n;return(0,u.jsxs)(w,{children:[(0,u.jsx)(x,{children:(0,u.jsx)(o.A,{src:d(t.content),width:"100%",height:"100%"})}),(0,u.jsxs)(f,{to:"/blog/".concat(t.id),state:{item:t},children:[(0,u.jsx)(y,{children:t.title}),(0,u.jsx)(b,{children:t.summary})]})]})}const w=a.Ay.div(s||(s=(0,r.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #696969;\n  height: 130px;\n  box-sizing: border-box;\n  padding: 10px 0;\n  @media screen and (max-width: 600px) {\n    height: 100px;\n  }\n"]))),x=a.Ay.div(l||(l=(0,r.A)(["\n  width: 18%;\n  height: 100%;\n  padding: 10px;\n  @media screen and (max-width: 600px) {\n    width: 80px;\n    height: 80px;\n  }\n"]))),f=(0,a.Ay)(c.N_)(h||(h=(0,r.A)(["\n  width: 82%;\n  height: 100%; /* \uc6d0\ud558\ub294 \ucd5c\ub300 \ub192\uc774 \uc124\uc815 */\n  overflow: hidden;\n  flex-direction: column;\n  text-decoration: none;\n"]))),y=a.Ay.div(g||(g=(0,r.A)(["\n  font-weight: 600;\n  white-space: nowrap; /*\uae00\uc790\ub97c \ud55c\uc904\ub85c \ubaa8\uc544\uc900\ub2e4*/\n  overflow: hidden;\n  font-size: 1.4rem;\n  width: 100%;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  @media screen and (max-width: 600px) {\n    font-size: 1rem;\n  }\n"]))),b=a.Ay.div(p||(p=(0,r.A)(["\n  font-size: 1rem;\n  text-overflow: ellipsis;\n  @media screen and (max-width: 600px) {\n    font-size: 0.8rem;\n  }\n"])));var A,S,v=e(1152),j=e(6808),k=e(5043);const G=["all","React","JavaScript","Other"].map(((n,t)=>({value:t+1,label:n})));function I(){const[n,t]=(0,k.useState)(G[0]),{data:e,isLoading:r,isFetching:a}=(0,j.OI)(n);if(r||a)return null;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(J,{children:"\ucc9c\uc7ac\ud604\uc758 \ube14\ub85c\uadf8"}),(0,u.jsx)(v.A.Select,{onChange:n=>{t(n)},options:G,width:"40%"}),e.map((n=>(0,u.jsx)(m,{dataObj:n},n.id)))]})}const J=a.Ay.div(A||(A=(0,r.A)(["\n  position: absoulte;\n  width: 100%;\n  top: 0;\n  left: 0;\n  text-align: center;\n  font-size: 2rem;\n  background: black;\n  color: white;\n  padding: 20px 0;\n"])));a.Ay.div(S||(S=(0,r.A)(["\n  margin: 0 auto;\n  width: 60%;\n  padding: 0 30px;\n  background: white;\n  @media screen and (max-width: 600px) {\n    width: 100%;\n  }\n"])))},5399:(n,t,e)=>{e.d(t,{I:()=>d,db:()=>i});var r=e(7064),a=e(6032),o=e(8147);const c=(0,r.Wp)({apiKey:"AIzaSyDPNsFfkdl2fwo4vyMJRC3Wr053XlW7zGs",authDomain:"neki99-7324a.firebaseapp.com",projectId:"neki99-7324a",storageBucket:"neki99-7324a.appspot.com",messagingSenderId:"1043899751655",appId:"1:1043899751655:web:478037e3c7986ab7e71642",measurementId:"G-GTXK2JTFGH"}),i=(0,a.aU)(c),d=(0,o.c7)(c)},1565:(n,t,e)=>{function r(){const n=new Date,t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),a=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0"),c=String(n.getSeconds()).padStart(2,"0");return"".concat(t,"-").concat(e,"-").concat(r," ").concat(a,":").concat(o,":").concat(c)}e.d(t,{A:()=>r})},6808:(n,t,e)=>{e.d(t,{OI:()=>p,_u:()=>u});var r=e(3747),a=e(7097),o=e(5399),c=e(6032),i=e(1565);const d=async()=>{console.log("\ubaa8\ub4e0\uac70");const n=[];try{const t=(0,c.P)((0,c.rJ)(o.db,"blog"),(0,c.My)("createdAt","desc"));return(await(0,c.GG)(t)).forEach((t=>{n.push({...t.data(),id:t.id})})),n}catch(t){throw console.error("Error fetching document:",t),t}},s=async()=>{console.log("\ub9ac\uc561\ud2b8 \ube14\ub85c\uadf8 \ub9ac\uc2a4\ud2b8");const n=[];try{const t=(0,c.P)((0,c.rJ)(o.db,"blog"),(0,c.My)("createdAt","desc"));return(await(0,c.GG)(t)).forEach((t=>{n.push({...t.data(),id:t.id})})),n}catch(t){throw console.error("Error fetching document:",t),t}},l=async()=>{console.log("\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ube14\ub85c\uadf8 \ub9ac\uc2a4\ud2b8");const n=[];try{const t=(0,c.P)((0,c.rJ)(o.db,"blog"),(0,c.My)("createdAt","desc"));return(await(0,c.GG)(t)).forEach((t=>{n.push({...t.data(),id:t.id})})),n}catch(t){throw console.error("Error fetching document:",t),t}},h=async()=>{console.log("\ub2e4\ub978 \ube14\ub85c\uadf8 \ub9ac\uc2a4\ud2b8");const n=[];try{const t=(0,c.P)((0,c.rJ)(o.db,"blog"),(0,c.My)("createdAt","desc"));return(await(0,c.GG)(t)).forEach((t=>{n.push({...t.data(),id:t.id})})),n}catch(t){throw console.error("Error fetching document:",t),t}},g=async n=>{await(0,c.gS)((0,c.rJ)(o.db,"blog"),{category:n.category,content:n.content,title:n.title,summary:n.summary,createdAt:(0,i.A)(),id:null})},p=n=>(console.log(n),(0,r.I)({queryKey:["blogList",n],queryFn:()=>(n=>{switch(n.label){case"all":return d();case"React":return s();case"JavaScript":return l();default:return h()}})(n)})),u=()=>(0,a.n)({mutationFn:g})}}]);
//# sourceMappingURL=762.e49b4f3f.chunk.js.map