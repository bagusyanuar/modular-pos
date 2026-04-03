import { cva } from 'class-variance-authority';

export const collapsibleVariants = cva(
  'w-full bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300',
  {
    variants: {
      status: {
        open: 'border-orange-500',
        closed: 'hover:border-stone-300',
      },
    },
    defaultVariants: {
      status: 'closed',
    },
  }
);

export const collapsibleTriggerVariants = cva(
  'flex w-full items-center justify-between p-4 text-left font-medium text-stone-700 hover:text-stone-950 transition-colors',
  {
    variants: {
      status: {
        open: 'bg-stone-50/50',
        closed: '',
      },
    },
    defaultVariants: {
      status: 'closed',
    },
  }
);
