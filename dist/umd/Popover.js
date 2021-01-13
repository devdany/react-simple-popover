(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Popover;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const DEFAULT_POPOVER_MARGIN_TOP = 8;
  const DEFAULT_POPOVER_MARGIN_LEFT = 40;

  function Popover({
    isOpen,
    onClose,
    children,
    content
  }) {
    const [contentEl, setContentEl] = (0, _react.useState)(null);
    const [buttonEl, setButtonEl] = (0, _react.useState)(null);

    const handleClickBackground = () => {
      onClose();
    };

    const {
      left,
      top
    } = (0, _react.useMemo)(() => {
      if (!buttonEl || !contentEl) {
        return {
          left: 0,
          top: 0
        };
      }

      let leftResut = buttonEl?.offsetLeft;
      let topResult = buttonEl?.offsetTop + buttonEl.clientHeight + DEFAULT_POPOVER_MARGIN_TOP; // 오른쪽으로 넘어버리면

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
    }, [contentEl, buttonEl]);

    if (!isOpen) {
      return /*#__PURE__*/_react2.default.createElement("div", null, children);
    }

    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement("div", {
      ref: el => setButtonEl(el)
    }, children), /*#__PURE__*/_react2.default.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: document.body.clientWidth,
        height: document.body.clientHeight
      },
      onClick: handleClickBackground
    }, /*#__PURE__*/_react2.default.createElement("div", {
      ref: el => setContentEl(el),
      style: {
        position: 'absolute',
        left,
        top
      },
      onClick: e => e.stopPropagation()
    }, content)));
  }

  Popover.propTypes = {
    isOpen: _propTypes2.default.bool.isRequired,
    onClose: _propTypes2.default.func.isRequired,
    content: _propTypes2.default.node.isRequired
  };
});
//# sourceMappingURL=Popover.js.map