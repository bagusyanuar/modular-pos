import { type AxiosInstance } from 'axios';
import { AxiosService } from './provider';
import { mainInterceptors } from './interceptor';
import { getApiConfig } from './config';

let axiosInstance: AxiosInstance | null = null;

export const createAxiosInstance = (): AxiosInstance => {
  const { baseURL } = getApiConfig();
  const httpService = new AxiosService({ baseURL }, mainInterceptors);
  return httpService.api;
};

export const getAxiosInstance = (): AxiosInstance => {
  if (!axiosInstance) {
    axiosInstance = createAxiosInstance();
  }
  return axiosInstance;
};

export const resetAxiosInstance = (): void => {
  axiosInstance = null;
};
