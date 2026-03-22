import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios';
import { HttpError, NetworkError, TimeoutError } from '../../error';
import { tokenStorage } from '../../storage';
import type { ApiErrorResponse, TokenResponse } from '../types';

// Queue untuk menampung request yang gagal selama proses refresh token berlangsung
type FailedQueueItem = {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
};

let isRefreshing = false;
let failedQueue: FailedQueueItem[] = [];

const processQueue = (error: unknown, token: string | null = null): void => {
  failedQueue.forEach((item) => {
    if (error) {
      item.reject(error);
    } else {
      item.resolve(token as string);
    }
  });
  failedQueue = [];
};

/**
 * Parse AxiosError menjadi salah satu dari:
 * - TimeoutError  → request timeout / ECONNABORTED
 * - NetworkError  → tidak ada response sama sekali (offline, CORS, dsb)
 * - HttpError     → ada response HTTP dengan status code
 */
const parseAxiosError = (
  error: AxiosError
): HttpError | NetworkError | TimeoutError => {
  // Timeout
  if (error.code === 'ECONNABORTED' || error.code === 'ERR_CANCELED') {
    return new TimeoutError();
  }

  // Tidak ada response → network error
  if (!error.response) {
    return new NetworkError();
  }

  // Ada response HTTP
  const { status, data } = error.response;
  const body = data as Partial<ApiErrorResponse>;

  const message = body?.message ?? error.message ?? 'Terjadi kesalahan';
  const code = body?.code ?? `HTTP_${status}`;

  return new HttpError(status, message, code, body);
};

/**
 * Buat response interceptor dan inject axiosInstance ke dalamnya
 * agar bisa dipakai ulang untuk retry request.
 */
export const createResponseInterceptor = (
  axiosInstance: AxiosInstance,
  onLogout?: () => void
) => {
  const onFulfilled = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  const onRejected = async (error: unknown): Promise<unknown> => {
    // Kalau bukan AxiosError, lempar langsung tanpa transform
    if (!axios.isAxiosError(error)) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    // --- Handling 401: coba refresh token ---
    if (originalRequest && error.response?.status === 401) {
      // Hindari infinite loop kalau /auth/refresh itu sendiri yang 401
      if (originalRequest.url?.includes('/auth/refresh')) {
        tokenStorage.clearAccessToken();
        onLogout?.();
        return Promise.reject(parseAxiosError(error));
      }

      // Kalau request ini sudah pernah di-retry, reject langsung
      if (originalRequest._retry) {
        tokenStorage.clearAccessToken();
        onLogout?.();
        return Promise.reject(parseAxiosError(error));
      }

      // Kalau sedang refresh, masukkan ke queue dan tunggu
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((newAccessToken) => {
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      // Tandai request ini sudah retry & mulai proses refresh
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Tidak perlu kirim body { refreshToken }
        // Browser otomatis mengirim HttpOnly cookie ke endpoint ini
        // karena withCredentials: true sudah di-set di axios instance
        const { data } = await axios.post<TokenResponse>(
          `${originalRequest.baseURL ?? ''}/auth/refresh`,
          null,
          { withCredentials: true }
        );

        tokenStorage.setAccessToken(data.access_token);
        processQueue(null, data.access_token);

        // Retry original request dengan token baru
        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Kalau refreshError adalah AxiosError, transform dulu
        const parsed = axios.isAxiosError(refreshError)
          ? parseAxiosError(refreshError)
          : refreshError;

        processQueue(parsed, null);
        tokenStorage.clearAccessToken();
        onLogout?.();
        return Promise.reject(parsed);
      } finally {
        isRefreshing = false;
      }
    }

    // --- Semua error selain 401: transform ke AppError ---
    return Promise.reject(parseAxiosError(error));
  };

  return { onFulfilled, onRejected };
};
