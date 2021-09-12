/**
 * 使用 node 内置模块 assert 来进行检测
 * 
 */
const assert = require('assert')
const Todo = require('./todo')

let todo = new Todo()
let testsCompleted = 0

function deleteTest() {
  todo.add('Delete Me')
  // 就是使用 === 来进行测试
  assert.strictEqual(todo.getCount(), 1, '1 item should exist')
  todo.deleteAll()
  assert.strictEqual(todo.getCount(), 0, 'No items should exist')
  testsCompleted++
}

function addTest() {
  todo.deleteAll()
  todo.add('Added')
  assert.notStrictEqual(todo.getCount(), 0, '1 item should exist')
  testsCompleted++
}

function doAsyncTest(cb) {
  todo.doAsync(value => {
    // ok 用来测试异步
    assert.ok(value, 'Callback should be passed true')
    testsCompleted++
    cb()
  })
}

function throwsTest() {
  // 在错误消息中查找文本 "require"
  assert.throws(todo.add, /require/)
  testsCompleted++
}

deleteTest()
addTest()
throwsTest()
doAsyncTest(() => {
  console.log(`Completed ${testsCompleted} tests`);
})