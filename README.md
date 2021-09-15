# Node-Study
记录学习Node中做的一些Demo。

若有问题或者不当之处，请在 `Issues` 中提出

持续更新中......



## Node 常用内置模块

- `dns` 域名服务器

- `fs` 文件系统   [查看代码](https://github.com/ZiKng-Coding/Node-Study/tree/main/Node%E5%B8%B8%E7%94%A8%E5%86%85%E7%BD%AE%E6%A8%A1%E5%9D%97/fs%20%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F)
- `http` 超文本传输协议
- `https` 安全超文本传输协议
- `net` 网络
- `path` 路径
- `url` 网址
- `zlib` 压缩   [查看代码](https://github.com/ZiKng-Coding/Node-Study/tree/main/Node%E5%B8%B8%E7%94%A8%E5%86%85%E7%BD%AE%E6%A8%A1%E5%9D%97/zlib%20%E5%8E%8B%E7%BC%A9)

## npm-package

手动实现一些 `npm` 包，也都会用 `jest` 测试

1. `node-validator` - 验证字符串合法性的功能   [查看代码](https://github.com/ZiKng-Coding/Node-Study/tree/main/npm-package/node-validator)

## 《Node.js实战》Demo

练习《Node.js实战》中的例子。书中有些例子现在已经不能运行，根据官网重新实现了一些例子。

每个文件都有相应的`README.md`文件进行解释，代码也都有相应的注释

1. [用回调处理—次性事件](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/1.%E7%94%A8%E5%9B%9E%E8%B0%83%E5%A4%84%E7%90%86%E4%B8%80%E6%AC%A1%E6%80%A7%E4%BA%8B%E4%BB%B6)
2. [简单Web程序](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/2.%E7%AE%80%E5%8D%95Web%E7%A8%8B%E5%BA%8F)
3. [To-Do-List](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/3.To-Do-List)
4. [简单上传文件服务器](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/4.%E7%AE%80%E5%8D%95%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8)
5. [基于文件的存储](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/5.%E5%9F%BA%E4%BA%8E%E6%96%87%E4%BB%B6%E7%9A%84%E5%AD%98%E5%82%A8)
6. [node中使用mysql](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/6.node%E4%B8%AD%E4%BD%BF%E7%94%A8mysql)
7. [Connect的使用](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/7.Connect%E4%BD%BF%E7%94%A8)
8. [Connect使用中间件之cookieParser-bodyParser-limit-query](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/8.Connect%E8%87%AA%E5%B8%A6%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BB%B6%E4%B9%8BcookieParser-bodyParser-limit-query)
9. [Connect使用中间件之logger-favicon-methodOverride-session](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/9.Connect%E4%BD%BF%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6%E4%B9%8Blogger-favicon-methodOverride-session)
10. [Connect使用中间件之处理Web程序安全的中间件](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/10.Connect%E4%BD%BF%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6%E4%B9%8B%E5%A4%84%E7%90%86Web%E7%A8%8B%E5%BA%8F%E5%AE%89%E5%85%A8%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BB%B6)
11. [Connect使用中间件之提供静态文件服务的中间件](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/11.Connect%E4%BD%BF%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6%E4%B9%8B%E6%8F%90%E4%BE%9B%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6%E6%9C%8D%E5%8A%A1%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BB%B6)
12. [测试Node程序](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/12.%E6%B5%8B%E8%AF%95Node%E7%A8%8B%E5%BA%8F)
13. [ejs和pug模板](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/13.ejs%E5%92%8Cpug%E6%A8%A1%E6%9D%BF)
14. [Buffer相关](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/14.Buffer%E7%9B%B8%E5%85%B3)
15. [命令行工具](https://github.com/ZiKng-Coding/Node-Study/tree/main/%E3%80%8ANode.js%E5%AE%9E%E6%88%98%E3%80%8BDemo/15.%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7)
