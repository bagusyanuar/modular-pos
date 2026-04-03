import React from 'react';
import { cn } from '../../utils';

interface GSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  circle?: boolean;
}

export function GSkeleton({ className, circle, ...props }: GSkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-stone-200/60',
        circle ? 'rounded-full' : 'rounded-md',
        className
      )}
      {...props}
    />
  );
}
