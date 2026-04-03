import React from 'react';
import { cn } from '../../utils';
import { textareaVariants } from './gtextarea.variants';
import { type VariantProps } from 'class-variance-authority';

export interface GTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  helperText?: string;
}

const GTextarea = React.forwardRef<HTMLTextAreaElement, GTextareaProps>(
  ({ className, isError, label, helperText, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-xs font-semibold text-stone-700 ml-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(textareaVariants({ isError }), className)}
          {...props}
        />
        {helperText && (
          <p className={cn("text-[10px] ml-1", isError ? "text-red-500" : "text-stone-400")}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

GTextarea.displayName = 'GTextarea';

export { GTextarea };
