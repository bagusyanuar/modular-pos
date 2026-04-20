/**
 * GateKeeper Utility
 * Digunakan untuk memaksa akses melalui Gateway (port resmi) dalam monorepo.
 */

interface GateKeeperOptions {
  gatewayPort: string;
  allowedHosts?: string[];
}

export const setupGateKeeper = (options: GateKeeperOptions) => {
  if (typeof window === 'undefined') return;

  // Hanya jalankan GateKeeper di mode Development (Vite)
  // Di production, gateway biasanya dihandle oleh load balancer/proxy asli.
  const isDev = import.meta.env?.DEV;
  if (!isDev) return;

  const currentPort = window.location.port;
  const currentHostname = window.location.hostname;
  
  // Default allowed hosts (misal localhost murni buat debugging)
  const allowedHosts = options.allowedHosts || [];

  if (import.meta.env?.DEV) {
    console.log('[GateKeeper] Checking:', { currentPort, currentHostname, gatewayPort: options.gatewayPort, allowedHosts });
  }

  // Jika port saat ini bukan gatewayPort dan bukan di host yang dikecualikan
  if (
    currentPort !== options.gatewayPort && 
    !allowedHosts.includes(currentHostname)
  ) {
    const gatewayUrl = `${window.location.protocol}//${currentHostname}:${options.gatewayPort}${window.location.pathname}${window.location.search}`;
    
    console.warn(`[GateKeeper] Redirecting to gateway: ${gatewayUrl}`);
    window.location.replace(gatewayUrl);
  }
};
