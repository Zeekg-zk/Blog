const fs = require('fs');

fs.rename('./test/1.txt', './test/2.txt', err => {
  if (err) throw err;
  console.log('重命名成功');
});