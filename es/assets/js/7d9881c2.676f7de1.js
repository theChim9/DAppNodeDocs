"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7048],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5712:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var o=n(3117),i=n(102),r=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},s="Select a type of Client",c={unversionedId:"user-guide/ui/initial-configurations/select-a-client",id:"user-guide/ui/initial-configurations/select-a-client",title:"Select a type of Client",description:"The first time you enter to the admin UI of DAppNode, you will have to take this decision. Firstly, it's a decision you can modify whatever you want. From DAppNode we think it's so important to explain best as possible what this selection means. Then, you will see the next window.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/user-guide/ui/initial-configurations/select-a-client.md",sourceDirName:"user-guide/ui/initial-configurations",slug:"/user-guide/ui/initial-configurations/select-a-client",permalink:"/es/user-guide/ui/initial-configurations/select-a-client",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/user-guide/ui/initial-configurations/select-a-client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"First Steps",permalink:"/es/first-steps"},next:{title:"Auto-Updates",permalink:"/es/user-guide/ui/recommended-set-ups/auto-updates"}},u={},h=[{value:"Context",id:"context",level:2},{value:"What is a client and why do I need to communicate with an Ethereum Client",id:"what-is-a-client-and-why-do-i-need-to-communicate-with-an-ethereum-client",level:3},{value:"Third Parties and Blockchains",id:"third-parties-and-blockchains",level:3},{value:"Type of Clients",id:"type-of-clients",level:2},{value:"Remote",id:"remote",level:3},{value:"Light Client",id:"light-client",level:3},{value:"Full Node",id:"full-node",level:3},{value:"Option: use remote during syncing or error",id:"option-use-remote-during-syncing-or-error",level:2}],d={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"select-a-type-of-client"},"Select a type of Client"),(0,r.kt)("p",null,"The first time you enter to the admin UI of DAppNode, you will have to take this decision. Firstly, it's a decision you can modify whatever you want. From DAppNode we think it's so important to explain best as possible what this selection means. Then, you will see the next window."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"../../../../img/system_view_repository.png"})),(0,r.kt)("p",null,"You can select 3 different options. To understand correctly what are the consecuences, we will explain in a short way the context situation and the pros and cons of every option."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("h3",{id:"what-is-a-client-and-why-do-i-need-to-communicate-with-an-ethereum-client"},"What is a client and why do I need to communicate with an Ethereum Client"),(0,r.kt)("p",null,"A Blockchain is a network where the different nodes share information. The way the user can get access to this information is using a client.\nOn a short way, we can say that DAppNode update the packages direction on the Ethereum Blockchain. This means that you need your DAppNode connect to an Ethereum Client to be able to get the packages or on the way to be able to access to the DAppStore and get the package you want."),(0,r.kt)("h3",{id:"third-parties-and-blockchains"},"Third Parties and Blockchains"),(0,r.kt)("p",null,"One of the main objetives of blockchain technology is reducing the dependency of third parties. When we require a service of a enterprise, in this case, they got us access to an ethereum client. We are depending of them and if its infrastructure fails, we can't do anything. We are not independent!"),(0,r.kt)("h2",{id:"type-of-clients"},"Type of Clients"),(0,r.kt)("p",null,"Now you have a little idea of the context, we will explain the differences between these clients."),(0,r.kt)("h3",{id:"remote"},"Remote"),(0,r.kt)("p",null,"Remote client means your node will communicate with the ethereum node that DAppNode maintain. The pros this kind of node has are the next:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have access to the DAppStore and your DAppNode does not have to allocate the memmory is neccesary by having a ethereum client."),(0,r.kt)("li",{parentName:"ul"},"It can be used for devices with low resources.")),(0,r.kt)("p",null,"The cons are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the DAppNode Ethereum Node fails, you will not be able to connect with the DAppStore.")),(0,r.kt)("h3",{id:"light-client"},"Light Client"),(0,r.kt)("p",null,"Light Client consists of having an ethereum client on your DAppNode, but this kind of client does not have all the information of the blockchain, so space this kind of client occupies is less. The pros of this set-up are the next:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You don't depend on third parties."),(0,r.kt)("li",{parentName:"ul"},"The hard disk space that this kind of client occupies is so much less than a full node."),(0,r.kt)("li",{parentName:"ul"},"It can be used for devices with low resources."),(0,r.kt)("li",{parentName:"ul"},"You can connect this node to your metamask and do operations with it.")),(0,r.kt)("p",null,"The cons are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Light clients need to connect to one slot of a full node. We can say that a light client only has minimal information of the blockchain, but they require to have access to all blockchain information, so they need to be connected to a full node. Every full node only has slots for 5 light clients which means if there are so many light clients than full nodes, your node could not get a free slot.")),(0,r.kt)("h3",{id:"full-node"},"Full Node"),(0,r.kt)("p",null,'Full Node means you will store all the data of the ethereum blockchain. You will release you can select different options. These options are the different "technologies":'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Geth: It's a full node client that is written in Go."),(0,r.kt)("li",{parentName:"ul"},"Nethermind: It's a full node client that is written in . NET."),(0,r.kt)("li",{parentName:"ul"},"OpenEthereum: It's a full node client that is written in Rust.")),(0,r.kt)("p",null,"The main purpose of existing different clients is to increase the sturdiness of the network. If there is an error or bug on one of them, all the clients will not be affected by this failure."),(0,r.kt)("p",null,"The pros of this selection are the next:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are independent !!!!"),(0,r.kt)("li",{parentName:"ul"},"Your machine does not depend on full nodes with free slots.")),(0,r.kt)("p",null,"The cons are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need free space on the disk to be able to allocate an ethereum node. Currently, May 2021 the size is 439 GB."),(0,r.kt)("li",{parentName:"ul"},"You can connect this node to your metamask and do operations with it."),(0,r.kt)("li",{parentName:"ul"},"Some machines with low resources perhaps can't run this kind of node.")),(0,r.kt)("h2",{id:"option-use-remote-during-syncing-or-error"},"Option: use remote during syncing or error"),(0,r.kt)("p",null,"This option is below the three main options. If you select a light client or Full node until your node gets all the data it needs, you will not be able to access the DAppStore, turning on this option you will be able to stay connected to the DAppNode remote node in case your node is syncing(this process can take several hours) or it has some problem."))}p.isMDXComponent=!0}}]);