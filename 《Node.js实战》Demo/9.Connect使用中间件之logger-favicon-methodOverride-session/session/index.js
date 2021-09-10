const connect = require('connect')
const favicon = require('serve-favicon')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const sessionOptions = {
  key: 'myapp',
  cookie: { maxAge: 3600000 * 24, secure: true },
}

connect()
  .use(favicon('./favicon.png'))
  .use(cookieParser('zk is cool'))
  .use(session())
  // .use(session(sessionOptions))
  .use((req, res, next) => {
    console.log(req.session);
    if (req.session.views) {
      res.setHeader('Content-Type', 'text/html')
      res.write(`<h1>Views: ${req.session.views}</h1>`)
      req.session.views++
      res.end()
    } else {
      req.session.views = 1;
      res.end('Welcome to the session demo.......')
    }
  })
  .listen(3000)