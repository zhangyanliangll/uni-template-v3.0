declare global {
  interface Uni {
    /**
     * 跳转方法
     * @param options 跳转配置
     * @param type 类型 `redirectTo`:关闭当前页面 | `reLaunch`:关闭所有页面
     */
    $navigateGo: UseBaseComponent.CustomComponent['navigateGo']
    /**
     * toast弹窗
     * @param options
     * @returns Promise
     */
    $toast: UseBaseComponent.CustomComponent['toast']
    /**
     * modal层
     * @param options
     * @returns Promise
     */
    $modal: UseBaseComponent.CustomComponent['modal']
  }
}

// 注意: 修改"全局声明"必须在模块内部, 所以至少要有 export{}字样
// 不然会报错❌: 全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中
export {}
