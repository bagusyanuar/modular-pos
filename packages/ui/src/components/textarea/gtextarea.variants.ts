import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  'outline-none w-full min-h-[100px] py-2.5 px-3.5 placeholder:text-stone-400 text-sm border rounded-lg transition-all duration-300 bg-white ring-offset-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden',
  {
    variants: {
      isError: {
        true: 'border-red-500 text-red-500 focus-visible:border-red-500',
        false: 'border-stone-200 text-stone-700 focus-visible:border-orange-500',
      },
    },
    defaultVariants: {
      isError: false,
    },
  }
);
