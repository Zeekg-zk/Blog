const http = require('http');
const zlib = require('zlib');

http.createServer((req, res) => {
  // 获取请求中的 Accept-Encoding 头，并查看是否有 'gzip'
  let acceptEncoding = req.headers.acceptEncoding
  if (acceptEncoding.indexOf('gzip') !== -1) {
    // 请求是要求的压缩文件
    res.writeHead(200, {
      'Content-Encoding': 'gzip'
    })
    res.end(zlib.gzipSync('Hello!'))
  } else {
    // 直接返回字符串
    res.end('Hello!')
  }
})