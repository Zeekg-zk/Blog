const crypto = require('crypto');

function getHashResult(hexString) {

  // 转成16进制
  hexString = hexString.replace(/(\w{2,2})/g, '0x$1 ').trim();
  console.log(hexString);
  // 生成16进制数组
  let arr = hexString.split(' ');

  // 转成对应的buffer
  let buff = Buffer.from(arr);
  let hash = crypto.createHash('md5');
  // 计算md5值
  let result = hash.update(buff).digest('hex');

  return result;
}

let str1 = '111111sdfsdfsdfsdfsdfsdfsdfsdfsd111133333333aaa3333333eee3333333333'
let str2 = '111111sdfsdfsdfsdfsdfsdfsdfsdfsd111133333333aaa3333333eee3333333333'

let result1 = getHashResult(str1);
let result2 = getHashResult(str2);

if (result1 === result2) {
  console.log(`是相同的 md5 值: ${result1}`);
} else {
  console.log(`不相同`);
}
