import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@airpower': '/airpower/',
      '@': '/src/',
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      keep_classnames: true,
      keep_fnames: true,
    },
  },
  server: {
    open: true,
    host: '0.0.0.0',
    https: false,
    proxy: {
      '/api': {
        target: 'http://192.168.88.195:8080/',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
      '/oauth2': 'http://192.168.88.195:8081',
      '/backend': {
        target: 'http://192.168.88.195:8081',
        rewrite: (path) => path.replace(/^\/backend/, ''),
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
