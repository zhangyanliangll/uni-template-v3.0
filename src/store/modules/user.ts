import { defineStore } from 'pinia'
import { localStg } from '@/utils/storage'
import { encrypto } from '@/utils/crypto'

// 储存key 名字
const key = 'userStore'
export const userStore = defineStore(
  'user',
  () => {
    let userInfo: Auth.UserInfo = reactive({
      userId: '1',
      userName: '张三',
      userRole: 'admin',
    })

    const authInfo = ref([])

    // 修改 用户信息
    const setUserInfo = (data: any) => {
      userInfo = Object.assign(userInfo, data)
    }

    // 修改 授权页面/按钮信息
    const setAuthInfo = (data: any) => {
      authInfo.value = data
    }

    return {
      userInfo,
      setUserInfo,
      setAuthInfo,
    }
  },
  {
    unistorage: {
      key, // 缓存的 key
      paths: ['userInfo', 'authInfo'], // 需要缓存的 值
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

export default userStore
