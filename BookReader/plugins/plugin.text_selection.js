(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[423],{4529:function(t,e,n){"use strict";n(2222),n(9826),n(1249),n(9601),n(1539),n(4916),n(9714),n(3123),n(5666);var r=n(7775);function o(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a;return null==t?void 0:t.replace(/\{\{([^}]*?)\}\}/g,(function(t,i){if(!i)return t;var u=o(i.split("|").map((function(t){return t.trim()}))),a=u[0],c=u.slice(1);if(!(a in n)&&!(a in e))return t;var s=a in n?n[a]:a in e?e[a]:null;return c.map((function(t){return r[t]})).reduce((function(t,e){return e(t)}),s&&s.toString())}))}n(2526),n(1817),n(2165),n(1038),n(6992),n(5827),n(7042),n(8783),n(5306),n(3210),n(3948);var a={urlencode:encodeURIComponent},c=n(3609);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){d(i,r,o,u,a,"next",t)}function a(t){d(i,r,o,u,a,"throw",t)}u(void 0)}))}}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}var S=window.BookReader,x={enabled:!0,fullDjvuXmlUrl:null,singlePageDjvuXmlUrl:null},P=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,r.vU)(),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,r.G6)();m(this,t),this.options=e,this.optionVariables=n,this.djvuPagesPromise=null,this.svgParagraphElement="text",this.svgWordElement="tspan",this.insertNewlines=o,this.pointerEventsOnParagraph=i,o&&(this.svgParagraphElement="g",this.svgWordElement="text")}var e,n;return w(t,[{key:"init",value:function(){this.options.singlePageDjvuXmlUrl||(this.djvuPagesPromise=c.ajax({type:"GET",url:u(this.options.fullDjvuXmlUrl,this.optionVariables),dataType:"html",error:function(t){}}).then((function(t){try{var e=c.parseXML(t);return e&&c(e).find("OBJECT")}catch(t){return}})))}},{key:"getPageText",value:(n=y(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.options.singlePageDjvuXmlUrl){t.next=4;break}return t.abrupt("return",c.ajax({type:"GET",url:u(this.options.singlePageDjvuXmlUrl,this.optionVariables,{pageIndex:e}),dataType:"html",error:function(t){}}).then((function(t){try{var e=c.parseXML(t);return e&&c(e).find("OBJECT")[0]}catch(t){return}})));case 4:return t.next=6,this.djvuPagesPromise;case 6:if(!(n=t.sent)){t.next=9;break}return t.abrupt("return",n[e]);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"interceptCopy",value:function(t){t[0].addEventListener("copy",(function(t){var e=document.getSelection();t.clipboardData.setData("text/plain",e.toString()),t.preventDefault()}))}},{key:"defaultMode",value:function(t){var e=this;t.classList.remove("selectingSVG"),c(t).on("mousedown.textSelectPluginHandler",(function(n){c(n.target).is(".BRwordElement")&&(n.stopPropagation(),t.classList.add("selectingSVG"),c(t).one("mouseup.textSelectPluginHandler",(function(n){""!=window.getSelection().toString()?(n.stopPropagation(),c(t).off(".textSelectPluginHandler"),e.textSelectingMode(t)):t.classList.remove("selectingSVG")})))}))}},{key:"textSelectingMode",value:function(t){var e=this;c(t).on("mousedown.textSelectPluginHandler",(function(t){c(t.target).is(".BRwordElement")||""!=window.getSelection().toString()&&window.getSelection().removeAllRanges(),t.stopPropagation()})),c(t).on("mouseup.textSelectPluginHandler",(function(n){n.stopPropagation(),""==window.getSelection().toString()&&(c(t).off(".textSelectPluginHandler"),e.defaultMode(t))}))}},{key:"stopPageFlip",value:function(t){var e=this,n=t.find("svg.textSelectionSVG");n.length&&(n.each((function(t,n){return e.defaultMode(n)})),this.interceptCopy(t))}},{key:"createTextLayer",value:(e=y(regeneratorRuntime.mark((function t(e,n){var r,o,i,u,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.find(".textSelectionSVG").length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,this.getPageText(e);case 5:if(r=t.sent){t.next=8;break}return t.abrupt("return");case 8:o=c(r).attr("width"),i=c(r).attr("height"),(u=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("xmlns","http://www.w3.org/2000/svg"),u.setAttribute("viewBox","0 0 ".concat(o," ").concat(i)),n.append(u),u.setAttribute("class","textSelectionSVG"),u.setAttribute("preserveAspectRatio","none"),c(u).css({width:"100%",position:"absolute",height:"100%",top:"0",left:"0"}),c(r).find("PARAGRAPH").each((function(t,e){var n=c(e).find("WORD");if(n.length){var r=document.createElementNS("http://www.w3.org/2000/svg",a.svgParagraphElement);r.setAttribute("class","BRparagElement"),a.pointerEventsOnParagraph&&(r.style.pointerEvents="all");for(var o=[],i=0;i<n.length;i++){var s=n[i],l=h(c(s).attr("coords").split(",").map(parseFloat),4),f=l[0],p=l[1],g=l[2],v=p-l[3];o.push(v);var d=document.createElementNS("http://www.w3.org/2000/svg",a.svgWordElement);if(d.setAttribute("class","BRwordElement"),d.setAttribute("x",f.toString()),d.setAttribute("y",p.toString()),d.setAttribute("textLength",(g-f).toString()),d.setAttribute("lengthAdjust","spacingAndGlyphs"),d.textContent=s.textContent,r.appendChild(d),i<n.length-1){var y=n[i+1],m=h(c(y).attr("coords").split(",").map(parseFloat),4),b=m[0],w=(m[1],m[2],m[3],document.createElementNS("http://www.w3.org/2000/svg",a.svgWordElement));w.setAttribute("class","BRwordElement"),w.setAttribute("x",g.toString()),w.setAttribute("y",p.toString()),b-g>0&&w.setAttribute("textLength",(b-g).toString()),w.setAttribute("lengthAdjust","spacingAndGlyphs"),w.textContent=" ",r.appendChild(w)}i==n.length-1&&a.insertNewlines&&r.appendChild(document.createTextNode("\n"))}o.sort();var S=o[Math.floor(.85*o.length)];r.setAttribute("font-size",S.toString()),u.appendChild(r)}})),this.stopPageFlip(n);case 19:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}(),O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=g(e);if(n){var o=g(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p(this,t)});function o(){return m(this,o),r.apply(this,arguments)}return w(o,[{key:"init",value:function(){var t=Object.assign({},x,this.options.plugins.textSelection);t.enabled&&(this.textSelectionPlugin=new P(t,this.options.vars),this.options.plugins.textSelection=t,this.textSelectionPlugin.init()),l(g(o.prototype),"init",this).call(this)}},{key:"_createPageContainer",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=l(g(o.prototype),"_createPageContainer",this).call(this,t,n);return this.mode!=this.constModeThumb&&t>0&&(null===(e=this.textSelectionPlugin)||void 0===e||e.createTextLayer(t,r)),r}}]),o}(S);window.BookReader=O},7775:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.vendor;return/chrome/i.test(t)&&/google inc/i.test(e)}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return/firefox/i.test(t)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return/safari/i.test(t)&&!/chrome|chromium/i.test(t)}n.d(e,{i7:function(){return r},vU:function(){return o},G6:function(){return i}})},7072:function(t,e,n){var r=n(5112)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[r]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},7235:function(t,e,n){var r=n(857),o=n(6656),i=n(6061),u=n(3070).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||u(e,t,{value:i.f(t)})}},1156:function(t,e,n){var r=n(5656),o=n(8006).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},6091:function(t,e,n){var r=n(7293),o=n(1361);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},3111:function(t,e,n){var r=n(4488),o="["+n(1361)+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),a=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},6061:function(t,e,n){var r=n(5112);e.f=r},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1038:function(t,e,n){var r=n(2109),o=n(8457);r({target:"Array",stat:!0,forced:!n(7072)((function(t){Array.from(t)}))},{from:o})},3210:function(t,e,n){"use strict";var r=n(2109),o=n(3111).trim;r({target:"String",proto:!0,forced:n(6091)("trim")},{trim:function(){return o(this)}})},1817:function(t,e,n){"use strict";var r=n(2109),o=n(9781),i=n(7854),u=n(6656),a=n(111),c=n(3070).f,s=n(9920),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};s(p,l);var g=p.prototype=l.prototype;g.constructor=p;var h=g.toString,v="Symbol(test)"==String(l("test")),d=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(u(f,t))return"";var n=v?e.slice(7,-1):e.replace(d,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},2165:function(t,e,n){n(7235)("iterator")},2526:function(t,e,n){"use strict";var r=n(2109),o=n(7854),i=n(5005),u=n(1913),a=n(9781),c=n(133),s=n(3307),l=n(7293),f=n(6656),p=n(3157),g=n(111),h=n(9670),v=n(7908),d=n(5656),y=n(7593),m=n(9114),b=n(30),w=n(1956),S=n(8006),x=n(1156),P=n(5181),O=n(1236),A=n(3070),j=n(5296),E=n(8880),R=n(1320),k=n(2309),C=n(6200),T=n(3501),D=n(9711),_=n(5112),G=n(6061),N=n(7235),M=n(8003),U=n(9909),B=n(2092).forEach,L=C("hidden"),I="Symbol",V=_("toPrimitive"),X=U.set,H=U.getterFor(I),F=Object.prototype,W=o.Symbol,$=i("JSON","stringify"),J=O.f,z=A.f,Q=x.f,q=j.f,K=k("symbols"),Y=k("op-symbols"),Z=k("string-to-symbol-registry"),tt=k("symbol-to-string-registry"),et=k("wks"),nt=o.QObject,rt=!nt||!nt.prototype||!nt.prototype.findChild,ot=a&&l((function(){return 7!=b(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(F,e);r&&delete F[e],z(t,e,n),r&&t!==F&&z(F,e,r)}:z,it=function(t,e){var n=K[t]=b(W.prototype);return X(n,{type:I,tag:t,description:e}),a||(n.description=e),n},ut=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},at=function(t,e,n){t===F&&at(Y,e,n),h(t);var r=y(e,!0);return h(n),f(K,r)?(n.enumerable?(f(t,L)&&t[L][r]&&(t[L][r]=!1),n=b(n,{enumerable:m(0,!1)})):(f(t,L)||z(t,L,m(1,{})),t[L][r]=!0),ot(t,r,n)):z(t,r,n)},ct=function(t,e){h(t);var n=d(e),r=w(n).concat(pt(n));return B(r,(function(e){a&&!st.call(n,e)||at(t,e,n[e])})),t},st=function(t){var e=y(t,!0),n=q.call(this,e);return!(this===F&&f(K,e)&&!f(Y,e))&&(!(n||!f(this,e)||!f(K,e)||f(this,L)&&this[L][e])||n)},lt=function(t,e){var n=d(t),r=y(e,!0);if(n!==F||!f(K,r)||f(Y,r)){var o=J(n,r);return!o||!f(K,r)||f(n,L)&&n[L][r]||(o.enumerable=!0),o}},ft=function(t){var e=Q(d(t)),n=[];return B(e,(function(t){f(K,t)||f(T,t)||n.push(t)})),n},pt=function(t){var e=t===F,n=Q(e?Y:d(t)),r=[];return B(n,(function(t){!f(K,t)||e&&!f(F,t)||r.push(K[t])})),r};c||(R((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),n=function(t){this===F&&n.call(Y,t),f(this,L)&&f(this[L],e)&&(this[L][e]=!1),ot(this,e,m(1,t))};return a&&rt&&ot(F,e,{configurable:!0,set:n}),it(e,t)}).prototype,"toString",(function(){return H(this).tag})),R(W,"withoutSetter",(function(t){return it(D(t),t)})),j.f=st,A.f=at,O.f=lt,S.f=x.f=ft,P.f=pt,G.f=function(t){return it(_(t),t)},a&&(z(W.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),u||R(F,"propertyIsEnumerable",st,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),B(w(et),(function(t){N(t)})),r({target:I,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(Z,e))return Z[e];var n=W(e);return Z[e]=n,tt[n]=e,n},keyFor:function(t){if(!ut(t))throw TypeError(t+" is not a symbol");if(f(tt,t))return tt[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?b(t):ct(b(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:l((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(v(t))}}),$&&r({target:"JSON",stat:!0,forced:!c||l((function(){var t=W();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(g(e)||void 0!==t)&&!ut(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ut(e))return e}),o[1]=e,$.apply(null,o)}}),W.prototype[V]||E(W.prototype,V,W.prototype.valueOf),M(W,I),T[L]=!0}},0,[[4529,898]]]);
//# sourceMappingURL=plugin.text_selection.js.map