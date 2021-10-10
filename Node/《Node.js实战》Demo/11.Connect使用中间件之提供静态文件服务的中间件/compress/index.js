const connect = require('connect')
const compression = require('compression')
const static = require('serve-static')

// 尽量把compress()放在靠上的位置，因为它包着res.write()和res.end()方法

connect()
  .use(compression())
  .use(static('./source'))
  .listen(3000)

/**
 * 只需 xxx.use 模块即可。通过中间件的请求将被压缩。
 */