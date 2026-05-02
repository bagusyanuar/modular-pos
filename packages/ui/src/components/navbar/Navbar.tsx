import React from 'react';
import { LuPanelLeft, LuBell } from 'react-icons/lu';
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-20 h-16 w-full bg-stone-100 ps-64 shadow-md">
      <div className="flex h-full w-full items-center justify-between px-6">
        <LuPanelLeft className="h-5 w-5 cursor-pointer text-neutral-500" />
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <LuBell className="h-5 w-5 cursor-pointer text-neutral-500" />
            <div className="absolute top-1 right-1 flex h-1.5 w-1.5 items-center justify-center rounded-full bg-red-500 text-xs text-white"></div>
          </div>
          <div className="relative h-8 w-8 rounded-full border-2 border-white shadow-lg">
            <img
              src="https://i.pravatar.cc/300"
              alt="image-profile-user"
              className="h-full w-full rounded-full object-cover"
            />
            <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
