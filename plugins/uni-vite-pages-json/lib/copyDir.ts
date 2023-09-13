const fs = require('fs')
const path = require('path')
const root = process.env.UNI_INPUT_DIR

// 拷贝源文件夹路径
const sourceDir = `${root}/router`
// 目标文件夹路径
const destDir = './plugins/uni-vite-pages-json/lib/router'

// 递归拷贝文件夹
export function copyDir(src = sourceDir, dest = destDir) {
  // 创建目标文件夹
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest)
  }

  // 读取源文件夹下的所有文件和子文件夹
  const entries = fs.readdirSync(src, { withFileTypes: true })

  // 遍历所有文件和子文件夹
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    // 如果是文件，直接拷贝
    if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath)
    }
    // 如果是文件夹，递归拷贝
    else if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    }
  }
}

// 调用递归拷贝函数
export default copyDir
