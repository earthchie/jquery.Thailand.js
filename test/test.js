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
  })

  it('searchAddressByAmphoe', function () {
    let result = db.searchAddressByAmphoe('อรัญประเทศ')
    expect(result.length).to.equal(13)
  })

  it('searchAddressByProvince', function () {
    let result = db.searchAddressByProvince('อรัญประเทศ')
    expect(result.length).to.equal(0)
  })

  it('searchAddressByProvince', function () {
    let result = db.searchAddressByProvince('สระแก้ว')
    expect(result.length).to.equal(20)
  })

  it('searchAddressByProvince', function () {
    let result = db.searchAddressByProvince('สระแก้ว', 10)
    expect(result.length).to.equal(10)
  })
})
