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

export const inputVariants = cva('!py-2.5 !m-0 !text-xs !text-neutral-700', {
  variants: {
    hasPrefixIcon: {
      true: '!ps-0',
      false: '!ps-3.5',
    },
    isSearchable: {
      true: '!cursor-text',
      false: '!cursor-pointer',
    },
  },
  defaultVariants: {
    hasPrefixIcon: false,
  },
});

export const iconContainerVariants = cva(
  'h-full text-gray-400 transition-colors group-focus-within:text-gray-700 ps-3 pe-2.5'
);

export const dropdownIndicatorVariants = cva('!ps-2.5 !pe-2.5 !h-fit', {
  variants: {
    hasClearIndicator: {
      true: '!ps-0',
      false: '!ps-2.5',
    },
  },
  defaultVariants: {
    hasClearIndicator: false,
  },
});
