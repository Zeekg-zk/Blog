const net = require('net');

// net.createServer 返回 net.Server 类
// net.createServer 中的 函数 自动设置为 'connection' 事件的监听器
const server = net.createServer(socket => {
  // 这里的 socket 是 net.Socket 类
  socket.on('data', (data) => {
    console.log(`介绍到数据为 ${data}`);
    socket.write('Hello 我是 Server')
  })
  socket.on('close', () => {
    console.log(`连接断开`);
  })

})

server.on('close', () => {
  console.log('监听到 服务端 的 close 事件');
})

server.on('error', (err) => {
  console.log(`监听到 服务端 的 error 事件 ${err.message}`);
})

server.listen(3000, 'localhost', () => {
  console.log(`server.address() is ${JSON.stringify(server.address())}`);
  console.log('server is runing......');

  // server.close 的调用 作用是：停止服务器接受新连接并保持现有连接
  // server.close(error => {
  //   if (error) return console.log(`调用server.close Error ${error.message}`);
  //   console.log(`socket.close 调用`);
  // })
})