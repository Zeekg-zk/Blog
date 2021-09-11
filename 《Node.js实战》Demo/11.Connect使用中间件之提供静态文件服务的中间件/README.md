# 总结

## 介绍

- [serve-static](https://www.npmjs.com/package/serve-static) - previously static
- [compression](https://www.npmjs.com/package/compression) - previously compress
- [serve-index](https://www.npmjs.com/package/serve-index) - previously directory

按照下面顺序观看：

- static 静态文件服务

使用 `npm i serve-static` 安装

创建一个新的中间件函数来从给定的根目录中提供文件。要提供的文件将通过将 req.url 与提供的根目录结合来确定。当找不到文件时，该模块不会发送 404 响应，而是会调用 next() 以移动到下一个中​​间件，从而允许堆叠和回退。

- compression 压缩静态文件

使用 `npm i compression` 安装

用此中间件压缩出站数据

- serve-index 目录列表

使用 `npm i serve-index` 安装

需要配合 `server-static` 使用