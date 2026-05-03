import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  'flex items-center justify-center rounded-sm border border-neutral-400 transition peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        default: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      isError: {
        true: 'border-red-500 peer-checked:border-red-500',
        false: '',
      },
      disabled: {
        true: 'border-neutral-400 bg-neutral-200 cursor-not-allowed peer-[&:checked:disabled]:bg-neutral-200 peer-[&:checked:disabled]:border-neutral-400',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'default',
      isError: false,
      disabled: false,
    },
  }
);

export const iconVariants = cva(
  'text-white opacity-0 transition-all duration-150 peer-checked:[&_svg]:opacity-100',
  {
    variants: {
      size: {
        sm: 'w-3 h-3',
        default: 'w-3.5 h-3.5',
        lg: 'w-4.5 h-4.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export const labelVariants = cva(
  'select-none text-neutral-700 transition-colors',
  {
    variants: {
      size: {
        sm: 'text-xs',
        default: 'text-sm',
        lg: 'text-base',
      },
      disabled: {
        true: 'text-neutral-400 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'default',
      disabled: false,
    },
  }
);
