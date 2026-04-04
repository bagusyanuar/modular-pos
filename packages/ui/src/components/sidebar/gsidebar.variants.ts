import { cva } from 'class-variance-authority';

export const sidebarItemVariants = cva(
  'group flex items-center rounded-lg transition-all duration-200 cursor-pointer text-sm font-medium relative',
  {
    variants: {
      active: {
        true: 'bg-orange-50 text-orange-600 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-6 after:bg-orange-500 after:rounded-l-full',
        false: 'text-gray-500 hover:bg-gray-50 hover:text-gray-900',
      },
      collapsed: {
        true: 'justify-center w-10 h-10 mx-auto',
        false: 'w-full gap-3 px-3 py-2',
      },
      isChild: {
        true: 'pl-11 py-1.5 text-xs text-gray-500 hover:text-orange-500',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
      collapsed: false,
      isChild: false,
    },
  }
);

export const sidebarVariants = cva(
  [
    'fixed top-0 left-0 h-screen flex flex-col bg-white border-r border-gray-100 transition-all duration-300 ease-in-out z-50 shrink-0 shadow-xl md:shadow-none',
  ].join(' '),
  {
    variants: {
      collapsed: {
        true: 'w-20 max-lg:-translate-x-full lg:translate-x-0 max-lg:fixed',
        false: 'w-64 max-lg:translate-x-0 max-lg:fixed',
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
);
