const fs = require('fs');

// 异步读取：fs.readFile
fs.readFile('./files/test.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(`Error: ${err.message}`);
  }
  // 这里需要 _.toString()，因为默认data的数据是 buffer 类型的
  console.log(`这里是异步读取 ${data.toString()}`);
})

// 同步读取：fs.readFileSync
try {
  let info = fs.readFileSync('./files/test.txt', 'utf8')
  console.log(`这里是同步读取 ${info}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

// 使用文件流的形式读取
// 一般使用文件流来读取大文件
const readStream = fs.createReadStream('./files/test.txt')
readStream.on('data', (data) => {
    console.log(`文件流读取 ${data}`);
  })
  .on('error', (error) => {
    console.log(`文件流读取出错 ${error.message}`);
  })
  .on('end', () => {
    console.log(`文件流读取完毕`);
  })
  .on('close', () => {
    console.log(`文件流读取已经关闭`);
  })

// 用 fs.read 读取文件
fs.open('./files/test.txt', (err, fd) => {
  if (err) {
    return console.log(`Error: ${err.message}`);
  }
  console.log('文件打开成功');
  fs.read(fd, (err, bytesRead, buffer) => {
    if(err) return console.log('文件读取错误');
    console.log(`fs.read读取文件,读取 ${buffer.toString()}`);
  })
})