const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const inF = fs.createReadStream('./extra/test.txt')
const outF = fs.createWriteStream('./extra/test.txt.gz');

zlib.deflate()

inF.pipe(gzip).pipe(outF);