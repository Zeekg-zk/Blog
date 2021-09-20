# 总结

- crypto 模块提供了加密功能，其中包括了用于 OpenSSL 散列、HMAC、加密、解密、签名、以及验证的函数的一整套封装。

## Hash 类

Hash 类是用于创建数据的哈希摘要的实用工具。两种方法：

- 作为既可读又可写的流，其中写入数据以在可读端生成计算的哈希摘要
- 使用 hash.update() 和 hash.digest() 方法生成计算的哈希。

## Hmac 类

Hmac 类是用于创建加密 HMAC 摘要的实用工具。 它可以通过以下两种方式之一使用：

- 作为既可读又可写的流，其中写入数据以在可读端生成计算的 HMAC 摘要，或
- 使用 hmac.update() 和 hmac.digest() 方法生成计算出的 HMAC 摘要。

## 加密 / 解密

- `crypto.createCipheriv(algorithm, key, iv[, options])`
  使用给定的 algorithm、key 和初始化向量（iv）创建并返回 Cipher 对象。
- `crypto.createDecipheriv(algorithm, key, iv[, options])`
  创建并返回使用给定的 algorithm、key 和初始化向量（iv）的 Decipher 对象。
