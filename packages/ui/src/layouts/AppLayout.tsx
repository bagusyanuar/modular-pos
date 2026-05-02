import React from 'react';

import { Sidebar } from '@genossys-erp/ui/components/sidebar';
import { Navbar } from '@genossys-erp/ui/components/navbar';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <div className="h-dvh w-full bg-stone-100">
      <Sidebar />
      <Navbar />
      <main className="py-16 ps-64">
        <div className="w-full p-6">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
