import { cva } from 'class-variance-authority';

export const popoverContentVariants = cva(
  'z-50 w-72 rounded-2xl bg-white/95 backdrop-blur-xl p-4 text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100/50 outline-none data-[state=open]:animate-popover-enter data-[state=closed]:animate-popover-exit origin-top'
);
