import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LuX } from 'react-icons/lu';
import { useDialog, useFocusTrap } from './context';
import { cn } from '../../utils/cn';

const DialogPortal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return createPortal(children, document.body);
};

const DialogOverlay: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    onClick={onClick}
    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]"
  />
);

export interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className,
}) => {
  const { open, setOpen, titleId, descriptionId } = useDialog();
  const contentRef = useRef<HTMLDivElement>(null);

  useFocusTrap(open, contentRef);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <DialogPortal>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <DialogOverlay onClick={() => setOpen(false)} />
            <motion.div
              ref={contentRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              // ANIMASI PREMIUM
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
                opacity: { duration: 0.2 },
              }}
              className={cn(
                'relative z-50 w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5',
                className
              )}
            >
              {children}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 rounded-full p-2 text-neutral-400 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-600"
              >
                <LuX className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </DialogPortal>
      )}
    </AnimatePresence>
  );
};

export default DialogContent;
export { DialogContent };
