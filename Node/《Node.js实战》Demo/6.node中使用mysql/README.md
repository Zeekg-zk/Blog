# 总结

## 功能简介

用 mysql CURD

`sendHtml` - 发送 html 响应
`parseReceivedData` - 解析 HTTP POST 数据(利用querystring)
`actionForm` - 渲染简单的提交表单


`add` - 添加数据到数据库
`delete` - 删除数据
`archive` - 存档一个数据（将存档的标志改为 1）
`show` - 显示内容
`showArchived` - 获取已存档的数据

这些方法帮助 `show` 方法完成渲染
`workHitlistHtml` - 将工作记录渲染成 HTML表格
`workFormatHtml` - 渲染form表单
`workArchiveForm` - 渲染归档按钮表单
`workDeleteForm` - 渲染删除按钮表单

## 知识点

- 用 `npm install mysql` 安装 mysql