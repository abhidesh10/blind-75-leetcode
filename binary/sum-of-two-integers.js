/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.

Example 1:
Input: a = 1, b = 2
Output: 3

Example 2:
Input: a = 2, b = 3
Output: 5

*/

var getSum = function(a, b) {
    let minNum = Math.min(a,b);
    let maxNum = Math.max(a,b);

    let flag = true;

    if (minNum < 0 && maxNum < 0) {
        minNum = Math.abs(minNum)
        maxNum = Math.abs(maxNum)
        flag = false
    };

    for (let i = 1; i <= maxNum; i++) {
        minNum++;
    }

    if (!flag) {
        minNum = -minNum
    }
    
    return minNum
};

let result = getSum(4,5);
console.log({result});