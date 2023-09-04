### 使用方法

#### `推荐使用` 有 TS 自带提示

```vue
<script setup lang="ts">
import appStore from '@/store/modules/app'
const store = appStore()

console.log(store.token, '====token====')
</script>
```

#### `不推荐` 没有进行 TS 去再度 封装 `推荐使用上面`

```vue
<script setup lang="ts">
import useStore from '@/store'
const store = useStore('app')

console.log(store.token, '====token====')
</script>
```
