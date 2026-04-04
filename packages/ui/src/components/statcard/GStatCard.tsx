import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import type { VariantProps } from 'class-variance-authority';
import { statCardVariants, statIconVariants } from './gstatcard.variants';
import { cn } from '../../utils/cn';
import { LuArrowUpRight, LuArrowDownRight } from '../../icons';

export interface GStatCardProps
  extends Omit<HTMLMotionProps<'div'>, 'title'>,
    VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    label?: string;
    isUpward?: boolean;
  };
  suffix?: string;
}

const GStatCard = React.forwardRef<HTMLDivElement, GStatCardProps>(
  ({ className, variant, title, value, icon, trend, suffix, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(statCardVariants({ variant, className }))}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className={cn(
              "text-sm font-medium",
              variant === 'glass' ? "text-white/70" : "text-slate-500"
            )}>
              {title}
            </p>
            <div className="mt-2 flex items-baseline gap-1">
              <h3 className={cn(
                "text-2xl font-bold tracking-tight",
                variant === 'glass' ? "text-white" : "text-slate-900"
              )}>
                {value}
              </h3>
              {suffix && (
                <span className={cn(
                  "text-sm font-medium",
                  variant === 'glass' ? "text-white/60" : "text-slate-400"
                )}>
                  {suffix}
                </span>
              )}
            </div>
          </div>

          {icon && (
            <div className={cn(statIconVariants({ variant }))}>
              {icon}
            </div>
          )}
        </div>

        {trend && (
          <div className="mt-4 flex items-center gap-2">
            <div className={cn(
              "flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold",
              trend.isUpward 
                ? "bg-emerald-100 text-emerald-700" 
                : "bg-rose-100 text-rose-700"
            )}>
              {trend.isUpward ? <LuArrowUpRight size={14} /> : <LuArrowDownRight size={14} />}
              {trend.value}%
            </div>
            {trend.label && (
              <span className={cn(
                "text-xs",
                variant === 'glass' ? "text-white/60" : "text-slate-400"
              )}>
                {trend.label}
              </span>
            )}
          </div>
        )}

        {/* Decorative element for premium vibe */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-500/5 blur-3xl transition-all group-hover:bg-orange-500/10" />
      </motion.div>
    );
  }
);

GStatCard.displayName = 'GStatCard';

export { GStatCard };
