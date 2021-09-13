const http = require('http');
const fs = require('fs');
const pug = require('pug')

// 第一个例子
// http.createServer((req, res) => {
//   const compiledFunction = pug.compileFile('./index.pug')
//   res.end(compiledFunction({
//     name: 'Zeekg'
//   }))
// }).listen(3000)

http.createServer((req, res) => {
  res.end(
    pug.renderFile('./index.pug', { name: 'Zeekg' })
  )
}).listen(3000)