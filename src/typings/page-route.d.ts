declare namespace RouteKey {
  /**
   * the route key
   * @translate 主页面路由
   */
  type Pages = 'pages/index' | 'pages/my' | 'pages/web-view'

  /**
   * the route key
   * @translate TabBar 页面路由
   */
  type TabBar = RouteUtils.GetAppointKeys<
    'package-name/pages/name' | 'package-user/pages/lol'
  >

  /**
   * the route key
   * @translate wew-view 页面路由
   */
  type WewView = RouteUtils.GetAppointKeys<'pages/web-view'>

  /**
   * the route key
   * @translate 分包页面路由
   */
  interface SubPackagesInterface {
    'package-user': 'pages/index' | 'pages/lol'
    'package-name': 'pages/name'
  }
}
