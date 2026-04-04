import { cva } from 'class-variance-authority';

export const statCardVariants = cva(
  'relative overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300 shadow-sm hover:shadow-md',
  {
    variants: {
      variant: {
        default: 'border-slate-200',
        glass: 'backdrop-blur-md border-white/20',
        primary: 'border-orange-100 hover:border-orange-200',
        success: 'border-emerald-100 hover:border-emerald-200',
        danger: 'border-rose-100 hover:border-rose-200',
        info: 'border-blue-100 hover:border-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const statIconVariants = cva(
  'flex h-12 w-12 items-center justify-center rounded-lg mb-4',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 text-slate-600',
        glass: 'bg-white/20 text-white',
        primary: 'bg-orange-100 text-orange-600',
        success: 'bg-emerald-100 text-emerald-600',
        danger: 'bg-rose-100 text-rose-600',
        info: 'bg-blue-100 text-blue-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
