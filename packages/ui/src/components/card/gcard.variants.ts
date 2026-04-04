import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'rounded-xl border transition-all duration-300 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-white border-stone-200 shadow-sm',
        glass: 'bg-white/10 backdrop-blur-md border-white/20 shadow-xl',
        ghost: 'bg-transparent border-transparent shadow-none',
        outline: 'bg-transparent border-stone-200',
      },
      hover: {
        true: 'hover:shadow-md hover:border-stone-300',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'default',
      hover: false,
    },
  }
);

export const cardHeaderVariants = cva(
  'flex flex-row items-center justify-between p-6 pb-4 gap-4',
  {
    variants: {
        noSeparator: {
            true: '',
            false: 'border-b border-stone-100',
        }
    },
    defaultVariants: {
        noSeparator: true,
    }
  }
);

export const cardContentVariants = cva(
  'p-6 pt-0',
  {
    variants: {
      compact: {
        true: 'p-4',
        false: 'p-6',
      },
    },
    defaultVariants: {
      compact: false,
    },
  }
);

export const cardFooterVariants = cva(
  'flex items-center p-6 pt-0',
);
