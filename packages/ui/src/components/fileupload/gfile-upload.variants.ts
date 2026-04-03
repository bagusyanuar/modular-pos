import { cva } from 'class-variance-authority';

export const fileUploadVariants = cva(
  'relative flex flex-col items-center justify-center w-full border-2 border-dashed rounded-xl transition-all duration-300 ease-in-out cursor-pointer min-h-[200px] gap-4 p-6 text-center',
  {
    variants: {
      status: {
        default: 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-orange-500/50',
        active: 'border-orange-500 bg-orange-50/50 ring-4 ring-orange-500/10',
        disabled: 'opacity-50 cursor-not-allowed bg-stone-100 border-stone-200',
        error: 'border-red-500 bg-red-50/50 ring-4 ring-red-500/10',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  }
);
