import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cardVariants, cardHeaderVariants, cardContentVariants, cardFooterVariants } from './gcard.variants';
import { cn } from '../../utils/cn';

export interface GCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const GCardRoot = React.forwardRef<HTMLDivElement, GCardProps>(
  ({ className, variant, hover, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, hover, className }))}
      {...props}
    />
  )
);
GCardRoot.displayName = 'GCard';

// Header
export interface GCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

const GCardHeader = React.forwardRef<HTMLDivElement, GCardHeaderProps>(
  ({ className, noSeparator, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ noSeparator, className }))}
      {...props}
    />
  )
);
GCardHeader.displayName = 'GCard.Header';

// Content
export interface GCardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

const GCardContent = React.forwardRef<HTMLDivElement, GCardContentProps>(
  ({ className, compact = false, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(cardContentVariants({ compact, className }))} 
      {...props} 
    />
  )
);
GCardContent.displayName = 'GCard.Content';

// Footer
const GCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardFooterVariants(), className)}
    {...props}
  />
));
GCardFooter.displayName = 'GCard.Footer';

// Title & Description (Utilities)
const GCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight text-stone-900', className)}
    {...props}
  />
));
GCardTitle.displayName = 'GCard.Title';

const GCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-stone-500', className)}
    {...props}
  />
));
GCardDescription.displayName = 'GCard.Description';

export const GCard = Object.assign(GCardRoot, {
  Header: GCardHeader,
  Content: GCardContent,
  Footer: GCardFooter,
  Title: GCardTitle,
  Description: GCardDescription,
});
