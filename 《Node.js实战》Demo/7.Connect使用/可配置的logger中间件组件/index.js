const connect = require('connect');

// 返回 Hello World
function hello(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World')
}

function setup(format) {
  let regexp = /:(\w+)/g;
  return function (req, res, next) {
    let str = format.replace(regexp, (match, property) => {
      return req[property]
    })
    console.log(str);
    next();
  }
}
// 正常情况下，setup 不在此文件中，需要在其他文件调用 module.exports = setup
// 模拟 module.exports = setup
const logger = setup

connect()
  .use(logger(':method :url'))
  .use(hello)
  .listen(3001)