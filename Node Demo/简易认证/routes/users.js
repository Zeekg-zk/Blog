var express = require('express');
var router = express.Router();

const users = require('../info/users').items;

const findUser = (name, password) => {
  return users.find((item) => {
    return item.name === name && item.password === password;
  })
}

router.post('/login', (req, res, next) => {
  const sess = req.session;
  const user = findUser(req.body.name, req.body.password);
  if (user) {
    req.session.regenerate((err) => {
      if (err) {
        return res.json({ ret_code: 2, ret_msg: '登录失败' })
      }
      req.session.loginUser = user.name
      res.json({ ret_code: 0, ret_msg: '登录成功' });
    })
  } else {
    res.json({ ret_code: 1, ret_msg: '账号或密码错误' });
  }
  console.log(`login--- ${JSON.stringify(sess, null, 2)}`);
})

router.get('/logout', function (req, res, next) {
  req.session.destroy(err => {
    if (err) {
      res.json({ ret_code: 2, ret_msg: '退出登录失败' });
      return;
    }
    res.clearCookie('skey')
    res.redirect('/')
  })
});

module.exports = router;
