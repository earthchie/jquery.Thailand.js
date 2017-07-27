'use strict'

let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let expect = require('chai').expect
let db = require('../src/thai-address-database')

describe('More then 1 zipcode District', function () {
  it('District ปราณบุรี have 2 result', function () {
    let result = db.searchAddressByDistrict('ปราณบุรี')
    expect(result.length).to.equal(2)
    expect(result.filter((item) => item.province === 'ประจวบคีรีขันธ์').length).to.equal(2)
  })
  it('District วังก์พง have 2 result', function () {
    let result = db.searchAddressByDistrict('วังก์พง')
    expect(result.length).to.equal(2)
    expect(result.filter((item) => item.province === 'ประจวบคีรีขันธ์').length).to.equal(2)
  })
  it('District หนองตาแต้ม have 2 result', function () {
    let result = db.searchAddressByDistrict('หนองตาแต้ม')
    expect(result.length).to.equal(2)
    expect(result.filter((item) => item.province === 'ประจวบคีรีขันธ์').length).to.equal(2)
  })
  it('District เขาจ้าว have 2 result', function () {
    let result = db.searchAddressByDistrict('เขาจ้าว')
    expect(result.length).to.equal(2)
    expect(result.filter((item) => item.province === 'ประจวบคีรีขันธ์').length).to.equal(2)
  })
  it('District สามร้อยยอด have 2 result', function () {
    let result = db.searchAddressByDistrict('สามร้อยยอด')
    expect(result.length).to.equal(2)
    expect(result.filter((item) => item.province === 'ประจวบคีรีขันธ์').length).to.equal(2)
  })
  it('District เขาน้อย have 2 result', function () {
    let result = db.searchAddressByDistrict('เขาน้อย')
    expect(result.filter((item) => item.province === 'ประจวบคีรีขันธ์').length).to.equal(2)
  })
})

describe('#search', function () {
  it('searchAddressByDistrict', function () {
    let result = db.searchAddressByDistrict('อรัญประเทศ')
    expect(result.length).to.equal(1)

    result = db.searchAddressByDistrict(' อรัญประเทศ')
    expect(result.length).to.equal(1)

    result = db.searchAddressByDistrict('อรัญประเทศ ')
    expect(result.length).to.equal(1)

    result = db.searchAddressByDistrict('  อรัญประเทศ  ')
    expect(result.length).to.equal(1)

    result = db.searchAddressByDistrict('')
    expect(result.length).to.equal(0)

    result = db.searchAddressByDistrict('  ')
    expect(result.length).to.equal(0)
  })

  it('searchAddressByAmphoe', function () {
    let result = db.searchAddressByAmphoe('อรัญประเทศ')
    expect(result.length).to.equal(13)

    result = db.searchAddressByAmphoe('')
    expect(result.length).to.equal(0)
  })

  it('searchAddressByProvince', function () {
    let result = db.searchAddressByProvince('สระแก้ว')
    expect(result.length).to.equal(20)

    result = db.searchAddressByProvince('สระแก้ว', 10)
    expect(result.length).to.equal(10)

    result = db.searchAddressByProvince('อรัญประเทศ')
    expect(result.length).to.equal(0)

    result = db.searchAddressByProvince('')
    expect(result.length).to.equal(0)
  })

  it('searchAddressByZipcode', function () {
    let result = db.searchAddressByZipcode('27120')
    expect(result.length).to.equal(15)

    result = db.searchAddressByZipcode(27120)
    expect(result.length).to.equal(15)

    result = db.searchAddressByZipcode('')
    expect(result.length).to.equal(0)
  })
})
