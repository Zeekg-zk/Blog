const connect = require('connect')
const fs = require('fs')
const morgan = require('morgan')

const hello = (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello world')
}

// 这里的 flags: 'a' 表示是追加文件的形式
const log = fs.createWriteStream('./myapp.log', { flags: 'a'})

connect()
  .use(morgan({ format: ':method :url :response-time ms', stream: log }))
  // .use(morgan('dev'))
  .use(hello)
  .listen(3000)

/**
 * morgan() - 没有参数，使用默认的 morgan 选项
 * morgan(':method :url :response-time ms') - 指定格式输出
 * morgan({ format: ':method :url :response-time ms', stream: log })
 * - format指定格式输出，stream指定要输出的日志文件
 */