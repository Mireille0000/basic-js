const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let digitsArr = []; 

  while (n) {
    digitsArr.push(n % 10);
    n = Math.floor(n / 10);
  }

  for (let i = 0; i < digitsArr.length; i++) {
    let n = 0; 
    for (let j = digitsArr.length - 1; j >= 0; j--) {
        if (j !== i) {
          n = n * 10 + digitsArr[j];
        }
    }
    result = Math.max(n, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};
