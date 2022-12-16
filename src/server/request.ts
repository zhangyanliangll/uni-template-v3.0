import {
  API_BASE_URL,
  REQUEST_TIMEOUT,
  NO_ERROR_MSG_CODE,
  ERROR_STATUS,
} from '@/config'
import type { FetchResponse } from '@/typings/server'
import { getHeader } from './helpers'

/**
 * api 请求
 * @param url 请求路径
 * @param params 请求参数
 * @param method 请求方式
 * @returns
 */
export const request = async ({
  url,
  params = {},
  method = 'GET',
}: FetchResponse.Request): Promise<unknown> => {
  const header = await getHeader()
  const data = params

  return new Promise((resolve, reject) => {
    uni.request({
      url: API_BASE_URL + url,
      data,
      header,
      timeout: REQUEST_TIMEOUT,
      method,
      success: (response) => {
        const { data, statusCode }: any = response
        // 状态成功
        if (statusCode === 200) {
          const { result, message } = data as FetchResponse.Response<unknown>
          // 请求成功
          if (data.status === 200) {
            console.log(
              `%c 接收 api_${url}`,
              'background:#2472C8;color:#fff',
              result,
            )
            return resolve(result)
          } else {
            if (!NO_ERROR_MSG_CODE.includes(data.status)) {
              uni.showToast({
                title: message,
                icon: 'none',
                mask: true,
              })
            }
            reject(data)
          }
        } else {
          uni.showToast({
            title: (ERROR_STATUS as any)[statusCode],
            icon: 'none',
            mask: true,
          })
        }
      },
      fail: (error) => {
        reject(error)
      },
    })
  })
}

/**
 * get 请求
 * @param url
 * @param params
 * @returns
 */
const get = (url: string, params = {}): Promise<unknown> => {
  return request({
    url,
    params,
    method: 'GET',
  })
}

/**
 * post 请求
 * @param url
 * @param params
 * @returns
 */
const post = (url: string, params = {}): Promise<unknown> => {
  return request({
    url,
    params,
    method: 'POST',
  })
}

export default {
  get,
  post,
}
