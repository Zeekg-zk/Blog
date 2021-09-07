const http = require('http');
const { Buffer } = require('buffer')
const formidable = require('formidable')

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      show(req, res)
      break
    case 'POST':
      upload(req, res)
      break;
  }
})

server.listen(3000)


function show(req, res) {
  const html = `
    <form method="post" action="/" enctype="multipart/form-data">
      <p><input type="text" name="name" /></p>
      <p><input type="file" name="file"></p>
      <p><input type="submit" value="Upload"></p>
    </form>
  `
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html)
}


// 第一版本 upload 实现
// function upload(req, res) {
//   if (!isFormData(req)) {
//     res.statusCode = 400;
//     res.end('Bad Request')
//     return
//   }
//   let form = new formidable.IncomingForm();
//   form.parse(req)
//   form.on('field', (field, value) => {
//     console.log('field', field);
//     console.log('field', value);
//   })
//   form.on('file', (name, file) => {
//     console.log('file', name);
//     console.log('file', file);
//   })
//   form.on('end', () => {
//     res.end('Upload complete!')
//   })
//   form.on('progress', (bytesReceived, bytesExpected) => {
//     let percent = Math.floor(bytesReceived / bytesExpected * 100);
//     console.log(`${percent}%`);
//   })
// }

// 第二版本 upload 实现
function upload(req, res) {
  if (!isFormData(req)) {
    res.statusCode = 400;
    res.end('Bad Request')
    return
  }
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return new Error('Error')
    } else {
      console.log(fields);
      console.log(files);
      res.end('Upload complete!')
    }
  })
  form.on('progress', (bytesReceived, bytesExpected) => {
    let percent = Math.floor(bytesReceived / bytesExpected * 100);
    console.log(`${percent}%`);
  })
}

/**
 * 检查请求头中的Content-Type字段是不是以multipart/form-data开头的
 * @param {*} req 
 * @returns 
 */
function isFormData(req) {
  let type = req.headers['content-type'] || ''
  return type.indexOf('multipart/form-data') === 0
}