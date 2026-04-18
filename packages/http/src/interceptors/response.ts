import { AxiosError, AxiosResponse } from 'axios';
import { HttpError, BadResponseError, NetworkError, TimeoutError } from '../exceptions';
import { AxiosErrorWithData } from '../types';

export const successResponseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const errorResponseInterceptor = (onUnauthorized?: () => void) => {
  return (error: AxiosError) => {
    // 1. Handle Timeout
    if (error.code === 'ECONNABORTED') {
      throw new TimeoutError();
    }

    // 2. Handle Network Error
    if (!error.response) {
      throw new NetworkError();
    }

    const axiosError = error as AxiosErrorWithData;
    const statusCode = axiosError.response?.status;
    const data = axiosError.response?.data;

    // 3. Handle 401 Unauthorized
    if (statusCode === 401) {
      if (onUnauthorized) onUnauthorized();
      throw new HttpError(data?.message || 'Unauthorized', 401, 'UNAUTHORIZED', data);
    }

    // 4. Handle other known errors from backend
    if (data && data.message) {
      throw new HttpError(data.message, statusCode, data.code || 'UNKNOWN_ERROR', data);
    }

    // 5. Fallback Generic Error
    throw new BadResponseError(error.message, statusCode);
  };
};
