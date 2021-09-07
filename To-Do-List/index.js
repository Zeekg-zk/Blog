const http = require('http');
const Buffer = require('buffer');

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

function notFound(res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end('Not Found')
}

function badRequest(res) {
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain')
  res.end('Bad Request')
}

