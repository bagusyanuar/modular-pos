import { HttpClient } from '@genossys-erp/http';
import { getEnv } from './env';

/**
 * Holder buat fungsi pengambil token.
 * Kita pisahkan supaya tidak circular dependency dengan Store.
 */
let accessTokenGetter: () => string | null | Promise<string | null> = () => null;

/**
 * Injector untuk mengatur cara HttpClient mengambil Access Token.
 * Panggil ini di level Presentation (main.ts) untuk menghubungkan dengan Store.
 */
export const setAccessTokenGetter = (getter: typeof accessTokenGetter): void => {
  accessTokenGetter = getter;
};

/**
 * Singleton instance dari HttpClient.
 */
export const httpClient = new HttpClient({
  baseURL: getEnv('VITE_API_BASE_URL', 'http://localhost:8000'),
  timeout: 30000,

  // Mengambil token secara dinamis dari getter yang di-inject
  tokenGetter: async () => {
    return await accessTokenGetter();
  },

  // Callback kalau dapat 401 dari server
  onUnauthorized: () => {
    // Kosongkan token via side-effect (misal reload page)
    // Atau serahkan ke UI untuk handle redirect
    window.location.href = '/login';
  },

  refreshPath: '/auth/refresh',
});
