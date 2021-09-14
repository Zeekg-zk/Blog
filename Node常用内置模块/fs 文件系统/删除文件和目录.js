const fs = require('fs');

// 异步删除文件
fs.unlink('./test/1.txt', err => {
  if(err) throw err;
  console.log('文件删除成功');
})

// 同步删除文件
try {
  fs.unlinkSync('./test/1.txt');
} catch (error) {
  console.log(error);
}

// 异步删除目录
fs.rmdir('./abc', function (err) {
  if (err) throw err;
  console.log('目录删除成功');
});

// 同步删除目录
try {
  fs.rm('./abc')
} catch (error) {
  console.log(error);
}