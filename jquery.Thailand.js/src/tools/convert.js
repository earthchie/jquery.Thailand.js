/*
มีเพียง 4 รายการนี้ที่มี zipcode มากกว่า 1

ประจวบคีรีขันธ์ ปราณบุรี ปราณบุรี [ 77120, 77160 ]
ประจวบคีรีขันธ์ ปราณบุรี วังก์พง [ 77120, 77160 ]
ประจวบคีรีขันธ์ ปราณบุรี หนองตาแต้ม [ 77120, 77160 ]
ประจวบคีรีขันธ์ ปราณบุรี เขาจ้าว [ 77120, 77160 ]
ประจวบคีรีขันธ์ ปราณบุรี เขาน้อย [ 77120, 77160 ]
ประจวบคีรีขันธ์ สามร้อยยอด สามร้อยยอด [ 77120, 77160 ]

*/
let tree = require('./data.json')
let wordcut = require('wordcut')
const fs = require('fs')

let cnt = 0
let dict = {}
let words = {}

wordcut.init()

// pass 1 generate dict and word list
tree.forEach(p => {
  addToDict(p[0])
  p[1].forEach(a => {
    addToDict(a[0])
    a[1].forEach(d => {
      addToDict(d[0])
    })
  })
})


console.log('words=', Object.keys(words).length)
// processs words sorting top 52 most occurrences
let newWords = {}
Object.keys(words).sort((a, b) => {
  // order by descending
  if (words[a] === words[b]) {
    return 0
  }
  if (words[a] < words[b]) {
    return 1
  }
  return -1
})
.filter((word, i) => i < 52)
.forEach((word, i) => {
  newWords[String.fromCharCode(i < 26 ? 65 + i : 97 + i - 26)] = word
})

//console.log('most freq word=', Object.keys(newWords).map(idx => [newWords[idx], words[newWords[idx]]]))
fs.writeFileSync('words.txt', 
  '|คำ|จำนวนครั้ง|\n' +
  '|---|---:|\n' +
  Object.keys(newWords).map(idx => '|' + newWords[idx] + '|' + words[newWords[idx]] + '|').join('\n')
)

// process dict keep only 2 or more occurences
let newDict = {}
let lookup = []
Object.keys(dict).filter(key => dict[key] > 1).forEach(key => {
  key = changeWord(key)
  newDict[key] = lookup.length
  lookup.push(key)
})


// pass 2: rebuild tree
let newTree = tree.map(p =>
  [findIndex(p[0]), p[1].map(a => 
    [findIndex(a[0]), a[1].map(d =>
      [findIndex(d[0]), d[1].length === 1 ? d[1][0] : d[1]]
    )]
  )]
)

fs.writeFileSync('./data3.json', JSON.stringify({
  data: newTree,
  lookup: lookup.join('|'),
  words: Object.keys(newWords).map((ch) => newWords[ch]).join('|'),
}))

function addToDict(key) {
  if (typeof dict[key] === 'undefined') {
    dict[key] = 1
  } else {
    dict[key]++
  }
  let wordList = wordcut.cut(key).split('|')
  wordList.forEach((word) => {
    if (typeof words[word] === 'undefined') {
      words[word] = 1
    } else {
      words[word]++
    }
  })
}

function findIndex(key) {
  key = changeWord(key)
  return typeof newDict[key] === 'number' ? newDict[key] : key
}

function changeWord(text) {
  Object.keys(newWords).forEach(ch => {
    text = text.replace(newWords[ch], ch)
  })
  return text
}
