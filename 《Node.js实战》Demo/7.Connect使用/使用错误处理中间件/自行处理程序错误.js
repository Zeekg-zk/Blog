const connect = require('connect')

function errorHandle() {
  // process.env.NODE_ENV 
  // process.env 中并没有 NODE_ENV 这个属性，是用户自定义的
  let env = process.env.NODE_ENV || 'development';
  return (err, req, res, next) => {
    res.statusCode = 500;
    switch(env) {
      case 'development':
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(err))
        break;
      default:
        res.end('Server error')
    }
  }
}

connect()
  .use((req, res) => {
    // 模拟路由中间件出现错误
    next(new Error('Server error'));
  })
  // 这个中间件会被跳过，直接到 errorHandle() 中间件去
  .use((req, res) => {
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World')
  })
  .use(errorHandle())
  .listen(3003)