import type { Meta, StoryObj } from '@storybook/react';
import { GSidebar, GSidebarItem } from './index';
import { LuLayoutDashboard, LuUsers, LuSettings, LuPackage, LuShoppingCart, LuLogOut } from 'react-icons/lu';
import { MemoryRouter } from 'react-router-dom';
import React, { useState } from 'react';

const meta: Meta<typeof GSidebar> = {
  title: 'Components/Sidebar/GSidebar',
  component: GSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-screen bg-gray-100 flex">
        <Story />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Main Content Area</h1>
          <p className="text-gray-500 mt-2">Content goes here...</p>
        </main>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GSidebar>;

const SidebarTemplate: React.FC<any> = (args) => {
  return (
    <GSidebar {...args}>
      <GSidebarItem 
        label="Dashboard" 
        icon={LuLayoutDashboard} 
        active 
      />
      <GSidebarItem 
        label="Orders" 
        icon={LuShoppingCart} 
        badge={12}
      />
      <GSidebarItem 
        label="Products" 
        icon={LuPackage} 
      />
      <GSidebarItem 
        label="Customers" 
        icon={LuUsers} 
      />
      <div className="pt-4 mt-4 border-t border-gray-100">
        <GSidebarItem 
          label="Settings" 
          icon={LuSettings} 
        />
      </div>
    </GSidebar>
  );
};

export const Default: Story = {
  render: (args) => <SidebarTemplate {...args} />,
  args: {
    collapsed: false,
    footer: (
      <div className="flex items-center gap-3 px-2">
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0">
          BY
        </div>
        <div className="flex-1 min-w-0 group-data-[collapsed=true]:hidden">
          <p className="text-sm font-semibold truncate text-gray-900">Bagus Yanuar</p>
          <p className="text-xs text-gray-500 truncate">Admin</p>
        </div>
        <button className="text-gray-400 hover:text-red-500 group-data-[collapsed=true]:hidden">
          <LuLogOut size={16} />
        </button>
      </div>
    )
  }
};

export const InitialCollapsed: Story = {
  render: (args) => <SidebarTemplate {...args} />,
  args: {
    collapsed: true,
  }
};
