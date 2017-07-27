'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

var toLocaleString = function toLocaleString(number, locale) {
  var x = [1, 2, 3];
  var y = [].concat(x, [4]);
  console.log(y.reduce(function (previous, current) {
    return previous + current;
  }, 0));
  return number.toLocaleString(locale);
};

module.exports = {
  toLocaleString: toLocaleString
};
