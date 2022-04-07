import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let strOfNum = String(n);
  let max = -Infinity;
  for (let i = 0; i < strOfNum.length; i +=1) {
    let num = Number(strOfNum.split('').map((item, index) => index === i ? '' : item).join(''));
    max = Math.max(max, num);
  }
  return max;
}
