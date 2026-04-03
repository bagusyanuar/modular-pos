import type { Meta, StoryObj } from '@storybook/react';
import { GSidebarItem } from './index';
import { LuLayoutDashboard, LuUsers, LuSettings, LuPackage, LuShoppingCart } from 'react-icons/lu';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof GSidebarItem> = {
  title: 'Components/Sidebar/GSidebarItem',
  component: GSidebarItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 p-4 bg-white border rounded-xl">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GSidebarItem>;

export const Default: Story = {
  args: {
    label: 'Dashboard',
    icon: LuLayoutDashboard,
    active: false,
    collapsed: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Users',
    icon: LuUsers,
    active: true,
    collapsed: false,
  },
};

export const WithBadge: Story = {
  args: {
    label: 'Orders',
    icon: LuShoppingCart,
    active: false,
    collapsed: false,
    badge: 5,
  },
};

export const Collapsed: Story = {
  args: {
    label: 'Inventory',
    icon: LuPackage,
    active: false,
    collapsed: true,
  },
};

export const CollapsedActive: Story = {
  args: {
    label: 'Settings',
    icon: LuSettings,
    active: true,
    collapsed: true,
  },
};
