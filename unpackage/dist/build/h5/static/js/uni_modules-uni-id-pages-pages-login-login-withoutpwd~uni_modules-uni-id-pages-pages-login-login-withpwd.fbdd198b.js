(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-login-login-withoutpwd~uni_modules-uni-id-pages-pages-login-login-withpwd"],{3408:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fab-login-box[data-v-32f38b7c],\r\n.item[data-v-32f38b7c]{display:flex;box-sizing:border-box;flex-direction:column}.fab-login-box[data-v-32f38b7c]{flex-direction:row;flex-wrap:wrap;width:%?750?%;justify-content:space-around;position:fixed;left:0}.item[data-v-32f38b7c]{flex-direction:column;justify-content:center;align-items:center;height:%?200?%;cursor:pointer}@media screen and (min-width:690px){.fab-login-box[data-v-32f38b7c]{max-width:500px;margin-left:calc(50% - 250px)}.item[data-v-32f38b7c]{height:%?160?%}}@media screen and (max-width:690px){.fab-login-box[data-v-32f38b7c]{bottom:%?10?%}}.logo[data-v-32f38b7c]{width:%?60?%;height:%?60?%;max-width:40px;max-height:40px;border-radius:100%;border:solid 1px #f6f6f6}.login-title[data-v-32f38b7c]{text-align:center;margin-top:6px;color:#999;font-size:10px;width:70px}',""]),e.exports=t},5173:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"fab-login-box"},e._l(e.servicesList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),t.path?e.navigateTo(t.path):e.login_before(t.id,!1)}}},[n("v-uni-image",{staticClass:"logo",attrs:{src:t.logo,mode:"scaleToFill"}}),n("v-uni-text",{staticClass:"login-title"},[e._v(e._s(t.text))])],1)})),1)],1)},r=[]},"5f04":function(e,t,n){var i=n("3408");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("18b5315a",i,!0,{sourceMap:!1,shadowMode:!1})},a262:function(e,t,n){"use strict";(function(e){var i=n("4ea4");n("99af"),n("4de4"),n("4160"),n("caad"),n("d3b7"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("1276"),n("498a"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("5530"));n("96cf");var r=i(n("1da1")),a=i(n("b5a8")),u=n("a737"),s=e.database(),c=(s.collection("uni-id-users"),{computed:{agreements:function(){if(!a.default.agreements)return[];var e=a.default.agreements,t=e.serviceUrl,n=e.privacyUrl;return[{url:t,title:"用户服务协议"},{url:n,title:"隐私政策条款"}]},agree:{get:function(){return this.getParentComponent().agree},set:function(e){return this.getParentComponent().agree=e}}},data:function(){return{servicesList:[{id:"username",text:"账号登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/user.png",path:"/uni_modules/uni-id-pages/pages/login/login-withpwd"},{id:"smsCode",text:"短信验证码",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/sms.png",path:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode"},{id:"weixin",text:"微信登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/weixin.png"},{id:"apple",text:"苹果登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/apple.png"},{id:"univerify",text:"一键登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/univerify.png"},{id:"taobao",text:"淘宝登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/taobao.png"},{id:"facebook",text:"脸书登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/facebook.png"},{id:"alipay",text:"支付宝登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/alipay.png"},{id:"qq",text:"QQ登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/qq.png"},{id:"google",text:"谷歌登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/google.png"},{id:"douyin",text:"抖音登录",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/douyin.png"},{id:"sinaweibo",text:"新浪微博",logo:"/uni_modules/uni-id-pages/static/uni-fab-login/sinaweibo.png"}],univerifyStyle:{fullScreen:!0,backgroundColor:"#ffffff",buttons:{iconWidth:"45px",list:[]},privacyTerms:{defaultCheckBoxState:!1,textColor:"#BBBBBB",termsColor:"#5496E3",prefix:"我已阅读并同意",suffix:"并使用本机号码登录",privacyItems:[]}}}},watch:{agree:function(e){this.univerifyStyle.privacyTerms.defaultCheckBoxState=e}},created:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.servicesList,i=a.default.loginTypes,n=n.filter((function(e){return"apple"!=e.id&&i.includes(e.id)})),i.includes("univerify")&&(e.univerifyStyle.privacyTerms.privacyItems=e.agreements,n.forEach((function(t){var n=t.id,i=t.logo,o=t.path;"univerify"!=n&&e.univerifyStyle.buttons.list.push({iconPath:i,provider:n,path:o})}))),e.servicesList=n.filter((function(t){var n=t.path?t.path.split("?")[0]:"";return n!=e.getRoute(1)}));case 5:case"end":return t.stop()}}),t)})))()},methods:{getParentComponent:function(){return this.$parent.$parent},setUserInfo:function(e){},getRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=getCurrentPages();return e>t.length?"":"/"+t[t.length-e].route},navigateTo:function(e){if(this.getRoute(1)==e.split("?")[0]&&"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"==this.getRoute(1)){var t=e.split("?")[1].split("=")[1];uni.$emit("uni-id-pages-set-login-type",t)}else this.getRoute(2)==e?uni.navigateBack():this.getRoute(1)!=e&&uni.navigateTo({url:e,animationType:"slide-in-left",complete:function(e){}})},login_before:function(e){var t=arguments,n=this;return(0,r.default)(regeneratorRuntime.mark((function i(){var o,u,s,c,l,f,d,p,g,h;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(u=!(t.length>1&&void 0!==t[1])||t[1],s=t.length>2&&void 0!==t[2]?t[2]:{},!["qq","xiaomi","sinaweibo","taobao","facebook","google","alipay","douyin"].includes(e)){i.next=5;break}return i.abrupt("return",uni.showToast({title:"该登录方式暂未实现，欢迎提交pr",icon:"none"}));case 5:if(!["univerify","apple"].includes(e)){i.next=7;break}return i.abrupt("return",uni.showToast({title:"当前设备不支持此登录，请选择其他登录方式",icon:"none"}));case 7:if(c=((null===a.default||void 0===a.default||null===(o=a.default.agreements)||void 0===o?void 0:o.scope)||[]).includes("register"),"univerify"==e||!c||n.agree){i.next=13;break}return l=n.getParentComponent().$refs.agreements,i.abrupt("return",l.popup((function(){n.login_before(e,u,s)})));case 13:if("weixin"!=e){i.next=22;break}if(f=location.protocol+"//"+document.domain+(window.location.href.includes("#")?"/#":"")+"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?is_weixin_redirect=true&type=weixin",d=window.navigator.userAgent.toLowerCase(),"micromessenger"!=d.match(/MicroMessenger/i)){i.next=21;break}return i.abrupt("return",window.open("https://open.weixin.qq.com/connect/oauth2/authorize?\n\t\t\t\t\t\t\t\t\t\tappid=".concat(a.default.appid.weixin.h5,"\n\t\t\t\t\t\t\t\t\t\t&redirect_uri=").concat(encodeURIComponent(f),"\n\t\t\t\t\t\t\t\t\t\t&response_type=code\n\t\t\t\t\t\t\t\t\t\t&scope=snsapi_userinfo\n\t\t\t\t\t\t\t\t\t\t&state=STATE&connect_redirect=1#wechat_redirect")));case 21:return i.abrupt("return",location.href="https://open.weixin.qq.com/connect/qrconnect?appid=".concat(a.default.appid.weixin.web,"\n\t\t\t\t\t\t\t\t\t\t\t&redirect_uri=").concat(encodeURIComponent(f),"\n\t\t\t\t\t\t\t\t\t\t\t&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect"));case 22:if(uni.showLoading({mask:!0}),"univerify"!=e){i.next=29;break}return p=function(){uni.hideLoading(),g.close(),g.offButtonsClick(h)},g=uni.getUniverifyManager(),h=function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=3,uni.getCheckBoxState();case 3:i=e.sent[1].state,n.agree=i,o=n.univerifyStyle.buttons.list[t.index].path,o?(n.navigateTo(o),p()):i?(p(),setTimeout((function(){n.login_before(t.provider)}),500)):uni.showToast({title:"你未同意隐私政策协议",icon:"none"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g.onButtonsClick(h),i.abrupt("return",g.login({univerifyStyle:n.univerifyStyle,success:function(e){n.login(e.authResult,"univerify")},fail:function(e){uni.showToast({title:JSON.stringify(e),icon:"none"})},complete:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.hideLoading(),e.next=4,uni.getCheckBoxState();case 4:n.agree=e.sent[1].state,g.offButtonsClick(h);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}));case 29:if("weixinMobile"!==e){i.next=31;break}return i.abrupt("return",n.login({phoneCode:s.phoneNumberCode},e));case 31:uni.login({provider:e,onlyAuthorize:!0,success:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("apple"!=e){t.next=7;break}return t.next=4,n.getUserInfo({provider:"apple"});case 4:o=t.sent,Object.assign(i.authResult,o.userInfo),uni.hideLoading();case 7:n.login("weixin"==e?{code:i.code}:i.authResult,e);case 8:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}(),fail:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.hideLoading();case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 32:case"end":return i.stop()}}),i)})))()},login:function(t,n){var i="loginBy"+n.trim().replace(n[0],n[0].toUpperCase()),o=e.importObject("uni-id-co",{customUI:!0});o[i](t).then((function(e){uni.showToast({title:"登录成功",icon:"none"}),e.loginType=n,u.mutations.loginSuccess(e)})).catch((function(e){uni.showModal({content:e.message,confirmText:"知道了",showCancel:!1})})).finally((function(e){"univerify"==n&&uni.closeAuthView(),uni.hideLoading()}))},doUserProfileNext:function(){try{u.mutations.loginSuccess()}catch(e){}},getUserInfo:function(e){return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){uni.getUserInfo((0,o.default)((0,o.default)({},e),{},{success:function(e){t(e)},fail:function(e){uni.showModal({content:JSON.stringify(e),showCancel:!1}),n(e)}}))})));case 1:case"end":return t.stop()}}),t)})))()}}});t.default=c}).call(this,n("a9ff")["default"])},a610:function(e,t,n){"use strict";n.r(t);var i=n("5173"),o=n("ca12");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("f14e");var a,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"32f38b7c",null,!1,i["a"],a);t["default"]=s.exports},ca12:function(e,t,n){"use strict";n.r(t);var i=n("a262"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},f14e:function(e,t,n){"use strict";var i=n("5f04"),o=n.n(i);o.a}}]);