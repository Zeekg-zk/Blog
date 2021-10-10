// 可要可不要
const process = require('process');

// 环境变量：process.env
if (process.env.NODE_ENV === 'production') {
  console.log('生产环境');
} else {
  console.log('非生产环境');
}


// 获取命令行参数 process.argv
// 测试 node base.js hhh 111
process.argv.forEach((val, index, array) => {
  console.log(`参数: ${index}: ${val}`);
})


// process.execArgv 获取运行node程序特有的参数
// 测试 node --harmony base.js aaa
process.execArgv.forEach((val, index, array) => {
  console.log(`execArgv --- ${index} : ${val}`);
})


// process.cwd  返回 Node.js 进程的当前工作目录
console.log(`获取当前工作路径 (process.cwd()) : ${process.cwd()}`);


// process.chdir() 方法更改 Node.js 进程的当前工作目录
console.log(`开始的路径:${process.cwd()}`);
try {
  process.chdir('./tmp')
  console.log(`更改后的路径 ${process.cwd()}`);
} catch (error) {
  console.log(`err : ${error.message}`);
}

// process.stdin 与 process.stdout  标准输入/标准输出
// process.stdin.pipe(process.stdout); // 直接输出
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk.toString()}`);
  }
});
// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });

// 其他
console.log(`node进程运行了多长时间 ${process.uptime()}`);
console.log(`直接输出版本 ${process.version}`);
console.log(`node 版本 : ${JSON.stringify(process.versions)}`);
console.log(`关于平台描述的字符串 ${process.platform}`);

// process.hrtime 一般用于做性能基准测试
let time = process.hrtime();
setInterval(() => {
  var diff = process.hrtime(time);
  console.log(`Benchmark took ${diff[0] * 1e9 + diff[1]} nanoseconds`);
}, 1000);