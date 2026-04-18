import { InternalAxiosRequestConfig } from 'axios';
import { TokenGetter } from '../types';

export const createRequestInterceptor = (getToken?: TokenGetter) => {
  return async (config: InternalAxiosRequestConfig) => {
    if (getToken) {
      const token = await getToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Default headers bisa ditambah di sini
    config.headers['Content-Type'] = 'application/json';
    config.headers.Accept = 'application/json';

    return config;
  };
};
