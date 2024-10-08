import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({

  plugins: [react()],
  build: {
    assetsDir: 'assets'
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },  
});
