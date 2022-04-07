(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,h=l["".concat(a,".").concat(d)]||l[d]||b[d]||i;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(156)),a={},c={unversionedId:"user-guide/ui/support",id:"user-guide/ui/support",isDocsHomePage:!1,title:"Support View",description:"Autodiagnose",source:"@site/docs/user-guide/ui/support.md",sourceDirName:"user-guide/ui",slug:"/user-guide/ui/support",permalink:"/user-guide/ui/support",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/user-guide/ui/support.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SDK view",permalink:"/user-guide/ui/sdk"},next:{title:"Ethereum 2.0 Multiclient",permalink:"/user-guide/dapps/multiclient"}},u=[{value:"Autodiagnose",id:"autodiagnose",children:[]},{value:"Report",id:"report",children:[]},{value:"Ports",id:"ports",children:[{value:"UPnP Scan",id:"upnp-scan",children:[]},{value:"API Scan",id:"api-scan",children:[]}]},{value:"Activity",id:"activity",children:[]}],s={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"autodiagnose"},"Autodiagnose"),Object(i.b)("p",null,"In this screen you will have an overview of the functioning of your DAppNode with checks that will indicate you if there is any problem for the normal operation of your DAppNode. You can contribute to DAppNode\xb4s improvement by opening issues directly from the ADMIN UI."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"../../../../img/support_view_auto-diagnose.png"})),Object(i.b)("h2",{id:"report"},"Report"),Object(i.b)("p",null,'When you click the "Report" tab you will chave the option of sending the issue with a prepopulated form that will be automatically loaded in the report screen. You can also choose to open the issue without any data. There are 2 types of scan.'),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"../../../../img/support_view_report.png"})),Object(i.b)("h2",{id:"ports"},"Ports"),Object(i.b)("p",null,"This functionality let the user know the status of the port of its DAppNode, sometimes know certainly this status can be hard. Because of that, this feature was implemented."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"../../../../img/support_view_port_scan.png"})),Object(i.b)("p",null,"In this view you will be able to know:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Which ports need to be opened deppending on the services you have"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Wich service")," is demmanding each port"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Port status"),": open, closed and unknown"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Port protocol"),": TCP and UDP")),Object(i.b)("h3",{id:"upnp-scan"},"UPnP Scan"),Object(i.b)("p",null,"If your DAppNode is not on a VPS, you should have the option to execute a UPnP scan. Take into account that this scan may fail since each router has different specifications and may no response to DAppNode requests."),Object(i.b)("h3",{id:"api-scan"},"API Scan"),Object(i.b)("p",null,"Due to the uncertainty of the UPnP scan, an external service has been created that performs a TCP port scan. This scan will throw \u201cunknow\u201d status for UDP ports."),Object(i.b)("p",null,"Almost with total security the UDP ports will have the same status as the TCP ports scanned with the API scan."),Object(i.b)("p",null,"Note: The UDP protocol ports cannot be scanned without prior settings on the router."),Object(i.b)("h2",{id:"activity"},"Activity"),Object(i.b)("p",null,"This tab allows easy access to the DAppNode logs in order to debug errors. We work hard to make this tab irrelevant to you, but for the time being, if you are experiencing any issue, these logs will help our support team help you identify and fix any problem. You will also find a button to download a log report file."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"../../../../img/support_activity.png"})))}p.isMDXComponent=!0}}]);