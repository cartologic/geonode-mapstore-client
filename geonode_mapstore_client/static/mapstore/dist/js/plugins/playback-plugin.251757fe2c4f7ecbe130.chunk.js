(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6722],{82110:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n.n(r),a=n(96259),i=n(32425);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=function(e){var t=e.width,n=e.height,r=e.className,c=void 0===r?"loader-container":r,l=e.contentStyle,s=void 0===l?{}:l;return o().createElement("div",{className:c},o().createElement(a.Z,null,(function(e){var r=e.width,a=void 0===r?200:r,c=e.height,l=void 0===c?200:c,f=t||(l>0?Math.min(a,l):a),p=n||(l>0?Math.min(a,l):a),m=Math.min(f,p);return o().createElement(i.Z,{size:m,style:u({padding:m/10,margin:"auto",display:"flex"},s)})})))}},2576:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(67294),o=n.n(r),a=n(73935),i=n.n(a),c=n(45697),u=n.n(c),l=n(80681),s=n(52595),f=n(50966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function b(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&d(e,t)}(u,e);var t,n,r,a,c=(r=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(a){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(){return m(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"renderPopover",value:function(){return o().createElement(l.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(l.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(f.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(s.Z,{placement:this.props.placement,show:!0,target:function(){return i().findDOMNode(e.target)}},this.renderPopover())])}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);v(h,"propTypes",{id:u().string,title:u().string,text:u().string,glyph:u().string,bsStyle:u().string,placement:u().string,left:u().number,top:u().number,trigger:u().oneOfType([u().array,u().bool])}),v(h,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const P=h},77605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Oe});var r=n(27418),o=n.n(r),a=n(67294),i=n.n(a),c=n(33664),u=n(18093),l=n(22222),s=n(62187),f=n(5582),p=n.n(f),m=n(27361),y=n.n(m),d=n(57604),b=n(57676),g=n(80416),v=n(97395),h=n(85148),P=n(75982),O=n(76843),S=n(97291);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const E=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return function(r){return r.withLatestFrom(e.startWith(t)).filter((function(e){var t=k(e,2)[1];return n(t)})).map((function(e){return k(e,1)[0]}))}};var T=n(89919),j=n(96361),A=n(89255);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||D(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||D(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=20,F=function(e,t){return"".concat(e,"/").concat(t)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,S.Li)(e()),r=(0,S.uy)(e()),o=(0,S.Ry)(e()),a=(0,O.KC)(e())||{},i=a.startPlaybackTime,c=a.endPlaybackTime,u=(0,O.dS)(e())===s.Q_.PLAY||(0,O.dS)(e())===s.Q_.PAUSE;return[o,r,"time",R({limit:_,time:i&&c&&u?F(i,c):void 0},t),(0,S.F3)(n)(e())]},U=function(e,t){if((0,S.uy)(e())){var n=(0,h.aK)((0,S.fP)(e()))(e()),r=(0,S.gB)(e());return"multidim-extension"!==y()(r,"source.type")&&n&&n.length>0?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.fromValue,o=n.limit,a=void 0===o?_:o,i=(0,O.KC)(t())||{},c=i.startPlaybackTime,u=i.endPlaybackTime;return A.Observable.of(e.filter((function(e){return!c||!u||p()(e).isSameOrAfter(c)&&p()(e).isSameOrBefore(u)})).filter((function(e){return!r||p()(e).isAfter(r)})).slice(0,a))}(n,e,t):j.Ci.apply(void 0,I(M(e,t))).map((function(e){return e.DomainValues.Domain.split(",")}))}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fromValue,r=t.limit,o=void 0===r?_:r,a=t.sort,i=void 0===a?"asc":a,c=(0,O.z2)(e()),u=c.timeStep,l=c.stepUnit,s=p().duration(u,l),f=(0,O.KC)(e())||{},m=f.startPlaybackTime,y=f.endPlaybackTime,d=void 0!==n?n:m||(0,h.WT)(e())||(new Date).toString(),b=[];d!==n&&b.push(p()(d).toISOString());for(var g=0;g<o&&(d=p()(d).add("asc"===i?s:-1*s),!y||d.isBefore(y));g++)b.push(d.toISOString());return A.Observable.of(b)}(e,t)},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};return function(t){var n=(0,h.AF)(e());return A.Observable.from(n.map((function(e){return(0,g.He)(e.id,{singleTile:!0})}))).concat(t).concat(A.Observable.from(n.map((function(e){return(0,g.He)(e.id,{singleTile:e.singleTile})}))))}},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.start,r=t.end;return n&&r&&(p()(e).isBefore(n)||p()(e).isAfter(r))};const K={retrieveFramesForPlayback:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(s.NH).exhaustMap((function(){return U(r,{fromValue:(0,O.KC)(r())&&(0,O.KC)(r()).startPlaybackTime&&(0,O.KC)(r()).endPlaybackTime?void 0:(0,h.WT)(r())}).map((function(e){return(0,s.wR)(e)})).let((0,T.hP)((0,s.zK)(!0),(0,s.zK)(!1)),(function(){return A.Observable.of((0,v.vU)({title:"There was an error retrieving animation",message:"Please contact the administrator"}),(0,s.sT)())})).let((0,T.hP)((0,b.aA)(!1,!0),(0,b.aA)(!1,!1))).concat(e.ofType(s.c9).filter((function(e){return e.frame%_==10})).switchMap((function(){return U(r,{fromValue:(0,O.yt)(r())}).map(s.hS).let((0,T.hP)((0,s.zK)(!0),(0,s.zK)(!1)))}))).takeUntil(e.ofType(s.N7,P.nk)).concat(A.Observable.of((0,b.aA)(!1,!1))).let(Y(r))}))},updateCurrentTimeFromAnimation:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(s.c9).map((function(){return(0,O.Wq)(r())})).map((function(e){return e?(0,d.PZ)(e):(0,s.sT)()}))},timeDimensionPlayback:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(s.L9).exhaustMap((function(){return A.Observable.interval(1e3*(0,O.V3)(r())).startWith(0).let(E(e.ofType(s.NH,s.E7).map((function(e){return e.type===s.NH})))).map((function(){return(0,s.h1)((0,O.Np)(r())+1)})).merge(e.ofType(s.KB).map((function(e){var t=e.direction;return(0,s.h1)(Math.max(0,(0,O.Np)(r())+t))}))).concat(A.Observable.of((0,s.sT)())).takeUntil(e.ofType(s.N7,P.nk))}))},playbackToggleGuideLayerToFixedStep:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(s.Fi).exhaustMap((function(){return(0,S.uy)(r())?A.Observable.of((0,b.kq)(void 0)):A.Observable.of((0,b.kq)(y()((0,S.rV)(r()),"[0].id")))}))},playbackMoveStep:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(s.KB).filter((function(){return(0,O.dS)(r())!==s.Q_.PLAY})).switchMap((function(e){var t=e.direction,n=void 0===t?1:t,o=(0,O.rp)(r())||{},a=(0,h.WT)(r());return a&&o.forTime===a?A.Observable.of(n>0?o.next:o.previous):U(r,{limit:1,sort:n>0?"asc":"desc",fromValue:(0,h.WT)(r())}).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=C(e,1),n=t[0];return n}))})).filter((function(e){return!!e})).map((function(e){return(0,d.PZ)(e)}))},playbackCacheNextPreviousTimes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(d.mE,d.mD,b._V,s.N7,b.w).filter((function(){return(0,O.dS)(r())!==s.Q_.PLAY&&(0,O.dS)(r())!==s.Q_.PAUSE})).filter((function(){return(0,S.Li)(r())})).filter((function(e){return!!e})).switchMap((function(e){var t=e.time||(0,h.WT)(r());return A.Observable.forkJoin(j.Ci.apply(void 0,I(M(r,{sort:"asc",limit:1,fromValue:t}))).map((function(e){return e.DomainValues.Domain.split(",")})).map((function(e){return C(e,1)[0]})).catch((function(e){return e&&A.Observable.of(null)})),j.Ci.apply(void 0,I(M(r,{sort:"desc",limit:1,fromValue:t}))).map((function(e){return e.DomainValues.Domain.split(",")})).map((function(e){return C(e,1)[0]})).catch((function(e){return e&&A.Observable.of(null)}))).map((function(e){var n=C(e,2),r=n[0],o=n[1];return(0,s.Ym)({forTime:t,next:r,previous:o})}))}))},playbackFollowCursor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(d.mD).filter((function(e){return(e.type===d.mD||(0,O.dS)(r())===s.Q_.PLAY)&&N((0,h.WT)(r()),(0,S.YK)(r()))})).filter((function(){return y()((0,O.z2)(r()),"following")})).switchMap((function(){return A.Observable.of((0,b.y3)((e=(0,h.WT)(r()),n=(t=(0,S.YK)(r())).start,o=t.end,a=p()(o).diff(p()(n)),{start:e,end:p()(e).add(a).toISOString()})));var e,t,n,o,a}))},playbackStopWhenDeleteLayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(g.sb).filter((function(){return!(0,S.Li)(r())&&"PLAY"===(0,O.dS)(r())})).switchMap((function(){return A.Observable.of((0,s.sT)())}))}};var V=n(37307),B=n(32215),Q=n(5346),W=n(80717),z=n(7654),G=n.n(z),H=n(80681),q=n(2576),$=n(65295),J=n(45869),X=n(12346),ee=n(94192);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};try{if(!G()(parseInt(e,10))){var r=parseInt(e,10);return t(r<1?1:r)}return n()}catch(e){return n(e)}},ae=function(e){var t=e.startPlaybackTime,n=e.endPlaybackTime,r=p()(t).diff(n);return{startPlaybackTime:r>=0?n:t,endPlaybackTime:r>=0?t:n}};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ue=(0,u.compose)((0,c.connect)((0,l.P1)(O.z2,S.Li,O.KC,(function(e,t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({fixedStep:!t,playbackRange:n},e)})),{setPlaybackRange:s.VS,onSettingChange:s.oz,toggleAnimationMode:s.FH}),(0,u.compose)((0,c.connect)((0,l.P1)(S.YK,S.dJ,(function(e,t){return{layerRange:t,viewRange:e}})),{moveTo:b.y3}),(0,u.withHandlers)({toggleAnimationRange:function(e){var t=e.fixedStep,n=e.layerRange,r=e.viewRange,o=void 0===r?{}:r,a=e.setPlaybackRange,i=void 0===a?function(){}:a;return function(e){var r=t?o:n;r={startPlaybackTime:p()(r&&r.start||new Date).subtract(1,"days").toISOString(),endPlaybackTime:p()(r&&r.end||new Date).add(1,"days").toISOString()},i(e?r:void 0)}},setPlaybackToCurrentViewRange:function(e){var t=e.viewRange,n=void 0===t?{}:t,r=e.setPlaybackRange,o=void 0===r?function(){}:r;return function(){n.start&&n.end&&o({startPlaybackTime:p()(n.start).toISOString(),endPlaybackTime:p()(n.end).toISOString()})}},setPlaybackToCurrentLayerDataRange:function(e){var t=e.setPlaybackRange,n=void 0===t?function(){}:t,r=e.layerRange;return function(){return r&&n({startPlaybackTime:r.start,endPlaybackTime:r.end})}}}),(0,u.withProps)((function(e){var t=e.playbackRange,n=e.fixedStep,r=e.moveTo,o=void 0===r?function(){}:r,a=e.setPlaybackToCurrentViewRange,i=void 0===a?function(){}:a,c=e.setPlaybackToCurrentLayerDataRange,u=void 0===c?function(){}:c;return{playbackButtons:[{glyph:"search",tooltipId:"playback.settings.range.zoomToCurrentPlayackRange",onClick:function(){return o({start:t.startPlaybackTime,end:t.endPlaybackTime})}},{glyph:"resize-horizontal",tooltipId:"playback.settings.range.setToCurrentViewRange",onClick:function(){return i()}},{glyph:"1-layer",visible:!n,tooltipId:"playback.settings.range.fitToSelectedLayerRange",onClick:function(){return u()}}]}}))))((function(e){var t=e.following,n=e.frameDuration,r=e.timeStep,o=e.stepUnit,a=e.onSettingChange,c=void 0===a?function(){}:a,u=e.toggleAnimationMode,l=void 0===u?function(){}:u,s=e.toggleAnimationRange,f=void 0===s?function(){}:s,p=e.fixedStep,m=void 0!==p&&p,y=e.playbackRange,d=void 0===y?{}:y,b=e.setPlaybackRange,g=void 0===b?function(){}:b,v=e.playbackButtons,h=e.dateSelectorStyle,P=void 0===h?{padding:0,margin:0,border:"none"}:h,O=e.style,S=void 0===O?{}:O;return i().createElement("div",{className:"ms-playback-settings",style:S},i().createElement("h4",null,i().createElement(Q.Z,{msgId:"timeline.settings.title"})),i().createElement(H.FormGroup,{controlId:"timelineSettings"},i().createElement(H.Form,{componentClass:"fieldset",inline:!0},i().createElement(H.ControlLabel,null,i().createElement(Q.Z,{msgId:"timeline.settings.snapToGuideLayer"})," ",i().createElement(q.Z,{text:i().createElement(Q.Z,{msgId:"timeline.settings.snapToGuideLayerTooltip"})})),i().createElement("span",null,i().createElement(J.Z,{checked:!m,onChange:function(){return l()}})))),i().createElement("h4",null,i().createElement(Q.Z,{msgId:"playback.settings.title"})),i().createElement(H.FormGroup,{controlId:"frameDuration"},i().createElement(H.ControlLabel,null,i().createElement(Q.Z,{msgId:"playback.settings.frameDuration"})),i().createElement(H.InputGroup,null,i().createElement(ee.Z,{componentClass:"input",type:"number",value:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return oe(e,(function(e){c("frameDuration",e)}))}}),i().createElement(H.InputGroup.Addon,null,"s"))),i().createElement(H.ControlLabel,null,i().createElement(Q.Z,{msgId:"playback.settings.step.label"})," ",i().createElement(q.Z,{text:i().createElement(Q.Z,{msgId:"playback.settings.step.tooltip"})})),i().createElement(H.FormGroup,{controlId:"formPlaybackStep"},i().createElement(H.Form,{componentClass:"fieldset",inline:!0},i().createElement(ee.Z,{disabled:!m,componentClass:"input",type:"number",style:{input:{maxWidth:120}},value:r,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return oe(e,(function(e){c("timeStep",e)}))}}),i().createElement(H.FormControl,{disabled:!m,componentClass:"select",value:o,onChange:function(e){var t=e.target;return c("stepUnit",(void 0===t?{}:t).value)}},i().createElement(Q.Z,{msgId:"playback.settings.step.year",msgParams:{number:r||1}},(function(e){return i().createElement("option",{value:"years"},e)})),i().createElement(Q.Z,{msgId:"playback.settings.step.week",msgParams:{number:r||1}},(function(e){return i().createElement("option",{value:"weeks"},e)})),i().createElement(Q.Z,{msgId:"playback.settings.step.day",msgParams:{number:r||1}},(function(e){return i().createElement("option",{value:"days"},e)})),i().createElement(Q.Z,{msgId:"playback.settings.step.hour",msgParams:{number:r||1}},(function(e){return i().createElement("option",{value:"hour"},e)})),i().createElement(Q.Z,{msgId:"playback.settings.step.minute",msgParams:{number:r||1}},(function(e){return i().createElement("option",{value:"minutes"},e)})),i().createElement(Q.Z,{msgId:"playback.settings.step.second",msgParams:{number:r||1}},(function(e){return i().createElement("option",{value:"seconds"},e)}))))),i().createElement(X.Z,{onSwitch:function(e){return f(e)},expanded:d.startPlaybackTime&&d.endPlaybackTime,title:i().createElement(Q.Z,{msgId:"playback.settings.range.title"}),buttons:v},i().createElement(H.FormGroup,{controlId:"formPlaybackMode",style:{margin:10}},i().createElement($.Z,{tooltipId:"playback.settings.range.animationStart",glyph:"play",date:d.startPlaybackTime,onUpdate:function(e){return g(ae(ne(ne({},d),{},{startPlaybackTime:e})))},style:P,showButtons:!0}),i().createElement($.Z,{glyph:"stop",tooltipId:"playback.settings.range.animationEnd",date:d.endPlaybackTime,onUpdate:function(e){return g(ae(ne(ne({},d),{},{endPlaybackTime:e})))},style:P,showButtons:!0}))),i().createElement(H.FormGroup,{controlId:"formPlaybackFollowingMode"},i().createElement(H.Form,{componentClass:"fieldset",inline:!0},i().createElement(H.ControlLabel,null,i().createElement(Q.Z,{msgId:"playback.settings.mode.following"})," ",i().createElement(q.Z,{text:i().createElement(Q.Z,{msgId:"playback.settings.mode.followingDescription"})})),i().createElement("span",null,i().createElement(J.Z,{checked:t,onChange:function(e){return c("following",e)}})))))}));var le=(0,u.compose)((0,u.withState)("showSettings","onShowSettings",!1),(0,u.withState)("collapsed","setCollapsed",!0),(0,u.withProps)((function(e){var t=e.setCollapsed;return{buttons:[{glyph:"minus",onClick:function(){return t(!0)}}]}}))),se=(0,l.P1)(O.dS,S.Li,O.rp,O.PF,(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;return t?e===s.Q_.PLAY||e===s.Q_.PAUSE?r:{hasNext:!!n.next,hasPrevious:!!n.previous}:{hasNext:!0,hasPrevious:!0}})),fe=(0,u.compose)((0,c.connect)(se,{stepMove:s.XN}),(0,u.withHandlers)({forward:function(e){var t=e.stepMove,n=void 0===t?function(){}:t;return function(){return n(1)}},backward:function(e){var t=e.stepMove,n=void 0===t?function(){}:t;return function(){return n(-1)}}}));const pe=(0,u.compose)(le,fe)((function(e){var t=e.status,n=e.statusMap,r=e.play,o=void 0===r?function(){}:r,a=e.forward,c=void 0===a?function(){}:a,u=e.backward,l=void 0===u?function(){}:u,s=e.pause,f=void 0===s?function(){}:s,p=e.stop,m=void 0===p?function(){}:p,y=e.hasPrevious,d=e.hasNext,b=e.showSettings,g=e.onShowSettings,v=void 0===g?function(){}:g,h=e.settingsStyle,P=void 0===h?{}:h;return i().createElement("div",{style:{display:"flex"}},t!==n.PLAY&&t!==n.PAUSE&&b&&i().createElement(ue,{style:P}),i().createElement(W.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},buttons:[{glyph:"step-backward",key:"back",onClick:l,disabled:!y,tooltip:i().createElement(Q.Z,{msgId:"playback.backwardStep"})},{glyph:t===n.PLAY?"pause":"play",key:"play",active:t===n.PLAY||t===n.PAUSE,disabled:!d,bsStyle:t===n.PLAY||t===n.PAUSE?"success":"primary",onClick:function(){return t===n.PLAY?f():o()},tooltipId:d&&(t===n.PLAY?"playback.pause":t===n.PAUSE?"playback.paused":"playback.play")},{glyph:"stop",key:"stop",disabled:t!==n.PLAY&&t!==n.PAUSE,onClick:m,tooltip:!(t!==n.PLAY&&t!==n.PAUSE)&&i().createElement(Q.Z,{msgId:"playback.stop"})},{glyph:"step-forward",key:"forward",onClick:c,disabled:!d,tooltip:d&&i().createElement(Q.Z,{msgId:"playback.forwardStep"})},{glyph:"cog",key:"settings",bsStyle:t!==n.PLAY&&t!==n.PAUSE&&b?"success":"primary",active:(t!==n.PLAY||t!==n.PAUSE)&&!!b,disabled:t===n.PLAY||t===n.PAUSE,onClick:function(){return t!==n.PLAY&&v(!b)},tooltip:!(t===n.PLAY||t===n.PAUSE)&&i().createElement(Q.Z,{msgId:"playback.settings.tooltip"})}]}))}));function me(e){return me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me(e)}function ye(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e,t){return be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},be(e,t)}function ge(e,t){if(t&&("object"===me(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ve(e){return ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ve(e)}var he=(0,u.compose)((0,u.defaultProps)({statusMap:s.Q_}),(0,c.connect)((0,l.P1)(O.dS,h.WT,O.E2,(function(e,t,n){return{loading:n,currentTime:t,status:e}})),{play:s.hY,pause:s.wO,stop:s.sT}))(pe),Pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&be(e,t)}(c,e);var t,n,r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ve(r);if(o){var n=ve(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ge(this,e)});function c(){return ye(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return i().createElement("div",{className:"playback-plugin"},i().createElement(he,this.props))}}])&&de(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(i().Component);const Oe={PlaybackPlugin:o()(Pe,{noRoot:!0,disablePluginIf:"{state('featuregridmode') === 'EDIT'}",Timeline:{name:"playback",position:1,priority:1}}),epics:K,reducers:{playback:B.Z,dimension:V.Z}}},32215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(62187),o=n(82904),a=n(61868);function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u={timeStep:1,stepUnit:"days",frameDuration:2,following:!0};const l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:r.Q_.STOP,currentFrame:-1,settings:u},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.NH:return(0,a.t8)("status",r.Q_.PLAY,e);case r.E7:return(0,a.t8)("status",r.Q_.PAUSE,e);case r.N7:return(0,a.t8)("status",r.Q_.STOP,(0,a.t8)("currentFrame",-1,e));case r.L9:return(0,a.t8)("frames",t.frames,(0,a.t8)("currentFrame",-1,e));case r.NC:return(0,a.t8)("framesLoading",t.loading,e);case r.hQ:return(0,a.t8)("frames",[].concat(i(e.frames||[]),i(t.frames)),e);case r.c9:return(0,a.t8)("currentFrame",t.frame,e);case r.up:return(0,a.t8)("playbackRange",t.range,e);case r.FZ:return(0,a.t8)("settings[".concat(t.name,"]"),t.value,e);case r.E0:return(0,a.t8)("metadata",{next:t.next,previous:t.previous,forTime:t.forTime},e);case o.l:return(0,a.t8)("metadata",void 0,(0,a.t8)("framesLoading",void 0,(0,a.t8)("playbackRange",void 0,(0,a.t8)("frames",void 0,(0,a.t8)("currentFrame",-1,(0,a.t8)("status","STOP",(0,a.t8)("settings",u,e)))))));default:return e}}}}]);