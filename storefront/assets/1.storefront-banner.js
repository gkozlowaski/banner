webpackJsonp([1],{

/***/ 7:
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
	
	var BannerAdmin = (function (_React$Component) {
	  function BannerAdmin(props) {
	    _classCallCheck(this, _BannerAdmin);
	
	    _get(Object.getPrototypeOf(_BannerAdmin.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      url: props.ComponentStore.get(this.props.route).get(this.props.id).get('settings').get('url')
	    };
	  }
	
	  _inherits(BannerAdmin, _React$Component);
	
	  var _BannerAdmin = BannerAdmin;
	
	  _createClass(_BannerAdmin, [{
	    key: 'changeUrl',
	    value: function changeUrl(e) {
	      this.setState({ url: e.target.value });
	    }
	  }, {
	    key: 'onClickSave',
	    value: function onClickSave() {
	      _storefront2['default'].flux.actions.ComponentActions.saveSettings({
	        accountName: 'basedevmkp',
	        route: this.props.route,
	        component: 'Banner@vtex.storefront-banner',
	        id: this.props.id,
	        settings: this.state
	      });
	      _storefront2['default'].flux.actions.EditorActions.closeAdmin();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'storefront-banner-admin' },
	        _react2['default'].createElement(
	          'p',
	          null,
	          'banner admin, fera!'
	        ),
	        _react2['default'].createElement('input', { type: 'text', value: this.state.url, onChange: this.changeUrl.bind(this) }),
	        _react2['default'].createElement(
	          'button',
	          { onClick: this.onClickSave.bind(this) },
	          'Salvar'
	        )
	      );
	    }
	  }]);
	
	  BannerAdmin = (0, _utilsConnectToStores2['default'])([_storefront2['default'].flux.stores.ShopStore, _storefront2['default'].flux.stores.ComponentStore, _storefront2['default'].flux.stores.EditorStore])(BannerAdmin) || BannerAdmin;
	  return BannerAdmin;
	})(_react2['default'].Component);
	
	exports['default'] = BannerAdmin;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=1.storefront-banner.js.map