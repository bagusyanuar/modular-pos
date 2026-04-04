import { cva } from 'class-variance-authority';

export const chartContainerVariants = cva(
  'w-full transition-all duration-300 relative',
  {
    variants: {
      height: {
        sm: 'h-[200px]',
        default: 'h-[300px]',
        md: 'h-[400px]',
        lg: 'h-[500px]',
      },
    },
    defaultVariants: {
      height: 'default',
    },
  }
);
