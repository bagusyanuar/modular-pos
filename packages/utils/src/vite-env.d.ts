/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SESSION_DOMAIN: string;
  readonly VITE_PORT_AUTH: string;
  readonly VITE_PORT_ADMIN: string;
  readonly VITE_AUTH_URL: string;
  readonly VITE_ADMIN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
