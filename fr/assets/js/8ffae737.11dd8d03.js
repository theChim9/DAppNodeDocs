"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3995],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),k=l,c=s["".concat(o,".").concat(k)]||s[k]||d[k]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9687:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),i=["components"],p={},o="Wizard Reference",u={unversionedId:"developers/wizard",id:"developers/wizard",title:"Wizard Reference",description:"The setup wizard for DAppNode packages helps automate the package customization and improve its user experience. You can allow users to conveniently edit environment variables, port mappings, and upload files while interacting with a simple web form, right before installing the package.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/wizard.md",sourceDirName:"developers",slug:"/developers/wizard",permalink:"/fr/developers/wizard",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/fr/docusaurus-plugin-content-docs/current/developers/wizard.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DAppNode Package (DNP) manifest",permalink:"/fr/developers/manifest-reference"},next:{title:"Support for Developers",permalink:"/fr/developers/dev-support"}},m={},d=[{value:"How to use",id:"how-to-use",level:2},{value:"Example",id:"example",level:2},{value:"version",id:"version",level:2},{value:"fields",id:"fields",level:2},{value:"id",id:"id",level:3},{value:"target",id:"target",level:3},{value:"environment",id:"environment",level:4},{value:"name",id:"name",level:5},{value:"service",id:"service",level:5},{value:"portMapping",id:"portmapping",level:4},{value:"containerPort",id:"containerport",level:5},{value:"service",id:"service-1",level:5},{value:"namedVolumeMountpoint",id:"namedvolumemountpoint",level:4},{value:"volumeName",id:"volumename",level:5},{value:"allNamedVolumesMountpoint",id:"allnamedvolumesmountpoint",level:4},{value:"fileUpload",id:"fileupload",level:4},{value:"path",id:"path",level:5},{value:"service",id:"service-2",level:5},{value:"title",id:"title",level:3},{value:"description",id:"description",level:3},{value:"secret",id:"secret",level:3},{value:"pattern",id:"pattern",level:3},{value:"patternErrorMessage",id:"patternerrormessage",level:3},{value:"enum",id:"enum",level:3},{value:"required",id:"required",level:3},{value:"if",id:"if",level:3}],s={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wizard-reference"},"Wizard Reference"),(0,r.kt)("p",null,"The setup wizard for DAppNode packages helps automate the package customization and improve its user experience. You can allow users to conveniently edit environment variables, port mappings, and upload files while interacting with a simple web form, right before installing the package."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"To add this functionality, create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-wizard.yml")," in the root of your DAppNode package directory. Both JSON and YAML formats are supported, but YAML makes writing markdown text blocks much easier (its used in the ",(0,r.kt)("a",{parentName:"p",href:"#description"},(0,r.kt)("inlineCode",{parentName:"a"},"description"))," property)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  DAppNodePackage-my-package.public.dappnode.eth/\n  \u251c\u2500\u2500 build\n  \u2502   \u251c\u2500\u2500 ...\n  \u2502   \u2514\u2500\u2500 Dockerfile\n  \u251c\u2500\u2500 avatar-my-package.png\n  \u251c\u2500\u2500 dappnode_package.json\n  \u251c\u2500\u2500 docker-compose.yml\n+ \u2514\u2500\u2500 setup-wizard.yml\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "2"\nfields:\n  - id: payoutAddress,\n    target:\n      type: environment\n      name: PAYOUT_ADDRESS\n      service: service1\n    title: Payout address\n    description: >-\n      Address to send **payouts** too. [More info](https://more.info)\n      Supports markdown and multiline\n    secret: true\n    pattern: "^0x[a-fA-F0-9]{40}$"\n    patternErrorMessage: Must be a valid address (0x1fd16a...)\n    enum:\n      - normal\n      - archive\n      - advanced\n    required: true\n    if: { "mode": { "enum": ["advanced"] } }\n')),(0,r.kt)("h2",{id:"version"},"version"),(0,r.kt)("p",null,"Identify this setup wizard version. Currently only supports version ",(0,r.kt)("inlineCode",{parentName:"p"},'"2"')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"value: ",(0,r.kt)("inlineCode",{parentName:"li"},'"2"'))),(0,r.kt)("h2",{id:"fields"},"fields"),(0,r.kt)("p",null,"Setup wizard fields. Fields to show in the setup wizard form UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"type: Array type: ",(0,r.kt)("inlineCode",{parentName:"li"},"object[]"))),(0,r.kt)("p",null,"All items must be of the type: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," with the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secret")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pattern")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patternErrorMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enum")),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"if")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"Unique property ID required for internal form parsing, and to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," conditional block."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: payoutAddress\n")),(0,r.kt)("h3",{id:"target"},"target"),(0,r.kt)("p",null,"Maps the setup wizard field to a package configuration option. Supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#environment"},(0,r.kt)("inlineCode",{parentName:"a"},"environment")),": For environment variables"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#portMapping"},(0,r.kt)("inlineCode",{parentName:"a"},"portMapping")),": For port mapping"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#namedVolumeMountpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"namedVolumeMountpoint")),": To allow hosting a specific package volume into a different drive or mountpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#allNamedVolumesMountpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"allNamedVolumesMountpoint")),": To allow hosting all package volumes into a different drive or mountpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fileUpload"},(0,r.kt)("inlineCode",{parentName:"a"},"fileUpload")),": To upload user files to the package container")),(0,r.kt)("h4",{id:"environment"},"environment"),(0,r.kt)("p",null,"To customize environment variables with user input. Targeted variables must be declared in the package's docker-compose. You can customize the type of input shown in the UI with this field properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#secret"},(0,r.kt)("inlineCode",{parentName:"a"},"secret")),": Hides input, to collect sensitive data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pattern"},(0,r.kt)("inlineCode",{parentName:"a"},"pattern")),": To validate input against any Regex expression."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enum"},(0,r.kt)("inlineCode",{parentName:"a"},"enum")),": Show as a select dropdown menu.")),(0,r.kt)("p",null,"It exists two ways of defining environment variables.\nThe first one, where you define one environment var for one service, you the format to do it is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"target:\n  type: environment\n  name: PAYOUT_ADDRESS\n  service: service1\n")),(0,r.kt)("p",null,"In case you want to define an environment variable that is used in multiple services you can define it in the next way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"target:\n  type: environment\n  name: PAYOUT_ADDRESS\n  service: [service1, service2, service2]\n")),(0,r.kt)("h5",{id:"name"},"name"),(0,r.kt)("p",null,"The name of the environment variable as declared in the docker-compose."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: PAYOUT_ADDRESS\n")),(0,r.kt)("h5",{id:"service"},"service"),(0,r.kt)("p",null,"In multi-service package, which service should be targeted with this setting."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"service: service1\n")),(0,r.kt)("h4",{id:"portmapping"},"portMapping"),(0,r.kt)("p",null,"To customize port mappings with user input. Targeted container port must be declared in the package's docker-compose."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"target:\n  type: portMapping\n  containerPort: 9554/UDP\n  service: service1\n")),(0,r.kt)("h5",{id:"containerport"},"containerPort"),(0,r.kt)("p",null,"Exposed container port to map to. Must follow the format ",(0,r.kt)("inlineCode",{parentName:"p"},"{portNumber}")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"{portNumber}/{PROTOCOL}"),", where PROTOCOL must be ",(0,r.kt)("inlineCode",{parentName:"p"},"TCP")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"UDP")," in all caps."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"containerPort: 9554\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"containerPort: 9554/TCP\n")),(0,r.kt)("h5",{id:"service-1"},"service"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#service"},"service")),(0,r.kt)("h4",{id:"namedvolumemountpoint"},"namedVolumeMountpoint"),(0,r.kt)("p",null,"To allow hosting a specific package volume into a different drive or mountpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"target:\n  type: namedVolumeMountpoint\n  volumeName: blockchain_data\n")),(0,r.kt)("h5",{id:"volumename"},"volumeName"),(0,r.kt)("p",null,"Name of the docker volume to allow the user to change its mountpoint. Must have the exact same name as declared in the package's compose ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," section."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"volumeName: blockchain_data\n")),(0,r.kt)("h4",{id:"allnamedvolumesmountpoint"},"allNamedVolumesMountpoint"),(0,r.kt)("p",null,"To allow hosting all package volumes into a different drive or mountpoint at once. Use this option if your package has multiple heavy volumes whose mountpoint should be changed at once."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"target:\n  type: allNamedVolumesMountpoint\n")),(0,r.kt)("h4",{id:"fileupload"},"fileUpload"),(0,r.kt)("p",null,"To allow hosting a specific package volume into a different drive or mountpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"target:\n  type: fileUpload\n  path: /usr/src/config.json\n  service: service1\n")),(0,r.kt)("h5",{id:"path"},"path"),(0,r.kt)("p",null,"Destination path to upload the file to. Must be a valid absolute path in the package container."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"path: /usr/src/config.json\n")),(0,r.kt)("h5",{id:"service-2"},"service"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#service"},"service")),(0,r.kt)("h3",{id:"title"},"title"),(0,r.kt)("p",null,"The Title Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},'""')),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"title: Payout address\n")),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"The Description Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("strong",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},'""')),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"description: >-\n  Address to send **payouts** too. [More info](https://more.info)\n  Supports markdown and multiline\n")),(0,r.kt)("h3",{id:"secret"},"secret"),(0,r.kt)("p",null,'Display field input as hidden. Use to collect sensitive data. It will automatically activate if the field name contains "secret" "passphrase" or "password". Only available with target environment.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is optional"),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"secret: true\n")),(0,r.kt)("h3",{id:"pattern"},"pattern"),(0,r.kt)("p",null,"Enforce this property to satisfy a regex before continuing. Only available with target environment. Use also ",(0,r.kt)("a",{parentName:"p",href:"#patternErrorMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"patternErrorMessage"))," to show a nicer error message when regex validation fails."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is optional"),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pattern: "^0x[a-fA-F0-9]{40}$"\n')),(0,r.kt)("h3",{id:"patternerrormessage"},"patternErrorMessage"),(0,r.kt)("p",null,"Error to show if the regex pattern validation fails. Only available with target environment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is optional"),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"patternErrorMessage: Must be a valid address (0x1fd16a...)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"patternErrorMessage: Must be at least 8 characters long\n")),(0,r.kt)("h3",{id:"enum"},"enum"),(0,r.kt)("p",null,"List valid options. Will automatically display the input as a select menu. Only available with target environment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is optional"),(0,r.kt)("li",{parentName:"ul"},"type: Array type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"))),(0,r.kt)("p",null,"All items must be of the type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"enum:\n  - normal\n  - archive\n  - advanced\n")),(0,r.kt)("h3",{id:"required"},"required"),(0,r.kt)("p",null,"Enforce this property to be provided before continuing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is optional"),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"required: true\n")),(0,r.kt)("h3",{id:"if"},"if"),(0,r.kt)("p",null,"Only display the field property if the ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," schema is valid against the current form data provided by the user. The form data is an object with the structure ",(0,r.kt)("inlineCode",{parentName:"p"},"{ [field.id]: JSONSchema }"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is optional"),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"object"))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'if: { "mode": { "enum": ["advanced"] } }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'if: { "mode": { "enum": ["archive"] } }\n')))}k.isMDXComponent=!0}}]);