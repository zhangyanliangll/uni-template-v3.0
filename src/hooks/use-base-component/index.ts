import useRouter from '@/hooks/use-navigate'
import { isTabBar, isPage } from '@/utils/route'
import { isString, isObject } from '@/utils/is'
import type { UseBaseComponent } from './use-base-component'

export default (): UseBaseComponent => {
  const { navigateTo, redirectTo, reLaunch, switchTab } = useRouter()

  /**
   * 跳转方法
   * @param options 跳转配置
   * @param type 类型 redirect
   */
  const navigateGo = (options: any, type?: string) => {
    let url = options?.url || options || '' // 跳转路径
    const query = options?.query || {}

    // http 开头 || isH5
    if (url.isUrl() || options?.isH5) {
      // #ifdef H5
      window.location = url as any
      return
      // #endif
      // #ifndef H5
      url = '/pages/web-view'
      query.key = options.key
      // #endif
    }

    if (!isPage(url)) {
      throw '页面不存在 404 '
    }

    // 是 tabBar 页面
    if (isTabBar(url)) {
      switchTab(url)
    } else if (type) {
      // 关闭当前页面:redirectTo  关闭所有页面:reLaunch
      const api = type === 'reLaunch' ? reLaunch : redirectTo
      api(url, query)
    } else {
      navigateTo(url, query)
    }
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
