import { cva } from 'class-variance-authority';

export const navbarVariants = cva(
  'fixed top-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center px-6 z-20 transition-all duration-300 ease-in-out',
  {
    variants: {
      collapsed: {
        true: 'left-20',
        false: 'left-64',
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
);
