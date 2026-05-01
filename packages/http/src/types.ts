import type { AxiosError } from 'axios';

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
