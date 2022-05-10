"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[1433],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(r),h=o,f=l["".concat(p,".").concat(h)]||l[h]||c[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8733:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:4},p="Add IPFS Peers",d={unversionedId:"user-guide/ui/recommended-set-ups/add-ipfs-peers",id:"user-guide/ui/recommended-set-ups/add-ipfs-peers",title:"Add IPFS Peers",description:"In this section, firstly you will read about what is IPFS and how it can affect to your DAppNode. Then, you will see a guide how to add IPFS peer and how to get a link of your IPFS for sharing with other users.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/user-guide/ui/recommended-set-ups/add-ipfs-peers.md",sourceDirName:"user-guide/ui/recommended-set-ups",slug:"/user-guide/ui/recommended-set-ups/add-ipfs-peers",permalink:"/es/user-guide/ui/recommended-set-ups/add-ipfs-peers",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/user-guide/ui/recommended-set-ups/add-ipfs-peers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Backup Functionality",permalink:"/es/user-guide/ui/recommended-set-ups/backup-functionality"},next:{title:"Dashboard View",permalink:"/es/user-guide/ui/dashboard"}},u={},c=[{value:"IPFS on DAppNode",id:"ipfs-on-dappnode",level:2},{value:"What is IPFS?",id:"what-is-ipfs",level:3},{value:"Why is important to add peers?",id:"why-is-important-to-add-peers",level:3},{value:"How it affects to DAppNode?",id:"how-it-affects-to-dappnode",level:3},{value:"Sharing IPFS peer",id:"sharing-ipfs-peer",level:2},{value:"Get your IPFS peer link",id:"get-your-ipfs-peer-link",level:3},{value:"Add a peer to your DAppNode",id:"add-a-peer-to-your-dappnode",level:3}],l={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-ipfs-peers"},"Add IPFS Peers"),(0,i.kt)("p",null,"In this section, firstly you will read about what is IPFS and how it can affect to your DAppNode. Then, you will see a guide how to add IPFS peer and how to get a link of your IPFS for sharing with other users."),(0,i.kt)("h2",{id:"ipfs-on-dappnode"},"IPFS on DAppNode"),(0,i.kt)("h3",{id:"what-is-ipfs"},"What is IPFS?"),(0,i.kt)("p",null,"Shortly, IPFS is a protocol to share data between machines. On your DAppNode when you go to the DAppStore and you are installing a package, what is happening behind the scene is the next:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DAppNode machine gets the IPFS address from the ethereum blockchain."),(0,i.kt)("li",{parentName:"ol"},"DAppNode machine uses this address to find the content associated with this link.")),(0,i.kt)("h3",{id:"why-is-important-to-add-peers"},"Why is important to add peers?"),(0,i.kt)("p",null,"The searching process is the key to understand why is important to add peers. When your DAppNode is going to search the content associated with this link or hash. Firstly, it will ask the nearest peers to it. If it's popular information, probably the research will be fast, but in case, the information is more peculiar, it requires asking for this content for peers that are not connected to you directly. Then, if you are connected to so many peers, the propagation of the information is faster and is more probable that some of your closed peers have the information you want."),(0,i.kt)("h3",{id:"how-it-affects-to-dappnode"},"How it affects to DAppNode?"),(0,i.kt)("p",null,"Firstly, DAppNode has a server with all the packages. In this way, we are sure all the packages are available. But the way your machine download a package to install it or even detects that there is an update of a package is by asking the nearest peers of your machine. Then, the best way to improve the propagation of the information, in this case, the release of a package, it's adding peers to your DAppNode."),(0,i.kt)("h2",{id:"sharing-ipfs-peer"},"Sharing IPFS peer"),(0,i.kt)("p",null,"You should go to the System > Peers or you can try to ",(0,i.kt)("a",{parentName:"p",href:"http://my.dappnode/#/system/add-ipfs-peer"},"use this link")," if you are connected vpn or via wifi."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../../img/system_view_peers.png"})),(0,i.kt)("h3",{id:"get-your-ipfs-peer-link"},"Get your IPFS peer link"),(0,i.kt)("p",null,"To get the link to share with others. Simply click copy the content of the first field (Share IPFS peer).\nIn my case it would be:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://my.dappnode/#/system/add-ipfs-peer/%2Fdns4%2F0773a72d55aed273.dyndns.dappnode.io%2Ftcp%2F4001%2Fipfs%2F12D3KooWT3GFZAR2fWQjqrMWg3iWN1csur7qEcpQy5Dj33abHHWZ")),(0,i.kt)("h3",{id:"add-a-peer-to-your-dappnode"},"Add a peer to your DAppNode"),(0,i.kt)("p",null,"When a user pass you his link, you just have to paste on the second field (Add IPFS peer\n) and click on the ",(0,i.kt)("strong",{parentName:"p"},"Add peer")," button."))}h.isMDXComponent=!0}}]);