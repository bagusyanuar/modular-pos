/**
 * Utility for interacting with browser cookies with domain and JSON support.
 * This is useful for SSO cross-subdomain sessions.
 */

export const cookieStorage = {
  /**
   * Set a cookie value.
   * @param name - Cookie name
   * @param value - Value to store (will be JSON stringified if not a string)
   * @param days - Optional expiration in days
   */
  set: (name: string, value: any, days: number = 7): void => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    const stringValue =
      typeof value === 'string' ? value : JSON.stringify(value);

    // Use .genpos.test as base domain to share across subdomains
    const domain = import.meta.env.VITE_SESSION_DOMAIN || '.genpos.test';

    document.cookie = `${name}=${encodeURIComponent(stringValue)};expires=${expires.toUTCString()};path=/;domain=${domain};SameSite=Lax`;
  },

  /**
   * Get a cookie value by name.
   */
  get: <T>(name: string): T | null => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      if (!c) continue;

      c = c.trim();
      if (c.indexOf(nameEQ) === 0) {
        const value = decodeURIComponent(c.substring(nameEQ.length, c.length));
        try {
          return JSON.parse(value) as T;
        } catch {
          return value as unknown as T;
        }
      }
    }
    return null;
  },

  /**
   * Remove a cookie (set expiration to past).
   */
  remove: (name: string): void => {
    const domain = import.meta.env.VITE_SESSION_DOMAIN || '.genpos.test';
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${domain};SameSite=Lax`;
  },
};
