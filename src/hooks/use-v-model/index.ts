import { computed } from 'vue'

export default (props: any, emit: any, propsName = 'modelValue') => {
  const emitName = `update:${propsName}`
  console.log(props, '=======', propsName)

  return computed({
    get() {
      return new Proxy(props[propsName], {
        set(obj, name, val) {
          emit(emitName, {
            ...obj,
            [name]: val,
          })
          return true
        },
      })
    },
    set(val) {
      emit(emitName, val)
    },
  })
}
