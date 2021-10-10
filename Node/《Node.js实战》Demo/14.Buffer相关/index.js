const {
  Buffer
} = require('buffer');

// 使用 BUffer.from()、Buffer.alloc和Buffer.allocUnsafe 可以创建 buffer
/*
 * BUffer.from() 返回新的 Buffer， 其中包含提供的八位字节的副本
 * Buffer.alloc 分配 size 个字节的新 Buffer
 * Buffer.allocUnsafe() 分别返回指定 size 的新的未初始化的 Buffer
 * 
 * 虽然 alloc 和 allocUnsafe 均分配指定大小的 Buffer（ 以字节为单位）， 
 * 但是 alloc 创建的 Buffer 会被使用零进行初始化， 而 allocUnsafe 创建的
 *  Buffer 不会被初始化。 这意味着， 尽管 allocUnsafe 比 alloc 要快得多， 
 * 但是分配的内存片段可能包含可能敏感的旧数据。
 */
const buf1 = Buffer.from('Hello')
const buf2 = Buffer.alloc(1024)
const buf3 = Buffer.allocUnsafe(1024)


console.log(buf1[0]);
console.log(buf1[1]);
console.log(buf1[2]);
console.log(buf1[3]);
console.log(buf1[4]);
console.log(`长度为${buf1.length}`);
console.log(`输出:${buf1.toString()}`);

// 迭代
for(const item of buf1){
  console.log(item);
}

// 更改 buffer 内容
buf2.write('HHH, Hello Zeekg')
console.log(buf2.toString()); // HHH, Hello Zeekg
buf2[2] = 111
console.log(buf2.toString()); // HHo, Hello Zeekg

// 复制 buffer
// 默认情况下，会复制整个 buffer。
// 另外的 3 个参数可以定义开始位置、结束位置、以及新的 buffer 长度： buf.copy(bufcopy, 0, 0, 2)
buf2.copy(buf3) // 将 buf2 复制给 buf3
console.log(buf3.toString());

// 切片
console.log(buf1.slice(1).toString());