(this.webpackJsonpready=this.webpackJsonpready||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},4:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(2),i=s.n(a),n=s(13),r=s.n(n);s(21),s(4),s(22);var o=function(){return Object(c.jsxs)("div",{className:"Nav",children:[Object(c.jsx)("a",{href:"#Explanation",children:"About"}),Object(c.jsx)("a",{href:"#Projects",children:"Projects"}),Object(c.jsx)("a",{href:"#Contact",children:"Contact"})]})},l=s(15),j=s(14),h=s.n(j);s(40);var d=function(){var e=Object(a.useState)({submitting:!1,status:null}),t=Object(l.a)(e,2),s=t[0],i=t[1],n=function(e,t,s){i({submitting:!1,status:{ok:e,msg:t}}),e&&s.reset()};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{id:"Contact",children:[Object(c.jsx)("h2",{children:"Contact Me"}),Object(c.jsx)("div",{className:"Line",children:Object(c.jsx)("hr",{})}),Object(c.jsx)("div",{className:"contact-explanation",children:Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("p",{className:"form-intro",children:"Thank you for taking the time to look through my works and portfolio, if you'd like to talk more please fill out your name and a brief message"}),Object(c.jsx)("div",{className:"form-div",children:Object(c.jsxs)("form",{className:"actual-form",onSubmit:function(e){e.preventDefault();var t=e.target;i({submitting:!0}),h()({method:"post",url:"https://formspree.io/xyynbnyr",data:new FormData(t)}).then((function(e){n(!0,"Thanks!",t)})).catch((function(e){n(!1,e.response.data.error,t)}))},children:[Object(c.jsx)("label",{htmlFor:"email",className:"labels",children:"Email:"}),Object(c.jsx)("input",{id:"email",type:"email",name:"email",className:"input",required:!0}),Object(c.jsx)("label",{htmlFor:"message",className:"labels",children:"Message:"}),Object(c.jsx)("textarea",{id:"message",name:"message",className:"input"}),Object(c.jsx)("button",{className:"Contact-Button",type:"submit",disabled:s.submitting,children:"Submit"}),s.status&&Object(c.jsx)("p",{className:s.status.ok?"":"errorMsg",children:s.status.msg})]})})]})})]}),Object(c.jsx)("div",{className:"banner",children:Object(c.jsxs)("div",{className:"quote",children:[Object(c.jsx)("p",{children:'"The true method of knowledge is experiment"'}),Object(c.jsx)("p",{children:"-William Blake"})]})})]})};var b=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o,{}),Object(c.jsxs)("div",{className:"Header",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h1",{className:"name-title",children:"Megan"}),Object(c.jsx)("h1",{className:"name-title-last",children:"Smith"})]}),Object(c.jsx)("p",{className:"name-description",children:"Hello, I am the Web Developer perfect for your team."}),Object(c.jsx)("a",{href:"#Contact",className:"Main-Button",children:"Let's Talk"})]}),Object(c.jsxs)("div",{id:"Explanation",children:[Object(c.jsx)("h2",{children:"The Motivation"}),Object(c.jsx)("div",{className:"Line",children:Object(c.jsx)("hr",{})}),Object(c.jsxs)("p",{className:"Paragraph-block",children:["I see coding as an endless opportunity to ",Object(c.jsx)("b",{children:"create, experiment, and grow"}),". This portfolio is to demonstrate some of the concepts and processes I am learning and applying. My goal is to use these skills to improve the world and create solutions to difficult challenges"]})]}),Object(c.jsxs)("div",{id:"Projects",children:[Object(c.jsxs)("div",{className:"Project-Explanation",children:[Object(c.jsx)("h2",{children:"Projects"}),Object(c.jsx)("div",{className:"Project-Line",children:Object(c.jsx)("hr",{})}),Object(c.jsx)("p",{className:"Project-Block",children:"Hover over the project images below to see a short preview demonstration"})]}),Object(c.jsxs)("div",{className:"Project-1-Group",children:[Object(c.jsx)("div",{className:"Project-1"}),Object(c.jsxs)("div",{className:"Project-Text",children:[Object(c.jsx)("h2",{children:"Harvard Art API"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Key Features:"})," Drag and drop functionality. Passing child classes to parent divs and planning for more reusable components"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Concept:"})," Sort a random assortment of shapes into their respective collumns"]}),Object(c.jsx)("a",{href:"https://smith-megan.github.io/Artistry/",className:"Live-Demo",children:"Live Demo"}),Object(c.jsx)("a",{href:"https://github.com/smith-megan/Artistry",className:"Github-Repo",children:"Github Repository"})]})]}),Object(c.jsxs)("div",{className:"Project-2-Group",children:[Object(c.jsx)("div",{className:"Project-2"}),Object(c.jsxs)("div",{className:"Project-Text",children:[Object(c.jsx)("h2",{children:"Shape Sort"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Key Features:"})," Drag and drop functionality and adding classes based on user events"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Concept:"})," Sort a random assortment of shapes into their respective collumns"]}),Object(c.jsx)("a",{href:"https://smith-megan.github.io/shapesort/",className:"Live-Demo",children:"Live Demo"}),Object(c.jsx)("a",{href:"https://github.com/smith-megan/shapesort",className:"Github-Repo",children:"Github Repository"})]})]}),Object(c.jsxs)("div",{className:"Project-3-Group",children:[Object(c.jsx)("div",{className:"Project-3"}),Object(c.jsxs)("div",{className:"Project-Text",children:[Object(c.jsx)("h2",{children:"MoneyStacks"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Key Features:"})," React Project based around state and passing data to and from components"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Concept:"})," A visual way to track progress toward financial goals"]}),Object(c.jsx)("a",{href:"https://smith-megan.github.io/moneystacks/",className:"Live-Demo",children:"Live Demo"}),Object(c.jsx)("a",{href:"https://github.com/smith-megan/moneystacks",className:"Github-Repo",children:"Github Repository"})]})]}),Object(c.jsxs)("div",{className:"Project-4-Group",children:[Object(c.jsx)("div",{className:"Project-4"}),Object(c.jsxs)("div",{className:"Project-Text",children:[Object(c.jsx)("h2",{children:"Page Turn"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Key Features:"})," Jquery and Turn.js library integration"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Concept:"})," Quickly integrate existing libraries together for a brochure or book page."]}),Object(c.jsx)("a",{href:"https://smith-megan.github.io/book-page-turn/index.html",className:"Live-Demo",children:"Live Demo"}),Object(c.jsx)("a",{href:"https://github.com/smith-megan/book-page-turn/blob/main/index.html",className:"Github-Repo",children:"Github Repository"})]})]})]}),Object(c.jsx)(d,{})]})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),m()}},[[41,1,2]]]);
//# sourceMappingURL=main.bdf9afed.chunk.js.map