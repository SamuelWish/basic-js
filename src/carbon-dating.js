const { NotImplementedError } = require("../lib");

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
  if (
    typeof sampleActivity !== 'string' ||
    sampleActivity.trim() === '' ||  
    Array.isArray(sampleActivity) || 
    (typeof sampleActivity === 'object' && sampleActivity !== null) 
  ) {
    return false;
  }

  const num = Number(sampleActivity);
  if (Number.isNaN(num) || !Number.isFinite(num)) {
    return false;
  }

  if (num <= 0 || num > 15) {
    return false; 
  }

  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let halfLifeOfsample = Math.LN2 / HALF_LIFE_PERIOD;

  let result = Math.log(MODERN_ACTIVITY / sampleActivity) / halfLifeOfsample;

  return Math.ceil(result);
}

module.exports = {
  dateSample,
};
