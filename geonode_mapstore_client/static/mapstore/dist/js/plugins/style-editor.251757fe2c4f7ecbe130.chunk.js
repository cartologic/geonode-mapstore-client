(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1701],{67007:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>L});var n=r(8575),a=r(1469),o=r.n(a),i=r(84596),l=r.n(i),s=r(27361),u=r.n(s),c=r(27418),f=r.n(c),y=r(5055),p=r.n(y),b=r(75875),d=r.n(b),m=r(63202),v=r(86267);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S={},w=function(e){var t=(o()(e)&&e||e.split(","))[0],r=n.parse(t,!0);return n.format(f()({},r,{search:null},{query:f()({service:"WMS",version:"1.3.0",request:"GetCapabilities"},r.query)}))},j=function(e){var t=e&&e.Title,r=e.LogoURL&&h(h({},u()(e,"LogoURL.$")||{}),{},{format:u()(e,"LogoURL.Format")}),n=u()(e,'OnlineResource.$["xlink:href"]');return{title:t,logo:r,imageUrl:u()(e,'LogoURL.OnlineResource.$["xlink:href"]'),link:n}},P=function e(t){return t.Layer?(o()(t.Layer)&&t.Layer||[t.Layer]).reduce((function(t,r){return t.concat(e(r)).concat(r.Layer&&r.Name?[r]:[])}),[]):t.Name&&[t]||[]},E=function(e){return e.Request&&e.Request.GetMap&&e.Request.GetMap.DCPType&&e.Request.GetMap.DCPType.HTTP&&e.Request.GetMap.DCPType.HTTP.Get&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$||void 0},T=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,l=arguments.length>3?arguments[3]:void 0,s=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Capability,u=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Service,c=E(s),y=s.Layer&&(null===(e=s.Layer.SRS||s.Layer.CRS)||void 0===e?void 0:e.map((function(e){return e.toUpperCase()})))||[],p=s.Layer&&s.Layer.Attribution&&j(s.Layer.Attribution),b=s.Request&&s.Request.GetMap&&s.Request.GetMap.Format||[],d=P(s),m=o()(d)?d:[d],v=m.filter((function(e){return!l||-1!==e.Name.toLowerCase().indexOf(l.toLowerCase())||e.Title&&-1!==e.Title.toLowerCase().indexOf(l.toLowerCase())||e.Abstract&&-1!==e.Abstract.toLowerCase().indexOf(l.toLowerCase())}));return{numberOfRecordsMatched:v.length,numberOfRecordsReturned:Math.min(i,v.length),nextRecord:a+Math.min(i,v.length)+1,service:u,layerOptions:{version:(null===(t=n.WMS_Capabilities||n.WMT_MS_Capabilities)||void 0===t||null===(r=t.$)||void 0===r?void 0:r.version)||"1.3.0"},records:v.filter((function(e,t){return t>=a-1&&t<a-1+i})).map((function(e){return f()({},e,{formats:b,onlineResource:c,SRS:y,credits:e.Attribution?j(e.Attribution):p})}))}},x=function(e,t,r,n){var a=S[e];return a&&(new Date).getTime()<a.timestamp+1e3*((0,m.u8)("cacheExpire")||60)?new Promise((function(e){e(T(a.data,t,r,n))})):d().get(w(e)).then((function(a){var o;return p().parseString(a.data,{explicitArray:!1},(function(e,t){o=t})),S[e]={timestamp:(new Date).getTime(),data:o},T(o,t,r,n)}))};const L={flatLayers:P,parseUrl:w,getDimensions:function(e){return l()(e.Dimension||e.dimension||[]).map((function(t,r){var n=e.Extent&&l()(e.Extent)[r]||e.extent&&l()(e.extent)[r];return{name:t.$.name,units:t.$.units,unitSymbol:t.$.unitSymbol,default:t.$.default||n&&n.$.default,values:t._&&t.split(",")||n&&n._&&n.split(",")}}))},getCapabilities:function(e,t){var a=n.parse(e,!0),o=n.format(f()({},a,{query:f()({service:"WMS",version:"1.1.1",request:"GetCapabilities"},a.query)}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var n=r(67260).unmarshaller;e(d().get(w(o)).then((function(e){var r;if(t)return p().parseString(e.data,{explicitArray:!1},(function(e,t){r=t})),r;var a=n.unmarshalString(e.data);return a&&a.value})))}.bind(null,r)).catch(r.oe)}))},describeLayer:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.parse(e,!0),i=n.format(f()({},o,{query:f()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},o.query,a.query||{})}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var t=r(67260).unmarshaller;e(d().get(w(i)).then((function(e){var r=t.unmarshalString(e.data);return r&&r.value&&r.value.layerDescription&&r.value.layerDescription[0]})))}.bind(null,r)).catch(r.oe)}))},getRecords:x,describeLayers:function(e,t){var r=n.parse(e,!0),a=n.format(f()({},r,{query:f()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},r.query)}));return d().get(w(a)).then((function(e){var t;return p().parseString(e.data,{explicitArray:!1},(function(e,r){t=r&&r.WMS_DescribeLayerResponse&&r.WMS_DescribeLayerResponse.LayerDescription})),(t=Array.isArray(t)?t:[t]).map((function(e){return h(h({},e&&e.$||{}),{},{layerName:e&&e.$&&e.$.name,query:h({},e&&e.query&&e.query.$||{})})}))}))},textSearch:function(e,t,r,n){return x(e,t,r,n)},parseLayerCapabilities:function e(t,r,n){return l()(n||u()(t,"capability.layer.layer")).reduce((function(n,a){return n||(!a.name&&a.layer?e(t,r,l()(a.layer)):2===r.name.split(":").length&&a.name&&2===a.name.split(":").length?r.name===a.name&&a:a.name&&2===a.name.split(":").length?r.name===a.name.split(":")[1]&&a:2===r.name.split(":").length?r.name.split(":")[1]===a.name&&a:r.name===a.name&&a)}),null)},getBBox:function(e,t){for(var r=e,n=r.EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,v.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;!n&&r.Layer&&r.Layer.length;)n=(r=r.Layer[0]).EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,v.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;n||(n={westBoundLongitude:-180,southBoundLatitude:-90,eastBoundLongitude:180,northBoundLatitude:90});var a={extent:[n.westBoundLongitude||n.minx,n.southBoundLatitude||n.miny,n.eastBoundLongitude||n.maxx,n.northBoundLatitude||n.maxy],crs:"EPSG:4326"};return t?{crs:a.crs,bounds:{minx:a.extent[0],miny:a.extent[1],maxx:a.extent[2],maxy:a.extent[3]}}:a},reset:function(){Object.keys(S).forEach((function(e){delete S[e]}))}}},52595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(61365).Z)(r(80681).Overlay)},2576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(67294),a=r.n(n),o=r(73935),i=r.n(o),l=r(45697),s=r.n(l),u=r(80681),c=r(52595),f=r(50966);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&d(e,t)}(s,e);var t,r,n,o,l=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function s(){return p(this,s),l.apply(this,arguments)}return t=s,(r=[{key:"renderPopover",value:function(){return a().createElement(u.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return a().createElement(u.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return a().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?a().createElement(f.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),a().createElement(c.Z,{placement:this.props.placement,show:!0,target:function(){return i().findDOMNode(e.target)}},this.renderPopover())])}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(a().Component);g(h,"propTypes",{id:s().string,title:s().string,text:s().string,glyph:s().string,bsStyle:s().string,placement:s().string,left:s().number,top:s().number,trigger:s().oneOfType([s().array,s().bool])}),g(h,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const O=h},94943:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>Q});var n=r(89255),a=r(27361),o=r.n(a),i=r(91175),l=r.n(i),s=r(1469),u=r.n(s),c=r(41106),f=r.n(c),y=r(19155),p=r.n(y),b=r(97395),d=r(80416),m=r(60604),v=r(90825),g=r(80833),h=r(82904),O=r(24262),S=r(96909),w=r(9082),j=r(75875),P=r.n(j),E=r(84596),T=r.n(E),x=r(99009);function L(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const B=function(e,t,r){var n=e+"layers/"+t+".json";return P().get(n,r).then((function(e){return e.data&&e.data.layer}))},R=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,a=void 0===n?[]:n,o=e.options,i=void 0===o?{}:o,l=(0,x.$N)(r),s=l.name,u=l.workspace,c="".concat(t,"rest/").concat(u&&"workspaces/".concat(u,"/")||"","layers/").concat(s,".json");return P().get(c,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[],n=a.map((function(e){return e.name})),o=r.filter((function(e){var t=e.name;return-1===n.indexOf(t)}));return{layer:M(M({},t),{},{styles:{"@class":"linked-hash-set",style:o}})}})).then((function(e){return P().put(c,e).then((function(){return e}))}))},U=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,a=void 0===n?[]:n,o=e.options,i=void 0===o?{}:o,l=(0,x.$N)(r),s=l.name,u=l.workspace,c="".concat(t,"rest/").concat(u&&"workspaces/".concat(u,"/")||"","layers/").concat(s,".json");return P().get(c,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[];return{layer:M(M({},t),{},{styles:{"@class":"linked-hash-set",style:[].concat(L(r),L(a))}})}})).then((function(e){return P().put(c,e).then((function(){return e}))}))},k=function(e){var t=e.baseUrl,r=e.layerName,n=e.styleName,a=e.options,o=void 0===a?{}:a,i=(0,x.$N)(r),l=i.name,s=i.workspace,u="".concat(t,"rest/").concat(s&&"workspaces/".concat(s,"/")||"","layers/").concat(l,".json");return P().get(u,o).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[],a=t.defaultStyle||{},o=p()([a].concat(L(r)),"name");return{layer:M(M({},t),{},{defaultStyle:{name:n},styles:{"@class":"linked-hash-set",style:o}})}})).then((function(e){return P().put(u,e).then((function(){return e}))}))};var W=r(93222),A=r(75110),_=r(7147),I=r(8954),$=["name","workspace"];function Z(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z=function(e){var t=e.status,r=e.styleName,a=e.baseUrl;return"edit"===t?n.Observable.defer((function(){return w.ZP.getStyleCodeByName({baseUrl:a,styleName:r})})).switchMap((function(e){return n.Observable.of((0,S.FU)({languageVersion:e.languageVersion,code:e.code,templateId:"",format:e.format,init:!0}))})).catch((function(e){return n.Observable.of((0,S.Fe)("edit",e))})):n.Observable.empty()},J=function(e){var t=e.styleName,r=e.baseUrl,a=e.onSuccess$,o=e.onError$;return n.Observable.defer((function(){return w.ZP.deleteStyle({baseUrl:r,styleName:t})})).switchMap((function(){return a||n.Observable.empty()})).catch((function(){return o||n.Observable.empty()}))},H=function(e){var t=e.baseUrl,r=e.update,a=e.code,o=e.format,i=e.styleName,l=e.status,s=e.languageVersion,c=e.options,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],y=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.Observable.defer((function(){return w.ZP[r?"updateStyle":"createStyle"]({baseUrl:t,code:a,format:o,styleName:i,languageVersion:s,options:c})})).switchMap((function(){var e;return u()(f)&&(e=n.Observable).of.apply(e,[(0,S.Wm)()].concat(Z(f)))||f})).catch((function(e){var t;return(t=n.Observable).of.apply(t,[(0,S.Fe)(l,e),(0,S.Wm)()].concat(Z(y)))})).startWith((0,S.pt)(l))};function K(e,t){return!t&&e.availableStyles?n.Observable.of((0,d.Xy)({availableStyles:e.availableStyles}),(0,S.Wm)()):(0,g.kB)(e).switchMap((function(t){var r=(0,O.IA)(t);return r.availableStyles?n.Observable.of((0,d.Xy)({availableStyles:r.availableStyles}),(0,d.tV)(e.id,"layer",G({},r)),(0,S.Wm)()):n.Observable.of((0,S.Fe)("availableStyles",{status:401}),(0,S.Wm)())})).catch((function(e){var t=-1!==e.message.indexOf("could not be unmarshalled")?"parsingCapabilities":"global";return n.Observable.of((0,S.Fe)(t,e),(0,S.Wm)())})).startWith((0,S.pt)("global"))}const Q={toggleStyleEditorEpic:function(e,t){return e.ofType(S.vZ).filter((function(){return!(0,W.aN)(t.getState())})).switchMap((function(e){var r=t.getState(),a=(0,A.jN)(r),i=!!o()(a,"options.availableStyles");if(!e.enabled)return function(e){var t=(0,W.gc)(e),r=(0,W.Z0)(e).baseUrl,a=void 0===r?"":r;return n.Observable.of((0,S.l1)(),(0,m.fU)({owner:x.s1})).merge(t?J({styleName:t,baseUrl:a}):n.Observable.empty())}(r);if((0,W.ji)(r)&&i)return n.Observable.empty();var l=e.layer||(0,A.Iz)(r);if(!l||l&&!l.url)return n.Observable.empty();var s=(0,O.Nd)(l);if(!s)return K(l);var u=l.url.split(s),c="".concat(u[0]).concat(s),f=(0,W.Z0)(r);return n.Observable.concat(n.Observable.of((0,S.pt)("global"),(0,S.l1)()),n.Observable.defer((function(){return(0,I.eb)({baseUrl:c,styleService:f})})).switchMap((function(e){return n.Observable.concat(n.Observable.of((0,S.E0)(e)),n.Observable.defer((function(){return B(c+"rest/",l.name)})).switchMap((function(e){var t,r=(null==e||null===(t=e.styles)||void 0===t?void 0:t.style)||[],a=p()([e.defaultStyle].concat(Z(r)),"name");return 0===a.length?n.Observable.of((0,S.Fe)("availableStyles",{status:401}),(0,S.Wm)()):n.Observable.defer((function(){return Promise.all([w.ZP.getStylesInfo({baseUrl:c,styles:a}),(0,g.kB)(l).toPromise().then((function(e){return e})).catch((function(){return null}))])})).switchMap((function(e){var t,r,a=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(t,r)||q(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],i=a[1],s=i&&(0,O.IA)(i),u=((null==s?void 0:s.availableStyles)||[]).map((function(e){return G(G({},e),(0,x.$N)(e.name))})).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name;return t})),c=u.length>0?o.map((function(e){var t=(0,x.$N)(e.name),r=u.find((function(e){return e.name===t.name}))||{},n=(r.name,r.workspace,function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(r,$));return n?G(G({},n),e):e})):o;return n.Observable.of((0,m.W)(l.id,x.s1,"override",{}),(0,d.Xy)({availableStyles:c}),(0,d.tV)(l.id,"layer",{availableStyles:c}),(0,S.Wm)())}))})).catch((function(){return K(l,!0)})))})))}))},updateLayerOnStatusChangeEpic:function(e,t){return e.ofType(S.g$).filter((function(e){return!!e.status})).switchMap((function(r){var a=t.getState(),o=(0,W.Vf)(a),i=o&&o.params||{},l=o&&!o.describeFeatureType&&(0,v.H)(o.url,o,{query:i}),s=(0,W.i7)(a)||o.availableStyles&&o.availableStyles[0]&&o.availableStyles[0].name,u=(0,W.Ri)(a),c=(0,W.Z0)(a).baseUrl,f=void 0===c?"":c;return l&&function(e,t){var r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};return(r=n.Observable).of.apply(r,[(0,S.pt)("global")].concat(Z(o))).merge(e.ofType(d.K$).filter((function(){var e=(0,A.Iz)(t.getState());return a(e)})).switchMap((function(){var e=(0,A.Iz)(t.getState());return i(e)})).catch((function(e){return n.Observable.of((0,S.Fe)("global",e),(0,S.Wm)())})).takeUntil(e.ofType(S.E2)))}(e,t,(function(e){return e&&e.describeLayer}),[l],(function(e){return n.Observable.concat(z({status:r.status,styleName:s,baseUrl:f}),n.Observable.of((0,S.xR)(!(e&&e.describeLayer&&401===e.describeLayer.error)),(0,S.bB)({editorType:u.msEditorType||"textarea",styleJSON:u.msStyleJSON}),(0,S.Wm)()))}))||n.Observable.concat(z({status:r.status,styleName:s,baseUrl:f}),n.Observable.of((0,S.bB)({editorType:u.msEditorType||"textarea",styleJSON:u.msStyleJSON})))}))},updateTemporaryStyleEpic:function(e,t){return e.ofType(S.TB,S.DX).switchMap((function(e){var r=t.getState(),n=(0,W.gc)(r),a=(0,W.Vf)(r),o=(0,x.$N)(a.name).workspace,i=e.format&&e.format!==(0,W.iB)(r),l=n||"".concat(o?"".concat(o,":"):"").concat((0,x.Vi)()),s=e.format||(0,W.iB)(r),u=(0,W.ex)(r),c=(0,W.Z0)(r).baseUrl,f=void 0===c?"":c,y=(0,W.j5)(r),p="sld"===s&&(e.code||"").match(/version=\"1\.1\.0\"/)&&{version:"1.1.0"}||e.format&&!e.languageVersion&&{version:"1.0.0"}||e.languageVersion||{version:"1.0.0"},d=y.version!==p.version?{params:{raw:!0}}:{},v=p,g=function(t){return H({update:!0,code:e.code,format:s,styleName:t,status:u,baseUrl:f,languageVersion:v,options:d},[(0,m.B1)(x.s1,[{style:t,_v_:Date.now(),singleTile:!0}]),(0,S.k5)({temporaryId:t,templateId:e.templateId||"",code:e.code,format:s,init:e.init,languageVersion:v})],"edit"===u?[]:[(0,b.vU)({title:"styleeditor.updateTmpErrorTitle",message:"styleeditor.updateTmpStyleErrorMessage",uid:"updateTmpStyleError",autoDismiss:5})])},h=("css"===s?"* { stroke: #888888; }":"sld"===s&&'<?xml version="1.0" encoding="ISO-8859-1"?>\n<StyledLayerDescriptor version="1.0.0"\n\t\txsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"\n\t\txmlns="http://www.opengis.net/sld"\n\t\txmlns:ogc="http://www.opengis.net/ogc"\n\t\txmlns:xlink="http://www.w3.org/1999/xlink"\n\t\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\n\t<NamedLayer>\n\t\t<Name>Default Style</Name>\n\t\t<UserStyle>\n\t\t\t<Title>${styleTitle}</Title>\n\t\t\t<Abstract>${styleAbstract}</Abstract>\n\t\t\t<FeatureTypeStyle>\n\t\t\t\t<Rule>\n\t\t\t\t\t<Name>Rule Name</Name>\n\t\t\t\t\t<Title>Rule Title</Title>\n\t\t\t\t\t<Abstract>Rule Abstract</Abstract>\n\t\t\t\t\t<LineSymbolizer>\n\t\t\t\t\t\t<Stroke>\n\t\t\t\t\t\t\t<CssParameter name="stroke">#0000FF</CssParameter>\n\t\t\t\t\t\t</Stroke>\n\t\t\t\t\t\t</LineSymbolizer>\n\t\t\t\t\t<PointSymbolizer>\n\t\t\t\t\t\t<Graphic>\n\t\t\t\t\t\t\t<Mark>\n\t\t\t\t\t\t\t\t<WellKnownName>square</WellKnownName>\n\t\t\t\t\t\t\t\t<Fill>\n\t\t\t\t\t\t\t\t\t<CssParameter name="fill">#FF0000</CssParameter>\n\t\t\t\t\t\t\t\t</Fill>\n\t\t\t\t\t\t\t</Mark>\n\t\t\t\t\t\t</Graphic>\n\t\t\t\t\t</PointSymbolizer>\n\t\t\t\t\t</Rule>\n\t\t\t\t</FeatureTypeStyle>\n\t\t\t</UserStyle>\n\t\t</NamedLayer>\n\t</StyledLayerDescriptor>\n')||"",O=function(e){return H({code:h,format:s,styleName:e,status:u,baseUrl:f},g(e),[(0,b.vU)({title:"styleeditor.createTmpErrorTitle",message:"styleeditor.createTmpStyleErrorMessage",uid:"createTmpStyleError",autoDismiss:5}),(0,S.k5)({temporaryId:null,templateId:"",code:"",format:"",init:"",languageVersion:null})])};return i&&n&&J({styleName:n,baseUrl:f,onSuccess$:O("".concat(o?"".concat(o,":"):"").concat((0,x.Vi)())),onError$:g(l)})||n&&g(l)||O(l)}))},createStyleEpic:function(e,t){return e.ofType(S.vA).switchMap((function(e){var r=t.getState(),a=(0,W.gB)(r),o=(0,W.Vf)(r),i=(0,x.$N)(o.name).workspace,s="".concat(i?"".concat(i,":"):"").concat((0,x.nK)(e.settings)),u=(0,W.iB)(r),c=e.settings||{},y=c.title,p=void 0===y?"":y,v=c._abstract,g=void 0===v?"":v,h=(0,W.Z0)(r).baseUrl,O=void 0===h?"":h,j=G({title:p,description:g},{msStyleJSON:null,msEditorType:"visual"});return n.Observable.defer((function(){return w.ZP.createStyle({baseUrl:O,code:f()(a)({styleTitle:p,styleAbstract:g}),format:u,styleName:s,metadata:j})})).switchMap((function(){return n.Observable.of((0,m.B1)(x.s1,[{}]),(0,d.Xy)({style:s||""},!0),(0,S.Nf)(""),(0,S.Wm)()).merge(function(e){var t=e.baseUrl,r=e.layer,a=e.styleName,o=e.format,i=e.title,s=e._abstract,u=e.metadata;return n.Observable.defer((function(){return U({baseUrl:t,layerName:r.name,styles:[{name:a}]})})).switchMap((function(){var e=G({filename:"".concat(a,".").concat(o),format:o,name:a,title:i,_abstract:s},u&&{metadata:u}),t=l()(r.availableStyles),c=r.availableStyles&&[t,e].concat(Z(r.availableStyles.filter((function(e,t){return t>0}))))||[e];return n.Observable.of((0,d.Xy)({availableStyles:c},!0),(0,S.Wm)())})).catch((function(){return n.Observable.of((0,S.Wm)())})).startWith((0,S.pt)("global"))}({layer:o,styleName:s,format:u,title:p,_abstract:g,baseUrl:O,metadata:j}))})).catch((function(e){return n.Observable.of((0,S.Fe)("",e),(0,S.Wm)(),(0,b.vU)({title:"styleeditor.createStyleErrorTitle",message:"styleeditor.createStyleErrorMessage",uid:"createStyleError",autoDismiss:5}))})).startWith((0,S.pt)(""))}))},updateStyleCodeEpic:function(e,t){return e.ofType(S.ch).switchMap((function(){var e=t.getState(),r=(0,W.iB)(e),a=(0,W.j5)(e),o=(0,W.gB)(e),i=(0,W.i7)(e),l=(0,W.gc)(e),s=(0,W.Vf)(e),u=(0,W.Z0)(e).baseUrl,c=void 0===u?"":u,f=(0,W.WW)(e)||{},y={msStyleJSON:f.styleJSON||null,msEditorType:f.editorType},p=(s.availableStyles||[]).map((function(e){return e.name===i?G(G({},e),{},{metadata:G(G({},e.metadata),y)}):e}));return n.Observable.defer((function(){return w.ZP.updateStyle({baseUrl:c,code:o,format:r,styleName:i,languageVersion:a,options:{params:{raw:!0}},metadata:y})})).switchMap((function(){return n.Observable.of((0,S.Wm)(),(0,d.tV)(s.id,"layer",{_v_:Date.now(),availableStyles:p}),(0,d.Xy)({availableStyles:p}),(0,S.k5)({temporaryId:l,templateId:"",code:o,format:r,init:!0,languageVersion:a}),(0,b.Vp)({title:"styleeditor.savedStyleTitle",message:"styleeditor.savedStyleMessage",uid:"savedStyleTitle",autoDismiss:5}))})).catch((function(e){return n.Observable.of((0,S.Fe)("global",e),(0,S.Wm)(),(0,b.vU)({title:"styleeditor.updateStyleErrorTitle",message:"styleeditor.updateStyleErrorMessage",uid:"updateStyleError",autoDismiss:5}))})).startWith((0,S.pt)("global"))}))},deleteStyleEpic:function(e,t){return e.ofType(S.j1).filter((function(e){return!!e.styleName})).switchMap((function(e){var r=e.styleName,a=t.getState(),o=(0,W.Vf)(a),i=(0,W.Z0)(a).baseUrl,l=void 0===i?"":i,s=(0,_.tL)(a),u=(0,_.Gd)(a);return n.Observable.defer((function(){return R({baseUrl:l,layerName:o.name,styles:[{name:r}]})})).switchMap((function(){var e=o.availableStyles&&o.availableStyles.filter((function(e){return e.name!==r}))||[];return n.Observable.concat(n.Observable.of((0,d.Xy)({style:"",availableStyles:e},!0),(0,S.Wm)(),(0,h.Xg)("layersettings","originalSettings",G(G({},s),{},{style:""})),(0,h.Xg)("layersettings","initialSettings",G(G({},u),{},{style:""}))),J({styleName:r,baseUrl:l,onSuccess$:n.Observable.of((0,b.Vp)({title:"styleeditor.deletedStyleSuccessTitle",message:"styleeditor.deletedStyleSuccessMessage",uid:"deletedStyleSuccess",autoDismiss:5})),onError$:n.Observable.of((0,b.vU)({title:"styleeditor.deletedStyleErrorTitle",message:"styleeditor.deletedStyleErrorMessage",uid:"deletedStyleError",autoDismiss:5}))}))})).catch((function(){return n.Observable.of((0,S.Wm)())})).startWith((function(){return n.Observable.of((0,S.pt)("global"))}))}))},setDefaultStyleEpic:function(e,t){return e.ofType(S.rb).switchMap((function(){var e=t.getState(),r=(0,W.Z0)(e).baseUrl,a=void 0===r?"":r,o=(0,W.Vf)(e),i=(0,W.i7)(e);return n.Observable.defer((function(){return k({baseUrl:a,layerName:o.name,styleName:i})})).switchMap((function(){var e=o.availableStyles.filter((function(e){var t=e.name;return i===t})),t=o.availableStyles.filter((function(e){var t=e.name;return i!==t})),r=[].concat(Z(e),Z(t));return n.Observable.of((0,d.Xy)({availableStyles:r},!0),(0,b.Vp)({title:"styleeditor.setDefaultStyleSuccessTitle",message:"styleeditor.setDefaultStyleSuccessMessage",uid:"setDefaultStyleSuccess",autoDismiss:5}),(0,S.Wm)())})).startWith((0,S.pt)("global")).catch((function(){return n.Observable.of((0,b.vU)({title:"styleeditor.setDefaultStyleErrorTitle",message:"styleeditor.setDefaultStyleErrorMessage",uid:"setDefaultStyleError",autoDismiss:5}),(0,S.Wm)())}))}))}}},80833:(e,t,r)=>{"use strict";r.d(t,{kB:()=>d,HI:()=>m});var n=r(8575),a=(r(91175),r(90173)),o=r(89255),i=r(67007),l=r(75875),s=r.n(l),u=(r(86267),r(24262)),c=r(10284),f=r(33044);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}a.default;var d=function(e){return o.Observable.defer((function(){return i.ZP.getCapabilities((0,u.Fh)(e))})).let(c.oB).map((function(t){return i.ZP.parseLayerCapabilities(t,e)}))},m=function(e){return function(e){return o.Observable.defer((function(){return s().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,a=void 0===r?{}:r,o=e.url,i=n.parse(a.url||o,!0);return n.format(p(p({},i),{},{search:void 0,query:p(p({},i.query),{},{service:"WMS",version:"1.1.1",layers:t,outputFormat:"application/json",request:"DescribeLayer"})}))}(e))})).let(c.oB)}(e).map((function(e){var t=e.data,r=void 0===t?{}:t;return r&&r.layerDescriptions[0]})).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.owsURL;return p(p({},e),{},{params:{},search:r?{type:"wfs",url:(0,f.cleanAuthParamsFromURL)(r)}:void 0})}))}},98592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var n=r(1469),a=r.n(n),o=r(47037),i=r.n(o),l=r(27418),s=r.n(l),u=r(45697),c=r.n(u),f=r(67294),y=r.n(f),p=r(33664),b=r(18093),d=r(22222),m=r(80416),v=r(96909),g=r(15402),h=r(65539),O=r(82030),S=r(73014),w=r(32425),j=r(74621),P=r(93222),E=r(99009),T=r(63977);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function B(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&C(e,t)}(s,e);var t,r,n,o,l=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(o){var r=R(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return B(this,e)});function s(){return N(this,s),l.apply(this,arguments)}return t=s,(r=[{key:"UNSAFE_componentWillMount",value:function(){var e=!this.props.editingAllowedRoles||a()(this.props.editingAllowedRoles)&&i()(this.props.userRole)&&-1!==this.props.editingAllowedRoles.indexOf(this.props.userRole);this.props.onInit(this.props.styleService,e&&(0,E.uW)(this.props.layer,this.props.styleService))}},{key:"render",value:function(){return y().createElement(h.Z,{className:"ms-style-editor-container",header:this.props.showToolbar?y().createElement("div",{className:"ms-style-editor-container-header"},this.props.header,y().createElement("div",{className:"text-center"},y().createElement(T.lC,{enableSetDefaultStyle:this.props.enableSetDefaultStyle}))):null,footer:y().createElement("div",{style:{height:25}})},this.props.isEditing?y().createElement(T.m2,{config:this.props.editorConfig}):y().createElement(T.tM,{showDefaultStyleIcon:this.props.canEdit&&this.props.enableSetDefaultStyle}))}}])&&M(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(y().Component);U(k,"propTypes",{layer:c().object,header:c().node,isEditing:c().bool,showToolbar:c().node.bool,onInit:c().func,styleService:c().object,userRole:c().string,editingAllowedRoles:c().array,enableSetDefaultStyle:c().bool,canEdit:c().bool,editorConfig:c().object}),U(k,"defaultProps",{layer:{},onInit:function(){},editingAllowedRoles:["ADMIN"],editorConfig:{}});var W=(0,b.compose)(b.toClass,(0,b.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active;return!t}),(function(){return function(){return null}})),(0,p.connect)((0,d.P1)([P.ex,P.aN,P.Vf,P.p,j.L3,P.z_,P.Z0],(function(e,t,r,n,a,o,i){return{isEditing:"edit"===e,loading:t,layer:r,error:n,userRole:a,canEdit:o,styleService:i}})),{onInit:v.E0,onUpdateParams:m.Xy},(function(e,t,r){var n,a,o,i=(null===(n=r.styleService)||void 0===n?void 0:n.baseUrl)===(null===(a=e.styleService)||void 0===a?void 0:a.baseUrl)&&(null===(o=e.styleService)||void 0===o?void 0:o.isStatic),l=r.styleService&&!i?D(D({},r.styleService),{},{isStatic:!0}):D({},e.styleService);return D(D(D(D({},r),e),t),{},{styleService:l})})),(0,O.Z)((function(e){var t=e.error;return!!(null!=t&&t.availableStyles||null!=t&&t.global||null!=t&&t.parsingCapabilities)}),(function(e){var t=e.error;return{glyph:"exclamation-mark",title:y().createElement(g.Z,{msgId:"styleeditor.errorTitle"}),description:y().createElement(g.Z,{msgId:((null==t?void 0:t.availableStyles)?"styleeditor.missingAvailableStylesMessage":(null==t?void 0:t.parsingCapabilities)&&"styleeditor.parsingCapabilitiesError")||(null==t?void 0:t.global)&&"styleeditor.globalError"}),style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},mainViewStyle:{margin:"auto",width:300}}})),(0,S.Z)((function(e){return"global"===e.loading}),{size:150,style:{margin:"auto"}},(function(e){return y().createElement("div",{style:{position:"relative",height:"100%",display:"flex"}},y().createElement(w.Z,e))})),(0,b.compose)((0,p.connect)((function(){return{}}),{toggleStyleEditor:v.Wv}),(0,b.lifecycle)({componentDidMount:function(){this.props.toggleStyleEditor(null,!0)}})))(k);const A={StyleEditorPlugin:s()(W,{TOC:{priority:1,container:"TOCItemSettings"},TOCItemsSettings:{name:"StyleEditor",target:"style",priority:1,ToolbarComponent:T.lC}}),reducers:{styleeditor:r(32244).Z},epics:r(94943).ZP}},32244:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(96909),a=r(47037),o=r.n(a);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.wL:return l(l({},e),{},{service:t.service,canEdit:t.canEdit});case n.Nm:return l(l({},e),{},{canEdit:t.canEdit});case n.gF:return l(l({},e),{},{temporaryId:t.temporaryId,templateId:t.templateId,code:t.code,format:t.format,error:null,languageVersion:t.languageVersion,initialCode:t.init?t.code:e.initialCode});case n.g$:return""===t.status?l(l({},e),{},{status:t.status,code:"",templateId:"",initialCode:"",addStyle:!1,error:{}}):l(l({},e),{},{status:t.status});case n.dJ:return{service:e.service&&l({},e.service)||{},canEdit:e.canEdit,loading:e.loading};case n.uz:return l(l({},e),{},{addStyle:t.add});case n.lX:return l(l({},e),{},{loading:!t.status||t.status});case n.E2:return l(l({},e),{},{loading:!1,enabled:!0});case n.mF:var r,a,i,u=(null==t||null===(r=t.error)||void 0===r?void 0:r.statusText)||(null==t||null===(a=t.error)||void 0===a?void 0:a.message)||"",c=o()(null==t||null===(i=t.error)||void 0===i?void 0:i.messageId)&&{messageId:t.error.messageId},f=u.match(/line\s([\d]+)|column\s([\d]+)|lineNumber:\s([\d]+)|columnNumber:\s([\d]+)/g),y=f&&2===f.length&&f.reduce((function(e,t){var r=t.split(" "),n=r[0].replace(/Number:/g,""),a=parseFloat(r[1]);return n&&!isNaN(a)&&l(l({},e),{},s({},n,a))||l({},e)}),l({message:u},c))||l({message:u},c);return l(l({},e),{},{loading:!1,canEdit:!(t.error&&(401===t.error.status||403===t.error.status||t.error.message&&-1!==t.error.message.indexOf("could not be unmarshalled"))),error:l(l({},e.error),{},s({},t.status||"global",l({status:t.error&&t.error.status||400},y)))});case n.dk:return l(l({},e),{},{metadata:l(l({},e.metadata),t.metadata)});default:return e}}}}]);