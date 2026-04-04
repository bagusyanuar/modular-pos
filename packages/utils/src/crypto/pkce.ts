/**
 * Proof Key for Code Exchange (PKCE) Utility
 * Generates code_verifier and code_challenge for secure OAuth2 flows.
 */
import { sha256 } from 'js-sha256';

/**
 * Generates a high-entropy cryptographic random string (Code Verifier).
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
 * Includes a fallback for non-secure contexts (http://admin.genpos.test).
 */
export const generateCodeChallenge = async (verifier: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  
  let hash: ArrayBuffer;

  if (window.crypto && window.crypto.subtle) {
    // Native Web Crypto (Secure Contexts)
    hash = await window.crypto.subtle.digest('SHA-256', data);
  } else {
    // Fallback for non-secure contexts (JS Implementation)
    // js-sha256 returns hex string or array, we need array for consistent btoa processing
    const hashHex = sha256.array(verifier);
    hash = new Uint8Array(hashHex).buffer;
    console.warn('PKCE: Using JS-fallback for SHA-256 (Non-Secure Context)');
  }
  
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};
