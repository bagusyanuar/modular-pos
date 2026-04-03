import type { Meta, StoryObj } from '@storybook/react';
import { GTabs } from './GTabs';
import { GBadge } from '../badge/GBadge';
import { LuUser, LuLock, LuSettings, LuMessageSquare } from 'react-icons/lu';

const meta: Meta<typeof GTabs.Root> = {
  title: 'Components/Navigation/GTabs',
  component: GTabs.Root,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GTabs.Root>;

export const Default: Story = {
  render: () => (
    <GTabs.Root defaultValue="account">
      <GTabs.List>
        <GTabs.Trigger value="account">Account</GTabs.Trigger>
        <GTabs.Trigger value="password">Password</GTabs.Trigger>
        <GTabs.Trigger value="settings">Settings</GTabs.Trigger>
      </GTabs.List>
      
      <GTabs.Content value="account">
        <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-stone-800 mb-2">Account Profile</h3>
          <p className="text-stone-500 text-sm">Update your public profile and account details here.</p>
        </div>
      </GTabs.Content>
      
      <GTabs.Content value="password">
        <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-stone-800 mb-2">Password</h3>
          <p className="text-stone-500 text-sm">Change your password and secure your account.</p>
        </div>
      </GTabs.Content>
      
      <GTabs.Content value="settings">
        <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-stone-800 mb-2">General Settings</h3>
          <p className="text-stone-500 text-sm">Manage your application preferences and notifications.</p>
        </div>
      </GTabs.Content>
    </GTabs.Root>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <GTabs.Root defaultValue="profile">
      <GTabs.List>
        <GTabs.Trigger value="profile" className="gap-2">
          <LuUser className="h-4 w-4" />
          Profile
        </GTabs.Trigger>
        <GTabs.Trigger value="security" className="gap-2">
          <LuLock className="h-4 w-4" />
          Security
        </GTabs.Trigger>
        <GTabs.Trigger value="messages" className="gap-2">
          <LuMessageSquare className="h-4 w-4" />
          Messages
          <GBadge variant="primary" className="ml-1 px-1.5 py-0">3</GBadge>
        </GTabs.Trigger>
        <GTabs.Trigger value="advanced" className="gap-2">
          <LuSettings className="h-4 w-4" />
          Advanced
        </GTabs.Trigger>
      </GTabs.List>
      
      <div className="mt-4 p-8 border-2 border-dashed border-stone-100 rounded-2xl flex items-center justify-center text-stone-300 font-medium italic">
        Content area for demonstrating sliding animation
      </div>
    </GTabs.Root>
  ),
};
