import { createSSRApp } from 'vue'
import App from './App.vue'
import * as Pinia from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'
import '@/utils/inject'

// 注册 全局公共 方法
import '@/utils/inject'

// 打印日志 工具 - H5 --
// if (notPro) {
//   Promise.all([import('vconsole')]).then((res) => {
//     if (res.length === 1) {
//       const VConsole = res[0].default
//       new VConsole()
//     }
//   })
// }

export function createApp() {
  const app = createSSRApp(App)

  //创建store实例
  const store = Pinia.createPinia()

  // piain 持久化 👇
  store.use(createUnistorage())

  app.use(store)

  return {
    app,
    Pinia, // 此处必须将 Pinia 返回
  }
}
