import { cva } from 'class-variance-authority';

export const labelVariants = cva(
  'text-xs font-semibold text-neutral-600 transition-colors select-none',
  {
    variants: {
      size: {
        default: 'text-xs',
        sm: 'text-[10px]',
        lg: 'text-sm',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'default',
      disabled: false,
    },
  }
);
