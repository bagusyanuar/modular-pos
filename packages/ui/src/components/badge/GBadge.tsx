import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-stone-100 text-stone-900',
        primary: 'border-transparent bg-orange-100 text-orange-700',
        success: 'border-transparent bg-emerald-100 text-emerald-700',
        warning: 'border-transparent bg-amber-100 text-amber-700 font-medium',
        error: 'border-transparent bg-red-100 text-red-700',
        outline: 'text-stone-950 border-stone-200 bg-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface GBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function GBadge({ className, variant, icon, children, ...props }: GBadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </div>
  );
}

export { GBadge, badgeVariants };
