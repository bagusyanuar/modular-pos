import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { tooltipVariants } from './gtooltip.variants';
import { cn } from '../../utils';

export interface GTooltipProps extends VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  delay?: number; // Added for future use, mapping to CSS transition-delay if needed
}

const GTooltip: React.FC<GTooltipProps> = ({
  content,
  children,
  position = 'top',
  className,
}) => {
  return (
    <div className="group relative inline-flex items-center justify-center">
      {children}
      <div 
        role="tooltip"
        className={cn(tooltipVariants({ position }), className)}
      >
        {content}
      </div>
    </div>
  );
};

export default GTooltip;
export { GTooltip };
