import { createHttpClient, TokenGetter } from '@genpos/http';

/**
 * Shared HTTP Client instance untuk layer infrastructure.
 * Dikonfigurasi dengan interceptors global dan base URL dari environment.
 */
export const api = createHttpClient({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  timeout: 30000,
  refreshPath: import.meta.env.VITE_API_REFRESH_PATH || '/auth/refresh',
});

/**
 * Interface untuk dependency yang di-inject dari layer UI (apps/store).
 */
export interface ApiDependencies {
  getToken: TokenGetter;
  onUnauthorized: () => void;
}

/**
 * Dependency Injection helper untuk mengonfigurasi instance API.
 * Dipanggil di level entry point aplikasi (misalnya main.tsx).
 */
export const configureApi = (deps: ApiDependencies) => {
  api.setTokenGetter(deps.getToken);
  api.setOnUnauthorized(deps.onUnauthorized);
};
