import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import markdown from 'vite-plugin-markdown';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), markdown.plugin()],
  base: '/react-site',
});
