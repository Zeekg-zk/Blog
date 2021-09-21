const fs = require('fs');

// fs.writeFile('./test.txt', 'ABCDEFG', err => {
//   if (err) throw err;
//   console.log(`写入完成`);
// })


const writeStream = fs.createWriteStream('./test.txt');
writeStream.write('Hello, world')
writeStream.end();