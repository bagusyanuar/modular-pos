import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  'group relative flex items-center border rounded-lg transition-color ease-in-out duration-300',
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

export const inputVariants = cva('!py-2.5 !px-0 !m-0 !text-xs', {
  variants: {
    hasPrefixIcon: {
      true: 'ps-0',
      false: 'ps-3.5',
    },
  },
  defaultVariants: {
    hasPrefixIcon: false,
  },
});

export const iconContainerVariants = cva(
  'h-full text-gray-400 transition-colors group-focus-within:text-gray-700 ps-3 pe-2.5'
);
