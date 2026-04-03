import type { Meta, StoryObj } from '@storybook/react';
import { GNavbar } from './index';
import { GSidebar, GSidebarItem } from '../sidebar';
import { LuLayoutDashboard, LuUsers, LuSearch, LuBell, LuMenu } from 'react-icons/lu';
import { MemoryRouter } from 'react-router-dom';
import React, { useState } from 'react';

const meta: Meta<typeof GNavbar> = {
  title: 'Components/Navbar/GNavbar',
  component: GNavbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-screen bg-gray-50 flex overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GNavbar>;

const LayoutTemplate: React.FC<any> = (args) => {
  return (
    <>
      <GSidebar>
        <GSidebarItem label="Dashboard" icon={LuLayoutDashboard} active />
        <GSidebarItem label="Users" icon={LuUsers} />
      </GSidebar>
      
      <GNavbar>
        <div className="flex items-center gap-4 w-full">
          <button className="text-gray-500 md:hidden">
            <LuMenu size={20} />
          </button>
          
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          
          <div className="ml-auto flex items-center gap-3">
             <div className="hidden md:flex relative group">
                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Cari sesuatu..." 
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-transparent focus:border-orange-200 focus:bg-white focus:ring-4 focus:ring-orange-500/5 rounded-xl transition-all outline-none text-sm w-64"
                />
             </div>
             
             <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-orange-600 transition-all relative">
                <LuBell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
             </button>
             
             <div className="w-px h-6 bg-gray-100 mx-1"></div>
             
             <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                   <p className="text-sm font-semibold text-gray-900 leading-tight">Bagus Yanuar</p>
                   <p className="text-xs text-gray-500">Super Admin</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold border border-orange-200 shadow-sm">
                   BY
                </div>
             </div>
          </div>
        </div>
      </GNavbar>
      
      <main className="flex-1 pt-20 p-8 transition-all duration-300 overflow-y-auto">
         <div className="h-[200vh]">
            <h1 className="text-3xl font-bold">Main Content Area</h1>
            <p className="text-gray-500 mt-4">Scroll down to see the sticky effects of Navbar and Sidebar.</p>
         </div>
      </main>
    </>
  );
};

const cn = (...classes: any) => classes.filter(Boolean).join(' ');

export const FullLayout: Story = {
  render: (args) => <LayoutTemplate {...args} />,
  args: {
    collapsed: false,
  }
};

export const FullLayoutCollapsed: Story = {
  render: (args) => <LayoutTemplate {...args} />,
  args: {
    collapsed: true,
  }
};
