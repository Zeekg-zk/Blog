// process.nextTick(callback[, ...args])
// process.nextTick() 将 callback 添加到"下一个滴答队列"

console.log('AAA');
process.nextTick(() => {
  console.log('nextTick......');
})

console.log('BBB');