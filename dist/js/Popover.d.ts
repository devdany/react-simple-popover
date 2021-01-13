import React from 'react';
declare type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactChild;
    content: React.ReactNode;
};
export default function Popover({ isOpen, onClose, children, content, }: Props): JSX.Element;
export {};
