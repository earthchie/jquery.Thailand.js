'use strict'

var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var expect = require('chai').expect
var db = require('../src/thai-address-database')

describe('#find', function () {
  it('findAddressByDistrict', function () {
    var result = db.findAddressByDistrict('อรัญประเทศ')
    expect(result.length).to.equal(1)
  })

  it('findAddressByAmphoe', function () {
    var result = db.findAddressByAmphoe('อรัญประเทศ')
    expect(result.length).to.equal(13)
  })

  it('findAddressByProvince', function () {
    var result = db.findAddressByProvince('อรัญประเทศ')
    expect(result.length).to.equal(0)
  })

  it('findAddressByProvince', function () {
    var result = db.findAddressByProvince('สระแก้ว')
    expect(result.length).to.equal(20)
  })
})
