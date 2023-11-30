/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


*/

// My code
var setZeroes = function (matrix) {
  let rowLength = matrix.length;
  let colLength = matrix[0].length - 1;
  let row = 0;

  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  let rowHash = {};
  let colHash = {};
  let madeZero = {};

  while (row < rowLength) {
    for (let col = 0; col <= colLength; col++) {
      if (matrix[row][col] === 0 && !madeZero[`row${row}col${col}`]) {
        if (!rowHash[row]) {
          rowHash[row] = true;

          for (let i = 0; i <= right; i++) {
            if (matrix[row][i] !== 0) {
              matrix[row][i] = 0;
              madeZero[`row${row}col${i}`] = true;
            }
          }
        }

        if (!colHash[col]) {
          colHash[col] = true;

          for (let i = 0; i <= bottom; i++) {
            if (matrix[i][col] !== 0) {
              matrix[i][col] = 0;
              madeZero[`row${i}col${col}`] = true;
            }
          }
        }
      }
    }

    row++;
  }

  return matrix;
};

let array = [
  [9, 8, 5, 1, 8, 0, 7, 3, 4, 1, 2, 0],
  [1, 4, 3, 3, 8, 1, 6, 9, 3, 5, 7, 3],
  [2, 5, 0, 9, 5, 9, 6, 4, 8, 4, 7, 6],
  [4, 5, 2, 0, 8, 4, 3, 1, 0, 6, 4, 8],
  [9, 0, 9, 5, 7, 7, 0, 9, 2, 2, 0, 9],
  [2, 7, 6, 2, 1, 3, 0, 7, 0, 2, 7, 0],
  [6, 0, 2, 8, 9, 6, 6, 0, 9, 6, 7, 6],
  [3, 8, 8, 7, 0, 8, 9, 4, 7, 5, 6, 0],
  [0, 9, 7, 3, 1, 7, 3, 0, 9, 7, 8, 8],
  [6, 7, 1, 5, 3, 8, 3, 8, 6, 1, 7, 9],
  [2, 6, 3, 9, 1, 2, 2, 4, 1, 9, 7, 4],
  [8, 0, 4, 8, 8, 5, 8, 4, 2, 9, 1, 7],
];

let result = setZeroes(array);
console.log({ result });

/*
// chatcpt solution

var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // Flags to mark whether the corresponding row or column should be set to zero
  let zeroRows = new Array(m).fill(false);
  let zeroCols = new Array(n).fill(false);

  // Mark rows and columns with zeros
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 0) {
        zeroRows[row] = true;
        zeroCols[col] = true;
      }
    }
  }

  // Set entire rows to zero
  for (let row = 0; row < m; row++) {
    if (zeroRows[row]) {
      for (let col = 0; col < n; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  // Set entire columns to zero
  for (let col = 0; col < n; col++) {
    if (zeroCols[col]) {
      for (let row = 0; row < m; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};

*/
