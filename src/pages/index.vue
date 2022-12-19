<template>
  <view class="content flex-column justify-center items-center">
    <view @click="jump">跳123转</view>
  </view>
</template>

<script setup lang="ts">
import useBaseComponent from '@/hooks/use-base-component'

const { navigateGo } = useBaseComponent()

const jump = () => {
  navigateGo('/pages/my')
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
