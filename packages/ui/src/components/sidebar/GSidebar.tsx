import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { sidebarVariants } from './gsidebar.variants';
import { cn } from '../../utils';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

interface GSidebarProps extends VariantProps<typeof sidebarVariants> {
  children: React.ReactNode;
  collapsed: boolean;
  onToggle: () => void;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const GSidebar: React.FC<GSidebarProps> = ({
  children,
  collapsed = false,
  onToggle,
  logo,
  footer,
  className,
}) => {
  return (
    <aside className={cn(sidebarVariants({ collapsed }), className)}>
      {/* Header / Logo */}
      <div className={cn(
        "h-16 flex items-center border-b border-gray-50 shrink-0 px-6",
        collapsed && "px-0 justify-center"
      )}>
        {logo ? (
          logo
        ) : (
          <span className={cn(
            "font-extrabold text-xl tracking-tight text-orange-600 transition-all duration-300",
            collapsed && "scale-0 opacity-0 w-0"
          )}>
            Gen<span className="text-gray-900">POS</span>
          </span>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
            GP
          </div>
        )}
      </div>

      {/* Navigation Content */}
      <nav className={cn(
        "flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 space-y-1 custom-scrollbar",
        collapsed && "px-0 flex flex-col items-center"
      )}>
        {children}
      </nav>

      {/* Footer / User Profile */}
      {footer && (
        <div className={cn(
          "p-4 border-t border-gray-50 bg-gray-50/50",
          collapsed && "px-0 flex justify-center"
        )}>
          {footer}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={cn(
          "absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm z-10",
          collapsed && "rotate-180"
        )}
      >
        <LuChevronLeft size={14} />
      </button>
    </aside>
  );
};

export default GSidebar;
export { GSidebar };
