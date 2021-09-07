const http = require('http');
const parse = require('url').parse;
const join = require('path').join;
const fs = require('fs');

const server = http.createServer(function (req, res) {
  let url = parse(req.url)
  let path = join(__dirname, url.pathname)

  fs.stat(path, (err, stat) => {
    if(err) {
      if('ENOENT' === err.code) {
        res.statusCode = 404;
        res.end('Not Found');
      } else {
        res.statusCode - 500;
        res.end('Internal Server Error');
      }
    } else {
      res.setHeader('Content-Length', stat.size)
      const stream = fs.createReadStream(path)
      stream.pipe(res)
      stream.on('error', (err) => {
        res.statusCode = 500;
        res.end('Internal Server Error');
      })
    }
  })
})

server.listen(3333)