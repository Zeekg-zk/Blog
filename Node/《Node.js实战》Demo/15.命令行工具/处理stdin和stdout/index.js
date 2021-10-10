let requiredAge = 18

process.stdout.write('please enter you age:')
process.stdin.setEncoding('utf8')
process.stdin.on('data', data => {
  let age = parseInt(data, 10)
  if(isNaN(age)) {
    console.log(`${data} is not a valid number`);
  } else if(age < requiredAge) {
    console.log(`you must be at least ${requiredAge} years old`);
  } else {
    enterTheSecretDungeon()
  }
  // 关闭 stdin 之前，等待一个 data 事件
  process.stdin.pause()
})

// 调用 resume 开始读取输入
process.stdin.resume()

function enterTheSecretDungeon() {
  console.log('Welcome to The Program!');
}