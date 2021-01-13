import * as React from 'react';

export interface PopoverProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactChild
  content: React.ReactNode
}

declare class Popover extends React.Component<PopoverProps, any> {
}

declare module 'react-super-simple-popover' {
}

export default Popover;