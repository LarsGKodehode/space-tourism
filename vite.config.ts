/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigpaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigpaths()],

  // Setting up the tests
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./setupTests.ts'],
  },
});
