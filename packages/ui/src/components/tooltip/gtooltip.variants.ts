import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  'absolute invisible group-hover:visible z-50 px-2 py-1 text-xs text-white bg-gray-800 rounded-md transition-all duration-200 opacity-0 group-hover:opacity-100 whitespace-nowrap shadow-md pointer-events-none',
  {
    variants: {
      position: {
        top: '-top-8 left-1/2 -translate-x-1/2',
        bottom: '-bottom-8 left-1/2 -translate-x-1/2',
        left: 'top-1/2 -right-full mr-2 -translate-y-1/2',
        right: 'top-1/2 -left-full ml-2 -translate-y-1/2',
      },
    },
    defaultVariants: {
      position: 'right',
    },
  }
);
