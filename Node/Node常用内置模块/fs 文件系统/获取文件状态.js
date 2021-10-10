const fs = require('fs');

var getTimeDesc = function (d) {
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
};

// 异步
fs.stat('./files/test.html', function (err, stats) {
  if (err) return console.error(err)
  console.log('文件大小: ' + stats.size);
  console.log('创建时间: ' + getTimeDesc(stats.birthtime));
  console.log('访问时间: ' + getTimeDesc(stats.atime));
  console.log('修改时间: ' + getTimeDesc(stats.mtime));
});

// 同步
var stats = fs.statSync('./files/test.html');
console.log('文件大小: ' + stats.size);
console.log('创建时间: ' + getTimeDesc(stats.birthtime));
console.log('访问时间: ' + getTimeDesc(stats.atime));
console.log('修改时间: ' + getTimeDesc(stats.mtime));