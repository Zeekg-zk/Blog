const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  getTitles(res);
}).listen(3000)

function getTitles(res) {
  fs.readFile('./titles.json', (err, data) => {
    if (err) return hasError(err, res);
    getTemplates(JSON.parse(data.toString()), res);
  })
}

function getTemplates(titles, res) {
  fs.readFile('./template.html', (err, data) => {
    if (err) return hasError(err, res);
    formatHtml(titles, data.toString(), res);
  })
}

function formatHtml(titles, tmpl, res) {
  let html = tmpl.replace('%', titles.join('</li><li>'))
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
}

function hasError(err, res) {
  console.log(err);
  res.end("Server Error")
}