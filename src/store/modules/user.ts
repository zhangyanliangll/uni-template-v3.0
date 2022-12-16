import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const userStore = defineStore(
  'user',
  () => {
    let userInfo = reactive({
      name: '张三',
    })

    // 修改 用户信息
    const setUserInfo = (data: any) => {
      userInfo = Object.assign(userInfo, data)
    }

    return {
      userInfo,
      setUserInfo,
    }
  },
  {
    unistorage: {
      key: 'user',
      paths: ['userInfo'],
    },
  },
)

export default userStore
