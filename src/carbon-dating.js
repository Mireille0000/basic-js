const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const In = parseFloat(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)));
  const NATURAL_LOG_OF_TWO = Math.log(2);
  
  if (isNaN(parseInt(sampleActivity)) ||
  Array.isArray(sampleActivity) || In < 0 || typeof sampleActivity !== 'string' || !isFinite(In)) {
    return false;
  }

  return Math.ceil((In / NATURAL_LOG_OF_TWO) * HALF_LIFE_PERIOD);
}

module.exports = {
  dateSample
};
