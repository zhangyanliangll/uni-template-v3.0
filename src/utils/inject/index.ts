import '../date-format'
import './uni'

/**
 * 移除数组中某个元素
 */
Object.defineProperty(Array.prototype, 'remove', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function (val: string | number) {
    const index = this.indexOf(val)
    if (index > -1) {
      this.splice(index, 1)
    }
    return this
  },
})

/**
 * 去除前后空格
 */
Object.defineProperty(String.prototype, 'Trim', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function (isGlobal = false) {
    if (isGlobal) {
      // 是否删除所有空格
      return this.replace(/\s/g, '')
    }
    return this.replace(/(^\s*)|(\s*$)/g, '')
  },
})

/**
 * 简单深拷贝 JSON.parse(JSON.stringify(value))
 */
Object.defineProperty(Object.prototype, 'deepCopy', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return JSON.parse(JSON.stringify(this))
  },
})

/**
 * 判断是否为身份证号 支持15位和18位
 */
Object.defineProperty(String.prototype, 'isIdCard', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/.test(
      this.Trim(),
    )
  },
})

/**
 * 数字格式化, 保留整正数
 */
Object.defineProperty(String.prototype, 'floatFormaterJust', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return this.replace(/[^\d]/g, '')
  },
})

/**
 * 数字格式化, 保留两位小数点, 且大于0, 键盘事件输入控制
 */
Object.defineProperty(String.prototype, 'floatFormater', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function (maxValue = Number.MAX_SAFE_INTEGER, howmMany = 2) {
    let num = this.Trim()
    num = num.replace(/^\./g, '')
    num = num.replace(/[^\d.]/g, '') //清除数字和‘.’以外的字符
    num = num.replace(/\.{2,}/g, '.') //只保留第一个，清楚多余的
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    if (howmMany == 3) {
      // eslint-disable-next-line no-useless-escape
      num = num.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3') //只能输入三个小数
    } else {
      // eslint-disable-next-line no-useless-escape
      num = num.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') //只能输入两个小数
    }
    if (num.indexOf('.') < 0 && num != '') {
      //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      num = String(parseFloat(num))
    }

    if (Number(num) > Number(maxValue)) {
      return Number(maxValue)
    }

    return num
  },
})

/**
 * 是否是email
 */
Object.defineProperty(String.prototype, 'isEmail', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(this.Trim())
  },
})

/**
 * 是否是手机号
 */
Object.defineProperty(String.prototype, 'isMobile', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(
      this.Trim(),
    )
  },
})

/**
 * 是否都是中文
 */
Object.defineProperty(String.prototype, 'isChinaName', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    const len = this.Trim().length
    if (len < 1 || len > 9 || !/^[\u4e00-\u9fa5]+$/.test(this.Trim())) {
      return false
    }
    return true
  },
})

/**
 * 判断是否为url
 */
Object.defineProperty(String.prototype, 'isUrl', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    // eslint-disable-next-line no-useless-escape
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
      this.Trim(),
    )
  },
})

/**
 * 格式化 手机号空格 19800000000 ===>  198 0000 0000
 */
Object.defineProperty(String.prototype, 'phoneSpace', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return this.replace(/(\d{3})(\d{4})/, '$1 $2 ')
  },
})

/**
 * 将字符串中的key给整出来，通常用于url里面的key=value value获取
 */
Object.defineProperty(String.prototype, 'query', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function (key: string) {
    const _result: Record<string, any> = {}
    this.replace(
      /([^?&=]+)=([^&]+)/g,
      (_: any, k: string | number, v: any) => (_result[k] = v),
    )
    return _result[key]
  },
})

/**
 * 金额 转换为 中文大写
 */
Object.defineProperty(String.prototype, 'toChies', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    let value = this.Trim()
    // 是否是合理数字
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(value)) {
      return
    }
    let unit = '仟佰拾亿仟佰拾万仟佰拾元角分'
    let str = ''
    value += '00'
    // 是否包含小数点
    const p = value.indexOf('.')
    if (p >= 0) {
      // 只取小数后两位
      value = value.substring(0, p) + value.substr(p + 1, 2)
    }
    // 截取单位
    unit = unit.substr(unit.length - value.length)
    for (let i = 0; i < value.length; i++) {
      // 拼接数字和单位
      str +=
        '零壹贰叁肆伍陆柒捌玖'.charAt(Number(value.charAt(i))) + unit.charAt(i)
    }
    if (str === '零元零角零分') {
      return '零元整'
    }
    return (
      str
        .replace(/零(仟|佰|拾|角)/g, '零')
        .replace(/(零)+/g, '零')
        .replace(/零(万|亿|元)/g, '$1')
        // .replace(/(亿)万|壹(拾)/g, '$1$2')
        .replace(/(亿)万/g, '$1')
        .replace(/^元零?|零分/g, '')
        .replace(/元$/g, '元整')
    )
  },
})
