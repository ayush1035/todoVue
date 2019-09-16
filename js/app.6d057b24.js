(function(t){function n(n){for(var e,i,r=n[0],c=n[1],l=n[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,n=0;n<o.length;n++){for(var s=o[n],e=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(e=!1)}e&&(o.splice(n--,1),t=i(i.s=s[0]))}return t}var e={},a={app:0},o=[];function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,n,s){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)i.d(s,e,function(n){return t[n]}.bind(null,e));return s},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/<todoVue>/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,n,s){t.exports=s("56d7")},"034f":function(t,n,s){"use strict";var e=s("64a9"),a=s.n(e);a.a},"56d7":function(t,n,s){"use strict";s.r(n);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{attrs:{id:"app"}},[s("TodoApp")],1)},o=[],i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"container"},[t._m(0),s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10"},[s("div",{staticClass:"form-group has-search"},[s("span",{staticClass:"fa fa-search form-control-feedback"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.task,expression:"todo.task"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter a task"},domProps:{value:t.todo.task},on:{input:function(n){n.target.composing||t.$set(t.todo,"task",n.target.value)}}})])]),s("div",{staticClass:"col-md-1"},[s("button",{staticClass:"btn btn-success",on:{click:t.onAddClick}},[t._v("Add")])]),s("div",{staticClass:"col-md-1"},[s("button",{staticClass:"btn btn-success",on:{click:t.sortTasks}},[t._v("Sort")])])]),s("div",[s("TodoList",{attrs:{tasks:t.tasks},on:{"handle-delete":t.handleDelete,"handle-status":t.handleStatus,"handle-up":t.handleUp,"handle-down":t.handleDown}})],1)])},r=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"row heading"},[s("h1",[t._v("Todo App")])])}],c=(s("55dd"),s("20d6"),function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"container"},t._l(t.tasks,(function(n,e){return s("div",{key:n.id,staticClass:"list row mb-2"},[s("div",{staticClass:"col-md-7",class:n.status?"doneTask":""},[t._v(t._s(n.text))]),s("button",{staticClass:"btn btn-secondary col-md-1 mr-2",class:e>0?"":"hidden",on:{click:function(s){return t.handleUp(n.id)}}},[t._v("Up")]),s("button",{staticClass:"btn btn-secondary col-md-1",class:e!=t.tasks.length-1?"":"hidden",on:{click:function(s){return t.handleDown(n.id)}}},[t._v("Down")]),s("button",{staticClass:"col-md-1 offset-md-1  btn-margin",class:n.status?"btn btn-success":"btn btn-warning",on:{click:function(s){return t.handleStatus(n.id)}}},[t._v(t._s(n.status?"Complete":"Pending"))]),s("button",{staticClass:"col-md-1 offset-md-1 btn btn-danger btn-margin",on:{click:function(s){return t.handleDelete(n.id)}}},[t._v("Delete")])])})),0)}),l=[],u={name:"todolist",props:{tasks:{type:Array}},methods:{handleDelete:function(t){this.$emit("handle-delete",t)},handleStatus:function(t){this.$emit("handle-status",t)},handleUp:function(t){this.$emit("handle-up",t)},handleDown:function(t){this.$emit("handle-down",t)}}},d=u,f=(s("76e1"),s("2877")),p=Object(f["a"])(d,c,l,!1,null,null,null),h=p.exports,v={name:"todoapp",data:function(){return{tasks:[],todo:{task:""}}},methods:{onAddClick:function(){var t={id:(new Date).getTime(),text:this.todo.task,status:0};this.tasks.push(t)},handleDelete:function(t){var n=this.tasks.findIndex((function(n){return n.id==t}));n>=0&&this.tasks.splice(n,1)},handleStatus:function(t){var n=this.tasks.findIndex((function(n){return n.id==t}));if(n>=0){var s=this.tasks[n];s.status=1,this.tasks.splice(n,1,s)}},handleUp:function(t){var n=this.tasks.findIndex((function(n){return n.id==t})),s=this.tasks[n],e=this.tasks[n-1];this.tasks.splice(n,1,e),this.tasks.splice(n-1,1,s)},handleDown:function(t){var n=this.tasks.findIndex((function(n){return n.id==t})),s=this.tasks[n],e=this.tasks[n+1];this.tasks.splice(n,1,e),this.tasks.splice(n+1,1,s)},sortTasks:function(){this.tasks.sort((function(t,n){return n.status-t.status}))}},components:{TodoList:h}},b=v,m=(s("c5f4"),Object(f["a"])(b,i,r,!1,null,null,null)),k=m.exports,_=(s("ab8b"),{name:"app",components:{TodoApp:k}}),g=_,w=(s("034f"),Object(f["a"])(g,a,o,!1,null,null,null)),y=w.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(y)}}).$mount("#app")},"64a9":function(t,n,s){},"76e1":function(t,n,s){"use strict";var e=s("d8d4"),a=s.n(e);a.a},c5f4:function(t,n,s){"use strict";var e=s("c766"),a=s.n(e);a.a},c766:function(t,n,s){},d8d4:function(t,n,s){}});
//# sourceMappingURL=app.6d057b24.js.map