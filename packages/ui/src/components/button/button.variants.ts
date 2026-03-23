import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex items-center justify-center px-3 py-2.5 cursor-pointer transition-color ease-in-out duration-300',
  {
    variants: {
      variant: {
        primary: 'bg-teal-500 text-white hover:bg-teal-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
