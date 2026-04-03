import type { Meta, StoryObj } from '@storybook/react';
import { GTooltip } from './index';

const meta: Meta<typeof GTooltip> = {
  title: 'Components/Tooltip/GTooltip',
  component: GTooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GTooltip>;

export const Right: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button className="px-4 py-2 bg-gray-200 rounded">Hover me (Right)</button>,
    position: 'right',
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    children: <button className="px-4 py-2 bg-gray-200 rounded">Hover me (Top)</button>,
    position: 'top',
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip at bottom',
    children: <button className="px-4 py-2 bg-gray-200 rounded">Hover me (Bottom)</button>,
    position: 'bottom',
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    children: <button className="px-4 py-2 bg-gray-200 rounded">Hover me (Left)</button>,
    position: 'left',
  },
};
