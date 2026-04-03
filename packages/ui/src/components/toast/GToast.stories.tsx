import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GToast, toast } from './index';
import { GButton } from '../button';

const meta = {
  title: 'Components/GToast',
  component: GToast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <GToast />
      <div className="flex flex-wrap gap-2">
        <GButton
          text="Show Default Toast"
          onClick={() => toast('Event has been created')}
        />
        <GButton
          text="Show Success Toast"
          onClick={() => toast.success('Operation successful')}
        />
        <GButton
          text="Show Warning Toast"
          onClick={() => toast.warning('Balance is low')}
        />
        <GButton
          text="Show Error Toast"
          onClick={() =>
            toast.error('Something went wrong', {
              description: 'Please try again later.',
            })
          }
        />
        <GButton
          text="Show Action Toast"
          onClick={() =>
            toast('New message received', {
              action: {
                label: 'View',
                onClick: () => console.log('View clicked'),
              },
            })
          }
        />
      </div>
    </div>
  ),
};
