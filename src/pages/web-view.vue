<template>
  <web-view :src="url"></web-view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import qs from 'qs'
import { isObject } from '@/utils/is'
const url = ref('')

const config: WebViewNamespace.ConfigsType = {
  _path: {
    title: '',
    host: '',
    query: `appid=${123123}`,
  },
  'add-user': {
    title: '',
    host: '',
    query: `appid=${123123}`,
  },
}

onLoad((options: any) => {
  const { key } = options

  let { query } = options

  if (Object.prototype.hasOwnProperty.call(config, key)) {
    const configItem = config[key as WebViewNamespace.ConfigKeys]
    const { host, title } = configItem

    if (isObject(query)) {
      query = `${qs.stringify(query)}&`
    }

    if (configItem?.query) {
      query += configItem.query
    }

    // 默认 H5 跳转 域名
    const IP = host ? host : import.meta.env.VITE_H5_URL

    // 设置标题
    uni.setNavigationBarTitle({
      title: options.title || title,
    })

    url.value = `${IP}/${key}?${query}`
  }
})
</script>

<style lang="scss" scoped></style>
