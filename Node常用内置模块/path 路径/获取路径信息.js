const path = require('path')

const filepath = './temp/test/demo.js'

// path.dirname 返回 path 的目录名
console.log(`获取文件所在的路径 ${path.dirname(filepath)}`);

// path.basename 方法返回 path 的最后一部分
console.log(`获取文件名 ${path.basename(filepath)}`);
console.log(`获取文件名 ${path.basename(filepath, '.js')}`);

// path.extname 返回 path 的扩展名
console.log(`获取文件的扩展名 ${path.extname(filepath)}`);

// path.relative 根据当前工作目录返回从 from 到 to 的相对路径
let p1 = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
console.log(`获取相对路径 ${p1}`);
let p2 = path.relative('/data/demo', '/data/demo');
console.log(`获取相对路径 ${p2}`);