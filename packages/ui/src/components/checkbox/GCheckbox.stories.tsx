import type { Meta, StoryObj } from '@storybook/react';
import GCheckbox from './GCheckbox';

const meta: Meta<typeof GCheckbox> = {
  title: 'Components/GCheckbox',
  component: GCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    isError: {
      control: 'boolean',
      description: 'Whether the checkbox is in an error state',
    },
    checked: {
        control: 'boolean',
        description: 'Whether the checkbox is checked',
    }
  },
} satisfies Meta<typeof GCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Saya Belum Centang',
    disabled: false,
    isError: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Saya Sudah Centang',
    checked: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Error state',
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled state',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and Checked',
    disabled: true,
    checked: true,
  },
};
