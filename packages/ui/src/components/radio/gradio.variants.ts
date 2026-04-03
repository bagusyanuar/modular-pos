import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  'h-5 w-5 rounded-full border flex items-center justify-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 peer-checked:[&>span]:scale-100',
  {
    variants: {
      variant: {
        default: 'border-neutral-400 peer-checked:border-orange-500',
        error: 'border-red-500 peer-checked:border-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dotVariants = cva(
  'h-2.5 w-2.5 rounded-full scale-0 transition-transform duration-200',
  {
    variants: {
      variant: {
        default: 'bg-orange-500',
        error: 'bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
