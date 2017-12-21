let fs = require('fs')
let convertExcel = require('excel-as-json').processFile;

console.log('Converting excel to JSON...')
convertExcel('./database/raw_database/database.xlsx', './database/migrate/database.json', null, function (err, data) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Convert excel to JSON ---- done !')
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
      
      fs.unlinkSync('./database/migrate/tree.json');
      fs.unlinkSync('./database/migrate/database.json');
      console.log('Minify tree ---- done !')
    })
  })
})
