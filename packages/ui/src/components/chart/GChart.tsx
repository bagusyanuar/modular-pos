import * as React from 'react';
import { 
  ResponsiveContainer, 
  Tooltip as RechartsTooltip, 
  Legend as RechartsLegend,
  TooltipProps,
  LegendProps
} from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { VariantProps } from 'class-variance-authority';
import { chartContainerVariants } from './gchart.variants';
import { cn } from '../../utils/cn';

// 1. Root Component (Responsive Wrapper)
export interface GChartProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chartContainerVariants> {
  children?: React.ReactNode;
}

const GChartRoot = React.forwardRef<HTMLDivElement, GChartProps>(
  ({ className, height, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(chartContainerVariants({ height, className }))}
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children as any}
      </ResponsiveContainer>
    </div>
  )
);
GChartRoot.displayName = 'GChart';

// 2. Gradients Helper (to be used inside <BarChart> etc)
const GChartGradients = () => (
  <defs>
    {/* Primary - Income (Orange to Amber) */}
    <linearGradient id="income-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#f97316" stopOpacity={0.8} />
      <stop offset="100%" stopColor="#fbbf24" stopOpacity={0.6} />
    </linearGradient>

    {/* Secondary - Expense (Deep Orange to Brownish Orange) */}
    <linearGradient id="expense-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#7c2d12" stopOpacity={0.8} />
      <stop offset="100%" stopColor="#ea580c" stopOpacity={0.6} />
    </linearGradient>

    {/* Success - (Emerald) */}
    <linearGradient id="success-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
      <stop offset="100%" stopColor="#34d399" stopOpacity={0.6} />
    </linearGradient>
  </defs>
);

// 3. Custom Tooltip
const GChartTooltipContent = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/20 bg-white/80 p-3 shadow-xl backdrop-blur-md">
        <p className="mb-2 text-xs font-bold text-stone-900 uppercase tracking-wider">{label}</p>
        <div className="space-y-1.5">
          {payload.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="h-2 w-2 rounded-full" 
                style={{ backgroundColor: (item.color || item.fill) as string }} 
              />
              <span className="text-xs text-stone-500 font-medium">{item.name}:</span>
              <span className="text-xs font-bold text-stone-800">
                 {typeof item.value === 'number' ? item.value.toLocaleString('id-ID') : item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const GChartTooltip = (props: any) => (
  <RechartsTooltip 
    content={<GChartTooltipContent />} 
    cursor={{ fill: 'rgba(249, 115, 22, 0.05)', radius: 4 } as any}
    {...props} 
  />
);

// 4. Custom Legend
const GChartLegendContent = (props: any) => {
    const { payload } = props;
    if (!payload) return null;

    return (
        <div className="mt-4 flex flex-wrap gap-4">
            {payload.map((entry: any, index: number) => (
                <div key={index} className="flex items-center gap-2">
                    <div 
                        className="h-2 w-2 rounded-full" 
                        style={{ backgroundColor: entry.color }} 
                    />
                    <span className="text-xs font-medium text-stone-500">{entry.value}</span>
                </div>
            ))}
        </div>
    );
};

const GChartLegend = (props: any) => (
    <RechartsLegend 
        verticalAlign="bottom" 
        align="left" 
        content={<GChartLegendContent />} 
        {...props} 
    />
);

export const GChart = Object.assign(GChartRoot, {
  Gradients: GChartGradients,
  Tooltip: GChartTooltip,
  Legend: GChartLegend,
});
