## userVModel 封装

> 组件传值实现数据单向流，具体可根据自己页面业务复杂程度使用\_

### 使用方法

```vue
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

import userVModel from '@/hooks/use-v-model'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {
        sex: '男',
      }
    },
  },
})

const emit = defineEmits(['update:modelValue'])

const model = userVModel(props, emit)
</script>
;
```

详见 use-v-model/index.ts
