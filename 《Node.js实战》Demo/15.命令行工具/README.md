# 总结

## 简介

### 解析命令行参数
使用 node 提供的 `process.argv` 属性

### 处理stdin和stdout
Node提供了两个Stream对象供你的命令行程序处理：
- process.stdin——读输入数据的ReadStream
- process.stdout——写输出数据的WriteStream。

每次调用console.log()时已经隐含着对process.stdout可写流的使用了。console.log()函数内部在格式化完输入参数后调用process.stdout.write()。但console函数更多是用来调试和检查对象用的。当你需要将结构化的数据写到stdout中时，可以直接调用process.stdout.write()。