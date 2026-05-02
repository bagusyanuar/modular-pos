import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useId,
  useMemo,
  useEffect,
  useRef,
} from 'react';

interface DialogContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  titleId: string;
  descriptionId: string;
}

export const DialogContext = createContext<DialogContextProps | undefined>(
  undefined
);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) throw new Error('useDialog must be used within a Dialog');
  return context;
};

// --- Hooks ---

export const useLockScroll = (open: boolean) => {
  useEffect(() => {
    if (!open) return;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [open]);
};

export const useFocusTrap = (
  open: boolean,
  ref: React.RefObject<HTMLElement | null>
) => {
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocus.current = document.activeElement as HTMLElement;

    const timer = setTimeout(() => {
      const focusableElements = ref.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      previousFocus.current?.focus();
    };
  }, [open, ref]);
};
