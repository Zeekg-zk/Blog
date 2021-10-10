const connect = require('connect')
const cookieParser = require('cookie-parser')

connect()
  .use(cookieParser('zk is cool'))
  .use((req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies); // 签名 cookie

    // 你可以设置 cookie 发送响应
    res.setHeader('Set-Cookie', 'zkzkzk')
    
    res.end('hello')
  })
  .listen(3000)