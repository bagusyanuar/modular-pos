import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from 'axios';
import { type AxiosInterceptors } from './provider';
import { getApiConfig } from './config';
import type { RefreshTokenResponse } from '../dto';

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}

export const mainInterceptors: AxiosInterceptors = {
  onRequest: (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  onRequestError: (error: AxiosError) => Promise.reject(error),
  onResponse: (response: AxiosResponse) => response,
  onResponseError: async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const baseURL = getApiConfig().baseURL;
        const { data } = await axios.post<RefreshTokenResponse>(
          `${baseURL}/auth/refresh`
        );

        const serializedValue = JSON.stringify(data.access_token);
        localStorage.setItem('access_token', serializedValue);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
        }

        return axios(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
};
