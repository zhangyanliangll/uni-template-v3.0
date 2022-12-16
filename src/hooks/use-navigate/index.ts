import qs from 'qs'
import type { UseNavigate } from './use-navigate.d'
import { throttle } from '@/utils/tools'
import { isObject } from '@/utils/is'

export default (): UseNavigate => {
  /**
   * 保留当前页面，跳转到应用内的某个页面
   * @param { String } url 跳转地址
   * @param { Object | string } data 跳转参数
   * @returns {Promise}
   */
  const navigateTo = throttle((url, data?: Record<string, unknown>) => {
    // 保持原有的地址, 用于重定向是使用
    const tempUrl = url

    if (isObject(data)) {
      url += `?${qs.stringify(data)}`
    }

    return new Promise((resolve, reject) => {
      // 获取当前页面栈的实例，以数组形式按栈的顺序给出，
      // 第一个元素为首页，最后一个元素为当前页面
      const pageArr = getCurrentPages()
      // 如果大于设置的页面临界值, 则用重定向, 否则正常跳转
      if (pageArr.length >= 10) {
        redirectTo(tempUrl, data).then(resolve).catch(reject)
      } else {
        uni.navigateTo({
          url,
          success(res) {
            resolve(res)
          },
          fail(err) {
            reject(err)
          },
        })
      }
    })
  })

  /**
   * 关闭当前页面，跳转到应用内的某个页面
   * @param { String } url 跳转地址
   * @param { Object | string } data 跳转参数
   * @returns {Promise}
   */
  const redirectTo = throttle((url, data?: Record<string, unknown>) => {
    if (isObject(data)) {
      url += `?${qs.stringify(data)}`
    }

    return new Promise((resolve, reject) => {
      uni.redirectTo({
        url,
        success(res: any) {
          resolve(res)
        },
        fail(err: any) {
          reject(err)
        },
      })
    })
  })

  /**
   * 闭所有页面，打开到应用内的某个页面
   * @param { String } url 跳转地址
   * @param { Object | string } data 跳转参数
   * @returns {Promise}
   */
  const reLaunch = throttle((url: string, data?: Record<string, unknown>) => {
    if (isObject(data)) {
      url += `?${qs.stringify(data)}`
    }

    return new Promise((resolve, reject) => {
      uni.reLaunch({
        url,
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        },
      })
    })
  })

  /**
   * 返回上一页面或多级页面
   * @param { number } delta 返回的页面数
   * @returns { Promise }
   */
  const navigateBack = throttle((delta = 1) => {
    return new Promise((resolve, reject) => {
      uni.navigateBack({
        delta,
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        },
      })
    })
  })

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
   * @param { number } delta 返回的页面数
   * @returns { Promise }
   */
  const switchTab = throttle((url: string) => {
    return new Promise((resolve, reject) => {
      uni.switchTab({
        url,
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        },
      })
    })
  })

  return {
    navigateTo,
    redirectTo,
    reLaunch,
    navigateBack,
    switchTab,
  }
}
