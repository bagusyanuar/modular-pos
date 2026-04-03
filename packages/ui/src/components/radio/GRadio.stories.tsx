import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GRadio } from './GRadio';

const meta = {
  title: 'Components/GRadio',
  component: GRadio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof GRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'demo-radio',
    value: '1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Option Selected',
    name: 'demo-radio-selected',
    value: '2',
    defaultChecked: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Invalid Option',
    variant: 'error',
    name: 'demo-radio-error',
    value: 'error',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    disabled: true,
    name: 'demo-radio-disabled',
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Option',
    disabled: true,
    defaultChecked: true,
    name: 'demo-radio-disabled-checked',
  },
};

export const RadioGroupDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <GRadio label="Pilih Apple" name="fruit" value="apple" defaultChecked />
      <GRadio label="Pilih Orange" name="fruit" value="orange" />
      <GRadio label="Pilih Banana" name="fruit" value="banana" />
      <GRadio label="Pilih Grape (Kosong)" name="fruit" value="grape" disabled />
    </div>
  ),
};
