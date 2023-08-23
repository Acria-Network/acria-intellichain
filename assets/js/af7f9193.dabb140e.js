"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[94],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,h=u["".concat(s,".").concat(k)]||u[k]||c[k]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Validator Staking",l={unversionedId:"staking/validator-staking",id:"staking/validator-staking",title:"Validator Staking",description:"Prerequisites",source:"@site/docs/staking/validator-staking.md",sourceDirName:"staking",slug:"/staking/validator-staking",permalink:"/docs/staking/validator-staking",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Staking",permalink:"/docs/category/staking"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Full node set up",id:"full-node-set-up",level:3},{value:"Stake on the IntelliChain",id:"stake-on-the-intellichain",level:2},{value:"Step 1: Clone the Staking Contract Repo",id:"step-1-clone-the-staking-contract-repo",level:3},{value:"Step 2: Edit the .env file",id:"step-2-edit-the-env-file",level:3},{value:"Step 3: Stake ACRIA Tokens",id:"step-3-stake-acria-tokens",level:3},{value:"Step 4: Register BLS Key",id:"step-4-register-bls-key",level:3},{value:"Done: Earn ACRIA Tokens \ud83e\udd11",id:"done-earn-acria-tokens-",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validator-staking"},"Validator Staking"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"full-node-set-up"},"Full node set up"),(0,r.kt)("p",null,"Your node fully set up and synced. See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/operate-a-node"},"Operate a node"))),(0,r.kt)("h2",{id:"stake-on-the-intellichain"},"Stake on the IntelliChain"),(0,r.kt)("h3",{id:"step-1-clone-the-staking-contract-repo"},"Step 1: Clone the Staking Contract Repo"),(0,r.kt)("p",null,"First you have to clone our Staking Contract Repo to your local machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"localhost> git clone https://github.com/Acria-Network/acria-intellichain-staking-contracts.git\n")),(0,r.kt)("h3",{id:"step-2-edit-the-env-file"},"Step 2: Edit the .env file"),(0,r.kt)("p",null,"In order to proceed you have to open the downloaded repo in a IDE of your choice. We recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"VSCode"),"."),(0,r.kt)("p",null,"Rename the file ",(0,r.kt)("inlineCode",{parentName:"p"},".env.example")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," and open it."),(0,r.kt)("p",null,"It should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=".env"',title:'".env"'},"JSONRPC_URL=https://aic.acria.ai\nPRIVATE_KEYS=0x\nSTAKING_CONTRACT_ADDRESS=0x0000000000000000000000000000000000001001\nMAX_VALIDATOR_COUNT=\nMIN_VALIDATOR_COUNT=\nBLS_PUBLIC_KEY=0x\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSONRPC_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the main node which is used for calling the staking contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PRIVATE_KEYS"),(0,r.kt)("td",{parentName:"tr",align:null},"Here you must enter your nodes private key which will be used for staking the ACRIA tokens. You can find it here: ",(0,r.kt)("inlineCode",{parentName:"td"},"<data-dir>/consensus/validator.key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STAKING_CONTRACT_ADDRESS"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the default staking contract of the Acria IntelliChain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAX_VALIDATOR_COUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"Leave it blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MIN_VALIDATOR_COUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"Leave it blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BLS_PUBLIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the BLS Public Key of your node which has been outputted by creating it. You can output it again using this command ",(0,r.kt)("a",{parentName:"td",href:"/docs/node/setup#outputting-secrets"},"here"),".")))),(0,r.kt)("p",null,"Edit the file using the key descriptions above and then continue."),(0,r.kt)("h3",{id:"step-3-stake-acria-tokens"},"Step 3: Stake ACRIA Tokens"),(0,r.kt)("admonition",{title:"Node wallet funds",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before continuing you have to make sure that you node wallet has at least 1333 ACRIA. Otherwise the next steps will fail."),(0,r.kt)("p",{parentName:"admonition"},"You can find the public key of your node wallet by using this command ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/setup#outputting-secrets"},"here"),".")),(0,r.kt)("p",null,"To start the staking run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"localhost> npm run stake\n")),(0,r.kt)("p",null,"This command will stake the required amount of ACRIA tokens and lock them inside the staking contract."),(0,r.kt)("h3",{id:"step-4-register-bls-key"},"Step 4: Register BLS Key"),(0,r.kt)("p",null,"The last step is to register the BLS key so that your node is able to validate blocks starting in the next block epoch."),(0,r.kt)("p",null,"To do this run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"localhost> npm run register-blskey\n")),(0,r.kt)("p",null,"This command will add your node's bls key to the list of authorized nodes so it can validate blocks."),(0,r.kt)("h3",{id:"done-earn-acria-tokens-"},"Done: Earn ACRIA Tokens \ud83e\udd11"),(0,r.kt)("p",null,"Now all you have to do is keep your node up and running so you will receive ACRIA Tokens from the transactions that are included inside a block that your node validates."),(0,r.kt)("p",null,"The validation job of each node in the IntelliChain Node Network is distributed evenly. So if the number of nodes inside the network grows the chance of validating the next block is lower. On the other hand: If you host one of the first nodes of the Acria IntelliChain Node Network then the chance of validating a block and therefore receiveing ACRIA tokens is much higher."),(0,r.kt)("p",null,"Happy Staking! \ud83d\ude80"))}c.isMDXComponent=!0}}]);