import React, { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { radioVariants, dotVariants } from './gradio.variants';
import { cn } from '../../utils/cn';

export interface GRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioVariants> {
  label?: string;
}

const GRadio = forwardRef<HTMLInputElement, GRadioProps>(
  ({ className, variant, label, disabled = false, ...props }, ref) => {
    return (
      <label
        className={cn(
          'inline-flex items-center gap-2 cursor-pointer relative group w-fit',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          className="peer absolute opacity-0 w-0 h-0"
          disabled={disabled}
          {...props}
        />

        {/* Custom Radio UI */}
        <span
          className={cn(
            radioVariants({ variant }),
            disabled && 'bg-neutral-100 peer-checked:bg-neutral-100'
          )}
        >
          {/* Inner Dot */}
          <span
            className={cn(
              dotVariants({ variant }),
              disabled && 'bg-neutral-400 peer-checked:bg-neutral-400'
            )}
          />
        </span>

        {label && (
          <span className="text-sm text-neutral-700 select-none group-disabled:text-neutral-500">
            {label}
          </span>
        )}
      </label>
    );
  }
);

GRadio.displayName = 'GRadio';

export default GRadio;
export { GRadio };
