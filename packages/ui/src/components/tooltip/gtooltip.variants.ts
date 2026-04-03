import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  [
    'absolute invisible group-hover:visible z-50 px-3 py-1.5 text-xs font-medium',
    'bg-white border border-stone-200 text-stone-950 rounded-lg shadow-md whitespace-nowrap',
    'transition-all duration-200 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100',
    'pointer-events-none after:content-[""] after:absolute after:w-2 after:h-2 after:bg-white after:border-stone-200 after:rotate-45',
  ].join(' '),
  {
    variants: {
      position: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2 after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:border-r after:border-b',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2 after:top-[-5px] after:left-1/2 after:-translate-x-1/2 after:border-l after:border-t',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2 after:right-[-5px] after:top-1/2 after:-translate-y-1/2 after:border-r after:border-t',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2 after:left-[-5px] after:top-1/2 after:-translate-y-1/2 after:border-l after:border-b',
      },
    },
    defaultVariants: {
      position: 'top',
    },
  }
);
