declare namespace WebViewNamespace {
  /** web-view key */
  type ConfigKeys = '_path' | 'add-user'

  type ConfigItemType = {
    /** 跳转页面标题 */
    title?: string
    /** 跳转域名 */
    host?: string
    /** 默认携带参数 */
    query?: string
  }

  /** web-view config 类型 */
  type ConfigsType = {
    [P in ConfigKeys]: ConfigItemType
  }
}
