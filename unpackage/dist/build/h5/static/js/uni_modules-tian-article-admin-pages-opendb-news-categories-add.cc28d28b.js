(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-tian-article-admin-pages-opendb-news-categories-add"],{"78d9":function(t,a,e){"use strict";e.r(a);var n=e("ce1d"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},"83f77":function(t,a,e){"use strict";e.r(a);var n=e("bcc1"),o=e("78d9");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);var r,u=e("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);a["default"]=c.exports},bcc1:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={uniForms:e("c62a").default,uniFormsItem:e("dcd6").default,uniEasyinput:e("a6e4").default,cloudImage:e("a90d").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"name",label:"名称"}},[e("uni-easyinput",{attrs:{placeholder:"类别名称"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("uni-forms-item",{attrs:{name:"description",label:"描述"}},[e("uni-easyinput",{attrs:{placeholder:"类别描述"},model:{value:t.formData.description,callback:function(a){t.$set(t.formData,"description",a)},expression:"formData.description"}})],1),e("uni-forms-item",{attrs:{name:"icon",label:"图标地址"}},[e("cloud-image",{attrs:{placeholder:"类别图标地址"},model:{value:t.formData.icon,callback:function(a){t.$set(t.formData,"icon",a)},expression:"formData.icon"}})],1),e("uni-forms-item",{attrs:{name:"sort",label:"排序"}},[e("uni-easyinput",{attrs:{placeholder:"类别显示顺序",type:"number"},model:{value:t.formData.sort,callback:function(a){t.$set(t.formData,"sort",a)},expression:"formData.sort"}})],1),e("uni-forms-item",{attrs:{name:"sort",label:"排序"}},[e("uni-easyinput",{attrs:{placeholder:"类别显示颜色"},model:{value:t.formData.color,callback:function(a){t.$set(t.formData,"color",a)},expression:"formData.color"}})],1),e("uni-forms-item",{attrs:{name:"article_count",label:"文章数"}},[e("uni-easyinput",{attrs:{placeholder:"该类别下文章数量",type:"number"},model:{value:t.formData.article_count,callback:function(a){t.$set(t.formData,"article_count",a)},expression:"formData.article_count"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},i=[]},ce1d:function(t,a,e){"use strict";(function(t){var n=e("4ea4");e("caad"),e("d3b7"),e("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e("5530")),i=n(e("b1d7")),r=t.database(),u=(r.command,"opendb-news-categories");function c(t){var a={};for(var e in i.default)t.includes(e)&&(a[e]=i.default[e]);return a}var s={data:function(){return{formOptions:{},formData:{name:"",description:"",icon:"",sort:null,color:null,article_count:null,create_date:null},rules:(0,o.default)({},c(["name","description","icon","sort","color","article_count","create_date"]))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(a){t.submitForm(a)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var a=this;r.collection(u).add(t).then((function(t){uni.showToast({title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=s}).call(this,e("a9ff")["default"])}}]);