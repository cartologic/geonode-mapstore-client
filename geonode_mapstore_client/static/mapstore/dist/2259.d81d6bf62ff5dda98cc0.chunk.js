(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2259],{52259:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DEFAULT_SCREEN_DPI:()=>$,METERS_PER_UNIT:()=>J,GOOGLE_MERCATOR:()=>Q,EXTENT_TO_ZOOM_HOOK:()=>tt,ZOOM_TO_EXTENT_HOOK:()=>et,RESOLUTIONS_HOOK:()=>nt,RESOLUTION_HOOK:()=>rt,COMPUTE_BBOX_HOOK:()=>ot,GET_PIXEL_FROM_COORDINATES_HOOK:()=>it,GET_COORDINATES_FROM_PIXEL_HOOK:()=>at,registerHook:()=>ct,getHook:()=>lt,executeHook:()=>st,clearHooks:()=>ft,dpi2dpm:()=>Ot,dpi2dpu:()=>pt,getSphericalMercatorScale:()=>dt,getGoogleMercatorScale:()=>gt,getSphericalMercatorScales:()=>mt,getGoogleMercatorScales:()=>_t,getResolutionsForScales:()=>yt,getGoogleMercatorResolutions:()=>vt,getResolutions:()=>Et,getScales:()=>St,getZoomFromResolution:()=>ht,defaultGetZoomForExtent:()=>Tt,getZoomForExtent:()=>bt,getCurrentResolution:()=>Mt,getCenterForExtent:()=>It,getBbox:()=>Rt,isNearlyEqual:()=>xt,mapUpdated:()=>Ct,transformExtent:()=>Ht,groupSaveFormatted:()=>Pt,saveMapConfiguration:()=>wt,generateNewUUIDs:()=>kt,mergeMapConfigs:()=>Nt,addRootParentGroup:()=>Ut,isSimpleGeomType:()=>Gt,getSimpleGeomType:()=>Kt,getIdFromUri:()=>Dt,parseLayoutValue:()=>jt,prepareMapObjectToCompare:()=>Ft,updateObjectFieldKey:()=>Lt,compareMapChanges:()=>At,createRegisterHooks:()=>Xt,default:()=>Zt});var r=n(47037),o=n.n(r),i=n(92742),a=n.n(i),u=n(81763),c=n.n(u),l=n(78718),s=n.n(l),f=n(27361),O=n.n(f),p=n(13311),d=n.n(p),g=n(95395),m=n.n(g),_=n(66604),y=n.n(_),v=n(3674),E=n.n(v),S=n(44908),h=n.n(S),T=n(87185),b=n.n(T),M=n(18446),I=n.n(M),R=n(41609),x=n.n(R),C=n(30998),H=n.n(C),P=n(50361),w=n.n(P),k=n(22762),N=n.n(k),U=n(23570),G=n.n(U),K=n(90183),D=n(61868),j=n(24262),F=n(27418),L=n.n(F),A=["id"],X=["group"];function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function z(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function B(t){return function(t){if(Array.isArray(t))return V(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function W(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(Object(n),!0).forEach((function(e){Y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $=96,J={m:1,degrees:111194.87428468118,ft:.3048,"us-ft":1200/3937},Q={RADIUS:6378137,TILE_WIDTH:256,ZOOM_FACTOR:2},tt="EXTENT_TO_ZOOM_HOOK",et="ZOOM_TO_EXTENT_HOOK",nt="RESOLUTIONS_HOOK",rt="RESOLUTION_HOOK",ot="COMPUTE_BBOX_HOOK",it="GET_PIXEL_FROM_COORDINATES_HOOK",at="GET_COORDINATES_FROM_PIXEL_HOOK",ut={};function ct(t,e){ut[t]=e}function lt(t){return ut[t]}function st(t,e,n){var r=lt(t);return r?e(r):n?n():null}function ft(){ut={}}function Ot(t){return t*(100/2.54)}function pt(t,e){var n=(0,K.getUnits)(e||"EPSG:3857");return J[n]*Ot(t||$)}function dt(t,e,n,r,o){return 2*Math.PI*t/(e*Math.pow(n,r)/Ot(o||$))}function gt(t,e){return dt(Q.RADIUS,Q.TILE_WIDTH,Q.ZOOM_FACTOR,t,e)}function mt(t,e,n,r,o,i){for(var a=[],u=r;u<=o;u++)a.push(dt(t,e,n,u,i));return a}function _t(t,e,n){return mt(Q.RADIUS,Q.TILE_WIDTH,Q.ZOOM_FACTOR,t,e,n)}function yt(t,e,n){var r=pt(n,e);return t.map((function(t){return t/r}))}function vt(t,e,n){return yt(_t(t,e,n),"EPSG:3857",n)}function Et(){return lt("RESOLUTIONS_HOOK")?lt("RESOLUTIONS_HOOK")():vt(0,21,$)}function St(t,e){var n=pt(e,t);return Et().map((function(t){return t*n}))}function ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Et(),n=e.map((function(e,n){return{diff:Math.abs(e-t),zoom:n}})),r=N()(n,"diff"),o=r.zoom;return o}function Tt(t,e,n,r,o,i){var a=t[2]-t[0],u=t[3]-t[1],c=Math.abs(a/e.width),l=Math.abs(u/e.height),s=Math.max(c,l),f=(i||yt(_t(n,r,o||$),"EPSG:3857",o)).reduce((function(t,e,n){var r=Math.abs(e-s);return r>t.diff?t:{diff:r,zoom:n}}),{diff:Number.POSITIVE_INFINITY,zoom:0}).zoom;return Math.max(0,Math.min(f,r))}function bt(t,e,n,r,o){return lt("EXTENT_TO_ZOOM_HOOK")?lt("EXTENT_TO_ZOOM_HOOK")(t,e,n,r,o):Tt(t,e,n,r,o,lt("RESOLUTIONS_HOOK")?lt("RESOLUTIONS_HOOK")(t,e,n,r,o,Ot(o||$)):null)}function Mt(t,e,n,r){return lt("RESOLUTION_HOOK")?lt("RESOLUTION_HOOK")(t,e,n,r):vt(e,n,r)[t]}function It(t,e){var n=(t[2]-t[0])/2,r=(t[3]-t[1])/2;return{x:t[0]+n,y:t[1]+r,crs:e}}function Rt(t,e){return st("COMPUTE_BBOX_HOOK",(function(n){return n(t,e)}))}var xt=function(t,e){return void 0!==t&&void 0!==e&&t.toFixed(12)-e.toFixed(12)==0};function Ct(t,e){var n,r,o,i;return!(!t||x()(t)||!e||x()(e)||xt(null==e||null===(n=e.center)||void 0===n?void 0:n.x,null==t||null===(r=t.center)||void 0===r?void 0:r.x)&&xt(null==e||null===(o=e.center)||void 0===o?void 0:o.y,null==t||null===(i=t.center)||void 0===i?void 0:i.y)&&(null==e?void 0:e.zoom)===(null==t?void 0:t.zoom))}function Ht(t,e,n,r){var o=(0,K.getUnits)(t);return"ft"===o?{width:n/J.ft,height:r/J.ft}:"us-ft"===o?{width:n/J["us-ft"],height:r/J["us-ft"]}:"degrees"===o?{width:n/(111132.92-559.82*Math.cos(2*e.y)+1.175*Math.cos(4*e.y)),height:r/(111412.84*Math.cos(e.y)-93.5*Math.cos(3*e.y))}:{width:n,height:r}}var Pt=function(t){return{id:t.id,title:t.title,description:t.description,tooltipOptions:t.tooltipOptions,tooltipPlacement:t.tooltipPlacement,expanded:t.expanded}};function wt(t,e,n,r,o,i,a){var u={center:t.center,maxExtent:t.maxExtent,projection:t.projection,units:t.units,mapInfoControl:t.mapInfoControl,zoom:t.zoom,mapOptions:t.mapOptions||{}},c=e.map((function(t){return(0,j.z8)(t)})),l=n.reduce((function(t,e){return t.concat((0,j.ar)(e))}),[].concat(n.map((function(t){return t.id})))).map((function(t){var e=(0,j.Mk)(n,t);return e&&e.nodes?Pt(e):null})).filter((function(t){return t})),s=r.filter((function(t){return!!t.thumbnail})),f=(0,j.V5)(c),O=c.map((function(t){return L()({},t,{tileMatrixSet:t.tileMatrixSet&&t.tileMatrixSet.length>0,matrixIds:t.matrixIds&&Object.keys(t.matrixIds)})})),p=H()(O,(function(t){return"annotations"===t.id}));if(-1!==p){var d=O[p].features.map((function(t){return"FeatureCollection"===t.type?q(q({},t),{},{features:t.features.map((function(t){return t.properties.geometryGeodesic?(0,D.t8)("properties.geometryGeodesic",null,t):t}))}):t.properties.geometryGeodesic?(0,D.t8)("properties.geometryGeodesic",null,t):{}}));O[p]=(0,D.t8)("features",d,O[p])}return q({version:2,map:L()({},u,{layers:O,groups:l,backgrounds:s,text_search_config:o,bookmark_search_config:i},!x()(f)&&{sources:f}||{})},a)}var kt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=w()(t),n=q(q({},O()(t,"map.layers",[]).reduce((function(t,e){return q(q({},t),{},Y({},e.id,"annotations"===e.id?e.id:G()()))}),{})),O()(t,"widgetsConfig.widgets",[]).reduce((function(t,e){return q(q({},t),{},Y({},e.id,G()()))}),{}));return(0,D.t8)("map.backgrounds",O()(t,"map.backgrounds",[]).map((function(t){return q(q({},t),{},{id:n[t.id]})})),(0,D.t8)("widgetsConfig",{collapsed:y()(m()(O()(t,"widgetsConfig.collapsed",{}),(function(t,e){return n[e]})),(function(t){return q(q({},t),{},{layouts:y()(t.layouts,(function(t){return q(q({},t),{},{i:n[t.i]})}))})})),layouts:y()(O()(t,"widgetsConfig.layouts",{}),(function(t){return t.map((function(t){return q(q({},t),{},{i:n[t.i]})}))})),widgets:O()(t,"widgetsConfig.widgets",[]).map((function(t){return q(q({},t),{},{id:n[t.id],layer:q(q({},O()(t,"layer",{})),{},{id:n[O()(t,"layer.id")]})})}))},(0,D.t8)("map.layers",O()(t,"map.layers",[]).map((function(t){return q(q({},t),{},{id:n[t.id]})})),e)))},Nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return s()(t,E()(t).filter((function(e){return void 0!==t[e]})))}))},r=kt(e),o=[].concat(B(O()(t,"map.backgrounds",[])),B(O()(r,"map.backgrounds",[]))),i=n(O()(t,"map.layers",[])),a=n(O()(r,"map.layers",[])),u=d()(i,(function(t){return"annotations"===t.id})),c=d()(a,(function(t){return"annotations"===t.id})),l=[].concat(B(a.filter((function(t){return"annotations"!==t.id}))),B(i.filter((function(t){return"annotations"!==t.id}))),B(u||c?[q(q(q({},u||{}),c||{}),{},{features:[].concat(B(O()(u,"features",[])),B(O()(c,"features",[])))})]:[])),f=l.filter((function(t){return"background"===t.group})),p=H()(f,(function(t){return t.visibility})),g=O()(t,"map.sources",{}),m=O()(r,"map.sources",{}),_=q(q({},g),m),y=O()(t,"widgetsConfig",{}),v=O()(r,"widgetsConfig",{});return q(q(q({},r),t),{},{catalogServices:q(q({},O()(t,"catalogServices",{})),{},{services:q(q({},O()(t,"catalogServices.services",{})),O()(r,"catalogServices.services",{}))}),map:q(q(q({},r.map),t.map),{},{backgrounds:o,groups:b()([].concat(B(O()(t,"map.groups",[])),B(O()(r,"map.groups",[]))),(function(t,e){return t.id===e.id})),layers:[].concat(B(f.slice(0,p+1)),B(f.slice(p+1).map((function(t){return q(q({},t),{},{visibility:!1})}))),B(l.filter((function(t){return"background"!==t.group})))),sources:x()(_)?void 0:_}),widgetsConfig:{collapsed:q(q({},y.collapsed),v.collapsed),layouts:h()([].concat(B(E()(y.layouts)),B(E()(v.layouts)))).reduce((function(t,e){return q(q({},t),{},Y({},e,[].concat(B(O()(y,"layouts.".concat(e),[])),B(O()(v,"layouts.".concat(e),[])))))}),{}),widgets:[].concat(B(O()(y,"widgets",[])),B(O()(v,"widgets",[])))},timelineData:q(q({},O()(t,"timelineData",{})),O()(r,"timelineData",{})),dimensionData:q(q({},O()(t,"dimensionData",{})),O()(r,"dimensionData",{}))})},Ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RootGroup",n=O()(t,"map.groups",[]),r=n.filter((function(t){return"Default"!==t.id})),o=d()(n,(function(t){return"Default"===t.id})),i=o&&{id:G()(),title:e,expanded:o.expanded},a=o?[].concat(B(r.map((function(t){var e=t.id,n=z(t,A);return q({id:"".concat(i.id,".").concat(e)},n)}))),[i]):r;return q(q({},t),{},{map:q(q({},t.map),{},{groups:a,layers:O()(t,"map.layers",[]).map((function(t){var e,n=t.group;return q(q({},z(t,X)),{},{group:!o||"background"===n||"Default"!==n&&n?o&&(null===(e=d()(a,(function(t){var e=t.id;return e.slice(e.indexOf(".")+1)===n})))||void 0===e?void 0:e.id)||n:i.id})}))})})};function Gt(t){switch(t){case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":case"Text":return!1;default:return!0}}function Kt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Point";switch(t){default:return t;case"MultiPoint":case"Marker":case"Text":return"Point";case"MultiLineString":return"LineString";case"MultiPolygon":return"Polygon";case"GeometryCollection":return"GeometryCollection"}}var Dt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/data\/(\d+)/,n=decodeURIComponent(t),r=e.exec(n);return r&&r.length&&r.length>1?r[1]:null},jt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o()(t)&&-1!==t.indexOf("%")?parseFloat(a()(t))*e/100:c()(t)?t:0},Ft=function t(e){var n=["apiKey","time","args","fixed"],r=function(t){return n.reduce((function(e,n){return e||t===n}),!1)};Object.keys(e).forEach((function(n){var o=e[n],i=Z(o);"object"!==i||null===o||r(n)?"undefined"!==i&&o&&!r(n)||delete e[n]:(t(o),Object.keys(o).length||delete e[n])}))},Lt=function(t,e,n){t[e]&&(Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(t,e)),delete t[e])},At=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=["map.layers","map.backgrounds","map.text_search_config","map.bookmark_search_config","map.text_serch_config","map.zoom","widgetsConfig"],r=s()(w()(t),n),o=s()(w()(e),n);return Lt(r.map,"text_serch_config","text_search_config"),Lt(o.map,"text_serch_config","text_search_config"),Ft(r),Ft(o),I()(r,o)},Xt=function(){var t={};return{registerHook:function(e,n){t[e]=n},getHook:function(e){return t[e]},executeHook:function(e,n,r){var o=t[e];return o?n(o):r?r():null}}};const Zt={createRegisterHooks:Xt,EXTENT_TO_ZOOM_HOOK:tt,RESOLUTIONS_HOOK:nt,RESOLUTION_HOOK:rt,COMPUTE_BBOX_HOOK:ot,GET_PIXEL_FROM_COORDINATES_HOOK:it,GET_COORDINATES_FROM_PIXEL_HOOK:at,DEFAULT_SCREEN_DPI:$,ZOOM_TO_EXTENT_HOOK:et,registerHook:ct,getHook:lt,dpi2dpm:Ot,getSphericalMercatorScales:mt,getSphericalMercatorScale:dt,getGoogleMercatorScales:_t,getGoogleMercatorResolutions:vt,getGoogleMercatorScale:gt,getResolutionsForScales:yt,getZoomForExtent:bt,defaultGetZoomForExtent:Tt,getCenterForExtent:It,getResolutions:Et,getScales:St,getBbox:Rt,mapUpdated:Ct,getCurrentResolution:Mt,transformExtent:Ht,saveMapConfiguration:wt,generateNewUUIDs:kt,mergeMapConfigs:Nt,addRootParentGroup:Ut,isSimpleGeomType:Gt,getSimpleGeomType:Kt,getIdFromUri:Dt,parseLayoutValue:jt,prepareMapObjectToCompare:Ft,updateObjectFieldKey:Lt,compareMapChanges:At,clearHooks:ft}}}]);