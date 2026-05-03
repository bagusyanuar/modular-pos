import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  'group flex items-center border rounded-lg transition-color ease-in-out duration-300 overflow-hidden',
  {
    variants: {
      isError: {
        true: 'border-red-500',
        false: 'border-gray-400 focus-within:border-orange-500',
      },
    },
    defaultVariants: {
      isError: false,
    },
  }
);

export const inputVariants = cva(
  'outline-none w-full h-full pe-0 py-2.5 placeholder:text-gray-400 text-xs',
  {
    variants: {
      isError: {
        true: 'text-red-500',
        false: 'text-gray-500 focus:text-gray-700',
      },
      hasPrefixIcon: {
        true: 'ps-0',
        false: 'ps-3.5',
      },
    },
    defaultVariants: {
      isError: false,
      hasPrefixIcon: false,
    },
  }
);

export const iconContainerVariants = cva(
  'h-full ps-3 pe-2.5 text-gray-400 transition-colors group-focus-within:text-gray-700 cursor-pointer'
);
