const fs = require('fs')
const orig = require('./db.json')
let dict = {}
let count = 0
let data = []
orig.forEach((item) => {
  data.push([
    getIndex(item.d),
    getIndex(item.a),
    getIndex(item.p),
    item.z
  ])
})
// transpose key, value
let lookup = []
Object.keys(dict).forEach((k) => {
  lookup[dict[k]] = k
})
fs.writeFileSync('db3.json', JSON.stringify({ data, lookup }))
console.log('DONE')

function getIndex(word) {
  if (!dict[word]) {
    dict[word] = count++
  }
  return dict[word]
}
