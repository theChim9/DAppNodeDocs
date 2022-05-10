"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[4740],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3272:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="Script Installation",u={unversionedId:"get-started/installation/custom-hardware/installation/script",id:"get-started/installation/custom-hardware/installation/script",title:"Script Installation",description:"You can install DAppNode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/get-started/installation/custom-hardware/installation/script.md",sourceDirName:"get-started/installation/custom-hardware/installation",slug:"/get-started/installation/custom-hardware/installation/script",permalink:"/es/get-started/installation/custom-hardware/installation/script",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/get-started/installation/custom-hardware/installation/script.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"ISO Installation",permalink:"/es/get-started/installation/custom-hardware/installation/iso"},next:{title:"Hardware Recommendations",permalink:"/es/get-started/installation/arm-hardware/hardware-recommendations"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Post-Installation",id:"post-installation",level:2},{value:"Restore to the latest version from a script",id:"restore-to-the-latest-version-from-a-script",level:2},{value:"Uninstall",id:"uninstall",level:2}],d={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"script-installation"},"Script Installation"),(0,o.kt)("p",null,"You can install DAppNode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before installing DAppNode, you need to install some prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-compose")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tukaani.org/xz/"},"xz"))),(0,o.kt)("p",null,"To install all the above prerequisites, execute the command below in the terminal of the machine you want to install DAppNode. If you already have the dependencies installed or you want to install them on your own you can skip this step."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo wget -O - https://prerequisites.dappnode.io | sudo bash")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install DAppNode, install it executing the next script:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo wget -O - https://installer.dappnode.io | sudo bash")),(0,o.kt)("h2",{id:"post-installation"},"Post-Installation"),(0,o.kt)("p",null,"Once the installation process has finished, DAppNode will try to automatically prepare the first access to your DAppNode on the next order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../../../user-guide/ui/access/local-proxy"},"Local Proxy")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../../../user-guide/ui/access/wifi"},"Wifi")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#wireguard"},"Wireguard")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#openvpn"},"OpenVPN"))),(0,o.kt)("h2",{id:"restore-to-the-latest-version-from-a-script"},"Restore to the latest version from a script"),(0,o.kt)("p",null,"If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please note that volumes are not deleted, but any EXTRA_OPTS set by the user in the packages config must be set again after using this script to restore the system")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash")),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("p",null,"This command will uninstall DAppNode components (but not docker et al.)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f BEWARE! It will also delete all volumes and stored data!")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wget -qO - https://uninstaller.dappnode.io | sudo bash")))}m.isMDXComponent=!0}}]);