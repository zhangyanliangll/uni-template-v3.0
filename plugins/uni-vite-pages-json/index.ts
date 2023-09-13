import type { Plugin } from 'vite'
const fs = require('fs')
const chokidar = require('chokidar')
import { resolve } from 'path'
const root = process.env.UNI_INPUT_DIR + '/'

const vm = require('vm')
const context = new vm.createContext({}) // 使用沙盒对象创建上下文

let script: any = null

// 更新 pages.json
function setPagesJson() {
  const json = getRouterExportFileContent()
  script = new vm.Script(`var message = ${json};`)

  script.runInContext(context) // 在上下文中运行脚本

  fs.writeFileSync(resolve(root, 'pages.json'), JSON.stringify(context.message))
}

// 获取 Router
function getRouterExportFileContent() {
  const Str = fs.readFileSync(`${root}router/index.ts`, 'utf-8')
  let content = Str?.split('default')[1]
  content = content.replace(/pages/g, `pages:${getFileExportContent('pages')}`)
  content = content.replace(
    /subPackages/g,
    `subPackages:${getFileExportContent('sub-packages')}`,
  )
  content = content.replace(/list/g, `list:${getFileExportContent('tab-bar')}`)
  return content
}

// 获取文件导出的内容
function getFileExportContent(fileName = 'index') {
  const Str = fs.readFileSync(`${root}router/modules/${fileName}.ts`, 'utf-8')
  const content = Str?.split('=')[1].split('export')[0]
  return content
}

// 校验是否是ts文件
function isValidTsFile(filename) {
  const regex = /\.ts$/
  return regex.test(filename)
}

export default (isDev): Plugin => {
  return {
    name: 'uni-modules-to-pages',
    config() {
      if (isDev) {
        chokidar.watch(`${root}router`).on('all', (event, path) => {
          if (isValidTsFile(path)) {
            setPagesJson()
          }
        })
      }
    },
  }
}
