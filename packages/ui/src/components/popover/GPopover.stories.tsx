import type { Meta, StoryObj } from '@storybook/react';
import { GPopover, GPopoverTrigger, GPopoverContent } from './index';
import { LuLogOut, LuUser, LuSettings } from 'react-icons/lu';
import React from 'react';

const meta: Meta<typeof GPopover> = {
  title: 'Components/Popover/GPopover',
  component: GPopover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GPopover>;

export const Default: Story = {
  render: () => (
    <GPopover>
      <GPopoverTrigger asChild>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all outline-none">
          Open Popover
        </button>
      </GPopoverTrigger>
      <GPopoverContent>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 leading-none">Settings Menu</h4>
          <p className="text-sm text-gray-500">
            This popover adapts its position automatically to fit the screen.
          </p>
        </div>
      </GPopoverContent>
    </GPopover>
  ),
};

export const UserProfileMenu: Story = {
  render: () => (
    <GPopover>
      <GPopoverTrigger asChild>
        <button className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-gray-100 transition-all outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold border-2 border-white shadow-sm">
            BY
          </div>
          <div className="hidden md:block text-left">
             <p className="text-sm font-semibold text-gray-900 leading-tight">Bagus Yanuar</p>
             <p className="text-xs text-gray-500">Cashier</p>
          </div>
        </button>
      </GPopoverTrigger>
      <GPopoverContent align="end" sideOffset={8} className="w-56 p-2">
        <div className="px-2 py-1.5 text-sm font-semibold text-gray-900">
          My Account
        </div>
        <div className="h-px bg-gray-100 my-1 -mx-2" />
        <button className="w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors outline-none cursor-pointer">
          <LuUser size={16} />
          Profile
        </button>
        <button className="w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors outline-none cursor-pointer">
          <LuSettings size={16} />
          Settings
        </button>
        <div className="h-px bg-gray-100 my-1 -mx-2" />
        <button className="w-full flex items-center gap-2 px-2 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors outline-none cursor-pointer">
          <LuLogOut size={16} />
          Logout
        </button>
      </GPopoverContent>
    </GPopover>
  ),
};
