const connect = require('connect')
const api = require('./api')

function hello(req, res, next) {
  // 匹配 /hello
  if(req.url.match(/^\/hello/)) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
  } else {
    next()
  }
}

// 这里出错概率不大，简单处理下
function errorPage(err, req, res, next) {
  console.log(err);
}

// 这里的 errorPage 处理主程序的所有错误
connect()
  .use(hello)
  .use('/api', api)
  .use(errorPage)
  .listen(3004)

/**
 * 用以下 实例 测试，查看效果：
 * http://localhost:3004/hello
 * 
 * http://localhost:3004/api/user/1
 * http://localhost:3004/api/user/2
 * 
 * http://localhost:3004/pet/1
 */