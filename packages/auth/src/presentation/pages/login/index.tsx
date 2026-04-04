import React, { useEffect } from 'react';
import { Illustration, FormLogin } from '../../components';
import { cookieStorage } from '@genpos/utils';

const LoginPage = () => {
  useEffect(() => {
    // 1. Cek apakah sudah ada session cookie
    const token = cookieStorage.get('access_token');
    
    // 2. Cek apakah ini BUKAN bagian dari PKCE Flow (tidak ada challenge di URL)
    const params = new URLSearchParams(window.location.search);
    const hasChallenge = params.has('code_challenge');

    if (token && !hasChallenge) {
      const adminUrl = import.meta.env.VITE_ADMIN_URL || 'http://admin.genpos.test:3001';
      window.location.href = `${adminUrl}/dashboard`;
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center p-4">
      {/* Wrapper */}
      <div className="w-full max-w-5xl bg-white rounded-4xl shadow-2xl flex overflow-hidden min-h-[600px]">
        <Illustration />
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
