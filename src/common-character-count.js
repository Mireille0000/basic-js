const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  const diff = arr1.filter(i => !arr2.includes(i))
  .concat(arr2.filter(i => !arr1.includes(i)));

  if (arr1.length === arr2.length && diff.length === arr1.length + arr2.length) {
    return 0
  }

  if (arr2.length > arr1.length && diff.length === 0) {
    return arr1.length;
  }

  if (arr2.length > arr1.length) {
    return arr2.length - diff.length;
  }

  return arr1.length - diff.length;
}

module.exports = {
  getCommonCharacterCount
};
