(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-safety-list"],{"0128":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),e.exports=t},"0623":function(e,t,n){var i=n("0128");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("015ee314",i,!0,{sourceMap:!1,shadowMode:!1})},"0ffc":function(e,t,n){"use strict";n.r(t);var i=n("ea88"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"11d2":function(e,t,n){"use strict";n.r(t);var i=n("9b17"),a=n("9a4a"),r=n("52fd"),o=n("e0e4"),u=n("68f3");t["default"]={en:i,es:a,fr:r,"zh-Hans":o,"zh-Hant":u}},"169d":function(e,t,n){"use strict";var i=n("0623"),a=n.n(i);a.a},"306b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("0645").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[!0===e.showPageSize||"true"===e.showPageSize?n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[e._v(e._s(e.pageSizeRange[e.pageSizeIndex])+" "+e._s(e.piecePerPage))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):e._e(),n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[e._v("共 "+e._s(e.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===e.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[e._v(e._s(e.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[e._v("/"+e._s(e.maxPage||0))]),e._l(e.paper,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":t===e.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=e.$handleEvent(n),e.selectPage(t,i)}}},[n("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:e.currentIndex>=e.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.nextPageText))])]],2)],1)},r=[]},3149:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},"366a":function(e,t,n){"use strict";n.r(t);var i=n("55df"),a=n("81a6");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"690ab064",null,!1,i["a"],o);t["default"]=s.exports},"40ce":function(e,t,n){"use strict";n.r(t);var i=n("306b"),a=n("ed9d");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("169d");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"28de2840",null,!1,i["a"],o);t["default"]=s.exports},"4af1":function(e,t,n){"use strict";(function(e){var i=n("4ea4");n("4160"),n("c975"),n("fb6a"),n("a434"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("2909")),r=n("37dc"),o=i(n("11d2")),u=(0,r.initVueI18n)(o.default),s=u.t,c={load:"load",error:"error"},d={add:"add",replace:"replace"},l={auto:"auto",onready:"onready",manual:"manual"},p=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],f={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var e=JSON.parse(JSON.stringify(this.collection[0]));return e.$db[0].$param[0]}},created:function(){var e=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var t=[];return p.forEach((function(n){t.push(e[n])})),t}),(function(t,n){if(e.paginationInternal.size=e.pageSize,t[0]!==n[0]&&(e.paginationInternal.current=e.pageCurrent),e.loadtime!==l.manual){for(var i=!1,a=2;a<t.length;a++)if(t[a]!==n[a]){i=!0;break}i&&(e.clear(),e.reset()),e._execLoadData()}})),this.manual||this.loadtime!==l.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(e,t){var n=null,i=!1;"object"===typeof e?(e.clear&&(this.pageData===d.replace?this.clear():i=e.clear,this.reset()),void 0!==e.current&&(this.paginationInternal.current=e.current),"function"===typeof t&&(n=t)):"function"===typeof e&&(n=e),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===d.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,a=n.showToast,r=void 0===a||a,o=n.toastTitle,u=n.success,c=n.fail,d=n.complete,l=n.needConfirm,p=void 0===l||l,f=n.needLoading,h=void 0===f||f,g=n.loadingTitle,v=void 0===g?"":g;h&&uni.showLoading({title:v});var m=e.database(this.spaceInfo);i&&(m=m.action(i)),m.collection(this.mainCollection).add(t).then((function(e){u&&u(e),r&&uni.showToast({title:o||s("uniCloud.component.add.success")})})).catch((function(e){c&&c(e),p&&uni.showModal({content:e.message,showCancel:!1})})).finally((function(){h&&uni.hideLoading(),d&&d()}))},remove:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,a=n.success,r=n.fail,o=n.complete,u=n.confirmTitle,c=n.confirmContent,d=n.needConfirm,l=void 0===d||d,p=n.needLoading,f=void 0===p||p,h=n.loadingTitle,g=void 0===h?"":h;e&&e.length&&(l?uni.showModal({title:u||s("uniCloud.component.remove.showModal.title"),content:c||s("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(n){n.confirm&&t._execRemove(e,i,a,r,o,l,f,g)}}):this._execRemove(e,i,a,r,o,l,f,g))},update:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.action,r=i.showToast,o=void 0===r||r,u=i.toastTitle,c=i.success,d=i.fail,l=i.complete,p=i.needConfirm,f=void 0===p||p,h=i.needLoading,g=void 0===h||h,v=i.loadingTitle,m=void 0===v?"":v;g&&uni.showLoading({title:m});var x=e.database(this.spaceInfo);return a&&(x=x.action(a)),x.collection(this.mainCollection).doc(t).update(n).then((function(e){c&&c(e),o&&uni.showToast({title:u||s("uniCloud.component.update.success")})})).catch((function(e){d&&d(e),f&&uni.showModal({content:e.message,showCancel:!1})})).finally((function(){g&&uni.hideLoading(),l&&l()}))},getTemp:function(){var t,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=e.database(this.spaceInfo);this.action&&(i=i.action(this.action)),i=(t=i).collection.apply(t,(0,a.default)(this.collectionArgs)),this.foreignKey&&(i=i.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(i=i.where(this.where)),this.field&&(i=i.field(this.field)),this.groupby&&(i=i.groupBy(this.groupby)),this.groupField&&(i=i.groupField(this.groupField)),!0===this.distinct&&(i=i.distinct()),this.orderby&&(i=i.orderBy(this.orderby));var r=this.paginationInternal,o=r.current,u=r.size,s={};this.getcount&&(s.getCount=this.getcount);var c={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(s.getTree=c),this.gettreepath&&(s.getTreePath=c),i=i.skip(u*(o-1)).limit(u),n?(i=i.getTemp(s),i.udb=this):i=i.get(s),i},setResult:function(e){0===e.code?this._execLoadDataSuccess(e):this._execLoadDataFail(new Error(e.message))},_execLoadData:function(e,t){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,e,t)})).catch((function(t){n.loading=!1,n._execLoadDataFail(t,e)})))},_execLoadDataSuccess:function(e,t,n){var i=e.data,r=e.count;this._isEnded=void 0!==r?this.paginationInternal.current*this.paginationInternal.size>=r:i.length<this.pageSize,this.hasMore=!this._isEnded;var o,u=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=r),t&&t(u,this._isEnded,this.paginationInternal),this._dispatchEvent(c.load,u),this.getone||this.pageData===d.replace)?this.dataList=u:n?this.dataList=u:(o=this.dataList).push.apply(o,(0,a.default)(u))},_execLoadDataFail:function(e,t){this.errorMessage=e,t&&t(),this.$emit(c.error,e)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(t,n,i,a,r,o,u,s){var c=this;if(this.collection&&t){var l=Array.isArray(t)?t:[t];if(l.length){u&&uni.showLoading({mask:!0,title:s});var p=e.database(this.spaceInfo),f=p.command,h=p;n&&(h=h.action(n)),h.collection(this.mainCollection).where({_id:f.in(l)}).remove().then((function(e){i&&i(e.result),c.pageData===d.replace?c.refresh():c.removeData(l)})).catch((function(e){a&&a(e),o&&uni.showModal({content:e.message,showCancel:!1})})).finally((function(){u&&uni.hideLoading(),r&&r()}))}}},removeData:function(e){for(var t=e.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var a=t.indexOf(n[i]._id);a>=0&&(n.splice(i,1),t.splice(a,1))}},_dispatchEvent:function(e,t){this._changeDataFunction?this._changeDataFunction(t,this._isEnded,this.paginationInternal):this.$emit(e,t,this._isEnded,this.paginationInternal)}}};t.default=f}).call(this,n("a9ff")["default"])},"52fd":function(e){e.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"55df":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",[e._v(e._s(e.dateShow))])},r=[]},6674:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},6711:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"68f3":function(e){e.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},"6de9":function(e,t,n){"use strict";n.r(t);var i=n("c466"),a=n("0ffc");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"15102ee3",null,!1,i["a"],o);t["default"]=s.exports},"6e2d":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("744d")),r=i(n("6711")),o=i(n("6674")),u=i(n("8ccc")),s=i(n("3149")),c={en:a.default,es:r.default,fr:o.default,"zh-Hans":u.default,"zh-Hant":s.default};t.default=c},"744d":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"7c09":function(e,t,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("265e"),a={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,i.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var e=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){e.refresh()}),parseInt(this.refreshRate)))}}};t.default=a},"81a6":function(e,t,n){"use strict";n.r(t);var i=n("7c09"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"848e":function(e,t,n){"use strict";n.r(t);var i=n("4af1"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"8ccc":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},"960d":function(e,t,n){"use strict";n.r(t);var i=n("eb7a"),a=n("848e");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=s.exports},"9a4a":function(e){e.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(e){e.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},c466:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniStatBreadcrumb:n("8858").default,unicloudDb:n("960d").default,uniTable:n("b8e7").default,uniTr:n("1e00").default,uniTh:n("a07c").default,uniTd:n("c774").default,uniDateformat:n("366a").default,uniPagination:n("40ce").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:e.$t("common.placeholder.query")},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button hide-on-phone",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.search")))])],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:e.collectionName,orderby:"create_date desc",field:"type, ip, create_date, user_id{username}[0].username as username",options:e.options,where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data,a=t.pagination,r=t.loading,o=t.error;return[n("uni-table",{attrs:{loading:r,emptyText:o.message||"没有更多数据",border:!0,stripe:!0}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[e._v("序号")]),n("uni-th",{attrs:{align:"center"}},[e._v("用户")]),n("uni-th",{attrs:{align:"center"}},[e._v("内容")]),n("uni-th",{attrs:{align:"center"}},[e._v("IP")]),n("uni-th",{attrs:{align:"center"}},[e._v("时间")])],1),e._l(i,(function(t,i){return n("uni-tr",{key:i},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s((a.current-1)*a.size+(i+1)))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.user_id[0]&&t.user_id[0].username||"-"))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.type))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.ip))]),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{date:t.create_date,threshold:[0,0]}})],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":a.size,total:a.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:a.current,callback:function(t){e.$set(a,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},e0e4:function(e){e.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},ea88:function(e,t,n){"use strict";(function(e){n("d81d"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e.database();var i="uni-id-log, uni-id-users",a="create_date",r=["user_id.username","type","ip"],o=20,u=1,s={data:function(){return{query:"",where:"",orderby:a,collectionName:i,options:{pageSize:o,pageCurrent:u}}},methods:{getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return r.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this.getWhere(),t=e===this.where;this.where=e,t&&this.loadData()},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.$refs.udb.loadData({current:e.current})},navigateTo:function(e){var t=this;uni.navigateTo({url:e,events:{refreshData:function(){t.loadData()}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){this.$refs.udb.remove(this.selectedItems())},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){this.$refs.udb.remove(e)}}};t.default=s}).call(this,n("a9ff")["default"])},eb7a:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._t("default",null,{options:e.options,data:e.dataList,pagination:e.paginationInternal,loading:e.loading,hasMore:e.hasMore,error:e.errorMessage})],2)},r=[]},ed9d:function(e,t,n){"use strict";n.r(t);var i=n("f5ce"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},f5ce:function(e,t,n){"use strict";var i=n("4ea4");n("4160"),n("a9e3"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("37dc"),r=i(n("6e2d")),o=(0,a.initVueI18n)(r.default),u=o.t,s={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||u("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||u("uni-pagination.prevText")},nextPageText:function(){return this.nextText||u("uni-pagination.nextText")},maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e},paper:function(){for(var e=this.currentIndex,t=this.pagerCount,n=this.total,i=this.pageSize,a=[],r=[],o=Math.ceil(n/i),u=0;u<o;u++)a.push(u+1);r.push(1);var s=a[a.length-(t+1)/2];return a.forEach((function(n,i){(t+1)/2>=e?n<t+1&&n>1&&r.push(n):e+2<=s?n>e-(t+1)/2&&n<e+(t+1)/2&&r.push(n):(n>e-(t+1)/2||o-t<n)&&n<a[a.length-1]&&r.push(n)})),o>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=s?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(a[a.length-1])):(t+1)/2>=e||e+2<=s||(r.shift(),r.push(a[a.length-1])),r}},watch:{current:{immediate:!0,handler:function(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler:function(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex:function(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange:function(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick:function(){var e=document.querySelector("body");if(e){var t="uni-pagination-picker-show";this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add(t):setTimeout((function(){return e.classList.remove(t)}),300)}},selectPage:function(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}};t.default=s}}]);