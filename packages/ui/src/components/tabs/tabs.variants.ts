import { cva } from 'class-variance-authority';

export const tabsListVariants = cva(
  'inline-flex h-11 items-center justify-center rounded-lg bg-stone-100 p-1 text-stone-500'
);

export const tabsTriggerVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/20 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      active: {
        true: 'text-orange-600',
        false: 'text-stone-500 hover:text-stone-700',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
