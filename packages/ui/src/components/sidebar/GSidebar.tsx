import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { sidebarVariants } from './gsidebar.variants';
import { cn } from '../../utils';
import { LuChevronLeft, LuStore } from 'react-icons/lu';
import { useGLayout } from '../../context/layout';

interface GSidebarProps {
  children: React.ReactNode;
  collapsed?: boolean;
  onToggle?: () => void;
  logo?: React.ReactNode;
  version?: string;
  footer?: React.ReactNode;
  className?: string;
}

const GSidebar: React.FC<GSidebarProps> = ({
  children,
  collapsed: propsCollapsed,
  onToggle: propsOnToggle,
  logo,
  version,
  footer,
  className,
}) => {
  const { collapsed: contextCollapsed, toggleSidebar } = useGLayout();
  const collapsed = propsCollapsed !== undefined ? propsCollapsed : contextCollapsed;
  const onToggle = propsOnToggle || toggleSidebar;
  return (
    <>
      <>
        <aside className={cn(sidebarVariants({ collapsed }), className)}>
          {/* Header / Logo */}
          <div className={cn(
            "h-20 flex items-center border-b border-gray-50 shrink-0 px-6 overflow-hidden",
            collapsed && "px-3 justify-center"
          )}>
            {logo ? (
              logo
            ) : (
              <div className={cn("flex items-center gap-3", collapsed && "gap-0")}>
                 <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-200 shrink-0">
                   <LuStore size={20} strokeWidth={2.5} />
                 </div>
                 
                 <div className={cn(
                   "flex flex-col transition-all duration-300 origin-left",
                   collapsed && "scale-0 opacity-0 w-0"
                 )}>
                    <span className="font-extrabold text-lg tracking-tight text-orange-600 leading-none">
                      Gen<span className="text-gray-900">POS</span>
                    </span>
                    {version && (
                      <span className="text-[10px] font-bold text-gray-400 mt-0.5 tracking-widest uppercase">
                        v{version}
                      </span>
                    )}
                 </div>
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
              "absolute -right-3 top-7 w-6 h-6 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm z-10",
              collapsed && "rotate-180"
            )}
          >
            <LuChevronLeft size={14} />
          </button>
        </aside>

        {/* Backdrop for Mobile */}
        {!collapsed && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={onToggle}
          />
        )}
      </>
    </>
  );
};

export default GSidebar;
export { GSidebar };
