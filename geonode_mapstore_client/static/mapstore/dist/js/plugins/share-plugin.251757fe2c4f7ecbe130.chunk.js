(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3739],{21914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>a,Ih:()=>l,Xw:()=>i,Pn:()=>c,DZ:()=>s,e8:()=>u,E0:()=>p,F9:()=>f,X_:()=>d,pb:()=>y,qb:()=>m,Re:()=>b,ih:()=>h,xy:()=>v,jL:()=>g,oz:()=>O,ph:()=>E,lF:()=>w,gG:()=>C,cb:()=>P,GI:()=>_,B1:()=>T,fv:()=>j,gc:()=>N,zX:()=>I,ZF:()=>S,Zb:()=>R,DW:()=>D,Xp:()=>k,Fm:()=>F,sV:()=>x,Mn:()=>A,LU:()=>U,XP:()=>M,WU:()=>z,JB:()=>G,g:()=>L,ws:()=>Z,HP:()=>Y,aN:()=>q,Pg:()=>B,u0:()=>X,TM:()=>W,PM:()=>K,lK:()=>Q,sv:()=>V,MO:()=>$,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ae,Y$:()=>le,Qu:()=>ie,kT:()=>ce});var n=r(47310),o="LOAD_FEATURE_INFO",a="ERROR_FEATURE_INFO",l="EXCEPTIONS_FEATURE_INFO",i="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",u="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",y="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",b="NO_QUERYABLE_LAYERS",h="CLEAR_WARNING",v="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",O="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",E="TOGGLE_MAPINFO_STATE",w="UPDATE_CENTER_TO_MARKER",C="IDENTIFY:CHANGE_PAGE",P="IDENTIFY:CLOSE_IDENTIFY",_="IDENTIFY:CHANGE_FORMAT",T="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",j="IDENTIFY:EDIT_LAYER_FEATURES",N="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",I="IDENTIFY:SET_MAP_TRIGGER",S="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",D="IDENTIFY:IDENTIFY_IS_MOUNTED",k="IDENTIFY:INIT_PLUGIN";function F(e,t,r,n,a){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:a}}function x(e,t,r,n){return{type:a,error:t,reqId:e,requestParams:r,layerMetadata:n}}function A(e,t,r,n){return{type:l,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function U(){return{type:b}}function M(){return{type:h}}function z(e,t){return{type:c,reqId:e,request:t}}function G(e,t,r,n){return{type:m,layer:e,request:t,metadata:r,queryableLayers:n}}function L(){return{type:s}}function Z(e){return{type:u,infoFormat:e}}function Y(){return{type:p}}function q(){return{type:f}}function H(e){return{type:d,reverseGeocodeData:e.data}}function B(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(H(e))})).catch((function(e){t(H(e))}))}}function X(){return{type:y}}function W(){return{type:E}}function K(e){return{type:w,status:e}}function Q(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:v,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function V(e){return{type:g,point:e}}function $(e){return{type:O,enabled:e}}function J(e){return{type:C,index:e}}var ee=function(){return{type:P}},te=function(e){return{type:_,format:e}},re=function(e){return{type:T,showCoordinateEditor:e}},ne=function(e){return{type:j,layer:e}},oe=function(e){return{type:N,query:e}},ae=function(e){return{type:I,trigger:e}},le=function(e){return{type:R,value:e}},ie=function(e){return{type:D,isMounted:e}},ce=function(e){return{type:k,cfg:e}}},47310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(75875),o=r.n(n),a=r(8575),l=r(27418),i=r.n(l),c={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var r=i()({q:e},c,t||{}),n=a.format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=i()({lat:e.lat,lon:e.lng},t||{},c),n=a.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(27418),o=r.n(n),a=r(45697),l=r.n(a),i=r(67294),c=r.n(i),s=r(85294),u=r.n(s),p=r(72986),f=r.n(p),d=r(5346);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function O(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&g(e,t)}(i,e);var t,r,n,a,l=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(a){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function i(){var e;h(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return C(E(e=l.call.apply(l,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),C(E(e),"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),C(E(e),"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),C(E(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=i,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(c().Component);C(P,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),C(P,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const _=P},75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294),o=r.n(n);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},94745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(67294),o=r.n(n),a=r(94184),l=r.n(a),i=r(80681),c=r(7472),s=r(80717),u=r(18093),p=r(19081),f=r.n(p),d=r(75480),y={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const b=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,a=e.loadingText,u=e.onClose,p=void 0===u?function(){}:u,b=e.title,h=void 0===b?"":b,v=e.clickOutEnabled,g=void 0===v||v,O=e.showClose,E=void 0===O||O,w=e.disabledClose,C=void 0!==w&&w,P=e.showFullscreen,_=void 0!==P&&P,T=e.fullscreenType,j=void 0===T?"full":T,N=e.buttons,I=void 0===N?[]:N,S=e.size,R=void 0===S?"":S,D=e.bodyClassName,k=void 0===D?"":D,F=e.children,x=e.draggable,A=void 0!==x&&x,U=e.fullscreenState,M=e.onFullscreen,z=e.fade,G=void 0!==z&&z,L=e.fitContent,Z=e.modalClassName,Y=void 0===Z?"":Z,q=e.dialogClassName,H=void 0===q?"":q,B=e.enableFooter,X=void 0===B||B,W=y[R]||"",K=_&&"expanded"===U&&m.className[j]||"",Q=r?o().createElement("div",{className:"modal-fixed ".concat(Y," ")+(A?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:g?p:function(){},containerClassName:"ms-resizable-modal",draggable:A,modal:!0,className:l()("modal-dialog modal-content",W,K,H,{"ms-fit-content":L})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},h),_&&m.className[j]&&o().createElement(i.Glyphicon,{className:"ms-header-btn",onClick:function(){return M("expanded"===U?"collapsed":"expanded")},glyph:m.glyph[U][j]}),E&&p&&o().createElement(i.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:p,disabled:C}))),o().createElement("div",{role:"body",className:k},F),X&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?a:null),o().createElement(s.Z,{buttons:I})))):null;return G?o().createElement(f(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Q):Q}))},93451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(86638),o=r(45697),a=r.n(o),l=r(84596),i=r.n(l),c=r(1469),s=r.n(c),u=r(14293),p=r.n(u),f=r(47037),d=r.n(f),y=r(18093),m=["messages"];function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(t))return t.map((function(o){var a=(0,n.S$)(e,o[r]||d()(o)&&o||"");return v(v({},o),{},g({},r,p()(a)?t:a))}));var o=(0,n.S$)(e,t);return p()(o)?t:o},E=function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return v(v({},n),{},g({},o,e[o]&&O(t,e[o],r)))}};const w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,y.compose)((0,y.getContext)({messages:a().object}),(0,y.mapProps)((function(r){var n=r.messages,o=b(r,m);return v(v({},o),i()(e).reduce(E(o,n,t),{}))})))}},25108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(82904),o=r(27418),a=r.n(o),l=r(21914);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return a()({},e,s({},t.control,a()({},e[t.control],s({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,s({},t.control,a()({},e[t.control],s({},t.property,void 0)))):a()({},e,s({},t.control,a()({},e[t.control],s({},t.property,t.value))));case n.dc:return a()({},e,s({},t.control,a()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=o.reduce((function(t,r){return a()(t,s({},r,a()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return a()({},e,i);case l.DW:return c(c({},e),{},{info:c(c({},e.info),{},{available:t.isMounted})});default:return e}}},56973:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});var n=r(67294),o=r.n(n),a=r(45697),l=r.n(a),i=r(33664),c=r(22222),s=r(22843),u=r(82904),p=r(5346),f=r(80681),d=r(25108),y=r(43129),m=r(18446),b=r.n(m),h=r(74855),v=r.n(h),g=r(15135),O=r(38560),E=(0,g.Z)(v());const w=function(e){var t=e.shareUrl,r=void 0===t?"":t,n=e.copied,a=void 0!==n&&n,l=e.onCopy,i=void 0===l?function(){}:l,c=e.onMouseLeave,s=void 0===c?function(){}:c;return o().createElement(E,{text:r,tooltipId:a?"share.msgCopiedUrl":"share.msgToCopyUrl",tooltipPosition:"bottom",key:a.toString(),onCopy:function(){return i(r)}},o().createElement(O.Z,{bsStyle:"primary",onMouseLeave:function(){return s()}},o().createElement(f.Glyphicon,{glyph:"copy"})))};var C=r(8575);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function S(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F=(0,r(93451).Z)("placeholder")(f.FormControl),x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&I(e,t)}(i,e);var t,r,n,a,l=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(a){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return S(this,e)});function i(){var e;j(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return k(R(e=l.call.apply(l,[this].concat(r))),"state",{copied:!1,forceDrawer:!1,connections:!1,sizeOptions:{Small:{width:600,height:500},Medium:{width:800,height:600},Large:{width:1e3,height:800},Custom:{width:0,height:0}},selectedOption:"Small"}),k(R(e),"renderTools",(function(){return o().createElement(o().Fragment,null,e.props.showTOCToggle&&o().createElement(f.Checkbox,{checked:e.state.forceDrawer,onChange:function(){return e.setState({forceDrawer:!e.state.forceDrawer})}},o().createElement(p.Z,{msgId:"share.forceDrawer"})),e.props.showConnectionsParamToggle&&o().createElement(f.Checkbox,{checked:e.state.connections,onChange:function(){return e.setState({connections:!e.state.connections})}},o().createElement(p.Z,{msgId:"share.showConnections"})))})),k(R(e),"generateUrl",(function(){var t=C.parse(e.props.shareUrl,!0);return e.state.forceDrawer&&(t.query.forceDrawer=!0),e.state.connections&&(t.query.connections=!0),C.format(t)})),e}return t=i,(r=[{key:"componentDidMount",value:function(){this.props.sizeOptions&&!b()(this.state.sizeOptions)&&this.setState({sizeOptions:this.props.sizeOptions,selectedOption:this.props.selectedOption||"Small"})}},{key:"render",value:function(){var e,t,r=this,n=this.state,a=n.sizeOptions,l=n.selectedOption,i="Custom"===l?a.Custom.height:null===(e=a[l])||void 0===e?void 0:e.height,c="Custom"===l?a.Custom.width:null===(t=a[l])||void 0===t?void 0:t.width,s="<iframe ".concat(this.props.allowFullScreen?"allowFullScreen":"",' style="border: none;" height="').concat(i||0,'" width="').concat(c||0,'" src="').concat(this.generateUrl(this.props.shareUrl),'"></iframe>');return o().createElement("div",{className:"input-link"},o().createElement("div",{className:"input-link-head"},o().createElement("h4",null,o().createElement(p.Z,{msgId:"share.embeddedLinkTitle"})),o().createElement(w,{copied:this.state.copied,shareUrl:s,onCopy:function(){return r.setState({copied:!0})},onMouseLeave:function(){return r.setState({copied:!1})}})),o().createElement("div",{className:"input-link-tools"},this.renderTools()),o().createElement(f.Row,{className:"size-options-row"},o().createElement(f.Col,{md:4},o().createElement(y.ZP,{clearable:!1,value:{value:a[l],label:l},options:Object.keys(a).map((function(e){return{value:e,label:e}})),onChange:function(e){return r.setState({selectedOption:(null==e?void 0:e.value)||""})}})),"Custom"===l&&o().createElement(o().Fragment,null,o().createElement(f.Col,{md:4},o().createElement(F,{type:"number",onChange:function(e){return r.setState({sizeOptions:T(T({},a),{},{Custom:T(T({},r.state.sizeOptions.Custom),{},{width:e.target.value})})})},placeholder:"share.sizeOptions.width"})),o().createElement(f.Col,{md:4},o().createElement(F,{type:"number",onChange:function(e){return r.setState({sizeOptions:T(T({},a),{},{Custom:T(T({},r.state.sizeOptions.Custom),{},{height:e.target.value})})})},placeholder:"share.sizeOptions.height"})))),o().createElement("pre",null,o().createElement("code",null,s)))}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o().Component);k(x,"propTypes",{shareUrl:l().string,showTOCToggle:l().bool,showConnectionsParamToggle:l().bool,sizeOptions:l().object,selectedOption:l().string,allowFullScreen:l().bool}),k(x,"defaultProps",{showTOCToggle:!0,shareUrl:"",allowFullScreen:!0});const A=x;function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}function L(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Z(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&G(e,t)}(i,e);var t,r,n,a,l=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(n);if(a){var r=Y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return L(this,e)});function i(){var e;M(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return q(Z(e=l.call.apply(l,[this].concat(r))),"state",{copied:!1}),e}return t=i,(r=[{key:"render",value:function(){var e=this;return o().createElement("div",{className:"input-link"},o().createElement("div",{className:"input-link-head"},o().createElement("h4",null,o().createElement(p.Z,{msgId:"share.directLinkTitle"})),o().createElement(w,{copied:this.state.copied,shareUrl:this.props.shareUrl,onCopy:function(){return e.setState({copied:!0})},onMouseLeave:function(){return e.setState({copied:!1})}})),o().createElement("pre",{style:{padding:0}},o().createElement(f.FormControl,{readOnly:!0,type:"text",value:this.props.shareUrl,onFocus:function(e){return e.target.select()}})))}}])&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o().Component);q(H,"propTypes",{shareUrl:l().string});const B=H;var X=r(94745),W=r(827);function K(e){var t=e.resourceId,r=e.pathTemplate,n=e.enabled,a=e.onClose,l=function(e){var t=e.resourceId,r=e.pathTemplate,n=C.parse(location.href),o=n.host,a=n.protocol,l=r.replace(/\{id\}/g,t);return C.format({host:o,protocol:a,pathname:l})}({resourceId:t,pathTemplate:r});return o().createElement(X.Z,{modalClassName:"gn-share-modal",title:o().createElement(p.Z,{msgId:"share.title"}),show:n,fitContent:!0,clickOutEnabled:!1,onClose:function(){return a()}},o().createElement(B,{shareUrl:l}),o().createElement(A,{showTOCToggle:!1,shareUrl:l}))}K.propTypes={resourceId:l().oneOfType([l().number,l().string]),pathTemplate:l().string,enabled:l().bool,onClose:l().func},K.defaultProps={resourceId:null,pathTemplate:"/apps/{id}/embed",enabled:!1,onClose:function(){}};var Q=(0,i.connect)((0,c.P1)([function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t.share)||void 0===r?void 0:r.enabled},function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id},W._H],(function(e,t,r){return{enabled:e,resourceId:t||(null==r?void 0:r.id)}})),{onClose:u.Xi.bind(null,"share",null)})(K);const V=(0,s.rx)("Share",{component:Q,containers:{BurgerMenu:{name:"share",position:1e3,text:o().createElement(p.Z,{msgId:"share.title"}),icon:o().createElement(f.Glyphicon,{glyph:"share-alt"}),action:u.Xi.bind(null,"share",null),selector:(0,c.P1)((function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.isNew}),(function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id}),W._H,(function(e,t,r){return{style:!e&&(t||null!=r&&r.id)?{}:{display:"none"}}}))}},epics:{},reducers:{controls:d.Z}})},20640:(e,t,r)=>{"use strict";var n=r(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,l,i,c,s,u=!1;t||(t={}),r=t.debug||!1;try{if(l=n(),i=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(n){r&&console.error("unable to copy using execCommand: ",n),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(n){r&&console.error("unable to copy using clipboardData: ",n),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},19081:(e,t,r)=>{"use strict";e.exports=r(1174)},74300:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=i(r(67294)),l=i(r(20640));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.CopyToClipboard=function(e){function t(){var e,r,n;c(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.onClick=function(e){var t=n.props,r=t.text,o=t.onCopy,i=t.children,c=t.options,s=a.default.Children.only(i),u=(0,l.default)(r,c);o&&o(r,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)},s(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["text","onCopy","options","children"]),o=a.default.Children.only(t);return a.default.cloneElement(o,n({},r,{onClick:this.onClick}))}}]),t}(a.default.PureComponent)},74855:(e,t,r)=>{"use strict";var n=r(74300).CopyToClipboard;e.exports=n},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);