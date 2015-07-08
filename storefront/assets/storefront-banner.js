/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/@vtex.storefront-banner/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _storefront = __webpack_require__(2);
	
	var _storefront2 = _interopRequireDefault(_storefront);
	
	var _componentsBanner = __webpack_require__(3);
	
	var _componentsBanner2 = _interopRequireDefault(_componentsBanner);
	
	_storefront2['default']['export']('Banner', _componentsBanner2['default']);
	
	// Enable react hot loading with external React
	// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
	if (false) {
	  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = storefront;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _storefront = __webpack_require__(2);
	
	var _storefront2 = _interopRequireDefault(_storefront);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsConnectToStores = __webpack_require__(5);
	
	var _utilsConnectToStores2 = _interopRequireDefault(_utilsConnectToStores);
	
	var stores = [_storefront2['default'].flux.stores.ShopStore, _storefront2['default'].flux.stores.ComponentStore];
	
	var Banner = _react2['default'].createClass({
	  displayName: 'Banner',
	
	  render: function render() {
	    var component = this.props.ComponentStore.toJS()[this.props.route][this.props.id];
	    if (!component) {
	      return null;
	    }
	    var src = component.settings.url;
	    return _react2['default'].createElement(
	      'div',
	      { className: 'storefront-banner' },
	      _react2['default'].createElement('img', { src: src })
	    );
	  }
	});
	
	exports['default'] = (0, _utilsConnectToStores2['default'])(stores)(Banner);
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *    @connectToStores([myStore])
	 *    class MyComponent extends React.Component {
	 *      render() {
	 *        this.props.myStore // has myStore.state
	 *      }
	 *    }
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var eachObject = function eachObject(f, o) {
	  o.forEach(function (from) {
	    Object.keys(Object(from)).forEach(function (key) {
	      f(key, from[key]);
	    });
	  });
	};
	
	var assign = function assign(target) {
	  for (var _len = arguments.length, source = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    source[_key - 1] = arguments[_key];
	  }
	
	  eachObject(function (key, value) {
	    return target[key] = value;
	  }, source);
	  return target;
	};
	
	var getStateFromStores = function getStateFromStores(stores) {
	  var state = {};
	  stores.forEach(function (store) {
	    return state[store.displayName] = store.state;
	  });
	  return state;
	};
	
	function connectToStores(stores) {
	  return function decorator(Component) {
	    var StoreConnection = _react2['default'].createClass({
	      displayName: 'StoreConnection',
	
	      getInitialState: function getInitialState() {
	        return getStateFromStores(stores);
	      },
	
	      componentWillMount: function componentWillMount() {
	        var _this = this;
	
	        stores.forEach(function (store) {
	          store.listen(_this.onChange);
	        });
	      },
	
	      componentWillUnmount: function componentWillUnmount() {
	        var _this2 = this;
	
	        stores.forEach(function (store) {
	          store.unlisten(_this2.onChange);
	        });
	      },
	
	      onChange: function onChange() {
	        this.setState(assign(this.state, getStateFromStores(stores)));
	      },
	
	      render: function render() {
	        return _react2['default'].createElement(Component, assign({}, this.props, this.state));
	      }
	    });
	
	    return StoreConnection;
	  };
	}
	
	exports['default'] = connectToStores;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=storefront-banner.js.map