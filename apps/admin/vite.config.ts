import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../../', '');

  return {
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
      dedupe: ['react', 'react-dom', 'react-router-dom'],
    },
    server: {
      host: 'admin.genpos.test',
      port: Number(env.VITE_PORT_ADMIN) || 3001,
      watch: {
        ignored: ['!../../modules/**', '!../../packages/**'],
      },
    },
  };
});
