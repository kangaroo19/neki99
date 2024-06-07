"use strict";(self.webpackChunkneki99=self.webpackChunkneki99||[]).push([[363],{5250:(t,n,e)=>{e.r(n),e.d(n,{default:()=>j});var a,r,i,c,o,d=e(7528),s=e(4574),l=e(2444),h=e(5475),u=e(5362),g=e(579);function p(t){let{dataObj:n}=t;const{refetch:e,isLoading:a,isFetching:r}=(0,u.P9)(n.id);return r||a?null:(0,g.jsxs)(m,{children:[(0,g.jsx)(w,{children:(0,g.jsx)(l.A,{src:n.img,width:"100%",height:"100%"})}),(0,g.jsxs)(y,{onClick:()=>{e()},to:"/blog/".concat(n.id),children:[(0,g.jsx)(b,{children:n.title}),(0,g.jsx)(x,{children:n.summary})]})]})}const m=s.Ay.div(a||(a=(0,d.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #696969;\n  height: 130px;\n  box-sizing: border-box;\n  padding: 10px 0;\n  @media screen and (max-width: 600px) {\n    height: 100px;\n  }\n"]))),w=s.Ay.div(r||(r=(0,d.A)(["\n  width: 18%;\n  height: 100%;\n  padding: 10px;\n  @media screen and (max-width: 600px) {\n    width: 80px;\n    height: 80px;\n  }\n"]))),y=(0,s.Ay)(h.N_)(i||(i=(0,d.A)(["\n  width: 82%;\n  height: 100%; /* \uc6d0\ud558\ub294 \ucd5c\ub300 \ub192\uc774 \uc124\uc815 */\n  overflow: hidden;\n  flex-direction: column;\n  text-decoration: none;\n"]))),b=s.Ay.div(c||(c=(0,d.A)(["\n  font-weight: 600;\n  white-space: nowrap; /*\uae00\uc790\ub97c \ud55c\uc904\ub85c \ubaa8\uc544\uc900\ub2e4*/\n  overflow: hidden;\n  font-size: 1.4rem;\n  width: 100%;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  @media screen and (max-width: 600px) {\n    font-size: 1rem;\n  }\n"]))),x=s.Ay.div(o||(o=(0,d.A)(["\n  font-size: 1rem;\n  text-overflow: ellipsis;\n  @media screen and (max-width: 600px) {\n    font-size: 0.8rem;\n  }\n"])));var f,A,S=e(1152),v=e(5043);const k=["all","React","JavaScript","Other"].map(((t,n)=>({value:n+1,label:t})));function j(){const[t,n]=(0,v.useState)(k[0]),{data:e,isLoading:a,isFetching:r}=(0,u.OI)(t);if(a||r)return null;console.log(e);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(G,{children:"\ucc9c\uc7ac\ud604\uc758 \ube14\ub85c\uadf8"}),(0,g.jsx)(S.A.Select,{onChange:t=>{n(t)},options:k,width:"40%"}),e.map((t=>(0,g.jsx)(p,{dataObj:t},t.id)))]})}const G=s.Ay.div(f||(f=(0,d.A)(["\n  position: absoulte;\n  width: 100%;\n  top: 0;\n  left: 0;\n  text-align: center;\n  font-size: 2rem;\n  background: black;\n  color: white;\n  padding: 20px 0;\n"])));s.Ay.div(A||(A=(0,d.A)(["\n  margin: 0 auto;\n  width: 60%;\n  padding: 0 30px;\n  background: white;\n  @media screen and (max-width: 600px) {\n    width: 100%;\n  }\n"])))},5399:(t,n,e)=>{e.d(n,{I:()=>d,db:()=>o});var a=e(7064),r=e(6032),i=e(8147);const c=(0,a.Wp)({apiKey:"AIzaSyDPNsFfkdl2fwo4vyMJRC3Wr053XlW7zGs",authDomain:"neki99-7324a.firebaseapp.com",projectId:"neki99-7324a",storageBucket:"neki99-7324a.appspot.com",messagingSenderId:"1043899751655",appId:"1:1043899751655:web:478037e3c7986ab7e71642",measurementId:"G-GTXK2JTFGH"}),o=(0,r.aU)(c),d=(0,i.c7)(c)},1565:(t,n,e)=>{function a(){const t=new Date,n=t.getFullYear(),e=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),r=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),c=String(t.getSeconds()).padStart(2,"0");return"".concat(n,"-").concat(e,"-").concat(a," ").concat(r,":").concat(i,":").concat(c)}e.d(n,{A:()=>a})},5362:(t,n,e)=>{e.d(n,{_u:()=>w,OI:()=>m,P9:()=>y});var a=e(3747),r=e(7097),i=e(5399),c=e(6032),o=e(1565);const d=e.p+"static/media/noImg.d01f81a0627ebc34dc35.webp";function s(t){const n=(new DOMParser).parseFromString(t,"text/html").querySelector("img");return n?n.src:d}const l=async()=>{const t=[];try{const n=(0,c.P)((0,c.rJ)(i.db,"blog"),(0,c.My)("createdAt","desc"));return(await(0,c.GG)(n)).forEach((n=>{t.push({id:n.id,title:n.data().title,img:n.data().img,summary:n.data().summary})})),t}catch(n){throw console.error("Error fetching document:",n),n}},h=async()=>{const t=[];try{const n=(0,c.P)((0,c.rJ)(i.db,"blog"),(0,c.My)("createdAt","desc"));return(await(0,c.GG)(n)).forEach((n=>{t.push({...n.data(),id:n.id})})),t}catch(n){throw console.error("Error fetching document:",n),n}},u=async()=>{const t=[];try{const n=(0,c.P)((0,c.rJ)(i.db,"blog"),(0,c.My)("createdAt","desc"));return(await(0,c.GG)(n)).forEach((n=>{t.push({...n.data(),id:n.id})})),t}catch(n){throw console.error("Error fetching document:",n),n}},g=async()=>{const t=[];try{const n=(0,c.P)((0,c.rJ)(i.db,"blog"),(0,c.My)("createdAt","desc"));return(await(0,c.GG)(n)).forEach((n=>{t.push({...n.data(),id:n.id})})),t}catch(n){throw console.error("Error fetching document:",n),n}},p=async t=>{const n=(0,c.H9)((0,c.rJ)(i.db,"blog"));await(0,c.BN)(n,{category:t.category,content:t.content,title:t.title,img:s(t.content),summary:t.summary,createdAt:(0,o.A)(),id:n.id})},m=t=>(0,a.I)({queryKey:["blogList",t],queryFn:()=>(t=>{switch(t.label){case"all":return l();case"React":return h();case"JavaScript":return u();default:return g()}})(t)}),w=()=>(0,r.n)({mutationFn:p}),y=t=>(0,a.I)({queryKey:["blogDetail",t],queryFn:()=>(async t=>{const n=(0,c.P)((0,c.rJ)(i.db,"blog"),(0,c._M)("id","==",t)),e=[];return(await(0,c.GG)(n)).forEach((t=>{e.push(t.data())})),e[0]})(t),enabled:!1})}}]);
//# sourceMappingURL=363.a2d76169.chunk.js.map