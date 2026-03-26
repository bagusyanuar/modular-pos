import React from 'react';
import {
  containerVariants,
  inputVariants,
  iconContainerVariants,
} from './textfield.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
import type { IconType } from 'react-icons';

type ContainerVariants = VariantProps<typeof containerVariants>;

type InputVariants = VariantProps<typeof inputVariants>;

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isError?: ContainerVariants['isError'];
  prefixIcon?: IconType;
  suffixIcon?: IconType;
}
const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
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

export default Textfield;
