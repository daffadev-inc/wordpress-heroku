this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["single-product"]=function(t){function e(e){for(var r,i,a=e[0],u=e[1],s=e[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},c={37:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=c[t]=[e,r]}));e.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(t){return i.p+""+({1:"atomic-block-components/add-to-cart--atomic-block-components/image--atomic-block-components/title",2:"atomic-block-components/add-to-cart--atomic-block-components/button",3:"atomic-block-components/sale-badge",7:"atomic-block-components/add-to-cart",8:"atomic-block-components/button",9:"atomic-block-components/category-list",10:"atomic-block-components/image",11:"atomic-block-components/price",12:"atomic-block-components/rating",13:"atomic-block-components/sku",14:"atomic-block-components/stock-indicator",15:"atomic-block-components/summary",16:"atomic-block-components/tag-list",17:"atomic-block-components/title"}[t]||t)+".js"}(t);var u=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(s);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}c[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;return o.push([917,0]),n()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},110:function(t,e){},111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e){},120:function(t,e){},121:function(t,e){},122:function(t,e){},13:function(t,e){!function(){t.exports=this.wp.apiFetch}()},133:function(t,e,n){"use strict";var r=n(0),c=n(1),o=n(64),i=n(167),a=n(3),u=n(15),s=n(46);e.a=function(t){var e=(Object(s.useProductDataContext)().product||{}).id||t.productId||0;return e?Object(r.createElement)(u.InspectorControls,null,Object(r.createElement)("div",{className:"wc-block-single-product__edit-card"},Object(r.createElement)("div",{className:"wc-block-single-product__edit-card-title"},Object(r.createElement)("a",{href:"".concat(a.ADMIN_URL,"post.php?post=").concat(e,"&action=edit"),target:"_blank",rel:"noopener noreferrer"},Object(c.__)("Edit this product's details","woo-gutenberg-products-block"),Object(r.createElement)(o.a,{srcElement:i.a,size:16}))),Object(r.createElement)("div",{className:"wc-block-single-product__edit-card-description"},Object(c.__)("Edit details such as title, price, description and more.","woo-gutenberg-products-block")))):null}},140:function(t,e){!function(){t.exports=this.wp.wordcount}()},141:function(t,e,n){"use strict";var r=n(51),c=n.n(r),o=n(10),i=n.n(o),a=n(0),u=n(1),s=n(7),l=(n(2),n(50)),d=n(4),p=n(8),f=n.n(p),b=n(22),m=n.n(b),g=n(26),h=n.n(g),O=n(23),v=n.n(O),j=n(24),w=n.n(j),y=n(12),k=n.n(y),E=n(36);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k()(t);if(e){var c=k()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return w()(this,n)}}var _=Object(E.b)((function(t){var e=function(e){v()(r,e);var n=S(r);function r(){return m()(this,r),n.apply(this,arguments)}return h()(r,[{key:"render",value:function(){var e=this.props.selected;return Object(a.createElement)(t,i()({},this.props,{selected:Object(s.isNil)(e)?[]:[e]}))}}]),r}(a.Component);return e.defaultProps={selected:null},e}),"withTransformSingleSelectToMultipleSelect"),x=n(308),P=n(16),C=n.n(P),B=n(38),N=n.n(B),I=n(21),R=n.n(I),D=n(9),z=n.n(D),M=n(37),L=n.n(M),A=n(43),T=n(45);function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){z()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k()(t);if(e){var c=k()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return w()(this,n)}}var q=Object(E.b)((function(t){var e=function(e){v()(r,e);var n=U(r);function r(){var t;m()(this,r);for(var e=arguments.length,c=new Array(e),o=0;o<e;o++)c[o]=arguments[o];return t=n.call.apply(n,[this].concat(c)),z()(R()(t),"state",{error:null,loading:!1,variations:{}}),z()(R()(t),"loadVariations",(function(){var e=t.props.products,n=t.state,r=n.loading,c=n.variations;if(!r){var o=t.getExpandedProduct();if(o&&!c[o]){var i=e.find((function(t){return t.id===o}));i.variations&&0!==i.variations.length?(t.setState({loading:!0}),Object(A.g)(o).then((function(e){var n=e.map((function(t){return H(H({},t),{},{parent:o})}));t.setState({variations:H(H({},t.state.variations),{},z()({},o,n)),loading:!1,error:null})})).catch(function(){var e=N()(C.a.mark((function e(n){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)(n);case 2:r=e.sent,t.setState({variations:H(H({},t.state.variations),{},z()({},o,null)),loading:!1,error:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):t.setState({variations:H(H({},t.state.variations),{},z()({},o,null)),loading:!1,error:null})}}})),t}return h()(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.selected,n=t.showVariations;e&&n&&this.loadVariations()}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.isLoading,r=e.selected;e.showVariations&&(!L()(t.selected,r)||t.isLoading&&!n)&&this.loadVariations()}},{key:"isProductId",value:function(t){return this.props.products.some((function(e){return e.id===t}))}},{key:"findParentProduct",value:function(t){return this.props.products.filter((function(e){return e.variations&&e.variations.find((function(e){return e.id===t}))}))[0].id}},{key:"getExpandedProduct",value:function(){var t=this.props,e=t.isLoading,n=t.selected;if(!t.showVariations)return null;var r=n&&n.length?n[0]:null;return r?this.prevSelectedItem=r:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(r=this.prevSelectedItem)),!e&&r?this.isProductId(r)?r:this.findParentProduct(r):null}},{key:"render",value:function(){var e=this.props,n=e.error,r=e.isLoading,c=this.state,o=c.error,u=c.loading,s=c.variations;return Object(a.createElement)(t,i()({},this.props,{error:o||n,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:s,variationsLoading:u}))}}]),r}(a.Component);return z()(e,"defaultProps",{selected:[],showVariations:!1}),e}),"withProductVariations"),F=n(64),Q=n(56),W=Object(a.createElement)(Q.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"#1E8CBE",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),G=Object(a.createElement)(Q.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"#757575",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),J=n(49);n(202);function X(t,e){if(!e)return t;var n=new RegExp(Object(s.escapeRegExp)(e),"ig");return t.replace(n,"<strong>$&</strong>")}var Y=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t?Object(a.createElement)(F.a,{srcElement:W}):Object(a.createElement)(F.a,{srcElement:G})},K={list:Object(u.__)("Products","woo-gutenberg-products-block"),noItems:Object(u.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(u.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(u.__)("Product search results updated.","woo-gutenberg-products-block")},$=function(t){var e=t.expandedProduct,n=t.error,r=t.isLoading,o=t.onChange,p=t.onSearch,b=t.products,m=t.renderItem,g=t.selected,h=t.showVariations,O=t.variations,v=t.variationsLoading,j=function(t){var n=t.item,r=t.search,c=t.depth,o=void 0===c?0:c,p=t.isSelected,b=t.onSelect,m=n.variations&&Array.isArray(n.variations)?n.variations.length:0,g=f()("woocommerce-search-product__item","woocommerce-search-list__item","depth-".concat(o),{"is-searching":r.length>0,"is-skip-level":0===o&&0!==n.parent,"is-variable":m>0}),h=Object.assign({},t);delete h.isSingle;var O={role:"menuitemradio"};return n.breadcrumbs.length&&(O["aria-label"]="".concat(n.breadcrumbs[0],": ").concat(n.name)),m&&(O["aria-expanded"]=n.id===e),n.breadcrumbs.length?(Object(s.isEmpty)(n.variation)||(n.name=n.variation),Object(a.createElement)(l.b,i()({className:g},t,O))):[Object(a.createElement)(d.MenuItem,i()({key:"product-".concat(n.id),isSelected:p},h,O,{className:g,onClick:function(){b(n)()}}),Object(a.createElement)("span",{className:"woocommerce-search-list__item-state"},Y(p)),Object(a.createElement)("span",{className:"woocommerce-search-list__item-label"},Object(a.createElement)("span",{className:"woocommerce-search-list__item-name",dangerouslySetInnerHTML:{__html:X(n.name,r)}})),m?Object(a.createElement)("span",{className:"woocommerce-search-list__item-variation-count"},Object(u.sprintf)(Object(u._n)("%d variation","%d variations",m,"woo-gutenberg-products-block"),m)):null),e===n.id&&m>0&&v&&Object(a.createElement)("div",{key:"loading",className:"woocommerce-search-list__item woocommerce-search-product__itemdepth-1 is-loading is-not-active"},Object(a.createElement)(d.Spinner,null))]};if(n)return Object(a.createElement)(J.a,{error:n});var w=O&&O[e]?O[e]:[],y=[].concat(c()(b),c()(w));return Object(a.createElement)(l.a,{className:"woocommerce-products",list:y,isLoading:r,isSingle:!0,selected:y.filter((function(t){var e=t.id;return g.includes(e)})),onChange:o,renderItem:m||(h?j:null),onSearch:p,messages:K,isHierarchical:!0})};$.defaultProps={expandedProduct:null,selected:[],showVariations:!1};e.a=_(Object(x.a)(q($)))},142:function(t,e,n){"use strict";var r=n(22),c=n.n(r),o=n(26),i=n.n(o),a=n(21),u=n.n(a),s=n(23),l=n.n(s),d=n(24),p=n.n(d),f=n(12),b=n.n(f),m=n(9),g=n.n(m),h=n(0),O=(n(2),n(6)),v=n(1),j=n(5),w=function(t){var e=t.imageUrl,n=void 0===e?"".concat(j.T,"img/block-error.svg"):e,r=t.header,c=void 0===r?Object(v.__)("Oops!","woo-gutenberg-products-block"):r,o=t.text,i=void 0===o?Object(v.__)("There was an error loading the content.","woo-gutenberg-products-block"):o,a=t.errorMessage,u=t.errorMessagePrefix,s=void 0===u?Object(v.__)("Error:","woo-gutenberg-products-block"):u;return Object(h.createElement)("div",{className:"wc-block-error wc-block-components-error"},n&&Object(h.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:n,alt:""}),Object(h.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},c&&Object(h.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},c),i&&Object(h.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},i),a&&Object(h.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},s?s+" ":"",a)))};n(268);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b()(t);if(e){var c=b()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}var k=function(t){l()(n,t);var e=y(n);function n(){var t;c()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),g()(u()(t),"state",{errorMessage:"",hasError:!1}),t}return i()(n,[{key:"render",value:function(){var t=this.props,e=t.header,n=t.imageUrl,r=t.showErrorMessage,c=t.text,o=t.errorMessagePrefix,i=t.renderError,a=this.state,u=a.errorMessage;return a.hasError?"function"==typeof i?i({errorMessage:u}):Object(h.createElement)(w,{errorMessage:r?u:null,header:e,imageUrl:n,text:c,errorMessagePrefix:o}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return void 0!==t.statusText&&void 0!==t.status?{errorMessage:Object(h.createElement)(O.Fragment,null,Object(h.createElement)("strong",null,t.status),": ",t.statusText),hasError:!0}:{errorMessage:t.message,hasError:!0}}}]),n}(O.Component);k.defaultProps={showErrorMessage:!0};e.a=k},143:function(t,e,n){"use strict";var r=n(0),c=n(56),o=Object(r.createElement)(c.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));e.a=o},144:function(t,e){},15:function(t,e){!function(){t.exports=this.wp.blockEditor}()},16:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},167:function(t,e,n){"use strict";var r=n(0),c=n(56),o=Object(r.createElement)(c.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(r.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(r.createElement)("g",{mask:"url(#external-mask)"},Object(r.createElement)("path",{d:"M0 0h24v24H0z"})));e.a=o},19:function(t,e){!function(){t.exports=this.wp.blocks}()},20:function(t,e){!function(){t.exports=this.wp.url}()},202:function(t,e){},208:function(t,e){!function(){t.exports=this.wp.deprecated}()},268:function(t,e){},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},308:function(t,e,n){"use strict";var r=n(10),c=n.n(r),o=n(16),i=n.n(o),a=n(38),u=n.n(a),s=n(22),l=n.n(s),d=n(26),p=n.n(d),f=n(21),b=n.n(f),m=n(23),g=n.n(m),h=n(24),O=n.n(h),v=n(12),j=n.n(v),w=n(0),y=n(7),k=n(36),E=(n(2),n(5)),S=n(43),_=n(45);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j()(t);if(e){var c=j()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return O()(this,n)}}var P=Object(k.b)((function(t){var e=function(e){g()(o,e);var n,r=x(o);function o(){var t;return l()(this,o),(t=r.apply(this,arguments)).state={list:[],loading:!0},t.setError=t.setError.bind(b()(t)),t.debouncedOnSearch=Object(y.debounce)(t.onSearch.bind(b()(t)),400),t}return p()(o,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;Object(S.h)({selected:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(t){var e=this,n=this.props.selected;Object(S.h)({selected:n,search:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"setError",value:(n=u()(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(e);case 2:n=t.sent,this.setState({list:[],loading:!1,error:n});case 4:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,n=this.state,r=n.error,o=n.list,i=n.loading;return Object(w.createElement)(t,c()({},this.props,{error:r,products:o,isLoading:i,onSearch:E.v?function(t){e.setState({loading:!0}),e.debouncedOnSearch(t)}:null}))}}]),o}(w.Component);return e.defaultProps={selected:[]},e}),"withSearchedProducts");e.a=P},32:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},34:function(t,e){!function(){t.exports=this.moment}()},35:function(t,e){!function(){t.exports=this.wp.data}()},37:function(t,e){!function(){t.exports=this.wp.isShallowEqual}()},4:function(t,e){!function(){t.exports=this.wp.components}()},43:function(t,e,n){"use strict";n.d(e,"h",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"b",(function(){return b})),n.d(e,"i",(function(){return m})),n.d(e,"f",(function(){return g})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return O})),n.d(e,"g",(function(){return v})),n.d(e,"a",(function(){return j}));var r=n(9),c=n.n(r),o=n(20),i=n(13),a=n.n(i),u=n(7),s=n(5);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,c=void 0===r?"":r,i=t.queryArgs,l=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,c=void 0===r?"":r,i=t.queryArgs,a=void 0===i?[]:i,u={per_page:s.v?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},l=[Object(o.addQueryArgs)("/wc/store/products",d(d({},u),a))];return s.v&&n.length&&l.push(Object(o.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:n})),l}({selected:n,search:c,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return a()({path:t})}))).then((function(t){return Object(u.uniqBy)(Object(u.flatten)(t),"id").map((function(t){return d(d({},t),{},{parent:0})}))})).catch((function(t){throw t}))},f=function(t){return a()({path:"/wc/store/products/".concat(t)})},b=function(){return a()({path:"wc/store/products/attributes"})},m=function(t){return a()({path:"wc/store/products/attributes/".concat(t,"/terms")})},g=function(t){var e=t.selected,n=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,c=[Object(o.addQueryArgs)("wc/store/products/tags",{per_page:s.x?100:0,orderby:s.x?"count":"name",order:s.x?"desc":"asc",search:r})];return s.x&&n.length&&c.push(Object(o.addQueryArgs)("wc/store/products/tags",{include:n})),c}({selected:void 0===e?[]:e,search:t.search});return Promise.all(n.map((function(t){return a()({path:t})}))).then((function(t){return Object(u.uniqBy)(Object(u.flatten)(t),"id")}))},h=function(t){return a()({path:Object(o.addQueryArgs)("wc/store/products/categories",d({per_page:0},t))})},O=function(t){return a()({path:"wc/store/products/categories/".concat(t)})},v=function(t){return a()({path:Object(o.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},j=function(t,e){if(!t.title.raw)return t.slug;var n=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(n?"":" - ".concat(t.slug))}},44:function(t,e){!function(){t.exports=this.wc.wcBlocksData}()},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(16),c=n.n(r),o=n(38),i=n.n(o),a=function(){var t=i()(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return n=t.sent,t.abrupt("return",{message:n.message,type:n.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},46:function(t,e){!function(){t.exports=this.wc.wcSharedContext}()},47:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},49:function(t,e,n){"use strict";var r=n(0),c=n(1),o=(n(2),n(47));e.a=function(t){var e,n,i,a=t.error;return Object(r.createElement)("div",{className:"wc-block-error-message"},(n=(e=a).message,i=e.type,n?"general"===i?Object(r.createElement)("span",null,Object(c.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(n))):"api"===i?Object(r.createElement)("span",null,Object(c.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(n))):n:Object(c.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},5:function(t,e,n){"use strict";n.d(e,"l",(function(){return c})),n.d(e,"J",(function(){return o})),n.d(e,"P",(function(){return i})),n.d(e,"z",(function(){return a})),n.d(e,"B",(function(){return u})),n.d(e,"m",(function(){return s})),n.d(e,"A",(function(){return l})),n.d(e,"D",(function(){return d})),n.d(e,"o",(function(){return p})),n.d(e,"C",(function(){return f})),n.d(e,"n",(function(){return b})),n.d(e,"F",(function(){return m})),n.d(e,"v",(function(){return g})),n.d(e,"x",(function(){return h})),n.d(e,"s",(function(){return O})),n.d(e,"t",(function(){return v})),n.d(e,"u",(function(){return j})),n.d(e,"k",(function(){return w})),n.d(e,"L",(function(){return y})),n.d(e,"Q",(function(){return k})),n.d(e,"q",(function(){return E})),n.d(e,"r",(function(){return S})),n.d(e,"p",(function(){return _})),n.d(e,"I",(function(){return x})),n.d(e,"c",(function(){return P})),n.d(e,"w",(function(){return C})),n.d(e,"T",(function(){return N})),n.d(e,"U",(function(){return I})),n.d(e,"K",(function(){return R})),n.d(e,"a",(function(){return D})),n.d(e,"N",(function(){return z})),n.d(e,"b",(function(){return M})),n.d(e,"M",(function(){return L})),n.d(e,"E",(function(){return A})),n.d(e,"i",(function(){return T})),n.d(e,"O",(function(){return U})),n.d(e,"h",(function(){return q})),n.d(e,"j",(function(){return F})),n.d(e,"H",(function(){return Q})),n.d(e,"G",(function(){return W})),n.d(e,"S",(function(){return G})),n.d(e,"R",(function(){return J})),n.d(e,"d",(function(){return X})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return K})),n.d(e,"g",(function(){return $})),n.d(e,"y",(function(){return Z})),n.d(e,"X",(function(){return et})),n.d(e,"Y",(function(){return nt})),n.d(e,"V",(function(){return rt})),n.d(e,"W",(function(){return ct}));var r=n(3),c=Object(r.getSetting)("currentUserIsAdmin",!1),o=Object(r.getSetting)("reviewRatingsEnabled",!0),i=Object(r.getSetting)("showAvatars",!0),a=Object(r.getSetting)("max_columns",6),u=Object(r.getSetting)("min_columns",1),s=Object(r.getSetting)("default_columns",3),l=Object(r.getSetting)("max_rows",6),d=Object(r.getSetting)("min_rows",1),p=Object(r.getSetting)("default_rows",3),f=Object(r.getSetting)("min_height",500),b=Object(r.getSetting)("default_height",500),m=Object(r.getSetting)("placeholderImgSrc",""),g=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),h=Object(r.getSetting)("limitTags"),O=Object(r.getSetting)("hasProducts",!0),v=Object(r.getSetting)("hasTags",!0),j=Object(r.getSetting)("homeUrl",""),w=Object(r.getSetting)("couponsEnabled",!0),y=Object(r.getSetting)("shippingEnabled",!0),k=Object(r.getSetting)("taxesEnabled",!0),E=Object(r.getSetting)("displayItemizedTaxes",!1),S=Object(r.getSetting)("hasDarkEditorStyleSupport",!1),_=(Object(r.getSetting)("displayShopPricesIncludingTax",!1),Object(r.getSetting)("displayCartPricesIncludingTax",!1)),x=Object(r.getSetting)("productCount",0),P=Object(r.getSetting)("attributes",[]),C=Object(r.getSetting)("isShippingCalculatorEnabled",!0),B=(Object(r.getSetting)("isShippingCostHidden",!1),Object(r.getSetting)("woocommerceBlocksPhase",1)),N=Object(r.getSetting)("wcBlocksAssetUrl",""),I=Object(r.getSetting)("wcBlocksBuildUrl",""),R=Object(r.getSetting)("shippingCountries",{}),D=Object(r.getSetting)("allowedCountries",{}),z=Object(r.getSetting)("shippingStates",{}),M=Object(r.getSetting)("allowedStates",{}),L=Object(r.getSetting)("shippingMethodsExist",!1),A=Object(r.getSetting)("paymentGatewaySortOrder",[]),T=Object(r.getSetting)("checkoutShowLoginReminder",!0),V={id:0,title:"",permalink:""},H=Object(r.getSetting)("storePages",{shop:V,cart:V,checkout:V,privacy:V,terms:V}),U=H.shop.permalink,q=H.checkout.id,F=H.checkout.permalink,Q=H.privacy.permalink,W=H.privacy.title,G=H.terms.permalink,J=H.terms.title,X=H.cart.id,Y=H.cart.permalink,K=Object(r.getSetting)("checkoutAllowsGuest",!1),$=Object(r.getSetting)("checkoutAllowsSignup",!1),Z=Object(r.getSetting)("loginUrl","/wp-login.php"),tt=n(19),et=function(t,e){if(B>2)return Object(tt.registerBlockType)(t,e)},nt=function(t,e){if(B>1)return Object(tt.registerBlockType)(t,e)},rt=function(){return B>2},ct=function(){return B>1}},546:function(t,e,n){"use strict";var r=n(10),c=n.n(r),o=n(16),i=n.n(o),a=n(38),u=n.n(a),s=n(22),l=n.n(s),d=n(26),p=n.n(d),f=n(21),b=n.n(f),m=n(23),g=n.n(m),h=n(24),O=n.n(h),v=n(12),j=n.n(v),w=n(9),y=n.n(w),k=n(0),E=n(36),S=n(43),_=n(45);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j()(t);if(e){var c=j()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return O()(this,n)}}var P=Object(E.b)((function(t){return function(e){g()(r,e);var n=x(r);function r(){var t;l()(this,r);for(var e=arguments.length,c=new Array(e),o=0;o<e;o++)c[o]=arguments[o];return t=n.call.apply(n,[this].concat(c)),y()(b()(t),"state",{error:null,loading:!1,product:"preview"===t.props.attributes.productId?t.props.attributes.previewProduct:null}),y()(b()(t),"loadProduct",(function(){var e=t.props.attributes.productId;"preview"!==e&&(e?(t.setState({loading:!0}),Object(S.e)(e).then((function(e){t.setState({product:e,loading:!1,error:null})})).catch(function(){var e=u()(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)(n);case 2:r=e.sent,t.setState({product:null,loading:!1,error:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):t.setState({product:null,loading:!1,error:null}))})),t}return p()(r,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(t){t.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}},{key:"render",value:function(){var e=this.state,n=e.error,r=e.loading,o=e.product;return Object(k.createElement)(t,c()({},this.props,{error:n,getProduct:this.loadProduct,isLoading:r,product:o}))}}]),r}(k.Component)}),"withProduct");e.a=P},55:function(t,e){!function(){t.exports=this.wp.keycodes}()},58:function(t,e){!function(){t.exports=this.wc.wcBlocksRegistry}()},6:function(t,e){!function(){t.exports=this.React}()},64:function(t,e,n){"use strict";var r=n(9),c=n.n(r),o=n(31),i=n.n(o),a=n(6);n(2);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.a=function(t){var e=t.srcElement,n=t.size,r=void 0===n?24:n,o=i()(t,["srcElement","size"]);return Object(a.isValidElement)(e)&&Object(a.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({width:r,height:r},o))}},7:function(t,e){!function(){t.exports=this.lodash}()},73:function(t,e){!function(){t.exports=this.wp.a11y}()},74:function(t,e){!function(){t.exports=this.wc.wcSharedHocs}()},75:function(t,e){!function(){t.exports=this.wp.dom}()},77:function(t,e){!function(){t.exports=this.wp.hooks}()},80:function(t,e){!function(){t.exports=this.ReactDOM}()},84:function(t,e){!function(){t.exports=this.wp.viewport}()},917:function(t,e,n){t.exports=n(923)},918:function(t,e){},923:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(5),o=n(11),i=n.n(o),a=n(0),u=n(4),s=n(546),l=n(142),d=n(133),p=Object(a.createElement)("img",{src:c.T+"img/single-product-preview.svg",alt:"",width:"230",height:"250",style:{width:"100%"}}),f=n(15),b=(n(918),n(94)),m=function(t){var e=t.error,n=t.isLoading,r=t.getProduct;return Object(a.createElement)(b.a,{className:"wc-block-single-product-error",error:e,isLoading:n,onRetry:r})},g=n(141),h=function(t){var e=t.attributes,n=t.setAttributes;return Object(a.createElement)(g.a,{selected:e.productId||0,showVariations:!0,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t[0]?t[0].id:0;n({productId:e})}})},O=function(t){var e=t.isEditing,n=t.setIsEditing;return Object(a.createElement)(f.BlockControls,null,Object(a.createElement)(u.Toolbar,{controls:[{icon:"edit",title:Object(r.__)("Edit","woo-gutenberg-products-block"),onClick:function(){return n(!e)},isActive:e}]}))},v=n(35),j=n(46),w=n(19),y=n(64),k=n(56),E=Object(a.createElement)(k.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(a.createElement)("path",{d:"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-5 0-9 4-9 9H0l4 4 4-4H5a7 7 0 113 5.7l-1.5 1.4A9 9 0 1012 3z"})),S=n(51),_=n.n(S),x=Object(a.createElement)(k.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)("path",{d:"M21 4H3a2 2 0 00-2 2v13c0 1.1.9 2 2 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"})),P=n(947),C="woocommerce/single-product",B=Object(r.__)("Single Product","woo-gutenberg-products-block"),N=Object(a.createElement)(y.a,{srcElement:x}),I=Object(r.__)("Display a single product.","woo-gutenberg-products-block"),R=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1}]]],["core/column",{},[["woocommerce/product-sale-badge"],["woocommerce/product-title",{headingLevel:2}],["woocommerce/product-rating"],["woocommerce/product-price"],["woocommerce/product-summary"],["woocommerce/product-stock-indicator"],["woocommerce/product-add-to-cart",{showFormElements:!0}],["woocommerce/product-sku"],["woocommerce/product-category-list"],["woocommerce/product-tag-list"]]]]]],D=["core/columns","core/column"].concat(_()(Object.keys(Object(P.a)(C)))),z=function(t){var e=t.isLoading,n=t.product,c=t.clientId,o=Object(v.useDispatch)("core/block-editor").replaceInnerBlocks,s=Object(a.useCallback)((function(){o(c,function t(e){return e.map((function(e){var n=i()(e,3),r=n[0],c=n[1],o=void 0===c?{}:c,a=n[2],u=void 0===a?[]:a,s=u?t(u):[];return Object(w.createBlock)(r,o,s)}))}(R),!1)}),[c,o]);return Object(a.createElement)(j.InnerBlockLayoutContextProvider,{parentName:C,parentClassName:"wc-block-single-product wc-block-layout"},Object(a.createElement)(j.ProductDataContextProvider,{product:n,isLoading:e},Object(a.createElement)(f.InspectorControls,null,Object(a.createElement)(u.PanelBody,{title:Object(r.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(a.createElement)(u.Button,{label:Object(r.__)("Reset layout to default","woo-gutenberg-products-block"),onClick:s,isTertiary:!0,className:"wc-block-single-product__reset-layout"},Object(a.createElement)(y.a,{srcElement:E})," ",Object(r.__)("Reset layout","woo-gutenberg-products-block")))),Object(a.createElement)("div",{className:"wc-block-single-product wc-block-layout"},Object(a.createElement)(f.InnerBlocks,{template:R,allowedBlocks:D,templateLock:!1,renderAppender:!1}))))},M=Object(s.a)((function(t){var e=t.className,n=t.attributes,c=t.setAttributes,o=t.error,s=t.getProduct,b=t.product,g=t.isLoading,v=t.clientId,j=n.productId,w=n.isPreview,y=Object(a.useState)(!j),k=i()(y,2),E=k[0],S=k[1];return w?p:o?Object(a.createElement)(m,{error:o,isLoading:g,getProduct:s}):Object(a.createElement)("div",{className:e},Object(a.createElement)(l.a,{header:Object(r.__)("Single Product Block Error","woo-gutenberg-products-block")},Object(a.createElement)(O,{setIsEditing:S,isEditing:E}),E?Object(a.createElement)(u.Placeholder,{icon:N,label:B,className:"wc-block-single-product"},I,Object(a.createElement)("div",{className:"wc-block-single-product__selection"},Object(a.createElement)(h,{attributes:n,setAttributes:c}),Object(a.createElement)(u.Button,{isDefault:!0,onClick:function(){S(!1)}},Object(r.__)("Done","woo-gutenberg-products-block")))):Object(a.createElement)(a.Fragment,null,Object(a.createElement)(f.InspectorControls,null,Object(a.createElement)(u.PanelBody,{title:Object(r.__)("Product","woo-gutenberg-products-block"),initialOpen:!1},Object(a.createElement)(h,{attributes:n,setAttributes:c}))),Object(a.createElement)(d.a,{productId:j}),Object(a.createElement)(z,{clientId:v,product:b,isLoading:g}))))})),L=n(8),A=n.n(L),T=function(t){var e=t.attributes;return Object(a.createElement)("div",{className:A()("is-loading",e.className)},Object(a.createElement)(f.InnerBlocks.Content,null))},V={isPreview:{type:"boolean",default:!1,save:!1},productId:{type:"number"}},H={title:B,icon:{src:N,foreground:"#96588a"},category:"woocommerce",keywords:[Object(r.__)("WooCommerce","woo-gutenberg-products-block")],description:I,supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:V,edit:M,save:T};Object(c.X)(C,H)},94:function(t,e,n){"use strict";var r=n(0),c=n(1),o=(n(2),n(64)),i=n(143),a=n(8),u=n.n(a),s=n(4),l=n(49);n(144);e.a=function(t){var e=t.className,n=t.error,a=t.isLoading,d=t.onRetry;return Object(r.createElement)(s.Placeholder,{icon:Object(r.createElement)(o.a,{srcElement:i.a}),label:Object(c.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:u()("wc-block-api-error",e)},Object(r.createElement)(l.a,{error:n}),d&&Object(r.createElement)(r.Fragment,null,a?Object(r.createElement)(s.Spinner,null):Object(r.createElement)(s.Button,{isDefault:!0,onClick:d},Object(c.__)("Retry","woo-gutenberg-products-block"))))}},947:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(58),c=n(0),o=n(5);n.p=o.U,Object(r.registerBlockComponent)({blockName:"woocommerce/product-price",component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,547))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-image",component:Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(10)]).then(n.bind(null,969))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-title",component:Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,970))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-rating",component:Object(c.lazy)((function(){return n.e(12).then(n.bind(null,548))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-button",component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,549))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-summary",component:Object(c.lazy)((function(){return n.e(15).then(n.bind(null,551))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:Object(c.lazy)((function(){return n.e(3).then(n.bind(null,273))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-sku",component:Object(c.lazy)((function(){return n.e(13).then(n.bind(null,552))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-category-list",component:Object(c.lazy)((function(){return n.e(9).then(n.bind(null,553))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-tag-list",component:Object(c.lazy)((function(){return n.e(16).then(n.bind(null,554))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:Object(c.lazy)((function(){return n.e(14).then(n.bind(null,555))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,971))}))});var i=function(t){return Object(r.getRegisteredBlockComponents)(t)}},95:function(t,e){!function(){t.exports=this.wp.date}()},96:function(t,e){!function(){t.exports=this.wp.autop}()}});