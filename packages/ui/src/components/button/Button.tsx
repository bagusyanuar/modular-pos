import React from 'react';
import { buttonVariants } from './button.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps {
  text: string;
  variant?: ButtonVariants['variant'];
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary' }) => {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
        })
      )}
    >
      {text}
    </button>
  );
};

export default Button;
