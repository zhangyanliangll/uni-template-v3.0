<template>
  <u-tabbar
    :value="Number(value)"
    :placeholder="false"
    :safe-area-inset-bottom="false"
  >
    <u-tabbar-item
      v-for="(item, index) in list"
      :key="index"
      :text="item.text"
      size="200"
      icon="home"
      @click="jump('/' + item.pagePath)"
    />
  </u-tabbar>
</template>

<script setup lang="ts">
import list from '@/router/modules/tab-bar'

const { value } = useAttrs()

const jump = (url: string) => {
  uni.$navigateGo(url as any)
}
</script>

<style lang="scss" scoped></style>
