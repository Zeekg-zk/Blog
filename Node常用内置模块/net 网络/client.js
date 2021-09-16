const net = require('net');

// net.createConnection 返回 net.Socket 类
const client = net.createConnection(3000, '127.0.0.1');

// 当空闲时间超过 3秒，就会触发 timeout 事件
client.setTimeout(3000)
client.on('timeout', () => {
  console.log('socket timeout');
  client.end('Hello this is cilent')
});

client.on('connect', () => {
  console.log('已成功建立连接');
})

client.on('data', (data) => {
  console.log(`客户端收到的数据 ${data}`);
})

client.on('close', () => {
  console.log(`断开连接`);
})

client.end('Hello this is cilent')