import { useState } from 'react';
import { toast } from '@genpos/ui/toast';

export const useLogin = () => {
  const [activeTab, setActiveTab] = useState('CASHIER');
  const [isLoading, setIsLoading] = useState(false);
  const [identifier, setIdentifier] = useState('');

  const tabs = ['CASHIER', 'MANAGER', 'ADMIN'];

  const handleLogin = async () => {
    if (!identifier) {
      toast.error('Otentikasi Gagal', {
        description: 'ID Staf atau Email wajib diisi untuk membuka terminal.',
      });
      return;
    }

    setIsLoading(true);

    // Simulasi delay jaringan/proses autentikasi
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (identifier.toLowerCase().includes('admin')) {
      toast.success('Login Berhasil!', {
        description: `Selamat bekerja, Sesi ${activeTab} telah aktif.`,
      });
    } else {
      toast.error('Akses Ditolak', {
        description: 'Kredensial tidak terdaftar dalam basis data terminal ini.',
      });
    }

    setIsLoading(false);
  };

  return {
    activeTab,
    setActiveTab,
    isLoading,
    identifier,
    setIdentifier,
    handleLogin,
    tabs,
  };
};

export default useLogin;
