const http = require('http');

/**
 * req 是 http.IncomingMessage实例
 * res 是 http.ServerResponse实例
 */
const server = http.createServer((req, res) => {
  // 下面这个语句也可以通过 res.setHeader('Content-Type', 'text-plain'); 来设置响应头
  // 但会以 writeHead 设置的为准
  res.writeHead(200, 'ok', {
    'Content-Type': 'text/html'
  });
  res.write('hello');

  setTimeout(function () {
    res.write('world');
    res.end(); // 发送响应
  }, 2000);
})

server.listen(3000)

/**
 * res.writeHead(200, 'ok')
 * 就等于
 * res.statusCode = 200;
 * res.statusMessage = 'ok';
 * 
 * 响应头的操作
 * 设置或修改响应头 res.setHeader('Content-Type', 'text/plain)
 * 删除响应头 res.removeHeader('Content-Type')
 * 查看响应头内容 res.getHeader('Content-Type')
 * 查看响应头是否存在 res.hasHeader('content-type')
 */