const fs = require('fs');

// 异步
fs.mkdir('./test', err => {
  if(err) return console.error(err);
  console.log('目录创建成功');
})

// 同步
try {
  fs.mkdirSync('./test')
} catch (error) {
  console.log(error);
}