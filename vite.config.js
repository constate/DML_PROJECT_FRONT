import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(), // reset 위해 추가
    tailwindcss(), // tailwind 플러그인 삽입
  ],
  resolve: {
    // 절대경로
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@router', replacement: '/src/router' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@apis', replacement: '/src/apis' },
      { find: '@stores', replacement: '/src/stores' },
    ],
  },
});
