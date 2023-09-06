// 校验类型
export function is(value: unknown, type: string) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

// 是否是数组
export function isArray(value: any): value is Array<any> {
  return value && Array.isArray(value)
}

// 是否是数值
export function isNumber(value: any): value is Array<any> {
  return is(value, 'Number')
}

// 是否为字符串类型
export function isString(value: unknown): value is string {
  return is(value, 'String')
}

// 是否为对象
export function isObject(value: any): value is Record<any, any> {
  return value !== null && is(value, 'Object')
}

// 是否为空
export function isEmpty<T = unknown>(value: T): value is T {
  if (isArray(value) || isString(value)) {
    return value.length === 0
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0
  }

  return value === '' || value === undefined || value === null
}
