const fs = require('fs');

// 异步写入 fs.writeFile
fs.writeFile('./files/test.txt', 'Hello Zeekg!!!', err => {
  if(err) return console.error(err)
  console.log('异步写入成功');
})

// 同步写入 fs.writeFileSync
try {
  fs.writeFileSync('./files/test.txt', 'Hello AAAAAAAA')
  console.log(`同步写入成功`);
} catch (error) {
  console.log(`Error ${error.message}`);
}

// 文件流写入 fs.createWriteStream
const writeStream = fs.createWriteStream('./files/test.txt')
writeStream.on('close', () => {
  console.log('文件流写入关闭');
})
writeStream.write('Hello')
writeStream.write('Zeeeeee')
writeStream.end()