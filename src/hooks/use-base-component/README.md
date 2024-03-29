## useBaseComponent 封装

> 配置公共方法
> _该 Hooks 进行 uni-app 方法二次封装 ，提供多种基础组件 Api 方法，如：跳转（navigateGo），成功提示（toast），二次弹框（modal），具体可根据自己页面业务复杂程度而定_
> 总共二次封装了 3 个 uni-app 方法 navigateGo toast modal

### 使用方法一

```vue
<script setup lang="ts">
import useBaseComponent from '@/hooks/use-base-component'
const { navigateGo } = useBaseComponent()

// 跳转 web-view 页面
navigateGo('http://localhost')
</script>
;
```

### 使用方法二

```vue
<script setup lang="ts">
uni.$navigateGo()
uni.$toast()
uni.$modal()
</script>
```

1. navigateGo 方法
   1.1. 传参 options 可为 string | { url: string , query?: { } } | number
   | { url: 'web-view' , query: { key: WebViewNamespace.ConfigKeys }}
   2.2. 传参 redirect 是否关闭当前页面

详见 useBaseComponent/index.ts
