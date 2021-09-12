/**
 * 在此目录下，使用 nodeunit index.text.js 测试
 */

exports.testSomething = function (test) {
  test.expect(1);
  // 这里的 ok  就放你需要测试的代码
  test.ok(true, "this assertion should pass");
  test.done();
};

exports.testSomethingElse = function (test) {
  test.ok(false, "this assertion should fail");
  test.done();
};