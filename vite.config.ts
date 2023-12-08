/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTest.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['html', 'text'],
      exclude: ['./node_modules', 'src/setupTest.ts'],
    },
  },
});
