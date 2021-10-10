# 总结

## 简介

运行 `node compression.js` 查看压缩的例子

运行 `node decompression.js` 查看解压的例子

- 字符串 gzip 压缩

若请求头中包含 `Accept-Encoding: gzip` 的就返回 `Content-Encoding: gzip` 的文件，否则就直接返回字符串