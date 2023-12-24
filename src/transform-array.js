const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const error = new Error("'arr' parameter must be an instance of the Array!");

  if (Array.isArray(arr) === false) {
    throw error;
  }

  const doubleArr = arr.map((item, index, array) => {
      if (array[index - 1] === '--double-next') return [item, item];
      return item;
    }
  ).flat();

  return doubleArr.map((item, index, array) => {
      if (array[index - 1] === '--discard-next') {
        return [];
      };
      if (array[index + 1] === '--discard-prev') {
        return [];
      };
      if (array[index + 1] === '--double-prev') {
        return [item, item];
      }
      if (item.toString().startsWith('--d'))
        return [];

        return item;
      }
    ).flat();
}

module.exports = {
  transform
};
