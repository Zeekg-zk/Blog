# 总结

## 介绍

官方描述：
- [morgan](https://www.npmjs.com/package/morgan) - previously logger
- [serve-favicon](https://www.npmjs.com/package/serve-favicon) - previously favicon
- [method-override](https://www.npmjs.com/package/method-override) - previously method-override
- [express-session](https://www.npmjs.com/package/express-session) - previously session

按照下面顺序观看：

- logger 记录请求

使用 `npm i morgan` 安装

morgan() 是一个灵活的请求日志中间件，带有可定制的日志格式。它还能缓冲日志输出，减少写硬盘的次数，并且如果你想把日志输出到控制台之外的其他地方，比如文件或socket中，还可以指定日志流。

- favicon 提供 favicon

使用 `npm i serve-favicon` 安装

favicon是网站的小图标，显示在浏览器的地址栏和收藏栏里。

- methodOverride 伪造 HTTP 方法

使用 `npm i method-override` 安装

浏览器的 `<form>` 只能GET或POST，一种常见的解决办法是添加一个 `<input type=hidden>`，将其值设定为你想用的方法名，然后让服务器检查那个值并“假装”它是这个请求的请求方法。methodOverride()是这项技术中服务器这边的解决办法。

- session 会话管理

使用 `npm i express-session` 安装

中间件session()需要用签名cookie，所以需要使用cookieParser()，并传给它一个秘钥。

在使用会话对象时，有一点一定要记住，会话对象在各个请求间会被串行化为JSON对象，所以req.session对象有跟 `JSON` 一样的局限性：不允许循环属性，不能用函数对象，Date对象无法正确串行化等等。在使用会话对象时，一定要记住这些限制。