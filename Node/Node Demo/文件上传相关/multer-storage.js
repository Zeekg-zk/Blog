const fs = require('fs');
const express = require('express');
const multer = require('multer')

const app = express()

// 如果你想自己命名上传图片的名称，是用 storage 来创建
// destination 就是指定放图片的文件夹
// filename 就是自己定义图片的名称
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`)
  }
})

const upload = multer({ storage: storage })

app.post('/upload', upload.single('photo'), (req, res, next) => {
  res.send('发送成功')
})

app.get('/', (req, res, next) => {
  const html = fs.readFileSync('./upload.html', {encoding: 'utf8'})
  res.send(html)
})

app.listen(3000, () => {
  console.log('server is running......');
})