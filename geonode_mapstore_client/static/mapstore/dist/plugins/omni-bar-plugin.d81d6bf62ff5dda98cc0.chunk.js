(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7489],{9860:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>v});var r=e(24852),o=e.n(r),a=e(45697),i=e.n(a),s=(e(78998),e(27418)),l=e.n(s),c=e(58252);function p(n){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p(n)}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function f(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function d(n,t){return d=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},d(n,t)}function m(n,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(n)}function b(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function y(n){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},y(n)}function h(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var g=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&d(n,t)}(s,n);var t,e,r,a,i=(r=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=y(r);if(a){var e=y(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return m(this,n)});function s(){var n;u(this,s);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return h(b(n=i.call.apply(i,[this].concat(e))),"getPanels",(function(){return n.props.items.filter((function(n){return n.tools})).reduce((function(n,t){return n.concat(t.tools.map((function(n,e){var r,o;return{name:t.name+e,panel:n,cfg:(null==t||null===(r=t.cfg)||void 0===r||null===(o=r.toolsCfg)||void 0===o?void 0:o[e])||{}}})))}),[])})),h(b(n),"getTools",(function(){return n.props.items.sort((function(n,t){return n.position-t.position}))})),n}return t=s,(e=[{key:"render",value:function(){return o().createElement(c.Z,{id:this.props.id,style:this.props.style,className:this.props.className,mapType:this.props.mapType,container:function(n){return o().createElement("div",n,n.children)},toolStyle:"primary",activeStyle:"default",stateSelector:"omnibar",tool:function(n){return o().createElement("div",null,n.children)},tools:this.getTools(),panels:this.getPanels()})}}])&&f(t.prototype,e),s}(o().Component);h(g,"propTypes",{className:i().string,style:i().object,items:i().array,id:i().string,mapType:i().string}),h(g,"defaultProps",{items:[],className:"navbar-dx shadow",style:{},id:"mapstore-navbar",mapType:"leaflet"});const v={OmniBarPlugin:l()(g,{disablePluginIf:"{state('featuregridmode') === 'EDIT' || (state('router') && state('router').includes('/geostory/shared') && state('geostorymode') !== 'edit')}"}),reducers:{}}},90603:(n,t,e)=>{(n.exports=e(9252)()).push([n.id,"/*viewer navbar */\n.msgapi .navbar-dx{\n\tposition:absolute;\n\tright:0;\n\ttop:0;\n}\n\n.msgapi .navbar-dx > ul{\n\tpadding:0;\n}\n\n.msgapi .navbar-dx > ul > li{\n\tfloat: left;\n\tlist-style:none;\n}\n\n.msgapi .navbar-dx .search-wrap .MapSearchBar{\n    right: 0;\n    top: 0;\n    left: 0;\n}\n\n.msgapi .navbar-dx .search-wrap .form-control,.msgapi .navbar-dx .search-wrap .form-control:focus{\n    border-color: #fff;\n    border-right: 0;\n    webkit-box-shadow: none;\n    box-shadow: none;\n}\n.msgapi .navbar-dx .search-wrap .MapSearchBar .input-group-addon{\n    border: 0;\n}\n.msgapi .navbar-dx .search-result-list{\n    left: 0;\n    max-height: none;\n}\n\n.msgapi .navbar-dx .dropdown-menu {\n\tmargin:0;\n\tpadding-top: 0;\n}\n\n@media (min-width: 1200px) {\n    .msgapi .navbar-dx .search-wrap {\n       width: 500px;\n       height: 50px;\n    }\n}\n\n.msgapi .navbar-dx > * {\n\tdisplay: inline-block;\n}\n/* Page Navbar */\n.msgapi .navbar-home .dropdown {\n\tfloat: right;\n}\n.msgapi .navbar-home .navbar-header {\n\tmargin-top: 7px;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n\tdisplay: inline-block;\n}\n",""])},78998:(n,t,e)=>{var r=e(90603);"string"==typeof r&&(r=[[n.id,r,""]]),e(14246)(r,{}),r.locals&&(n.exports=r.locals)}}]);