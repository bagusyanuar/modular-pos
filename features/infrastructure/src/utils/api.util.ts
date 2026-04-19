import { HttpError } from '@genpos/http/exceptions';
import { ApiErrorData } from '@genpos/http/types';
import {
  AppError,
  UnauthorizedError,
  ValidationError,
  NotFoundError,
  ForbiddenError,
  DomainError,
} from '@genpos/core/utils';

/**
 * Utilitas untuk mengonversi error dari level HTTP (@genpos/http)
 * menjadi error yang dimengerti oleh Domain (@genpos/core).
 */
export const handleApiError = (error: unknown): never => {
  if (error instanceof HttpError) {
    const message = error.message;
    const statusCode = error.statusCode;
    const data = error.internalData as ApiErrorData | undefined;

    switch (statusCode) {
      case 401:
        throw new UnauthorizedError(message);
      case 403:
        throw new ForbiddenError(message);
      case 404:
        throw new NotFoundError(message || 'Resource');
      case 400:
        if (data?.fields) {
          throw new ValidationError(message, data.fields);
        }
        throw new DomainError(message, 'BAD_REQUEST');
      case 422:
        throw new DomainError(message, error.code || 'UNPROCESSABLE_ENTITY');
      default:
        throw new AppError(
          message,
          error.code || 'INTERNAL_SERVER_ERROR',
          statusCode || 500
        );
    }
  }

  if (error instanceof Error) {
    throw new AppError(error.message, 'UNKNOWN_ERROR', 500);
  }

  throw new AppError(
    'Terjadi kesalahan yang tidak diketahui',
    'UNKNOWN_ERROR',
    500
  );
};

/**
 * Wrapper untuk mempermudah pemanggilan API di Repository.
 * Otomatis menangani try-catch dan konversi error.
 */
export const safeApiCall = async <T>(
  operation: () => Promise<T>
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    return handleApiError(error);
  }
};
