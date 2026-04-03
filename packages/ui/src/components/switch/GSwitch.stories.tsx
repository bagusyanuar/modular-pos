import type { Meta, StoryObj } from '@storybook/react';
import { GSwitch } from './index';
import React from 'react';

const meta: Meta<typeof GSwitch> = {
  title: 'Components/Form/GSwitch',
  component: GSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GSwitch>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const WithRightLabel: Story = {
  args: {
    rightLabel: 'Aktifkan Diskon',
    defaultChecked: true,
  },
};

export const WithLeftLabel: Story = {
  args: {
    leftLabel: 'Mode Gelap',
    defaultChecked: false,
  },
};

export const WithBothLabels: Story = {
  args: {
    leftLabel: 'Off',
    rightLabel: 'On',
    defaultChecked: false,
  },
};

export const Disabled: Story = {
  args: {
    rightLabel: 'Fitur Terkunci',
    disabled: true,
  },
};

export const CustomStyle: Story = {
  args: {
    rightLabel: 'Custom Label Style',
    labelClassName: 'text-orange-600 font-bold italic',
    defaultChecked: true,
  },
};
