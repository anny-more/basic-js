const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper (matrix) {
  const newM = matrix.map((item, indexJ) => { 
    return item.map((el, indexI) => {
      console.log(matrix[indexJ][indexI])
      if (el === true) {
        return el = 1;
      } else {
        if (indexJ === 0) {
          return el = (matrix[indexJ][indexI - 1] || 0) + (matrix[indexJ + 1][indexI] || 0) + (matrix[indexJ][indexI + 1] || 0) + (matrix[indexJ + 1][indexI - 1] || 0);
          
        } else if (indexJ === matrix.length - 1) {
          return el = (matrix[indexJ - 1][indexI]) + (matrix[indexJ][indexI - 1] || 0) + (matrix[indexJ][indexI + 1] || 0) + (matrix[indexJ - 1][indexI - 1] || 0) + (matrix[indexJ - 1][indexI + 1] || 0);
        } else {
          return el = matrix[indexJ - 1][indexI] + matrix[indexJ + 1][indexI] + (matrix[indexJ][indexI - 1] || 0) + (matrix[indexJ][indexI + 1] || 0);
        }
      } 
    } )
  })
  return newM;
}

module.exports = {
  minesweeper
};
