importScripts("/precache-manifest.f04277e9dd1120cdcd266519d9fa279b.esm.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(t){return e[t]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="idKB")}({idKB:function(){self.__precacheManifest=[].concat(self.__precacheManifest||[]);const e=e=>"navigate"===e.request.mode;workbox.routing.registerRoute(({event:t})=>e(t),new workbox.strategies.NetworkFirst({cacheName:workbox.core.cacheNames.precache,networkTimeoutSeconds:5,plugins:[new workbox.cacheableResponse.Plugin({statuses:[200]})]})),workbox.precaching.precacheAndRoute(self.__precacheManifest,{}),workbox.routing.setCatchHandler(({event:t})=>e(t)?caches.match(workbox.precaching.getCacheKeyForURL("/index.html")):Response.error())}});
//# sourceMappingURL=sw-esm.js.map
