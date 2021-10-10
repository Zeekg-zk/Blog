const crypto = require('crypto');
/**
 * key、iv 可以是Buffer，也可以是utf8编码的字符串，这里需要关注的是它们的长度：
 * 
 * key：根据选择的算法有关，比如 aes128、aes192、aes256，长度分别是128、192、256位（16、24、32字节）
 * iv：都是128位（16字节）
 * 
 * key 是 algorithm 使用的原始密钥，iv 是初始化向量。 两个参数都必须是 'utf8' 编码的字符串、
 * 缓冲区、TypedArray 或 DataView。 key 可以是 secret 类型的 KeyObject。 如果加密不需要初始
 * 化向量，则 iv 可以是 null。
 */

// crypto.randomBytes(size[, callback]) --- 生成加密强伪随机数据
const key = crypto.randomBytes(256 / 8)
const iv = crypto.randomBytes(128 / 8)
const algorithm = 'aes256'

// 加密
function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm, key, iv)
  // cipher.update(data[, inputEncoding][, outputEncoding]) --- 使用 data 更新密码
  cipher.update(text)
  return cipher.final('hex')
}

// 解密
function decrypt(encrypted) {
  let decipher = crypto.createDecipheriv(algorithm, key, iv)
  // decipher.update(data[, inputEncoding][, outputEncoding]) --- 用 data 更新解密
  decipher.update(encrypted, 'hex')
  return decipher.final('utf8');
}

// 使用
const content = 'Hello,Zeekg'
const crypted = encrypt(content)
console.log(`加密后的数据 - ${crypted}`);
const decrypted = decrypt(crypted)
console.log(`解密后的数据 - ${decrypted}`);