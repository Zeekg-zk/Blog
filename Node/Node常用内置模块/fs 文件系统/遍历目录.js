const fs = require('fs');
const path = require('path');

const getFiles = function(dir) {
  // path.resolve() 方法将路径或路径片段的序列解析为绝对路径
  let results = [path.resolve(dir)]
  // fs.readdirSync 读取目录的内容
  let files = fs.readdirSync(dir, 'utf8')
  files.forEach(function(file) {
    file = path.resolve(dir, file)
    // fs.statSync() 获取路径的相关信息
    let stats = fs.statSync(file)
    if(stats.isDirectory()) {
      // 是文件夹就继续遍历
      results = results.concat(getFiles(file))
    } else if(stats.isFile()) {
      // 是文件就添加进来
      results.push(file)
    }
  })
  return results
}

const files = getFiles('../')
console.log(files);