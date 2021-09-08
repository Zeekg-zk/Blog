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

connect().use(logger).use(hello).listen(3000)
