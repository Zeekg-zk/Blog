const connect = require('connect')
const static = require('serve-static')
const serveIndex = require('serve-index')

connect()
  .use(serveIndex('./public', { icon: 'true' }))
  .use(static('./public'))
  .listen(3000)