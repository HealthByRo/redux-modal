'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactRedux = require('react-redux');

var _bindAll2 = require('lodash/bindAll');

var _bindAll3 = _interopRequireDefault(_bindAll2);

var _selectors = require('../selectors');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    openedModal: (0, _selectors.selectOpenedModal)(state)
  };
};

var mapDispatchToProps = {
  onClose: _actions.modalCloseAction,
  onOpen: _actions.modalOpenAction
};

var Modal = (_temp = _class = function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    (0, _bindAll3.default)(_this, ['closeModal']);
    return _this;
  }

  _createClass(Modal, [{
    key: 'isOpen',
    value: function isOpen() {
      var _props = this.props,
          name = _props.name,
          openedModal = _props.openedModal;


      return name === openedModal;
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      var _props2 = this.props,
          name = _props2.name,
          onClose = _props2.onClose;


      onClose(name);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          closeOnBackgroundClick = _props3.closeOnBackgroundClick,
          Component = _props3.component,
          contentLabel = _props3.contentLabel,
          onClose = _props3.onClose,
          onOpen = _props3.onOpen,
          overlayClassName = _props3.overlayClassName,
          otherProps = _objectWithoutProperties(_props3, ['className', 'closeOnBackgroundClick', 'component', 'contentLabel', 'onClose', 'onOpen', 'overlayClassName']);

      var isOpen = this.isOpen();

      return _react2.default.createElement(
        _reactModal2.default,
        {
          className: className,
          contentLabel: contentLabel,
          isOpen: isOpen,
          overlayClassName: overlayClassName,
          shouldCloseOnOverlayClick: closeOnBackgroundClick,
          onRequestClose: this.closeModal
        },
        _react2.default.createElement(Component, _extends({
          onClose: onClose,
          onOpen: onOpen
        }, otherProps))
      );
    }
  }]);

  return Modal;
}(_react.PureComponent), _class.defaultProps = {
  className: 'modal',
  closeOnBackgroundClick: true,
  overlayClassName: 'modal-overlay'
}, _temp);
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Modal);