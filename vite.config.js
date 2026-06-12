import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import netlify from '@netlify/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  }
});
