import type { Meta, StoryObj } from '@storybook/react';
import { FaPlus } from 'react-icons/fa';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    text: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Ghost Button',
    variant: 'ghost',
  },
};

export const WithPrefixIcon: Story = {
  args: {
    text: 'Button with Icon',
    variant: 'primary',
    prefixIcon: FaPlus,
  },
};

export const WithSuffixIcon: Story = {
  args: {
    text: 'Button with Icon',
    variant: 'primary',
    suffixIcon: FaPlus,
  },
};

// export const Link: Story = {
//   args: {
//     text: 'Link Button',
//     variant: 'link',
//   },
// };
