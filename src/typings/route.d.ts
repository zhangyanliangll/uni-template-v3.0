declare namespace Route {
  /** 主包类型 */
  type PagesType = RouteUtils.RouteConfig<RouteKey.Pages>

  /** 分包类型 */
  type SubPackagesType =
    RouteUtils.GetSubPackages[RouteUtils.GetSubPackagesRoot]

  /** 底部导航类型 */
  type TabBarType = RouteUtils.GetTabBarConfig

  /** 全部路径 Key */
  type AllRouteKey = RouteUtils.GetAllRouteKey

  /** 主包路径 */
  type PagesRoutePath = RouteUtils.GetPagesUrl

  /** 分包路径 */
  type SubPackagesRoutePath = RouteUtils.GetSubPackagesUrl

  /** web-view 路径 */
  type WewViewPath = `/${RouteKey.WewView}`

  /** 全部路径 */
  type AllRoutePath = PagesRoutePath | SubPackagesRoutePath
}

declare namespace RouteUtils {
  /** 主包页面路由 */
  type Pages = RouteKey.Pages

  /** 分包页面路由 */
  type SubPackagesInterface = RouteKey.SubPackagesInterface

  /** 获取分包子根路径 */
  type GetSubPackagesRoot = keyof SubPackagesInterface

  /** 路由配置 */
  type RouteConfig<T> = {
    /** 页面路径 */
    path: T
    /** 页面窗口表现 */
    style?: {
      /** 页面名称 */
      navigationBarTitleText: string
      [key: string]: string | boolean
    }
  }

  /** 分包配置 */
  type SubPackagesConfig<T extends GetSubPackagesRoot> = {
    /** 分包的根目录  */
    root: T
    /** 分包由哪些页面组成  */
    pages: RouteConfig<SubPackagesInterface[T]>[]
  }

  /** 获取分包子页面 */
  type GetSubPackages<T extends GetSubPackagesRoot = GetSubPackagesRoot> = {
    [Root in T]: SubPackagesConfig<Root>
  }

  /** 分包子路径 转换成 完整 Key */
  type SubPackagesAllToKey = {
    [K in GetSubPackagesRoot]: `${K}/${SubPackagesInterface[K]}`
  }

  /** 获取分包全部 Key */
  type GetSubPackagesAllKey = SubPackagesAllToKey[GetSubPackagesRoot]

  /** 获取分包 URL */
  type GetSubPackagesUrl = `/${GetSubPackagesAllKey}`

  /** 获取主包 URL */
  type GetPagesUrl = `/${Pages}`

  /** 获取路径完整 Key */
  type GetAllRouteKey = Pages | GetSubPackagesAllKey

  /** 获取指定 Key */
  type GetAppointKeys<U extends GetAllRouteKey> = Extract<GetAllRouteKey, U>

  /** 底部导航配置 */
  type GetTabBarConfig = {
    /** 页面路径 */
    pagePath: RouteKey.TabBar
    /** 按钮名称 */
    text: string
    /** 未选中显示的图标 */
    iconPath: string
    /** 选中显示的图标 */
    selectedIconPath: string
  }

  type Extract<T, U extends T> = T extends U ? T : never
}
