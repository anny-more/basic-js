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
  const arr = Array.from(new Set([...s1].filter(item => [...s2].includes(item))));
  const result = arr.reduce(function(acc, item) {
    let a1 = [...s1].filter(el => el === item).length;
    let a2 = [...s2].filter(el => el === item).length;
    return acc + Math.min(a1, a2);
  }, 0);
  return result
}

module.exports = {
  getCommonCharacterCount
};
