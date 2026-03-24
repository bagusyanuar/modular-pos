import React from 'react';
import type { IconType } from 'react-icons';
import { buttonVariants } from './button.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps {
  text: string;
  variant?: ButtonVariants['variant'];
  prefixIcon?: IconType;
  suffixIcon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
}) => {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
        })
      )}
    >
      <>
        {PrefixIcon && <PrefixIcon size={14} />}
        {text}
        {SuffixIcon && <SuffixIcon size={14} />}
      </>
    </button>
  );
};

export default Button;
