import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: 'Photographer-portfolio',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },  
});
