import React, { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@genossys-erp/ui/utils';
import {
  checkboxVariants,
  iconVariants,
  labelVariants,
} from './checkbox.variants';

export interface CheckboxProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, size, disabled, isError, ...props }, ref) => {
    return (
      <label
        className={cn(
          'relative inline-flex items-center gap-2',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="peer absolute h-0 w-0 opacity-0"
          disabled={!!disabled}
          {...props}
        />

        <span
          className={cn(
            checkboxVariants({
              size,
              isError,
              disabled,
              className,
            })
          )}
        >
          <svg
            className={cn(iconVariants({ size }))}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>

        {label && (
          <span className={cn(labelVariants({ size, disabled }))}>{label}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'GCheckbox';

export default Checkbox;
export { Checkbox };
