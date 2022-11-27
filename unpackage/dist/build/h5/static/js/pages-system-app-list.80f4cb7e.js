(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-app-list"],{"399f":function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("4de4"),n("7db0"),n("d81d"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("7019"),o=n("26cb"),s=t.database(),l="create_date",u=[],d=20,c=1,p={ascending:"asc",descending:"desc"},f={data:function(){return{query:"",where:"",orderby:l,orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:d,pageCurrent:c,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"opendb-app-list.xls",type:"xls",fields:{AppID:"appid","应用名称":"name","应用描述":"description","创建时间":"create_date"}},exportExcelData:[],addAppidLoading:!0,descriptionThWidth:380,buttonThWidth:400}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},computed:(0,i.default)({},(0,o.mapState)("app",["appName","appid"])),methods:{pageSizeChange:function(t){var e=this;this.options.pageSize=t,this.options.pageCurrent=1,this.$nextTick((function(){e.loadData()}))},onqueryload:function(t){var e=this;t.find((function(t){return t.appid===e.appid}))?this.addAppidLoading=!1:this.addCurrentAppid({appid:this.appid,name:this.appName,description:"admin 管理后台",create_date:Date.now()}),this.exportExcelData=t},changeSize:function(t){this.pageSizeIndex=t.detail.value},addCurrentAppid:function(t){var e=this;s.collection("opendb-app-list").add(t).then((function(t){e.loadData(),setTimeout((function(){uni.showModal({content:"检测到数据库中无当前应用, 已自动添加应用: ".concat(e.appName),showCancel:!1})}),500)})).catch((function(t){})).finally((function(){e.addAppidLoading=!1}))},getWhere:function(){var t=this.query.trim();if(!t)return"";var e=new RegExp(t,"i");return u.map((function(t){return e+".test("+t+")"})).join(" || ")},search:function(){var t=this.getWhere();this.where=t,this.loadData()},loadData:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:t})},onPageChanged:function(t){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:t.current})},navigateTo:function(t,e){var n=this;uni.navigateTo({url:t,events:{refreshData:function(){n.loadData(e)}}})},selectedItems:function(){var t=this.$refs.udb.dataList;return this.selectedIndexs.map((function(e){return t[e]._id}))},delTable:function(){var t=this;this.$refs.udb.remove(this.selectedItems(),{success:function(e){t.$refs.table.clearSelection()}})},selectionChange:function(t){this.selectedIndexs=t.detail.index},confirmDelete:function(t){var e=this;this.$refs.udb.remove(t,{confirmContent:"是否删除该应用",success:function(t){e.$refs.table.clearSelection()}})},sortChange:function(t,e){var n=this;this.orderByFieldName=e,t.order?this.orderby=e+" "+p[t.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(t,e){var n=this;this._filter[e]={type:t.filterType,value:t.filter};var a=(0,r.filterToWhere)(this._filter,s.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))},publish:function(t){uni.navigateTo({url:"/pages/system/app/uni-portal/uni-portal?id="+t})}}};e.default=f}).call(this,n("a9ff")["default"])},7019:function(t,e,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=s,e.mpPlatform=e.validator=e.enumConverter=void 0;var i=a(n("3835")),r=a(n("b85c")),o={appid:{rules:[{required:!0},{format:"string"}],label:"AppID"},name:{rules:[{required:!0},{format:"string"}],label:"应用名称"},icon_url:{rules:[{format:"string"}],label:"应用图标"},introduction:{rules:[{format:"string"}],label:"应用简介"},description:{rules:[{format:"string"}],label:"应用描述"},screenshot:{rules:[{format:"array"}],label:"应用截图"},create_date:{rules:[{format:"timestamp"}],label:"发行时间"}};function s(t,e){var n={};for(var a in t){var o=t[a],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(n[a]=new RegExp(l));break;case"select":if(l.length){var u,d=[],c=(0,r.default)(l);try{for(c.s();!(u=c.n()).done;){var p=u.value;d.push(e.eq(p))}}catch(x){c.e(x)}finally{c.f()}n[a]=e.or(d)}break;case"range":if(l.length){var f=l[0],h=l[1];n[a]=e.and([e.gte(f),e.lte(h)])}break;case"date":if(l.length){var v=(0,i.default)(l,2),m=v[0],g=v[1],b=new Date(m),y=new Date(g);n[a]=e.and([e.gte(b),e.lte(y)])}break;case"timestamp":if(l.length){var _=(0,i.default)(l,2),$=_[0],C=_[1];n[a]=e.and([e.gte($),e.lte(C)])}break}}return n}e.validator=o;var l={};e.enumConverter=l;var u={mp_weixin:"微信小程序",mp_alipay:"支付宝小程序",mp_baidu:"百度小程序",mp_toutiao:"字节小程序",mp_qq:"QQ小程序",mp_dingtalk:"钉钉小程序",mp_kuaishou:"快手小程序",mp_lark:"飞书小程序",mp_jd:"京东小程序",quickapp:"快应用"};e.mpPlatform=u},"7adf":function(t,e,n){"use strict";n.r(e);var a=n("399f"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},f8a6:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniStatBreadcrumb:n("242c").default,downloadExcel:n("7f34").default,unicloudDb:n("960d").default,uniTable:n("3ab9").default,uniTr:n("131d").default,uniTh:n("ad1e").default,uniTd:n("4c44").default,uniDateformat:n("84e8").default,uniPagination:n("6953").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:t.$t("common.placeholder.query")},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button hide-on-phone",attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.search")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("./add")}}},[t._v(t._s(t.$t("common.button.add")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini",disabled:!t.selectedIndexs.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delTable.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.batchDelete")))]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:t.exportExcel.fields,data:t.exportExcelData,type:t.exportExcel.type,name:t.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[t._v(t._s(t.$t("common.button.exportExcel")))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"opendb-app-list",field:"appid,name,description,create_date",where:t.where,"page-data":"replace",orderby:t.orderby,getcount:!0,"page-size":t.options.pageSize,"page-current":t.options.pageCurrent,options:t.options,loadtime:"manual"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onqueryload.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data,i=e.pagination,r=e.loading,o=e.error;e.options;return[n("uni-table",{ref:"table",staticClass:"table-pc",attrs:{loading:r||t.addAppidLoading,emptyText:o.message||t.$t("common.empty"),border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"appid")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"appid")}}},[t._v("AppID")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"name")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"name")}}},[t._v("应用名称")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0,width:t.descriptionThWidth},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"description")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"description")}}},[t._v("应用描述")]),n("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"create_date")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"create_date")}}},[t._v("创建时间")]),n("uni-th",{attrs:{align:"center",width:t.buttonThWidth}},[t._v("操作")])],1),t._l(a,(function(e,a){return n("uni-tr",{key:a,attrs:{disabled:e.appid===t.appid}},[n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.appid))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.name))]),n("uni-td",{attrs:{align:"left"}},[t._v(t._s(e.description))]),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:e.create_date}})],1),n("uni-td",{attrs:{align:"center"}},[e.appid===t.appid?n("v-uni-view",[t._v("-")]):n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.publish(e._id)}}},[t._v(t._s(t.$t("common.button.publish")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("/uni_modules/uni-upgrade-center/pages/version/list?appid="+e.appid,!1)}}},[t._v(t._s(t.$t("common.button.version")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("./add?id="+e.appid,!1)}}},[t._v(t._s(t.$t("common.button.edit")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmDelete(e._id)}}},[t._v(t._s(t.$t("common.button.delete")))])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":i.size,total:i.count},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onPageChanged.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.pageSizeChange.apply(void 0,arguments)}},model:{value:i.current,callback:function(e){t.$set(i,"current",e)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},fd46:function(t,e,n){"use strict";n.r(e);var a=n("f8a6"),i=n("7adf");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"b7890fe4",null,!1,a["a"],o);e["default"]=l.exports}}]);