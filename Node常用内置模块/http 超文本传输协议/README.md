# 总结

## http.Server
继承了 `net.Server`

## http.ClientRequest
主要用来创建HTTP客户端请求

## http.ServerResponse
此对象由 HTTP 服务器内部创建，而不是由用户创建。 它作为第二个参数传给'request' 事件。
服务端通过 `http.ServerResponse` 实例，来向请求方发送数据。包括发送响应表头，发送响应主体等。

## http.IncomingMessage
在server端：获取请求发送方的信息，比如请求方法、路径、传递的数据等
在client端：获取 server 端发送过来的信息，比如请求方法、路径、传递的数据等。
- 在服务端特别可以获取 `url`
- 在客户端特别可以获取 `statusCode`、`statusMessage`

