import React from 'react';
import type { IconType } from 'react-icons';
import { LuLoader } from 'react-icons/lu';
import { buttonVariants } from './gbutton.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

export interface GButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
  loadingText?: string;
}

const GButton: React.FC<GButtonProps> = ({
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
          <LuLoader className="w-3.5 h-3.5 animate-spin" />
          <span>{loadingText}</span>
        </>
      )}
    </button>
  );
};

export default GButton;
export { GButton };
