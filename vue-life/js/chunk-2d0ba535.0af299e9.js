(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba535"],{3772:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:function(t){e.fieldClick(t,1)},contextmenu:function(t){t.preventDefault(),e.fieldClick(t,0)},mousemove:function(t){t.buttons&&e.fieldClick(t,1&t.buttons)}}},[n("div",{style:{width:e.size.width+"px",height:e.size.height+"px",background:e.colors.background}},[n("div",{style:{background:"transparent",width:e.cells.size+"px",height:e.cells.size+"px",position:"relative",left:"-"+(e.cells.size+e.cells.spacing)+"px",top:"-"+(e.cells.size+e.cells.spacing)+"px","box-shadow":e.shadow}})])])},i=[],l={data:function(){return{colors:{0:"#123",1:"#CDE",background:"#456"}}},computed:{shadow:function(){var e=this;return this.cells.data.map(function(t,n){return t.map(function(t,c){return"".concat(e.cellOffset(c+1),"px ").concat(e.cellOffset(n+1),"px ").concat(e.colors[t])}).join(",")}).join(",")}}},o=l,s=n("2877"),a=Object(s["a"])(o,c,i,!1,null,null,null);a.options.__file="CellFieldShadow.vue";t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0ba535.0af299e9.js.map