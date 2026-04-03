import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../../utils';
import { popoverContentVariants } from './gpopover.variants';

const GPopover = PopoverPrimitive.Root;

const GPopoverTrigger = PopoverPrimitive.Trigger;

const GPopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(popoverContentVariants(), className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
GPopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { GPopover, GPopoverTrigger, GPopoverContent };
