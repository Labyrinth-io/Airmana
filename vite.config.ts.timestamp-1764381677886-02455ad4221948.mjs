// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var DEV_TARGET = process.env.DEV_API_TARGET || "";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    // Enable compression
    minify: "esbuild",
    // Enable code splitting and optimize chunks
    rollupOptions: {
      output: {
        // Optimize chunk naming for better caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: {
          // Separate vendor libraries into their own chunk
          vendor: ["react", "react-dom", "react-router-dom"],
          // Separate UI libraries
          ui: ["lucide-react", "@plasmicapp/react-web"],
          // Separate admin functionality
          admin: ["js-cookie", "react-rnd"]
        }
      }
    },
    // Enable source maps for better debugging in production
    sourcemap: false,
    // Disable in production for smaller bundle size
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1e3,
    // Enable asset inlining for small files
    assetsInlineLimit: 4096
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["react", "react-dom", "react-router-dom"]
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmNvbnN0IERFVl9UQVJHRVQgPSBwcm9jZXNzLmVudi5ERVZfQVBJX1RBUkdFVCB8fCAnJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBFbmFibGUgY29tcHJlc3Npb25cbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICAvLyBFbmFibGUgY29kZSBzcGxpdHRpbmcgYW5kIG9wdGltaXplIGNodW5rc1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBPcHRpbWl6ZSBjaHVuayBuYW1pbmcgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5bZXh0XScsXG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIFNlcGFyYXRlIHZlbmRvciBsaWJyYXJpZXMgaW50byB0aGVpciBvd24gY2h1bmtcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICAvLyBTZXBhcmF0ZSBVSSBsaWJyYXJpZXNcbiAgICAgICAgICB1aTogWydsdWNpZGUtcmVhY3QnLCAnQHBsYXNtaWNhcHAvcmVhY3Qtd2ViJ10sXG4gICAgICAgICAgLy8gU2VwYXJhdGUgYWRtaW4gZnVuY3Rpb25hbGl0eVxuICAgICAgICAgIGFkbWluOiBbJ2pzLWNvb2tpZScsICdyZWFjdC1ybmQnXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBFbmFibGUgc291cmNlIG1hcHMgZm9yIGJldHRlciBkZWJ1Z2dpbmcgaW4gcHJvZHVjdGlvblxuICAgIHNvdXJjZW1hcDogZmFsc2UsIC8vIERpc2FibGUgaW4gcHJvZHVjdGlvbiBmb3Igc21hbGxlciBidW5kbGUgc2l6ZVxuICAgIC8vIE9wdGltaXplIGNodW5rIHNpemUgd2FybmluZ3NcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gICAgLy8gRW5hYmxlIGFzc2V0IGlubGluaW5nIGZvciBzbWFsbCBmaWxlc1xuICAgIGFzc2V0c0lubGluZUxpbWl0OiA0MDk2LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICAgIGluY2x1ZGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBRWxCLElBQU0sYUFBYSxRQUFRLElBQUksa0JBQWtCO0FBR2pELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQTtBQUFBLElBRVIsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBO0FBQUEsUUFFTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixjQUFjO0FBQUE7QUFBQSxVQUVaLFFBQVEsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUE7QUFBQSxVQUVqRCxJQUFJLENBQUMsZ0JBQWdCLHVCQUF1QjtBQUFBO0FBQUEsVUFFNUMsT0FBTyxDQUFDLGFBQWEsV0FBVztBQUFBLFFBQ2xDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsV0FBVztBQUFBO0FBQUE7QUFBQSxJQUVYLHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsbUJBQW1CO0FBQUEsRUFDckI7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUEsSUFDeEIsU0FBUyxDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxFQUNwRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
