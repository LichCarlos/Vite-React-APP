import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // build目录名称，默认为"dist"
    outDir: 'build',
    // 静态资源存放目录名称，默认为"assets"
    assetsDir: 'static',
  },


  server: {
    // 监听所有IP地址
    host: '0.0.0.0',
    open: '/',
    // 设置反向代理
    proxy: {
      // 以下示例表示：请求URL中含有"/api"，则反向代理到http://localhost
      // 例如: http://localhost:3000/api/login -> http://localhost/api/login
      '/api': {
        target: 'http://localhost/',
        changeOrigin: true,
      },
    },


  },
  resolve: {
    // 路径别名配置
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },

  plugins: [react()],
})
