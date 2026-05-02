import { AppLayout } from '@genpos/ui/layouts';
import { Outlet, Link, useLocation } from 'react-router';
import { LuLayoutDashboard, LuFolderArchive } from 'react-icons/lu';
import type { SidebarMenuItem } from '@genossys-erp/ui/components/sidebar';

const ERP_SIDEBAR_ITEMS: SidebarMenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LuLayoutDashboard,
    as: Link,
    to: '/dashboard',
  },
  {
    id: 'master-data',
    label: 'Master Data',
    icon: LuFolderArchive,
    items: [
      { id: 'branch', label: 'Cabang', as: Link, to: '/branch' },
      { id: 'category', label: 'Kategori', as: Link, to: '#' },
      { id: 'supplier', label: 'Supplier', as: Link, to: '#' },
    ],
  },
];

const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <AppLayout sidebarItems={ERP_SIDEBAR_ITEMS} currentPath={location.pathname}>
      <Outlet />
    </AppLayout>
  );
};

export default MainLayout;
