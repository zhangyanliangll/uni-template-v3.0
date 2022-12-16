/* eslint-disable no-unused-vars */

/**
 * @description: 节流函数
 * @param {Function} fn 回调
 * @param {Number} wait 延迟
 */
export function throttle(fn: (...args: any) => void, wait = 1000): any {
  let pre = Date.now()
  return function (this: any, ...rest: any) {
    const now = Date.now()
    if (now - pre >= wait) {
      fn.apply(this, rest)
      pre = Date.now()
    }
  }
}

/**
 * @description: 防抖函数
 * @param {*}
 * @return {*}
 */
export function debounce(
  func: (...args: any) => void,
  delay = 500,
): (...args: any) => void {
  let timeout: any = null
  return function (this: any, ...args: any) {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
