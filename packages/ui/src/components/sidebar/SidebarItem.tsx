import React from 'react';
import { sidebarItemVariants, type SidebarItemVariants } from './sidebar.variants';
import { cn } from '../../utils/cn';

interface SidebarItemOwnProps<E extends React.ElementType> extends SidebarItemVariants {
  as?: E;
  icon?: React.ElementType;
  label: string;
}

type SidebarItemProps<E extends React.ElementType> = SidebarItemOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof SidebarItemOwnProps<E>>;

const SidebarItem = <E extends React.ElementType = 'a'>({
  as,
  icon: Icon,
  label,
  active,
  variant,
  className,
  children,
  ...props
}: SidebarItemProps<E>) => {
  const Component = as || 'a';

  return (
    <Component
      className={cn(sidebarItemVariants({ active, variant, className }))}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5 shrink-0" />}
      <span className="inline-block leading-none">{label}</span>
      {children}
    </Component>
  );
};

export default SidebarItem;
