import { API_VERSION, API_CHARSET } from '@/config'

/**
 * @param url 路径
 * @param params 参数
 * @returns {}
 */
export const getHeader = () => {
  // 系统信息
  const systemInfo: Record<string, any> = uni.getSystemInfoSync()
  // 分辨率
  const screenWidth = systemInfo?.screenWidth || 0
  const pixelRatio = systemInfo?.pixelRatio || 0
  const screenHeight = systemInfo?.screenHeight || 0
  const resolution = `${screenWidth * pixelRatio}x${screenHeight * pixelRatio}`
  // 请求时间
  const time = new Date().getTime().toString()
  // 获取网络类型
  let network = 'unkown'
  uni.getNetworkType({
    success({ networkType }) {
      network = networkType
    },
  })
  const headers: Record<string, string> = {
    // 'X-SOURCE-CITY': city,
    // 'X-SOURCE-SIGN': sign,
    'X-VERSION': API_VERSION,
    'X-CHARSET': API_CHARSET,
    'X-RESOLUTION': resolution,
    'X-SOURCE-TIME': time,
    'X-SOURCE-VERSION': '1.0.0',
    'X-PLATFORM': systemInfo.platform,
    'X-DEVICE-MODEL': systemInfo.model,
    'X-DEVICE-BRAND': systemInfo.brand,
    'X-DEVICE-NETWORK': network,
  }
  return headers
}
