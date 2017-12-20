'use strict';

var lib = require('../index.js');

exports.prepareAddress = function (address, zip) {
  address = address.replace(zip, '');
  address = address.replace('Thailand', '');
  address = address.replace('ต.', '');
  address = address.replace('อ.', '');
  address = address.replace('จ.', '');
  address = address.replace('ตำบล', '');
  address = address.replace('อำเภอ', '');
  address = address.replace('จังหวัด', '');
  address = address.replace('แขวง', '');
  address = address.replace('เขต', '');
  address = address.replace('แขวง.', '');
  address = address.replace('เขต.', '');
  address = address.replace(' กทม. ', ' กรุงเทพมหานคร ');
  address = address.replace(' กทม ', ' กรุงเทพมหานคร ');
  address = address.replace(' กรุงเทพ ', ' กรุงเทพมหานคร ');
  return address;
};

exports.getBestResult = function (zip, address) {
  var searchResult = lib.searchAddressByZipcode(zip);
  searchResult.forEach(function (element, index) {
    var district = address.indexOf(element.district);
    var next = district !== -1 ? district + 1 : 0;
    var amphoe = address.indexOf(element.amphoe, next);
    next = amphoe !== -1 ? amphoe + 1 : next + 1;
    var province = address.indexOf(element.province, next);
    var point = [district, amphoe, province].filter(function (el) {
      return el >= 0;
    }).length;
    searchResult[index].point = point;
  });
  searchResult.sort(function (a, b) {
    return b.point - a.point;
  });
  if (searchResult && searchResult[0] && searchResult[0].point === 3) {
    return searchResult[0];
  } else {
    return null;
  }
};

exports.cleanupAddress = function (address, result) {
  var regexDistrict = new RegExp('\\s' + result.district, 'g');
  var findDistrict = regexDistrict.exec(address);
  if (findDistrict) {
    address = address.replace(findDistrict[0], '');
  }
  var regexAmphoe = new RegExp('\\s' + result.amphoe + '|\u0E40\u0E21\u0E37\u0E2D\u0E07', 'g');
  var findAmphoe = regexAmphoe.exec(address);
  if (findAmphoe) {
    address = address.replace(findAmphoe[0], '');
  }
  var regexProvince = new RegExp('\\s' + result.province, 'g');
  var findProvince = regexProvince.exec(address);
  if (findProvince) {
    address = address.replace(findProvince[0], '');
  }
  address = address.trim();
  return address;
};