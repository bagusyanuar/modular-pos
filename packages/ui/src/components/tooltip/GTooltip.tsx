import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { tooltipVariants } from './gtooltip.variants';
import { cn } from '../../utils';

interface GTooltipProps extends VariantProps<typeof tooltipVariants> {
  content: string;
  children: React.ReactNode;
  className?: string;
}

const GTooltip: React.FC<GTooltipProps> = ({
  content,
  children,
  position = 'right',
  className,
}) => {
  return (
    <div className="group relative inline-flex items-center">
      {children}
      <span className={cn(tooltipVariants({ position }), className)}>
        {content}
      </span>
    </div>
  );
};

export default GTooltip;
export { GTooltip };
