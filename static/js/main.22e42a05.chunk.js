(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),u=a(8),s=a(1);var o=function(){return l.a.createElement("div",{className:"App"})},m=a(3);function i(e){var t=e.callBack;return l.a.createElement("div",{className:"command-input"},l.a.createElement("input",{type:"text",onKeyDown:function(e){"Enter"===e.key&&(t(e.target.value),e.target.value="")}}))}var p=a(5),v=a(4),E=function(e){var t=Object(v.a)({},e);t.arguments.setResult([].concat(Object(p.a)(t.arguments.result),[l.a.createElement("div",{key:t.arguments.result.length},"This is a help text")]))},d=function(e){var t=Object(v.a)({},e);console.log("This is Previous Jobs"),console.log(t)},g=function(e){Object(v.a)({},e).arguments.setResult([])},f=function(e){var t=new Map;t.set("help",E),t.set("previous-jobs",d),t.set("clear",g);var a=e.value.split(" "),n=t.get(a[0]);void 0===n?e.setResult([].concat(Object(p.a)(e.result),[l.a.createElement("div",{key:e.result.length},"Command ",a," does not exist")])):n({comm:a.slice(1),arguments:e})};function h(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement("main",{style:{padding:"1rem 0"}},l.a.createElement("h2",null,"Home"),a.map(function(e){return e}),l.a.createElement(i,{callBack:function(e){f({value:e,result:a,setResult:r})}}))}function b(){return l.a.createElement("main",{style:{padding:"1rem 0"}},l.a.createElement("h2",null,"Previous Works"))}c.a.createRoot(document.getElementById("root")).render(l.a.createElement(u.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(o,null)}),l.a.createElement(s.a,{path:"home",element:l.a.createElement(h,null)}),l.a.createElement(s.a,{path:"previous-works",element:l.a.createElement(b,null)}))))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.22e42a05.chunk.js.map