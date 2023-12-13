/*
Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

Example 1:
Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

Example 2:
Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
 
Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 100
mat[i][j] is either 0 or 1.
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */

var numSpecial = function (mat) {
  let row = mat.length;
  let col = mat[0].length;
  let count = 0;

  let checkSpecial = (rowi, colj, matrix) => {
    for (let c = 0; c < col; c++) {
      if (colj === c) {
        continue;
      }

      if (matrix[rowi][c] !== 0) {
        return false;
      }
    }

    for (let r = 0; r < row; r++) {
      if (rowi == r) {
        continue;
      }

      if (matrix[r][colj] !== 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 1) {
        if (checkSpecial(i, j, mat)) {
          count++;
          break;
        }
      }
    }
  }

  return count;
};

let array = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

let result = numSpecial(array);
console.log({ result });
