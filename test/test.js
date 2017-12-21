'use strict'

let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let expect = require('chai').expect
let db = require('../src')

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

    result = db.searchAddressByZipcode(27120, 5)
    expect(result.length).to.equal(5)

    result = db.searchAddressByZipcode('')
    expect(result.length).to.equal(0)
  })
})

describe('Function splitAddress', function () {
  it('Shoud split address without touching original address', function () {
    let addr = `126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์ ปากเกร็ด ปากเกร็ด นนทบุรี Thailand 11120`
    let result = db.splitAddress(addr)
    expect(result).to.deep.equal({
      'address': '126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์',
      'amphoe': 'ปากเกร็ด',
      'district': 'ปากเกร็ด',
      'province': 'นนทบุรี',
      'zipcode': '11120'
    })

    expect(addr).to.equal(`126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์ ปากเกร็ด ปากเกร็ด นนทบุรี Thailand 11120`)
  })

  it('Shoud return null when cant split address', function () {
    let addr = `126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์`
    let result = db.splitAddress(addr)
    expect(result).to.be.null

    expect(addr).to.equal(`126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์`)
  })

  it('Shoud return null when cant split address', function () {
    let addr = `126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์ ปากเกร็ด ปากเกร็ด Thailand 11120`
    let result = db.splitAddress(addr)
    expect(result).to.be.null

    expect(addr).to.equal(`126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์ ปากเกร็ด ปากเกร็ด Thailand 11120`)
  })

  it('Shoud return null when cant split address', function () {
    let addr = `126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์ Thailand 11120`
    let result = db.splitAddress(addr)
    console.log(result)
    expect(result).to.be.null

    expect(addr).to.equal(`126/548 ถ.สุขาประชาสรรค์ ม.การเคหะนนท์ Thailand 11120`)
  })
})
