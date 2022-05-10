"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[9476],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={},s="Support View",p={unversionedId:"user-guide/ui/support",id:"user-guide/ui/support",title:"Support View",description:"Autodiagnose",source:"@site/docs/user-guide/ui/support.md",sourceDirName:"user-guide/ui",slug:"/user-guide/ui/support",permalink:"/user-guide/ui/support",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/user-guide/ui/support.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SDK view",permalink:"/user-guide/ui/sdk"},next:{title:"Ethereum Consensus Layer (Eth 2.0) Multiclient",permalink:"/user-guide/dapps/multiclient"}},l={},c=[{value:"Autodiagnose",id:"autodiagnose",level:2},{value:"Report",id:"report",level:2},{value:"Ports",id:"ports",level:2},{value:"UPnP Scan",id:"upnp-scan",level:3},{value:"API Scan",id:"api-scan",level:3},{value:"Activity",id:"activity",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"support-view"},"Support View"),(0,i.kt)("h2",{id:"autodiagnose"},"Autodiagnose"),(0,i.kt)("p",null,"In this screen you will have an overview of the functioning of your DAppNode with checks that will indicate you if there is any problem for the normal operation of your DAppNode. You can contribute to DAppNode\xb4s improvement by opening issues directly from the ADMIN UI."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../../img/support_view_auto-diagnose.png"})),(0,i.kt)("h2",{id:"report"},"Report"),(0,i.kt)("p",null,'When you click the "Report" tab you will chave the option of sending the issue with a prepopulated form that will be automatically loaded in the report screen. You can also choose to open the issue without any data. There are 2 types of scan.'),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../../img/support_view_report.png"})),(0,i.kt)("h2",{id:"ports"},"Ports"),(0,i.kt)("p",null,"This functionality let the user know the status of the port of its DAppNode, sometimes know certainly this status can be hard. Because of that, this feature was implemented."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../../img/support_view_port_scan.png"})),(0,i.kt)("p",null,"In this view you will be able to know:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Which ports need to be opened deppending on the services you have"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wich service")," is demmanding each port"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port status"),": open, closed and unknown"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port protocol"),": TCP and UDP")),(0,i.kt)("h3",{id:"upnp-scan"},"UPnP Scan"),(0,i.kt)("p",null,"If your DAppNode is not on a VPS, you should have the option to execute a UPnP scan. Take into account that this scan may fail since each router has different specifications and may no response to DAppNode requests."),(0,i.kt)("h3",{id:"api-scan"},"API Scan"),(0,i.kt)("p",null,"Due to the uncertainty of the UPnP scan, an external service has been created that performs a TCP port scan. This scan will throw \u201cunknow\u201d status for UDP ports."),(0,i.kt)("p",null,"Almost with total security the UDP ports will have the same status as the TCP ports scanned with the API scan."),(0,i.kt)("p",null,"Note: The UDP protocol ports cannot be scanned without prior settings on the router."),(0,i.kt)("h2",{id:"activity"},"Activity"),(0,i.kt)("p",null,"This tab allows easy access to the DAppNode logs in order to debug errors. We work hard to make this tab irrelevant to you, but for the time being, if you are experiencing any issue, these logs will help our support team help you identify and fix any problem. You will also find a button to download a log report file."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../../img/support_activity.png"})))}h.isMDXComponent=!0}}]);