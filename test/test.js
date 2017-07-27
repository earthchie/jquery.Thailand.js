'use strict'

let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let expect = require('chai').expect
let db = require('../src/thai-address-database')

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

    result = db.searchAddressByDistrict('ปราณบุรี')
    expect(result.length).to.equal(2)

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
