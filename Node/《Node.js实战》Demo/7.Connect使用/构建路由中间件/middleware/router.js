const parse = require('url').parse;

module.exports = (obj) => {
  return (req, res, next) => {
    // 若没有匹配的 method 则调用 next(),并停止后续操作
    if (!obj[req.method]) {
      next();
      return;
    }
    let routes = obj[req.method]
    let url = parse(req.url)
    const paths = Object.keys(routes)

    for (let i = 0, len = paths.length; i < len; i++) {
      let path = paths[i]
      let fn = routes[path]
      // 第一个 replace 将类似 /user/:id 改成 \/user\/:id 为了方便之后正则匹配
      // （如有:id） 第二个 replace 将类似 \/user\/:id 改为 \/user\/([^\/]+)
      path = path.replace(/\//g, '\\/').replace(/:(\w+)/g, '([^\\/]+)')
      let reg = new RegExp(`^${path}$`);
      let captures = url.pathname.match(reg)
      if(captures) {
        let args = [req, res].concat(captures.slice(1))
        // 指定为 null 是为了自动替换为指向全局对象
        fn.apply(null, args)
        return ;
      }
    }
    next();
  }
}