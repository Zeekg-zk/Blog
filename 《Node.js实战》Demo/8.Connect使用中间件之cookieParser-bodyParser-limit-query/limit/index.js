const connect = require('connect');
const bodyParser = require('body-parser')

connect()
  .use(bodyParser.urlencoded({ limit: '5mb' }))
  .use(bodyParser.json({ limit: '5mb' }))
  .use((req, res) => {
    // 用 bodyParser 文件夹下的 index.html 测试
    console.log(req.body.username);
    res.end('hello')
  })
  .listen(3000)