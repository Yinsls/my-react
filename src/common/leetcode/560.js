/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const total = new Map();
  let sum = 0;
  let length = 0;
  nums.unshift(0);
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    total.set(sum, i);

    const prev = total.get(sum - k);
    // console.log(i, prev);
    if (prev) {
      console.log(prev, i);
      length++;
    }
    if (sum === k) {
      console.log(prev, i);
      length++;
    }
    if (i === k) {
      length++;
    }
  }
  console.log(total);
  return length;
};

// const store = [-1, -1, -1, -2, -3, 1, 1, 1, 2, 3, -4, 1, 1];
const store = [-1, -1, 2, 1, 1, 1];
const total = 2;
const result = subarraySum(store, total);
console.log("Result: ", result);
