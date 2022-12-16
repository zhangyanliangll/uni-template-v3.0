## usenNvigate 封装

> 配置公共跳转方法
> _该方法仅提供一种实现方式，具体可根据自己页面业务复杂程度而定_
> 总共二次封装了 5 个 uni-app 跳转方法 navigateTo redirectTo reLaunch navigateBack switchTab

### 使用方法

```vue
<script setup lang="ts">
import useRouter from '@/hooks/use-navigate'
const { navigateTo } = useRouter()

// 跳转 web-view 页面
navigateTo('/pages/web-view', {
  url: encodeURIComponent('http://localhost'),
})
</script>
;
```

详见 usenNvigate/index.ts
