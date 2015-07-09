/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".storefront-banner.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
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
	
	if (document.cookie.indexOf('VtexIdclientAutCookie') !== -1) {
	  __webpack_require__(6)(function (component) {
	    return _storefront2['default']['export']('BannerAdmin', component);
	  });
	}
	
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _storefront = __webpack_require__(2);
	
	var _storefront2 = _interopRequireDefault(_storefront);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsConnectToStores = __webpack_require__(5);
	
	var _utilsConnectToStores2 = _interopRequireDefault(_utilsConnectToStores);
	
	var Banner = (function (_React$Component) {
	  function Banner() {
	    _classCallCheck(this, _Banner);
	
	    _get(Object.getPrototypeOf(_Banner.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Banner, _React$Component);
	
	  var _Banner = Banner;
	
	  _createClass(_Banner, [{
	    key: 'onClickContainer',
	    value: function onClickContainer() {
	      var editMode = this.props.EditorStore.get('edit');
	      if (editMode) {
	        _storefront2['default'].flux.actions.EditorActions.openAdmin({
	          component: 'BannerAdmin',
	          route: this.props.route,
	          id: this.props.id
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var editMode = this.props.EditorStore.get('edit');
	      var component = this.props.ComponentStore.get(this.props.route).get(this.props.id).toJS();
	      var imageStyle = editMode ? { backgroundColor: 'rgba(0,0,200,0.5)', opacity: '0.2' } : {};
	      if (!component) {
	        return null;
	      }
	      var src = component.settings.url;
	      return _react2['default'].createElement(
	        'div',
	        { className: 'storefront-banner', onClick: this.onClickContainer.bind(this) },
	        _react2['default'].createElement('img', { style: imageStyle, src: src })
	      );
	    }
	  }]);
	
	  Banner = (0, _utilsConnectToStores2['default'])([_storefront2['default'].flux.stores.ShopStore, _storefront2['default'].flux.stores.ComponentStore, _storefront2['default'].flux.stores.EditorStore])(Banner) || Banner;
	  return Banner;
	})(_react2['default'].Component);
	
	exports['default'] = Banner;
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(1, function(require) {
		data = __webpack_require__(7);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ }
/******/ ]);
//# sourceMappingURL=storefront-banner.js.map