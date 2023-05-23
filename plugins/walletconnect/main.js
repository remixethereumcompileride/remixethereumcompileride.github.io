(self["webpackChunk"]=self["webpackChunk"]||[]).push([[179],{957:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(67085);var _typeof=__webpack_require__(22886);Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(59454));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(91544));var _slicedToArray2=_interopRequireDefault(__webpack_require__(15159));var _react=_interopRequireWildcard(__webpack_require__(47182));__webpack_require__(2080);__webpack_require__(93496);var _ethereum=__webpack_require__(23084);var _RemixClient=__webpack_require__(90188);var _walletConnectUI=__webpack_require__(20609);var _jsxRuntime=__webpack_require__(97659);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var remix=new _RemixClient.RemixClient;function App(){var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2["default"])(_useState,2),ethereumClient=_useState2[0],setEthereumClient=_useState2[1];var _useState3=(0,_react.useState)(null),_useState4=(0,_slicedToArray2["default"])(_useState3,2),wagmiClient=_useState4[0],setWagmiClient=_useState4[1];var _useState5=(0,_react.useState)("dark"),_useState6=(0,_slicedToArray2["default"])(_useState5,2),theme=_useState6[0],setTheme=_useState6[1];(0,_react.useEffect)((function(){(0,_asyncToGenerator2["default"])(_regenerator["default"].mark((function _callee(){var ethereumClient;return _regenerator["default"].wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return remix.initClient();case 2:remix.internalEvents.on("themeChanged",(function(theme){setTheme(theme)}));ethereumClient=new _ethereum.EthereumClient(remix.wagmiClient,remix.chains);setWagmiClient(remix.wagmiClient);setEthereumClient(ethereumClient);case 6:case"end":return _context.stop()}}}),_callee)})))()}),[]);return(0,_jsxRuntime.jsxs)("div",{className:"App",children:[(0,_jsxRuntime.jsx)("h4",{className:"mt-1",children:"WalletConnect"}),ethereumClient&&wagmiClient&&(0,_jsxRuntime.jsx)(_walletConnectUI.WalletConnectUI,{wagmiClient,ethereumClient,theme})]})}var _default=App;exports["default"]=_default},20609:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.WalletConnectUI=WalletConnectUI;var _react=__webpack_require__(44168);var _wagmi=__webpack_require__(65587);var _constant=__webpack_require__(69632);var _jsxRuntime=__webpack_require__(97659);function WalletConnectUI(_ref){var ethereumClient=_ref.ethereumClient,wagmiClient=_ref.wagmiClient,theme=_ref.theme;return(0,_jsxRuntime.jsxs)("div",{children:[(0,_jsxRuntime.jsx)("div",{style:{display:"inline-block"},children:(0,_jsxRuntime.jsx)(_wagmi.WagmiConfig,{client:wagmiClient,children:(0,_jsxRuntime.jsx)(_react.Web3Button,{label:"Connect to a wallet"})})}),(0,_jsxRuntime.jsx)(_react.Web3Modal,{projectId:_constant.PROJECT_ID,ethereumClient,themeMode:theme})]})}},2002:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(67085);var _react=_interopRequireDefault(__webpack_require__(47182));var _reactDom=_interopRequireDefault(__webpack_require__(63521));var _app=_interopRequireDefault(__webpack_require__(957));var _jsxRuntime=__webpack_require__(97659);_reactDom["default"].render((0,_jsxRuntime.jsx)(_app["default"],{}),document.getElementById("root"))},90188:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(67085);Object.defineProperty(exports,"__esModule",{value:true});exports.RemixClient=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(59454));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(91544));var _classCallCheck2=_interopRequireDefault(__webpack_require__(32830));var _createClass2=_interopRequireDefault(__webpack_require__(59152));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(69451));var _inherits2=_interopRequireDefault(__webpack_require__(9346));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(65268));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(83910));var _defineProperty2=_interopRequireDefault(__webpack_require__(86604));var _plugin=__webpack_require__(80481);var _pluginWebview=__webpack_require__(98522);var _ethereum=__webpack_require__(23084);var _wagmi=__webpack_require__(65587);var _chains=__webpack_require__(56861);var _events=_interopRequireDefault(__webpack_require__(63683));var _constant=__webpack_require__(69632);function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return(0,_possibleConstructorReturn2["default"])(this,result)}}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}var RemixClient=function(_PluginClient){(0,_inherits2["default"])(RemixClient,_PluginClient);var _super=_createSuper(RemixClient);function RemixClient(){var _this;(0,_classCallCheck2["default"])(this,RemixClient);_this=_super.call(this);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"wagmiClient",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"chains",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"internalEvents",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"sendAsync",(function(data){return new Promise((function(resolve,reject){if(_this.wagmiClient){if(_this.wagmiClient.data&&_this.wagmiClient.data.provider&&_this.wagmiClient.data.provider.sendAsync){_this.wagmiClient.data.provider.sendAsync(data,(function(error,message){if(error)return reject(error);resolve(message)}))}else if(_this.wagmiClient.data&&_this.wagmiClient.data.provider&&_this.wagmiClient.data.provider.jsonRpcFetchFunc){_this.wagmiClient.data.provider.jsonRpcFetchFunc(data.method,data.params).then((function(message){resolve({jsonrpc:"2.0",result:message,id:data.id})}))["catch"]((function(error){reject(error)}))}else{_this.wagmiClient.provider.send(data.method,data.params).then((function(message){resolve({jsonrpc:"2.0",result:message,id:data.id})}))["catch"]((function(error){reject(error)}))}}else{console.error("Cannot make ".concat(data.method," request. Remix client is not connect to walletconnect client"));resolve({jsonrpc:"2.0",result:[],id:data.id})}}))}));(0,_pluginWebview.createClient)((0,_assertThisInitialized2["default"])(_this));_this.internalEvents=new _events["default"];_this.methods=["sendAsync","init"];_this.onload();return _this}(0,_createClass2["default"])(RemixClient,[{key:"onActivation",value:function onActivation(){var _this2=this;this.subscribeToEvents();this.call("theme","currentTheme").then((function(theme){_this2.internalEvents.emit("themeChanged",theme.quality.toLowerCase())}))}},{key:"init",value:function init(){console.log("initializing walletconnect plugin...")}},{key:"initClient",value:function(){var _initClient=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark((function _callee(){var _configureChains,provider;return _regenerator["default"].wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;this.chains=[_chains.arbitrum,_chains.arbitrumGoerli,_chains.mainnet,_chains.polygon,_chains.polygonMumbai,_chains.optimism,_chains.optimismGoerli,_chains.goerli,_chains.sepolia];_configureChains=(0,_wagmi.configureChains)(this.chains,[(0,_ethereum.w3mProvider)({projectId:_constant.PROJECT_ID})]),provider=_configureChains.provider;this.wagmiClient=(0,_wagmi.createClient)({autoConnect:false,connectors:(0,_ethereum.w3mConnectors)({projectId:_constant.PROJECT_ID,version:1,chains:this.chains}),provider});_context.next=9;break;case 6:_context.prev=6;_context.t0=_context["catch"](0);return _context.abrupt("return",console.error("Could not get a wallet connection",_context.t0));case 9:case"end":return _context.stop()}}}),_callee,this,[[0,6]])})));function initClient(){return _initClient.apply(this,arguments)}return initClient}()},{key:"subscribeToEvents",value:function subscribeToEvents(){var _this3=this;this.wagmiClient.subscribe((function(event){if(event.status==="connected"){_this3.emit("accountsChanged",[event.data.account]);_this3.emit("chainChanged",event.data.chain.id)}else if(event.status==="disconnected"){_this3.emit("accountsChanged",[]);_this3.emit("chainChanged",0)}}));this.on("theme","themeChanged",(function(theme){_this3.internalEvents.emit("themeChanged",theme.quality)}))}}]);return RemixClient}(_plugin.PluginClient);exports.RemixClient=RemixClient},69632:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.PROJECT_ID=void 0;var PROJECT_ID="a4ba105e642ae64cdb5b9a86debc0a66";exports.PROJECT_ID=PROJECT_ID},2080:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__)},29005:()=>{},38087:()=>{},30488:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[736],(()=>__webpack_exec__(2002)));var __webpack_exports__=__webpack_require__.O()}]);