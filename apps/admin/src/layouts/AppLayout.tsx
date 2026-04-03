import React from 'react';
import { Outlet } from 'react-router-dom';
import { GLayoutProvider } from '@genpos/ui/context/layout';
import { GSidebar, GSidebarItem } from '@genpos/ui/sidebar';
import { GNavbar } from '@genpos/ui/navbar';
import { GContent } from '@genpos/ui/container';
import { 
  LuLayoutDashboard, 
  LuPackage, 
  LuUsers, 
  LuShoppingCart, 
  LuSettings,
  LuLogOut
} from '@genpos/ui/icons';

const AppLayout: React.FC = () => {
  return (
    <GLayoutProvider>
      <div className="flex min-h-screen bg-stone-50/50">
        <GSidebar 
          footer={
            <div className="flex items-center gap-3 px-2 py-1">
              <div className="w-8 h-8 rounded-full bg-stone-200 shrink-0" />
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-xs font-bold text-stone-800 truncate">Admin User</p>
                <p className="text-[10px] text-stone-500 truncate">admin@genpos.id</p>
              </div>
              <button className="text-stone-400 hover:text-red-500 transition-colors">
                <LuLogOut size={16} />
              </button>
            </div>
          }
        >
          <GSidebarItem 
            icon={LuLayoutDashboard} 
            label="Dashboard" 
            active 
          />
          <GSidebarItem 
            icon={LuPackage} 
            label="Products" 
          />
          <GSidebarItem 
            icon={LuUsers} 
            label="Customers" 
          />
          <GSidebarItem 
            icon={LuShoppingCart} 
            label="Transactions" 
          />
          <div className="py-2 px-3">
             <div className="h-px bg-stone-100 w-full" />
          </div>
          <GSidebarItem 
            icon={LuSettings} 
            label="Settings" 
          />
        </GSidebar>

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <GNavbar>
            <div className="flex items-center justify-between w-full px-4">
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold text-stone-800">Admin Panel</h1>
                <span className="text-xs text-stone-400">/</span>
                <span className="text-xs text-stone-500 font-medium">Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                {/* Navbar extras like notifications could go here */}
              </div>
            </div>
          </GNavbar>

          <GContent className="bg-transparent" innerClassName="bg-transparent">
            <Outlet />
          </GContent>
        </div>
      </div>
    </GLayoutProvider>
  );
};

export default AppLayout;
