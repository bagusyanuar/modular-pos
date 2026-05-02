import React from 'react';
import { useDialog } from './context';

export interface DialogCloseProps {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler }>;
}

const DialogClose: React.FC<DialogCloseProps> = ({ children }) => {
  const { setOpen } = useDialog();
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      children.props.onClick?.(e);
      setOpen(false);
    },
  });
};

export default DialogClose;
export { DialogClose };
