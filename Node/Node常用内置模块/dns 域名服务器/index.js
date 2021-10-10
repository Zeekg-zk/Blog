const dns = require('dns')

/**
 * dns.lookup(hostname[, options], callback) - 将主机名解析为第一个找到的 A(IPv4) 或 AAAA(IPv6) 记录
 * dns.resolve4(hostname[, options], callback) - 使用域名系统协议为 hostname 解析 IPv4 地址（ A 记录）
 * 
 * 这两个查询有什么区别？
 * 当配置了本地Host时， 是否会对查询结果产生影响
 */

// 查询 www.baidu.com 的IP地址
dns.lookup('www.baidu.com', (err, address, family) => {
  if (err) throw err
  console.log(`IPV${family}地址是${address}`);
})

// 将 all 选项设置为 true，callback 的参数更改为 (err, addresses)
// addresses 是具有属性 address 和 family 的对象数组
dns.lookup('www.qq.com', {
  all: true
}, (err, address) => {
  if (err) throw err
  console.log(`lookup查询：${JSON.stringify(address, null, 2)}`);
})

// dns.resolve4()
dns.resolve4('www.baidu.com', (err, address) => {
  if (err) throw err
  // 返回带有 IPV4 地址的数组
  console.log(`resolve4查询：${JSON.stringify(address, null, 2)}`);
})