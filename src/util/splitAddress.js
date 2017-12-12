exports.findAddress = function (address, zip) {
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
  return address
}

exports.findPoint = function (searchResult, address) {
  searchResult.forEach((element, index) => {
    let district = address.indexOf(element.district)
    let next = (district !== -1) ? district + 1 : 0
    let amphoe = address.indexOf(element.amphoe, next)
    next = (amphoe !== -1) ? amphoe + 1 : next + 1
    let province = address.indexOf(element.province, next)
    let point = [district, amphoe, province].filter(el => el >= 0).length
    searchResult[index].point = point
  })
  searchResult.sort((a, b) => b.point - a.point)
  return searchResult
}


exports.cleanAddress = function (address, result) {
  let regexDistrict = new RegExp(`\\s${result.district}`, 'g')
  let findDistrict = regexDistrict.exec(address)
  if (findDistrict) {
    address = address.replace(findDistrict[0], '')
  }
  let regexAmphoe = new RegExp(`\\s${result.amphoe}|เมือง`, 'g')
  let findAmphoe = regexAmphoe.exec(address)
  if (findAmphoe) {
    address = address.replace(findAmphoe[0], '')
  }
  let regexProvince = new RegExp(`\\s${result.province}`, 'g')
  let findProvince = regexProvince.exec(address)
  if (findProvince) {
    address = address.replace(findProvince[0], '')
  }
  address = address.trim()
  return address
}
