const connect = require('connect')
const url = require("url");
const querystring = require('query-string')

connect()
  .use((req, res, next) => {
    let params = querystring.parse(url.parse(req.url).query)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(params))
  })
  .listen(3000)