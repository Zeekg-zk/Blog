# 总结

## 功能简介

基于文件的存储，用文件系统存放数据。
(基于文件的存储虽然易用，但并不是所有程序都适合，比如需要并发的情况)

## 知识点

- process.cwd() 方法返回 Node.js 进程的当前工作目录

- 采用 `fs.access()` 来判断文件是否存在