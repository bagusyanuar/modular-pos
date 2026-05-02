import React from 'react';
import { useDialog } from './context';
import { cn } from '../../utils/cn';

const DialogDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const { descriptionId } = useDialog();
  return (
    <p
      id={descriptionId}
      className={cn(
        'text-sm leading-relaxed font-light text-neutral-500',
        className
      )}
    >
      {children}
    </p>
  );
};

export default DialogDescription;
export { DialogDescription };
