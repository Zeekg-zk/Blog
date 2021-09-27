var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const sess = req.session;
  console.log(`/ --- ${JSON.stringify(sess, null, 2)}`);
  const loginUser = sess.loginUser
  const isLogined = !!loginUser
  res.render('index', {
    isLogined: isLogined,
    name: loginUser || ''
  });
});

module.exports = router;
