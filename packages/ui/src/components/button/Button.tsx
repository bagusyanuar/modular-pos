import React from 'react';
import type { IconType } from 'react-icons';
import { LuLoader } from 'react-icons/lu';
import { buttonVariants } from './button.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@genossys-erp/ui/utils';

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  className,
  loading = false,
  disabled = false,
  loadingText = 'Loading...',
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
          loading,
          disabled,
        }),
        className
      )}
      disabled={loading || (disabled ?? undefined)}
      type={type}
      {...props}
    >
      {!loading ? (
        <>
          {PrefixIcon && <PrefixIcon size={14} />}
          {children}
          {SuffixIcon && <SuffixIcon size={14} />}
        </>
      ) : (
        <>
          <LuLoader className="h-3.5 w-3.5 animate-spin" />
          <span>{loadingText}</span>
        </>
      )}
    </button>
  );
};

export default Button;
export { Button };
