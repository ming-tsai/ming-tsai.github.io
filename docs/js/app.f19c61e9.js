(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0d28":function(t,e,a){"use strict";a("309c")},1757:function(t,e,a){"use strict";a("1817")},1817:function(t,e,a){},"309c":function(t,e,a){},4602:function(t,e,a){t.exports=a.p+"img/background.f194c53c.gif"},"4b94":function(t,e,a){t.exports=a.p+"img/profile.7bb8629a.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("div",[a("landing-page",{attrs:{id:"home"}}),a("about",{attrs:{id:"about"}})],1)]),a("app-footer",{attrs:{id:"footer"}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"about-container",attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h3",{staticClass:"text-center"},[t._v("ABOUT ME")]),n("p",{staticClass:"text-center subtitle-2"},[n("em",[t._v("eat(); sleep(); code(); repeat();")])])]),n("v-col",{attrs:{sm:"6",align:"center",justify:"center"}},[n("v-avatar",{staticClass:"profile",attrs:{size:t.avatarSize}},[n("v-img",{attrs:{src:a("4b94"),alt:"Ming Tsai"}})],1)],1),n("v-col",{attrs:{sm:"6",cols:"auto",align:"center",justify:"center"}},[n("v-container",[n("p",{staticClass:"text-justify"},[n("span",{staticClass:"subtitle-1 font-weight-medium"},[t._v(" I'm a software developer experienced in frontend and backend development, software architecture, DevOps, and agile methodology. ")]),n("br"),n("span",{staticClass:"body-2"},[t._v(" I enjoy taking complex problems and turning them into simple and beautiful interfaces. I also love the logic structure of coding and always strive to write elegant, efficient, and testable code. ")])]),n("div",{attrs:{id:"languages"}},[n("languages")],1),n("br"),n("div",{staticClass:"text-sm-left text-center"},[n("v-btn",{attrs:{outlined:"",block:t.$vuetify.breakpoint.xsOnly,color:"primary",href:"https://github.com/ming-tsai/ming-tsai/raw/master/docs/curriculum_ming.pdf"}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-arrow-collapse-down ")]),t._v(" View Resume ")],1)],1)])],1)],1)],1)},o=[],c=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"text-justify subtitle-1 font-weight-medium"},[t._v("Languages:")]),t._l(t.languages,(function(e){return a("div",{key:e.name},[a("p",{staticClass:"text-justify"},[a("span",{staticClass:"subtitle-1 font-weight-regular"},[t._v(" "+t._s(e.name)+" ")]),a("span",{staticClass:"body-2 font-weight-light"},[t._v(" ("+t._s(e.value)+") ")])])])}))],2)}),l=[],u={name:"Languages",data:function(){return{languages:[{name:"English",value:"Professional working proficiency"},{name:"Chinese",value:"Native or bilingual proficiency"},{name:"Spanish",value:"Professional working proficiency"}]}}},f=u,d=(a("1757"),a("2877")),p=Object(d["a"])(f,c,l,!1,null,"21f8c023",null),v=p.exports,m={components:{Languages:v},name:"About",computed:{avatarSize:function(){var t="300";switch(this.$vuetify.breakpoint.name){case"xs":case"sm":t="200";break;case"md":t="230";break;case"lg":t="250";break;default:break}return t}}},g=m,b=(a("0d28"),a("6544")),h=a.n(b),x=a("8212"),y=a("8336"),_=a("62ad"),w=a("a523"),k=a("132d"),C=a("adda"),j=a("0fd9"),O=Object(d["a"])(g,s,o,!1,null,"a33dade6",null),V=O.exports;h()(O,{VAvatar:x["a"],VBtn:y["a"],VCol:_["a"],VContainer:w["a"],VIcon:k["a"],VImg:C["a"],VRow:j["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"white--text text-center"},[a("v-card-text",[a("user-medias")],1),a("v-card-text",{staticClass:"white--text"},[a("p",[t._v(" Made with "),a("v-icon",{staticStyle:{color:"red"},attrs:{small:""}},[t._v("mdi-heart")]),t._v(" of "),a("v-icon",{attrs:{small:""}},[t._v("mdi-robot")])],1)])],1)],1)},M=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.medias,(function(e){return a("v-btn",{key:e.icon,staticClass:"white--text",attrs:{icon:"",href:e.link,target:"_blank noopener"}},[a("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1)})),1)},I=[],$=[{link:"https://github.com/ming-tsai",icon:"mdi-github"},{link:"https://linkedin.com/in/ming-tsai",icon:"mdi-linkedin"}],E={data:function(){return{medias:$}}},T=E,A=Object(d["a"])(T,P,I,!1,null,null,null),L=A.exports;h()(A,{VBtn:y["a"],VIcon:k["a"]});var z={components:{UserMedias:L},data:function(){return{}}},B=z,R=(a("df54"),a("b0af")),U=a("99d9"),D=a("553a"),F=Object(d["a"])(B,S,M,!1,null,"605a459e",null),J=F.exports;h()(F,{VCard:R["a"],VCardText:U["a"],VFooter:D["a"],VIcon:k["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{src:a("4602"),height:"100%"}},[n("v-container",{staticStyle:{padding:"10%"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-xl-h1 text-lg-h2 text-h3 mb-4"},[t._v(" Hiya 👋, I'm "),n("span",{staticClass:"text-name font-weight-bold"},[t._v("Ming Tsai")])]),n("h4",{staticClass:"subheading text-xl-h2 text-lg-h4",style:"letter-spacing: "+t.letterSpacing+" !important"},[t._v(" I'm "),n("transition",[t.show?n("span",{attrs:{id:"status"}},[t._v(t._s(t.status[t.index]))]):t._e()])],1)]),n("v-col",{staticClass:"text-sm-left text-center",attrs:{cols:"12"}},[n("user-medias")],1)],1)],1)],1)},N=[],W={components:{UserMedias:L},name:"LandingPage",data:function(){return{status:["Web Developer","Scrum Master"],show:!0,index:0,interval:null,medias:$}},computed:{letterSpacing:function(){var t="12px";switch(this.$vuetify.breakpoint.name){case"xs":case"sm":t="7px";break;case"md":case"lg":t="10px";break;default:break}return t}},created:function(){var t=this;this.interval=setInterval((function(){t.show=!1,t.index++,t.index>=t.status.length&&(t.index=0),setTimeout((function(){t.show=!0}),500)}),5e3)},destroyed:function(){clearInterval(this.interval)}},q=W,G=(a("8d6b"),a("8b9c")),K=Object(d["a"])(q,H,N,!1,null,"1dd01381",null),Q=K.exports;h()(K,{VCol:_["a"],VContainer:w["a"],VParallax:G["a"],VRow:j["a"]});var X={name:"App",components:{LandingPage:Q,About:V,AppFooter:J},data:function(){return{}}},Y=X,Z=(a("034f"),a("7496")),tt=a("f6c4"),et=Object(d["a"])(Y,r,i,!1,null,null,null),at=et.exports;h()(et,{VApp:Z["a"],VMain:tt["a"]});var nt=a("f309");n["a"].use(nt["a"]);var rt=new nt["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:rt,render:function(t){return t(at)}}).$mount("#app")},6443:function(t,e,a){},"85ec":function(t,e,a){},"8d6b":function(t,e,a){"use strict";a("6443")},db00:function(t,e,a){},df54:function(t,e,a){"use strict";a("db00")}});
//# sourceMappingURL=app.f19c61e9.js.map