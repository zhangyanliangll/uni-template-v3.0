declare namespace StoreInterface {
   /** 本地储存类型 */
  interface Storage {
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
}
