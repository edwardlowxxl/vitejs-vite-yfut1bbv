import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Real Estate CRM',
        short_name: 'CRM',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1e3a8a',
        icons: [
          {
            src: 'https://res.cloudinary.com/duhnoh2mx/image/upload/w_192,h_192,c_fill/v1746963975/ChatGPT_Image_May_11_2025_07_45_21_PM_hh0lp7.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://res.cloudinary.com/duhnoh2mx/image/upload/w_512,h_512,c_fill/v1746963975/ChatGPT_Image_May_11_2025_07_45_21_PM_hh0lp7.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
