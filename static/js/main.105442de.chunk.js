(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/user.099779cd.svg"},25:function(e,t,n){e.exports=n(45)},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=(n(30),n(19)),i=n(3),u=n(16),s=n(17),d=n(23),f=n(11),m=n(24),b=n(7),p=c.a.createContext("card");var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{leftButtons:[]},t=Object(a.useState)(0),n=Object(b.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(!1),i=Object(b.a)(l,2),u=i[0],s=i[1],d=Object(a.useState)(0),f=Object(b.a)(d,2),m=f[0],h=f[1],v=Object(a.useRef)(null),E=Object(a.useRef)(null),g=Object(a.useRef)(null),k=Object(a.useContext)(p),y=function(){return-1*E.current.clientWidth};Object(a.useEffect)(function(){return e.subscribeBackAll(j),E.current.style.display="",o(y()),function(){return e.unsubscribeBackAll(j)}},[]);var j=Object(a.useCallback)(function(){r!==y()&&(v.current.classList.add("back-transition"),o(y()))},[r]),w=Object(a.useCallback)(function(e){h(e.targetTouches[0].pageX),s(!0)},[r]),O=Object(a.useCallback)(function(){s(!1);var t=y()-g.current.clientWidth,n=y();r!==n&&(r>.5*n?o(0):r<n-.5*g.current.clientWidth?o(t):o(n),e.backAll())}),C=Object(a.useCallback)(function(){v.current.classList.remove("back-transition")},[]),B=Object(a.useCallback)(function(e){var t=y()-g.current.clientWidth,n=r-m+e;o(n>=0?0:n<=t?t:n),h(e)},[r,m]),x=Object(a.useCallback)(function(e){e.stopPropagation(),u&&B(e.targetTouches[0].pageX)});return c.a.createElement("div",{className:"card-wapper",ref:v,style:{transform:"translateX(".concat(r,"px)")},onTouchStart:w,onTouchMove:x,onTouchEnd:O,onTransitionEnd:C},c.a.createElement("div",{className:"card-button-list",style:{display:"none"},ref:E},k.leftButtons.map(function(t,n){return c.a.createElement("button",{style:t.style,onClick:function(n){return t.onClick&&t.onClick(t,e.cardIndex,n)},key:n},t.label)})),e.item,c.a.createElement("div",{className:"card-button-list",ref:g},k.rightButtons.map(function(t,n){return c.a.createElement("button",{style:t.style,onClick:function(n){return t.onClick&&t.onClick(t,e.cardIndex,n)},key:n},t.label)})))},v=n(22);n(32);function E(e){var t=new Set;function n(e){t.add(e)}function a(e){t.delete(e)}function r(){Object(v.a)(t).forEach(function(e){e()}),window.removeEventListener("touchstart",r)}function o(e){e&&r(),window.addEventListener("touchstart",r)}var l=e.leftButtons,i=e.rightButtons,u=e.renderList;return c.a.createElement("div",{className:"card-slide-warpper"},c.a.createElement(p.Provider,{value:{leftButtons:l,rightButtons:i}},u.map(function(e,t){return c.a.createElement(h,{item:e,key:t,cardIndex:t,subscribeBackAll:n,unsubscribeBackAll:a,backAll:o})})))}E.defaultProps={leftButtons:[],rightButtons:[],renderList:[]};var g=E,k=(n(34),n(18)),y=n.n(k);var j=function(e){return c.a.createElement("div",{className:"card-slide"},c.a.createElement("img",{src:y.a,alt:""}),c.a.createElement("div",{className:"card-right"},c.a.createElement("p",{className:"item"},c.a.createElement("span",null,"\u670d\u52a1\u53f7"),c.a.createElement("span",null,"\u4e0b\u534822:30")),c.a.createElement("p",null,"QQ\u8fd0\u52a8")))};function w(e){return function(){var t,n=Object(f.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(d.a)(this,t)}}var O=[{label:"\u6807\u8bb0\u4e3a\u672a\u8bfb",onClick:function(e,t,n){console.log(e,t,n)}}],C=[{label:"\u5220\u9664\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u6807\u7b7e",style:{background:"red",width:"100px"}},{label:"\u66f4\u591a",style:{background:"yellowgreen"}}],B=function(e){Object(m.a)(n,e);var t=w(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderList=function(){return[1,2,3,4,5,6].map(function(e,t){return c.a.createElement(j,{key:t})})},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{renderList:this.renderList(),leftButtons:O,rightButtons:C}))}}]),n}(a.Component);n(36);var x=function(e){var t=document.createElement("div");return t.className="modal",Object(a.useEffect)(function(){var e=document.getElementById("root");return e.appendChild(t),function(){return e.removeChild(t)}}),o.a.createPortal(e.children,t)};var S=function(){var e=Object(a.useState)(!0),t=Object(b.a)(e,2),n=t[0],r=t[1];function o(){r(!1)}return{DialogModal:function(e){var t=e.onHide;return n&&c.a.createElement(x,null,c.a.createElement("div",{className:"dialog",style:{fontSize:"20px",width:"80%",background:"#fff",textAlign:"center"}},c.a.createElement("p",null,"Yes, this is a dialog"),c.a.createElement("button",{style:{fontSize:"20px",lineHeight:"1.5em",width:"100%",borderTop:"1px solid #ececec",background:"#fff"},onClick:function(){o(),t&&t()}},"Cancel")))},hide:o,show:function(){r(!0)}}};n(38);var N=function(){var e=S(),t=e.DialogModal,n=e.show;return c.a.createElement("div",{className:"dialog-page"},c.a.createElement("button",{onClick:n},"Show Dialog"),c.a.createElement(t,{onHide:function(){console.log("hide")}}))},L=function(){return c.a.createElement(l.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",component:B,exact:!0}),c.a.createElement(i.a,{path:"/cardSlide",component:B}),c.a.createElement(i.a,{path:"/dialog",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.105442de.chunk.js.map