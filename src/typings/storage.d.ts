declare namespace StorageInterface {

  /** Store 存储数据的类型 */
  interface Store {
    /** appStore 数据的类型 */
    appStore: {
      /** 用户token */
      token: string
    }
    /** userStore 数据的类型 */
    userStore: {
      /** 用户信息 */
      userInfo: Auth.UserInfo
      /** 授权信息 */
      authInfo: any
    }
  }

  /** Store 存储 key */
  type StoreKeys = keyof StorageInterface.Store

  /** 存储数据的类型 */
  interface Local extends StorageInterface.Store {
    /** 用户token */
    token: string
    /** 用户刷新token */
    refreshToken: string
    /** 用户信息 */
    userInfo: Auth.UserInfo
  }
}
