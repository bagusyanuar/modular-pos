export interface ApiConfig {
  baseURL: string;
  timeout?: number;
}

export interface TokenResponse {
  access_token: string;
}

// Shape response error dari backend simRS
export interface ApiErrorResponse {
  message: string;
  code: string;
  errors?: Record<string, string[]>;
}

// Extend AxiosRequestConfig untuk menyimpan flag retry
declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}
