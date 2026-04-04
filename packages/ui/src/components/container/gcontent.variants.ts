import { cva } from 'class-variance-authority';

export const contentContainerVariants = cva(
  'min-h-screen bg-transparent flex flex-col pt-16 transition-all duration-300 ease-in-out'
);

export const innerContentVariants = cva(
  'w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8',
  {
    variants: {
      maxWidth: {
        default: 'max-w-[1600px]',
        sm: 'max-w-7xl',
        xl: 'max-w-[1700px]',
        full: 'max-w-full',
      },
    },
    defaultVariants: {
      maxWidth: 'full',
    },
  }
);
