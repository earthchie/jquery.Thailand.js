'use strict'

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
const numFormatter = function(number, locale) {
  let x = [1, 2, 3]
  let y = [...x, 4]
  console.log(y.reduce((previous, current) => {
    return previous + current
  }, 0))
  return number.toLocaleString(locale)
}

module.exports = {
  numFormatter
}
