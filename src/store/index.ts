// 自动注入所有pinia模块
const files: Record<string, any> = import.meta.globEager('./modules/*.ts')

const modules: Record<string, any> = {}

for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    modules[key.replace(/(.*\/)*([^.]+).*/gi, '$2')] = files[key].default
  }
}

type FileNameType = 'app' | 'user' // 文件名字

export default (fileName: FileNameType) => {
  return modules[fileName]()
}
