import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  function getSum(b) {
    let a = String(b);
    return a.split('').reduce((acc, item) => acc + Number(item), 0);
  }
  while (n > 9) {
    n = getSum(n);
  }
  return n;
}
