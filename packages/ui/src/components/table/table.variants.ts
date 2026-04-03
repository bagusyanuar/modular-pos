import { cva } from 'class-variance-authority';

export const tableVariants = cva(
  'w-full caption-bottom text-sm border-separate border-spacing-0',
  {
    variants: {
      striped: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      striped: false,
    },
  }
);

export const headerVariants = cva(
  'h-12 px-4 text-left align-middle font-semibold text-stone-500 bg-stone-50/50 border-b border-stone-200 transition-colors uppercase text-[10px] tracking-wider'
);

export const cellVariants = cva(
  'p-4 align-middle border-b border-stone-100 transition-colors group-hover:bg-stone-50/50'
);

export const rowVariants = cva(
  'group transition-colors data-[state=selected]:bg-orange-50/30'
);
