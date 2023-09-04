declare namespace StorageInterface {
  /** 存储数据的类型 */
  interface Local extends StoreInterface.Storage {
    /** 用户token */
    token: string
    /** 用户刷新token */
    refreshToken: string
    /** 用户信息 */
    userInfo: Auth.UserInfo
  }
}
