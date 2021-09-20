const crypto = require('crypto');
const fs = require('fs');

// 在 hash 的加盐运算

// 第一种方式
const hmac = crypto.createHmac('sha256', 'a secret')
const input = fs.readFileSync('./test.txt', {encoding: 'utf8'})
hmac.update(input)
console.log(hmac.digest('hex'));

// 第二种方式
// const hmac = crypto.createHmac('sha256', 'a secret')
// const input = fs.createReadStream('./test.txt', { encoding: 'utf8'})
// hmac.setEncoding('hex');
// input.pipe(hmac).pipe(process.stdout);