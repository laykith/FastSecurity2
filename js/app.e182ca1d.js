(function(t){function e(e){for(var r,o,s=e[0],l=e[1],u=e[2],f=0,p=[];f<s.length;f++)o=s[f],a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/FastSecurity/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"30d6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("HeroImg"),n("Exterior")],1)},i=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-start"},[r("img",{attrs:{src:n("e347")}})]),r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"navbar-item"},[r("div",{staticClass:"buttons"},[r("a",{staticClass:"button is-light"},[t._v("\n          SV\n        ")]),r("a",{staticClass:"button is-light"},[t._v("\n          EN\n        ")])])])])])}],l={},u=l,c=(n("5dfc"),n("2877")),f=Object(c["a"])(u,o,s,!1,null,null,null);f.options.__file="Navbar.vue";var p=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"display-1"},[t._v("\n        You are special.\n      ")]),n("h2",{staticClass:"display-2"},[t._v("\n        FastSecurity, FS.1.0\n      ")])])])])}],_={},m=_,b=(n("609a"),Object(c["a"])(m,d,v,!1,null,null,null));b.options.__file="HeroImg.vue";var g=b.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("holder-component",[n("template",{slot:"header"},[n("h1",[t._v(" "+t._s(t.title)+" ")]),n("div",{staticClass:"color-line"})]),n("template",{slot:"image"},[n("img",{attrs:{src:t.image,alt:"Image of a cool thing"}})]),n("template",{slot:"text"},[n("h2",[t._v(t._s(t.text))])])],2)},x=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container"},[n("header",[t._t("header",[n("h1",[t._v(" "+t._s(t.title)+" ")])])],2),t._t("image"),n("div",{staticClass:"text"},[t._t("text",[t._v("\n        "+t._s(t.text)+"\n      ")])],2)],2)])},C=[],O={name:"HolderComponent",props:{title:{type:String,required:!1,default:"default"},image:{type:String,required:!1,default:"default"},text:{type:String,required:!1,default:"default"}},data:function(){return{}}},j=O,E=(n("ed46"),Object(c["a"])(j,y,C,!1,null,"182cecc8",null));E.options.__file="HolderComponent.vue";var S=E.exports,w={name:"Exterior",components:{HolderComponent:S},data:function(){return{title:"Exterior",image:"images/exterior.png",text:"The Bike brings exterior to a new level."}}},$=w,H=(n("915e"),Object(c["a"])($,h,x,!1,null,"7cdbf4a8",null));H.options.__file="Exterior.vue";var P=H.exports,k={name:"App",components:{Navbar:p,HeroImg:g,Exterior:P}},I=k,M=(n("034f"),Object(c["a"])(I,a,i,!1,null,null,null));M.options.__file="App.vue";var N=M.exports,T=n("8a03"),q=n.n(T);n("5abe");r["default"].config.productionTip=!1,r["default"].use(q.a),new r["default"]({render:function(t){return t(N)}}).$mount("#app")},"5dfc":function(t,e,n){"use strict";var r=n("30d6"),a=n.n(r);a.a},"609a":function(t,e,n){"use strict";var r=n("ba2e"),a=n.n(r);a.a},"64a9":function(t,e,n){},"915e":function(t,e,n){"use strict";var r=n("d500"),a=n.n(r);a.a},ba2e:function(t,e,n){},d500:function(t,e,n){},e347:function(t,e,n){t.exports=n.p+"img/logo.010ac17c.svg"},ed46:function(t,e,n){"use strict";var r=n("fbf8"),a=n.n(r);a.a},fbf8:function(t,e,n){}});
//# sourceMappingURL=app.e182ca1d.js.map