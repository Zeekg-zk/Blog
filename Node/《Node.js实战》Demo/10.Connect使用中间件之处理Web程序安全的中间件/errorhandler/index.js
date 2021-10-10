const connect = require('connect')
const morgan = require('morgan')
const errorhandler = require('errorhandler')

connect()
  .use(morgan('dev'))
  .use((req, res, next) => {
    setTimeout(() => {
      // next 一个错误
      next(new Error('something broke!'))
    }, 500)
  })
  .use(errorhandler())
  .listen(3000)