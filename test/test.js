'use strict'

var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var expect = require('chai').expect
var db = require('../src/thai-address-database')

describe('#search', function () {
  it('searchAddressByDistrict', function () {
    var result = db.searchAddressByDistrict('อรัญประเทศ')
    expect(result.length).to.equal(1)
  })

  it('searchAddressByAmphoe', function () {
    var result = db.searchAddressByAmphoe('อรัญประเทศ')
    expect(result.length).to.equal(13)
  })

  it('searchAddressByProvince', function () {
    var result = db.searchAddressByProvince('อรัญประเทศ')
    expect(result.length).to.equal(0)
  })

  it('searchAddressByProvince', function () {
    var result = db.searchAddressByProvince('สระแก้ว')
    expect(result.length).to.equal(20)
  })
})
