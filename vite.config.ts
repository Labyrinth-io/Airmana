import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

dotenv.config();

const DEV_TARGET = process.env.DEV_API_TARGET || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Enable code splitting and optimize chunks
    rollupOptions: {
      output: {
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          // Separate vendor libraries into their own chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Separate admin functionality
          admin: ['js-cookie', 'react-rnd']
        }
      }
    },
    // Enable source maps for better debugging in production
    sourcemap: false, // Disable in production for smaller bundle size
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable asset inlining for small files
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom'],
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
