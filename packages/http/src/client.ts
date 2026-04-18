import axios, { AxiosInstance } from 'axios';
import { HttpClientConfig, TokenGetter } from './types';
import { createRequestInterceptor } from './interceptors/request';
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
    this.instance.interceptors.request.use(createRequestInterceptor(this.tokenGetter));
    this.instance.interceptors.response.use(
      successResponseInterceptor,
      errorResponseInterceptor(this.instance, {
        onUnauthorized: this.onUnauthorized,
        refreshPath: this.refreshPath,
      })
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
