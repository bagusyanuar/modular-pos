import React, { useState, useCallback, useId, useMemo } from 'react';
import { DialogContext, useLockScroll } from './context';

export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) setInternalOpen(value);
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  useLockScroll(open);

  const contextValue = useMemo(
    () => ({ open, setOpen, titleId, descriptionId }),
    [open, setOpen, titleId, descriptionId]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};

export default Dialog;
export { Dialog };
