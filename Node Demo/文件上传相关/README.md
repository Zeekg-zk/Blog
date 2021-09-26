# 总结

## multer基础

使用 `npm install -S multer express`安装
官网：https://github.com/expressjs/multer

详细过程看 `multer基础.js`

`http://localhost:3000/photo`查看图片
利用 上传之后的二进制数据 转成 base64 数据，之后放在 img 标签中的 src 中。

## multer-storage
如果想自己自定义相关信息，比如命名等，
使用 `multer.diskStorage` 创建
详细看 `multer-storage.js`