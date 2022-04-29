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
  let cur = 1;
  let i = 0;
  let res = '';
  while (i <= arr.length) {
    if (arr[i] === arr[i + 1]) {
      cur += 1;
    } else {
      res += `${cur > 1 ? cur : ''}${arr[i]}`;
      cur = 1;
    }
    i += 1;
  }
  return res
}

module.exports = {
  encodeLine
};
