(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b1fae3d"],{"54bc":function(t,e,a){},"556b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex col-12 p-0"},[this.$store.state.items?a("div",{staticClass:"d-flex col-12 m-0 p-0"},["index"===t.type?a("div",{staticClass:"row d-flex justify-content-around justify-content-lg-between p-0"},t._l(this.$store.state.items.slice(0,8),(function(t){return a("Item",{key:t.id,attrs:{type:"catalog",item:t}})})),1):t._e(),"singlePage"===t.type?a("div",{staticClass:"row d-flex col-12 justify-content-around justify-content-lg-between p-0"},t._l(this.$store.state.items.slice(0,4),(function(t){return a("Item",{key:t.id,attrs:{type:"catalog",item:t}})})),1):t._e(),"products"===t.type?a("div",{staticClass:"row d-flex col-12 justify-content-around justify-content-lg-between p-0 mx-0 my-2"},[t._m(0),a("div",{staticClass:"row d-flex col-12 p-0 mx-0 my-2 justify-content-around justify-content-lg-between"},[a("transition-group",{staticClass:"row d-flex justify-content-center justify-content-lg-around",attrs:{name:"list"}},t._l(t.collections,(function(t){return a("Item",{key:t.id,staticClass:"list-item",attrs:{type:"catalog",item:t}})})),1)],1),a("div",{staticClass:"paginationProduct col-12 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between"},[a("nav",{staticClass:"p-0",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link page-list",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.setPage(--t.pagination.currentPage)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.pages,(function(e,s){return a("li",{key:s,staticClass:"page-item",on:{click:function(a){return a.preventDefault(),t.setPage(e)}}},[a("a",{staticClass:"page-link page-num",attrs:{href:"#"}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link page-list",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.setPage(++t.pagination.currentPage)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]),a("button",{attrs:{type:"button"}},[t._v(" View All ")])])]):t._e()]):a("div",[a("h3",[t._v("Not Products")])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sortProd row col-12 d-flex align-items-center px-3 my-3"},[a("button",{staticClass:"btn btn-outline-secondary py-0",attrs:{type:"button"}},[t._v("Sort By")]),a("select",{staticClass:"custom-select col-2 px-1 mx-2  py-0"},[a("option",{attrs:{selected:""}},[t._v("Name")]),a("option",{attrs:{value:"1"}},[t._v("Name")])]),a("button",{staticClass:"btn btn-outline-secondary py-0",attrs:{type:"button"}},[t._v("Show")]),a("select",{staticClass:"custom-select col-2 px-1 mx-2 py-0"},[a("option",{attrs:{selected:""}},[t._v("3")]),a("option",{attrs:{value:"1"}},[t._v("6")]),a("option",{attrs:{value:"2"}},[t._v("9")]),a("option",{attrs:{value:"3"}},[t._v("12")])])])}],i=(a("fb6a"),a("d3b7"),a("2ef0")),o=a.n(i),r=function(){return a.e("chunk-2d0d3ad3").then(a.bind(null,"5e7d"))},l={components:{Item:r,lodash:o.a},props:{type:{type:String,default:"index"}},data:function(){return{pagination:{}}},computed:{collections:function(){return this.$store.commit("filterItem",this.$store.state.priceFilter),this.paginate(this.$store.state.itemsFiltered)}},methods:{setPage:function(t){this.pagination=this.paginator(this.$store.state.items.length,t)},paginate:function(t){return o.a.slice(t,this.pagination.startIndex,this.pagination.endIndex+1)},paginator:function(t,e){var a=(e-1)*this.$store.state.qItemPages,s=Math.min(a+this.$store.state.qItemPages-1,t-1);return{currentPage:e,startIndex:a,endIndex:s,pages:o.a.range(1,Math.ceil(t/this.$store.state.qItemPages)+1)}}},created:function(){this.setPage(1)},mounted:function(){this.$store.commit("getCatalog")}},c=l,u=(a("bf73"),a("2877")),p=Object(u["a"])(c,s,n,!1,null,null,null);e["default"]=p.exports},bf73:function(t,e,a){"use strict";var s=a("54bc"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-2b1fae3d.93874aff.js.map