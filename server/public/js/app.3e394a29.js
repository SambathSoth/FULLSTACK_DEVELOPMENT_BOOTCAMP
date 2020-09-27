(function(t){function e(e){for(var r,c,i=e[0],o=e[1],u=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1166:function(t,e,n){},"231c":function(t,e,n){"use strict";var r=n("4032"),a=n.n(r);a.a},4032:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("h2",{staticClass:"center-align"},[t._v("Latest Task")]),n("TaskComponent")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"container"},[n("div",{staticClass:"nav-wrapper"},[n("a",{staticClass:"brand-logo",attrs:{href:"#"}},[t._v("Task")]),n("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[n("li",[n("a",{attrs:{href:"#"}},[t._v("Home")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("About")])])])])])])}],c=(n("8266"),n("6885"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[n("div",{staticClass:"col s6 offset-s3"},[n("div",{staticClass:"input-field"},[n("label",{attrs:{for:"task"}},[t._v("Task")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],class:[t.errors.task?"invalid":"validate"],attrs:{type:"text",name:"task"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),n("span",{staticClass:"helper-text",attrs:{"data-error":"Task must not be empty"}})]),n("button",{staticClass:"waves-effect waves-light btn",attrs:{type:"submit"}},[t._v("Add")])])])]),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("Task",{attrs:{tasks:t.tasks},on:{"delete-task":t.deleteTask}})],1)}),i=[],o=(n("b64b"),n("498a"),n("96cf"),n("1da1")),u=(n("d81d"),n("d3b7"),n("5530")),l=n("d4ec"),f=n("bee2"),p=n("bc3a"),d=n.n(p),v="api/tasklist/",k=function(){function t(){Object(l["a"])(this,t)}return Object(f["a"])(t,null,[{key:"getTask",value:function(){return new Promise((function(t,e){d.a.get(v).then((function(e){var n=e.data;t(n.map((function(t){return Object(u["a"])(Object(u["a"])({},t),{},{dateCreate:Date()})})))})).catch((function(t){return e(t)}))}))}},{key:"insertTask",value:function(t){return d.a.post(v,{task:t})}},{key:"deleteTask",value:function(t){return d.a.delete("".concat(v).concat(t))}}]),t}(),m=k,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},t._l(t.tasks,(function(e,r){return n("div",{key:e._id,staticClass:"col s6 offset-s3",attrs:{item:e,index:r},on:{dblclick:function(n){return t.$emit("delete-task",[e._id])}}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("span",{staticClass:"timestamp"},[n("p",{staticClass:"center-align"},[t._v(t._s(t._f("formatDate")(e.dateCreate)))])]),n("span",{staticClass:"card-title"},[n("p",{staticClass:"center-align"},[t._v(t._s(e.task))])])])])])})),0)])},h=[],g=(n("99af"),{name:"Task",props:["tasks"],filters:{formatDate:function(t){t=new Date(t);var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(e,"-").concat(n,"-").concat(r)}}}),_=g,w=(n("231c"),n("2877")),T=Object(w["a"])(_,b,h,!1,null,"4b03d27e",null),y=T.exports,C={name:"TaskComponent",components:{Task:y},data:function(){return{tasks:[],errors:{},error:"",task:""}},methods:{createTask:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.validForm()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,m.insertTask(t.task);case 4:return e.next=6,m.getTask();case 6:t.tasks=e.sent,t.task="";case 8:case"end":return e.stop()}}),e)})))()},deleteTask:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,m.deleteTask(t);case 2:return n.next=4,m.getTask();case 4:e.tasks=n.sent;case 5:case"end":return n.stop()}}),n)})))()},validForm:function(){return this.errors={},""===this.task.trim()&&(this.errors.task="Task"),!(Object.keys(this.errors).length>0)}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getTask();case 3:t.tasks=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.err=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},x=C,O=(n("cde2"),Object(w["a"])(x,c,i,!1,null,"5a3f8bf8",null)),j=O.exports,P={name:"App",components:{TaskComponent:j}},D=P,R=Object(w["a"])(D,a,s,!1,null,null,null),$=R.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},cde2:function(t,e,n){"use strict";var r=n("1166"),a=n.n(r);a.a}});
//# sourceMappingURL=app.3e394a29.js.map