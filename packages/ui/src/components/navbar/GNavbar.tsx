import React from 'react';
import { LuMenu } from 'react-icons/lu';
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
  const { collapsed: contextCollapsed, toggleSidebar } = useGLayout();
  const collapsed = propsCollapsed !== undefined ? propsCollapsed : contextCollapsed;
  return (
    <header className={cn(navbarVariants({ collapsed }), className)}>
      <div className="flex-1 h-full flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 -ml-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-orange-500 transition-colors"
        >
          <LuMenu size={24} />
        </button>
        {children}
      </div>
    </header>
  );
};

export default GNavbar;
export { GNavbar };
