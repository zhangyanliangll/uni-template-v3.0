import { defineStore } from 'pinia'
import { ref } from 'vue'

export const appStore = defineStore(
  'app',
  () => {
    const token = ref('hello pinia')
    const baseUrl = ref<string>('https://www.baidu.com/')

    const setToken = (data: any) => {
      token.value = data
    }

    return {
      token,
      baseUrl,
      setToken,
    }
  },
  {
    unistorage: {
      key: 'app', // 缓存的 key
      paths: ['token'], // 需要缓存的 值
    },
  },
)

export default appStore
