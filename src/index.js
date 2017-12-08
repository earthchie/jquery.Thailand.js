'use strict'

/**
 * From jquery.Thailand.js line 38 - 100
 */
const preprocess = function (data) {
  let lookup = []
  let words = []
  let expanded = []
  let useLookup = false
  let t

  if (data.lookup && data.words) {
    // compact with dictionary and lookup
    useLookup = true
    lookup = data.lookup.split('|')
    words = data.words.split('|')
    data = data.data
  }

  t = function (text) {
    function repl (m) {
      let ch = m.charCodeAt(0)
      return words[ch < 97 ? ch - 65 : 26 + ch - 97]
    }
    if (!useLookup) {
      return text
    }
    if (typeof text === 'number') {
      text = lookup[text]
    }
    return text.replace(/[A-Z]/ig, repl)
  }

  if (!data[0].length) {
    // non-compacted database
    return data
  }
  // decompacted database in hierarchical form of:
  // [["province",[["amphur",[["district",["zip"...]]...]]...]]...]
  data.map(function (provinces) {
    let i = 1
    if (provinces.length === 3) { // geographic database
      i = 2
    }

    provinces[i].map(function (amphoes) {
      amphoes[i].map(function (districts) {
        districts[i] = districts[i] instanceof Array ? districts[i] : [districts[i]]
        districts[i].map(function (zipcode) {
          let entry = {
            district: t(districts[0]),
            amphoe: t(amphoes[0]),
            province: t(provinces[0]),
            zipcode: zipcode
          }
          if (i === 2) { // geographic database
            entry.district_code = districts[1] || false
            entry.amphoe_code = amphoes[1] || false
            entry.province_code = provinces[1] || false
          }
          expanded.push(entry)
        })
      })
    })
  })
  return expanded
}

const db = preprocess(require('../database/geodb.json'))

const resolveResultbyField = (type, searchStr, maxResult) => {
  searchStr = searchStr.toString().trim()
  if (searchStr === '') {
    return []
  }
  if (!maxResult) {
    maxResult = 20
  }
  let possibles = []
  try {
    possibles = db.filter(item => {
      let regex = new RegExp(searchStr, 'g')
      return item[type].toString().match(regex)
    }).slice(0, maxResult)
  } catch (e) {
    return []
  }
  return possibles
}

exports.searchAddressByDistrict = function (searchStr, maxResult) {
  return resolveResultbyField('district', searchStr, maxResult)
}
exports.searchAddressByAmphoe = function (searchStr, maxResult) {
  return resolveResultbyField('amphoe', searchStr, maxResult)
}
exports.searchAddressByProvince = function (searchStr, maxResult) {
  return resolveResultbyField('province', searchStr, maxResult)
}
exports.searchAddressByZipcode = function (searchStr, maxResult) {
  return resolveResultbyField('zipcode', searchStr, maxResult)
}

exports.splitAddress = function (fullAddress) {
  let regex = /\s(\d{5})(\s|$)/gi
  let zip = regex.exec(fullAddress)[1]
  // let zip = result
  let address = fullAddress
  address = address.replace(zip, '')
  address = address.replace('Thailand', '')
  address = address.replace('ต.', '')
  address = address.replace('อ.', '')
  address = address.replace('จ.', '')
  address = address.replace('ตำบล', '')
  address = address.replace('อำเภอ', '')
  address = address.replace('จังหวัด', '')
  address = address.replace('แขวง', '')
  address = address.replace('เขต', '')
  address = address.replace('แขวง.', '')
  address = address.replace('เขต.', '')
  address = address.replace(' กทม. ', ' กรุงเทพมหานคร ')
  address = address.replace(' กทม ', ' กรุงเทพมหานคร ')
  address = address.replace(' กรุงเทพ ', ' กรุงเทพมหานคร ')
  // console.log(address)
  let searchResult = exports.searchAddressByZipcode(zip)
  // console.log(searchResult)
  searchResult.forEach((element, index) => {
    let district = address.indexOf(element.district)
    let next = (district !== -1) ? district + 1 : 0
    let amphoe = address.indexOf(element.amphoe, next)
    next = (amphoe !== -1) ? amphoe + 1 : next + 1
    let province = address.indexOf(element.province, next)
    // console.log(district, amphoe, province)
    let point = [district, amphoe, province].filter(el => el >= 0).length
    // console.log(point)
    searchResult[index].point = point
  })
  searchResult.sort((a, b) => b.point - a.point)
  let result = searchResult[0]
  if (result) {
    // console.log(result)
    let newAddress = address

    let regexDistrict = new RegExp(`\\s${result.district}`, 'g')
    let findDistrict = regexDistrict.exec(newAddress)
    if (findDistrict) {
      newAddress = newAddress.replace(findDistrict[0], '')
    }

    let regexAmphoe = new RegExp(`\\s${result.amphoe}|เมือง`, 'g')
    let findAmphoe = regexAmphoe.exec(newAddress)
    if (findAmphoe) {
      newAddress = newAddress.replace(findAmphoe[0], '')
    }

    let regexProvince = new RegExp(`\\s${result.province}`, 'g')
    let findProvince = regexProvince.exec(newAddress)
    if (findProvince) {
      newAddress = newAddress.replace(findProvince[0], '')
    }

    newAddress = newAddress.trim()
    // console.log(newAddress)

    this.address = newAddress
    this.zip = zip
    //
    this.district = result.district
    this.amphoe = result.amphoe
    this.province = result.province

    return {
      address: newAddress,
      district: result.district,
      amphoe: result.amphoe,
      province: result.province,
      zipcode: zip
    }
  }
  return {
    address: address,
    district: '',
    amphoe: '',
    province: '',
    zipcode: zip
  }
}
