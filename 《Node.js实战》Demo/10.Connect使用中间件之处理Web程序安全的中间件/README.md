# 总结

## 介绍

Node.js 的核心API刻意停留在底层，也就是说它没有为构建Web程序提供内置的安全或最佳实践。

- [csurf](https://www.npmjs.com/package/csurf) - previously csrf
- [errorhandler](https://www.npmjs.com/package/errorhandler) - previously error-handler

按照下面顺序观看

- csurf 跨站请求伪造防护

使用 `npm i csurf` 安装

创建用于 CSRF 令牌创建和验证的中间件。这个中间件添加了一个 req.csrfToken() 函数来制作一个令牌，该令牌应该添加到改变状态的请求中，在隐藏的表单字段中，查询字符串等。这个令牌根据访问者的会话或 csrf cookie 进行验证。

- errorhandler 开发错误处理

使用 `npm i errorhandler` 安装

此中间件适合用在开发中，它可以基于请求头域Accept提供详尽的HTML、JSON和普通文本错误响应。