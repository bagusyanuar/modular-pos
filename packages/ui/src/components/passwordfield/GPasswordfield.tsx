import React, { useState, type HTMLInputTypeAttribute } from 'react';
import {
  containerVariants,
  inputVariants,
  iconContainerVariants,
} from './gpasswordfield.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
import type { IconType } from 'react-icons';
import { LuEye, LuEyeOff } from 'react-icons/lu';

type ContainerVariants = VariantProps<typeof containerVariants>;

interface GPasswordfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isError?: ContainerVariants['isError'];
  disabled?: boolean;
  prefixIcon?: IconType;
}
const GPasswordfield = React.forwardRef<HTMLInputElement, GPasswordfieldProps>(
  (
    {
      className,
      isError = false,
      disabled = false,
      prefixIcon: PrefixIcon,
      ...props
    },
    ref
  ) => {
    const [type, setType] = useState<HTMLInputTypeAttribute>('password');

    const handleChangeType = () => {
      if (!disabled) {
        setType((prev) => (prev === 'password' ? 'text' : 'password'));
      }
    };
    return (
      <div
        className={cn(
          containerVariants({
            isError,
          }),
          className
        )}
      >
        {PrefixIcon && (
          <div className={cn(iconContainerVariants())}>
            <PrefixIcon size={14} />
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            inputVariants({
              isError: isError,
              hasPrefixIcon: !!PrefixIcon,
            })
          )}
          type={type}
          {...props}
        />
        <div className={cn(iconContainerVariants())} onClick={handleChangeType}>
          {type === 'password' ? <LuEye size={14} /> : <LuEyeOff size={14} />}
        </div>
      </div>
    );
  }
);

export default GPasswordfield;
