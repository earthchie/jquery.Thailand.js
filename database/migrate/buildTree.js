
const tree = require('./database.json')
const fs = require('fs')

console.log('123')
let provinces = []
let resultTree = tree.map((item) => {
  if (!(provinces.find(prov => prov === item.province))) {
    provinces.push(item.province)
    console.log(item.province + ' ------- Done !')
    let prov = tree.filter(data => data.province === item.province)
    let amphoe = []
    return [item.province, prov.map((a) => {
      let amp = tree.filter(data => data.province === a.province && data.amphoe === a.amphoe)
      if (!(amphoe.find(amp => amp === a.amphoe))) {
        amphoe.push(a.amphoe)
        let dist = []
        return [a.amphoe, amp.map((d) => {
          let dis = tree.filter(data => data.province === d.province && data.amphoe === d.amphoe && data.district === d.district)
          if (!(dist.find(dis => dis === d.district))) {
            dist.push(d.district)
            // console.log(d.province + ' -- ' + d.amphoe + ' -- ' + d.district + ' ------- Done !')
            return [d.district, dis.map((z) => {
              return z.zipcode
            })]
          }
        }).filter(dis => dis).sort(((a, b) => {
          if(a[0] < b[0]) return -1;
          if(a[0] > b[0]) return 1;
          return 0;
        }))]
      }
    }).filter(amp => amp).sort(((a, b) => {
      if(a[0] < b[0]) return -1;
      if(a[0] > b[0]) return 1;
      return 0;
    }))]
  }
}).filter(item => item).sort(((a, b) => {
  if(a[0] < b[0]) return -1;
  if(a[0] > b[0]) return 1;
  return 0;
}))

fs.writeFileSync('./database/migrate/tree.json', JSON.stringify(resultTree))






