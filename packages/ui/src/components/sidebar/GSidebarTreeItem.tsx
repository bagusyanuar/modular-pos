import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { IconType } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { LuChevronDown } from 'react-icons/lu';
import { sidebarItemVariants } from './gsidebar.variants';
import { cn } from '../../utils';
import { GTooltip } from '../tooltip';

interface GSidebarTreeItemProps {
  label: string;
  icon: IconType;
  children: React.ReactNode;
  collapsed?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

const GSidebarTreeItem: React.FC<GSidebarTreeItemProps> = ({
  label,
  icon: Icon,
  children,
  collapsed = false,
  defaultOpen = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [hasActiveChild, setHasActiveChild] = useState(false);
  const location = useLocation();

  // Check if any child NavLink is active
  useEffect(() => {
    // This is a simple check. In a real app, we might need a more robust way 
    // to check children's active state if they are deep.
    // Since it's only 2 levels, we can inspect the DOM or use a context.
    // For now, we'll assume the user manages the 'active' prop if needed, 
    // but we'll try to detect it via location if possible.
    
    // We can't easily inspect children props in React 19 without some hacks,
    // so we'll look for any child that has an 'active' class or matching 'to' path.
    // Better approach: use a Context to track active states in the Sidebar.
    // For this MVP, we'll leave it to the user or a simple check.
  }, [location.pathname, children]);

  // Handle auto-expand if any child is active (mock logic for now)
  const isAnyChildActive = React.Children.toArray(children).some((child) => {
    if (React.isValidElement(child)) {
      const childrenProps = child.props as any;
      if (childrenProps.to && location.pathname === childrenProps.to) return true;
      if (childrenProps.active) return true;
    }
    return false;
  });

  const active = isAnyChildActive;

  const toggleOpen = () => {
    if (!collapsed) {
      setIsOpen(!isOpen);
    }
  };

  const parentContent = (
    <div
      className={cn(
        sidebarItemVariants({
          active: active,
          collapsed,
        }),
        className
      )}
      onClick={toggleOpen}
    >
      <Icon
        size={20}
        className={cn(
          'transition-transform duration-200 group-hover:scale-110',
          active ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-600'
        )}
      />
      {!collapsed && (
        <>
          <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
            {label}
          </span>
          <LuChevronDown
            size={16}
            className={cn(
              "transition-transform duration-300 text-gray-400",
              isOpen && "rotate-180"
            )}
          />
        </>
      )}
    </div>
  );

  const TooltipWrapper = collapsed ? (
    <GTooltip content={label} position="right">
      {parentContent}
    </GTooltip>
  ) : (
    parentContent
  );

  return (
    <div className={cn("flex flex-col w-full", collapsed && "items-center")}>
      {TooltipWrapper}
      
      {!collapsed && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-1 space-y-1">
                {React.Children.map(children, (child) => {
                  if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                      isChild: true,
                      collapsed: false, // Children are always expanded when visible in tree
                    });
                  }
                  return child;
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default GSidebarTreeItem;
export { GSidebarTreeItem };
