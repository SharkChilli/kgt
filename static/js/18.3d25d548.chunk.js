webpackJsonp([18],{1428:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function l(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),i=t.n(r),s=t(171),c=t(1429),d=(t.n(c),t(86)),p=t(8),u=t.n(p),m=t(168),f=(t.n(m),t(797)),h=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),b=function(e){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),h(n,[{key:"shouldComponentUpdate",value:function(e,n){return!Object(m.is)(Object(m.fromJS)(this.props),Object(m.fromJS)(e))||!Object(m.is)(Object(m.fromJS)(this.state),Object(m.fromJS)(n))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,n=e.qrcode,t=e.onCancel,a=e.isShow;e.data;return i.a.createElement("div",{className:"record-user_recharge"},i.a.createElement(f.g,{visible:a,wrapClassName:"vertical-center-modal",title:"\u5206\u53f7\u5145\u503c",width:500,destroyOnClose:!0,onCancel:t,footer:null},i.a.createElement("div",{className:"order_detail"},i.a.createElement("div",{className:"top"},i.a.createElement("div",{className:"qrcode"},i.a.createElement("img",{src:n,alt:""})),i.a.createElement("div",{className:"time"},i.a.createElement("span",null,"\u65f6\u95f4:"),i.a.createElement("span",null,"2018-03-04 14:14:14")),i.a.createElement("div",{className:"account"},i.a.createElement("span",null,"\u5206\u53f7:"),i.a.createElement("span",null,"zhangsan")),i.a.createElement("div",{className:"nick_name"},i.a.createElement("span",null,"\u5fae\u4fe1\u6635\u79f0:"),i.a.createElement("span",null,"\u5f20\u4e09")),i.a.createElement("div",{className:"pay_account"},i.a.createElement("span",null,"\u5fae\u4fe1\u8d26\u6237:"),i.a.createElement("span",null,"dsds")),i.a.createElement("div",{className:"order_no-evluation"},i.a.createElement("div",{className:"order_no"},i.a.createElement("span",null,"\u8ba2\u5355\u53f7:"),i.a.createElement("span",null,"123456789")),i.a.createElement("div",{className:"evluation"},i.a.createElement("span",null,"\u8bc4\u4ef7:"),i.a.createElement("span",null,i.a.createElement(f.h,{allowHalf:!0,disabled:!0,defaultValue:2.5}))))),i.a.createElement("div",{className:"bottom"},i.a.createElement("div",null,i.a.createElement("div",{className:"amount"},i.a.createElement("span",null,"\u4ea4\u6613\u91cf:"),i.a.createElement("span",null,"1234.56"),i.a.createElement("small",null,"KGT")),i.a.createElement("div",{className:"pay_type"},i.a.createElement("span",null,"\u65b9\u5f0f:"),i.a.createElement("span",null,"\u5fae\u4fe1"))),i.a.createElement("div",null,i.a.createElement("div",{className:"price"},i.a.createElement("span",null,"KGT\u4ef7\u683c:"),i.a.createElement("span",null,"1.10"),i.a.createElement("small",null,"CNY/KGT")),i.a.createElement("div",{className:"operation"},i.a.createElement("span",null,"\u64cd\u4f5c\u65b9\u5f0f:"),i.a.createElement("span",null,"\u5145\u503c"))),i.a.createElement("div",null,i.a.createElement("div",{className:"num"},i.a.createElement("span",null,"\u4ea4\u6613\u989d:"),i.a.createElement("span",null,"1234.56"),i.a.createElement("small",null,"CNY")),i.a.createElement("div",{className:"status"},i.a.createElement("span",null,"\u72b6\u6001:"),i.a.createElement("span",null,"\u5b8c\u6210")))),i.a.createElement("div",{className:"btn_wrap"},i.a.createElement("div",{className:"channel"},"\u53d6\u6d88\u8ba2\u5355"),i.a.createElement("div",{className:"sure"},"\u786e\u8ba4\u6536\u6b3e")))))}}]),n}(r.Component);b.propTypes={qrcode:u.a.string.isRequired,isShow:u.a.bool.isRequired,onCancel:u.a.func.isRequired,data:u.a.object.isRequired};var v=function(e){return{shopList:e.shopList,coinDetail:e.marketCoin.coinDetail,loginData:e.loginData}};n.default=Object(s.g)(Object(d.b)(v)(b))},1429:function(e,n,t){var a=t(1430);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0};o.transform=void 0;t(476)(a,o);a.locals&&(e.exports=a.locals)},1430:function(e,n,t){n=e.exports=t(475)(void 0),n.push([e.i,'@charset "UTF-8";\nbody, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, h6, i, b, textarea, button, input, select, figure, figcaption {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-style: normal;\n  text-decoration: none;\n  border: none;\n  box-sizing: border-box;\n  font-family: "\\5FAE\\8F6F\\96C5\\9ED1",sans-serif;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased; }\n  body:focus, div:focus, span:focus, header:focus, footer:focus, nav:focus, section:focus, aside:focus, article:focus, ul:focus, dl:focus, dt:focus, dd:focus, li:focus, a:focus, p:focus, h1:focus, h2:focus, h3:focus, h4:focus, h5:focus, h6:focus, i:focus, b:focus, textarea:focus, button:focus, input:focus, select:focus, figure:focus, figcaption:focus {\n    outline: none; }\n\n/*placeholder\u989c\u8272*/\ninput::-webkit-input-placeholder {\n  /* WebKit browsers */\n  color: #757575; }\n\ninput:-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  color: #757575; }\n\ninput::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  color: #757575; }\n\ninput:-ms-input-placeholder {\n  /* Internet Explorer 10+ */\n  color: #757575; }\n\ninput[type="button"], input[type="submit"], input[type="search"], input[type="reset"] {\n  -webkit-appearance: none; }\n\ntextarea {\n  -webkit-appearance: none; }\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  background-color: #ffffff; }\n\n.clear:after {\n  content: \'\';\n  display: block;\n  clear: both; }\n\n.clear {\n  zoom: 1; }\n\n.margin {\n  margin: 0 auto; }\n\n.hide {\n  display: none; }\n\n.show {\n  display: block; }\n\n.fixTop {\n  position: fixed;\n  top: 1.5rem; }\n\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.order_detail .top {\n  display: flex;\n  justify-content: flex-start;\n  align-items: start;\n  flex-direction: column;\n  position: relative; }\n  .order_detail .top .qrcode {\n    position: absolute;\n    right: 0;\n    top: 20px;\n    width: 100px;\n    height: 100px; }\n    .order_detail .top .qrcode img {\n      width: 100%; }\n  .order_detail .top > div {\n    height: 30px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: row; }\n    .order_detail .top > div span {\n      font-size: 16px; }\n    .order_detail .top > div span:last-child {\n      margin-left: 8px; }\n  .order_detail .top .order_no-evluation {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n    width: 100%; }\n    .order_detail .top .order_no-evluation .evluation {\n      cursor: pointer; }\n    .order_detail .top .order_no-evluation ul li {\n      margin-right: 0; }\n      .order_detail .top .order_no-evluation ul li i {\n        font-size: 10px; }\n\n.order_detail .bottom {\n  display: flex;\n  justify-content: flex-start;\n  align-items: start;\n  flex-direction: column;\n  margin-top: 5px;\n  padding-top: 5px;\n  border-top: 1px solid #757575; }\n  .order_detail .bottom > div {\n    width: 100%;\n    height: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row; }\n    .order_detail .bottom > div > div {\n      flex: 1; }\n      .order_detail .bottom > div > div span {\n        font-size: 16px; }\n      .order_detail .bottom > div > div span + span {\n        margin: 0 8px; }\n    .order_detail .bottom > div > div + div {\n      width: 109px;\n      flex: inherit; }\n\n.order_detail .btn_wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  margin: 30px 0; }\n  .order_detail .btn_wrap > div {\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    transition: all 0.3s;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -ms-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    margin: 0 20px;\n    width: 160px;\n    text-align: center;\n    height: 45px;\n    line-height: 45px;\n    font-size: 16px;\n    cursor: pointer;\n    color: #ffffff;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2); }\n  .order_detail .btn_wrap .channel {\n    background-color: #24B977; }\n  .order_detail .btn_wrap .sure {\n    background-color: #D82121; }\n\n.ant-modal-body {\n  padding: 12px; }\n',""])}});
//# sourceMappingURL=18.3d25d548.chunk.js.map