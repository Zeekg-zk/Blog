const connect = require('connect')

connect()
  .use((req, res) => {
    foo() // foo() 未定义
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello')
  })
  .listen(3003)

// 访问 localtion:3003 报错
// ReferenceError: foo is not defined