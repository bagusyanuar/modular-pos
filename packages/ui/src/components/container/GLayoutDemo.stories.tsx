import type { Meta, StoryObj } from '@storybook/react';
import { GContent } from './index';
import { GSidebar, GSidebarItem, GSidebarTreeItem } from '../sidebar';
import { GNavbar } from '../navbar';
import { GLayoutProvider } from '../../context/layout';
import {
  LuLayoutDashboard,
  LuUsers,
  LuSearch,
  LuBell,
  LuMenu,
  LuPackage,
  LuHistory,
  LuPlus,
  LuSettings,
  LuLogOut,
} from 'react-icons/lu';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

const meta: Meta<typeof GContent> = {
  title: 'Layout/GLayoutDemo',
  component: GContent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GContent>;

const FullLayoutTemplate: React.FC<any> = (args) => {
  return (
    <div className="h-screen flex overflow-hidden">
      <GSidebar version="1.0.1">
        <GSidebarItem label="Dashboard" icon={LuLayoutDashboard} active />
        <GSidebarTreeItem label="Inventory" icon={LuPackage}>
          <GSidebarItem
            label="All Products"
            icon={LuPackage}
            to="/inventory/all"
          />
          <GSidebarItem label="Add New" icon={LuPlus} to="/inventory/add" />
        </GSidebarTreeItem>
        <GSidebarItem label="History" icon={LuHistory} />
        <GSidebarItem label="Users" icon={LuUsers} />
        <div className="pt-4 mt-4 border-t border-gray-100">
          <GSidebarItem label="Settings" icon={LuSettings} />
        </div>
      </GSidebar>

      <div className="flex-1 flex flex-col min-w-0">
        <GNavbar>
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-lg font-semibold text-gray-800">Layout Demo</h2>
            <div className="ml-auto flex items-center gap-3">
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-all">
                <LuBell size={20} />
              </button>
              <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold border border-orange-200">
                BY
              </div>
            </div>
          </div>
        </GNavbar>

        <GContent maxWidth={args.maxWidth} className="overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-64 border-b-4 border-b-orange-500/10 hover:border-b-orange-500"
              >
                <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
                  <LuPackage size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Card Item #{i + 1}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam non nisl at sem finibus elementum.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-orange-600 font-bold text-lg">
                    Rp 120.000
                  </span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-xl text-xs font-bold hover:bg-orange-600 transition-all">
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </GContent>
      </div>
    </div>
  );
};

export const FinalLayout: Story = {
  render: (args) => <FullLayoutTemplate {...args} />,
  args: {
    collapsed: false,
    maxWidth: 'default',
  },
};
