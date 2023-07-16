import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate', injectRegister: 'auto', workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.png'],
      manifest: {
        name: 'Routine',
        short_name: 'Spring 23',
        description: 'Routine | Spring 23', 
        theme_color: '#1e1e1e',
        icons: [
          {
            src: 'src/assets/img/apwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  })
  ],
})
