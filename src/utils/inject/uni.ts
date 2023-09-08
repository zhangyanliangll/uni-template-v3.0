import useBaseComponent from '@/hooks/use-base-component'
const componentObj: any = useBaseComponent()

for (const key in componentObj) {
  if (Object.prototype.hasOwnProperty.call(componentObj, key)) {
    const funName = ('$' + key) as string
    ;(uni as any)[funName as any] = componentObj[key] as any
  }
}
