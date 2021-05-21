(this.webpackJsonpcv2=this.webpackJsonpcv2||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),o=n(9),r=n.n(o),s=(n(18),n(19),window.location.href),a=[{sectionName:"Web/APP development",projects:[{title:"Photography blog",content:["Enable justified layout for image display.","Implemented infinite scroll and image lazy loading to improve performance.",'"MERN"stack: MongoDB + Express + REACT + Node.js'],imgurl:s+"/img/money.jpg",button:"View website",link:"https:/money-thecat.herokuapp.com/",id:1},{title:"iOS App for Cloud-based Multi-Vehicle Control System",content:["Provided user/vehicle/task management for autonomous car system.","Swift5 + Firebase."],videourl:"https://youtu.be/aWaX1WtIePk",button:"View code here",link:"https://github.com/fionleung/smartCar",id:2},{title:"Web-based Dashboard for Green building system",content:["Provided a dashboard to retrieved with summary and list for NoSQL.","HTML5/CSS + Bootstrap 4 + JavaScript + Node.js + MongoDB + AWS."],videourl:"https://youtu.be/P1rh-F07-8w",button:"View code here",link:"https://github.com/fionleung/greenbuilding",id:3}]},{sectionName:"Deep learning",projects:[{title:"Object Detection",content:["Trained a model to detect 7 types of lane marking (e.g., double yellow, dot white) in videos/pictures.","Python + TensorFlow + OpenCV + AWS"],imgurl:s+"/img/detect.gif",button:"View code here",link:"https://github.com/fionleung/lane-marking-detection-with-Mask-RCNN",id:1},{title:"Entertainment Chatbot",content:["Utilized Transformer architecture to train a chatbot that could talk to for fun.","Python + TensorFlow + Transformer + AWS"],imgurl:s+"/img/chatbot.jpg",button:"View code here",link:"https://github.com/fionleung/deepLearning/blob/master/chat_with_stan.ipynb",id:2}]}],l=n(11),d=n(12),j=n(2);function h(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}n(20);var b=n(10),u=n.n(b),m=n(0);function f(e){var t=e.lastitem,n=e.title,c=e.content,o=e.imgurl,r=e.videourl,s=e.link,a=e.button,l=function(){var e=Object(i.useState)(h()),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){function e(){c(h())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().width,d=l>920?480:Math.floor(.8*l),b=Math.floor(9*d/16);return console.log(d),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:n}),Object(m.jsxs)("div",{className:"projectRow",children:[Object(m.jsxs)("div",{className:"detailbox",children:[Object(m.jsx)("ul",{children:c.map((function(e,t){return Object(m.jsx)("li",{children:e},n+"."+t)}))}),Object(m.jsxs)("div",{className:"btnrow",children:[" ",Object(m.jsx)("a",{href:s,children:Object(m.jsx)("button",{children:a})})]})]}),Object(m.jsxs)("div",{className:"mediabox",children:[o&&Object(m.jsx)("img",{src:o,alt:"sample"}),r&&Object(m.jsx)(u.a,{width:d+"px",height:b+"px",url:r})]})]}),Object(m.jsx)("div",{children:t&&Object(m.jsx)("hr",{className:"line"})})]})}n(31);function p(e){var t=e.projects.length;return Object(m.jsxs)("div",{className:"sectionBox",id:e.name,children:[Object(m.jsx)("h3",{children:e.name}),e.projects.map((function(n){var i=n.id,c=Object(d.a)(n,["id"]);return Object(m.jsx)(f,Object(l.a)({lastitem:i!==t},c),e.sectionid+"."+i)}))]})}n(32),n(33);var g=function(){var e=c.a.useState(!1),t=Object(j.a)(e,2),n=t[0],o=t[1],r=function(){var e=window.scrollY;o(e>600)};return Object(i.useEffect)((function(){window.addEventListener("scroll",r)})),Object(m.jsx)("div",{className:n?"navbar scrolled":"navbar",children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#Web/APP development",children:"Web/app projects"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#Deep learning",children:"Deep Learning projects"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#contact",children:"Contact me"})})]})})})};function O(){var e=window.location.href;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(g,{}),Object(m.jsx)("img",{src:e+"/img/background.jpeg",alt:"backgroud"}),Object(m.jsxs)("div",{className:"slogan",children:[Object(m.jsx)("h1",{children:"I'm Fion"}),Object(m.jsx)("p",{children:"A full-stack developer."})]})]})}var x=n(5);n(34);function v(){return Object(m.jsxs)("div",{className:"footer",id:"contact",children:[Object(m.jsx)("a",{href:"https://www.linkedin.com/in/fionliang/",children:Object(m.jsx)(x.a,{})}),Object(m.jsx)("a",{href:"mailto:fionloves1024@gmail.com",children:Object(m.jsx)(x.b,{})}),Object(m.jsx)("p",{children:"\xa9 2021 Fion L."})]})}var w=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),a.map((function(e,t){return Object(m.jsx)(p,{name:e.sectionName,sectionid:t,projects:e.projects},t)})),Object(m.jsx)(v,{})]})},k=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,49)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),k()}},[[35,14,15]]]);
//# sourceMappingURL=main.d0e8b25c.chunk.js.map