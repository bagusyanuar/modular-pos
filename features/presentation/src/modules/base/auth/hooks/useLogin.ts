import { useState, useEffect } from 'react';
import { toast } from '@genpos/ui/toast';
import { browserStorage } from '@genpos/utils';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [challenge, setChallenge] = useState<string | null>(null);

  useEffect(() => {
    // Tangkap code_challenge dari URL jika diarahkan dari Admin App
    const params = new URLSearchParams(window.location.search);
    const codeChallenge = params.get('code_challenge');
    if (codeChallenge) {
      setChallenge(codeChallenge);
    }
  }, []);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!identifier || !password) {
      toast.error('Data Belum Lengkap', {
        description: 'Email dan password wajib diisi Bang buat masuk.',
      });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implementasi hit API Monolith asli di sini (VITE_API_BASE_URL)
      // Simulasi delay jaringan
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Simulasi set kredensial di Dev Mode
      if (import.meta.env.DEV) {
        // Contoh simpan ke LocalStorage (Shared across apps on same origin/proxy)
        browserStorage.set('accessToken', 'dummy_access_token_12345');

        // Simulasi set cookie dummy jika dibutuhkan (biasanya dilakukan oleh BE via HttpOnly)
        const expires = new Date(Date.now() + 86400 * 1000).toUTCString();
        document.cookie = `accessToken=dummy_access_token; expires=${expires}; path=/; domain=${import.meta.env.VITE_SESSION_DOMAIN || '.genpos.test'}`;
      }

      toast.success('Login Berhasil!', {
        description: 'Selamat datang kembali di Genossys Dashboard.',
      });

      // Ambil base URL admin dari env
      const adminUrl =
        import.meta.env.VITE_ADMIN_URL || 'http://genpos.test:3000';

      // Delay sebentar biar user sempat baca toast
      setTimeout(() => {
        if (challenge) {
          // PKCE Flow: Redirect balik bawa auth_code (simulasi)
          const mockAuthCode = `code_${Math.random().toString(36).substring(7)}`;
          // Redirect ke root Admin (karena rute dashboard belum dibuat)
          window.location.href = `${adminUrl}/dashboard?code=${mockAuthCode}`;
        } else {
          // Direct Login Flow: Langsung ke root dashboard
          window.location.href = `${adminUrl}/dashboard`;
        }
      }, 800);
    } catch (error) {
      console.error('Login Error:', error);
      toast.error('Otentikasi Gagal', {
        description: 'Cek lagi email sama password-nya ya Bang.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    identifier,
    setIdentifier,
    password,
    setPassword,
    handleLogin,
  };
};
