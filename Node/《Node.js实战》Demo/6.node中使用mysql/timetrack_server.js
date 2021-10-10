const http = require('http');
const work = require('./lib/timetrack')
const mysql = require('mysql')

// 建立数据库的连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'test'
})

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'POST':
      // 当为 POST 请求时进行的操作
      switch (req.url) {
        case '/':
          work.add(db, req, res)
          break;
        case '/archive':
          work.archive(db, req, res)
          break;
        case '/delete':
          work.delete(db, req, res)
          break;
      }
      break; // 这个 break 不能掉
    case 'GET':
      // 当为 GET 请求时进行的操作
      switch (req.url) {
        case '/':
          work.show(db, res)
          break;
        case '/archived':
          work.showArchived(db, res)
          break;
      }
  }
})

db.query(
  `
    create table if not exists work(
      id INT(10) not null auto_increment,
      hours decimal(5,2) default 0,
      date DATE,
      archived INT(1) default 0,
      description LONGTEXT,
      primary key(id)
    )
  `,
  function(err) {
    if(err) throw err;
    console.log('Server started...');
    server.listen(3000)
  }
)