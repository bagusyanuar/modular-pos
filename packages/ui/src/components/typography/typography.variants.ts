import { cva } from 'class-variance-authority';

export const typographyVariants = cva(
  'm-0', // reset margin
  {
    variants: {
      variant: {
        h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        h2: 'scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        p: 'leading-7',
        blockquote: 'border-l-2 pl-6 italic text-neutral-600',
        lead: 'text-xl text-neutral-500',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-sm text-neutral-500',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      color: {
        default: 'text-neutral-900',
        primary: 'text-orange-500',
        destructive: 'text-red-500',
        white: 'text-white',
        muted: 'text-neutral-500',
      },
    },
    defaultVariants: {
      variant: 'p',
      color: 'default',
    },
  }
);
