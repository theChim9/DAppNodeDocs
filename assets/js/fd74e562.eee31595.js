"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[976],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={slug:"/first-steps",sidebar_position:1},u="First Steps",l={unversionedId:"user-guide/ui/initial-configurations/first-steps",id:"user-guide/ui/initial-configurations/first-steps",title:"First Steps",description:"Step by step guide to the user the first time he accesses the DAppNode.",source:"@site/docs/user-guide/ui/initial-configurations/first-steps.md",sourceDirName:"user-guide/ui/initial-configurations",slug:"/first-steps",permalink:"/first-steps",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/user-guide/ui/initial-configurations/first-steps.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/first-steps",sidebar_position:1},sidebar:"docs",previous:{title:"CLI",permalink:"/user-guide/ui/access/cli"},next:{title:"Select a type of Client",permalink:"/user-guide/ui/initial-configurations/select-a-client"}},p={},c=[{value:"Log In",id:"log-in",level:2},{value:"Basic Configurations",id:"basic-configurations",level:2},{value:"What is the next?",id:"what-is-the-next",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"first-steps"},"First Steps"),(0,o.kt)("p",null,"Step by step guide to the user the first time he accesses the DAppNode."),(0,o.kt)("h2",{id:"log-in"},"Log In"),(0,o.kt)("p",null,"The first time you access the UI, you will be asked for signing up. You need a username and a password.\nThe password has some requisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One cap character at least."),(0,o.kt)("li",{parentName:"ul"},"One number at least."),(0,o.kt)("li",{parentName:"ul"},"One special character at least.")),(0,o.kt)("p",null,"After defining a username and a password, dappnode will give you a recovery token, in case you forget your password or username, this token can be used to recover them. ",(0,o.kt)("strong",{parentName:"p"},"SAVE IT"),"!!!!"),(0,o.kt)("h2",{id:"basic-configurations"},"Basic Configurations"),(0,o.kt)("p",null,"After ",(0,o.kt)("strong",{parentName:"p"},"Log In")," for the first time into your DAppNode you will see this screen."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"This pop up will inform you about some required configurations. Click on the Start button.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../img/first_steps_1.png"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The first thing you need to set up is the type of client you want to use. We recommend this set-up:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Full Node"),(0,o.kt)("li",{parentName:"ul"},"Turn on the Use remote during syncing or errors"),(0,o.kt)("li",{parentName:"ul"},"The client, we don't have a preference between geth, nethermind ...")))),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../img/first_steps_2.png"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"The next window are asking you about the System Auto Updates. If you turn on this option, your DAppNode will be updated automatically when it detects there is a new version enabled. 24 hours after DAppNode releases there is a new version, it will start the installation of the new version.\nFrom DAppNode we recommend to turn on this option.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../img/first_steps_3.png"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"CONGRATULATIONS!!! This screen shows that all this configuration are finished.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../img/first_steps_4.png"})),(0,o.kt)("h2",{id:"what-is-the-next"},"What is the next?"),(0,o.kt)("p",null,"Once you have finished this basic configurations you can start to use your DAppNode and learn about some of its features."),(0,o.kt)("p",null,"We will list some of the next thing you can do, the order does not matter, it's only a list of actions you can do in order to improve your experience with DAppNode and make easier to the user how to learn more about what you can do with this application."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can set up another ways to access."),(0,o.kt)("li",{parentName:"ul"},"Learn how to install a package."),(0,o.kt)("li",{parentName:"ul"},"Learn how to do a backup and restore of a package."),(0,o.kt)("li",{parentName:"ul"},"Set up a telegram bot so you will see the DAppNode Alerts in your Mobile.")))}f.isMDXComponent=!0}}]);