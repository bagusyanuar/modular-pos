import Cookies from 'js-cookie';

const REFRESH_TOKEN_KEY = 'refresh_token';
const SESSION_DOMAIN = import.meta.env.VITE_SESSION_DOMAIN || '.genpos.test';

export interface ExchangeResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    role: string;
  };
}

/**
 * Mengambil refresh_token dari browser cookie.
 * Tergantung pada BE (apakah HttpOnly atau tidak).
 */
export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN_KEY);

/**
 * Checker untuk proteksi rute di level Middleware/Loader.
 */
export const hasSession = () => !!getRefreshToken();

/**
 * Hapus session di sisi client.
 */
export const logout = () => {
  Cookies.remove(REFRESH_TOKEN_KEY, { domain: SESSION_DOMAIN, path: '/' });
};

/**
 * Handshake: Menukar 'code' menjadi session.
 */
export const exchangeToken = async (code: string): Promise<ExchangeResponse> => {
  console.log('[Auth] Handshake with code:', code);
  
  // Simulasi API call
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    accessToken: `at_${Math.random().toString(36).substring(7)}`,
    user: {
      id: '1',
      name: 'Bagus Yanuar',
      role: 'admin',
    },
  };
};
