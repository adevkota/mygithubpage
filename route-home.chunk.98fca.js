(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+1Jk":function(e,t,n){"use strict";n.r(t);var r=n("hosL"),a=n("FA6U"),o=n.n(a),c=n("QyV/");t.default=function(){return Object(r.h)(r.Fragment,null,Object(r.h)(c.a,null),Object(r.h)("div",{class:o.a.home},Object(r.h)("section",{class:"intro-text"},Object(r.h)("p",null,"Full stack Javascript engineer with a focus on front end side of things."),Object(r.h)("p",null,"My current interest is in building performant web apps that takes into account the principles of Human-Computer Interaction."))))}},FA6U:function(e){e.exports={home:"home__MseGd"}},"QyV/":function(e,t,n){"use strict";var r=n("hosL"),a=n("ox/y"),o=n("ySiU"),c=n.n(o),s=n("cMc1"),i=n.n(s),u=function(){return Object(r.h)("div",{class:i.a.nav},Object(r.h)(a.Link,{activeClassName:i.a.active,href:"/"},"Home"),Object(r.h)(a.Link,{activeClassName:i.a.active,href:"/resume"},"Resume"),Object(r.h)("a",{target:"_self",href:"https://github.com/adevkota",native:!0},"GitHub"),Object(r.h)("a",{target:"_self",href:"https://www.linkedin.com/in/tosh-sharma",native:!0},"LinkedIn"))};t.a=function(){return Object(r.h)(r.Fragment,null,Object(r.h)(u,null),Object(r.h)("header",{class:c.a.header},Object(r.h)("div",{class:c.a.summary},Object(r.h)("h1",{class:c.a.name},"Ashutosh Devkota"),Object(r.h)("h2",{class:c.a.skills},"Front-End/Javascript Engineer"))))}},cMc1:function(e){e.exports={nav:"nav__2etB5",active:"active__RjRdm"}},"ox/y":function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n("hosL"),c=n("Y3FI"),s=t.Match=function(e){function t(){for(var t,n,a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return t=n=r(this,e.call.apply(e,[this].concat(o))),n.update=function(e){n.nextUrl=e,n.setState({})},r(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){c.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,c.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:t,path:n,matches:!1!==(0,c.exec)(n,e.path,{})})},t}(o.Component),i=function(e){var t=e.activeClassName,n=e.path,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","path"]);return(0,o.h)(s,{path:n||r.href},(function(e){return(0,o.h)(c.Link,a({},r,{class:[r.class||r.className,e.matches&&t].filter(Boolean).join(" ")}))}))};t.Link=i,t.default=s,s.Link=i},ySiU:function(e){e.exports={header:"header__3QGkI",summary:"summary__2Uuh5",name:"name__a5Wwb",skills:"skills__2s7Br"}}}]);
//# sourceMappingURL=route-home.chunk.98fca.js.map