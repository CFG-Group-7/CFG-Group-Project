import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import netlify from '@netlify/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import svgrPlugin from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify(), tailwindcss(), svgrPlugin()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  }
});
