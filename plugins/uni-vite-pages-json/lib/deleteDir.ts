const fs = require('fs')
const path = require('path')

// 要删除的文件夹路径
const dirDir = './plugins/uni-vite-pages-json/lib/router'

// 递归删除文件夹
export function deleteDir(dirPath = dirDir) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        // 递归删除子文件夹
        deleteDir(curPath)
      } else {
        // 删除文件
        fs.unlinkSync(curPath)
      }
    })
    // 删除文件夹
    fs.rmdirSync(dirPath)
    console.log(`Deleted folder ${dirPath}`)
  }
}

// 调用递归删除函数
export default deleteDir
