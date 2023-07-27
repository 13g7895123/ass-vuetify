import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
  server: {
    host: true,
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://170.187.229.132:9051/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
