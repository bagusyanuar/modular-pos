import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex items-center justify-center px-3 py-2.5 gap-2 text-sm rounded-lg cursor-pointer transition-color ease-in-out duration-300',
  {
    variants: {
      variant: {
        primary:
          'bg-orange-500 border border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600',
        outline:
          'bg-white border border-orange-500 text-orange-500 hover:bg-stone-50 hover:border-orange-600',
        ghost: 'bg-transparent text-neutral-700 hover:bg-stone-50',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
