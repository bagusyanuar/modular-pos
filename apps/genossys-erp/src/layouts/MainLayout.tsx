import React from 'react';
import { AppLayout } from '@genpos/ui/layouts';
import { Outlet } from 'react-router';
const MainLayout: React.FC = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default MainLayout;
