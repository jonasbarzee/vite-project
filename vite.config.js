import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Detect if running in WSL (Windows Subsystem for Linux)
// WSL typically has these environment variables or paths in /mnt/
const isWSL = process.platform === 'linux' && 
  (process.env.WSL_DISTRO_NAME || 
   process.env.WSL_INTEROP || 
   __dirname.includes('/mnt/'));

// https://vite.dev/config/
export default defineConfig({
  base: "/beautiful-portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Enable HMR (Hot Module Replacement)
    hmr: {
      overlay: true, // Show error overlay in browser
    },
    // Enable file watching with polling only for WSL/Windows
    // On Mac/Linux native, native file watching is more efficient
    watch: isWSL ? {
      usePolling: true,
      interval: 1000, // Check for changes every second
    } : undefined,
    // Host configuration
    host: true, // Listen on all addresses (works on both Mac and WSL)
    port: 5173, // Default Vite port
    strictPort: false, // Try next available port if 5173 is taken
  },
});
