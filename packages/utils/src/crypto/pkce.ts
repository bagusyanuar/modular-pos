/**
 * Proof Key for Code Exchange (PKCE) Utility
 * Generates code_verifier and code_challenge for secure OAuth2 flows.
 */

/**
 * Generates a high-entropy cryptographic random string (Code Verifier).
 * @param length - Length of the string (43-128 characters)
 */
export const generateCodeVerifier = (length: number = 64): string => {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

/**
 * Generates a SHA-256 challenge from a verifier.
 * @param verifier - The code_verifier string
 */
export const generateCodeChallenge = async (verifier: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hash = await window.crypto.subtle.digest('SHA-256', data);
  
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};
