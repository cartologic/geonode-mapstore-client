(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9528],{95605:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>P}),t(77890);var r=t(27418),o=t.n(r),i=t(71703),p=t(22222),a=t(45697),s=t.n(a),c=t(24852),l=t.n(c),u=t(72986),f=t.n(u);function d(n){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(n)}function b(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function m(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function g(n,e){return g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},g(n,e)}function y(n,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function h(n){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},h(n)}function x(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.e(2620).then(t.t.bind(t,22620,23));var w=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&g(n,e)}(p,n);var e,t,r,o,i=(r=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,e=h(r);if(o){var t=h(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return y(this,n)});function p(){return b(this,p),i.apply(this,arguments)}return e=p,(t=[{key:"render",value:function(){return this.props.loading?l().createElement("div",{className:this.props.className,id:this.props.id},l().createElement(f(),{noFadeIn:!0,overrideSpinnerClassName:"spinner",spinnerName:this.props.spinner})):null}}])&&m(e.prototype,t),p}(l().Component);x(w,"propTypes",{id:s().string,loading:s().bool,className:s().string,spinner:s().string}),x(w,"defaultProps",{id:"mapstore-globalspinner",loading:!1,className:"ms2-loading",spinner:"circle"});const v=w;var O=t(75110),_=(0,p.P1)([O.l2],(function(n){return{loading:n&&n.some((function(n){return n.loading}))}})),k=(0,i.connect)(_)(v);const P={MapLoadingPlugin:o()(k,{Toolbar:{name:"maploading",position:1,tool:!0,priority:1}}),reducers:{}}},6934:(n,e,t)=>{(n.exports=t(9252)()).push([n.id,".msgapi #mapstore-globalspinner  {\n    width: 28px;\n    height: 28px;\n    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);\n    background-color: white;\n    background-size: 80px 80px;\n    background-repeat: no-repeat;\n    border-radius: 4px;\n    border: 1px solid #999;\n    z-index: 10;\n    top: 90px;\n    left: 2px;\n    position: absolute;\n    margin: 8px;\n}\n\n.msgapi #mapstore-globalspinner .circle-wrapper {\n    margin-left: 2px;\n    margin-top: 1px;\n}\n\n.msgapi #mapstore-toolbar #mapstore-globalspinner {\n    position: static;\n    width: 42px;\n    margin: 0;\n    margin-top: 0;\n    height: 35px;\n    box-shadow: none;\n}\n\n.msgapi .ms2-loading .sk-circle-wrapper {\n     width: 30px;\n     height: 30px;\n     margin-left: 10px !important;\n     margin-top: 10px !important;\n }\n",""])},77890:(n,e,t)=>{var r=t(6934);"string"==typeof r&&(r=[[n.id,r,""]]),t(14246)(r,{}),r.locals&&(n.exports=r.locals)}}]);