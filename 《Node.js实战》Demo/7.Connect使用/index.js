const connect = require('connect')
// const app = connect();

/**
 * 日志的中间件
 * @param {*} req 请求
 * @param {*} res 响应
 * @param {*} next 回调函数
 */
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

function hello(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World')
}


// 实现HTTP Basic认证的中间件组件
function restrict(req, res, next) {
  let authorization = req.header.authorization;
  if(!authorization) return next(new Error('Invalid authorization'))

  let parts = authorization.split(' ')
  let scheme = parts[0]
  let auth = new Buffer(parts[1], 'base64').toString().split(':')
  let user = auth[0]
  let pass = auth[1]

  authenticateWithDatabase(user, pass, err => {
    if(err) return next(err)
    next();
  })
}

function admin(req, res, next) {
  switch (req.url) {
    case '/':
      res.end('try/users')
      break
    case '/users':
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(['tobi', 'sdf', 'sdfs']))
      break
  }
}

// 挂载
connect()
  .use(logger)
  .use('/admin', restrict)
  .use('admin', admin)
  .use(hello)
  .listen(3000)
