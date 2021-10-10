const crypto = require('crypto');
const fs = require('fs');

// hash.digest([encoding])
// 计算传给被哈希的所有数据的摘要，如果提供了 encoding，则将返回字符串；否则返回 Buffer。
// hash.update(data[, inputEncoding])
// 使用给定的 data 更新哈希内容，其编码在 inputEncoding 中给出。

// 第一种方式
const content = fs.readFileSync('./test.txt', {encoding: 'utf8'});
// crypto.createHash() 方法用于创建 Hash 实例。 Hash 对象不能直接使用 new 关键字创建。
const hash = crypto.createHash('sha256')
hash.update(content);
const output = hash.digest('hex');
console.log(output);

// 第二种方式
// const input = fs.createReadStream('./test.txt', {encoding: 'utf8'})
// const hash = crypto.createHash('sha256')
// hash.setEncoding('hex');
// input.pipe(hash).pipe(process.stdout)