'use strict';
const fs = require('fs')
const excelToJson = require('convert-excel-to-json');

console.log('Converting excel to JSON...')
const result = excelToJson({
    sourceFile: './database/raw_database/database.xlsx',
    header:{
        rows: 1
    },
    columnToKey: {
      A: 'province',
      B: 'amphoe',
      C: 'district',
      D: 'zipcode'
    }
})

console.log('Converting ---- done !')
fs.writeFile('./database/migrate/database.json', JSON.stringify(result.Sheet1), 'utf8', function (err) {
  if (err) {
    console.log('error')
    console.log(err)
    return
  }
  
  let exec = require('child_process').exec
  exec('node ./database/migrate/buildTree.js', function (err, stdout, stderr) {
    if (err) {
      console.log(err)
      return
    }
    console.log('Build json tree ---- done !')
    exec('node ./database/migrate/convert.js', function (err, stdout, stderr) {
      if (err) {
        console.log(err)
        return
      }
      
      fs.unlinkSync('./database/migrate/tree.json')
      fs.unlinkSync('./database/migrate/database.json')
      console.log('Minify tree ---- done !')
      console.log('All task completed and ready to go !!')
    })
  })
})

