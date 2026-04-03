import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { navbarVariants } from './gnavbar.variants';
import { cn } from '../../utils';
import { useGLayout } from '../../context/layout';

interface GNavbarProps {
  children?: React.ReactNode;
  collapsed?: boolean;
  className?: string;
}

const GNavbar: React.FC<GNavbarProps> = ({
  children,
  collapsed: propsCollapsed,
  className,
}) => {
  const { collapsed: contextCollapsed } = useGLayout();
  const collapsed = propsCollapsed !== undefined ? propsCollapsed : contextCollapsed;
  return (
    <header className={cn(navbarVariants({ collapsed }), className)}>
      <div className="flex-1 h-full flex items-center gap-4">
        {children}
      </div>
    </header>
  );
};

export default GNavbar;
export { GNavbar };
