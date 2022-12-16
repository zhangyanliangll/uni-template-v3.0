

// 请求方式
export type RequestMethod = 'GET' | 'POST' | 'PUT'

/** 后端接口返回的数据结构配置 */
export declare namespace FetchResponse {
  interface Request<T = Record<string, unknown>> {
    /** 表示请求路径字段 */
    url: string
    /** 表示请求方式字段 */
    method: RequestMethod
    /** 表示请求参数 */
    params?: T
  }

  interface Response<T = any> {
    /** 表示后端请求状态码的属性字段 */
    code: string
    /** 表示后端消息的属性字段 */
    message: string
    /** 表示后端请求数据的属性字段 */
    result: T
    /** 后端业务上定义的成功请求的状态 */
    status: string | number
  }
}

