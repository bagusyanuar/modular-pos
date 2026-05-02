import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../../', '');

  return {
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    server: {
      port: Number(env.VITE_PORT) || 3000,
      open: true,
    },
  };
});
