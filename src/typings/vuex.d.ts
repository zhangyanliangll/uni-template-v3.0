export interface UnistorageOptions<K extends StorageInterface.StoreKeys> {
  // 缓存的键，默认为该 store 的 id
  key?: K
  // 需要缓存的路径
  paths?: (keyof StorageInterface.Store[K])[]
  // 初始化恢复前触发
  beforeRestore?: Function
  // 初始化恢复后触发
  afterRestore?: Function
  // 序列化
  serializer?: {
    // 序列化，默认为 JSON.stringify
    serialize?: Function
    // 反序列化，默认为 JSON.parse
    deserialize?: Function
  }
}

export type UnistorageType = {
  [K in StorageInterface.StoreKeys]: UnistorageOptions<K>
}

declare module 'pinia' {
  interface DefineStoreOptionsBase<S, Store> {
    unistorage: true | UnistorageType[StorageInterface.StoreKeys]
  }
}
