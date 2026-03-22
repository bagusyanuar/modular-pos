import type { InternalAxiosRequestConfig } from 'axios';
import { tokenStorage } from '../../storage';

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = tokenStorage.getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Pastikan Content-Type selalu json kecuali FormData
  if (!(config.data instanceof FormData)) {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
};

export const requestErrorInterceptor = (error: unknown): Promise<never> => {
  return Promise.reject(error);
};
