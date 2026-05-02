import React from 'react';
import { LuStore, LuLayoutDashboard, LuFolderArchive } from 'react-icons/lu';
import SidebarItem from './SidebarItem';
import SidebarTreeItem from './SidebarTreeItem';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed z-30 flex h-dvh w-64 flex-col bg-orange-500 shadow-xl">
      <div className="flex h-20 w-full items-center gap-3 px-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg">
          <LuStore className="h-6 w-6 text-orange-600" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="block text-lg leading-none font-bold text-white">
            Genossys
          </span>
          <span className="block text-xs leading-none font-light tracking-widest text-white/90">
            ERP Solutions
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <SidebarItem
          icon={LuLayoutDashboard}
          label="Dashboard"
          active
          href="#"
        />
        <SidebarTreeItem icon={LuFolderArchive} label="Master Data">
          <SidebarItem label="Produk" href="#" />
          <SidebarItem label="Kategori" href="#" />
          <SidebarItem label="Supplier" href="#" />
        </SidebarTreeItem>
      </div>
      <div className="h-24 border-t border-white/20 px-3"></div>
    </aside>
  );
};

export default Sidebar;
