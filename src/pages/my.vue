<template>
  <view>我的</view>
  <c-tab-bar value="1" />
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import cTabBar from '@/components/c-tab-bar/index.vue'

onLoad((options: any) => {
  // console.log(options)
  console.log(options)
})
</script>

<style lang="scss" scoped></style>
