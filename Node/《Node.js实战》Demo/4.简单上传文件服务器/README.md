# 总结

## 功能简介

上传文件，并且计算上传进度

## 知识点

- 需要把表单的 `enctype` 属性设置 `multipart/form-data`，这个是适用 `BLOB` (大型二进制文件)的MIME类型。

- 需要通过 `npm i formidable` 安装formidable。
  介绍： https://www.npmjs.com/package/formidable
  在收到文件并处理好后会发出file事件，收完输入域后会发出field事件

- 上传的进度是会监听一个叫作 `progress` 的事件，在处理此事件时就输出进度情况。