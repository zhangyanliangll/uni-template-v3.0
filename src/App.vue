<script setup lang="ts">
import { onLaunch, onShow, onHide, onPageNotFound } from '@dcloudio/uni-app'

onLaunch(() => {
  // 隐藏原生导航栏 使用自定义底部导航
  uni.hideTabBar()
  // #ifndef H5
  // 检测升级
  updateApp()
  // #endif
  // 获取程序信息
  getCurrentAppInfo()
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})

// 更新程序
const updateApp = () => {
  // 检测升级
  if (uni.canIUse('getUpdateManager')) {
    const updateManager = uni.getUpdateManager()
    updateManager.onCheckForUpdate(({ hasUpdate }) => {
      if (hasUpdate) {
        // 更新新版本
        updateManager.onUpdateReady(() => {
          uni.showModal({
            title: '更新提示',
            content: '发现新版本，是否重启应用?',
            cancelColor: '#999999',
            confirmColor: '#FF0000',
            success({ confirm }) {
              if (confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            },
          })
        })

        // 新的版本下载失败
        updateManager.onUpdateFailed(() => {
          uni.showModal({
            title: '提示',
            content: '检查到有新版本，但下载失败，请检查网络设置',
            success(res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            },
          })
        })
      }
    })
  }
}

// 获取程序信息
const getCurrentAppInfo = () => {
  uni.login({
    success: (result) => {
      if (result.code) {
        console.log(result, '*-*-*-result*-*')
      }
    },
  })
}

// #ifdef MP-WEIXIN
onPageNotFound(() => {
  console.log('App onPageNotFound')
})
// #endif
</script>

<style lang="scss" scoped></style>
