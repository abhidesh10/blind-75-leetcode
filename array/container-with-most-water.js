/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// My solution
var maxArea = function(height) {
    let maxWater = 0;
    for (let i = 0; i < height.length; i++) {
        const initialHeight = height[i];
        let count = 0;
        for (let j = i + 1; j < height.length; j++) {
            const endHeight = height[j];
            const minHeight = initialHeight > endHeight ? endHeight : initialHeight;
            count++;

            if (minHeight * count > maxWater) {
                maxWater = minHeight * count
            }
        }

    }

    return maxWater
};

var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let minHeight = height[left] > height[right] ? height[right] : height[left];
        let width = right - left;
        let area = minHeight * width

        if (area > maxWater) {
            maxWater = area
        }

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxWater
};

const height = [1,8,12,2,5,4,8,3,7];
let result = maxArea(height)
console.log({result});