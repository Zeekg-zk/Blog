const http = require('http');

/**
 * req 是 http.IncomingMessage实例
 * res 是 http.ServerResponse实例
 */
const server = http.createServer(function (req, res) {
  console.log('客户端请求url：' + req.url);
  console.log('http版本：' + req.httpVersion);
  console.log('http请求方法：' + req.method);
  console.log('http请求头部' + JSON.stringify(req.headers));

  // 触发 error 事件
  req.destroy(new Error('Hello'))

  req.socket.on('error', function (err) {
    console.log(`server - error: ${err.message}`);
  })

  req.on('close', function () {
    console.log('客户端请求close......');
  });

  res.end('ok');
});

server.listen(3000, () => {
  const client = http.get('http://127.0.0.1:3000', function (res) {
    // 这里的 res 是 http.ServerResponse
    console.log(`client-statusCode - ${res.statusCode}`);
    console.log(`client-statusMessage - ${res.statusMessage}`);
    console.log('client-http版本：' + res.httpVersion);
    console.log('client-http请求头部' + JSON.stringify(res.headers));
  });
  client.on('error', (error) => {
    console.log(`client-error触发: ${error.message}`);
  })
});