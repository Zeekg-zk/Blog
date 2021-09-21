const fs = require('fs');

// fs.createReadStream 返回: <fs.ReadStream>
let readStream = fs.createReadStream('./test.txt', { encoding: 'utf8'})
let content = ''
readStream.on('data', chunk => {
  content += chunk
})

readStream.on('end', () => {
  console.log(`文件读完成 ${content}`);
})

// 同样也可以这样输出，好处在于，如果源文件比较大，对于降低内存占用有好处
fs.createReadStream('./test.txt', { encoding: 'utf8'}).pipe(process.stdout)