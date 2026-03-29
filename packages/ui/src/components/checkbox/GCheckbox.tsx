import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  isError?: boolean;
}

const GCheckbox = forwardRef<HTMLInputElement, IProps>(
  ({ label, disabled = false, isError = false, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 cursor-pointer relative">
        <input
          ref={ref}
          type="checkbox"
          className="peer absolute opacity-0 w-0 h-0"
          disabled={disabled}
          {...props}
        />

        <span
          className={twMerge(
            'h-5 w-5 rounded-sm border border-neutral-400 flex items-center justify-center transition peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100',
            disabled &&
              'border-neutral-400 bg-neutral-200 peer-[&:checked:disabled]:bg-neutral-200 peer-[&:checked:disabled]:border-neutral-400',
            isError && 'border-red-500 peer-checked:border-red-500'
          )}
        >
          <svg
            className="
                            w-3.5 h-3.5
                            text-white
                            opacity-0
                            transition-all duration-150
                            peer-checked:[&_svg]:opacity-100
                        "
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
          <span className="text-sm text-neutral-700 select-none">{label}</span>
        )}
      </label>
    );
  }
);

export default GCheckbox;
