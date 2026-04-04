import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { contentContainerVariants, innerContentVariants } from './gcontent.variants';
import { cn } from '../../utils';
import { useGLayout } from '../../context/layout';

interface GContentProps {
  children?: React.ReactNode;
  collapsed?: boolean;
  maxWidth?: VariantProps<typeof innerContentVariants>['maxWidth'];
  className?: string;
  innerClassName?: string;
}

const GContent: React.FC<GContentProps> = ({
  children,
  collapsed: propsCollapsed,
  maxWidth = 'default',
  className,
  innerClassName,
}) => {
  const { collapsed: contextCollapsed } = useGLayout();
  const collapsed = propsCollapsed !== undefined ? propsCollapsed : contextCollapsed;
  
  return (
    <main className={cn(contentContainerVariants({ collapsed }), className)}>
      <div className={cn(innerContentVariants({ maxWidth }), innerClassName)}>
        {children}
      </div>
    </main>
  );
};

export default GContent;
export { GContent };
