const http = require('http');

// server 是 http.Server实例  用来提供服务，处理客户端的请求
const server = http.createServer((req, res) => {
  // req 是 http.IncomingMessage类
  // res 是 http.ServerResponse类
  console.log(`req instanceof http.IncomingMessage——${req instanceof http.IncomingMessage}`);
  console.log(`res instanceof http.ServerResponse——${res instanceof http.ServerResponse}`);
  res.end(`url: ${req.url}`);
})

server.listen(3000)

// client 是 http.ClientReques实例  用来向服务端发起请求
const client = http.get('http://localhost:3000/', function (res) {
  console.log(res instanceof http.IncomingMessage);
  res.pipe(process.stdout);
})