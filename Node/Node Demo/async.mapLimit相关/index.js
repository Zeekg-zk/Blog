const async = require('async');

// 参考：https://github.com/alsotang/node-lessons/tree/master/lesson5

// 并发连接数的计数器
var concurrencyCount = 0;
var fetchUrl = function (url, callback) {
  // delay 的值在 2000 以内，是个随机的整数
  var delay = parseInt((Math.random() * 10000000) % 2000, 10);
  concurrencyCount++;
  console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
  setTimeout(function () {
    concurrencyCount--;
    // 第一个参数是 err，为 null 表示没有错误
    // 第二个参数是 将 值 重新赋值给 url 
    callback(null, url + ' html content');
  }, delay);
};

var urls = [];
for (var i = 0; i < 30; i++) {
  urls.push('http://test_' + i);
}

// mapLimit(coll, limit, iteratee, callbackopt)
// 这里限制 5个
async.mapLimit(urls, 5, function (url, callback) {
  // console.log(callback.toString());
  fetchUrl(url, callback);
}, function (err, result) {
  if(err) throw err;
  console.log('最后的结果:');
  console.log(result);
});