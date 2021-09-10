const connect = require('connect')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const edit = (req, res, next) => {
  if ('get' !== req.method.toLowerCase()) return next();
  res.setHeader('Content-Type', 'text/html')
  res.write(`
    <form method="post" action="/?_method=PUT">
      <input type="hidden" name="_method" value="put" />
      <input type="text" name="user[name]" value="Zeekg" />
      <input type="submit" value="Update">
    </form>
  `)
  res.end()
}

const update = (req, res, next) => {
  console.log(req.method); // 伪造后的 method 方法
  console.log(req.originalMethod); // 访问原始的 method 方法
  if('put' !== req.method.toLowerCase()) return next();
  res.end(`Update name to ${req.body.user.name}`)
}

connect()
  .use(morgan('dev'))
  .use(bodyParser())
  .use(methodOverride('_method'))
  .use(edit)
  .use(update)
  .listen(3000)

/**
 * methodOverride('_method') 指定获取伪造的 method 的方式
 */