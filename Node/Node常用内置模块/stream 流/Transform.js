const fs = require('fs');
const zlib = require('zlib');

// Transform Stream 是 Duplex stream 的特例

const gzip = zlib.createGzip();

const input = fs.createReadStream('./test.txt', { encoding: 'utf8'})
const output = fs.createWriteStream('./test.gz', { encoding:'utf8'})

input.pipe(gzip).pipe(output)