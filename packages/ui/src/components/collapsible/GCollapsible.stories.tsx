import type { Meta, StoryObj } from '@storybook/react';
import { GCollapsible } from './GCollapsible';

const meta: Meta<typeof GCollapsible> = {
  title: 'Components/GCollapsible',
  component: GCollapsible,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof GCollapsible>;

export const Default: Story = {
  render: (args) => (
    <div className="max-w-md">
      <GCollapsible {...args}>
        <GCollapsible.Trigger>Apa itu GenPOS?</GCollapsible.Trigger>
        <GCollapsible.Content>
          GenPOS adalah sistem Point of Sales (Kasir) modern berbasis monorepo yang dibangun dengan
          React 19 dan Tailwind CSS v4. Sistem ini dirancang untuk kecepatan dan skalabilitas bisnis.
        </GCollapsible.Content>
      </GCollapsible>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="max-w-md space-y-3">
      <GCollapsible>
        <GCollapsible.Trigger>Metode Pembayaran</GCollapsible.Trigger>
        <GCollapsible.Content>
          Tersedia QRIS, Transfer Bank, dan Tunai. Proses transaksi dijamin aman dan cepat.
        </GCollapsible.Content>
      </GCollapsible>
      <GCollapsible>
        <GCollapsible.Trigger>Integrasi Printer</GCollapsible.Trigger>
        <GCollapsible.Content>
          Mendukung printer thermal Bluetooth maupun USB untuk mencetak struk belanja.
        </GCollapsible.Content>
      </GCollapsible>
      <GCollapsible>
        <GCollapsible.Trigger>Manajemen Stok</GCollapsible.Trigger>
        <GCollapsible.Content>
          Kelola stok barang secara real-time di semua cabang toko Anda dengan mudah.
        </GCollapsible.Content>
      </GCollapsible>
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <div className="max-w-md">
      <GCollapsible>
        <GCollapsible.Trigger showIcon={false}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="font-bold uppercase tracking-wider text-xs">Informasi Penting</span>
          </div>
        </GCollapsible.Trigger>
        <GCollapsible.Content>
          Jangan lupa lakukan tutup buku setiap hari sebelum pukul 23:59 WIB.
        </GCollapsible.Content>
      </GCollapsible>
    </div>
  ),
};
