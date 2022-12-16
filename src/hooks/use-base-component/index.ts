import useRouter from '@/hooks/use-navigate'
import { isString, isObject } from '@/utils/is'
import type { UseBaseComponent } from './use-base-component'

export default (): UseBaseComponent => {
  const { navigateTo, redirectTo, switchTab } = useRouter()

  /**
   * 跳转方法
   * @param options 跳转配置
   * @param redirect 是否关闭当前页面 默认 false
   */
  const navigateGo = (options: any, redirect = false) => {
    let url = '' // 跳转路径

    if (isString(options)) {
      // http 开头
      if (options.isUrl()) {
        // #ifdef H5
        window.location = options as any
        // #endif
        // #ifndef H5
        url = `/pages/web-view?url=${encodeURIComponent(options)}`
        // #endif
      }
    }

    // 是 tabBar 页面
    // if (isTabBar(url)) {
    //   return switchTab(url)
    // }

    if (redirect) {
      return redirectTo(url, options.data)
    }

    return navigateTo(url, options.data)
  }

  /**
   * toast弹窗
   * @param options {title:标题 | icon:显示图标(默认: none) | duration:时长(默认: 3000)}
   * @returns
   */
  const toast = (options: string | any) => {
    if (isString(options)) {
      options = { title: options, icon: 'none', duration: 3000 }
    }
    if (isObject(options)) {
      const { title = '', icon = 'none', duration = 3000 } = options
      return new Promise((res: any) => {
        uni.showToast({ title, icon, duration })
        setTimeout(() => res(), duration)
      })
    }
    return Promise.resolve('')
  }

  /**
   * modal层
   * @param options { title: 标题 | content: 内容 | showCancel: true 显示取消 }
   * @returns
   */
  const modal = ({ title, content, showCancel = true }: any) => {
    return new Promise((resolve) => {
      uni.showModal({
        title,
        content,
        showCancel,
        success(res) {
          if (res.confirm) {
            resolve(true)
          } else if (res.cancel) {
            resolve(false)
          }
        },
      })
    })
  }

  return {
    toast,
    modal,
    navigateGo,
  }
}