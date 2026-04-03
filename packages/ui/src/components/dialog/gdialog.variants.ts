import { cva } from 'class-variance-authority';

export const dialogOverlayVariants = cva(
  'fixed inset-0 z-50 bg-black/40 backdrop-blur-md data-[state=open]:animate-dialog-overlay-enter data-[state=closed]:animate-dialog-overlay-exit'
);

export const dialogContentVariants = cva(
  'fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border border-gray-100/50 bg-white/95 backdrop-blur-xl p-0 shadow-[0_20px_50px_rgba(0,0,0,0.2)] duration-200 data-[state=open]:animate-dialog-content-enter data-[state=closed]:animate-dialog-content-exit rounded-lg outline-none overflow-hidden'
);

export const dialogHeaderVariants = cva(
  'flex flex-col space-y-1.5 text-center sm:text-left px-8 pt-8 pb-4'
);

export const dialogFooterVariants = cva(
  'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 px-8 pb-8 pt-4 bg-gray-50/50'
);

export const dialogTitleVariants = cva(
  'text-xl font-bold leading-none tracking-tight text-gray-900'
);

export const dialogDescriptionVariants = cva(
  'text-sm text-gray-500'
);
