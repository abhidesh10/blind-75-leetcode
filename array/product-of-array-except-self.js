/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

// My solution
var productExceptSelf = function (nums) {
    let array = [];
    let preProduct = {};
    for (let i = 0; i < nums.length; i++) {
        let num = 1;

        if (preProduct[nums[i]]) {
            array.push(preProduct[nums[i]])
            continue;
        }

        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;

            if (nums[j] === 0) {
                num = 0;
                break
            }

            num *= nums[j];
        }

        preProduct[nums[i]] = num;
        array.push(num)
    }
    return array
};

var productExceptSelf = function (nums) {
    let mul = 1, countZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            countZero++
        } else {
            mul *= nums[i]
        }
    }

    let result = [];
    if (countZero > 1) {
        result = nums.map((n) => 0);
    } else if (countZero === 1) {
        result = nums.map((n) => n === 0 ? mul : 0);
    } else {
        for (let i = 0; i < nums.length; i++) {
            let val = mul / nums[i];
            result.push(val)
        }
    }

    return result;
};

let array = [1, 2, 3, 4];
let result = productExceptSelf(array);
console.log({ result });