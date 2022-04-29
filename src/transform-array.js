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
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  for (let i = 0; i < arr.length; i +=1) {
    if (arr[i] === '--discard-prev') {
      if (result.length > 0) {
        let temp = result.pop();
        if (temp !== arr[i - 1]) {
           result.push(temp);
        }
      }
    } else if (arr[i] === '--double-prev') {
      if (result.length > 0) {
        let temp = result.pop();
        if (temp === arr[i - 1]) {
          result.push(temp);
        }
          result.push(temp);
      }
    } else if (arr[i] === '--double-next') {
      i = i + 1;
      if (arr[i] !== undefined) {
        result.push(arr[i]);
        result.push(arr[i]);
      }
    } else if (arr[i] === '--discard-next') {
      i = i + 1
    } else {
      result.push(arr[i])
    } 
}
return result;
}

module.exports = {
  transform
};
