const connect = require('connect')
const favicon = require('serve-favicon')
const morgan = require('morgan')

const hello = (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello world')
}

connect()
  .use(favicon('./favicon.png'))
  .use(morgan(':method :url :response-time ms'))
  .use(hello)
  .listen(3000)

/**
 * favicon 一般放在最上面，以便最快处理它，后面的日志也会忽略对 favicon 的请求
 * favicon('./favicon.png') - 必须指定 favicon 的路径
 */