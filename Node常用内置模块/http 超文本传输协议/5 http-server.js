const http = require('http');
const url = require('url');

// server 是 http.Server实例  用来提供服务，处理客户端的请求

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return

  // 测试GET请求
  // 测试 http://localhost:3000/?name=Zeekg&age=20
  if (req.method.toLowerCase() === 'get') {
    let query = url.parse(req.url).query || {};
    // 可以使用 npm install query-string 的queryString来解析参数
    console.log(`请求的url的query是 ${JSON.stringify(query)}`);
  }

  // 测试POSt请求
  if (req.method.toLowerCase() === 'post') {
    let bodyData = ''
    req.on('data', (chunk) => {
      bodyData += chunk
    })
    req.on('end', () => {
      console.log(`这是POST请求中的数据 ${bodyData}`);
    })
  }

  res.end('Hello')
})

// 监听事件
server.on('error', (err) => {
  console.log(`出错了 ${err.message}`);
})

// 当 请求的 Connention:keep-alive 时， connection 事件只会执行一次，否则每次请求时都会 connection 一次
let requestIndex = 0,
  connectionIndex = 0
server.on('request', function (req, res) {
  requestIndex++;
  console.log('request event: 第' + requestIndex + '个请求！');
});
server.on('connection', function (req, res) {
  connectionIndex++;
  console.log('connection event: 第' + connectionIndex + '个请求！');
});

server.listen(3000, () => {
  console.log('server is runing......');
})