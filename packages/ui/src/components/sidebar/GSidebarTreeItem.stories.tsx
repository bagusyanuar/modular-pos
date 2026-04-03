import type { Meta, StoryObj } from '@storybook/react';
import { GSidebar, GSidebarItem, GSidebarTreeItem } from './index';
import { LuLayoutDashboard, LuUsers, LuSettings, LuPackage, LuShoppingCart, LuHistory, LuPlus } from 'react-icons/lu';
import { MemoryRouter } from 'react-router-dom';
import React, { useState } from 'react';

const meta: Meta<typeof GSidebarTreeItem> = {
  title: 'Components/Sidebar/GSidebarTreeItem',
  component: GSidebarTreeItem,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="h-screen bg-gray-100 flex">
          <div className="w-64 bg-white border-r">
            <div className="p-4 space-y-1">
              <Story />
            </div>
          </div>
          <main className="flex-1 p-8">
            <h1 className="text-2xl font-bold">Main Content Area</h1>
          </main>
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GSidebarTreeItem>;

export const Default: Story = {
  args: {
    label: 'Inventory',
    icon: LuPackage,
    children: [
      <GSidebarItem key="1" label="All Products" icon={LuPackage} to="/inventory/all" />,
      <GSidebarItem key="2" label="Add New" icon={LuPlus} to="/inventory/add" />,
      <GSidebarItem key="3" label="History" icon={LuHistory} to="/inventory/history" />,
    ],
  },
};

export const WithActiveChild: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/sales/report']}>
        <div className="h-screen bg-gray-100 flex">
          <div className="w-64 bg-white border-r">
            <div className="p-4 space-y-1 text-gray-500">
               <Story />
            </div>
          </div>
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    label: 'Sales',
    icon: LuShoppingCart,
    defaultOpen: true,
    children: [
      <GSidebarItem key="1" label="Overview" icon={LuLayoutDashboard} to="/sales/overview" />,
      <GSidebarItem key="2" label="Reports" icon={LuHistory} to="/sales/report" />,
    ],
  },
};
