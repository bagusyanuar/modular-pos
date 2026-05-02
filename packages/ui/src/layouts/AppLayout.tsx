import React from 'react';

import { Sidebar } from '@genossys-erp/ui/components/sidebar';
import { Navbar } from '@genossys-erp/ui/components/navbar';
import type { SidebarMenuItem } from '@genossys-erp/ui/components/sidebar';

interface IAppLayoutProps {
  children: React.ReactNode;
  sidebarItems?: SidebarMenuItem[];
  currentPath?: string;
}

const AppLayout: React.FC<IAppLayoutProps> = ({
  children,
  sidebarItems = [],
  currentPath,
}) => {
  return (
    <div className="h-dvh w-full bg-stone-100">
      <Sidebar items={sidebarItems} currentPath={currentPath} />
      <Navbar />
      <main className="py-16 ps-64">
        <div className="w-full p-6">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
