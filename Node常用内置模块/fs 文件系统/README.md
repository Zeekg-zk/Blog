# 总结

## 简介

### 文件读取

- `fs.readFile(path[, options], callback)` - 异步读取
- `fs.readFileSync(path[, options])` - 同步读取
- `fs.createReadStream(path[, options])` - 创建读取流
- `fs.read(fd, buffer, offset, length, position, callback)` 或   `fs.read(fd, [options,] callback)`
  读取文件

### 文件写入

- `fs.writeFile(file, data[, options], callback)` - 异步写入
- `fs.writeFileSync(file, data[, options])` - 同步写入
- `fs.createWriteStream(path[, options])` - 创建写入流

### 文件是否存在

- `fs.access(path[, mode], callback)` - 查看文件是否存在

### 创建目录

- `fs.mkdir(path[, options], callback)` - 异步创建目录
- `fs.mkdirSync(path[, options])` 同步创建目录

### 删除文件或目录

- `fs.unlink(path, callback)` - 异步地删除文件或符号链接
- `fs.unlinkSync(path)` - 同步删除

- `fs.rm(path[, options], callback)` - 异步地删除文件和目录
- `fs.rmSync(path[, options])` - 同步删除文件和目录

### 遍历目录

- `fs.readdirSync(path[, options])` 读取目录的内容
- `fs.statSync(path[, options])` 获取路径的相关信息

### 重命名

- `fs.rename(oldPath, newPath, callback)` - 将 oldPath 处的文件异步重命名为作为 newPath 提供的路径名

### 访问文件状态

- `fs.statSync(path[, options])` - 获取路径的 <fs.Stats> 路径的信息
- `fs.stat(path[, options], callback)` - 异步获取路径的 <fs.Stats>