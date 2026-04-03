import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GTypography } from './GTypography';

const meta = {
  title: 'Components/GTypography',
  component: GTypography,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'lead', 'large', 'small', 'muted'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'destructive', 'white', 'muted'],
    },
  },
} satisfies Meta<typeof GTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <GTypography variant="h1">h1. GenPOS System Heading</GTypography>
      <GTypography variant="h2">h2. GenPOS System Heading</GTypography>
      <GTypography variant="h3">h3. GenPOS System Heading</GTypography>
      <GTypography variant="h4">h4. GenPOS System Heading</GTypography>
      <GTypography variant="large">large. Are you sure you want to delete this item?</GTypography>
      <GTypography variant="p">
        p. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
      </GTypography>
      <GTypography variant="lead">
        lead. This is a lead paragraph designed to stand out a bit more than a regular paragraph.
      </GTypography>
      <GTypography variant="blockquote">
        blockquote. "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
      </GTypography>
      <GTypography variant="small">small. Email address must be valid.</GTypography>
      <GTypography variant="muted">muted. We will not share your email with anyone else.</GTypography>
    </div>
  ),
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <GTypography variant="h3" color="default">Default Text Color</GTypography>
      <GTypography variant="h3" color="primary">Primary (Orange) Text Color</GTypography>
      <GTypography variant="h3" color="destructive">Destructive (Red) Text Color</GTypography>
      <div className="bg-neutral-900 p-4 rounded-md">
        <GTypography variant="h3" color="white">White Text Color on Dark BG</GTypography>
      </div>
    </div>
  ),
};
