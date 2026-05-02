import React from 'react';
import { cn } from '../../utils/cn';

const DialogFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={cn(
      'mt-8 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3',
      className
    )}
  >
    {children}
  </div>
);

export default DialogFooter;
export { DialogFooter };
