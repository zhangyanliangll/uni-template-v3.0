
export type WebViewConfigKeysType = "_path" | 'add-user'

export type WebViewItemType = {
  /** 跳转页面标题 */
  title?: string
  /** 跳转域名 */
  host?: string
  /** 默认携带参数 */
  query?: string
}

export type WebViewConfigType =  {
  [P in WebViewConfigKeysType]: WebViewItemType
}
