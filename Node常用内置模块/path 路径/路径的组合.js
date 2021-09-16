const path = require('path')

// 组合路径 将所有给定的 path 片段连接在一起
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '../..'));
console.log(path.join('a', 'b', 'c')); // path.join只是简单的将该路径片段进行拼接

// path.resolve() 方法将路径或路径片段的序列解析为绝对路径
console.log(path.resolve('a', 'b', 'c'));
console.log(path.resolve('/a', 'b', 'c')); // path.resolve 将以 '/' 开始的路径片段作为根目录
console.log(path.resolve('../../src/../src/test'));

// path.normalize() 方法  规范化给定的 path，解析 '..' 和 '.' 片段  也就是摆脱多余的.，..在路径等
console.log(path.normalize('../../src/../src/test'));

// path.format() 方法   从对象返回路径字符串
// root <---> dir 效果类似，不过root后面不会自动加 '/'，而 dir 会
// base <---> naem+ext 效果类似
console.log(path.format({
  dir: 'C:\\path\\dir',
  base: 'file.txt'
}));
// 还有 path.parse 返回一个对象，其属性表示 path 的重要元素
console.log(path.parse('/home/user/dir/file.txt'));