"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Popover;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DEFAULT_POPOVER_MARGIN_TOP = 8;
var DEFAULT_POPOVER_MARGIN_LEFT = 40;

function Popover(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      children = _ref.children,
      content = _ref.content;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      contentEl = _useState2[0],
      setContentEl = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonEl = _useState4[0],
      setButtonEl = _useState4[1];

  var handleClickBackground = function handleClickBackground() {
    onClose();
  };

  var _useMemo = (0, _react.useMemo)(function () {
    if (!buttonEl || !contentEl) {
      return {
        left: 0,
        top: 0
      };
    }

    var leftResut = buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.offsetLeft;
    var topResult = (buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.offsetTop) + buttonEl.clientHeight + DEFAULT_POPOVER_MARGIN_TOP; // 오른쪽으로 넘어버리면

    if (leftResut + contentEl.clientWidth > document.body.clientWidth) {
      leftResut -= leftResut + contentEl.clientWidth - document.body.clientWidth + DEFAULT_POPOVER_MARGIN_LEFT;
    } // 아래쪽으로 넘어버리면


    if (topResult + contentEl.clientHeight > document.body.clientHeight) {
      topResult -= topResult + contentEl.clientHeight - document.body.clientHeight;
    }

    return {
      left: leftResut,
      top: topResult
    };
  }, [contentEl, buttonEl]),
      left = _useMemo.left,
      top = _useMemo.top;

  if (!isOpen) {
    return /*#__PURE__*/_react.default.createElement("div", null, children);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: function ref(el) {
      return setButtonEl(el);
    }
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: document.body.clientWidth,
      height: document.body.clientHeight
    },
    onClick: handleClickBackground
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: function ref(el) {
      return setContentEl(el);
    },
    style: {
      position: 'absolute',
      left: left,
      top: top
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, content)));
}

Popover.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  content: _propTypes.default.node.isRequired
};
//# sourceMappingURL=Popover.js.map