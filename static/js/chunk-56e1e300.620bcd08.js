(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56e1e300"],{"4dfb":function(s,a,t){"use strict";var e=t("56be"),r=t.n(e);r.a},"56be":function(s,a,t){},9406:function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"dashboard-container"},[t("h1",[s._v("进度一览")]),s._v(" "),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"cardTitle",attrs:{slot:"header"},slot:"header"},[t("span",[s._v("样式")])]),s._v(" "),s._l(s.styleCard,(function(a,e){return t("div",{key:e},[t("el-row",{staticClass:"cardRow"},[t("el-col",{attrs:{span:6}},[s._v("\n          "+s._s(a.name)+"\n        ")]),s._v(" "),t("el-col",{attrs:{span:18}},[t("el-progress",{attrs:{percentage:a.progress}})],1)],1)],1)}))],2),s._v(" "),t("br"),s._v(" "),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"cardTitle",attrs:{slot:"header"},slot:"header"},[t("span",[s._v("数据")])]),s._v(" "),s._l(s.dataCard,(function(a,e){return t("div",{key:e},[t("el-row",{staticClass:"cardRow"},[t("el-col",{attrs:{span:6}},[s._v("\n          "+s._s(a.name)+"\n        ")]),s._v(" "),t("el-col",{attrs:{span:18}},[t("el-progress",{attrs:{percentage:a.progress}})],1)],1)],1)}))],2),s._v(" "),t("br"),s._v(" "),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"cardTitle",attrs:{slot:"header"},slot:"header"},[t("span",[s._v("其它")])]),s._v(" "),s._l(s.totalCard,(function(a,e){return t("div",{key:e},[t("el-row",{staticClass:"cardRow"},[t("el-col",{attrs:{span:6}},[s._v("\n          "+s._s(a.name)+"\n        ")]),s._v(" "),t("el-col",{attrs:{span:18}},[t("el-progress",{attrs:{percentage:a.progress,status:a.status}})],1)],1)],1)}))],2)],1)},r=[],n=t("db72"),c=t("2f62"),o=t("c00a"),l={name:"Dashboard",components:{"svg-icon":o["a"]},data:function(){return{activeName:"first",styleCard:[{name:"武器",progress:80},{name:"怪物",progress:50}],dataCard:[{name:"武器",progress:5},{name:"怪物",progress:3}],totalCard:[{name:"路由调整",progress:40},{name:"删除登录功能",progress:100,status:"success"},{name:"小图标转换Svg",progress:0}]}},computed:Object(n["a"])({},Object(c["b"])(["name"]))},d=l,i=(t("4dfb"),t("2877")),p=Object(i["a"])(d,e,r,!1,null,"73b7f008",null);a["default"]=p.exports}}]);