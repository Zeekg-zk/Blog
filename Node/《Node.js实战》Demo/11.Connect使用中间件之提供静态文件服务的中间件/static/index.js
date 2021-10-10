const connect = require('connect')
const serveStatic = require('serve-static')

connect()
  .use(serveStatic('./public')) 
 .listen(3000)

/**
 * 访问 http://localhost:3000/
 *   或 http://localhost:3000/foo.html
 * 来查看效果
 */