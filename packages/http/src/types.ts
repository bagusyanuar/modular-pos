import { AxiosError, AxiosResponse } from 'axios';

/**
 * Standar respon dari API GenPOS.
 */
export interface ApiResponse<T = unknown> {
  meta: {
    code: number;
    status: string;
    message: string;
    pagination?: {
      total: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
  data: T;
}

/**
 * Struktur error dari backend.
 */
export interface ApiErrorData {
  meta: {
    code: string;
    status: string;
    message: string;
  };
  fields?: Record<string, string>;
}

export type TokenGetter = () => string | null | Promise<string | null>;

export interface HttpClientConfig {
  baseURL: string;
  timeout?: number;
  onUnauthorized?: () => void;
  tokenGetter?: TokenGetter;
  refreshPath?: string;
}

export type AxiosErrorWithData = AxiosError<ApiErrorData>;

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}
