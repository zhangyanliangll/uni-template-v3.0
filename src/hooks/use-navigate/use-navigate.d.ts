export interface UseNavigate {
  /**
   * 保留当前页面，跳转到应用内的某个页面
   * @param { String } url 跳转地址
   * @param { Object } data 跳转参数
   * @returns { Promise }
   */
  navigateTo: (url: string, data?: Record<string, unknown>) => Promise<unknown>

  /**
   * 关闭当前页面，跳转到应用内的某个页面
   * @param { String } url 跳转地址
   * @param { Object } data 跳转参数
   * @returns { Promise }
   */
  redirectTo: (url: string, data?: Record<string, unknown>) => Promise<unknown>

  /**
   * 关闭所有页面，打开到应用内的某个页面
   * @param { String } url 跳转地址
   * @param { Object } data 跳转参数
   * @returns { Promise }
   */
  reLaunch: (url: string, data?: Record<string, unknown>) => Promise<unknown>

  /**
   * 返回上一页面或多级页面
   * @param { number } delta 返回的页面数,默认 1
   * @returns { Promise }
   */
  navigateBack: (delta?: number) => Promise<unknown>

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
   * @param { String } url 跳转地址
   * @param { Object } data 跳转参数
   * @returns { Promise }
   */
  switchTab: (url: string, data?: Record<string, unknown>) => Promise<unknown>
}
