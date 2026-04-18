import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { HttpError, BadResponseError, NetworkError, TimeoutError } from '../exceptions';
import { AxiosErrorWithData } from '../types';

interface ResponseInterceptorConfig {
  onUnauthorized?: () => void;
  refreshPath?: string;
}

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const successResponseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const errorResponseInterceptor = (
  instance: AxiosInstance,
  config: ResponseInterceptorConfig
) => {
  const { onUnauthorized, refreshPath } = config;

  return async (error: AxiosError) => {
    const originalRequest = error.config;

    // 1. Handle Timeout
    if (error.code === 'ECONNABORTED') {
      throw new TimeoutError();
    }

    // 2. Handle Network Error
    if (!error.response || !originalRequest) {
      throw new NetworkError();
    }

    const axiosError = error as AxiosErrorWithData;
    const statusCode = axiosError.response?.status;
    const data = axiosError.response?.data;

    // 3. Handle 401 Unauthorized (Refresh Token Flow)
    if (statusCode === 401 && refreshPath && !originalRequest._retry) {
      // Jika request aslinya adalah request refresh itu sendiri, langsung logout
      if (originalRequest.url?.includes(refreshPath)) {
        if (onUnauthorized) onUnauthorized();
        throw new HttpError(data?.meta?.message || 'Session Expired', 401, 'UNAUTHORIZED', data);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return instance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Karena pakai cookie, kita cukup tembak endpoint refresh-nya
        // Server akan set cookie accessToken baru otomatis (atau balikin di body)
        await instance.post(refreshPath);
        
        isRefreshing = false;
        processQueue(null);
        
        return instance(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        processQueue(new Error('Refresh token failed'));
        
        if (onUnauthorized) onUnauthorized();
        throw new HttpError('Session Expired', 401, 'UNAUTHORIZED');
      }
    }

    // 4. Handle 401 tanpa Refresh Logic
    if (statusCode === 401) {
      if (onUnauthorized) onUnauthorized();
      throw new HttpError(data?.meta?.message || 'Unauthorized', 401, 'UNAUTHORIZED', data);
    }

    // 5. Handle other known errors from backend
    if (data && data.meta?.message) {
      throw new HttpError(data.meta.message, statusCode, data.meta.status || 'UNKNOWN_ERROR', data);
    }

    // 6. Fallback Generic Error
    throw new BadResponseError(error.message, statusCode);
  };
};
