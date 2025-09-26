import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const DEV_TARGET = process.env.DEV_API_TARGET || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting and optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries into their own chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Separate UI libraries
          ui: ['lucide-react', '@plasmicapp/react-web'],
          // Separate admin functionality
          admin: ['js-cookie', 'react-rnd']
        }
      }
    },
    // Enable source maps for better debugging in production
    sourcemap: false, // Disable in production for smaller bundle size
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000
  },
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
