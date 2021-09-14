const fs = require('fs');

fs.access('./files/test.txt', err => {
  if (err) return console.error(err);
  console.log('文件存在');
})

fs.access('./files/test.txt', fs.constants.F_OK, err => {
  if (err) return console.error(err);
  console.log('文件存在');
})
// 上面两个例子功能一样