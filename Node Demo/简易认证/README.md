# 总结

首先使用 `express -e` 安装带有 ejs 模块引擎的 express。

再使用 `npm install -S express-session session-file-store` 安装

当你使用 `npm start` 执行的时候，可以看见在目录中新建一个 `session` 文件夹，并且里面也会存储用户的 session 信息。
详细代码看 `app.js`

显示界面在 `routes/index.js`
用户登录代码在 `routes/users.js`