import type { Meta, StoryObj } from '@storybook/react';
import GFileUpload from './GFileUpload';
import { useState } from 'react';

const meta: Meta<typeof GFileUpload> = {
  title: 'Components/GFileUpload',
  component: GFileUpload,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    maxFiles: { control: 'number' },
    maxSize: { control: 'number' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof GFileUpload>;

export const Default: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    
    return (
      <div className="max-w-md">
        <GFileUpload
          {...args}
          files={files}
          onDrop={(acceptedFiles) => setFiles((prev) => [...prev, ...acceptedFiles])}
          onRemove={(fileToRemove) => setFiles((prev) => prev.filter(f => f !== fileToRemove))}
        />
      </div>
    );
  },
  args: {
    label: 'Upload Bukti Pembayaran',
    description: 'Format PNG atau JPG, maksimal 2MB',
  },
};

export const Multiple: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    
    return (
      <div className="max-w-md">
        <GFileUpload
          {...args}
          multiple
          files={files}
          onDrop={(acceptedFiles) => setFiles((prev) => [...prev, ...acceptedFiles])}
          onRemove={(fileToRemove) => setFiles((prev) => prev.filter(f => f !== fileToRemove))}
        />
      </div>
    );
  },
  args: {
    description: 'Bisa upload banyak file (Coba tarik gambar & pdf)',
  }
};

export const ImageOnly: Story = {
  args: {
    accept: { 'image/*': ['.png', '.jpg', '.jpeg'] },
    description: 'Hanya menerima format gambar (.png, .jpg)',
  },
};

export const ErrorState: Story = {
  args: {
    error: 'Ukuran file terlalu besar (Maksimal 5MB)',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
