import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../../', '');

  return {
    base: env.VITE_ADMIN_PATH || '/',
    envDir: '../../',
    plugins: [
      react(),
      tailwindcss(),
      visualizer({
        open: true, // otomatis buka browser setelah build
        gzipSize: true, // tampilkan ukuran setelah gzip
        brotliSize: true, // tampilkan ukuran setelah brotli
        filename: 'dist/stats.html',
        template: 'treemap',
      }),
    ],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    server: {
      host: env.VITE_ADMIN_HOST || 'genpos.test',
      port: Number(env.VITE_PORT_ADMIN) || 3001,
      proxy: {
        '/sso': {
          target: `http://${env.VITE_AUTH_HOST || 'genpos.test'}:3001`,
          changeOrigin: true,
        },
      },
      watch: {
        ignored: ['!../../modules/**', '!../../packages/**'],
      },
    },
  };
});
