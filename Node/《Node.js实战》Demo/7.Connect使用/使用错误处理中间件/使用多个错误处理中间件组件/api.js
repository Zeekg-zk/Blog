const connect = require('connect')

const db = {
  users: [
    { name: 'Zeekg' },
    { name: 'qw3e' },
    { name: 'zzz' }
  ]
}

function users(req, res, next) {
  let match = req.url.match(/^\/user\/(.+)/)
  if (match) {
    let user = db.users[match[1]]
    if (user) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(user))
    } else {
      let err = new Error('User not found')
      err.notFound = true // 方便在后续的错误处理组件中可以统一错误处理逻辑
      next(err)
    }
  } else {
    next();
  }
}

function pets(req, res, next) {
  if (req.url.match(/^\/pet\/(.+)/)) {
    foo() // 未定义，会报错
  } else {
    next()
  }
}

function errorHandle(err, req, res, next) {
  console.error(err.stack)
  res.setHeader('Content-Type', 'application/json')
  if (err.notFound) {
    res.statusCode = 404
    res.end(JSON.stringify({ err: err.message }))
  } else {
    res.statusCode = 500
    res.end(JSON.stringify({ error: 'Internal Server Error' }))
  }
}

// errorHandle 处理来自 api 的所有错误
module.exports = connect().use(users).use(pets).use(errorHandle)