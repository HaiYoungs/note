(function(t){function e(e){for(var n,c,o=e[0],r=e[1],l=e[2],d=0,h=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&h.push(i[c][0]),i[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var r=a[o];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},s=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"0554":function(t,e,a){},"23e2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,i,s,c,o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],u=(a("034f"),a("2877")),d={},h=Object(u["a"])(d,r,l,!1,null,null,null),f=h.exports,m=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NoteHead",{attrs:{isSelSome:!t.addShow,selectNum:t.selectNum,allNum:t.allNum,isgrid:t.isgrid},on:{handSel:t.handleSel,close:t.handleClose,filterChange:t.filtering,changeGrid:t.changeGrid}}),a("ul",{staticClass:"main"},[t.isgrid?a("van-grid",{attrs:{border:!1,"column-num":2,gutter:10}},t._l(t.sortData,(function(e){return a("van-grid-item",{key:e.id},[a("div",{staticClass:"list",class:{grid:t.isgrid},on:{click:function(a){return t.handleClick(e)}}},[a("h4",[t._v(t._s(e.title))]),a("p",[t._v(t._s(t.funcTime(e.timeStamp)))]),e.isStar?a("van-icon",{attrs:{name:"star",id:"star-icon"}}):t._e()],1),t.addShow?t._e():a("div",{staticClass:"checkbox"},[a("van-checkbox",{attrs:{"checked-color":"rgb(28, 182, 118)"},model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"item.checked"}})],1)])})),1):t._e(),t.isgrid?t._e():a("div",t._l(t.sortData,(function(e){return a("li",{key:e.id},[a("div",{staticClass:"list",class:{grid:t.isgrid},on:{click:function(a){return t.handleClick(e)}}},[a("h4",[t._v(t._s(e.title))]),a("p",[t._v(t._s(t.funcTime(e.timeStamp)))]),e.isStar?a("van-icon",{attrs:{name:"star",id:"star-icon"}}):t._e()],1),t.addShow?t._e():a("div",{staticClass:"checkbox"},[a("van-checkbox",{attrs:{"checked-color":"rgb(28, 182, 118)"},model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"item.checked"}})],1)])})),0)],1),a("Add",{directives:[{name:"show",rawName:"v-show",value:t.addShow,expression:"addShow"}]}),t.addShow?t._e():a("div",{staticClass:"del"},[a("van-tabbar",{attrs:{"active-color":"black","inactive-color":"black"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{class:{disabled:!t.isSelect},attrs:{icon:"delete"},on:{click:t.handleDel}},[t._v("删除")]),a("van-tabbar-item",[[a("van-checkbox",{attrs:{"checked-color":"rgb(28, 182, 118)"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],a("span",{staticClass:"span-all"},[t._v("全选")])],2)],1)],1)],1)},p=[],v=(a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("b0c0"),a("2532"),a("159b"),a("e17f"),a("2241")),g=a("ade3"),S=(a("0ec5"),a("21ab")),k=(a("3df5"),a("2830")),w=(a("c3a6"),a("ad06")),O=(a("a52c"),a("2ed4")),j=(a("537a"),a("ac28")),_=(a("3c32"),a("417e")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head"},[t.isSelSome?t._e():a("div",{staticClass:"top"},[a("van-dropdown-menu",{attrs:{"active-color":"#1cb676"}},[a("van-dropdown-item",{attrs:{options:t.options},on:{change:t.filterChange},model:{value:t.dropdownValue,callback:function(e){t.dropdownValue=e},expression:"dropdownValue"}}),a("p",{staticClass:"noteNum"},[t._v(t._s(t.allNum)+" 条笔记")]),a("p",{staticClass:"menuIcon",on:{click:t.handleClick}},[a("van-icon",{staticClass:"ell-icon",attrs:{name:"ellipsis"}})],1)],1)],1),t.isSelSome?a("SelectNum",{attrs:{num:t.selectNum},on:{close:t.handleClose}}):t._e(),a("div",{staticClass:"search"},[a("van-search",{attrs:{id:"search",shape:"round",placeholder:"请输入搜索关键词"},on:{input:t.filterChange},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),a("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消","close-on-click-action":t.closeOnClickAction},on:{cancel:function(t){this.show=!1},select:t.handleSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},x=[],$=(a("2cbd"),a("ab2c")),y=(a("61ae"),a("d314")),D=(a("09d3"),a("2d6d")),L=(a("5852"),a("d961")),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"selNum"},[a("van-icon",{attrs:{name:"cross"},on:{click:t.closeSel}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.num,expression:"!num"}],staticClass:"sel-span"},[t._v("未选择")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.num,expression:"num"}],staticClass:"sel-span"},[t._v("已选择 "+t._s(t.num)+" 项")])],1),a("div",{staticStyle:{height:"45px"}})])},V=[],T={name:"selNum",components:Object(g["a"])({},w["a"].name,w["a"]),props:["num"],methods:{closeSel:function(){this.$emit("close")}}},M=T,A=(a("8782"),Object(u["a"])(M,N,V,!1,null,"489aae67",null)),E=A.exports,P={name:"head",components:(n={SelectNum:E},Object(g["a"])(n,L["a"].name,L["a"]),Object(g["a"])(n,w["a"].name,w["a"]),Object(g["a"])(n,D["a"].name,D["a"]),Object(g["a"])(n,y["a"].name,y["a"]),Object(g["a"])(n,$["a"].name,$["a"]),n),props:["isSelSome","selectNum","allNum","isgrid"],data:function(){return{dropdownValue:0,options:[{text:"全部笔记",value:0,color:"#f7f8fabf",icon:"orders-o"},{text:"我的收藏",value:1,color:"#f7f8fabf",icon:"star-o"}],searchValue:"",show:!1,closeOnClickAction:!0,actions:[]}},created:function(){this.options=this.options.concat(this.$store.state.category),this.actions=[{name:this.isgrid?"列表视图":"宫格视图"},{name:"批量删除"}]},watch:{isgrid:function(t,e){this.actions=[{name:t?"列表视图":"宫格视图"},{name:"批量删除"}]}},methods:{handleSelect:function(t){"批量删除"===t.name?this.$emit("handSel"):this.$emit("changeGrid")},handleClick:function(){this.show=!0},handleClose:function(){this.$emit("close")},filterChange:function(t){this.$emit("filterChange",t)}}},G=P,I=(a("9b75"),Object(u["a"])(G,C,x,!1,null,"8412da40",null)),q=I.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-btn",on:{click:function(e){return t.handleClick(null)}}},[a("span",[t._v("+")])])},H=[],J={name:"add",components:Object(g["a"])({},w["a"].name,w["a"]),methods:{handleClick:function(t){this.$router.push({path:"/detail",query:{id:t}})}}},z=J,F=(a("854c"),Object(u["a"])(z,B,H,!1,null,"568bf5ca",null)),K=F.exports,Q={name:"list",components:(i={NoteHead:q,Add:K},Object(g["a"])(i,_["a"].name,_["a"]),Object(g["a"])(i,j["a"].name,j["a"]),Object(g["a"])(i,O["a"].name,O["a"]),Object(g["a"])(i,w["a"].name,w["a"]),Object(g["a"])(i,k["a"].name,k["a"]),Object(g["a"])(i,S["a"].name,S["a"]),i),data:function(){return{newDataList:this.$store.state.dataList,addShow:!0,active:0,isAll:!1}},computed:{status:{get:function(){return this.newDataList.filter((function(t){return t.checked})).length===this.newDataList.length},set:function(t){this.newDataList.map((function(e){return e.checked=t,e}))}},isSelect:function(){return 0!==this.newDataList.filter((function(t){return t.checked})).length},selectNum:function(){return this.newDataList.filter((function(t){return t.checked})).length},allNum:function(){return this.newDataList.length},funcTime:function(){return function(t){var e=6e4,a=36e5,n=864e5,i=new Date(t),s=i.getMonth()+1,c=i.getDate(),o=i.getHours(),r=i.getMinutes()>=10?i.getMinutes():"0".concat(i.getMinutes()),l=(new Date).getTime()-t,u=l/e,d=l/a,h=l/n;return h>=1?"".concat(s," 月 ").concat(c," 日 ").concat(o,":").concat(r):d>=1?"".concat(parseInt(d)," 小时前"):u>=1?"".concat(parseInt(u)," 分钟前"):"刚刚"}},sortData:function(){return this.newDataList.sort(this.sortNum)},isgrid:function(){return this.$store.state.isgrid}},methods:{handleClick:function(t){this.$router.push({path:"/detail",query:{id:t.id}})},handleDel:function(){var t=this;this.isSelect&&v["a"].confirm({title:"警告",message:"是否删除所选项？",confirmButtonColor:"rgb(28, 182, 118)"}).then((function(){var e=t.newDataList.filter((function(t){return!1===t.checked}));t.newDataList=e,t.$store.commit("delSome",e)})).catch((function(){}))},handleSel:function(){this.addShow=!1},handleClose:function(){this.addShow=!0,this.newDataList.forEach((function(t){t.checked=!1}))},filtering:function(t){if("number"===typeof t)this.newDataList=0===t?this.$store.state.dataList:1===t?this.$store.state.dataList.filter((function(t){return t.isStar})):this.$store.state.dataList.filter((function(e){return e.belongs===t}));else if(t){var e=this.$store.state.dataList.filter((function(e){return e.title.includes(t)||e.content.includes(t)}));this.newDataList=e}},sortNum:function(t,e){return e.timeStamp-t.timeStamp},changeGrid:function(){this.$store.commit("changeGrid")}}},R=Q,U=(a("f5e8"),Object(u["a"])(R,b,p,!1,null,"55197405",null)),W=U.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"top"},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:t.back}}),a("van-icon",{staticClass:"save-btn",attrs:{name:"success",color:t.isValued?"black":"#9697999e"},on:{click:t.handleSave}})],1),a("h1",[a("van-field",{attrs:{id:"title",placeholder:"便签标题"},on:{input:t.inputChange},model:{value:t.dataObj.title,callback:function(e){t.$set(t.dataObj,"title",e)},expression:"dataObj.title"}})],1),a("div",{staticClass:"time"},[a("van-dropdown-menu",{attrs:{"active-color":"#1cb676"}},[a("van-dropdown-item",{attrs:{options:t.category},model:{value:t.dataObj.belongs,callback:function(e){t.$set(t.dataObj,"belongs",e)},expression:"dataObj.belongs"}}),a("span",[t._v(t._s(t.funcTime))])],1)],1),a("div",{staticClass:"content"},[a("van-field",{attrs:{type:"textarea",autofocus:"true"},on:{input:t.inputChange},model:{value:t.dataObj.content,callback:function(e){t.$set(t.dataObj,"content",e)},expression:"dataObj.content"}})],1),a("div",{staticStyle:{height:"50px"}},[a("ToolBar",{attrs:{isStar:this.dataObj.isStar,isValued:this.isValued,isAdd:this.isAdd},on:{toggleStar:t.toggleStar,del:t.del}})],1)])},Y=[],Z=(a("e7e5"),a("d399")),tt=(a("be7f"),a("565f")),et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabbar",t._b({attrs:{"active-color":t.isStar?"rgb(28, 182, 118":"#646566"}},"van-tabbar",t.active,!1),[a("van-tabbar-item",{attrs:{icon:"star-o"},on:{click:t.toggleStar}},[t._v(t._s(t.starText))]),a("van-tabbar-item",{attrs:{icon:"friends-o"}},[t._v("分享")]),a("van-tabbar-item",{attrs:{icon:"delete"},on:{click:t.handleDel}},[t._v("删除")])],1)],1)},at=[],nt={name:"tool",components:(s={},Object(g["a"])(s,j["a"].name,j["a"]),Object(g["a"])(s,O["a"].name,O["a"]),Object(g["a"])(s,Z["a"].name,Z["a"]),s),props:["isStar"],data:function(){return{active:0}},computed:{starText:function(){return this.isStar?"取消收藏":"收藏"}},methods:{handleDel:function(){var t=this;v["a"].confirm({confirmButtonColor:"rgb(28, 182, 118)",title:"提示",message:"是否删除此便签？"}).then((function(){t.$emit("del")})).catch((function(){}))},toggleStar:function(){this.isStar=!this.isStar,this.$emit("toggleStar")}}},it=nt,st=Object(u["a"])(it,et,at,!1,null,"1b98e24c",null),ct=st.exports,ot={name:"detail",components:(c={},Object(g["a"])(c,w["a"].name,w["a"]),Object(g["a"])(c,tt["a"].name,tt["a"]),Object(g["a"])(c,Z["a"].name,Z["a"]),Object(g["a"])(c,y["a"].name,y["a"]),Object(g["a"])(c,D["a"].name,D["a"]),Object(g["a"])(c,"ToolBar",ct),c),data:function(){return{isValued:void 0,isValChanged:!1,dataObj:{},category:this.$store.state.category}},created:function(){var t={id:this.$store.state.currentId,title:"",cate:"未分类",belongs:2,isStar:!1,content:"",timeStamp:(new Date).getTime(),checked:!1},e=this.$route.query.id,a=this.$store.state.dataList.filter((function(t){return t.id===e}));this.dataObj=null===e?t:a[0]},computed:{isAdd:function(){return null===this.$route.query.id},funcTime:function(){var t=this.dataObj.timeStamp,e=new Date(t),a=e.getMonth()+1,n=e.getDate(),i=e.getHours(),s=e.getMinutes()>=10?e.getMinutes():"0".concat(e.getMinutes());return new Date(t).toDateString()===(new Date).toDateString()?"今天 ".concat(i,":").concat(s):"".concat(a," 月 ").concat(n," 日 ").concat(i,":").concat(s)}},watch:{dataObj:{handler:function(t,e){""===t.title&&""===t.content?this.isValued=!1:this.isValued=!0},deep:!0,immediate:!0}},methods:{back:function(){this.isValued?(this.save(),this.$router.push({path:"/"})):this.del()},save:function(){var t=(new Date).getTime();""===this.dataObj.title&&(this.dataObj.title=this.dataObj.content.substr(0,15)),!0===this.isAdd?(this.dataObj.timeStamp=t,this.$store.commit("add",this.dataObj)):(this.isValChanged&&(this.dataObj.timeStamp=t),this.$store.commit("alter",this.dataObj))},handleSave:function(){this.isValued&&Object(Z["a"])("已保存")},toggleStar:function(){this.dataObj.isStar?this.dataObj.isStar=!1:this.dataObj.isStar=!0,!1===this.isAdd&&this.$store.commit("alter",this.dataObj)},del:function(){this.isAdd||this.$store.commit("del",this.dataObj.id),this.$router.push({path:"/"})},inputChange:function(){this.isValChanged||(this.isValChanged=!0)}}},rt=ot,lt=(a("c051"),Object(u["a"])(rt,X,Y,!1,null,"e08529b8",null)),ut=lt.exports;o["a"].use(m["a"]);var dt=[{path:"/",name:"List",component:W},{path:"/detail",name:"Detail",component:ut}],ht=new m["a"]({routes:dt}),ft=ht,mt=(a("a434"),a("2f62"));o["a"].use(mt["a"]);var bt=new mt["a"].Store({state:{dataList:[{id:0,title:"示例便签",belongs:4,isStar:!1,timeStamp:1587036860389,content:"示例便签",checked:!1},{id:1,title:"示例便签",belongs:4,isStar:!1,timeStamp:1524136860389,content:"示例便签",checked:!1},{id:2,title:"示例便签",belongs:3,isStar:!1,timeStamp:1524676860389,content:"示例便签",checked:!1},{id:3,title:"示例便签",belongs:2,isStar:!1,timeStamp:1112676860389,content:"示例便签",checked:!1},{id:4,title:"收藏",belongs:2,isStar:!0,timeStamp:1524621460389,content:"示例便签",checked:!1}],currentId:5,category:[{value:2,icon:"bookmark-o",color:"#f7f8fabf",text:"未分类"},{value:3,icon:"bookmark-o",color:"#ff976ac4",text:"旅游"},{value:4,icon:"bookmark-o",color:"#1989fac7",text:"个人"},{value:5,icon:"bookmark-o",color:"#07c160c7",text:"生活"},{value:6,icon:"bookmark-o",color:"#ee0a24c2",text:"工作"}],isgrid:!1},mutations:{alter:function(t,e){t.dataList.forEach((function(a,n){a.id===e.id&&t.dataList.splice(n,1,e)}))},add:function(t,e){t.dataList.unshift(e),t.currentId++},del:function(t,e){t.dataList.forEach((function(a,n){a.id===e&&t.dataList.splice(n,1)}))},delSome:function(t,e){t.dataList=e},changeGrid:function(t){t.isgrid=!t.isgrid}},actions:{},modules:{}});a("9463");o["a"].config.productionTip=!1,new o["a"]({router:ft,store:bt,render:function(t){return t(f)}}).$mount("#app")},"854c":function(t,e,a){"use strict";var n=a("0554"),i=a.n(n);i.a},"85ec":function(t,e,a){},8782:function(t,e,a){"use strict";var n=a("e3e4"),i=a.n(n);i.a},9463:function(t,e,a){},"9b75":function(t,e,a){"use strict";var n=a("23e2"),i=a.n(n);i.a},"9cda":function(t,e,a){},a98d:function(t,e,a){},c051:function(t,e,a){"use strict";var n=a("9cda"),i=a.n(n);i.a},e3e4:function(t,e,a){},f5e8:function(t,e,a){"use strict";var n=a("a98d"),i=a.n(n);i.a}});
//# sourceMappingURL=app.d4d673b7.js.map