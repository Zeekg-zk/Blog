# 总结

## 简介

process 对象提供有关当前 Node.js 进程的信息并对其进行控制。 虽然它作为全局可用，但是建议通过 require 或 import 显式地访问它：
`const process = require('process');`

`process.argv` 属性返回数组，其中包含启动 Node.js 进程时传入的命令行参数。

`process.execArgv` 属性返回 Node.js 进程启动时传入的一组特定于 Node.js 的命令行选项

`process.cwd()` 方法返回 Node.js 进程的当前工作目录

`process.chdir()` 方法更改 Node.js 进程的当前工作目录

`process.stdin`、`process.stdout`、`process.stderr` 分别代表进程的标准输入、标准输出、标准错误输出

- process.nextTick(callback[, ...args])
process.nextTick() 将 callback 添加到"下一个滴答队列"。 在 JavaScript 堆栈上的当前操作运行完成之后，且在允许事件循环继续之前，此队列将被完全排空。 如果递归地调用 process.nextTick()，则可能会创建无限的循环。
