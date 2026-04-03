import type { Meta, StoryObj } from '@storybook/react';
import { GSkeleton } from './GSkeleton';

const meta: Meta<typeof GSkeleton> = {
  title: 'Components/Feedback/GSkeleton',
  component: GSkeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GSkeleton>;

export const Default: Story = {
  args: {
    className: 'h-4 w-[250px]',
  },
};

export const Circle: Story = {
  args: {
    circle: true,
    className: 'h-12 w-12',
  },
};

export const Card: Story = {
  render: () => (
    <div className="flex items-center space-x-4 p-4 border border-stone-100 rounded-xl">
      <GSkeleton circle className="h-12 w-12" />
      <div className="space-y-2">
        <GSkeleton className="h-4 w-[250px]" />
        <GSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};
