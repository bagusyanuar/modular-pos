import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { labelVariants } from './label.variants';
import { cn } from '@genossys-erp/ui/utils';

export interface LabelProps
  extends
    React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, disabled, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariants({ size, disabled, className }))}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-0.5 font-bold text-orange-500">*</span>
        )}
      </label>
    );
  }
);

Label.displayName = 'GLabel';

export default Label;
export { Label };
