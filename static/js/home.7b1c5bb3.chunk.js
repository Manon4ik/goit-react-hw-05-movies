"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[177],{713:function(t,e,n){var r=n(861),a=n(757),c=n.n(a),u=n(16),i="https://api.themoviedb.org/3/movie/",s="?api_key=164eadb7baae3a4c5cb507a1aca52aae",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day".concat(s));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t.next=3,u.Z.get("".concat(i+e).concat(s));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t.next=3,u.Z.get("".concat(i+e,"/reviews").concat(s));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t.next=3,u.Z.get("".concat(i+e,"/credits").concat(s));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie".concat(s,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d={fetchTranding:o,fetchMovie:f,fetchReviews:p,fetchCasts:h,fetchMovieSearch:v};e.Z=d},152:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(184);function a(){return(0,r.jsx)("p",{children:"Loading ..."})}},794:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(416),a=n(184);function c(t){var e=t.movies,n=(0,r.TH)();return e&&e.length>0&&(0,a.jsx)("ul",{children:e.map((function(t){return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t.id),state:{from:n.pathname+n.search},children:t.title})},t.id)}))})}},266:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),s=n(713),o=n(152),f=n(794),p=n(184);function h(){var t=s.Z.fetchTranding,e=(0,i.useState)(null),n=(0,a.Z)(e,2),c=n[0],h=n[1],v=(0,i.useState)(null),d=(0,a.Z)(v,2),l=d[0],m=d[1],x=(0,i.useState)(!1),g=(0,a.Z)(x,2),w=g[0],Z=g[1];return t(),(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,t();case 4:n=e.sent,r=n.data,h((null===r||void 0===r?void 0:r.results)||[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),m(e.t0.message||"Something went wrong.");case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),l?(0,p.jsxs)("p",{children:["Error: ",l]}):(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),w?(0,p.jsx)(o.Z,{}):(0,p.jsx)(f.Z,{movies:c})]})}}}]);
//# sourceMappingURL=home.7b1c5bb3.chunk.js.map