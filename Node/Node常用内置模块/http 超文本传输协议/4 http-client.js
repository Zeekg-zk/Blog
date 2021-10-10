const http = require('http');

// 第一个例子
// GET 请求 
const options = {
  protocol: 'http:',
  hostname: 'www.baidu.com',
  port: 80,
  path: '/',
  method: 'GET',
}

const client = http.request(options, res => {
  let data
  res.setEncoding('utf8');
  res.on('data', chunk => {
    data += chunk
  })
  res.on('end', () => {
    // console.log(data);
  })
})

client.on('response', () => {
  console.log('\nGET 请求 response 事件触发');
})
client.end()


// 第二个例子
// 发送 POST 请求
const sendPostRequest = () => {
  let options = {
    method: 'POST',
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: '3000',
    path: '/post',
    headers: {
      "connection": "keep-alive",
      "content-type": "application/x-www-form-urlencoded"
    }
  };
  
  // 发送给服务端的数据
  let data = {
    name: 'Zeekg'
  };

  // 创建客户端请求
  let client = http.request(options, function (res) {
    // 最终输出：data is: {"name":"Zeekg"}
    res.pipe(process.stdout);
  });
  // http.request 返回 http.ClientRequest 实例
  console.log(`client instanceof http.ClientRequest - ${client instanceof http.ClientRequest}`);
  // 发送的报文主体
  client.write(JSON.stringify(data));
  client.end();
}

var server = http.createServer(function (req, res) {
  res.write('data is: ');
  req.pipe(res);
});

server.listen(3000, sendPostRequest);