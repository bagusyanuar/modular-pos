import type { Meta, StoryObj } from '@storybook/react';
import { GTextarea } from './GTextarea';

const meta: Meta<typeof GTextarea> = {
  title: 'Components/Forms/GTextarea',
  component: GTextarea,
  tags: ['autodocs'],
  argTypes: {
    isError: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof GTextarea>;

export const Default: Story = {
  args: {
    placeholder: 'Silakan masukkan detail catatan Anda di sini...',
    label: 'Catatan Tambahan',
    helperText: 'Informasi tambahan yang ingin Anda sampaikan.',
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Silakan masukkan detail catatan Anda di sini...',
    label: 'Catatan Tambahan',
    isError: true,
    helperText: 'Input ini wajib diisi dengan benar.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Area teks ini dinonaktifkan.',
    label: 'Catatan Terkunci',
    disabled: true,
  },
};
