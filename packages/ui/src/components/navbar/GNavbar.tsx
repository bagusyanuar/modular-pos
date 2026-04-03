import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { navbarVariants } from './gnavbar.variants';
import { cn } from '../../utils';

interface GNavbarProps extends VariantProps<typeof navbarVariants> {
  children?: React.ReactNode;
  collapsed?: boolean;
  className?: string;
}

const GNavbar: React.FC<GNavbarProps> = ({
  children,
  collapsed = false,
  className,
}) => {
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
