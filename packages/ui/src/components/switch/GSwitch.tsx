import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '../../utils';
import { switchVariants, switchThumbVariants } from './gswitch.variants';

interface GSwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  leftLabel?: string;
  rightLabel?: string;
  labelClassName?: string;
}

const GSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  GSwitchProps
>(({ className, leftLabel, rightLabel, labelClassName, ...props }, ref) => {
  const switchId = React.useId();
  
  const switchComponent = (
    <SwitchPrimitives.Root
      id={switchId}
      className={cn(switchVariants(), className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={cn(switchThumbVariants())} />
    </SwitchPrimitives.Root>
  );

  if (!leftLabel && !rightLabel) {
    return switchComponent;
  }

  return (
    <div className="flex items-center gap-3">
      {leftLabel && (
        <label
          htmlFor={switchId}
          className={cn(
            "text-sm font-medium text-gray-700 cursor-pointer select-none",
            labelClassName
          )}
        >
          {leftLabel}
        </label>
      )}
      {switchComponent}
      {rightLabel && (
        <label
          htmlFor={switchId}
          className={cn(
            "text-sm font-medium text-gray-700 cursor-pointer select-none",
            labelClassName
          )}
        >
          {rightLabel}
        </label>
      )}
    </div>
  );
});

GSwitch.displayName = SwitchPrimitives.Root.displayName;

export { GSwitch };
