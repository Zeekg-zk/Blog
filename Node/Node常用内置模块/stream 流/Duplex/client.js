const net = require('net');

const client = net.connect({ host: '127.0.0.1', port: 3000 }, () => {
  client.write('我是客户端')
});

client.on('data', data => {
  console.log(`来自服务端信息 ${data}`);
  client.end();
})