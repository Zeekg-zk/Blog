const connect = require('connect')
const bodyParser = require('body-parser')

connect()
  .use(bodyParser())
  .use((req, res) => {
    console.log(req.body.files);
    res.end(`hello ${req.body.username}`)
  })
  .listen(3000)