(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"QyV/":function(t,e,n){"use strict";var r=n("hosL"),o=n("ox/y"),i=n("ySiU"),c=n.n(i),a=n("cMc1"),s=n.n(a),_=()=>Object(r.h)("div",{class:s.a.nav},Object(r.h)(o.Link,{activeClassName:s.a.active,href:"/"},"Home"),Object(r.h)(o.Link,{activeClassName:s.a.active,href:"/resume"},"Resume"));e.a=()=>Object(r.h)(r.Fragment,null,Object(r.h)(_,null),Object(r.h)("header",{class:c.a.header},Object(r.h)("div",{class:c.a.summary},Object(r.h)("h1",{class:c.a.name},"Ashutosh Devkota"),Object(r.h)("h2",{class:c.a.skills},"Front-End/Javascript Engineer"))))},"ZH+C":function(t){t.exports={resumeWrapper:"resumeWrapper__3APcH"}},cMc1:function(t){t.exports={nav:"nav__2etB5",active:"active__RjRdm"}},eg81:function(t,e,n){"use strict";function r(t,e){var n=function(t){u.options.__h&&u.options.__h(s);var e=s.__H||(s.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}(a++);return function(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}function o(){h.some((function(t){if(t.__P)try{t.__H.__h.forEach(i),t.__H.__h.forEach(c),t.__H.__h=[]}catch(e){return u.options.__e(e,t.__v),!0}})),h=[]}function i(t){t.t&&t.t()}function c(t){var e=t.__();"function"==typeof e&&(t.t=e)}n.r(e);var a,s,_,u=n("hosL"),h=[],f=u.options.__r,p=u.options.diffed,l=u.options.__c,m=u.options.unmount;u.options.__r=function(t){f&&f(t),a=0,(s=t.__c).__H&&(s.__H.__h.forEach(i),s.__H.__h.forEach(c),s.__H.__h=[])},u.options.diffed=function(t){p&&p(t);var e=t.__c;if(e){var n=e.__H;n&&n.__h.length&&(1!==h.push(e)&&_===u.options.requestAnimationFrame||((_=u.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(o))}},u.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(i),t.__h=t.__h.filter((function(t){return!t.__||c(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],u.options.__e(n,t.__v)}})),l&&l(t,e)},u.options.unmount=function(t){m&&m(t);var e=t.__c;if(e){var n=e.__H;if(n)try{n.__.forEach((function(t){return t.t&&t.t()}))}catch(t){u.options.__e(t,e.__v)}}};var v=n("ZH+C"),d=n.n(v),b=n("QyV/");e.default=()=>{const t=(null,r((function(){return{current:null}}),[]));return Object(u.h)(u.Fragment,null,Object(u.h)(b.a,null),Object(u.h)("div",{class:d.a.resumeWrapper},Object(u.h)("iframe",{ref:t,src:"https://adevkota.me/resume/",frameborder:"0",style:"width:100%; height:100%;border:0;",onLoad:()=>{var e;(e=t).current.style.height=e.current.contentWindow.document.documentElement.scrollHeight+60+"px"}})))}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),c=n("Y3FI"),a=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){c.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,c.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,c.exec)(n,t.path,{})})},e}(i.Component),s=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(a,{path:n||r.href},(function(t){return(0,i.h)(c.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=s,e.default=a,a.Link=s},ySiU:function(t){t.exports={header:"header__3QGkI",summary:"summary__2Uuh5",name:"name__a5Wwb",skills:"skills__2s7Br"}}}]);
//# sourceMappingURL=route-resume.chunk.4eb37.esm.js.map