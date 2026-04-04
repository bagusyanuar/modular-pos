import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { contentContainerVariants, innerContentVariants } from './gcontent.variants';
import { cn } from '../../utils';

interface GContentProps {
  children?: React.ReactNode;
  maxWidth?: VariantProps<typeof innerContentVariants>['maxWidth'];
  className?: string;
  innerClassName?: string;
}

const GContent: React.FC<GContentProps> = ({
  children,
  maxWidth = 'default',
  className,
  innerClassName,
}) => {
  return (
    <main className={cn(contentContainerVariants(), className)}>
      <div className={cn(innerContentVariants({ maxWidth }), innerClassName)}>
        {children}
      </div>
    </main>
  );
};

export default GContent;
export { GContent };
