(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1255],{85148:(r,e,t)=>{"use strict";t.d(e,{Qw:()=>g,jo:()=>b,m$:()=>m,AF:()=>O,WT:()=>v,ns:()=>j,RP:()=>w,aK:()=>h,oP:()=>P});var n=t(75110),u=t(22222),i=t(27361),o=t.n(i),c=t(13311),f=t.n(c);function a(r){return function(r){if(Array.isArray(r))return l(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return l(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function s(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function y(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){d(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function d(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var g=function(r,e){return function(t){return o()(t,"dimension.data[".concat(e,"][").concat(r,"]"))}},p=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return f()(r.dimensions||[],{name:e})},b=function(r,e){return function(t){return g(r.id,e)(t)||p(r,e)}},m=function(r){return(0,n.l2)(r).reduce((function(e,t){var n=b(t,"time")(r);return n?y(y({},e),{},d({},t.id,n)):e}),{})},O=function(r){return(0,n.l2)(r).filter((function(r){return p(r,"time")}))},v=function(r){var e=o()(r,"dimension.currentTime");return e&&e.split("/")[0]},j=function(r){return o()(r,"dimension.offsetTime")},w=function(r){return!!j(r)},h=((0,u.P1)(m,(function(r){return Object.keys(r).reduce((function(e,t){return[].concat(a(e),a(r[t]&&r[t].values||[]))}),[]).sort()||[]})),function(r){return function(e){return a(o()(b(r,"time")(e),"values",[])).sort()}}),P=function(r,e){var t=g(e,"time")(r),n=t&&t.domain&&t.domain.split("--");if(n&&2===n.length)return n&&{start:n[0],end:n[1]};var u=t&&t.domain&&t.domain.split(",");return u&&u.length>0?{start:u[0],end:u[u.length-1]}:null}},31255:(r,e,t)=>{"use strict";t.d(e,{u$:()=>h,_w:()=>P,eO:()=>q,kG:()=>S,P3:()=>D,bq:()=>k,LB:()=>L,b4:()=>T,M0:()=>E,Li:()=>I,Rd:()=>_,g5:()=>C,Sj:()=>M,o:()=>G,eK:()=>z,jY:()=>K,ND:()=>x,OK:()=>N,tU:()=>R,ou:()=>Q,DK:()=>U,Gl:()=>V,uz:()=>W,Ci:()=>$,Ae:()=>B,gz:()=>H,He:()=>Y,P4:()=>X,kd:()=>J,TC:()=>Z,nq:()=>rr,Vf:()=>er,lg:()=>tr});var n=t(91175),u=t.n(n),i=t(27361),o=t.n(i),c=t(13218),f=t.n(c),a=t(75110),l=t(78889),s=t(8316),y=t(52259),d=t(96958),g=t(85148),p=t(74621),b=t(93152),m=t(24260);function O(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function v(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){j(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function j(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var w=a.CA,h=function(r){return o()(r,"featuregrid.selectedLayer")},P=function(r){return r&&r.featuregrid&&r.featuregrid.select},q=function(r){return r&&r.featuregrid&&r.featuregrid.changes},S=function(r){return r&&r.featuregrid&&r.featuregrid.newFeatures},D=function(r){return u()(P(r))},A=function(r){var e=(0,m.Qs)(r);if(e){var t=(0,l.findGeometryProperty)(e);return t&&t.localType}return null},F=["Geometry","GeometryCollection"],k=function(r){return!u()(F.filter((function(e){return A(r)===e})))},L=function(r){return q(r)&&q(r).length>0},T=function(r){return S(r)&&S(r).length>0},E=function(r){return r&&r.featuregrid&&r.featuregrid.filters},I=function(r){return w(r,h(r))},_=function(r){return r&&r.featuregrid&&r.featuregrid.open},C=function(r,e){return o()(E(r),e)},M=function(r){var e=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.title||r.name}(w(r,h(r)));return f()(e)?e[(0,s.Pz)(r)]||e.default||"":e},G=function(r){return((0,m.L)(r)||[]).map((function(e){var t=function(r,e){return o()(r,"featuregrid.attributes[".concat(e.name||e.attribute,"]"))}(r,e);return t?v(v({},e),t):e}))},z=function(r){return r&&r.featuregrid&&r.featuregrid.mode},K=function(r){return(P(r)||[]).length},x=function(r){return(0,d.rK)(q(r))},N=function(r){return function(r){var e=D(r);if(e){var t=(0,d.rK)(q(r));return!((!t[e.id]||null===t[e.id].geometry)&&(t[e.id]&&null===t[e.id].geometry||e._new&&u()(S(r))&&null===u()(S(r)).geometry||(!e._new||!u()(S(r))||null===u()(S(r)).geometry)&&null===e.geometry))}return!1}(r)},R=function(r){return o()(r,"featuregrid.showAgain",!1)},Q=function(r){if(o()(r,"featuregrid.showTimeSync",!1)){var e=h(r);return(0,g.jo)({id:e},"time")(r)}return null},U=function(r){return o()(r,"featuregrid.timeSync",!1)},V=function(r){return o()(r,"featuregrid.showPopoverSync",!0)},W=function(r){return r&&r.featuregrid&&r.featuregrid.saving},$=function(r){return r&&r.featuregrid&&r.featuregrid.saved},B=function(r){return r&&r.featuregrid&&r.featuregrid.drawing},H=function(r){return o()(r,"featuregrid.multiselect",!1)},Y=function(r){return(0,y.isSimpleGeomType)(A(r))},X=function(r){return r.featuregrid&&r.featuregrid.dockSize},J=function(r){var e=w(r,h(r));return e&&e.name||""},Z=function(r){var e=function(r){return o()(w(r,h(r)),"params")}(r);return{viewParams:e&&(e.VIEWPARAMS||e.viewParams||e.viewparams),cqlFilter:e&&(e.CQL_FILTER||e.cqlFilter||e.cql_filter)}},rr=function(r){var e=(0,p.L3)(r),t=function(r){return o()(r,"featuregrid.editingAllowedRoles",["ADMIN"])}(r)||["ADMIN"],n=function(r){return r&&r.featuregrid&&r.featuregrid.canEdit}(r);return(-1!==t.indexOf(e)||n)&&!(0,b.c0)(r)},er=function(r){return o()(r,"featuregrid.pagination")},tr=function(r){return o()(r,"featuregrid.useLayerFilter",!0)}},24260:(r,e,t)=>{"use strict";t.d(e,{qj:()=>O,Bu:()=>v,UM:()=>j,X1:()=>w,L:()=>h,HY:()=>P,Mz:()=>q,F0:()=>S,dc:()=>D,b0:()=>A,hk:()=>F,Qs:()=>k,gy:()=>L,M7:()=>T,VD:()=>E});var n=t(14293),u=t.n(n),i=t(27361),o=t.n(i),c=t(91175),f=t.n(c),a=t(1469),l=t.n(a),s=t(30998),y=t.n(s);function d(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function g(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){p(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function p(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var b=function(r){return o()(r,"query.filterObj.featureTypeName")},m=function(r){return function(e){return o()(e,'query.featureTypes["'.concat(r,'"]'))}},O=function(r,e){return o()(m(e)(r),"original")},v=function(r){return r&&r.query&&r.query.searchUrl},j=function(r){return r&&r.query&&r.query.url},w=function(r){return r&&r.query&&r.query.filterObj},h=function(r){return o()(m(b(r))(r),"attributes")},P=function(r){return o()(r,"query.typeName")},q=function(r){return o()(r,"query.result.features")},S=function(r){var e=o()(r,"query.result");return g(g({},e),{},{features:(e&&e.features||[]).filter((function(r){return!u()(r.geometry)}))})},D=function(r,e){var t=r&&r.query&&r.query.result&&r.query.result.features;return f()(t.filter((function(r){return r.id===e})))},A={startIndex:function(r){return o()(r,"query.filterObj.pagination.startIndex")},maxFeatures:function(r){return o()(r,"query.filterObj.pagination.maxFeatures")},resultSize:function(r){return o()(r,"query.result.features.length")},totalFeatures:function(r){return o()(r,"query.result.totalFeatures")}},F=function(r,e){var t=m(e)(r);return!!(t&&t.attributes&&t.geometry&&t.original)},k=function(r){return O(r,b(r))},L=function(r){return o()(r,"query.featureLoading")},T=function(r){return o()(r,"query.syncWmsFilter",!1)},E=function(r){var e=o()(r,"query.filterObj.crossLayerFilter"),t=o()(r,"query.filterObj.spatialField"),n=o()(r,"query.filterObj.filterFields");return!!(n&&f()(n)||t&&(t.method&&t.operation&&t.geometry||l()(t)&&y()(t,(function(r){return r.method&&r.operation&&r.geometry}))>-1)||e&&e.collectGeometries&&e.operation)}}}]);