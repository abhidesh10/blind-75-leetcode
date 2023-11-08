/*
Quetion

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3, 2, 4], target = 6
Output: [1, 2]

Example 3:

Input: nums = [3, 3], target = 6
Output: [0, 1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    
    // Will try to solve this problem with hash table logic.
    let numberNeeded = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];

        if (numberNeeded[number]) {
            result = [numberNeeded[number], i];
            break;
        }
        // will not store the actual number instead will store the number such that the number should be addition of target.
        // for eg: if my current num is 2 and target is 15 then i will 13 (15 - 2). and if i get 13 in array then its simply means addition of target value.
        // by doing this we dont wont to iterate array every time.
        numberNeeded[target - number] = i
    }

    return result;
};

const nums = [2, 7, 11, 15, 4];
const target = 15;

let result = twoSum(nums, target)
console.log({ result });