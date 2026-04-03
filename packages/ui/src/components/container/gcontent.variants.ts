import { cva } from 'class-variance-authority';

export const contentContainerVariants = cva(
  'min-h-screen bg-gray-50 flex flex-col pt-16 transition-all duration-300 ease-in-out',
  {
    variants: {
      collapsed: {
        true: 'pl-20',
        false: 'pl-64',
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
);

export const innerContentVariants = cva(
  'w-full mx-auto px-4 sm:px-6 lg:px-8 py-8',
  {
    variants: {
      maxWidth: {
        default: 'max-w-[1440px]',
        sm: 'max-w-7xl',
        xl: 'max-w-[1600px]',
        full: 'max-w-full',
      },
    },
    defaultVariants: {
      maxWidth: 'default',
    },
  }
);
