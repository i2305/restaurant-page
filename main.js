(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody{\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    background-color: rgba(252, 252, 153, 0.7);\n}\n\n/* Header style */\n\n.header,\n.footer{\n    margin-top: 30px;\n    margin-bottom: 30px;\n    width:100vw;\n    height: 15vh;\n    background-color: yellowgreen;\n    padding:10px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.footer{\n    height:5vh;\n    color:whitesmoke;\n    font-weight: bold;\n    text-shadow: 1px 1px yellow;\n    justify-content: center;\n    margin-top: 100px;\n    margin-bottom:0px;\n}\n\nh1{\n    font-size:clamp(3.5rem, 3vw, 3rem);\n    color: whitesmoke;\n    text-shadow: 2px 3px rgb(241, 241, 14);\n    font-style: italic;\n    margin-left: 20px;\n}\n\nul{\n    display: flex;\n    flex-direction: row;\n    width:60vw;\n    justify-content: flex-end;\n    margin-left: 80px;\n}\n\n\nli{\n    list-style: none;\n    margin-right: 60px;\n    font-size: clamp(1.5rem, 3vw, 2rem);\n    color: whitesmoke;\n    text-shadow: 2px 2px rgb(241, 241, 14);\n    font-style: italic;\n    font-weight: bold;\n    cursor: pointer;\n    position:relative;\n}\n\nli:before,\nli:after{\n    content:\"\";\n    position:absolute;\n    height:3px;\n    width:0px;\n    background-color: whitesmoke;\n    transition: .5s;\n}\n\nli:after{\n    left:0;\n    bottom:40px;\n}\n\nli:before{\n    right:0;\n    top:40px;\n}\n\nli:hover:after,\nli:hover:before{\n    width:100%;\n}\n\n/* Home page style */\n\n.container1{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 30px;\n    margin-top: 80px;\n    width:90vw;\n    box-shadow: 10px 0px 10px 10px rgb(154, 205, 50, 0.5);\n    margin-left: 50px;\n   \n}\n\n.main-image{\n    width:50vw;\n    height:50vh;\n}\n\n.para1{\n    font-size: clamp(1rem, 2vw, 2rem);\n    color: yellowgreen;\n    font-weight: bold;\n    text-align: justify;\n    width:50vw;\n    margin-left: 30px;\n    line-height: 40px;\n    cursor: pointer;\n}\n\n/* Menu page style */\n\n.title{\n    font-size:clamp(2.5rem, 3vw, 2rem);\n    font-weight: bold;\n    font-style: italic;\n    color:yellowgreen;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid yellowgreen;\n    margin-bottom: 30px;\n    padding-bottom: 10px;\n    width:100%;\n}\n\n.container2{\n    margin-top:40px;\n    padding: 40px;\n    width:90%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n    margin-left:60px;\n}\n\n.menu-images{\n    width:35vw;\n    height:35vh;\n    box-shadow: 10px 0px 10px 10px rgb(154, 205, 50, 0.5);\n    padding: 10px;\n}\n\n.info{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(1.2rem, 4vw, 1rem);\n    color: yellowgreen;\n    font-weight: bold;\n    padding-top: 10px;\n    padding-bottom: 30px;\n}\n\n/*Contact page style*/\n.container3{\n    width:60%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    box-shadow: 10px 0px 10px 10px rgb(154, 205, 50, 0.5);\n    margin-top:70px;\n    margin-left: 250px;\n    padding:20px;\n    padding-left:30px;\n}\n\n.info-box{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width:40vw;\n    border-bottom: 3px solid yellowgreen;\n    padding-bottom: 20px;\n}\n\n.contactInfo{\n    font-size: clamp(1.2rem, 4vw, 1.4rem);\n    color: yellowgreen;\n    font-weight: bold;\n}\n\n.restaurantInfo{\n    font-size: clamp(1.2rem, 4vw, 1rem);\n    color:yellowgreen;\n    font-weight: bold;\n}\n\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=a(u,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"ccb119a16b71e6f97ec9.jpg";function e(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h2");t.classList.add("title"),t.textContent="About Us";const o=document.createElement("div");o.classList.add("container1");const a=document.createElement("img");a.classList.add("main-image"),a.src=n,a.alt="Image of restaurant",o.appendChild(a);const r=document.createElement("p");r.classList.add("para1"),r.textContent="Welcome to our enchanting rooftop restaurant. With a breathtaking view of the city, we offer you all kind of delicious pizzas. Bring your friends and enjoy. Eating is always fun with us. Come and see for yourself. We are waiting for you.",o.appendChild(r);const i=document.createElement("div");i.classList.add("footer"),i.textContent="Photo by Garret Parker on Unsplash",e.appendChild(t),e.appendChild(o),e.appendChild(i)}const o=t.p+"b2b4707fffce077d9977.jpg",a=t.p+"331141397a3d630313fb.jpg",r=t.p+"497c11846b44dbf75b79.jpg",i=t.p+"7dcdf5df88d73fcdf687.jpg";function c(){const n=document.querySelector("#content");n.replaceChildren();const e=document.createElement("h2");e.classList.add("title"),e.textContent="Menu";const t=document.createElement("div");t.classList.add("container2");const c=document.createElement("div");c.classList.add("item");const s=document.createElement("img");s.classList.add("menu-images"),s.src=o,s.alt="Pizza Image";const d=document.createElement("h4");d.classList.add("info"),d.textContent="Mushroom and tomato pizza 25$",c.appendChild(s),c.appendChild(d),t.appendChild(c);const l=document.createElement("div");l.classList.add("item");const p=document.createElement("img");p.classList.add("menu-images"),p.src=a,p.alt="Pizza Image";const m=document.createElement("h4");m.classList.add("info"),m.textContent="Arugula and burratta pizza 25$",l.appendChild(p),l.appendChild(m),t.appendChild(l);const u=document.createElement("div");u.classList.add("item");const f=document.createElement("img");f.classList.add("menu-images"),f.src=r,f.alt="Pizza Image";const h=document.createElement("h4");h.classList.add("info"),h.textContent="Mozzarella and rosemary pizza 15$",u.appendChild(f),u.appendChild(h),t.appendChild(u);const g=document.createElement("div");g.classList.add("item");const x=document.createElement("img");x.classList.add("menu-images"),x.src=i,x.alt="Pizza Image";const v=document.createElement("h4");v.classList.add("info"),v.textContent="Hot pepper and pepperoni pizza 20$",g.appendChild(x),g.appendChild(v),t.appendChild(g);const y=document.createElement("div");y.classList.add("footer"),y.textContent="Photos by Vit Ch, Inna Gurina, Ivan Torres and Kelvin T on Unsplash",n.appendChild(e),n.appendChild(t),n.appendChild(y)}function s(){const n=document.querySelector("#content");n.replaceChildren();const e=document.createElement("h2");e.classList.add("title"),e.textContent="Contact Us";const t=document.createElement("div");t.classList.add("container3");const o=document.createElement("div");o.classList.add("info-box");const a=document.createElement("h3");a.classList.add("contactInfo"),a.textContent="Phone number: ";const r=document.createElement("span");r.classList.add("restaurantInfo"),r.textContent="23-235-235",o.appendChild(a),o.appendChild(r),t.appendChild(o);const i=document.createElement("div");i.classList.add("info-box");const c=document.createElement("h3");c.classList.add("contactInfo"),c.textContent="E-Mail: ";const s=document.createElement("span");s.classList.add("restaurantInfo"),s.textContent="rooftoppizza@email.com",i.appendChild(c),i.appendChild(s),t.appendChild(i);const d=document.createElement("div");d.classList.add("info-box");const l=document.createElement("h3");l.classList.add("contactInfo"),l.textContent="Address: ";const p=document.createElement("span");p.classList.add("restaurantInfo"),p.textContent="Milky Way, 235",d.appendChild(l),d.appendChild(p),t.appendChild(d);const m=document.createElement("div");m.classList.add("footer"),m.textContent="30.11.2023",n.appendChild(e),n.appendChild(t),n.appendChild(m)}var d=t(379),l=t.n(d),p=t(795),m=t.n(p),u=t(569),f=t.n(u),h=t(565),g=t.n(h),x=t(216),v=t.n(x),y=t(589),b=t.n(y),w=t(426),C={};C.styleTagTransform=b(),C.setAttributes=g(),C.insert=f().bind(null,"head"),C.domAPI=m(),C.insertStyleElement=v(),l()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals,e(),document.querySelector(".home").addEventListener("click",e),document.querySelector(".menu").addEventListener("click",c),document.querySelector(".contact").addEventListener("click",s)})()})();