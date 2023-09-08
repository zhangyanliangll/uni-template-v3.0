import useRouter from '@/hooks/use-navigate'
import { isTabBar, isPage } from '@/utils/route'
import { isString, isObject, isNumber } from '@/utils/is'

export default (): UseBaseComponent.CustomComponent => {
  const { navigateTo, redirectTo, reLaunch, switchTab, navigateBack } =
    useRouter()

  /**
   * 跳转方法
   * @param options 跳转配置
   * @param type 类型 redirect
   */
  const navigateGo = (
    options: any,
    type?: UseBaseComponent.NavigateGoToType,
  ) => {
    const url = options?.url || options || '' // 跳转路径
    const query = options?.query || {}

    if (isNumber(options)) {
      return navigateBack(url)
    }

    // #ifdef H5
    // http 开头
    if (url.isUrl()) {
      window.location = url as any
    }
    // #endif

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
   * @param options
   * @returns Promise
   */
  const toast = (options: string | UniNamespace.ShowToastOptions) => {
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
   * @param options
   * @returns Promise
   */
  const modal = ({
    title,
    content,
    showCancel = true,
  }: UniNamespace.ShowModalOptions) => {
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
    navigateGo,
    toast,
    modal,
  }
}
