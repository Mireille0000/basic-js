const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;

  return arr.reduce((acc, _, i) => {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else if (count === 1) {
        acc.push(arr[i]);
        count = 1;
    } else {
        acc.push(count);
        acc.push(arr[i]);
        count = 1;
      }
    return acc;
  }, []).join('');
}

module.exports = {
  encodeLine
};
