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

  const currentPort = window.location.port;
  const currentHostname = window.location.hostname;
  
  // Default allowed hosts (misal localhost murni buat debugging)
  const allowedHosts = options.allowedHosts || ['localhost'];

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
