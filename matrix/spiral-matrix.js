/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

// My solution

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    let spiralArray = [];
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            spiralArray.push(matrix[top][i])
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            spiralArray.push(matrix[i][right])
        }
        right--;

        if (top <= bottom) {
            console.log("top",top , bottom);
            for (let i = right; i >= left; i--) {
                spiralArray.push(matrix[bottom][i])
            }
            bottom--;
        }

        if (left <= right) {
            console.log("left",left, right);
            for (let i = bottom; i >= top; i--) {
                spiralArray.push(matrix[i][left])
            }
            left++;
        }


    }

    return spiralArray
};

let array = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let result = spiralOrder(array);
console.log({result});