import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { labelVariants } from './label.variants';
import { cn } from '../../utils';

export interface GLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
}

const GLabel = React.forwardRef<HTMLLabelElement, GLabelProps>(
  ({ className, size, disabled, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariants({ size, disabled, className }))}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-0.5 text-orange-500 font-bold">*</span>
        )}
      </label>
    );
  }
);

GLabel.displayName = 'GLabel';

export default GLabel;
export { GLabel };
