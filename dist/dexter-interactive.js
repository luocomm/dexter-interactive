!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dexterInteractive=t():e.dexterInteractive=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var r=n(4),i=n(1);e.exports=function(e){if(!i(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var r=n(7);e.exports=function(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var r=n(4),i=n(2),a=n(15);e.exports=function(e){return"string"==typeof e||!i(e)&&a(e)&&"[object String]"==r(e)}},function(e,t,n){"use strict";n.r(t),n.d(t,"LOG_LEVEL_INFO",(function(){return f})),n.d(t,"LOG_LEVEL_DEBUG",(function(){return h})),n.d(t,"LOG_LEVEL_WARN",(function(){return g})),n.d(t,"LOG_LEVEL_ERROR",(function(){return m})),n.d(t,"PAYLOAD_TYPE_BOT",(function(){return p})),n.d(t,"PAYLOAD_TYPE_USER",(function(){return v})),n.d(t,"DexterInteractiveEvents",(function(){return y})),n.d(t,"createInteractiveBot",(function(){return x}));var r=n(3),i=n.n(r),a=n(1),o=n.n(a),s=n(0),u=n.n(s),c=n(5),d=n.n(c);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f="info",h="debug",g="warn",m="error",p="BOT",v="USER",y=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!o()(t))throw new Error("DexterInteractiveEvents is missing a config object");if(!(u()(t.handler)||t.handler instanceof Array))throw new Error("DexterInteractiveEvents config requires a handler function or a list of rules");this.cfg=Object.assign({},{handleBotEvents:!0,handleUserEvents:!0,handleWhenClosed:!1,logger:!1,dexterSettings:{},handler:[]},t),t.handler instanceof Array&&t.handler.map((function(e,t){e.text||e.meta||n.emitWarn("Missing a test in handler",{index:t,handler:e}),e.text&&!e.text instanceof String&&!e.text instanceof RegExp&&!u()(e.text)&&n.emitWarn("Invalid message test in handler",{index:t,handler:e}),e.meta&&!e.metaPath&&n.emitWarn("Missing metaPath for meta test in handler",{index:t,handler:e}),u()(e.onMatch)||n.emitWarn("Invalid onMatch method in handler",{index:t,handler:e})})),this.embedIsOpen=!1,this.emitDebug("DexterInteractiveEvents initialized",t)}var t,n,r;return t=e,(n=[{key:"emitLog",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!0===this.cfg.logger?this.emitLogDefault(e,t,n):!1!==this.cfg.logger&&this.cfg.logger(e,t,n)}},{key:"emitLogDefault",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};switch(e){case h:console.log(t,n);break;case f:console.info(t,n);break;case g:console.warn(t,n);break;case m:console.error(t,n);break;default:console.error('Unknown event level "'+e+'"',t,n)}}},{key:"emitDebug",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.emitLog(h,e,t)}},{key:"emitInfo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.emitLog(f,e,t)}},{key:"emitWarn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.emitLog(g,e,t)}},{key:"emitError",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.emitLog(m,e,t)}},{key:"handleEvent",value:function(e){var t=this.extractPayloadType(e);this.embedIsOpen||this.cfg.handleWhenClosed?t!==v||this.cfg.handleUserEvents?t!==p||this.cfg.handleBotEvents?u()(this.cfg.handler)?this.handleEventWithFunction(e):this.cfg.handler instanceof Array?this.handleEventWithRules(e):this.emitWarn("Invalid event handler configured, not responding",{handler:this.handler}):this.emitDebug("Ignoring incoming bot message event",e):this.emitDebug("Ignoring outgoing user message event",e):this.emitDebug("Ignoring event, embed closed",e)}},{key:"handleEventWithFunction",value:function(e){this.cfg.handler(this.extractPayloadType(e),this.extractPayloadText(e),this.extractPayloadMetadata(e),e)}},{key:"checkEventAgainstMatcher",value:function(e,t,n,r){if(t.type&&t.type!==type)return this.emitDebug("Skipping matcher due to type mismatch",{payload:e,matcher:t}),!1;if(t.text){if(!this.checkEventAgainstMessageTest(t.text,n))return!1;this.emitDebug("Matcher passed message test",{payload:e,matcher:t,test:t.message,message:n})}if(t.meta){if(!this.checkEventAgainstMetadataTest(t.meta,t.metaPath,r))return!1;this.emitDebug("Matcher passed metadata test",{payload:e,matcher:t,test:t.meta,path:t.metaPath,metadata:r})}return!0}},{key:"checkEventAgainstMessageTest",value:function(e,t){return e instanceof RegExp?!!e.test(t)||(this.emitDebug("Skipping matcher due to message RegExp test mismatch",{test:e,message:t}),!1):d()(e)?t.indexOf(e)>=0||(this.emitDebug("Skipping matcher due to message text test mismatch",{test:e,message:t}),!1):u()(e)?!!e(t)||(this.emitDebug("Skipping matcher due to message function test mismatch",{test:e,message:t}),!1):(this.emitWarn("Skipping matcher due to unknown test type",{test:e,message:t}),!1)}},{key:"checkEventAgainstMetadataTest",value:function(e,t,n){var r=i()(n,t);return e instanceof RegExp?"string"!=typeof r?(this.emitDebug("Skipping matcher due to a non-string value in a RegExp test"),!1):!!e.test(r)||(this.emitDebug("Skipping matcher due to metadata RegExp test mismatch",{test:e,path:t,value:r}),!1):u()(e)?!!e(r)||(this.emitDebug("Skipping matcher due to metadata function test mismatch",{test:e,path:t,value:r}),!1):e===r||(this.emitDebug("Skipping matcher due to metadata value test mismatch",{test:e,path:t,value:r}),!1)}},{key:"handleEventWithRules",value:function(e){var t=this,n=this.extractPayloadType(e),r=this.extractPayloadText(e)||"",i=this.extractPayloadMetadata(e),a=this.cfg.handler.find((function(n){return t.checkEventAgainstMatcher(e,n,r,i)}));a?a.onMatch(n,r,i,e):this.emitInfo("Failed to find a match",{type:n,text:r,metadata:i,payload:e})}},{key:"extractPayloadType",value:function(e){return e.type}},{key:"extractPayloadText",value:function(e){return e.text}},{key:"extractPayloadMetadata",value:function(e){var t=i()(e,"attachments.metadata");return t=t instanceof Array?t.map((function(e){return e.metadata})):[]}},{key:"onEmbedOpen",value:function(){this.embedIsOpen=!0}},{key:"onEmbedClose",value:function(){this.embedIsOpen=!1}},{key:"isEmbedFullscreen",value:function(){return window.innerWidth<600}}])&&l(t.prototype,n),r&&l(t,r),e}();function x(e){var t={},n=null,r=null;if(!o()(e))throw new Error("createInteractiveBot is missing a config object");if(!o()(e.dexterSettings))throw new Error("dexterSettings configuration property is required");if(!e.dexterSettings.botId)throw new Error("Missing dexterSettings.botId in your config");return Object.assign(t,e.dexterSettings),n=new y(e),t.onOpen=function(){n.onEmbedOpen(),u()(e.dexterSettings.onOpen)&&e.dexterSettings.onOpen()},t.onClose=function(){n.onEmbedClose(),u()(e.dexterSettings.onClose)&&e.dexterSettings.onClose()},t.onMessage=function(t){n.handleEvent(t),u()(e.dexterSettings.onMessage)&&e.dexterSettings.onMessage(t)},window.dexterSettings=t,(r=document.createElement("script")).type="text/javascript",r.src=dexterSettings.url||"https://rundexter.com/webwidget",document.getElementsByTagName("head")[0].appendChild(r),n}},function(e,t,n){var r=n(8),i=n(14);e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[i(t[n++])];return n&&n==a?e:void 0}},function(e,t,n){var r=n(2),i=n(9),a=n(11),o=n(13);e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:a(o(e))}},function(e,t,n){var r=n(2),i=n(10),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(o.test(e)||!a.test(e)||null!=t&&e in Object(t))}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(12),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,o=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(a,"$1"):n||e)})),t}));e.exports=o},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}}])}));
//# sourceMappingURL=dexter-interactive.js.map