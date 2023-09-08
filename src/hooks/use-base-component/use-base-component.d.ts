declare namespace UseBaseComponent {
  /** navigateGo 第一个参数 */
  type NavigateGoOptionsType =
    | UseBaseComponentUtils.GetNavigateGoOptionsType
    | Exclude<Route.AllRoutePath, Route.WewViewPath>
    | number

  /** navigateGo 第二个参数 */
  type NavigateGoToType = 'redirect' | 'reLaunch'

  interface CustomComponent {
    /**
     * 跳转方法
     * @param options 跳转配置
     * @param type 类型 redirect
     */
    navigateGo: (
      options: NavigateGoOptionsType,
      toType?: NavigateGoToType,
    ) => void
    /**
     * toast弹窗
     * @param options
     * @returns
     */
    toast: (options: string | UniNamespace.ShowToastOptions) => Promise<unknown>
    /**
     * modal层
     * @param options 配置
     * @returns
     */
    modal: (options: UniNamespace.ShowModalOptions) => Promise<unknown>
  }
}

declare namespace UseBaseComponentUtils {
  /** 获取 navigateGo 方法第一个参数类型 */
  type GetNavigateGoOptionsType<
    T extends Route.AllRoutePath = Route.AllRoutePath,
    V extends Route.WewViewPath = Route.WewViewPath,
  > = T extends V
    ? {
        url: V
        query: {
          key: WebViewNamespace.ConfigKeys
        }
      }
    : {
        url: T
        query?: ObjectType
      }
}
