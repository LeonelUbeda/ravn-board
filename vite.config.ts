import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@atoms': resolve(__dirname, './src/components/atoms'),
      '@organism': resolve(__dirname, './src/components/organism'),
      '@pages': resolve(__dirname, './src/components/pages'),
      '@templates': resolve(__dirname, './src/components/templates'),
      '@icons': resolve(__dirname, './public/images/icons'),
      '@': resolve(__dirname, './src'),
    },
  },
});
