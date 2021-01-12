import React, { useState, useMemo } from 'react';

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactChild
  content: React.ReactNode
};

const DEFAULT_POPOVER_MARGIN_TOP = 8;
const DEFAULT_POPOVER_MARGIN_LEFT = 40;

export default function Popover({
  isOpen, onClose, children, content,
}: Props) {
  const [contentEl, setContentEl] = useState<any>(null);
  const [buttonEl, setButtonEl] = useState<any>(null);

  const handleClickBackground = () => {
    onClose();
  };

  const { left, top } = useMemo(() => {
    if (!buttonEl || !contentEl) {
      return {
        left: 0,
        top: 0,
      };
    }
    let leftResut = buttonEl?.offsetLeft;
    let topResult = buttonEl?.offsetTop + buttonEl.clientHeight + DEFAULT_POPOVER_MARGIN_TOP;
    // 오른쪽으로 넘어버리면
    if (leftResut + contentEl.clientWidth > document.body.clientWidth) {
      leftResut -= (
        leftResut + contentEl.clientWidth - document.body.clientWidth + DEFAULT_POPOVER_MARGIN_LEFT
      );
    }

    // 아래쪽으로 넘어버리면
    if (topResult + contentEl.clientHeight > document.body.clientHeight) {
      topResult -= (topResult + contentEl.clientHeight - document.body.clientHeight);
    }

    return {
      left: leftResut,
      top: topResult,
    };
  }, [contentEl, buttonEl]);

  if (!isOpen) {
    return (
      <div>
        {children}
      </div>
    );
  }

  return (
    <>
      <div
        ref={(el) => setButtonEl(el)}
      >
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        }}
        onClick={handleClickBackground}
      >
        <div
          ref={(el) => setContentEl(el)}
          style={{
            position: 'absolute',
            left,
            top,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      </div>
    </>
  );
}
