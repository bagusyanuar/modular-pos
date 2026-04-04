import { useState, useEffect } from 'react';
import { toast } from '@genpos/ui/toast';
import { cookieStorage } from '@genpos/utils';

export const useLogin = () => {
  const [activeTab, setActiveTab] = useState('CASHIER');
  const [isLoading, setIsLoading] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [challenge, setChallenge] = useState<string | null>(null);

  useEffect(() => {
    // Tangkap code_challenge dari URL (PKCE Flow)
    const params = new URLSearchParams(window.location.search);
    const codeChallenge = params.get('code_challenge');
    if (codeChallenge) {
      setChallenge(codeChallenge);
    }
  }, []);

  const tabs = ['CASHIER', 'MANAGER', 'ADMIN'];

  const handleLogin = async () => {
    if (!identifier) {
      toast.error('Otentikasi Gagal', {
        description: 'ID Staf atau Email wajib diisi untuk membuka terminal.',
      });
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (identifier.toLowerCase().includes('admin')) {
      toast.success('Login Berhasil!', {
        description: `Selamat bekerja, Sesi ${activeTab} telah aktif.`,
      });

      // PKCE SIMULATION:
      // Di alur asli, server akan menyimpan challenge ini dan memetakannya ke code.
      // Kita langsung redirect balik dengan 'code' sementara.
      setTimeout(() => {
        const adminUrl = import.meta.env.VITE_ADMIN_URL || 'http://admin.genpos.test:3001';
        
        // Kirim auth_code (simulasi karcis sementara)
        const mockAuthCode = `code_${Math.random().toString(36).substring(7)}`;
        window.location.href = `${adminUrl}/dashboard?code=${mockAuthCode}`;
      }, 1000);
    } else {
      toast.error('Akses Ditolak', {
        description:
          'Kredensial tidak terdaftar dalam basis data terminal ini.',
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
