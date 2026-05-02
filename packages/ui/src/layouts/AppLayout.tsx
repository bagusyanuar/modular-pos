import React from 'react';
import { LuStore, LuPanelLeft } from 'react-icons/lu';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <div className="h-dvh w-full bg-stone-100">
      <aside className="fixed z-30 flex h-dvh w-64 flex-col bg-orange-500">
        <div className="flex h-20 w-full items-center gap-3 px-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
            <LuStore className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="block text-lg leading-none font-bold text-white">
              Genossys
            </span>
            <span className="block text-xs leading-none font-light text-white/90">
              F&B ERP Solutions
            </span>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="h-24 border-t border-white/20 px-3"></div>
      </aside>
      <nav className="fixed top-0 z-20 h-16 w-full bg-stone-50 ps-64 shadow-sm">
        <div className="flex h-full w-full items-center justify-between px-6">
          <LuPanelLeft className="h-5 w-5 cursor-pointer text-neutral-500" />
          <div className="flex items-center gap-1.5">
            <div className="h-10 w-10 rounded-full border border-white bg-orange-500 shadow"></div>
          </div>
        </div>
      </nav>
      <main className="py-16 ps-64">
        <div className="w-full p-6">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
