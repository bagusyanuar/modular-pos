import React from 'react';
import { useDialog } from './context';
import { cn } from '../../utils/cn';

const DialogTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const { titleId } = useDialog();
  return (
    <h2
      id={titleId}
      className={cn(
        'text-xl font-semibold tracking-tight text-neutral-900',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default DialogTitle;
export { DialogTitle };
