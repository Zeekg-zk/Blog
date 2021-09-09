# 总结

## cookieParser 解析 HTTP cookie

实现 cookie 的解析

使用 `npm i cookie-parser` 安装

req.cookies 默认是用常规未签名 cookie 组装而成的。如果你想支持session()中间件要求的签名cookie，在创建cookieParser()实例时要传入一个加密用的字符串。

## bodyParser 解析请求主体

使用 `npm i body-parser` 安装

`body-parser` 组件为你提供了req.body属性，可以用来解析`JSON`、`x-www-form-urlencoded` 和 `multipart/form-data` 请求。

`body-parser` 解析 `multipart/form-data` 数据，一般是为了文件上传。它的底层处理是由第三方模块 `formidable` 完成的。在 **4.简单上传文件服务器** 这里有介绍

## limit 请求主体的限制

`limit` 中间件组件的目的是帮助过滤巨型的请求，不管此次请求是不是恶意的。

## query 查询字符串解析

使用 `npm i query-string` 安装

使用 `url` 和 `query-string` 配合将 url 解析