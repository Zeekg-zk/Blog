// 经典例子就是 net.Socket
const net = require('net');

const server = net.createServer(socket => {
  socket.on('data', data => {
    console.log(`接收到的数据 - ${data.toString()}`);
  })
  socket.write('hello client')
})

server.listen(3000, '127.0.0.1', () => {
  console.log(server.address());
})