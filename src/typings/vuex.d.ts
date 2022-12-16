export interface UnistorageOptions {
  // 缓存的键，默认为该 store 的 id
  key?: string;
  // 需要缓存的路径
  paths?: string[];
  // 初始化恢复前触发
  beforeRestore?: Function
  // 初始化恢复后触发
  afterRestore?: Function
}

declare module 'pinia' {
  interface DefineStoreOptionsBase<S, Store> {
    unistorage: true | UnistorageOptions;
  }
}
