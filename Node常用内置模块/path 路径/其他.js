const path = require('path');

// path.sep  提供特定于平台的路径片段分隔符
// Windows 上是 \    POSIX 上是 /
console.log(path.sep);
console.log(path.win32);

// path.delimiter  提供特定于平台的路径定界符
// ';' 用于 Windows        ':' 用于 POSIX
// console.log(path.delimiter);
console.log(process.env.PATH.split(path.delimiter));