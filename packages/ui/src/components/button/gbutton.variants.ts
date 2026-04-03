import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex items-center justify-center gap-2 rounded-lg font-medium cursor-pointer transition-all duration-300 ease-in-out disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-orange-500 border border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600',
        outline:
          'bg-white border border-orange-500 text-orange-500 hover:bg-stone-50 hover:border-orange-600',
        ghost: 'bg-transparent text-neutral-700 hover:bg-stone-50',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        destructive: 'bg-red-600 border border-red-600 text-white hover:bg-red-700 hover:border-red-700',
      },
      size: {
        default: 'px-3 py-2.5 text-xs',
        sm: 'px-2 py-1.5 text-[10px]',
        lg: 'px-6 py-3 text-sm',
      },
      loading: {
        true: 'opacity-80 pointer-events-none',
      },
      disabled: {
        true: 'text-neutral-500 bg-stone-200 border-stone-200 hover:bg-stone-200 hover:border-stone-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);
