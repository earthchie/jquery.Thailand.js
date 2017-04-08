const fs = require('fs')
const orig = require('./db.json')

fs.writeFileSync('db2.json', JSON.stringify(orig.map((row => [row.d, row.a, row.p, row.z]))))
console.log('DONE')
