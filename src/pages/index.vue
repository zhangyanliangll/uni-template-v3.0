<template>
  <view class="content flex-column justify-center items-center">
    <view style="margin-top: 100px" @click="jump">跳123转</view>
  </view>
  <c-tab-bar value="0" />
</template>

<script setup lang="ts">
import cTabBar from '@/components/c-tab-bar/index.vue'
const jump = () => {
  uni.$navigateGo({
    url: '/pages/web-view',
    query: {
      key: 'add-user',
    },
  })
}
</script>

<style lang="scss" scoped>
.content {
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;

    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
}
</style>
