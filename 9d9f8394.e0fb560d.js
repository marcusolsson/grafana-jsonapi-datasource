(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(86)),i={id:"troubleshooting",title:"Troubleshooting"},s={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This page lists frequently asked questions and their answers.",source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/grafana-json-datasource/troubleshooting",editUrl:"https://github.com/marcusolsson/grafana-json-datasource/edit/main/website/docs/troubleshooting.md",version:"current",sidebar:"someSidebar",previous:{title:"JSONPath",permalink:"/grafana-json-datasource/jsonpath"}},u=[{value:"Why do I get &quot;Unable to graph data&quot; when I try to graph the query results?",id:"why-do-i-get-unable-to-graph-data-when-i-try-to-graph-the-query-results",children:[]},{value:"Why do I only get the value from the last query?",id:"why-do-i-only-get-the-value-from-the-last-query",children:[]},{value:"<code>Minified React error</code>",id:"minified-react-error",children:[]}],l={toc:u};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page lists frequently asked questions and their answers."),Object(o.b)("h2",{id:"why-do-i-get-unable-to-graph-data-when-i-try-to-graph-the-query-results"},'Why do I get "Unable to graph data" when I try to graph the query results?'),Object(o.b)("p",null,"The Graph and Time series panels can only display ",Object(o.b)("em",{parentName:"p"},"time series"),". To create a query that returns time series, make sure that it contains at least two fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"Time")," field that contains the timestamps for the X-axis"),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"Number")," field that contains the values for the Y-axis")),Object(o.b)("h2",{id:"why-do-i-only-get-the-value-from-the-last-query"},"Why do I only get the value from the last query?"),Object(o.b)("p",null,"The JSON API doesn't store historical data from previous queries. It can only visualize the data from the last query that was run. If you want to store metrics over time, you're likely be better of switching to a proper time series database, such as ",Object(o.b)("a",{parentName:"p",href:"https://prometheus.org"},"Prometheus"),"."),Object(o.b)("h2",{id:"minified-react-error"},Object(o.b)("inlineCode",{parentName:"h2"},"Minified React error")),Object(o.b)("p",null,"Grafana displays this cryptic error whenever a plugin uses features that aren't available in the currently installed version of Grafana. Make sure that the plugin supports the version you're running."))}c.isMDXComponent=!0},86:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||h[d]||o;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);