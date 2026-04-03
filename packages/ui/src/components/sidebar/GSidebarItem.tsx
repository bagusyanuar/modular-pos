import React from 'react';
import { NavLink } from 'react-router-dom';
import type { IconType } from 'react-icons';
import { sidebarItemVariants } from './gsidebar.variants';
import { cn } from '../../utils';
import { GTooltip } from '../tooltip';

interface GSidebarItemProps {
  label: string;
  icon: IconType;
  to?: string;
  active?: boolean;
  collapsed?: boolean;
  badge?: string | number;
  onClick?: () => void;
  className?: string;
  isChild?: boolean;
}

const GSidebarItem: React.FC<GSidebarItemProps> = ({
  label,
  icon: Icon,
  to,
  active = false,
  collapsed = false,
  badge,
  onClick,
  className,
  isChild = false,
}) => {
  const renderContent = (isActive: boolean) => (
    <div
      className={cn(
        sidebarItemVariants({
          active: isActive,
          collapsed,
          isChild,
        }),
        className
      )}
      onClick={onClick}
    >
      <Icon
        size={20}
        className={cn(
          'transition-transform duration-200 group-hover:scale-110',
          isActive ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-600'
        )}
      />
      {!collapsed && (
        <>
          <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
            {label}
          </span>
          {badge && (
            <span className="flex items-center justify-center min-w-5 h-5 px-1.5 text-[10px] font-bold text-white bg-orange-500 rounded-full ring-2 ring-white">
              {badge}
            </span>
          )}
        </>
      )}
    </div>
  );

  const wrapWithTooltip = (content: React.ReactNode) =>
    collapsed ? (
      <GTooltip content={label} position="right">
        {content}
      </GTooltip>
    ) : (
      content
    );

  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn('block outline-none w-full', (isActive || active) && 'active', collapsed && 'flex justify-center')
        }
      >
        {({ isActive }) => wrapWithTooltip(renderContent(isActive || active))}
      </NavLink>
    );
  }

  return wrapWithTooltip(renderContent(active));
};

export default GSidebarItem;
export { GSidebarItem };
