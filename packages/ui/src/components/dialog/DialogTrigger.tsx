import React from 'react';
import { useDialog } from './context';

export interface DialogTriggerProps {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler }>;
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({ children }) => {
  const { setOpen } = useDialog();
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      children.props.onClick?.(e);
      setOpen(true);
    },
  });
};

export default DialogTrigger;
export { DialogTrigger };
