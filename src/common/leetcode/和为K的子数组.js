/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const total = new Map();
  let sum = 0;
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total.set(sum, i);

    const prev = total.get(sum - k);
    console.log(prev)
    if (prev) {
      length++;
    }
    if (sum === k) {
      length++;
    }
  }
  console.log(total)
  return length;
};

const store = [1, 1, 1, 1, 1];
const total = 2;
const result = subarraySum(store, total);
console.log('Result: ', result);