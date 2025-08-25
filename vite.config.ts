import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const DEV_TARGET = process.env.DEV_API_TARGET || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: DEV_TARGET
      ? {
          '/api': {
            target: DEV_TARGET,
            changeOrigin: true,
            secure: false,
          },
        }
      : undefined, // disable proxy in Bolt preview to avoid ECONNREFUSED
  },
});
