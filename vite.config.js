import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('antd')) {
              return 'vendor_antd';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor_router';
            }
            return 'vendor';
          }
        }
      }
    }
  }
});
