"use strict";(self.webpackChunkneki99=self.webpackChunkneki99||[]).push([[400],{5643:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var r,a,c,o,d,i,s=n(7528),u=n(3216),l=n(4574),g=(n(7799),n(5884),n(5362)),h=n(579);function p(){const{id:t}=(0,u.g)(),{data:e,isLoading:n,isFetching:r}=(0,g.P9)(t);return console.log(e),r||n?"12312":(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(y,{children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsxs)(b,{children:[(0,h.jsxs)(f,{children:["\uc0dd\uc131\uc77c : ",e.createdAt]}),(0,h.jsx)(w,{children:"\uc218\uc815/\uc0ad\uc81c"})]})]}),(0,h.jsx)(A,{dangerouslySetInnerHTML:{__html:e.content}})]})}const y=l.Ay.div(r||(r=(0,s.A)(["\n  padding: 10px;\n  border-bottom: 3px solid #696969;\n"]))),m=l.Ay.div(a||(a=(0,s.A)(["\n  padding: 10px;\n  font-size: 2rem;\n  text-align: center;\n  @media screen and (max-width: 600px) {\n    font-size: 1.6rem;\n  }\n"]))),b=l.Ay.div(c||(c=(0,s.A)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n"]))),f=l.Ay.div(o||(o=(0,s.A)([""]))),w=l.Ay.div(d||(d=(0,s.A)([""]))),A=l.Ay.div(i||(i=(0,s.A)(["\n  width: 100%;\n  padding: 20px 0;\n  * {\n    width: 100%;\n  }\n"])))},5399:(t,e,n)=>{n.d(e,{I:()=>i,db:()=>d});var r=n(7064),a=n(6032),c=n(8147);const o=(0,r.Wp)({apiKey:"AIzaSyDPNsFfkdl2fwo4vyMJRC3Wr053XlW7zGs",authDomain:"neki99-7324a.firebaseapp.com",projectId:"neki99-7324a",storageBucket:"neki99-7324a.appspot.com",messagingSenderId:"1043899751655",appId:"1:1043899751655:web:478037e3c7986ab7e71642",measurementId:"G-GTXK2JTFGH"}),d=(0,a.aU)(o),i=(0,c.c7)(o)},1565:(t,e,n)=>{function r(){const t=new Date,e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),o=String(t.getSeconds()).padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(r," ").concat(a,":").concat(c,":").concat(o)}n.d(e,{A:()=>r})},5362:(t,e,n)=>{n.d(e,{_u:()=>m,OI:()=>y,P9:()=>b});var r=n(3747),a=n(7097),c=n(5399),o=n(6032),d=n(1565);const i=n.p+"static/media/noImg.d01f81a0627ebc34dc35.webp";function s(t){const e=(new DOMParser).parseFromString(t,"text/html").querySelector("img");return e?e.src:i}const u=async()=>{const t=[];try{const e=(0,o.P)((0,o.rJ)(c.db,"blog"),(0,o.My)("createdAt","desc"));return(await(0,o.GG)(e)).forEach((e=>{t.push({id:e.id,title:e.data().title,img:e.data().img,summary:e.data().summary})})),t}catch(e){throw console.error("Error fetching document:",e),e}},l=async()=>{const t=[];try{const e=(0,o.P)((0,o.rJ)(c.db,"blog"),(0,o.My)("createdAt","desc"));return(await(0,o.GG)(e)).forEach((e=>{t.push({...e.data(),id:e.id})})),t}catch(e){throw console.error("Error fetching document:",e),e}},g=async()=>{const t=[];try{const e=(0,o.P)((0,o.rJ)(c.db,"blog"),(0,o.My)("createdAt","desc"));return(await(0,o.GG)(e)).forEach((e=>{t.push({...e.data(),id:e.id})})),t}catch(e){throw console.error("Error fetching document:",e),e}},h=async()=>{const t=[];try{const e=(0,o.P)((0,o.rJ)(c.db,"blog"),(0,o.My)("createdAt","desc"));return(await(0,o.GG)(e)).forEach((e=>{t.push({...e.data(),id:e.id})})),t}catch(e){throw console.error("Error fetching document:",e),e}},p=async t=>{const e=(0,o.H9)((0,o.rJ)(c.db,"blog"));await(0,o.BN)(e,{category:t.category,content:t.content,title:t.title,img:s(t.content),summary:t.summary,createdAt:(0,d.A)(),id:e.id})},y=t=>(0,r.I)({queryKey:["blogList",t],queryFn:()=>(t=>{switch(t.label){case"all":return u();case"React":return l();case"JavaScript":return g();default:return h()}})(t)}),m=()=>(0,a.n)({mutationFn:p}),b=t=>(0,r.I)({queryKey:["blogDetail",t],queryFn:()=>(async t=>{const e=(0,o.P)((0,o.rJ)(c.db,"blog"),(0,o._M)("id","==",t)),n=[];return(await(0,o.GG)(e)).forEach((t=>{n.push(t.data())})),n[0]})(t),enabled:!1})},7799:()=>{},5884:()=>{}}]);
//# sourceMappingURL=400.7868d3cb.chunk.js.map