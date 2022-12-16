declare global {
  interface Object {
    /**
     * 简单深拷贝 SON.parse(JSON.stringify(value))
     */
    deepCopy(): Record<string, any>
  }
  interface Array<T> {
    /**
     * 移除非对象数组中的某个元素
     * @param val 要移除的元素
     */
    remove(val: string | number): Array<string | number>
  }
  interface String {
    /**
     * 去除字符串空格
     * @param isGlobal 是否全局去除空格
     */
    Trim(isGlobal?: boolean): string
    /**
     * 判断是否为身份证号 支持15位和18位
     */
    isIdCard(): boolean
    /**
     * 数字格式化, 保留两位小数点 12..300 ===>  12.30
     */
    floatFormater(): string
    /**
     * 判断是否是邮箱
     */
    isEmail(): boolean
    /**
     * 判断是否是手机号
     */
    isMobile(): boolean
    /**
     * 是否都是中文
     */
    isChinaName(): boolean
    /**
     * 判断是否为url
     */
    isUrl(): boolean
    /**
     * 手机号空格 19800000000 ===>  198 0000 0000
     */
    phoneSpace(): string
    /**
     * 将字符串中的key给整出来，通常用于url里面的key=value value获取
     *  @param key 获取值的键名
     */
    query(key: string): string
    /**
     * 金额 转换为 中文大写
     */
    toChies(): string
  }
  interface Date {
    /**
     * 支持美式时间格式
     * @param option 输入 YYYY-MM-DD HH:mm:ss
     */
    format(format: string): string
    /**
     * 格式化时间 'YYYY-MM-DD HH:mm'
     */
    datetime(): string
    /**
     * 格式化时间 'YYYY-MM-DD HH:mm:ss'
     */
    dateTime(): string
    /**
     * 格式化时间 HH:mm
     */
    time(): string
  }
}

// 注意: 修改"全局声明"必须在模块内部, 所以至少要有 export{}字样
// 不然会报错❌: 全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中
export {}
