(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3954],{75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(24852),o=r.n(n);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},94745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(24852),o=r.n(n),a=r(30294),c=r(7472),l=r(80717),i=r(67076),u=r(19081),s=r.n(u),d=r(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const g=(0,i.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,i=e.loadingText,u=e.onClose,g=void 0===u?function(){}:u,p=e.title,b=void 0===p?"":p,v=e.clickOutEnabled,y=void 0===v||v,O=e.showClose,h=void 0===O||O,E=e.disabledClose,S=void 0!==E&&E,j=e.showFullscreen,w=void 0!==j&&j,P=e.fullscreenType,k=void 0===P?"full":P,C=e.buttons,x=void 0===C?[]:C,A=e.size,N=void 0===A?"":A,z=e.bodyClassName,I=void 0===z?"":z,D=e.children,Z=e.draggable,T=void 0!==Z&&Z,G=e.fullscreenState,_=e.onFullscreen,L=e.fade,F=void 0!==L&&L,M=e.fitContent,R=e.modalClassName,B=void 0===R?"":R,U=e.dialogClassName,V=void 0===U?"":U,$=e.enableFooter,W=void 0===$||$,Q=f[N]||"",X=w&&"expanded"===G&&m.className[k]||"",Y=r?o().createElement("div",{className:"modal-fixed ".concat(B," ")+(T?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:y?g:function(){},containerClassName:"ms-resizable-modal",draggable:T,modal:!0,className:"modal-dialog modal-content"+Q+X+V+(M?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},b),w&&m.className[k]&&o().createElement(a.Glyphicon,{className:"ms-header-btn",onClick:function(){return _("expanded"===G?"collapsed":"expanded")},glyph:m.glyph[G][k]}),h&&g&&o().createElement(a.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:g,disabled:S}))),o().createElement("div",{role:"body",className:I},D),W&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?i:null),o().createElement(l.Z,{buttons:x})))):null;return F?o().createElement(s(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Y):Y}))},93451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(86638),o=r(45697),a=r.n(o),c=r(86494),l=r(67076);function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if((0,c.isArray)(t))return t.map((function(o){var a=(0,n.S$)(e,o[r]||(0,c.isString)(o)&&o||"");return s(s({},o),{},d({},r,(0,c.isNil)(a)?t:a))}));var o=(0,n.S$)(e,t);return(0,c.isNil)(o)?t:o},m=function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return s(s({},n),{},d({},o,e[o]&&f(t,e[o],r)))}};const g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,l.compose)((0,l.getContext)({messages:a().object}),(0,l.mapProps)((function(r){var n=r.messages,o=i(r,["messages"]);return s(s({},o),(0,c.castArray)(e).reduce(m(o,n,t),{}))})))}},25108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(82904),o=r(27418),a=r.n(o);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return a()({},e,c({},t.control,a()({},e[t.control],c({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,c({},t.control,a()({},e[t.control],c({},t.property,void 0)))):a()({},e,c({},t.control,a()({},e[t.control],c({},t.property,t.value))));case n.dc:return a()({},e,c({},t.control,a()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),l=o.reduce((function(t,r){return a()(t,c({},r,a()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return a()({},e,l);default:return e}}},31935:(e,t,r)=>{"use strict";r.d(t,{YL:()=>l,B0:()=>i,Mz:()=>u,TC:()=>s,qS:()=>d,Pe:()=>f,TP:()=>m});var n=r(22222),o=r(75110),a=r(93152),c=r(24262),l=function(e){return e.backgroundSelector&&e.backgroundSelector.source},i=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},u=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},s=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},d=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},f=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},m=(0,n.P1)(o.l2,a.$v,(function(e,t){return e.filter((function(e){return e&&"background"===e.group})).map((function(e){return(0,c.invalidateUnsupportedLayer)(e,t)}))||[]}))},88113:(e,t,r)=>{"use strict";r.d(t,{b6:()=>u,PG:()=>s,_x:()=>d,Mm:()=>f,dP:()=>m,SX:()=>g,ZL:()=>p,_S:()=>b,iH:()=>v,R7:()=>y,Q7:()=>O,n7:()=>h,bA:()=>E,hm:()=>S,E2:()=>j,Cb:()=>w,eK:()=>P,Im:()=>k,e8:()=>C,$t:()=>x,kS:()=>A,y:()=>N,l2:()=>z,HN:()=>I});var n=r(22222),o=r(86494),a=r(827);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){return(0,o.get)(e,"catalog.services")},s=(0,n.P1)((function(e){return(0,o.get)(e,"catalog.default.staticServices")}),u,(function(e,t){return l(l({},t),(0,o.pick)(e,"default_map_backgrounds"))})),d=function(e){return(0,o.get)(e,"catalog.default.tileSizes",[256,512])},f=function(e){return(0,o.get)(e,"controls.metadataexplorer.group")},m=function(e){return(0,o.get)(e,"catalog.saving")},g=function(e){return(0,o.get)(e,"catalog.result")},p=function(e){return(0,o.get)(e,"catalog.openCatalogServiceList")},b=function(e){return(0,o.get)(e,"catalog.newService")},v=function(e){return(0,o.get)(e,"catalog.newService.type","csw")},y=function(e){return(0,o.get)(e,'catalog.services["'.concat((0,o.get)(e,"catalog.selectedService"),'"]'))},O=function(e){return(0,o.get)(e,'catalog.services["'.concat((0,o.get)(e,"catalog.selectedService"),'"].type'),function(e){return(0,o.get)(e,'catalog.default.staticServices["'.concat((0,o.get)(e,"catalog.selectedService"),'"].type'),"csw")}(e))},h=function(e){return(0,o.get)(e,'catalog.services["'.concat((0,o.get)(e,"catalog.selectedService"),'"].layerOptions'),{})},E=function(e){return(0,o.get)(e,"catalog.searchOptions")},S=function(e){return(0,o.get)(e,"catalog.loadingError")},j=function(e){return(0,o.get)(e,"catalog.loading",!1)},w=function(e){return(0,o.get)(e,"catalog.selectedService")},P=function(e){return(0,o.get)(e,"catalog.mode","view")},k=function(e){return(0,o.get)(e,"catalog.layerError")},C=function(e){return(0,o.get)(e,"catalog.searchOptions.text","")},x=function(e){return"metadataexplorer"===(0,o.get)(e,"controls.toolbar.active")||(0,o.get)(e,"controls.metadataexplorer.enabled")},A=function(e){return((0,o.get)(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},N=function(e){return(0,o.get)(e,"catalog.pageSize",4)},z=function(e){return(0,o.get)(e,"catalog.delayAutoSearch",1e3)},I=(0,n.zB)({projection:a.uy})},73443:(e,t,r)=>{"use strict";r.d(t,{rs:()=>n,AY:()=>o,SW:()=>a,yB:()=>c,oG:()=>l,XG:()=>i,id:()=>u,gc:()=>s,cE:()=>d,rG:()=>f,Vj:()=>m,Pg:()=>g});var n="GEONODE:SAVING_RESOURCE",o="GEONODE:SAVE_SUCCESS",a="GEONODE:SAVE_ERROR",c="GEONODE:CLEAR_SAVE",l="GEONODE:SAVE_CONTENT",i="GEONODE:UPDATE_RESOURCE_BEFORE_SAVE";function u(){return{type:n}}function s(e){return{type:o,success:e}}function d(e){return{type:a,error:e}}function f(){return{type:c}}function m(e,t,r){return{type:l,id:e,metadata:t,reload:r}}function g(e){return{type:i,id:e}}},14689:(e,t,r)=>{"use strict";r.d(t,{fk:()=>l,Gg:()=>i,_u:()=>u});var n=r(75875),o=r.n(n),a=r(37275),c=r(55035),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.u8)("geoNodeApi")||{},r=t.endpointAdapter,n=void 0===r?"/mapstore/rest":r;return o().post((0,c.zL)("".concat(n,"/resources/")),e,{timeout:1e4,params:{full:!0}}).then((function(e){return e.data}))},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,a.u8)("geoNodeApi")||{},n=r.endpointAdapter,l=void 0===n?"/mapstore/rest":n;return o().patch((0,c.zL)("".concat(l,"/resources/").concat(e,"/")),t,{params:{full:!0}}).then((function(e){return e.data}))},u=function(e){var t=((0,a.u8)("geoNodeApi")||{}).endpointAdapter,r=void 0===t?"/mapstore/rest":t;return o().get((0,c.zL)("".concat(r,"/resources/").concat(e,"/")),{params:{full:!0}}).then((function(e){return e.data}))}},12547:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>Z});var n=r(49977),o=r(827),a=r(75110),c=r(31935),l=r(52259),i=r(22222),u=r(88113),s=r(25958),d=r(7877),f=r(85148),m=r(97291);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={},y=(0,i.zB)({catalogServices:(0,i.zB)({services:u.b6,selectedService:u.Cb}),widgetsConfig:(0,i.zB)({widgets:s.zm,layouts:s.p,collapsed:s.lF}),mapInfoConfiguration:d.bI,dimensionData:(0,i.zB)({currentTime:f.WT,offsetTime:f.ns}),timelineData:(0,i.zB)({selectedLayer:m.Li})}),O=r(37275),h=r(66113),E=r(74621),S=r(14689),j=r(73443),w=r(43892),P=r(99380),k=r(55035),C=r(55877),x=r.n(C);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D={map:function(e,t,r,n){var i,u=(0,o.Od)(e)||{},s=(0,a.l2)(e),d=(0,a.Bt)(e),f=(0,c.Mz)(e),m=function(e){return e.searchconfig&&e.searchconfig.textSearchConfig}(e),g=function(e){return e.searchbookmarkconfig&&e.searchbookmarkconfig.bookmarkSearchConfig}(e),h=function(e){var t=Object.keys(v).reduce((function(t,r){return p(p({},t),{},b({},r,v[r](e)))}),{});return p(p({},y(e)),t)}(e),E=(0,l.saveMapConfiguration)(u,s,d,f,m,g,h),j=r.name,w=r.description,P=r.thumbnail,C={name:j,data:E,attributes:[{type:"string",name:"title",value:j,label:"Title"},{type:"string",name:"abstract",value:w,label:"Abstract"}].concat((i=P?[{type:"string",name:"thumbnail",value:P,label:"Thumbnail"}]:[],function(e){if(Array.isArray(e))return I(e)}(i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))};return t?(0,S.Gg)(t,N(N({},C),{},{id:t})):(0,S.fk)(C).then((function(e){return n&&(window.location.href=(0,k.zL)("".concat((0,O.u8)("geonodeUrl"),"maps/").concat(e.id,"/edit"))),e.data}))},geostory:function(e,t,r,n){var o=(0,h.Kg)(e),a=(0,E.np)(e),c={title:r.name,abstract:r.description,data:JSON.stringify(o),thumbnail_url:r.thumbnail};return t?(0,P.Tw)(t,c):(0,P.NJ)(N({name:r.name+" "+x()(),owner:a.name},c)).then((function(e){return n&&(window.location.href=(0,k.zL)("".concat((0,O.u8)("geonodeUrl"),"apps/").concat(e.pk,"/edit"))),e.data}))}};const Z={gnSaveContent:function(e,t){return e.ofType(j.oG).switchMap((function(e){var r,o=t.getState(),a=(null===(r=o.gnresource)||void 0===r?void 0:r.type)||"map";return n.Observable.defer((function(){return D[a](o,e.id,e.metadata,e.reload)})).switchMap((function(t){return n.Observable.of((0,j.gc)(t),(0,w.QN)({title:e.metadata.name,abstract:e.metadata.description,thumbnail_url:e.metadata.thumbnail}))})).catch((function(e){return n.Observable.of((0,j.cE)(e.data||e.message))})).startWith((0,j.id)())}))},gnUpdateResource:function(e,t){return e.ofType(j.XG).switchMap((function(e){var r,o=(null===(r=t.getState().gnresource)||void 0===r?void 0:r.data)||{};return!e.id||o.pk&&e.id&&o.pk+""==e.id+""?n.Observable.empty():n.Observable.defer((function(){return(0,P.iv)(e.id)})).switchMap((function(e){return n.Observable.of((0,w.DF)(e))})).catch((function(e){return n.Observable.of((0,w.mN)(e.data||e.message))})).startWith((0,w.Q$)())}))}}},36368:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),a=r(45697),c=r.n(a),l=r(94745),i=r(14068),u=r(5346),s=r(30294),d=r(93451),f=r(32425);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=(0,d.Z)("placeholder")(s.FormControl);function b(e){var t=e.update,r=e.error,a=e.success,c=e.labelId,d=e.resource,g=e.contentId,b=e.saving,v=e.loading,y=e.enabled,O=e.onClose,h=e.onSave,E=e.onInit,S=e.onClear,j=e.thumbnailOptions,w=m((0,n.useState)(),2),P=w[0],k=w[1],C=m((0,n.useState)(),2),x=C[0],A=C[1],N=m((0,n.useState)(""),2),z=N[0],I=N[1],D=m((0,n.useState)(""),2),Z=D[0],T=D[1],G=m((0,n.useState)(!1),2),_=G[0],L=G[1],F=(0,n.useRef)();F.current={contentId:g,resource:d},(0,n.useEffect)((function(){y?E(F.current.contentId):S()}),[y]),(0,n.useEffect)((function(){if(!v){var e=F.current.resource||{};k(e.thumbnail_url),I(e.title),T(e.abstract),A(!1),L(e.title?void 0:"error")}}),[y,v]);var M=v||b;return o().createElement(l.Z,{title:o().createElement(u.Z,{msgId:c}),show:y,fitContent:!0,clickOutEnabled:!1,buttons:M?[]:[{text:o().createElement(u.Z,{msgId:"close"}),onClick:function(){return O()}},{text:o().createElement(u.Z,{msgId:c}),disabled:!!_,onClick:function(){return h(t?g:void 0,{thumbnail:P,name:z,description:Z},!0)}}],onClose:M?null:function(){return O()}},r&&o().createElement(s.Alert,{bsStyle:"danger",style:{margin:0}},o().createElement("div",null,o().createElement(u.Z,{msgId:"map.mapError.errorDefault"}))),a&&o().createElement(s.Alert,{bsStyle:"success",style:{margin:0}},o().createElement("div",null,o().createElement(u.Z,{msgId:"saveDialog.saveSuccessMessage"}))),o().createElement(s.Form,null,o().createElement(s.FormGroup,{validationState:x?"error":void 0},o().createElement(s.ControlLabel,null,o().createElement(u.Z,{msgId:"map.thumbnail"})),o().createElement(i.Z,{thumbnail:P,thumbnailOptions:j,message:o().createElement(u.Z,{msgId:"map.message"}),onUpdate:function(e){k(e),A(!1)},onError:function(e){A(e)}}),x&&o().createElement("div",null,o().createElement("div",null,o().createElement(u.Z,{msgId:"map.error"})),o().createElement("div",null,x.indexOf&&-1!==x.indexOf("FORMAT")&&o().createElement("small",null,o().createElement(u.Z,{msgId:"map.errorFormat"}))),o().createElement("div",null,x.indexOf&&-1!==x.indexOf("SIZE")&&o().createElement("small",null,o().createElement(u.Z,{msgId:"map.errorSize"}))))),o().createElement(s.FormGroup,{validationState:_},o().createElement(s.ControlLabel,null,o().createElement(u.Z,{msgId:"saveDialog.name"})),o().createElement(p,{placeholder:"saveDialog.namePlaceholder",value:z,onChange:function(e){I(e.target.value),L(e.target.value?void 0:"error")},onBlur:function(e){L(e.target.value?void 0:"error")}})),o().createElement(s.FormGroup,null,o().createElement(s.ControlLabel,null,o().createElement(u.Z,{msgId:"saveDialog.description"})),o().createElement(p,{placeholder:"saveDialog.descriptionPlaceholder",value:Z,onChange:function(e){return T(e.target.value)}}))),M&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(f.Z,{size:70})))}b.propTypes={update:c().bool,labelId:c().string,contentId:c().oneOfType([c().string,c().number]),resource:c().object,loading:c().bool,enabled:c().bool,onClose:c().func,onSave:c().func,onInit:c().func,onClear:c().func,error:c().oneOfType([c().string,c().object]),success:c().oneOfType([c().string,c().object]),thumbnailOptions:c().object},b.defaultProps={update:!1,resource:{},loading:!1,enabled:!1,onClose:function(){},onSave:function(){},onInit:function(){},onClear:function(){},thumbnailOptions:{width:300,height:250,type:"image/jpeg",quality:.9,contain:!1}};const v=b},62170:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(73443);const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.rs:return{saving:!0};case n.AY:return{success:t.success,saving:!1};case n.SW:return{error:t.error,saving:!1};case n.yB:return{};default:return e}}},80760:(e,t,r)=>{var n=r(89881);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},47415:(e,t,r)=>{var n=r(29932);e.exports=function(e,t){return n(t,(function(t){return e[t]}))}},63105:(e,t,r)=>{var n=r(34963),o=r(80760),a=r(67206),c=r(1469);e.exports=function(e,t){return(c(e)?n:o)(e,a(t,3))}},64721:(e,t,r)=>{var n=r(42118),o=r(98612),a=r(47037),c=r(40554),l=r(52628),i=Math.max;e.exports=function(e,t,r,u){e=o(e)?e:l(e),r=r&&!u?c(r):0;var s=e.length;return r<0&&(r=i(s+r,0)),a(e)?r<=s&&e.indexOf(t,r)>-1:!!s&&n(e,t,r)>-1}},82492:(e,t,r)=>{var n=r(42980),o=r(21463)((function(e,t,r){n(e,t,r)}));e.exports=o},13880:(e,t,r)=>{var n=r(79833);e.exports=function(){var e=arguments,t=n(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},52628:(e,t,r)=>{var n=r(47415),o=r(3674);e.exports=function(e){return null==e?[]:n(e,o(e))}}}]);