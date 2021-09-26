const fs = require('fs')
const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' }) // 这里指定存放图片数据的路径

// upload.single('photo')  只上传一个图片
// upload.array('photo', 2)  上传了两个图片
// 这里的 photo 就是指 form 表单中的 name 属性的值
app.post('/upload', upload.single('photo'), (req, res, next) => {
  console.log(req.file); // 如果你只是提交一个图片的时候，想访问图片信息的时候就是用 req.file
  // console.log(req.files); // 但如果提交了多个图片，就是用 req.files 访问信息
  res.send('发送成功！');
})

app.get('/', (req, res, next) => {
  const html = fs.readFileSync('./upload.html', { encoding: 'utf8' })
  res.send(html)
})

// 显示图片
// 将文件中的二进制数据转成 base64，然后放在 img 标签中的 src 里面
app.get('/photo', (req, res, next) => {
  const temp = fs.readFileSync('./uploads/photo-1632641578791')
  const imgurl = `data:image/png;base64,${temp.toString('base64')}`
  res.send(`
  <!DOCTYPE html>
  <html lang="zh-CN">

  <head>
    <title>图片显示</title>
  </head>

  <body>
    <img src="${imgurl}" />
  </body>

  </html>
  `)
})

app.listen(3000)