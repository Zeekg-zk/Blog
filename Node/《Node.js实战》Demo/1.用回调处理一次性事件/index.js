const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {
  getTitles(res);
}).listen(3000)

// 获取信息
function getTitles(res) {
  fs.readFile('./titles.json', (err, data) => {
    if (err) return hasError(err, res);
    getTemplates(JSON.parse(data.toString()), res);
  })
}

// 获取 html 文件
function getTemplates(titles, res) {
  fs.readFile('./template.html', (err, data) => {
    if (err) return hasError(err, res);
    formatHtml(titles, data.toString(), res);
  })
}

// 最后在这里发送给客户端
function formatHtml(titles, tmpl, res) {
  let html = tmpl.replace('%', titles.join('</li><li>'))
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
}

// 查看错误
function hasError(err, res) {
  console.log(err);
  res.end("Server Error")
}