!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./dist/",n(n.s=3)}([function(t,e,n){var r={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),s=null,a=0,l=[],d=n(16);function c(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(m(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(m(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function u(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function p(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),p(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var l=a++;n=s||(s=h(e)),r=v.bind(null,n,l,!1),i=v.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=d(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){f(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return c(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&c(u(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function v(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){"use strict";n.r(e);n(18),n(15),n(12);class r{constructor(t){Object.assign(this,{showAll:!1,showDefault:2},t),this.el=document.querySelector(t.el),this.el.addEventListener("click",t=>this.onClick(t)),this.render()}onClick(t){const e=t.target,n=e.closest(".hobby-list-item");if(e.matches(".hobby-list-show-all"))this.showAll=!this.showAll,this.render();else if(n){const r=this.items[n.getAttribute("data-index")];e.closest(".hobby-list-item-prepend")&&this.clickPrepend?this.clickPrepend(t,r):e.closest(".hobby-list-item-append")&&this.clickAppend&&this.clickAppend(t,r)}}prependToList(){return""}renderItem(t){return t}renderItemAppend(){return""}contains(t){return-1!==this.items.findIndex(e=>e===t)}showAllLabel(t){return["интерес","интереса","интересов"][t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}render(){const t=this.items.length-this.showDefault,e=this.showAll,n=e?this.items:this.items.slice(0,this.showDefault),r=t<=0?"":`<div><span class="hobby-list-show-all">${e?"скрыть":`ещё ${t} ${this.showAllLabel(t)}`}</span></div>`;this.el.innerHTML=`\n      <div class="hobby-list">\n        <div class="hobby-list-title">${this.title}</div>\n        <div class="hobby-list-subtitle">Хобби<div class="strange-and-useless-dotted-line"></div></div>\n        ${this.prependToList()}\n        ${n.map((t,e)=>`\n        <div class="hobby-list-item" data-index="${e}">\n          <div class="hobby-list-item-prepend"></div>\n          <div class="hobby-list-item-text">${this.renderItem(t)}</div>\n          <div class="hobby-list-item-append">${this.renderItemAppend()}</div>\n        </div>\n        `).join("")}\n        ${r}\n      </div>\n    `}}n(10),n(5);const i=document.createElement("div");function o(){document.body.removeChild(i)}i.classList.add("dialog"),i.innerHTML='\n  <div class="dialog-overlay"></div>\n  <div class="dialog-body">\n    <div class="dialog-header"></div>\n    <textarea class="dialog-message" placeholder="как бы текст жалобы"></textarea>\n    <div class="dialog-buttons">\n      <button class="dialog-button-ok">OK</button>\n      <button class="dialog-button-cancel">Cancel</button>\n    </div>\n  </div>\n';let s=null,a=null;i.addEventListener("click",function(t){t.target.matches(".dialog-overlay")||t.target.matches(".dialog-button-cancel")?a():t.target.matches(".dialog-button-ok")&&s()});var l=function(t){i.querySelector(".dialog-header").innerHTML=`Отправка жалобы на: ${t.subject}`,i.querySelector(".dialog-message").value="",s=function(){t.ok(i.querySelector(".dialog-message").value),o()},a=function(){t.cancel(),o()},document.body.appendChild(i)};document.addEventListener("DOMContentLoaded",function(){new class extends r{constructor(t){super(t),this.el.classList.add("hobby-list-friend"),this.friendOf.friends.push(this)}clickPrepend(t,e){this.friendOf.addItem(e)}clickAppend(t,e){l({subject:e,cancel(){console.log("cancel")},ok(t){console.log(t)}})}renderItemAppend(){return'<span class="hobby-list-item-icon-with-text hobby-list-item-abuse">пожаловаться</span>'}updateFromFriend(t,e){this.friendOf===t&&this.contains(e)&&this.render()}renderItem(t){return`<span>${t}</span>${this.friendOf.contains(t)?'<span class="hobby-list-item-icon-with-text hobby-list-item-from-friend">добавлено в ваши увлечения</span>':""}`}}({el:"#hobby-friend",title:"Интересы друга",items:["Баскетбол","Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе","Call of Duty","Отстрел бродячих собак","Балет"],friendOf:new class extends r{constructor(t){super(t),this.el.classList.add("hobby-list-own"),this.el.addEventListener("keypress",t=>this.onKeypress(t)),this.el.addEventListener("input",t=>this.onInput(t)),this.friends=[]}clickPrepend(t,e){this.delItem(e)}addItem(t){t&&!this.contains(t)&&(this.items.push(t),this.render(),this.notifyFriends(t))}delItem(t){this.contains(t)&&(this.items=this.items.filter(e=>e!==t),this.render(),this.notifyFriends(t))}prependToList(){return`<input class="hobby-list-edit" value="${this.newItem||""}" placeholder="Введите текст">`}onKeypress(t){13===t.keyCode&&t.target.matches(".hobby-list-edit")&&(this.newItem="",this.addItem(t.target.value))}onInput(t){this.newItem=t.target.value}notifyFriends(t){this.friends.forEach(e=>e.updateFromFriend(this,t))}}({el:"#hobby-own",title:"О себе",items:["Хоккей","Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01","Эпоха Ренессанса","Кулинария","Каннибализм"]})})})},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".dialog {\r\n  position: absolute;\r\n}\r\n\r\n.dialog-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.dialog-body {\r\n  width: 70%;\r\n  height: 70%;\r\n  background-color: #FFF;\r\n  position: fixed;\r\n  top: 15%;\r\n  left: 15%;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.dialog-header {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 50px;\r\n}\r\n\r\n.dialog-message {\r\n  resize: none;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  flex-grow: 1;\r\n}\r\n\r\n.dialog-buttons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  height: 50px;\r\n}\r\n\r\n.dialog-buttons button {\r\n  margin-left: 10px;\r\n}\r\n",""])},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){t.exports=n.p+"images/warn.png"},function(t,e,n){t.exports=n.p+"images/ok.png"},function(t,e,n){t.exports=n.p+"images/add.png"},function(t,e,n){var r=n(2);(t.exports=n(1)(!1)).push([t.i,".hobby-list-friend .hobby-list-item:hover .hobby-list-item-prepend {\r\n  background: url("+r(n(8))+") center 2px no-repeat;\r\n}\r\n\r\n.hobby-list-item-icon-with-text {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  height: 16px;\r\n  margin: 0 5px;\r\n  padding-left: 16px;\r\n  background-position: left center;\r\n  background-repeat: no-repeat;\r\n  cursor: default;\r\n}\r\n\r\n.hobby-list-item-from-friend {\r\n  background-image: url("+r(n(7))+");\r\n  color: green;\r\n}\r\n\r\n.hobby-list-item-abuse {\r\n  background-image: url("+r(n(6))+");\r\n  color: #777;\r\n  display: none;\r\n}\r\n.hobby-list-friend .hobby-list-item:hover .hobby-list-item-abuse {\r\n  display: inline-flex;\r\n}\r\n",""])},function(t,e,n){var r=n(9);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".hobby-list {\r\n  padding: 20px 0;\r\n}\r\n\r\n.hobby-list-title {\r\n  font-size: 2em;\r\n  padding: 5px 0;\r\n  border-bottom: 3px solid #444;\r\n}\r\n\r\n.hobby-list-subtitle {\r\n  font-size: 1.2em;\r\n  padding: 10px 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.hobby-list-item {\r\n  display: flex;\r\n  margin: 10px 0;\r\n}\r\n\r\n.hobby-list-item-text {\r\n  white-space: nowrap;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n.hobby-list-item-text::before {\r\n  content: '';\r\n  width: 50px;\r\n  height: 100%;    \r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  background: linear-gradient(to right, transparent, #fff);\r\n}\r\n\r\n.hobby-list-item-text {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.hobby-list-show-all {\r\n  margin: 10px 16px;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n  color: #ff8c00;\r\n}\r\n\r\n.hobby-list-item-prepend {\r\n  flex: 0 0 16px;\r\n}\r\n\r\n.strange-and-useless-dotted-line {\r\n  flex-grow: 1;\r\n  height: 1px;\r\n  margin-left: 10px;\r\n  background: repeating-linear-gradient(to right, #666, #666 1px, transparent 1px, transparent 2px);\r\n}\r\n",""])},function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){t.exports=n.p+"images/del.png"},function(t,e,n){var r=n(2);(t.exports=n(1)(!1)).push([t.i,".hobby-list-own .hobby-list-item:hover .hobby-list-item-prepend {\r\n  background: url("+r(n(13))+") center no-repeat;\r\n}\r\n\r\n.hobby-list-edit {\r\n  width: 50%;\r\n  margin: 10px 16px;\r\n}\r\n",""])},function(t,e,n){var r=n(14);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,i);r.locals&&(t.exports=r.locals)},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"html, body, #app {\r\n  margin: 0;\r\n  height: 100%;\r\n  font-family: sans-serif;\r\n  color: #444;\r\n}\r\n\r\n#app {\r\n  margin: 0 auto;\r\n  width: 600px;\r\n}\r\n",""])},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,i);r.locals&&(t.exports=r.locals)}]);