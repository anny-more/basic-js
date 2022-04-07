import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let temp = [];
  let indexes = [];
  let result = [];
  for (let i = 0; i < arr.length; i+= 1) {
    if (arr[i] !== -1) {
      temp.push(arr[i]);
    } else {
      indexes.push(i);
    }
  }
  temp.sort((a, b) => a - b);
  console.log(temp, indexes);
   let j = 0; 
  for (let i = 0; i < temp.length + indexes.length; i+= 1) {
    if (indexes.includes(i)) {
      result.push(-1);
      j++;
    } else {
      result.push(temp[i - j])
    }
  }
  return result;
}
