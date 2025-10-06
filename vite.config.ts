import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const DEV_TARGET = process.env.DEV_API_TARGET || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable compression
    minify: 'esbuild',
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
    chunkSizeWarningLimit: 1000,
    // Enable asset inlining for small files
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
