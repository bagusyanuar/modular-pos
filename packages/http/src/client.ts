import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { HttpClientConfig, TokenGetter } from './types';
import { successResponseInterceptor, errorResponseInterceptor } from './interceptors/response';

export class HttpClient {
  private instance: AxiosInstance;
  private tokenGetter: TokenGetter = () => null;
  private onUnauthorized: () => void = () => {};
  private refreshPath?: string;

  constructor(config: HttpClientConfig) {
    this.instance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 30000,
      withCredentials: true,
    });

    this.tokenGetter = config.tokenGetter || (() => null);
    this.onUnauthorized = config.onUnauthorized || (() => {});
    this.refreshPath = config.refreshPath;

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Kita bungkus dalam anonymous function supaya dia selalu ambil 
    // referensi terbaru dari properti class (Dependency Injection)
    this.instance.interceptors.request.use(async (config) => {
      const token = await this.tokenGetter();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.headers['Content-Type'] = 'application/json';
      config.headers.Accept = 'application/json';
      return config;
    });

    this.instance.interceptors.response.use(
      successResponseInterceptor,
      (error) => errorResponseInterceptor(this.instance, {
        onUnauthorized: () => this.onUnauthorized(),
        refreshPath: this.refreshPath,
      })(error)
    );
  }

  /**
   * Mengupdate fungsi pengambil token (Dependency Injection).
   */
  public setTokenGetter(getter: TokenGetter) {
    this.tokenGetter = getter;
    // Re-setup interceptors if needed, or simply let the reference update
  }

  /**
   * Mengupdate logic logout/unauthorized.
   */
  public setOnUnauthorized(fn: () => void) {
    this.onUnauthorized = fn;
  }

  // --- Direct API Methods (Delegators) ---

  /**
   * Metode paling fleksibel, sama seperti calls axios(config)
   */
  public request<T = unknown>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.request<T>(config);
  }

  public get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, config);
  }

  public post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

  public put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config);
  }

  public patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(url, data, config);
  }

  public delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config);
  }

  public head<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.head<T>(url, config);
  }

  public options<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.options<T>(url, config);
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

/**
 * Factory function untuk membuat instance baru dengan mudah.
 */
export const createHttpClient = (config: HttpClientConfig) => {
  return new HttpClient(config);
};
