const crypto = require('crypto');

// 1. 使用 md5 进行加密
// 但是只对密码进行 md5 加密还是不安全，因为相同的明文密码，md5值也是相同的。
// function cryptPwd(password) {
//   let md5 = crypto.createHash('md5');
//   let res = md5.update(password).digest('hex')
//   console.log(res);
// }
// cryptPwd('123456')



// 2. 密码加盐
// function cryptPwd(password, salt) {
//   // 密码加盐
//   let saltPassword = `${password}:${salt}`;
//   let md5 = crypto.createHash('md5');
//   let result = md5.update(saltPassword).digest('hex');
//   console.log('加盐密码的md5值：%s', result);
// }
// cryptPwd('123456', 'Zeekg')



// 3. 密码加盐  随机盐值
function getRandomSalt() {
  return Math.random().toString().slice(2, 5);
}
function cryptPwd(password, salt) {
  // 密码“加盐”
  var saltPassword = password + ':' + salt;
  // 加盐密码的md5值
  var md5 = crypto.createHash('md5');
  var result = md5.update(saltPassword).digest('hex');
  console.log('加盐密码(随机盐值)的md5值：%s', result);
}
cryptPwd('123456', getRandomSalt())

