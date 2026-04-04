import { cva } from 'class-variance-authority';

export const statCardVariants = cva(
  'relative overflow-hidden rounded-xl border p-6 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white border-slate-200 shadow-sm hover:shadow-md',
        glass: 'bg-white/10 backdrop-blur-md border-white/20 shadow-xl hover:bg-white/20',
        primary: 'bg-orange-50 border-orange-100 hover:border-orange-200',
        success: 'bg-emerald-50 border-emerald-100 hover:border-emerald-200',
        danger: 'bg-rose-50 border-rose-100 hover:border-rose-200',
        info: 'bg-blue-50 border-blue-100 hover:border-blue-200',
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
