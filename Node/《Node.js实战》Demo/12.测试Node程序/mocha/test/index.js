var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

/**
 * beforeEach 在测试前进行的操作
 * 下面是官网的例子 https://mochajs.org/#working-with-promises
 * beforeEach(function () {
    return db.clear().then(function () {
      return db.save([tobi, loki, jane]);
    });
  });

  describe('#find()', function () {
    it('respond with matching records', function () {
      return db.find({ type: 'User' }).should.eventually.have.length(3);
    });
  });
 */