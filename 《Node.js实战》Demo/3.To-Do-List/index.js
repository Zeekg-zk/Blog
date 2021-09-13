const http = require('http');
const { Buffer } = require('buffer');
const qs = require('querystring');

let items = []

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    switch (req.method) {
      case 'GET':
        show(res)
        break;
      case 'POST':
        add(req, res)
        break;
      default:
        badRequest(req, res)
    }
  } else {
    notFound(req, res)
  }
})

server.listen(3000)

// 展示列表信息
function show(res) {
  let html = `
    <html>
      <head>
        <title>ToDO List</title>
      </head>
      <body>
        <h1>ToDo List</h1>
        <ul>
          ${items.map((item) => {
    return '<li>' + item + '</li>'
  }).join('')
    }
        </ul>
        <form method="POST" action="/">
          <p><input type="text" name="item" /></p>
          <p><input type="submit" value="Add Item" /></p>
        </form>
      </body>
    </html>
  `
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Content-Length', Buffer.byteLength(html))
  res.end(html)
}

// 返回没有找到资源的信息
function notFound(req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end('Not Found')
}

// 不是 GET 或者 POST 类型的请求
function badRequest(res) {
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain')
  res.end('Bad Request')
}

// 添加信息
function add(req, res) {
  let body = ''
  req.setEncoding('utf8');
  req.on('data', function (chunk) {
    body += chunk
  })
  req.on('end', function () {
    let obj = qs.parse(body)
    items.push(obj.item)
    show(res)
  })
}