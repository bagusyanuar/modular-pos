import React from 'react';
import {
  containerVariants,
  inputVariants,
  iconContainerVariants,
} from './gtextfield.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
import type { IconType } from 'react-icons';

type ContainerVariants = VariantProps<typeof containerVariants>;

interface GTextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isError?: ContainerVariants['isError'];
  prefixIcon?: IconType;
  suffixIcon?: IconType;
}
const GTextfield = React.forwardRef<HTMLInputElement, GTextfieldProps>(
  (
    {
      className,
      isError = false,
      prefixIcon: PrefixIcon,
      suffixIcon: SuffixIcon,
      ...props
    },
    ref
  ) => {
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
          <div
            className={cn(
              iconContainerVariants({
                type: 'prefix',
              })
            )}
          >
            <PrefixIcon size={14} />
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            inputVariants({
              isError: isError,
              hasPrefixIcon: !!PrefixIcon,
              hasSuffixIcon: !!SuffixIcon,
            })
          )}
          {...props}
        />
        {SuffixIcon && (
          <div
            className={cn(
              iconContainerVariants({
                type: 'suffix',
              })
            )}
          >
            <SuffixIcon size={14} />
          </div>
        )}
      </div>
    );
  }
);

export default GTextfield;
