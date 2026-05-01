import axios from 'axios';
import {
  BadRequestError,
  ForbiddenError,
  NetworkError,
  NotFoundError,
  ServerError,
  UnauthorizedError,
  ValidationError,
} from '@core/libs/error';
import type { ApiErrorData } from '@genossys-erp/http';

/**
 * Konversi AxiosError (Infrastructure) ke AppError (Core/Domain)
 */
export const mapAxiosErrorToAppError = (error: unknown): Error => {
  if (!axios.isAxiosError(error)) {
    if (error instanceof Error) return error;
    return new ServerError('Terjadi kesalahan yang tidak terduga');
  }

  // 1. Cek Koneksi (Network Error)
  if (!error.response) {
    return new NetworkError();
  }

  const status = error.response.status;
  const data = error.response.data as ApiErrorData;
  const message = data?.meta?.message || error.message;
  const code = data?.meta?.code;

  // 2. Map berdasarkan Status Code
  switch (status) {
    case 400:
      return new BadRequestError(message, code);
    case 401:
      return new UnauthorizedError(message, code);
    case 403:
      return new ForbiddenError(message, code);
    case 404:
      return new NotFoundError(message, code);
    case 422:
      return new ValidationError(data?.fields || {}, message);
    case 500:
    default:
      return new ServerError(message, code);
  }
};

/**
 * Wrapper buat manggil API secara aman & auto-convert error ke Core Error
 */
export async function safeApiCall<T>(call: () => Promise<T>): Promise<T> {
  try {
    return await call();
  } catch (error) {
    throw mapAxiosErrorToAppError(error);
  }
}

// export const safeApiCall = async <T>(
//   operation: () => Promise<T>
// ): Promise<T> => {
//   try {
//     return await operation();
//   } catch (error) {
//     throw mapAxiosErrorToAppError(error);
//   }
// };
