import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })

  ],
  server: {
    host: '0.0.0.0',//使用当前的IP地址，没有这个就是以localhost作为本地地址
    port: 15000, //端口号为3000
    open: true, //是否在默认浏览器中自动打开该地址
    proxy: { //使用代理
      '/*': { //当有 /api开头的地址是，代理到target地址
        target: 'http://localhost:18000', // 需要跨域代理的本地路径
        changeOrigin: true, //是否改变请求源头
        ws: true,
        rewrite: (path) => path.replace(/^\/*/, ''),
      }
    }
  }
})

