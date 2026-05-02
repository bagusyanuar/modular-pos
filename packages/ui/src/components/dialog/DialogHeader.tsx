import React from 'react';
import { cn } from '../../utils/cn';

const DialogHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={cn('mb-6 flex flex-col space-y-2 text-left', className)}>
    {children}
  </div>
);

export default DialogHeader;
export { DialogHeader };
