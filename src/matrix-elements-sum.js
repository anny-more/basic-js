const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = matrix.reduce((top, item, indexI) => {
    return top += item.reduce((acc, el, indexJ) =>  {
        return acc += (indexI > 0) ? el * (matrix[indexI - 1][indexJ] === 0 ? 0 : 1) : el;
    }, 0)
}, 0);
return result;
}

module.exports = {
  getMatrixElementsSum
};
