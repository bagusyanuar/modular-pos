import axios, { type AxiosInstance } from 'axios';
import {
  requestErrorInterceptor,
  requestInterceptor,
} from './interceptors/request';
import { createResponseInterceptor } from './interceptors/response';
import type { ApiConfig } from './types';

/**
 * Buat axios instance yang sudah dikonfigurasi dengan:
 * - Base URL dari config
 * - Request interceptor: inject Authorization header
 * - Response interceptor: handle 401 & auto refresh token
 *
 * @param config - Konfigurasi API (baseURL, timeout)
 * @param onLogout - Callback yang dipanggil saat refresh token gagal (untuk redirect ke login)
 */
export const createApiClient = (
  config: ApiConfig,
  onLogout?: () => void
): AxiosInstance => {
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout ?? 15_000,
    headers: {
      Accept: 'application/json',
    },
    // Wajib agar HttpOnly cookie (refresh token) ikut dikirim saat cross-origin
    withCredentials: true,
  });

  // Request interceptor
  instance.interceptors.request.use(
    requestInterceptor,
    requestErrorInterceptor
  );

  // Response interceptor (dengan refresh token logic)
  const { onFulfilled, onRejected } = createResponseInterceptor(
    instance,
    onLogout
  );
  instance.interceptors.response.use(onFulfilled, onRejected);

  return instance;
};

// Default export: factory function
export default createApiClient;
