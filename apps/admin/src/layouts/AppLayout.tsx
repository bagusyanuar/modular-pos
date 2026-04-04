import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { GLayoutProvider } from '@genpos/ui/context/layout';
import { GSidebar, GSidebarItem } from '@genpos/ui/sidebar';
import { GNavbar } from '@genpos/ui/navbar';
import { GContent } from '@genpos/ui/container';
import { cookieStorage, generateCodeVerifier, generateCodeChallenge } from '@genpos/utils';
import { 
  LuLayoutDashboard, 
  LuPackage, 
  LuUsers, 
  LuShoppingCart, 
  LuSettings,
  LuLogOut
} from '@genpos/ui/icons';

interface UserData {
  identifier: string;
  role: string;
  iat: number;
  exp: number;
}

const AppLayout: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      // 1. Ambil data dari SHARED COOKIE (.genpos.test)
      const token = cookieStorage.get<string>('access_token');
      
      if (token) {
        try {
          const decodedData = JSON.parse(atob(token)) as UserData;
          setUser(decodedData);
          return;
        } catch (error) {
          console.error('Gagal decode dummy JWT:', error);
        }
      }

      // 2. Jika tidak ada token, cek apakah ada 'code' di URL (Callback dari Auth)
      const authCode = searchParams.get('code');
      if (authCode) {
        // Ambil verifier dari sessionStorage (PKCE)
        const verifier = sessionStorage.getItem('code_verifier');
        
        if (verifier) {
          console.log('PKCE Handshake: Menukarkan code dengan token...', { authCode, verifier });
          
          // SIMULASI EXCHANGE (Di aslinya panggil API /token bawa code + verifier)
          const dummyPayload: UserData = {
            identifier: 'admin_pos',
            role: 'ADMIN',
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
          };
          const dummyJwt = btoa(JSON.stringify(dummyPayload));
          
          cookieStorage.set('access_token', dummyJwt);
          setUser(dummyPayload);
          
          // Bersihkan URL
          searchParams.delete('code');
          setSearchParams(searchParams, { replace: true });
          sessionStorage.removeItem('code_verifier');
          return;
        }
      }

      // 3. Jika benar-benar tidak login, INisiasi PKCE FLOW
      const verifier = generateCodeVerifier();
      const challenge = await generateCodeChallenge(verifier);
      
      // Simpan verifier di session storage (penting!)
      sessionStorage.setItem('code_verifier', verifier);
      
      // Redirect ke Auth server dengan challenge
      const authUrl = import.meta.env.VITE_AUTH_URL || 'http://auth.genpos.test:3000';
      window.location.href = `${authUrl}?code_challenge=${challenge}`;
    };

    handleAuth();
  }, [searchParams, setSearchParams]);

  const handleLogout = () => {
    cookieStorage.remove('access_token');
    const authUrl = import.meta.env.VITE_AUTH_URL || 'http://auth.genpos.test:3000';
    window.location.href = authUrl;
  };

  return (
    <GLayoutProvider>
      <div className="flex min-h-screen bg-stone-50/50">
        <GSidebar 
          version="2.0.1"
          footer={
            <div className="flex items-center gap-3 px-2 py-1">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-orange-600">
                  {user?.identifier?.charAt(0).toUpperCase() || 'A'}
                </span>
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-xs font-bold text-stone-800 truncate">
                  {user?.identifier || 'Guest User'}
                </p>
                <p className="text-[10px] text-stone-500 truncate uppercase tracking-wider">
                  {user?.role || 'No Role'}
                </p>
              </div>
              <button 
                onClick={handleLogout}
                className="text-stone-400 hover:text-red-500 transition-colors"
              >
                <LuLogOut size={16} />
              </button>
            </div>
          }
        >
          <GSidebarItem 
            icon={LuLayoutDashboard} 
            label="Dashboard" 
            active 
          />
          <GSidebarItem 
            icon={LuPackage} 
            label="Products" 
          />
          <GSidebarItem 
            icon={LuUsers} 
            label="Customers" 
          />
          <GSidebarItem 
            icon={LuShoppingCart} 
            label="Transactions" 
          />
          <div className="py-2 px-3">
             <div className="h-px bg-stone-100 w-full" />
          </div>
          <GSidebarItem 
            icon={LuSettings} 
            label="Settings" 
          />
        </GSidebar>

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <GNavbar>
            <div className="flex items-center justify-between w-full px-4">
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold text-stone-800">Admin Panel</h1>
                <span className="text-xs text-stone-400">/</span>
                <span className="text-xs text-stone-500 font-medium">Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                {/* Navbar extras like notifications could go here */}
              </div>
            </div>
          </GNavbar>

          <GContent className="bg-transparent" innerClassName="bg-transparent">
            <Outlet />
          </GContent>
        </div>
      </div>
    </GLayoutProvider>
  );
};

export default AppLayout;
