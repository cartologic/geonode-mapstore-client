(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2859],{33528:(e,t,r)=>{"use strict";r.d(t,{gJ:()=>n,Oj:()=>o,jp:()=>i,CM:()=>a,DU:()=>u,aO:()=>c,v6:()=>f,K8:()=>l,IN:()=>s,zh:()=>p,AH:()=>E,Ub:()=>v,_9:()=>d,JB:()=>y,oh:()=>b,AY:()=>O,yi:()=>R,SW:()=>m,Hk:()=>g,iQ:()=>T,dY:()=>h,$:()=>S,_u:()=>A,gG:()=>I,DI:()=>_,dZ:()=>w,qw:()=>D,f$:()=>F,bZ:()=>P,$O:()=>U,sF:()=>G,Gk:()=>C,vO:()=>L,ut:()=>M,MK:()=>j,VV:()=>N,B8:()=>x,VM:()=>Y,a3:()=>H,Xp:()=>V,DA:()=>W,sK:()=>Z,yA:()=>B,r:()=>k,iB:()=>K,WB:()=>q,EH:()=>z,Yd:()=>X,Hg:()=>$,Lz:()=>J,ye:()=>Q,Jb:()=>ee,d:()=>te,fT:()=>re,Ib:()=>ne,Pl:()=>oe,UB:()=>ie,Uh:()=>ae,QT:()=>ue,oL:()=>ce,Ap:()=>fe,KD:()=>le,Z_:()=>se,Vw:()=>pe,sY:()=>Ee,kA:()=>ve,gr:()=>de,pX:()=>ye,F5:()=>be,MO:()=>Oe,dq:()=>Re,DY:()=>me,oO:()=>ge,uF:()=>Te,a8:()=>he,Pv:()=>Se,an:()=>Ae,lg:()=>Ie,nY:()=>_e,nG:()=>we,lx:()=>De,$S:()=>Fe,gc:()=>Pe,Uz:()=>Ue,fO:()=>Ge,$E:()=>Ce,cE:()=>Le,JK:()=>Me,YV:()=>je,t9:()=>Ne,YG:()=>xe,HT:()=>Ye,MY:()=>He,ve:()=>Ve,hB:()=>We,Ox:()=>Ze,zd:()=>Be,aT:()=>ke,VH:()=>Ke,Yb:()=>qe,Jr:()=>ze,pP:()=>Xe,gL:()=>$e});var n="FEATUREGRID:SET_UP",o="FEATUREGRID:SELECT_FEATURES",i="FEATUREGRID:DESELECT_FEATURES",a="FEATUREGRID:CLEAR_SELECTION",u="FEATUREGRID:SET_SELECTION_OPTIONS",c="FEATUREGRID:TOGGLE_MODE",f="FEATUREGRID:TOGGLE_FEATURES_SELECTION",l="FEATUREGRID:FEATURES_MODIFIED",s="FEATUREGRID:NEW_FEATURE",p="FEATUREGRID:SAVE_CHANGES",E="FEATUREGRID:SAVING",v="FEATUREGRID:START_EDITING_FEATURE",d="FEATUREGRID:START_DRAWING_FEATURE",y="FEATUREGRID:DELETE_GEOMETRY",b="FEATUREGRID:DELETE_GEOMETRY_FEATURE",O="FEATUREGRID:SAVE_SUCCESS",R="FEATUREGRID:CLEAR_CHANGES",m="FEATUREGRID:SAVE_ERROR",g="FEATUREGRID:DELETE_SELECTED_FEATURES",T="SET_FEATURES",h="FEATUREGRID:SORT_BY",S="FEATUREGRID:SET_LAYER",A="QUERY:UPDATE_FILTER",I="FEATUREGRID:CHANGE_PAGE",_="FEATUREGRID:GEOMETRY_CHANGED",w="DOCK_SIZE_FEATURES",D="FEATUREGRID:TOGGLE_TOOL",F="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",P="ASK_CLOSE_FEATURE_GRID_CONFIRM",U="FEATUREGRID:OPEN_GRID",G="FEATUREGRID:CLOSE_GRID",C="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",L="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",M="FEATUREGRID:SET_PERMISSION",j="FEATUREGRID:DISABLE_TOOLBAR",N="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",x="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",Y="FEATUREGRID:ADVANCED_SEARCH",H="FEATUREGRID:ZOOM_ALL",V="FEATUREGRID:INIT_PLUGIN",W="FEATUREGRID:SIZE_CHANGE",Z="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",B="FEATUREGRID:HIDE_SYNC_POPOVER",k="FEATUREGRID:UPDATE_EDITORS_OPTIONS",K="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",q="FEATUREGRID:SET_SYNC_TOOL",z={EDIT:"EDIT",VIEW:"VIEW"},X="FEATUREGRID:START_SYNC_WMS",$="FEATUREGRID:STOP_SYNC_WMS",J="STORE_ADVANCED_SEARCH_FILTER",Q="LOAD_MORE_FEATURES",ee="FEATUREGRID:QUERY_RESULT",te="FEATUREGRID:SET_TIME_SYNC",re="FEATUREGRID:SET_PAGINATION";function ne(){return{type:Z}}function oe(){return{type:B}}function ie(e,t){return{type:ee,features:e,pages:t}}function ae(e){return{type:J,filterObj:e}}function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:V,options:e}}function ce(){return{type:C}}function fe(){return{type:L}}function le(e,t){return{type:o,features:e,append:t}}function se(e){return{type:n,options:e}}function pe(e){return{type:_,features:e}}function Ee(){return{type:v}}function ve(){return{type:d}}function de(e){return{type:i,features:e}}function ye(){return{type:y}}function be(e){return{type:b,features:e}}function Oe(){return{type:a}}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.multiselect,r=void 0!==t&&t;return{type:u,multiselect:r}}function me(e,t){return{type:h,sortBy:e,sortOrder:t}}function ge(e,t){return{type:I,page:e,size:t}}function Te(e){return{type:S,id:e}}function he(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:A,update:e,append:t}}function Se(e,t){return{type:D,tool:e,value:t}}function Ae(e,t,r){return{type:F,name:e,key:t,value:r}}function Ie(){return{type:c,mode:z.EDIT}}function _e(){return{type:c,mode:z.VIEW}}function we(e,t){return{type:l,features:e,updated:t}}function De(e){return{type:s,features:e}}function Fe(){return{type:p}}function Pe(){return{type:O}}function Ue(){return{type:g}}function Ge(){return{type:E}}function Ce(){return{type:R}}function Le(){return{type:m}}function Me(){return{type:P}}function je(){return{type:G}}function Ne(){return{type:U}}function xe(e){return{type:j,disabled:e}}function Ye(e){return{type:M,permission:e}}function He(){return{type:Y}}function Ve(){return{type:H}}function We(){return{type:X}}function Ze(e,t){return{type:W,size:e,dockProps:t}}var Be=function(e){return{type:Q,pages:e}},ke=function(e){return{type:N,activated:e}},Ke=function(e){return{type:x,deactivated:e}},qe=function(e){return{type:te,value:e}},ze=function(e){return{type:re,size:e}},Xe=function(e){return{type:K,updateFilterAction:e}},$e=function(e){return{type:q,syncWmsFilter:e}}},21914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>u,Pn:()=>c,DZ:()=>f,e8:()=>l,E0:()=>s,F9:()=>p,X_:()=>E,pb:()=>v,qb:()=>d,Re:()=>y,ih:()=>b,xy:()=>O,jL:()=>R,oz:()=>m,ph:()=>g,lF:()=>T,gG:()=>h,cb:()=>S,GI:()=>A,B1:()=>I,fv:()=>_,gc:()=>w,zX:()=>D,ZF:()=>F,Zb:()=>P,Fm:()=>U,sV:()=>G,Mn:()=>C,LU:()=>L,XP:()=>M,WU:()=>j,JB:()=>N,g:()=>x,ws:()=>Y,HP:()=>H,aN:()=>V,Pg:()=>Z,u0:()=>B,TM:()=>k,PM:()=>K,lK:()=>q,sv:()=>z,MO:()=>X,oO:()=>$,Mc:()=>J,Zw:()=>Q,RA:()=>ee,am:()=>te,ZM:()=>re,wm:()=>ne,Y$:()=>oe});var n=r(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",f="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",s="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",E="SHOW_REVERSE_GEOCODE",v="HIDE_REVERSE_GEOCODE",d="GET_VECTOR_INFO",y="NO_QUERYABLE_LAYERS",b="CLEAR_WARNING",O="FEATURE_INFO_CLICK",R="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",m="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",g="TOGGLE_MAPINFO_STATE",T="UPDATE_CENTER_TO_MARKER",h="IDENTIFY:CHANGE_PAGE",S="IDENTIFY:CLOSE_IDENTIFY",A="IDENTIFY:CHANGE_FORMAT",I="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",_="IDENTIFY:EDIT_LAYER_FEATURES",w="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",D="IDENTIFY:SET_MAP_TRIGGER",F="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",P="IDENTIFY:SET_SHOW_IN_MAP_POPUP";function U(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function G(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function C(e,t,r,n){return{type:a,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function L(){return{type:y}}function M(){return{type:b}}function j(e,t){return{type:c,reqId:e,request:t}}function N(e,t,r,n){return{type:d,layer:e,request:t,metadata:r,queryableLayers:n}}function x(){return{type:f}}function Y(e){return{type:l,infoFormat:e}}function H(){return{type:s}}function V(){return{type:p}}function W(e){return{type:E,reverseGeocodeData:e.data}}function Z(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(W(e))})).catch((function(e){t(W(e))}))}}function B(){return{type:v}}function k(){return{type:g}}function K(e){return{type:T,status:e}}function q(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:O,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function z(e){return{type:R,point:e}}function X(e){return{type:m,enabled:e}}function $(e){return{type:h,index:e}}var J=function(){return{type:S}},Q=function(e){return{type:A,format:e}},ee=function(e){return{type:I,showCoordinateEditor:e}},te=function(e){return{type:_,layer:e}},re=function(e){return{type:w,query:e}},ne=function(e){return{type:D,trigger:e}},oe=function(e){return{type:P,value:e}}},64152:(e,t,r)=>{"use strict";r.d(t,{Z:()=>se});var n={};r.r(n),r.d(n,{getRecords:()=>k,testService:()=>z,textSearch:()=>K,validate:()=>q});var o={};r.r(o),r.d(o,{getRecords:()=>ie,parseUrl:()=>oe,textSearch:()=>ae});var i=r(59551),a=r(67007),u=r(3475),c=r(63202),f=r(5055),l=r.n(f),s=r(75875),p=r.n(s),E=r(27361),v=r.n(E),d=r(84596),y=r.n(d),b=r(33044),O=r(93201);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T={},h=function(e,t){return e===t||"EPSG:3857"===e&&"EPSG:900913"===t||"EPSG:900913"===e&&"EPSG:3857"===t},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=y()(v()(e,"TileMapService.TileMaps.TileMap",[])),a=o.projection,u=v()(o,"options.service.allSRS"),c=i.map((function(t){var r=t.$,n=void 0===r?{}:r;return m(m({},n),{},{href:(0,b.cleanAuthParamsFromURL)(n.href),identifier:(0,b.cleanAuthParamsFromURL)(n.href),format:(0,O.A)(n.href),tmsUrl:(0,b.cleanAuthParamsFromURL)(e.url)})})).filter((function(e){var t=e.srs;return!(a&&!u)||h(t,a)})).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"":t,o=e.srs,i=void 0===o?"":o;return!n||-1!==r.toLowerCase().indexOf(n.toLowerCase())||-1!==i.toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:c.length,numberOfRecordsReturned:Math.min(r,c.length),nextRecord:t+Math.min(r,c.length)+1,records:c.filter((function(e,n){return n>=t-1&&n<t-1+r}))}},A=function(e){return e},I=function(e,t,r,n,o){var i=T[e];return i&&(new Date).getTime()<i.timestamp+1e3*(c.ZP.getConfigProp("cacheExpire")||60)?new Promise((function(e){e(S(i.data,t,r,n,o))})):p().get(e).then((function(i){var a;return l().parseString(i.data,{explicitArray:!1},(function(t,r){a=m(m({},r),{},{url:e})})),T[e]={timestamp:(new Date).getTime(),data:a},S(a,t,r,n,o)}))},_=r(36882),w=r(49977),D=r.n(w),F=r(11847);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C="custom",L=function(e,t,r,n,o){var i,a,u,c=v()(o,"options.service"),f=[];if(c.provider&&c.provider!==C){var l=(i=c.provider,Object.keys(null!==(a=null===_.Z||void 0===_.Z||null===(u=_.Z[i])||void 0===u?void 0:u.variants)&&void 0!==a?a:{}));0===l.length?f.push({provider:"".concat(c.provider),title:"".concat(c.provider)}):f=l.map((function(e){return{provider:"".concat(c.provider,".").concat(e)}}))}else c.url&&(f=[U(U({},c),{},{title:c.title,type:"tileprovider",url:c.url,attribution:c.attribution,options:c.options||{},provider:C})]);return new Promise((function(e){e(function(e,t,r,n){var o=e.filter((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).title;return!n||-1!==(void 0===e?"":e).toLowerCase().indexOf(n.toLowerCase())})),i=o.filter((function(e,n){return n>=t-1&&n<t-1+r}));return{numberOfRecordsMatched:o.length,numberOfRecordsReturned:i.length,nextRecord:t+Math.min(r,o.length)+1,records:i}}(f,t,r,n))}))};function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){var t="function"==typeof Map?new Map:void 0;return(N=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return x(e,arguments,V(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),H(n,e)})(e)}function x(e,t,r){return(x=Y()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&H(o,r.prototype),o}).apply(null,arguments)}function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(o,e);var t,r,n=(t=o,r=Y(),function(){var e,n=V(t);if(r){var o=V(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return j(this,e)});function o(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(r=n.call(this,e)).name="ServiceValidationError",r.notification=t,r}return o}(N(Error)),Z=function(e){return""===e.title||""===e.url?D().Observable.throw(new W("Validation Error","catalog.notification.warningAddCatalogService")):D().Observable.of(e)},B=function(e){var t=e.parseUrl;return function(e){var r="catalog.notification.errorServiceUrl";return D().Observable.defer((function(){return p().get(t(e.url))})).catch((function(){throw new W("Service Test error",r)})).switchMap((function(t){if(t.error||""===t.data)throw new W("Service Test error",r);return D().Observable.of(e)}))}},k=function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.options,a=i||{},u=a.service,c=void 0===u?{}:u;return"tms"===c.provider&&I(e,t,r,n,o),L(0,t,r,n,o)},K=function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.options,a=i||{},u=a.service,c=void 0===u?{}:u;return"tms"===c.provider?I(e,t,r,n,o):L(0,t,r,n,o)},q=function(e){return"tms"===e.provider?Z(e):function(e){var t,r=e.provider&&"custom"!==e.provider?!!e.provider:(t=e.url,(0,F.Nw)(t));if(e.title&&r)return w.Observable.of(e);throw new Error("catalog.config.notValidURLTemplate")}(e)},z=function(e){return"tms"===e.provider?B({parseUrl:A})(e):function(e){return w.Observable.of(e)}(e)},X=r(32420);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e){return function(e){if(Array.isArray(e))return te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var re={},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=y()(v()(e,'["wfs:WFS_Capabilities"].FeatureTypeList.FeatureType',[])),i=o.map((function(t){var r=t.Name,n=t.Title,o=t.Abstract,i=t.DefaultSRS,a=t.OtherSRS,u=void 0===a?[]:a,c=t["ows:WGS84BoundingBox"],f=c["ows:LowerCorner"].split(" "),l=c["ows:UpperCorner"].split(" "),s={minx:parseFloat(f[0]),miny:parseFloat(f[1]),maxx:parseFloat(l[0]),maxy:parseFloat(l[1])};return{featureType:t,type:"wfs",url:(0,b.cleanAuthParamsFromURL)(e.url),name:r,title:n,description:o,SRS:[i].concat(ee(u)),defaultSRS:i,boundingBox:{bounds:s,crs:"EPSG:4326"}}})).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"":t,o=e.name,i=void 0===o?"":o,a=e.description;return!n||-1!==r.toLowerCase().indexOf(n.toLowerCase())||-1!==i.toLowerCase().indexOf(n.toLowerCase())||-1!==a.toLowerCase().indexOf(n.toLowerCase())})),a=i.filter((function(e,n){return n>=t-1&&n<t-1+r}));return{numberOfRecordsMatched:i.length,numberOfRecordsReturned:Math.min(r,a.length),nextRecord:t+Math.min(r,i.length)+1,records:a}},oe=X.dN,ie=function(e,t,r,n,o){var i=re[e];return i&&(new Date).getTime()<i.timestamp+1e3*(c.ZP.getConfigProp("cacheExpire")||60)?new Promise((function(e){e(ne(i.data,t,r,n,o))})):(0,X.FU)(e).then((function(i){var a;return l().parseString(i.data,{explicitArray:!1,stripPrefix:!0},(function(t,r){a=J(J({},r),{},{url:e})})),re[e]={timestamp:(new Date).getTime(),data:a},ne(a,t,r,n,o)}))},ae=function(e,t,r,n,o){return ie(e,t,r,n,o)},ue=r(32354);function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){le(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const se={csw:fe({validate:Z,testService:B(i.Z)},i.Z),wfs:fe({validate:Z,testService:B(o)},o),wms:fe({validate:Z,testService:B(a.ZP)},a.ZP),tms:n,wmts:fe({validate:Z,testService:B(u.Z)},u.Z),backgrounds:fe({validate:Z,testService:B(ue.Z)},ue.Z)}},56175:(e,t,r)=>{"use strict";r.d(t,{Z:()=>q});var n=r(49977),o=r(9669),i=r.n(o),a=r(37691),u=r.n(a),c=r(30647),f=r(91175),l=r.n(f),s=r(27361),p=r.n(s),E=r(13311),v=r.n(E),d=r(1469),y=r.n(d),b=r(47037),O=r.n(b),R=r(13218),m=r.n(R),g=r(3674),T=r.n(g),h=r(93220),S=r.n(h),A=r(31273),I=r(80416),_=r(97395),w=r(82904),D=r(33528),F=r(21914),P=r(53001),U=r(88113),G=r(31935),C=r(8316),L=r(75110),M=r(76712),j=r(86267),N=r(24262),x=r(89919),Y=["format","url","text"];function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||W(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const q=function(e){return{recordSearchEpic:function(t,r){return t.ofType(A.V3).switchMap((function(t){var o=t.format,i=t.url,a=t.startPosition,u=t.maxRecords,c=t.text,f=t.options;return n.Observable.defer((function(){return e[o].textSearch(i,a,u,c,k({options:f},(0,U.HN)(r.getState())))})).switchMap((function(e){return e.error?n.Observable.of((0,A.m)(e)):n.Observable.of((0,A.nX)({url:i,startPosition:a,maxRecords:u,text:c},e))})).startWith((0,A.K4)(!0)).catch((function(e){return n.Observable.of((0,A.m)(e))}))}))},addLayersFromCatalogsEpic:function(t,r){return t.ofType(A.WX).filter((function(e){var t=e.layers,r=e.sources;return y()(t)&&y()(r)&&t.length&&t.length===r.length})).switchMap((function(t){var o=t.layers,i=t.sources,a=t.options,u=t.startPosition,c=void 0===u?1:u,f=t.maxRecords,s=void 0===f?4:f,p=r.getState(),E=a||(0,U.bA)(p),v=(0,U.b6)(p),d=o.filter((function(e,t){return!!v[i[t]]})).map((function(t,r){var a=v[i[r]],u=a.type,f=a.url,l=o[r];return n.Observable.defer((function(){return e[u].textSearch(f,c,s,l,E).catch((function(){return{results:[]}}))})).map((function(e){return k(k({},e),{},{format:u,url:f,text:l})}))}));return n.Observable.forkJoin(d).switchMap((function(e){return y()(e)&&e.length?n.Observable.of(e.map((function(e){var t=e.format,r=e.url,o=e.text,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,Y),a=(0,C.Ps)(p),u=(0,M.eL)(t,i,E,a)||[],c=l()(u.filter((function(e){return e.identifier===o}))),f=(0,M.tW)(c),s=f.wms,v=f.wmts,d={},y={},b=(0,U.kS)(p);if(s){var O=(0,M.n0)(s.SRS);if(s.SRS.length>0&&!j.default.isAllowedSRS("EPSG:3857",O))return n.Observable.empty();d=(0,M.ll)(c,"wms",{removeParams:b,catalogURL:"csw"===t&&r?r+"?request=GetRecordById&service=CSW&version=2.0.2&elementSetName=full&id="+c.identifier:r},y)}else if(v){d={};var R=(0,M.n0)(v.SRS);if(v.SRS.length>0&&!j.default.isAllowedSRS("EPSG:3857",R))return n.Observable.empty();d=(0,M.ll)(c,"wmts",{removeParams:b},y)}else(0,M.FJ)(c).esri&&(d=(0,M.AD)(c,y));return c?d:o}))):n.Observable.empty()}))})).mergeMap((function(e){if(e){var t=e.filter((function(e){return O()(e)})).join(" "),r=[];return t&&(r=[(0,A.E9)(t)]),r=[].concat(V(r),V(e.filter((function(e){return m()(e)})).map((function(e){return(0,I.A4)(e)})))),n.Observable.from(r)}return n.Observable.empty()})).catch((function(){return n.Observable.empty()}))},newCatalogServiceAdded:function(t,r){return t.ofType(A.mh).switchMap((function(){var t=r.getState(),o=(0,U._S)(t);return n.Observable.of(o).switchMap((function(t){var r,o,i;return null!==(r=null===(o=e[t.type])||void 0===o||null===(i=o.validate)||void 0===i?void 0:i.call(o,t))&&void 0!==r?r:n.Observable.of(t)})).switchMap((function(t){var r,o,i;return null!==(r=null===(o=e[t.type])||void 0===o||null===(i=o.testService)||void 0===i?void 0:i.call(o,t))&&void 0!==r?r:n.Observable.of(t)})).switchMap((function(){return n.Observable.of((0,A.N3)(o),(0,_.Vp)({title:"notification.success",message:"catalog.notification.addCatalogService",autoDismiss:6,position:"tc"}))})).startWith((0,A.Rc)(!0)).catch((function(e){return n.Observable.of((0,_.vU)({exception:e,title:"notification.warning",message:e.notification||"catalog.notification.warningAddCatalogService",autoDismiss:6,position:"tc"}))})).concat(n.Observable.of((0,A.Rc)(!1)))}))},deleteCatalogServiceEpic:function(e,t){return e.ofType(A.$Y).switchMap((function(){var e=t.getState(),r=(0,U.Cb)(e),o=(0,U.b6)(e),i=o[r]?(0,_.Vp)({title:"notification.warning",message:"catalog.notification.serviceDeletedCorrectly",autoDismiss:6,position:"tc"}):(0,_.vU)({title:"notification.warning",message:"catalog.notification.impossibleDeleteService",autoDismiss:6,position:"tc"}),a=(0,A.SU)(r);return o[r]?n.Observable.of(i,a):n.Observable.of(i)}))},openCatalogEpic:function(e){return e.ofType(w.At).filter((function(e){return"metadataexplorer"===e.control&&e.value})).switchMap((function(){return n.Observable.of((0,D.YV)(),(0,F.g)(),(0,F.aN)())}))},getMetadataRecordById:function(t,r){return t.ofType(A.UT).switchMap((function(t){var o=t.metadataOptions,a=void 0===o?{}:o,f=r.getState(),l=(0,L.Iz)(f);return n.Observable.defer((function(){return e.wms.getCapabilities((0,N.Fh)(l))})).switchMap((function(t){var r=p()(t,"capability.layer.layer",[]),o=1===r.length?r[0].metadataURL:v()(r,(function(e){return e.name===l.name.split(":")[1]})),f=p()(v()(o,(function(e){return O()(e.type)&&"iso19115:2003"===e.type.toLowerCase()&&("application/xml"===e.format||"text/xml"===e.format)})),"onlineResource.href"),s=p()(v()(o,(function(e){return O()(e.type)&&"iso19115:2003"===e.type.toLowerCase()&&"text/html"===e.format})),"onlineResource.href"),E=v()(p()(a,"extractors",[]),(function(e){var t=e.properties,r=e.layersRegex,n=r?new RegExp(r):null;return m()(t)&&(!r||n.test(l.name))})),d=s?{metadataUrl:s}:{},y=n.Observable.defer((function(){return e.csw.getRecordById(l.catalogURL)})).switchMap((function(e){return e&&e.error?n.Observable.of((0,_.vU)({title:"notification.warning",message:"toc.layerMetadata.notification.warnigGetMetadataRecordById",autoDismiss:6,position:"tc"}),(0,I.c9)(d,!1)):e&&e.dc?n.Observable.of((0,I.c9)(k(k({},d),e.dc),!1)):n.Observable.empty()})),b=n.Observable.defer((function(){return i().get(f)})).pluck("data").map((function(e){return(new c.a).parseFromString(e)})).map((function(e){var t=u().useNamespaces(a.xmlNamespaces||{});return function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return S()(r).reduce((function(r,o){var i,a=H(o,2),u=a[0],c=a[1];if(m()(c)&&O()(c.xpath)&&m()(c.properties)&&T()(c.properties).length>0)0===(i=t(c.xpath,n).map((function(t){return e(c.properties,t)}))).length&&(i=null);else{var f,l=t(c,n);1===l.length?i=null!==(f=p()(l[0],"nodeValue"))&&void 0!==f?f:p()(l[0],"childNodes[0].nodeValue"):l.length>1&&(i=l.map((function(e){return p()(e,"childNodes[0].nodeValue")})).filter((function(e){return!!e})))}return k(k({},r),i?K({},u,i):{})}),{})}(E.properties,e)})).switchMap((function(e){return n.Observable.of((0,I.c9)(k(k({},d),e),!1))}));return f&&E?b:l.catalogURL?y:n.Observable.of((0,I.c9)(d,!1))})).startWith((0,I.c9)({},!0)).catch((function(){return n.Observable.of((0,_.vU)({title:"notification.warning",message:"toc.layerMetadata.notification.warnigGetMetadataRecordById",autoDismiss:6,position:"tc"}),(0,I.c9)({},!1))}))}))},autoSearchEpic:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,o=void 0===r?function(){}:r;return e.ofType(A.CO).debounce((function(){var e=o(),t=(0,U.l2)(e);return n.Observable.timer(t)})).switchMap((function(e){var t=e.text,r=o(),i=(0,U.y)(r),a=(0,U.R7)(r),u=a.type,c=a.url;return n.Observable.of((0,A.tt)({format:u,url:c,startPosition:1,maxRecords:i,text:t}))}))},catalogCloseEpic:function(e,t){return e.ofType(A.ur).switchMap((function(){var e,r=t.getState(),o=(0,G.YL)(r),i=(0,U.b6)(r);return(e=n.Observable).of.apply(e,V([(0,w.pu)("metadataexplorer","enabled",!1,"group",null),(0,A.In)("view"),(0,A.ye)()].concat("backgroundSelector"===o?[(0,A.Dw)(l()(T()(i))),(0,P.vw)(!0)]:[])))}))},getSupportedFormatsEpic:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,o=void 0===r?function(){}:r;return e.ofType(A.xM).filter((function(e){return(0,U.CK)(o())!==(null==e?void 0:e.url)})).switchMap((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,r=void 0===t?"":t;return n.Observable.defer((function(){return(0,M.T6)(r,!0)})).switchMap((function(e){return n.Observable.of((0,A.nx)(e,r))})).let((0,x.hP)((0,A.We)(!0),(0,A.We)(!1),(function(){return n.Observable.of((0,_.vU)({title:"layerProperties.format.error.title",message:"layerProperties.format.error.message"}),(0,A.We)(!1))})))}))}}}},38842:(e,t,r)=>{"use strict";r.d(t,{wk:()=>s,Yf:()=>p,c3:()=>E,fY:()=>v});var n=r(18721),o=r.n(n),i=r(27361),a=r.n(i),u=r(13311),c=r.n(u),f=r(22222),l=r(8316),s=function(e){return o()(e,"localConfig.localizedLayerStyles")},p=function(e){var t=a()(e,"localConfig.plugins.dashboard",[]),r=c()(t,(function(e){return"DashboardEditor"===e.name}))||{};return a()(r,"cfg.catalog.localizedLayerStyles",!1)},E=function(e){return a()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},v=(0,f.P1)(s,E,l.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))},93201:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(64721),o=r.n(n),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("?")[0].split("@");if(t.length>1){var r=t[t.length-1];if(o()(["png","png8","jpeg","vnd.jpeg-png","gif"],r))return r}return null}}}]);