import type { Meta, StoryObj } from '@storybook/react';
import {
  GDialog,
  GDialogTrigger,
  GDialogContent,
  GDialogHeader,
  GDialogFooter,
  GDialogTitle,
  GDialogDescription,
} from './index';
import { GButton } from '../button';
import { GTextfield } from '../textfield';
import React from 'react';

const meta: Meta<typeof GDialog> = {
  title: 'Components/Overlay/GDialog',
  component: GDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GDialog>;

export const Default: Story = {
  render: () => (
    <GDialog>
      <GDialogTrigger asChild>
        <GButton variant="outline">Hapus Produk</GButton>
      </GDialogTrigger>
      <GDialogContent>
        <GDialogHeader>
          <GDialogTitle>Apakah Anda yakin?</GDialogTitle>
          <GDialogDescription>
            Tindakan ini tidak dapat dibatalkan. Produk akan dihapus permanen dari inventaris Anda.
          </GDialogDescription>
        </GDialogHeader>
        <GDialogFooter>
          <GButton variant="outline" className="sm:mr-2">Batal</GButton>
          <GButton variant="destructive">Ya, Hapus</GButton>
        </GDialogFooter>
      </GDialogContent>
    </GDialog>
  ),
};

export const WithForm: Story = {
  render: () => (
    <GDialog>
      <GDialogTrigger asChild>
        <GButton>Tambah Stok</GButton>
      </GDialogTrigger>
      <GDialogContent className="sm:max-w-[425px]">
        <GDialogHeader>
          <GDialogTitle>Input Stok Baru</GDialogTitle>
          <GDialogDescription>
            Masukkan jumlah stok yang masuk untuk produk ini.
          </GDialogDescription>
        </GDialogHeader>
        <div className="px-8 py-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Jumlah Stok</label>
            <GTextfield type="number" placeholder="Contoh: 50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Catatan (Opsional)</label>
            <GTextfield placeholder="Supplier ABC..." />
          </div>
        </div>
        <GDialogFooter>
          <GButton className="w-full">Simpan Perubahan</GButton>
        </GDialogFooter>
      </GDialogContent>
    </GDialog>
  ),
};

export const GlassmorphismTest: Story = {
  render: () => (
    <div className="relative p-10 bg-linear-to-br from-orange-400 to-rose-500 rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Background elements to see blur effect */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-bounce" />
      
      <GDialog>
        <GDialogTrigger asChild>
          <GButton className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-6 rounded-2xl shadow-xl">
            Uji Glassmorphism
          </GButton>
        </GDialogTrigger>
        <GDialogContent>
          <GDialogHeader>
            <GDialogTitle>Efek Glassmorphism</GDialogTitle>
            <GDialogDescription>
              Perhatikan bagaimana backdrop memburamkan konten di belakangnya secara elegan.
            </GDialogDescription>
          </GDialogHeader>
          <div className="px-8 py-6">
             <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                   !
                </div>
                <div>
                   <p className="text-sm font-bold text-gray-900">Info Penting</p>
                   <p className="text-xs text-gray-500">Backdrop menggunakan blur-md dan z-index aman.</p>
                </div>
             </div>
          </div>
          <GDialogFooter>
            <GButton className="w-full">Paham, Lanjutkan</GButton>
          </GDialogFooter>
        </GDialogContent>
      </GDialog>
    </div>
  ),
};
