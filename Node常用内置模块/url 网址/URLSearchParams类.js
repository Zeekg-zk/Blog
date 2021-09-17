const { URL } = require('url')

const myURL = new URL('https://example.org/?abc=123');

// urlSearchParams.get(name) 返回名称为 name 的第一个名称-值对的值
console.log(myURL.searchParams.get('abc'));

// urlSearchParams.append(name, value) 将新的名称-值对追加到查询字符串
myURL.searchParams.append('aaa', 'xyz');
console.log(myURL.href);

// urlSearchParams.delete(name) 删除名称为 name 的所有名称-值对
myURL.searchParams.delete('abc');
console.log(myURL.href);

// urlSearchParams.set(name, value) 将与 name 关联的 URLSearchParams 对象中的值设置为 value
myURL.searchParams.set('a', 'b');
console.log(myURL.href);

// urlSearchParams.forEach(fn[, thisArg]) 迭代查询中的每个名称-值对并调用给定的函数
myURL.searchParams.forEach((value, name, searchParams) => {
  console.log(`name---value: ${name} --- ${value}    searchParams:${searchParams}`);
})

// myURL.searchParams.entries() 可以就写成 myURL.searchParams
// 在查询字符串中的每个名称-值对上返回 ES6 Iterator。 迭代器的每一项都是 JavaScript Array。 Array 的第一项是 name，Array 的第二项是 value。
for (const item of myURL.searchParams) {
  console.log(item);
}

/**
 * 其他：
 * urlSearchParams.sort() --- 按名称对所有现有的名称-值对进行就地排序
 * urlSearchParams.toString() --- 返回序列化为字符串的搜索参数，必要时使用百分比编码的字符
 */