/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let curMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const total = curMax + nums[i];
    curMax = Math.max(total, nums[i]);
    max = Math.max(max, curMax);
    console.log(i, curMax, max)
  }
  return max;
};

const store = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(store);
console.log("Result: ", result);