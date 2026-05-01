/**
 * Definisi semua key environment variable yang diizinkan.
 * Edit di sini kalau ada env baru Bang.
 */
export interface EnvConfig {
  VITE_API_BASE_URL: string;
}

declare global {
  interface Window {
    __CONFIG__?: EnvConfig;
  }
}

/**
 * Ambil env var secara aman dan type-safe.
 * Mendukung runtime config (window.__CONFIG__) dan build-time fallback.
 */
export const getEnv = <K extends keyof EnvConfig>(
  key: K,
  defaultValue: EnvConfig[K] = '' as EnvConfig[K]
): EnvConfig[K] => {
  // 1. Cek Runtime Config (window.__CONFIG__)
  const runtimeValue = window.__CONFIG__?.[key];
  if (runtimeValue !== undefined) {
    return runtimeValue;
  }

  // 2. Cek Build-time (import.meta.env)
  const buildTimeValue = import.meta.env[key] as EnvConfig[K] | undefined;
  if (buildTimeValue !== undefined) {
    return buildTimeValue;
  }

  return defaultValue;
};
