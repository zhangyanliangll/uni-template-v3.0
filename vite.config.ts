import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import autoImport from 'unplugin-auto-import/vite'
import uniHot from 'uni-pages-hot-modules'
// 安装条件编译命令，安装之后，uniapp就会支持exec hotJs的条件编译
uniHot.setupHotJs()

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  // 环境变量
  const env = loadEnv(mode, root)
  console.log(env)

  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/index.scss";',
        },
      },
    },
    plugins: [
      uni(),
      autoImport({
        imports: ['vue'], // 需要引入的类型来源
        dts: 'src/typings/auto-import.d.ts', // 根据引入来源自动生成的类型声明文件路径)
        eslintrc: {
          enabled: true, // 使用 eslint 配置
        },
      }),
      // 注册uni-pages-hot-modules的热更新vite插件
      uniHot.createHotVitePlugin(),
    ],
    server: {
      host: true,
      port: env.VITE_PORT as any,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/upload': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/upload/, ''),
        },
      },
    },
  }
})
