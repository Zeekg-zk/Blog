const { URL } = require('url');
// 你也可以这么引入 const URL = globalThis.URL

// new URL(input[, base])
// input为要解析的绝对或相对的输入网址。 如果 input 是相对的，则需要 base。 如果 input 是绝对的，则忽略 base。
const url1 = new URL('http://example.com:3000/abc?name=Zeekg')
console.log(url1);
console.log(url1.searchParams.toString());
const url2 = new URL('/foo', 'http://example.com')
// console.log(url2);

/**
URL {
  href: 'http://example.com:3000/abc?name=Zeekg', 获取和设置序列化的网址
  origin: 'http://example.com:3000',  获取网址的源的只读的序列化
  protocol: 'http:',
  username: '',
  password: '',
  host: 'example.com:3000', 获取和设置网址的主机部分
  hostname: 'example.com',  获取和设置网址的主机名部分。 url.hostname 不包括端口
  port: '3000', 获取和设置网址的端口部分
  pathname: '/abc',  获取和设置网址的路径部分
  search: '?name=Zeekg',
  searchParams: URLSearchParams { 'name' => 'Zeekg' },
  hash: '#abc'  获取和设置网址的片段部分
}
 */