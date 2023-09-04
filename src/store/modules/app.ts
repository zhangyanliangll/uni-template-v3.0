import { defineStore } from 'pinia'
import { localStg } from '@/utils/storage'
import { encrypto } from '@/utils/crypto'

// 储存key 名字
const key = 'appStore'
export const appStore = defineStore(
  'app',
  () => {
    const token = ref('hello pinia')
    const baseUrl = ref<string>('https://www.baidu.com/')

    const setToken = (data: string) => {
      localStg.set('token', data, null)
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
      key, // 缓存的 key
      paths: ['token'], // 需要缓存的 值
      beforeRestore({ store }: any) {
        const obj = localStg.get(key)
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(store, key)) {
            const value = (obj as any)[key]
            store[key] = value
          }
        }
      },
      serializer: {
        serialize(value: any) {
          return encrypto({
            value,
            expire: null,
          })
        },
      },
    },
  },
)

export default appStore
