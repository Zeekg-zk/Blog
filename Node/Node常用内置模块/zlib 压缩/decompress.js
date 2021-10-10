const fs = require('fs')
const zlib = require('zlib')

const gunzip = zlib.createGunzip()

const inF = fs.createReadStream('./extra/test.txt.gz')
const outF = fs.createWriteStream('./extra/test1.txt')

inF.pipe(gunzip).pipe(outF)