import _pt from "prop-types";
import React, { useState, useMemo } from 'react';
const DEFAULT_POPOVER_MARGIN_TOP = 8;
const DEFAULT_POPOVER_MARGIN_LEFT = 40;
export default function Popover({
  isOpen,
  onClose,
  children,
  content
}) {
  const [contentEl, setContentEl] = useState(null);
  const [buttonEl, setButtonEl] = useState(null);

  const handleClickBackground = () => {
    onClose();
  };

  const {
    left,
    top
  } = useMemo(() => {
    if (!buttonEl || !contentEl) {
      return {
        left: 0,
        top: 0
      };
    }

    let leftResut = buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.offsetLeft;
    let topResult = (buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.offsetTop) + buttonEl.clientHeight + DEFAULT_POPOVER_MARGIN_TOP; // 오른쪽으로 넘어버리면

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
    return /*#__PURE__*/React.createElement("div", null, children);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: el => setButtonEl(el)
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: document.body.clientWidth,
      height: document.body.clientHeight
    },
    onClick: handleClickBackground
  }, /*#__PURE__*/React.createElement("div", {
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
  isOpen: _pt.bool.isRequired,
  onClose: _pt.func.isRequired,
  content: _pt.node.isRequired
};
//# sourceMappingURL=Popover.js.map