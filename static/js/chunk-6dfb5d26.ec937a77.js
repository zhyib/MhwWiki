(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dfb5d26"],{"08b0":function(a,s,t){},9406:function(a,s,t){"use strict";t.r(s);var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"dashboard-container"},[t("h1",[a._v("进度一览")]),a._v(" "),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"cardTitle",attrs:{slot:"header"},slot:"header"},[t("span",[a._v("样式")])]),a._v(" "),a._l(a.styleCard,(function(s,e){return t("div",{key:e},[t("el-row",{staticClass:"cardRow"},[t("el-col",{attrs:{span:a.leftSpan}},[a._v("\n          "+a._s(s.name)+"\n        ")]),a._v(" "),t("el-col",{attrs:{span:a.rightSpan}},[t("el-progress",{attrs:{percentage:s.progress}})],1)],1)],1)}))],2),a._v(" "),t("br"),a._v(" "),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"cardTitle",attrs:{slot:"header"},slot:"header"},[t("span",[a._v("数据")])]),a._v(" "),a._l(a.dataCard,(function(s,e){return t("div",{key:e},[t("el-row",{staticClass:"cardRow"},[t("el-col",{attrs:{span:a.leftSpan}},[a._v("\n          "+a._s(s.name)+"\n        ")]),a._v(" "),t("el-col",{attrs:{span:a.rightSpan}},[t("el-progress",{attrs:{percentage:s.progress}})],1)],1)],1)}))],2),a._v(" "),t("br"),a._v(" "),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"cardTitle",attrs:{slot:"header"},slot:"header"},[t("span",[a._v("其它")])]),a._v(" "),a._l(a.totalCard,(function(s,e){return t("div",{key:e},[t("el-row",{staticClass:"cardRow"},[t("el-col",{attrs:{span:a.leftSpan}},[a._v("\n          "+a._s(s.name)+"\n        ")]),a._v(" "),t("el-col",{attrs:{span:a.rightSpan}},[t("el-progress",{attrs:{percentage:s.progress,status:s.status}})],1)],1)],1)}))],2)],1)},r=[],n=t("db72"),c=t("2f62"),l=t("c00a"),o={name:"Dashboard",components:{"svg-icon":l["a"]},data:function(){return{activeName:"first",leftSpan:8,rightSpan:16,styleCard:[{name:"武器",progress:90},{name:"怪物",progress:50}],dataCard:[{name:"武器",progress:5},{name:"怪物",progress:3}],totalCard:[{name:"路由调整",progress:40},{name:"删除登录功能",progress:100,status:"success"},{name:"小图标转换Svg",progress:100,status:"success"}]}},computed:Object(n["a"])({},Object(c["b"])(["name"]))},d=o,i=(t("eaa6"),t("2877")),p=Object(i["a"])(d,e,r,!1,null,"791e9a06",null);s["default"]=p.exports},eaa6:function(a,s,t){"use strict";var e=t("08b0"),r=t.n(e);r.a}}]);