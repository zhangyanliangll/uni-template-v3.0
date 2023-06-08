<template>
  <view><web-view :src="url"></web-view></view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const config = {
  _path: {
    host: '',
    query: '',
  },
}
const url = ref('')

onLoad((options: any) => {
  url.value = decodeURIComponent(options.url)
})
</script>

<style lang="scss" scoped></style>
