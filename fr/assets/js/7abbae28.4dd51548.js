"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3352],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5862:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={},p="Overall",c={unversionedId:"developers/overall",id:"developers/overall",title:"Overall",description:"This is a guide for developers who want to learn about how to create a package for DAppNode. Here you wil find how to prepare your developer environment for creating packages in DAppNode and how to test them.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/overall.md",sourceDirName:"developers",slug:"/developers/overall",permalink:"/fr/developers/overall",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/fr/docusaurus-plugin-content-docs/current/developers/overall.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/fr/user-guide/support/troubleshooting"},next:{title:"What do I need to develop for DAppNode?",permalink:"/fr/developers/introduction/what-do-i-need-to-develop-for-dappnode"}},u={},s=[],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overall"},"Overall"),(0,a.kt)("p",null,"This is a guide for developers who want to learn about how to create a package for DAppNode. Here you wil find how to prepare your developer environment for creating packages in DAppNode and how to test them."),(0,a.kt)("p",null,"The different sections will be the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Introduction"),": how to set up your developer environment for creating DAppNode packages and how to test them."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Manifest"),": manifest is how we call the package.json, this file let you to add information about de package and so many configurations."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Wizard"),": is a file we added when we create a package to make easier the configuration process of the package for the user. This package let you to create a simple user interface where the user can set up different parameters once the package has been installed.")),(0,a.kt)("p",null,"We recommend to read the learn section because you can learn about the background of DAppNode, and it can help you to understand better how it works."))}f.isMDXComponent=!0}}]);