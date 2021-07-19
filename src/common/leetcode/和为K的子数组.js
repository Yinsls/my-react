/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let sumMap = new Map();
  let i = 0;
  let sum = 0;
  sumMap.set(0, 1);
  while (i < nums.length) {
    sum += nums[i];
    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k);
    }

    if (sumMap.has(sum)) {
      sumMap.set(sum, sumMap.get(sum) + 1);
    } else {
      sumMap.set(sum, 1);
    }
    i++;
  }
  return count;
};

const store = [3, 2, 1, -1, -2];
// const store = [0, 0, 0, 0];
// const store = [1, 1, 1, -1, -1];
const target = 2;
const result = subarraySum(store, target);
console.log('Result: ', result);