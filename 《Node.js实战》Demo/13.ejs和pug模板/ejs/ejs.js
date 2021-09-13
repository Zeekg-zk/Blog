const ejs = require('ejs')
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  fs.readFile('./ejs.html', (err, template) => {
    if(er) return;
    const context = {
      'movies': [
        'first',
        'sfsdfds',
        'enter the void'
      ],
      // cache 是ejs内置的一个属性，作用是是否缓存EJS模板
      cache: process.env.NODE_ENV === 'production',
      
    }
    res.end(ejs.render(template.toString(), context))
  })

}).listen(3000)
