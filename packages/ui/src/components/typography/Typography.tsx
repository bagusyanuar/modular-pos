import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { typographyVariants } from './typography.variants';
import { cn } from '@genossys-erp/ui/utils/cn';

export interface TypographyProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, align, weight, color, as, ...props }, ref) => {
    const defaultTagMap: Record<
      NonNullable<VariantProps<typeof typographyVariants>['variant']>,
      React.ElementType
    > = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      p: 'p',
      blockquote: 'blockquote',
      lead: 'p',
      large: 'div',
      small: 'small',
      muted: 'p',
    };

    // If 'as' is provided, use it. Otherwise use the default tag mapped to the variant, or 'p' if fallback.
    const Comp =
      as ||
      (variant ? defaultTagMap[variant as keyof typeof defaultTagMap] : 'p');

    return (
      <Comp
        className={cn(
          typographyVariants({ variant, align, weight, color, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = 'GTypography';

export default Typography;
export { Typography };
