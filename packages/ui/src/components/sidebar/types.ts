import React from 'react';

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: React.ElementType;
  as?: React.ElementType;
  href?: string;
  to?: string;
  active?: boolean;
  items?: SidebarMenuItem[];
}

export interface SidebarProps {
  items: SidebarMenuItem[];
  currentPath?: string;
}
