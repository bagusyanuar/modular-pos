export class HttpError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly code?: string,
    public readonly internalData?: unknown
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export class BadResponseError extends HttpError {
  constructor(message = 'Server memberikan respon yang tidak valid', statusCode = 500) {
    super(message, statusCode, 'BAD_RESPONSE');
    this.name = 'BadResponseError';
  }
}

export class NetworkError extends HttpError {
  constructor(message = 'Gagal terhubung ke server. Periksa koneksi internet Anda.') {
    super(message, undefined, 'NETWORK_ERROR');
    this.name = 'NetworkError';
  }
}

export class TimeoutError extends HttpError {
  constructor(message = 'Waktu permintaan habis (Timeout)') {
    super(message, undefined, 'TIMEOUT_ERROR');
    this.name = 'TimeoutError';
  }
}
