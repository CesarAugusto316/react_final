/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests-setup.ts',
    reporters: 'verbose',
    dir: './src/__tests__',
    watch: true,
  },
  plugins: [react()],
});
