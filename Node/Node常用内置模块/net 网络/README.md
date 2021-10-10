# 总结

`http.Serve`r 是继承了 `net.Server`

- `net.Server`  TCP server，内部通过 socket 来实现与客户端的通信
- `net.Socket`  可以由用户创建并直接用于与服务器交互，也可以由 Node.js 创建并在接收到连接时传给用户