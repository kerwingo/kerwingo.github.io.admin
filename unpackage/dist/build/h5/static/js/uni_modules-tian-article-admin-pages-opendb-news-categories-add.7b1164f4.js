(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-tian-article-admin-pages-opendb-news-categories-add"],{"168a":function(t,a,n){"use strict";(function(t){var e=n("4ea4");n("caad"),n("d3b7"),n("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("5530")),o=e(n("dc50")),r=t.database(),u=(r.command,"opendb-news-categories");function s(t){var a={};for(var n in o.default)t.includes(n)&&(a[n]=o.default[n]);return a}var c={data:function(){return{formOptions:{},formData:{name:"",description:"",icon:"",sort:null,article_count:null,create_date:null},rules:(0,i.default)({},s(["name","description","icon","sort","article_count","create_date"]))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(a){t.submitForm(a)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var a=this;r.collection(u).add(t).then((function(t){uni.showToast({title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=c}).call(this,n("a9ff")["default"])},"172f":function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var e={uniForms:n("79af").default,uniFormsItem:n("dde8").default,uniEasyinput:n("096a").default,cloudImage:n("490c").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"uni-container"},[n("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[n("uni-forms-item",{attrs:{name:"name",label:"名称"}},[n("uni-easyinput",{attrs:{placeholder:"类别名称"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),n("uni-forms-item",{attrs:{name:"description",label:"描述"}},[n("uni-easyinput",{attrs:{placeholder:"类别描述"},model:{value:t.formData.description,callback:function(a){t.$set(t.formData,"description",a)},expression:"formData.description"}})],1),n("uni-forms-item",{attrs:{name:"icon",label:"图标地址"}},[n("cloud-image",{attrs:{placeholder:"类别图标地址"},model:{value:t.formData.icon,callback:function(a){t.$set(t.formData,"icon",a)},expression:"formData.icon"}})],1),n("uni-forms-item",{attrs:{name:"sort",label:"排序"}},[n("uni-easyinput",{attrs:{placeholder:"类别显示顺序",type:"number"},model:{value:t.formData.sort,callback:function(a){t.$set(t.formData,"sort",a)},expression:"formData.sort"}})],1),n("uni-forms-item",{attrs:{name:"article_count",label:"文章数"}},[n("uni-easyinput",{attrs:{placeholder:"该类别下文章数量",type:"number"},model:{value:t.formData.article_count,callback:function(a){t.$set(t.formData,"article_count",a)},expression:"formData.article_count"}})],1),n("v-uni-view",{staticClass:"uni-button-group"},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),n("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},o=[]},22662:function(t,a,n){"use strict";n.r(a);var e=n("172f"),i=n("98c3");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);var r,u=n("f0c5"),s=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);a["default"]=s.exports},"98c3":function(t,a,n){"use strict";n.r(a);var e=n("168a"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a}}]);